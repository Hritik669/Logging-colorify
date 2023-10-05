export type LogOptions = {
    logPrefix: string;
    logExtension: string;
    logGrouping: 'daily' | 'monthly' | 'custom';
};

export const allTypeLogsOptions: LogOptions = {
    logPrefix: 'allTypeLogs',
    logExtension: 'log',
    logGrouping: 'daily',
};

export const dailyError: LogOptions ={
    logPrefix: 'error',
    logExtension: 'log',
    logGrouping: 'daily'
}

export const dailyInfo: LogOptions ={
    logPrefix: 'info',
    logExtension: 'log',
    logGrouping: 'daily'
}

export const dailyWarn: LogOptions ={
    logPrefix: 'warn',
    logExtension: 'log',
    logGrouping: 'daily'
}

export const dailyApiDetail: LogOptions ={
    logPrefix: 'API_Detail',
    logExtension: 'log',
    logGrouping: 'daily'
}

export const monthlyError: LogOptions ={
    logPrefix: 'error',
    logExtension: 'log',
    logGrouping: 'monthly'
}

export const monthlyInfo: LogOptions ={
    logPrefix: 'info',
    logExtension: 'log',
    logGrouping: 'monthly'
}

export const monthlyWarn: LogOptions ={
    logPrefix: 'warn',
    logExtension: 'log',
    logGrouping: 'monthly'
}

export const monthlyApiDetail: LogOptions ={
    logPrefix: 'API_Detail',
    logExtension: 'log',
    logGrouping: 'monthly'
}