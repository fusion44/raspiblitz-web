{
  description = "A mobile-first responsive Web UI for the RaspiBlitz";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }: let
    name = "raspiblitz-web";

    systems =
      flake-utils.lib.eachDefaultSystem
      (system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        packages = {
          default = self.packages.${system}.${name};
          ${name} = pkgs.callPackage ./default.nix {};
        };

        devShells.default = pkgs.mkShell {
          inputsFrom = [self.packages.${system}.${name}];
          packages = with pkgs; [nodejs_22 alejandra];
        };
      });

    overlays.overlays = {
      default = final: prev: {
        ${name} = self.packages.${prev.stdenv.hostPlatform.system}.${name};
      };
    };

    module = {
      nixosModules.default = {
        pkgs,
        lib,
        config,
        ...
      }: {
        imports = [./modules/raspiblitz-web.nix];
        nixpkgs.overlays = [self.overlays.default];
      };
    };
  in
    systems // overlays // module;
}
