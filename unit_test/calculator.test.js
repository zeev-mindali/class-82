const calculator = require ("./calculator");

describe('testing calculator arethmtic function',()=>{
    test('string with single number should result in the number itself',()=>{
        expect(calculator.add('1')).toBe(1);
    })
    
    test('two number 2,4 should give result 6',()=>{
        expect(calculator.add('2,4')).toBe(6);
    })
    
    test('four number 2,0,4,5 should give 11',()=>{
        expect(calculator.add('2,0,4,5')).toBe(11);
    })
    
    test('two numbers 6,3 divied should give 2',()=>{
        expect(calculator.div('6,3')).toBe(2);
    })
})

