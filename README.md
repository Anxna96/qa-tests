# Quality tests
The repository contains two types of tests for the application using the [SauceDemo]:
-  Automated tests (with Cypress)
-  Manual tests (documented with shootscreens)

## Project Structure
```
qa-tests/
├── cypress/
│   └── e2e/
│       └── login_spec.cy.js 
├── evidence_of_test_results/
│   ├── automated_Cypress/         # screenshots of the automatic tests
│   │   ├── T01_login_success.png
│   │   ├── T02_empty_fields.png
│   │   ├── T03_wrong_password.png
│   │   ├── T04_wrong_username.png
│   │   ├── T05_empty_username.png
│   │   └── T06_empty_password.png
│   ├── manual/                    # manual test screenshots
│   │   ├── T01_login_page.png
│   │   ├── T01_login_username_password.png
│   │   ├── T02_empty_username_password.png
│   │   ├── T03_wrong_password.png
│   │   ├── T04_wrong_username.png
│   │   ├── T05_empty_username.png
│   │   └── T06_empty_password.png
├── node_modules/ 
├── test-cases/
│   └── login_test_cases.md
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```
-----

# Automated Testing
1. The automated tests were implemented in JavaScript using the Cypress framework, which allows end-to-end testing of web applications. The tests were simulated  with the same scenarios defined for the manual tests, in order to guarantee consistent coverage.
During execution, images are automatically captured of each test and stored in the folder evidence_of_test_results/automated/.
2. To run the tests, it is necessary to install Node.js and run the following commands in the terminal: npm install, npx cypress run and npx cypress open.

# Manual tests
The manual tests were run using different login scenarios, such as the use of valid credentials, empty fields, wrong username or password, among others. The evidence from the manual tests consists of screenshots taken during the tests and is stored in the folder evidence_of_test_results/manual/.

### Test Cases
All the test scenarios are documented in the file test-cases/login_test_cases.md. For each test, the objective, the input data, the steps to follow and the expected result are described. The following list summarizes the tests performed:

-T01: Login with valid credentials
-T02: Login with empty username and password fields
-T03: Login with wrong password
-T04: Login with wrong username
-T05: Login with empty username
-T06: Login with empty password

The manual test cases are documented in the file test-cases/login_test_cases.md. While the automated tests can be found directly in the code (cypress/e2e/login_spec.cy.js)

