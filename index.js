



// test it
// expect toBe
// test.only
// 提示通过/报错
// beforeAll beforeEach  afterAll afterEach
// describe
// 自动执行所有的测试脚本 *.

const testArr = []
const onlys = []
const beforeAlls = []
const beforeEachs = []
const afterAlls = []
const afterEachs = []
export const test = (name, callback) => {
  testArr.push({name, callback})
}

test.only = function (name, callback) {
  onlys.push({name, callback})
}


export function beforeAll (callback) {
  beforeAlls.push(callback)
}

export const it = test
export function expect(actual) {
  return {
    toBe(expected) {
      if (expected === actual) {
         console.log('ojbk')
      } else {
        throw new Error(`fail actual: ${actual} expected: ${expected}`)
      }
    },
    toEqual(expected) {
      if (deepEqual(expected, actual)) {
        console.log('ojbk')
      } else {
        throw new Error(`fail actual: ${JSON.stringify(actual)} expected: ${JSON.stringify(expected)}`)
      }
    }
  }
}

export function beforeEach (callback) {
  beforeEachs.push(callback)
}

export function afterAll (callback) {
  afterAlls.push(callback)
}

export function afterEach (callback) {
  afterEachs.push(callback)
}

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let index = 0; index < keys1.length; index++) {
    const val1 = object1[keys1[index]];
    const val2 = object2[keys2[index]];
    const areObjects = isObject(val1) && isObject(val2);
    if (areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}


export function run () {
  for (const befores of beforeAlls) {
      befores()
  }
  const suit = onlys.length > 0 ? onlys : testArr
  for (const test of suit) {
    for ( const beforeEachCallback of beforeEachs) {
      beforeEachCallback()
    }
    try {
      test.callback()
      console.log('ok---', test.name)
    } catch (error) {
      console.log(`fail: ${error}`)
    }
    for (const afterEachCallback of afterEachs) {
      afterEachCallback(1)
    }
  }
  for (const afterCallback of afterAlls) {
    afterCallback()
  }
}


