import { assert } from "chai";
import {
    createApiLogger,
    logError,
    logInfo,
    logWarn,
    LogOptions,
    dailyApiDetail,
    allTypeLogsOptions
} from "../src/index";
import { existsSync, readFileSync } from "fs";
import { getfileName } from "../src/create.file";

describe("Logging Functions", function () {

    it("logError should log an error message in terminal and in a newly created file according to LogOption", async function () {
        const errorMessage = "This is an error message";
        const logOptions: LogOptions = allTypeLogsOptions;

        await logError(errorMessage, logOptions);

        const logFileName = getfileName(logOptions);
        assert.isTrue(logFileContains(logFileName, errorMessage));
    });


    it("logInfo should log an info message in terminal and in a newly created file according to LogOption", async function () {
        const infoMessage = "This is an info message";
        const logOptions: LogOptions = allTypeLogsOptions;
        await logInfo(infoMessage, logOptions);

        const logFileName = getfileName(logOptions);
        assert.isTrue(logFileContains(logFileName, infoMessage));
    });


    it("logWarn should log a warning message in terminal and in a newly created file according to LogOption", async function () {
        const warningMessage = "This is a warning message";
        const logOptions: LogOptions = allTypeLogsOptions;

        await logWarn(warningMessage, logOptions);

        const logFileName = getfileName(logOptions);
        assert.isTrue(logFileContains(logFileName, warningMessage));
    });


    it("createApiLogger should log API details in a newly created file according to LogOption", async function () {
        const request = {
            method: "GET",
            url: "/api/resource",
            params: { id: 1 },
            query: { filter: "all" },
            headers: { "User-Agent": "Test" },
            body: { data: "test" },
        };
        const startTime = 0; 
        const logOptions: LogOptions = dailyApiDetail; 

        await createApiLogger(request, startTime, logOptions);

        const logFileName = getfileName(logOptions);
        const logContent = readLogFile(logFileName);

        assert.isTrue(logContent.includes("GET"));
        assert.isTrue(logContent.includes("/api/resource"));
    });
});


function logFileContains(logFileName: string, message: string): boolean {
    const logContent = readLogFile(logFileName);
    return logContent.includes(message);
}

function readLogFile(logFileName: string): string {
    if (existsSync(logFileName)) {
        return readFileSync(logFileName, "utf8");
    }
    return "";
}
