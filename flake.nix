# From https://www.reddit.com/r/NixOS/comments/1hhstg6/best_ways_to_manage_python_packages_with_lowest/
{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs =
    inputs@{
      self,
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        envWithScript =
          script:
          (pkgs.buildFHSEnv {
            name = "uv-env";
            targetPkgs =
              pkgs:
              (with pkgs; [
                python3
                python3Packages.pip
                python3Packages.virtualenv
                pythonManylinuxPackages.manylinux2014Package
                uv
                cmake
                ninja
                gcc
              ]);
            runScript = "${
              pkgs.writeShellScriptBin "runScript" (
                ''
                  set -e
                  test -d .venv || ${pkgs.uv}/bin/uv venv
                  test -f .python-version || ${pkgs.uv}/bin/uv init .
                  source .venv/bin/activate
                  uv add jupyterlab jupyterlab-lsp "python-lsp-server[all]" jupyterlab-vim ruff mypy pyright
                  set +e
                ''
                + script
              )
            }/bin/runScript";
          }).env;
      in
      {
        devShell = envWithScript "zsh";
      }
    );
}
