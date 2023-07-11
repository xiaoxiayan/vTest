import { expect, it } from "vitest";

it('toBe', () => {
  const user = {
    name: 'xxp'
  }
  expect(user.name).toBe('xxp')
})


it.only('toEqual', () => {
  // 对比对象
  const user = {
    name: 'xxp',
    fn: undefined,
    obje: {
      a: 'dd'
    }
  }
  expect(user).toEqual({
    fn: undefined, name: 'xxp', obje: {
      a: 'dd'
    }
  })
})

it('toBeTruthy', () => {
  // 只需要返回真值， 就是有
  expect(1).toBeTruthy()
  expect(true).toBeTruthy()
  expect('123').toBeTruthy()
})

it('toBefalsy', () => {
  expect(0).toBeFalsy()
  expect(false).toBeFalsy()
  expect('').toBeFalsy()
})

it('toContain', () => {
  // 数组或者 string 中是否有
  const item1 = {
    name: 'x'
  }
  const item2 = {
    name: 'd'
  }
  const item3 = {
    name: 'f'
  }

  const list = [item1, item2]

  expect(list).toContain(item1)
  // expect(list).toContain(item3)
  expect('<div>xdd</div>').toContain('xd')

})

it('toThrow', () => {
  function getName(name) {
    if (typeof name !== 'string') {
      throw new Error('error name ')
    }
    return 'hei'
  }
  expect(() => {
    getName(111)
  }).toThrow()
})
