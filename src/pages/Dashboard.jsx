import { Link } from "react-router";

function Dashboard() {
  return (
    <div className="container mx-auto">
      <h1> Welcome to your Dashboard</h1>
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
