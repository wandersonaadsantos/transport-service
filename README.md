# transport-service

Transport services.

To build this project you will require: NodeJS - version 18 and Yarn

## Commands

Running local:

 - `yarn be4-install`: First installation of all the dependencies and setup husky
 - `yarn be4-commit`: Run all unit test and linter before commit to ensure will not break husky or CI/CD pipeline
 - `yarn start`: Run in develop mode
 - `yarn build`: Clean the build folder and builds all the static assets for the project within the /build folder
 - `yarn test`: Runs all the unit tests
 - `yarn lint:ts`: Runs the code linter on all tsx files
 - `yarn lint:scss`: Runs the code linter on all scss files

## Important:

I am using node-sass to enable SCSS modules, node-sass require a correctly version of Node to work properly:

NodeJS  | Minimum node-sass version | Node Module
--------|--------------------------|------------
Node 20 | 9.0+                     | 115
Node 19 | 8.0+                     | 111
Node 18 | 8.0+                     | 108
Node 17 | 7.0+,<8.0                | 102
Node 16 | 6.0+                     | 93
Node 15 | 5.0+,<7.0                | 88
Node 14 | 4.14+,<9.0               | 83

As my machine is currently running Node 18, my node-sass is config as 8.0.

## Git Hooks:

The project count with Husky and Lint Staged:
 * `pre-commit:` Run all scripts on lint-staged.
   * `lint-staged:` Run all linters and add to commit if something be fix.
 * `pre-push:` Run all unit tests.

## Project structure

 - `src`: TypeScript source code of the application
 - `public`: HTML template

## London Transport
### Introduction
This project is a ReactJS application designed to provide information about London's transport system. It allows users to view transport services, check for disruptions, and search for bike hire points.

### Environment Setup
#### Prerequisites
* Node.js `18+`
* yarn

### Features
#### DashBoard Page
- Existing Services Menu:
    - Retrieves and displays services using the TFL API.
    - Orders services by modeName and name.
    - Indicates if the service operates at night.
    - Indicates if the service is currently facing disruptions.
- Main Content Section:
    - Initially blank.
    - Displays disruption details when a service is selected.

* Service Details
- No Disruptions:
    - Displays "No service disruptions".
- With Disruptions:
    - Displays "Service currently suffering disruptions" followed by a list of disruption descriptions.
* "Cycle Hire" Option
- Search Box:
    - Allows users to search for bike hire points.
    - Displays results with id, commonName, and coordinates.
    - Displays "No bike points found for ‘X’" if no results are found.
    - Caches results to avoid repeated API calls for the same search term.

## Development URLs

- Home screen: `http://localhost:3000/`