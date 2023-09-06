
import { run, test, it, expect, beforeAll, beforeEach, afterEach, afterAll} from './index.js'


beforeAll(() => {
  console.log('is--beforeAll--')
})

beforeEach(() => {
  console.log('beforEatch--')
})


test('apiTest', () => {
  console.log('test---')
  expect(2).toBe(2)
})

it('itTest', () => {1
  console.log('it---')
  expect('it').toBe('it')
})

test.only('toEqual', () => {
  const user = {
    name: 'xxp',
    fn: undefined,
    obje: {
      a: 'ddf'
    }
  }
  expect(user).toEqual({
    name: 'xxp',
    fn: undefined,
    obje: {
      a: 'dd'
    }
  })
})

afterEach(() => {
  console.log('afterEach--')
})

afterAll(() => {
  console.log('afterAll---')
})


run()