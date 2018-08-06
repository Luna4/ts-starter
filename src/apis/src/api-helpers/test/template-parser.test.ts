import { parseTpl } from '../template-parser';

describe('template-parsor', () => {
    it('can parse string', () => {
        const result = parseTpl('Hi ${name}, how are you?', {
            name: 'John'
        });
        expect(result).toEqual('Hi John, how are you?');
    });

    it('can format date', () => {
        const result = parseTpl('Today is ${date:d:ddd DD MMM}.', {
            date: new Date('2018-08-06')
        });
        expect(result).toEqual('Today is Mon 06 Aug.');
    });

    it('trigger error when character type is not s|c|d', () => {
        expect(() => {
            parseTpl('wrong type ${date:x:ddd DD MMM}', { date: new Date('2018-08-06')});
        }).toThrow('x is not in CharacterType');
    });
});