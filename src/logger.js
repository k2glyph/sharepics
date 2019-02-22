import {createLogger, format, transports} from "winston";

/**
 * LOG USAGE:
 * logger.log(LOGLEVEL, 'message/pattern', <values>);
 * logger.error('logging data');
 * logger.warn('logging data');
 * logger.info('logging data');
 * logger.verbose('logging data');
 * logger.debug('logging data');
 * logger.silly('logging data');
 */
export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.splat(),
        format.json(),
        format.prettyPrint(),
    ),
    transports: [
        new transports.Console()
    ]
});
