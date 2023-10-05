export type LogOptions = {
    logPrefix: string;
    logExtension: string;
    logGrouping: 'daily' | 'monthly' | 'custom';
    customGroupingKey?: string;
};
export declare const allTypeLogsOptions: LogOptions;
export declare const dailyError: LogOptions;
export declare const dailyInfo: LogOptions;
export declare const dailyWarn: LogOptions;
export declare const dailyApiDetail: LogOptions;
