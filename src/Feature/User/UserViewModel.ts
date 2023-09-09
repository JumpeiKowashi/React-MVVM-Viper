import { User } from "../../Model/User";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/Store";
import { UserUseCase, UserUseCaseImpl } from "./UserUseCase";
import { UserRepositoryImpl } from "../../Repository/UserRepository";
import { ViewModel } from "../../Model/ViewModel";

type UserState = {
  users: User[];
  isLoading: boolean;
};

type UserAction = {
  didTapButton(): void;
};

export const UserViewModel = (
  userUseCase: UserUseCase
): ViewModel<UserState, UserAction> => {
  const users = useSelector((state: RootState) => state.usersReducer.users);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getAll();
    return () => {};
  }, []);

  const getAll = async () => {
    if (users.length > 0) {
      return;
    }
    await userUseCase.getAll();
  };

  const didTapButton = () => {
    const user: User = {
      id: "333",
      name: "Chris",
    };
    userUseCase.addUser(user);
  };

  return {
    state: {
      users,
      isLoading,
    },
    action: {
      didTapButton,
    },
  };
};

export const createUserViewModel = () => {
  const repository = new UserRepositoryImpl();
  const useCase = new UserUseCaseImpl(repository);
  return UserViewModel(useCase);
};
