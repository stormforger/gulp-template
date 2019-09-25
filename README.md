<img src="https://github.com/stormforger/gulp-template/workflows/Node%20CI/badge.svg"
            alt="GitHub Actions Badge">

This repository contains test case definitions, data and tooling to manage one or more complex StormForger test cases.

It uses [gulp](https://gulpjs.com/) to process configuration, scenarios and other input files to generate a full-featured StormForger test case.

## Structure

This is the basic directory structure:

* `cases` contains test cases
* `components` contains helpers and modules/components that are independent of a specific test case which are meant to be re-used and shared between test cases
* `data` contains test data (data sources)
* `dist` will contain the compiled output ready to be pushed to StormForger. To make sure you keep track on all changes, we recommend to check in generated files in `dist` into git as well.

Each directory in `cases` mirrors one test case at StormForger. Within `cases` there is `setup.js` which configures the test case in general. `cases/scenarios/` contains one more more [StormForger sessions](https://docs.stormforger.com/reference/). These scenarios can be [HAR recordings](https://docs.stormforger.com/guides/har-converter/) for example.

## Getting Started

1. Clone or [download](https://github.com/stormforger/gulp-template/archive/master.zip) this repository.
2. Using Docker
    1. Make sure you have Docker Compose installed, e.g. via `brew install docker-compose`
    2. Run `docker-compose build`
    3. Install node.js dependencies: `docker-compose run --rm npm install`
3. Without docker
    1. Make sure you have [Node.js installed](https://nodejs.org/en/download/) e.g. via [homebrew](https://brew.sh/) on macOS: `brew install node.js`
    2. Install required Node.js dependencies via `npm install`
    3. Install [`forge`](https://github.com/stormforger/cli), our command line tool: `brew install stormforger/forge/forge`

Now you can start working on your test cases!


## Usage (Local)

You can also use this repository with Docker Compose (see below).

### Build

To build your test cases, run

```terminal
npm run build
```

To run a specific case, run

```terminal
npm run build acme-shop
```

### Validate & Upload Test Cases

If you have not used our CLI tool before, you have to login once (note that this works differently with Docker Compose):

```terminal
forge login you@domain.com
```

You can then use our [command line tool](https://github.com/stormforger/cli) to validate and update your test cases automatically:

```terminal
forge test-case validate acme-inc dist/acme-shop.js
```

```terminal
forge test-case update acme-inc/shop dist/acme-shop.js
```

You can also use the `forge` CLI to integrate into your CI system by automatically updating your test cases on merges to master e.g.

## Usage (Docker Compose)

To use `forge` (our command line client), you need to have `STORMFORGER_JWT` set in `.env` (see `.env.example` for details).

```terminal
docker-compose run --rm forge ping
```

You should see a message like `PONG! Authenticated as foo@example.com`.

If not, you need to get a JWT token using

```terminal
docker-compose run --rm forge login foo@example.com --no-save
```

Copy the JWT token and place it in `.env`:

```
STORMFORGER_JWT=...
```

To update any locally cached docker image, run (maybe add `--no-cache`)

```terminal
docker-compose pull
```

### Validate & Upload Test Cases

In general, you can simply replace `npm` with `docker-compose run --rm npm` and `forge` with `docker-compose run --rm forge` and follow the usage description from above.

Examples:

```terminal
docker-compose run --rm npm run build
```

```terminal
docker-compose run --rm forge test-case ls acme-inc
```
