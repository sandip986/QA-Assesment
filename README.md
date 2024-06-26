# Guru99 Insurance Testing

Welcome to the Guru99 Insurance Testing project repository. This project contains test scripts for various test cases related to the Guru99 Insurance application.

https://demo.guru99.com/insurance/v1/index.php

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Test Scripts](#test-scripts)


## Introduction

This repository contains the test scripts for the Guru99 Insurance application. The objective is to ensure the application meets the specified requirements and functions as expected.

## Project Structure


- **/test-cases/**: Contains subdirectories for different types of test cases.
  - **functional/**: Functional test cases.
    - `loginSuccess`
    - `logout`
    - `reuestQuotation`
    - `retriveQuotation`


- **/scripts/**: Contains directories for automated and manual test scripts.
  - **/automation/**: Contains scripts for automated testing using Cypress.
    - **cypress/**: Cypress configuration and test specifications.
      - **integration/**: Test specifications for integration tests.
        - `login.cy.js`
        - `logout.cy.js`
    
      - **support/**: Custom commands and support files for Cypress.
    



- **README.md**: This file, containing project information and instructions.
- **config.js**: The `cypress.config.js` file is used to configure various settings for Cypress test suite. This file allows you to customize the behavior of Cypress, define environment variables, set timeouts, and configure folders of test files.




- **test-cases/**: Directory containing the test cases for different testing types.
- **scripts/**: Directory containing the scripts for automated and manual testing.
- **.gitignore**: File specifying which files should be ignored by Git.
- **README.md**: This file.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:sandip986/QA-Assesment.git

2. **Browse to directory:**
   ```bash
   cd guru99-insurance-testing

3. **Install dependencies and run Cypress:**
    ```bash
    
    npm install

    npx cypress open

4. **Select script to run test:**
    ```bash
    Select the file


