// utils.js

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function calculateChangeRate(oldFile, newFile) {
    const oldLines = oldFile.split('\n').length;
    const newLines = newFile.split('\n').length;
    return ((newLines - oldLines) / oldLines) * 100;
}

module.exports = { formatDate, calculateChangeRate };
