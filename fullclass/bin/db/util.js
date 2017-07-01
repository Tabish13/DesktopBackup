var moment = require('moment');
// create the academic year and standard arrays


var academicArrays = exports.academicArrays = function() {
    var currentYear = moment().format('YYYY');

    //make current year month and day to 1st day 1st month
    currentYear = moment([currentYear]).format('YYYY');
    var oneMinusYear = moment([currentYear]).subtract(1, 'y').format('YYYY');
    var onePlusYear = moment([currentYear]).add(1, 'y').format('YYYY');
    var onePlusTwoYear = moment([currentYear]).add(2, 'y').format('YYYY');

    var academicYears = [
        oneMinusYear + '-' + currentYear,
        currentYear + '-' + onePlusYear,
        onePlusYear + '-' + onePlusTwoYear
    ];
    return academicYears;
}

var totalAcademicYears = exports.totalAcademicYears = function() {
    var jsonfile = require('jsonfile');
    var configPath = './bin/db/config.json';
    var config = jsonfile.readFileSync(configPath);
    var academicyears = config.academicyears;
    return academicyears;
}

var standardsArrays = exports.standardsArrays = function() {
    var jsonfile = require('jsonfile');
    var configPath = './bin/db/config.json';
    var config = jsonfile.readFileSync(configPath);
    var standards = config.standards;
    return standards;
}

var defaultSettings = exports.defaultSettings = function() {
    var jsonfile = require('jsonfile');
    var configPath = './bin/db/config.json';
    var config = jsonfile.readFileSync(configPath);
    var defaultSettings = config.default;
    return defaultSettings;
}
var isAcademicYear = exports.isAcademicYear = function(academicYears) {
        var academicArray = academicYears.split("-");
        if (academicArray.length === 2) {
            var startYear = academicArray[0];
            var endYear = academicArray[1];
            if ((startYear.length === 4) && (endYear.length === 4)) {
                return true;
            }

        }
        return false;
    }
    //console.log(academicArrays());
    //console.log(standardsArrays());
