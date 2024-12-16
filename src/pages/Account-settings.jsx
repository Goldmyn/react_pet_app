import { Button, Input } from "antd";
import { useState } from "react";
import { UserContext } from "../context/UserContextProvider";
import { useContext } from "react";

function AccountSettings() {
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState(null);

  const { setUser, user } = useContext(UserContext);

  const handleNameUpdate = () => {
    setUser((preValue) => ({ ...preValue, name: nameValue }));
    setUser((preValue) => ({ ...preValue, age: ageValue }));
  };
//   const handleAgeUpdate = () => {
//     setUser((preValue) => ({ ...preValue, age: ageValue }));
//   };
  return (
    <section className="container mx-auto">
      <h1>Update your account Settings</h1>
      <div className="my-3">
        <h1 className="text-lg font-semibold text-gray-500">
          Name : {user.name}
        </h1>
        <h2 className="text-lg font-semibold text-gray-500">
          My Age : {user.age}
        </h2>
      </div>
      <div className="max-w-96 grid gap-3">
        <Input
          placeholder="Enter Name"
          size="large"
          onChange={(event) => setNameValue(event.target.value)}
        />
        <Input
          placeholder="Enter Age"
          size="large"
          onChange={(event) => setAgeValue(event.target.value)}
        />
        <Button onClick={handleNameUpdate} type="primary" size="large">
          Change Name
        </Button>
      </div>
    </section>
  );
}

export default AccountSettings;
