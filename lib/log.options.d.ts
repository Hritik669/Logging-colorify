export type LogOptions = {
    logPrefix: string;
    logExtension: string;
    logGrouping: 'daily' | 'monthly' | 'custom';
};
export declare const allTypeLogsOptions: LogOptions;
export declare const dailyError: LogOptions;
export declare const dailyInfo: LogOptions;
export declare const dailyWarn: LogOptions;
export declare const dailyApiDetail: LogOptions;
export declare const monthlyError: LogOptions;
export declare const monthlyInfo: LogOptions;
export declare const monthlyWarn: LogOptions;
export declare const monthlyApiDetail: LogOptions;
