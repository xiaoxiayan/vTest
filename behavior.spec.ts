

type User = {
  id: number
  name: string
}

import { it, vi, expect } from 'vitest'


class Database {
  private dataStore: User[] = [];

  addUser(user: User): void {
    this.dataStore.push(user);
  }

  getUser(id: number): User | undefined {
    return this.dataStore.find((user) => user.id === id);
  }
}

class UserService {
  constructor(private database) { }
  createUser(name: string): User {
    const id = 110
    const newUser: User = { id, name }
    this.database.addUser(newUser)
    return newUser
  }
}



it("should create user", () => {
  const database = new Database()
  // 监听对象中的 fn\ key
  vi.spyOn(database, "addUser")
  const userService = new UserService(database)
  userService.createUser('aaa')
  userService.createUser('bbb')

  expect(database.addUser).toBeCalledTimes(2)

})

const apiClass = {
  upload () {
    return new Promise<number>((resolve, reject) => {
        resolve(1)
    })
  }
}

class Dialog {
  private name
  constructor(private apiClass) {

  }
  async openDialog  (name, data?, type?) {
    const r =  await this.apiClass.upload()
    return r + name
  }
}

it("should call updateFn", async () => {
  const clickBtn = true
  const API = apiClass
  const dialogClass = new Dialog(API)
  vi.spyOn(API, 'upload')
  console.log(API.upload)
  const res = await dialogClass.openDialog('xxp')
  expect(clickBtn).toBe(true)
  // expect(API.upload).toBeCalled()
  expect(res).toBe('1xxp')

})

it("should call updateFn", async () => {
  const clickBtn = true
  const API = apiClass
  const dialogClass = new Dialog(API)
  vi.spyOn(API, 'upload')
  dialogClass.openDialog


})

const getinputDom = (classname) => {
  const dom = document.getElementsByClassName(classname) as HTMLElement | unknown
  return '123'

}

it('to ui test', () => {
  vi.mock('element-puls')
  const apiData = {
    name: 1,
    age: 12,
    height: 111,
    like: 'eat'
  }
  const uiInput = [apiData.name, apiData.age, apiData.height, apiData.like]

  expect(uiInput[0]).toBe(1)



})
