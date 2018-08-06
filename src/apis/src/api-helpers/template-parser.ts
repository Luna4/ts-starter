import { format as formatDate } from 'date-fns';

export enum CharacterType {
    Date = 'd',
    Currency = 'c',
    String = 's'
}

/**
 * Match expression after second colon.
 * Eg:
 * ```
 * matchExpression('date:d:YYYY-MM-DD');
 * // ['date:d:ddd DD MMM', 'ddd DD MMM']
 * ```
 */
function matchExpression(path: string): string | null {
    const matchResult = path.match(/.*?:.*?:(.*)/);
    if (matchResult) return matchResult[1];
    return null;
}

/**
 * Match character type between colon.
 * Eg:
 * ```
 * identifyType('date:d:YYYY-MM-DD');
 * // [':d:', 'd']
 * ```
 */
function identifyType(path: string): string {
    const matchResult = path.match(/\:(.*?)\:/);
    const characterType = matchResult ? matchResult[1] : CharacterType.String;
    if (!Object.values(CharacterType).includes(characterType)) {
        throw new Error(`${characterType} is not in CharacterType`);
    }
    return characterType;
}

/**
 * Get path value 
 */
function getPathValue<T>(path: string, obj: T): string {
    // get key
    const pathKey = path.indexOf(':') > 0 ? path.substr(0, path.indexOf(':')) : path;
    // get value by key
    const pathValue = pathKey.split('.').reduce((res, key) => res[key], obj);
    // identify type
    const characterType = identifyType(path);
    // get expression
    const expression = matchExpression(path);
    // format value
    if (characterType === CharacterType.Date && expression) {
        return formatDate(pathValue, expression);
    }
    return pathValue;
}

/**
 * Parse string literal template to string.
 * Example
 * ```
 * parseTpl('Hi ${name}, today is ${date:d:ddd DD MMM}.', {
 *   name: 'John',
 *   date: new Date('2018-08-06')
 * });
 * // Hi John, today is Mon 06 Aug.
 * ```
 */
export function parseTpl<T>(template: string, map: T): string {
    return template.replace(/\$\{.+?}/g, (match) => {
        const path = match.substr(2, match.length - 3).trim();
        return getPathValue(path, map);
    });
}
