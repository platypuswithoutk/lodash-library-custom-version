const CustomLodash = require('../src/Arrays');
const lib = CustomLodash.CustomLodash;

describe('chunk tests', function() {
  test('should return the new array of chunks', () => {
    let array = ['a', 'b', 'c', 'd'];
    let nr = 2;
  expect(lib.chunk(array, nr)).toEqual([['a', 'b'], ['c', 'd']]);
  });
  test('should return correctly divide element', () => {
    let array = ['a', 'b', 'c', 'd'];
    let nr = 3; 
  expect(lib.chunk(array, nr)).toEqual([['a', 'b', 'c'], ['d']]);
  });
});

describe('compact test', function () {
  test('should return the new array of filtered values', () => {
    let array = [0, 1, false, 2, '', 3];
  expect(lib.compact(array)).toEqual([1, 2, 3]);
  })
})

describe('drop tests', function () {
  test('should return the slice of array with n elements dropped from the beginning', () => {
    let array = [1,2,3];
    let number = 2;
  expect(lib.drop(array, number)).toEqual([3]);
});
  test('should remove first element id only collection given', () => {
    let arr = [1,2,3,4];
  expect(lib.drop(arr)).toEqual([2,3,4]);
  });
});

describe('dropWhile tests', function () {
  test('should return the slice of array excluding elements dropped from the beginning', () => {
    let array = [1,2,3,0];
    let predicate = (e) => e <= 2;
  expect(lib.dropWhile(array, predicate)).toEqual([3,0])
  });
});

describe('take tests', function () {
  test('should return the slice of array', () => {
    let arrayToQuery = [1,2,3,4,5];
    let numberToTake = 2;
  expect(lib.take(arrayToQuery, numberToTake)).toEqual([1,2])
  });
});

describe('filter tests', function () {
  test('should filter out elements whose predicate return false', () => {
      let input = [0,1,2,3,4,5];
      let predicate = (o) => o < 3;
    expect(lib.filter(input, predicate)).toEqual([0,1,2]);
  });
  test('should filter out undefined objects', () => {
    let input = ['string', 'jsajmsk', 1,2,3, undefined, 0];
    let predicate = (o) => o !== undefined;
    expect(lib.filter(input, predicate)).toEqual(['string', 'jsajmsk', 1,2,3,0])
  });
});

describe('find test', function () {
    test('should return the first element when predicate return true', () => {
      let array = [5, 12, 8, 130, 44];
      let predicate = (e) => e > 20;
    expect(lib.find(array, predicate)).toEqual(130);
  });
});

describe('includes test', function () {
    test('should return true if value is found, false otherwise', () => {
      let arrayCollection = [1,2,3,4,5];
      let checkValue = 3;
    expect(lib.includes(arrayCollection, checkValue)).toEqual(true);
  });
});

describe('map tests', function () {
  test('should return the new mapped array', () => {
      let collection = [0,1,2,3]
      let iteratee = (e) => e * 2;
  expect(lib.map(collection,iteratee)).toEqual([0,2,4,6]);
  });
});

describe('zip test', function () {
  test('should return the new array of grouped elements.', () => {
    let array1 = [2,3,4];
    let array2 = [1,2,3];
    let array3 = [true, false, true];
    expect(lib.zip(array1, array2, array3)).toEqual([[2,1,true], [3,2, false], [4,3,true]])
  });
  test('should return empty array', () => {
    let array = [];
    expect(lib.zip(array)).toEqual([]);
  });
});


