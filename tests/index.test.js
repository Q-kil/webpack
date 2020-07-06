const {fab} = require('../src/js/index');
//import {fab} from '../src/js/index';

//1 2 3 4 5 6 7  8  9
//1 1 2 3 5 8 13 21 34

//测试项(test)
test('fab 1~9', ()=>{
  //expect(fab(3)).toBe(2);

  let arr=[0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  arr.forEach((item, index)=>{
    if(index<1)return;

    expect(fab(index)).toBe(item);
  });
});

test('fab 5', ()=>{
  expect(fab(5)).toBe(5);
});
