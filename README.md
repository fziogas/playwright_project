# Playwright Project: Practice Automation for Basic Tests

This project is a beginner-level automation testing project using Playwright. It contains simple tests focused on login functionality.

## Project Description
I created this project to practice my skills in writing automated tests using Playwright. The project mainly tests login functionality, including valid and invalid login credentials, and some basic visual checks for the login page.

## How to Run the Tests
1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone or download this project to your local machine.
3. Open a terminal (I use PowerShell on Windows) and navigate to the project folder `playwright_project`.

### Install the necessary packages:
npm install

### Run tests:
npx playwright test

### Test Scenarios
1. Login with valid credentials: Tests if the user can log in successfully with correct credentials.
2. Login with invalid credentials: Tests if an error message appears when logging in with incorrect credentials.
3. Login with empty credentials: Tests if the system handles empty username and password fields properly.

## Tools Used 
1. Playwright: For writing and running automated tests.
2. Node.js: To run the Playwright tests.

## project structure
```playwright_project/
├── tests/
│   ├── login.test.js
│   ├── login-visual.test.js
│   ├── empty-credentials.test.js
├── validCredentials.js
├── invalidCredentials.js
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md```


