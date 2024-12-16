import "../App.css";
import PetList from "../components/PetList.jsx";
import { PET_DATA } from "../data.js";
import { useState, useContext } from "react";
import { Select } from "antd";
import AddPet from "../components/AddPet.jsx";
import { UserContext } from "../context/UserContextProvider.jsx";

function MarketPlace() {
  const [petStore, setPetStore] = useState(PET_DATA);
  const { user } = useContext(UserContext);

  const handlePetLocationFilter = (value) => {
    switch (value) {
      // when selected value is Abuja
      case "Abuja":
        {
          const dogsInAbuja = PET_DATA.filter(
            (item) => item.pet_location === value
          );
          setPetStore(dogsInAbuja);
        }

        break;
      // when selected value is Lagos
      case "Lagos":
        {
          const dogsInLagos = PET_DATA.filter(
            (item) => item.pet_location === value
          );
          setPetStore(dogsInLagos);
        }

        break;
      // when selected value is Enugu
      case "Enugu":
        {
          const dogsInEnugu = PET_DATA.filter(
            (item) => item.pet_location === value
          );
          setPetStore(dogsInEnugu);
        }
        break;
      default:
        {
          setPetStore(PET_DATA);
        }
        break;
    }
  };

  const handlePetGenderFilter = (value) => {
    switch (value) {
      case "Male":
        {
          const petIsMale = PET_DATA.filter((item) => item.pet_sex === value);
          setPetStore(petIsMale);
        }

        break;
      case "Female":
        {
          const petIsFemale = PET_DATA.filter((item) => item.pet_sex === value);
          setPetStore(petIsFemale);
        }
        break;
      default:
        setPetStore(PET_DATA);
        break;
    }
  };

  const handlePetTypeFilter = (value) => {
    switch (value) {
      case "Dog":
        {
          const petIsDog = PET_DATA.filter((item) => item.pet_type === value);
          setPetStore(petIsDog);
        }

        break;
      case "Cat":
        {
          const petIsCat = PET_DATA.filter((item) => item.pet_type === value);
          setPetStore(petIsCat);
        }
        break;
      default:
        setPetStore(PET_DATA);
        break;
    }
  };

  const handlePetAdoption = (id) => {
    console.log(id);

    const updatedStore = petStore.map((item) => {
      if (item.pet_id === id) {
        item.pet_is_adopted = true;
      }
      return item;
    });

    setPetStore(updatedStore);
  };

  const handleAddNewPet = (petInfo) => {
    setPetStore([petInfo, ...petStore]);
  };

  return (
    <>
      <h1>{user.name}</h1>
      <section className="container mx-auto my-4">
        <Select
          placeholder="Select location"
          style={{
            width: 120,
          }}
          onChange={handlePetLocationFilter}
          options={[
            {
              value: "Abuja",
              label: "Abuja",
            },
            {
              value: "Lagos",
              label: "Lagos",
            },
            {
              value: "Enugu",
              label: "Enugu",
            },
            {
              value: "All",
              label: "All",
            },
          ]}
        />
        <Select
          placeholder="Select Gender"
          style={{
            width: 120,
          }}
          onChange={handlePetGenderFilter}
          options={[
            {
              value: "Male",
              label: "Male",
            },
            {
              value: "Female",
              label: "Female",
            },
            {
              value: "All",
              label: "All",
            },
          ]}
        />
        <Select
          placeholder="Select Type"
          style={{
            width: 120,
          }}
          onChange={handlePetTypeFilter}
          options={[
            {
              value: "Dog",
              label: "Dog",
            },
            {
              value: "Cat",
              label: "Cat",
            },
            {
              value: "All",
              label: "All",
            },
          ]}
        />
      </section>

      <div className="container mx-auto">
        <AddPet handleAddPet={handleAddNewPet} />
      </div>
      <PetList handlePetAdoption={handlePetAdoption} petStore={petStore} />
    </>
  );
}

export default MarketPlace;
