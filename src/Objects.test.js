const CustomLodash = require('../src/Objects');
const lib = CustomLodash.CustomLodash;


describe('omit test', function () {
    test('should return an object composed of the own and inherited enumerable property paths of object', () => {
        let obj = { 'a': 1, 'b': '2', 'c': 3 };
        let omit = ['a', 'c'];
    expect(lib.omit(obj, omit)).toEqual({ 'b': '2' });
    });
});

describe('omitBy tests', function () {
    test('should return the new object, when predicate return false', () => {
        let obj = { 'a': 1, 'b': '2', 'c': 3 };
        let predicate = (elem) => typeof elem == 'number';
    expect(lib.omitBy(obj, predicate)).toEqual({ 'b': '2' });
    });
});

describe('pick test', function () {
    test('should return new object composed of the picked object properties', () => {
        let obj = { 'a': 1, 'b': '2', 'c': 3 };
        let paths = ['a', 'c'];
    expect(lib.pick(obj, paths)).toEqual({ 'a': 1, 'c': 3 });
    });
});

describe('pickBy', function () {
    test('should return the new object composed of the object properties predicate returns truthy', () => {
        let obj = { 'a': 1, 'b': '2', 'c': 3 };
        let predicate = (e) => typeof e == 'number';
    expect(lib.pickBy(obj, predicate)).toEqual({ 'a': 1, 'c': 3 });
    });
});

describe('toPairs test', function () {
    test('should return the key-value pairs.', () => {
      let object = {a:1, b:2};
    expect(lib.toPairs(object)).toEqual([['a', 1], ['b', 2]]);
    });
  });

  