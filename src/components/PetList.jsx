import React from "react";
import PetCard from "./PetCard.jsx";

const PetList = (props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto p-2 gap-4">
      {props.petStore.map((item) => {
        return (
          <PetCard
            key={item.pet_id}
            id={item.pet_id}
            name={item.pet_name}
            image={item.pet_photo}
            race={item.pet_race}
            type={item.pet_type}
            gender={item.pet_sex}
            location={item.pet_location}
            isAdopted={item.pet_is_adopted}
            handlePetAdoption={props.handlePetAdoption}
          />
        );
      })}
    </div>
  );
};

export default PetList;
