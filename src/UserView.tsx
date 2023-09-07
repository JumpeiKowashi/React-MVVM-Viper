import React, { useEffect } from "react";
import { createUserViewModel } from "./UserViewModel";

const UserView = () => {
  const vm = createUserViewModel();

  useEffect(() => {
    vm.action.getAll();
  }, []);

  return (
    <div>
      {vm.state.users.map((user, index) => (
        <p>{user.name}</p>
      ))}
      {vm.state.isLoading ? "aaa" : "bbb"}
      <button onClick={vm.action.addUser}>"ボタン"</button>
    </div>
  );
};

export default UserView;
