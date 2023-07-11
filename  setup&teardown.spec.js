import { describe } from "vitest";
import {test, afterEach, afterAll, beforeAll, beforeEach } from "vitest";


//  beforeAll -> beforeEach -> test -> afterEach -> beforeEach -> test -> afterEach
beforeAll( () => {
  console.log('before all')
})

test('first', () => {
  console.log('first')``
})

test('second', () => {
  console.log('second')
})

describe('sub', () => {
  beforeEach(() => {
    console.log('sub: beforeEach');
  })
  test('sub first', () => {
    console.log('sub: test-first');
  })
  test('sub second', () => {
    console.log('sub: second');
  })
  afterEach(() => {
    console.log('sub: afterEach');
  })
})

beforeEach(() => {
  console.log('beforeEach')
})

afterEach(() => {
  console.log('afterEach')
})

afterAll(() => {
  console.log('afterAll')
})