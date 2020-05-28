# Protractor-via-Cucumber-Framework
This framework is basic implementation of Protractor using Cucumber Framework for Automation/Unit testing for Angular or non Angular applications using VS Code

## Table of contents

1. Overview
2. Pre-requisites
3. Implmentation steps


## IMPLEMENTATION STEPS

STEP 1: Create a folder in your file explorer
STEP 2: Open VS Code
STEP 3: Open the same folder that you created in your file explorer
STEP 4: Go to terminal in VS Code (Ctrl + Shift + ~) or you can see Terminal on the top menu
STEP 5: Run this command 
        npm init -y
STEP 6: You can see package.json is created in your project directory
STEP 7: Install Protractor globally and locally both
STEP 8: To install Protractor globally, Run this command 
        npm install -g protrator
STEP 9: To install Protractor locally, Run this command
        npm install protractor --save-dev
STEP 10: Update webdriver manager, Run this command
        webdriver-manager update
STEP 11: Run webdriver manager, Run this command
        webdriver-manager start
STEP 12: If you get any error in running the above commands, Run this
        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
        Run this only in case you are getting error
STEP 13: Create a file name as conf.js 
STEP 14: Create a folder name features in your project directory
STEP 15: Create a file name test.feature under features folder
STEP 16: Create a folder name specifications under features folder
STEP 17: Create a file name spec.js under specifications folder
STEP 18: Create a folder name reports under project directory
STEP 19: Create a folder name json under reports folder
STEP 20: Create a folder name CucumberReportDirectory under project directory
STEP 21: Create a folder name protractor_reports under project directory
STEP 22: Install cucuumber. Run this command
         npm install cucumber
STEP 23: Install protractor cucumber framework. Run this command
         npm install --save-dev protractor-cucumber-framework
STEP 24: Install other cucumber options as well
         npm install --save cucumber-pretty
         npm install cucumber-html-reporter --save-dev
         npm install protractor-cucumber-steps --save-dev
STEP 25: Install chai assertions. Run this command
         npm install chai chai-as-promised
STEP 26: Install Protractor HTML reporter. Run this command
         npm install protractor-beautiful-reporter --save-dev
STEP 27: Go feature file test.feature and write a testcase
         Feature: Demo Feature
            Scenario: Add two numbers
                Given I open calculator application
                When I add two numbers 2 and 3
                Then result should be correct
STEP 28: Run this command 
         protractor conf.js
STEP 29: You can see the specifications are undefined. You can copy Given, When, Then part and write in your specifications file.
STEP 30: Go to your specifications file spec.js and write Given, When, Then methods

---



