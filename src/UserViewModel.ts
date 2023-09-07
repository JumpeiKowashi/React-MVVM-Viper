import { User } from "./User";
import { useState } from "react";
import { UserUseCase, UserUseCaseImpl } from "./UserUseCase";
import { UserRepositoryImpl } from "./UserRepository";

type ViewModel<State, Action> = {
  state: State;
  action: Action;
};

type UserState = {
  users: User[];
  isLoading: boolean;
};

type UserAction = {
  getAll(): Promise<void>;
  addUser(): Promise<void>;
};

export const UserViewModel = (
  userUseCase: UserUseCase
): ViewModel<UserState, UserAction> => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAll = async () => {
    setUsers(await userUseCase.getAll());
  };

  const addUser = async () => {
    const user: User = {
      id: "333",
      name: "Chris",
    };
    setUsers([...users, user]);
  };

  return {
    state: {
      users,
      isLoading,
    },
    action: {
      getAll,
      addUser,
    },
  };
};

export const createUserViewModel = () => {
  const repository = new UserRepositoryImpl();
  const useCase = new UserUseCaseImpl(repository);
  return UserViewModel(useCase);
};
