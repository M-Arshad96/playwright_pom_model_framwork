PlayWright POM Automation
A Page Object Model (POM) based test automation framework built using Playwright.

This project provides a clean structure for writing, organizing, and executing automated tests with support for reporting and configuration management.


⚡ Installation
Clone this repository:

git clone [https://github.com/M-Arshad96/PlayWright_POM_Automation.git](https://github.com/yourusername/PlayWright_POM_Automation.git)
cd PlayWright_POM_Automation

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

▶️ Usage
Run All Tests
To run all tests in headless mode across all configured browsers:

npx playwright test

Run Tests in Headed Mode
To watch the tests execute in a browser window:

npx playwright test --headed

Run a Specific Test File
To execute a single test file:

npx playwright test tests/RegisterDemo.spec.js

Run Tests with UI Mode
To open the Playwright UI for a better debugging experience:

npx playwright test --ui

⚙️ Configuration
All configuration is managed in playwright.config.js.

Key settings include:

baseURL → The base URL for the application under test.

timeout → Global test timeout in milliseconds.

reporter → Report format (e.g., html, json).

projects → Configurations for different browsers or devices (e.g., Chromium, Firefox, WebKit).

You can override configurations from the command line:

npx playwright test --project=chromium

📊 Reports
HTML Report
After the test run is complete, generate and view the built-in HTML report:

npx playwright show-report

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📜 License
This project is licensed under the MIT License – see the LICENSE file for details.
