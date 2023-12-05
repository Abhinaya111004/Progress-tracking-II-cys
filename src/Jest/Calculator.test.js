import {add, sub } from './Calculator';
test('adds two numbers',()=> {
    expect(add(1,2)).toBe(3);
    expect(add(-1,1)).toBe(0);
    expect(add(-1,-2)).toBe(-3);
});
test('subtracts two numbers',()=>{
    expect(sub(3,2)).toBe(1);
    expect(sub(-1,1)).toBe(-2);
    expect(sub(0,5)).toBe(-5);
});