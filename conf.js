var cucumber = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var reporter = require('cucumber-html-reporter');
var cucumberReportDirectory = 'CucumberReportDirectory';
var jsonReportFile = cucumberReportDirectory + '/cucumber_report.json';

exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./feature/*.feature'],
  capabilities: {
    browserName: 'chrome',
  },

  cucumberOpts: {
    require: ['./feature/specifications/*.spec.js'],
    format: ['node_modules/cucumber-pretty'],
    format: 'json:./' + jsonReportFile,
    defaultTimeoutInterval: 30000,
  },

  onPrepare: function () {
    browser.manage().window().maximize();
    global.Given = cucumber.Given;
    global.When = cucumber.When;
    global.Then = cucumber.Then;
    global.expect = chai.expect;
  },

  onComplete: function () {
    var options = {
      theme: 'bootstrap',
      jsonFile: jsonReportFile,
      output: 'CucumberReportDirectory' + '/cucumber_html_report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        Browser: 'Chrome  54.0.2840.98',
        Platform: 'Windows 10',
        Parallel: 'Scenarios',
        Executed: 'Local',
      },
    };

    reporter.generate(options);
  },
};
