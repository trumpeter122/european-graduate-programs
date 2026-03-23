## About

This is a personal, informal project for the use of my own and my friends'. It contains data on graduate (Master's) programs mostly in CS and Cog-Sci in European countries, mainly Germany, with other information relevant to applying to them.

Expect the data to be incomplete and incorrect.

```
.
├── data.py # Where the data live  
├── flake.lock
├── flake.nix 
├── main.ipynb # Which to run
├── models.py # Where the types, constants, and classes live
├── pyproject.toml
├── ruff.toml
├── README.md
└── uv.lock
```

## How to Run

Install the packages following `pyproject.toml`. Ignore `flake.nix` if you are not on NixOS, as it is not for packaging but for setting up a development environment with needed libraries.
