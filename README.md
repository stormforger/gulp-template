This repository contains a template project that can be used to manage one or more complex StormForger test cases.

It uses [gulp](https://gulpjs.com/) to process configuration, scenarios and other input files to generate a full-featured StormForger test case.

## Structure

This is the basic directory structure:

* `cases` contain test cases
* `components` contain helpers and modules/components that are independent of a specific test case which are meant to be re-used.
* `dist` will contain the compiled output

Each directory in `cases` mirrors one test case at StormForger. Within `cases` there is `setup.js` which configures the test case in general. `cases/scenarios/` contains one more more [StormForger sessions](https://docs.stormforger.com/reference/). These scenarios can be [HAR recordings](https://docs.stormforger.com/guides/har-converter/) for example.

`components/` are meant to keep scenario-independent helpers that can be re-used and shared between test cases.

`dist/` is where the final test cases will be rendered to. To make sure you keep track on all changes, we recommend to check in generated files in `dist` into git as well.


## Getting Started

1. Clone or [download](https://github.com/stormforger/gulp-template/archive/master.zip) this repository.
1. Make sure you have [Node.js installed](https://nodejs.org/en/download/) e.g. via [homebrew](https://brew.sh/) on macOS: `brew install node.js`.
1. Install required Node.js dependencies via `npm install`.

Now you can start working on your test cases!


## Usage

To build your test case, run

```terminal
npm run build
```


## Next Steps

Use our [command line tool](https://github.com/stormforger/cli) to validate and update your test cases automatically:

```terminal
forge test-case validate acme-inc dist/acme-shop.js
```

```terminal
forge test-case update acme-inc/shop dist/acme-shop.js
```

You can also use the `forge` CLI to integrate into your CI system by automatically updating your test cases on merges to master e.g.
