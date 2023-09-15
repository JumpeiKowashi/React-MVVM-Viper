import { User } from "../../Model/User";
import { RootState } from "../../Redux/Store";
import { addUsers, addUser } from "../../Redux/UserSlice";
import { UserRepository } from "../../Repository/UserRepository";
import { useDispatch, useSelector } from "react-redux";

export interface UserUseCase {
  getAll(): Promise<void>;
  addUser(user: User): void;
}

export class UserUseCaseImpl implements UserUseCase {
  users = useSelector((state: RootState) => {
    return state.usersReducer.users;
  });
  dispatch = useDispatch();

  readonly userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAll(): Promise<void> {
    const users = await this.userRepository.getAll();
    this.dispatch(addUsers(users));
  }

  addUser(user: User): void {
    this.dispatch(addUser(user));
  }
}
