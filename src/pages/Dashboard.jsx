import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div className="container mx-auto">
      <h1> Welcome to your Dashboard {user.name}</h1>
      <Link
        className="text-gray-500 text-lg pt-4 underline hover:text-blue-500"
        to={"/dashboard/settings"}
      >
        Update account
      </Link>
    </div>
  );
}

export default Dashboard;
