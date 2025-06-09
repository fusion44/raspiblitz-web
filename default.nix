{
  fetchFromGitHub,
  pkgs,
}: let
  name = "raspiblitz-web";
in
  pkgs.buildNpmPackage
  {
    pname = "${name}";
    version = "1.4.0-dev";
    src = fetchFromGitHub {
      owner = "raspiblitz";
      repo = "raspiblitz-web";
      rev = "173217efd7ed59d452fa274793d3335a3b47f9d0";
      sha256 = "sha256-HCxk427goznzCn7vzPO5VPQ90ULqsaknpTos+CB7+eQ=";
    };

    npmDepsHash = "sha256-J01VRjUy7ldVRzqkuPrQSGGY7p6WgsF7olva4GTj+O4=";
    buildInputs = [pkgs.nodejs_22];
    preBuild = ''
      sed -i "s(const BACKEND_SERVER = "http://localhost:8000";(const BACKEND_SERVER = "http://127.0.0.1";(" vite.config.ts
    '';

    installPhase = ''
      mkdir $out
      npm run build
      cp -r build/* $out
    '';
  }
