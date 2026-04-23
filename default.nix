{pkgs, ...}: let
  name = "raspiblitz-web";
in
  pkgs.buildNpmPackage {
    pname = name;
    version = "1.4.0-dev";

    # Build this repo's own checkout. Only npmDepsHash needs updating
    # when package-lock.json changes; the source is always what the
    # consumer's flake input resolves to.
    src = ./.;

    npmDepsHash = "sha256-7ngNSaifITfA5dZq4o1J8JX0duhq54mQZrGzxNYDdFw=";
    buildInputs = [pkgs.nodejs_22];

    # The frontend is built with BACKEND_SERVER hard-coded into the
    # bundle. Pin it to loopback so the SPA reaches blitz-api through
    # the same nginx vhost.
    preBuild = ''
      sed -i 's|const BACKEND_SERVER = "http://localhost:8000";|const BACKEND_SERVER = "http://127.0.0.1";|' vite.config.ts
    '';

    installPhase = ''
      mkdir $out
      npm run build
      cp -r build/* $out
    '';
  }
