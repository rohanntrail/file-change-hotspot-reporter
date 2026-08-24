const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const analyzeChanges = () => {
    try {
        const output = execSync('git log --name-only --pretty=format:').toString();
        const fileChanges = output.split('\n').filter(Boolean);
        const changeCount = {};

        fileChanges.forEach(file => {
            changeCount[file] = (changeCount[file] || 0) + 1;
        });

        const interestingFiles = Object.keys(changeCount).map(file => ({ file, count: changeCount[file] }));
        interestingFiles.sort((a, b) => b.count - a.count);

        fs.writeFileSync(path.join(__dirname, 'report.json'), JSON.stringify(interestingFiles, null, 2));
        console.log('Report generated: report.json');
    } catch (error) {
        console.error('Error during analysis:', error.message);
    }
};

analyzeChanges();
