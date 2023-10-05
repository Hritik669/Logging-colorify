import { LogOptions, allTypeLogsOptions, dailyApiDetail, dailyError, dailyInfo, dailyWarn, monthlyApiDetail, monthlyError, monthlyInfo, monthlyWarn } from './log.options';
declare function logError(msg: string, options?: LogOptions): Promise<void>;
declare function logInfo(msg: string, options?: LogOptions): Promise<void>;
declare function logWarn(msg: string, options?: LogOptions): Promise<void>;
declare function createApiLogger(req: any, startTime?: number, options?: LogOptions): Promise<void>;
export { logError, logInfo, logWarn, createApiLogger, LogOptions, monthlyApiDetail, monthlyError, monthlyInfo, monthlyWarn, dailyApiDetail, dailyError, dailyInfo, dailyWarn, allTypeLogsOptions };
