import UserContainer from "../User/UserContainer";
import { useEffect } from "react";

function UserPage() {
  useEffect(() => {
    document.title = "User Page";
  }, []);
  return <UserContainer />;
}

export default UserPage;
