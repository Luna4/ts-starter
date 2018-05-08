// import { flatten } from '../src/common/util';

const { flatten } = require('../src/common/util')
const array = [1, 2, 4, [3, 5], [6, 7, 8]];

const flattened = flatten(array);

console.log(flattened);