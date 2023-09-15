import React from "react";
import { createUserViewModel } from "./UserViewModel";
import { Link } from "react-router-dom";

const UserView = () => {
  const vm = createUserViewModel();

  return (
    <div>
      <button onClick={vm.action.didTapButton}>"ボタン"</button>
      {vm.state.users.map((user, index) => (
        <p key={index.toString()}>{user.name}</p>
      ))}
      <>{vm.state.isLoading ? "true" : "false"}</>
      <Link to="/post">ポストへ</Link>
    </div>
  );
};

export default UserView;

// View > ViewModel > UseCase > Repository
