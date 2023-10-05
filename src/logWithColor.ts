import { colors, bgColors } from './color';


export async function logWithColor(msg: string, color: string, bgColor?: string) {
    const colorCode = colors[color];
    const bgColorCode = bgColors[bgColor || 'black'];

    const timestamp = new Date().toLocaleString();
    const logMessage = `[${timestamp}] ${msg}`;

    if (colorCode && bgColorCode) {
        console.log(`\x1b[${bgColorCode};${colorCode}m${logMessage}\x1b[0m`);
    } else if (colorCode) {
        console.log(`\x1b[${colorCode}m${logMessage}\x1b[0m`);
    } else {
        console.log(logMessage);  
    }

    return logMessage;
}