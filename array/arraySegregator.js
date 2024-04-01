"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySegregator = void 0;
var arraySegregator = function (data) {
    var _a;
    var results = {};
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        switch (typeof item) {
            case 'number':
                if (item === Math.floor(item)) {
                    (results.integers || (results.integers = [])).push(item);
                }
                else {
                    (results.floats || (results.floats = [])).push(item);
                }
                break;
            case 'string':
                (results.strings || (results.strings = [])).push(item);
                break;
            case 'boolean':
                (results.booleans || (results.booleans = [])).push(item);
                break;
            case 'object':
                if (item === null) {
                    (results.objects || (results.objects = [])).push(item);
                }
                else if (Array.isArray(item)) {
                    (_a = (results.objects || (results.objects = []))).push.apply(_a, item);
                }
                else {
                    (results.objects || (results.objects = [])).push(item);
                }
                break;
            case 'undefined':
                (results.undefineds || (results.undefineds = [])).push(item);
                break;
        }
    }
    return results;
};
exports.arraySegregator = arraySegregator;
