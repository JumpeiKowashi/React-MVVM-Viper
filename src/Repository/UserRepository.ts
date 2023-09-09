import { User } from "../Model/User";

export interface UserRepository {
  getAll(): Promise<User[]>;
}

export class UserRepositoryImpl implements UserRepository {
  async getAll(): Promise<User[]> {
    const user1: User = {
      id: "111",
      name: "Alice",
    };
    const user2: User = {
      id: "222",
      name: "Bob",
    };
    const users = [user1, user2];
    return users;
  }
}
