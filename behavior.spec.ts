

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
  console.log(database.addUser)
  expect(database.addUser).toBeCalled()

})
