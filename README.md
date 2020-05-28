# Protractor-via-Cucumber-Framework

This framework is basic implementation of Protractor using Cucumber Framework for Automation/Unit testing for Angular or non Angular applications using VS Code

## Table of contents

1. Overview
2. Pre-requisites
3. Extensions for VS Code
4. Implmentation steps

---

## EXTENSIONS FOR VS CODE

1. Cucumber(Gherkin) plugin
2. JavaScript(ES6) code snippets
3. npm support for vs code
4. Beautify
5. Code runner
6. Protractor snippets

## IMPLEMENTATION STEPS

1. Create a folder in your file explorer
2. Open VS Code
3. Open the same folder that you created in your file explorer
4. Go to terminal in VS Code (Ctrl + Shift + ~) or you can see Terminal on the top menu
5. Run this command
   npm init -y
6. You can see package.json is created in your project directory
7. Install Protractor globally and locally both
8. To install Protractor globally, Run this command: "npm install -g protrator"
9. To install Protractor locally, Run this command: "npm install protractor --save-dev"
10. Update webdriver manager, Run this command: "webdriver-manager update"
11. Run webdriver manager, Run this command: "webdriver-manager start"
12. If you get any error in running the above commands, Run this "Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted"
    NOTE: Run this only in case you are getting error
13. Create a file name as conf.js
14. Create a folder name features in your project directory
15. Create a file name test.feature under features folder
16. Create a folder name specifications under features folder
17. Create a file name spec.js under specifications folder
18. Create a folder name reports under project directory
19. Create a folder name json under reports folder
20. Create a folder name CucumberReportDirectory under project directory
21. Install cucuumber. Run this command: "npm install cucumber"
22. Install protractor cucumber framework. Run this command: "npm install --save-dev protractor-cucumber-framework"
23. Install other cucumber options as well:
    1. npm install --save cucumber-pretty
    2. npm install cucumber-html-reporter --save-dev
    3. npm install protractor-cucumber-steps --save-dev
24. Install chai assertions. Run this command: "npm install chai chai-as-promised"
25. Install Protractor HTML reporter. Run this command: "npm install protractor-beautiful-reporter --save-dev"
26. Go feature file test.feature and write a testcase
27. Run this command: "npm test"
28. You can see the specifications are undefined. You can copy Given, When, Then part and write in your specifications file.
29. Go to your specifications file spec.js and write Given, When, Then methods

---
