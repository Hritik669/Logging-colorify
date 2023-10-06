import { logWithColor } from './logWithColor';
import { getLogFileName, writeToLogFile, getClientIP, getfileName } from './create.file';
import {LogOptions, allTypeLogsOptions, dailyApiDetail, dailyError, dailyInfo,
     dailyWarn, monthlyApiDetail, monthlyError, monthlyInfo, monthlyWarn} from './log.options';


async function logError(msg: string, options: LogOptions = allTypeLogsOptions) {
    const logFileName = getfileName(options)
    const logMessage = await logWithColor(msg, 'red', 'white');
    await writeToLogFile(logMessage, logFileName);
}

async function logInfo(msg: string, options: LogOptions = allTypeLogsOptions) {
    const logMessage = await logWithColor(msg, 'blue', 'white');
    const logFileName = getfileName(options)
    await writeToLogFile(logMessage, logFileName);
}


async function logWarn(msg: string, options: LogOptions = allTypeLogsOptions) {
    const logMessage = await logWithColor(msg, 'yellow', 'black');
    const logFileName = getfileName(options)
    await writeToLogFile(logMessage, logFileName);
}

async function createApiLogger(req: any, startTime?: number, options: LogOptions = dailyApiDetail) {

    const logData = {
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

    try {
        const clientIP = getClientIP(req);
        logData.Timestamp = new Date().toISOString();
        logData.Method = req.method;
        logData.Path = req.url;
        logData.RouteParams = req.params;
        logData.QueryParams = req.query || {};
        logData.Headers = req.headers;
        logData.Body = req.body || req.payload || {};
        logData.ClientIP = clientIP;

        if (typeof startTime === 'number') {
            const endTime = performance.now();
            const timeDifference = endTime - startTime;
            logData.TimeDifference = `The time difference is ${timeDifference} milliseconds.`;
        } else {
            logData.TimeDifference = 'startTime is required for the timeDifference';
        }

        const logEntry = JSON.stringify(logData, null, 2);
        const logFileName = getfileName(options)

        await writeToLogFile(logEntry, logFileName);
    } catch (error: any) {
        logData.Error = error.message;
        const errorLogFileName = await getLogFileName('api_error', 'log');
        const errorLogEntry = JSON.stringify(logData, null, 2);
        await writeToLogFile(errorLogEntry, errorLogFileName);
    }
}

export {
    logError, logInfo, logWarn, createApiLogger, LogOptions, monthlyApiDetail, monthlyError,
    monthlyInfo, monthlyWarn, dailyApiDetail, dailyError, dailyInfo, dailyWarn ,allTypeLogsOptions
}
