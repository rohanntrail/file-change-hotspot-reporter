// reporter.js

class Reporter {
    constructor() {
        this.reports = [];
    }

    addReport(report) {
        this.reports.push(report);
    }

    generateReport() {
        return this.reports.map(report => `File: ${report.file}, Changes: ${report.changes}`).join('\n');
    }

    clearReports() {
        this.reports = [];
    }
}

module.exports = Reporter;
