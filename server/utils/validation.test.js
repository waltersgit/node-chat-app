/**
 * Created by peter on 2018/1/8.
 */
const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', ()=> {
        var res = isRealString(98);
        expect(res).toBe(false);
    })
    it('should reject string with only spaces', () => {
        var res = isRealString('  ');
        expect(res).toBe(false);
    })
    it('should allow string with non-space charecters', () => {
        var res = isRealString('  Peter');
        expect(res).toBe(true);
    })
})