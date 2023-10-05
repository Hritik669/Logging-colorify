import { LogOptions } from './log.options';
export declare function getLogFileName(prefix: string, extension: string): Promise<string>;
export declare function writeToLogFile(msg: string, filename: string): Promise<void>;
export declare function getClientIP(request: any): any;
export declare function getfileName(options: LogOptions): string;
