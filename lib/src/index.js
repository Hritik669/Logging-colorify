"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyWarn = exports.dailyInfo = exports.dailyError = exports.dailyApiDetail = exports.createApiLogger = exports.logWarn = exports.logInfo = exports.logError = void 0;
var logWithColor_1 = require("./logWithColor");
var create_file_1 = require("./create.file");
var log_options_1 = require("./log.options");
Object.defineProperty(exports, "dailyApiDetail", { enumerable: true, get: function () { return log_options_1.dailyApiDetail; } });
Object.defineProperty(exports, "dailyError", { enumerable: true, get: function () { return log_options_1.dailyError; } });
Object.defineProperty(exports, "dailyInfo", { enumerable: true, get: function () { return log_options_1.dailyInfo; } });
Object.defineProperty(exports, "dailyWarn", { enumerable: true, get: function () { return log_options_1.dailyWarn; } });
function logError(msg, options) {
    if (options === void 0) { options = log_options_1.allTypeLogsOptions; }
    return __awaiter(this, void 0, void 0, function () {
        var logPrefix, logExtension, logGrouping, customGroupingKey, logMessage, logFileName, currentDate, year, month, day;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logPrefix = options.logPrefix, logExtension = options.logExtension, logGrouping = options.logGrouping, customGroupingKey = options.customGroupingKey;
                    return [4 /*yield*/, (0, logWithColor_1.logWithColor)(msg, 'red', 'white')];
                case 1:
                    logMessage = _a.sent();
                    if (logGrouping === 'custom' && customGroupingKey) {
                        logFileName = "".concat(logPrefix, "_").concat(customGroupingKey, ".").concat(logExtension);
                    }
                    else {
                        currentDate = new Date();
                        year = currentDate.getFullYear();
                        month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
                        day = currentDate.getDate().toString().padStart(2, '0');
                        if (logGrouping === 'monthly') {
                            logFileName = "".concat(logPrefix, "_").concat(year, "-").concat(month, ".").concat(logExtension);
                        }
                        else {
                            logFileName = "".concat(logPrefix, "_").concat(year, "-").concat(month, "-").concat(day, ".").concat(logExtension);
                        }
                    }
                    return [4 /*yield*/, (0, create_file_1.writeToLogFile)(logMessage, logFileName)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.logError = logError;
function logInfo(msg, options) {
    if (options === void 0) { options = log_options_1.dailyInfo; }
    return __awaiter(this, void 0, void 0, function () {
        var logPrefix, logExtension, logGrouping, customGroupingKey, logMessage, logFileName, currentDate, year, month, day;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logPrefix = options.logPrefix, logExtension = options.logExtension, logGrouping = options.logGrouping, customGroupingKey = options.customGroupingKey;
                    return [4 /*yield*/, (0, logWithColor_1.logWithColor)(msg, 'blue', 'white')];
                case 1:
                    logMessage = _a.sent();
                    if (logGrouping === 'custom' && customGroupingKey) {
                        logFileName = "".concat(logPrefix, "_").concat(customGroupingKey, ".").concat(logExtension);
                    }
                    else {
                        currentDate = new Date();
                        year = currentDate.getFullYear();
                        month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
                        day = currentDate.getDate().toString().padStart(2, '0');
                        if (logGrouping === 'monthly') {
                            logFileName = "".concat(logPrefix, "_").concat(year, "-").concat(month, ".").concat(logExtension);
                        }
                        else {
                            logFileName = "".concat(logPrefix, "_").concat(year, "-").concat(month, "-").concat(day, ".").concat(logExtension);
                        }
                    }
                    return [4 /*yield*/, (0, create_file_1.writeToLogFile)(logMessage, logFileName)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.logInfo = logInfo;
function logWarn(msg, options) {
    if (options === void 0) { options = log_options_1.dailyInfo; }
    return __awaiter(this, void 0, void 0, function () {
        var logPrefix, logExtension, logGrouping, customGroupingKey, logMessage, logFileName, currentDate, year, month, day;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logPrefix = options.logPrefix, logExtension = options.logExtension, logGrouping = options.logGrouping, customGroupingKey = options.customGroupingKey;
                    return [4 /*yield*/, (0, logWithColor_1.logWithColor)(msg, 'yellow', 'black')];
                case 1:
                    logMessage = _a.sent();
                    if (logGrouping === 'custom' && customGroupingKey) {
                        logFileName = "".concat(logPrefix, "_").concat(customGroupingKey, ".").concat(logExtension);
                    }
                    else {
                        currentDate = new Date();
                        year = currentDate.getFullYear();
                        month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
                        day = currentDate.getDate().toString().padStart(2, '0');
                        if (logGrouping === 'monthly') {
                            logFileName = "".concat(logPrefix, "_").concat(year, "-").concat(month, ".").concat(logExtension);
                        }
                        else {
                            logFileName = "".concat(logPrefix, "_").concat(year, "-").concat(month, "-").concat(day, ".").concat(logExtension);
                        }
                    }
                    return [4 /*yield*/, (0, create_file_1.writeToLogFile)(logMessage, logFileName)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.logWarn = logWarn;
function createApiLogger(req, startTime, options) {
    if (options === void 0) { options = log_options_1.dailyApiDetail; }
    return __awaiter(this, void 0, void 0, function () {
        var logData, timestamp, clientIP, endTime, timeDifference, logEntry, logFileName, error_1, errorLogFileName, errorLogEntry;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logData = {
                        Timestamp: '',
                        Method: '',
                        Path: '',
                        RouteParams: {},
                        QueryParams: {},
                        Headers: {},
                        Body: {},
                        ClientIP: '',
                        TimeDifference: '',
                        Error: null
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 7]);
                    timestamp = new Date();
                    clientIP = (0, create_file_1.getClientIP)(req);
                    logData.Timestamp = timestamp.toISOString();
                    logData.Method = req.method;
                    logData.Path = req.url;
                    logData.RouteParams = req.params;
                    logData.QueryParams = req.query || {};
                    logData.Headers = req.headers;
                    logData.Body = req.body || req.payload || {};
                    logData.ClientIP = clientIP;
                    if (typeof startTime === 'number') {
                        endTime = performance.now();
                        timeDifference = endTime - startTime;
                        logData.TimeDifference = "The time difference is ".concat(timeDifference, " milliseconds.");
                    }
                    else {
                        logData.TimeDifference = 'startTime is required for the timeDifference';
                    }
                    logEntry = JSON.stringify(logData, null, 2);
                    return [4 /*yield*/, (0, create_file_1.getLogFileName)('api_detail', 'log')];
                case 2:
                    logFileName = _a.sent();
                    return [4 /*yield*/, (0, create_file_1.writeToLogFile)(logEntry, logFileName)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 4:
                    error_1 = _a.sent();
                    logData.Error = error_1.message;
                    return [4 /*yield*/, (0, create_file_1.getLogFileName)('api_error', 'log')];
                case 5:
                    errorLogFileName = _a.sent();
                    errorLogEntry = JSON.stringify(logData, null, 2);
                    return [4 /*yield*/, (0, create_file_1.writeToLogFile)(errorLogEntry, errorLogFileName)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.createApiLogger = createApiLogger;
