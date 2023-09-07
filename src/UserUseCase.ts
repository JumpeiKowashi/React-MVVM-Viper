import { User } from "./User";
import { UserRepository } from "./UserRepository";

export interface UserUseCase {
  getAll(): Promise<User[]>;
}

export class UserUseCaseImpl implements UserUseCase {
  readonly userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }
}
