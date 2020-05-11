"use strict";
exports.__esModule = true;
var ArrayOperation = /** @class */ (function () {
    function ArrayOperation(strs) {
        this.strs = strs;
    }
    ArrayOperation.prototype.sortArray = function () {
        var sortedStringArray = this.strs.sort(this.sortStrings);
        return sortedStringArray;
    };
    ArrayOperation.prototype.reverseArray = function () {
        return this.strs.reverse();
    };
    ArrayOperation.prototype.sortStrings = function (str1, str2) {
        if (str1.length > str2.length)
            return 1;
        else if (str1.length === str2.length)
            return 0;
        else
            return -1;
    };
    return ArrayOperation;
}());
exports.ArrayOperation = ArrayOperation;
var opr = new ArrayOperation(["angualar", "java", "csharp", "python"]);
console.log("Sorted Array of String: " + opr.sortArray());
console.log("Reverse Array of String: " + opr.reverseArray());
