"use strict";
exports.__esModule = true;
var StringOperation = /** @class */ (function () {
    function StringOperation(str) {
        this.str = str;
    }
    StringOperation.prototype.findOccurences = function (ch) {
        var str1 = this.str.split('').filter(function (x) { return x == ch; });
        var indices = [];
        this.str.split('').filter(function (v, i) {
            if (v == ch)
                indices.push(i);
        });
        return { "occurances": str1.length, "indices": indices };
    };
    StringOperation.prototype.findNumberOfStatements = function () {
        return this.str.split('.').length;
    };
    StringOperation.prototype.convertStatement = function () {
        var str2 = this.str.split('.');
        var str3 = "";
        str2.forEach(function (element) {
            str3 += element.charAt(0).toUpperCase() + element.slice(1) + ".";
        });
        return str3;
    };
    return StringOperation;
}());
exports.StringOperation = StringOperation;
var strOpr = new StringOperation("define a string variable with data of 100 characheters in it and perform the following operation on the data.find out the indexes and occurances of character 'a' in it.findout number of statements in the string.convert the first character of the statement in Upper case.");
console.log("Find occurences: " + strOpr.findOccurences('a').occurances + ", Find Indices: " + strOpr.findOccurences('a').indices);
console.log("Find number of statements: " + strOpr.findNumberOfStatements());
console.log("Convert statements: " + strOpr.convertStatement());
