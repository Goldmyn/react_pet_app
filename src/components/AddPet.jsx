import React, { useState } from "react";
import { Button, Modal, Input, Select, message } from "antd";

const AddPet = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [petData, setPetData] = useState({
    pet_id: "",
    pet_name: null,
    pet_race: null,
    pet_photo: null,
    pet_location: null,
    pet_sex: null,
    pet_type: null,

    pet_is_adopted: false,
  });

  const errorAlert = (errorMessage) => {
    messageApi.open({
      type: "error",
      content: errorMessage,
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (petData.pet_name === null) {
      return errorAlert("Please Enter Pet Name");
    }
    if (petData.pet_race === null) {
      return errorAlert("Please Enter Pet Race");
    }
    if (petData.pet_photo === null) {
      return errorAlert("Please Enter Pet Photo");
    }
    if (petData.pet_location === null) {
      return errorAlert("Please Select Pet Location");
    }

    if (petData.pet_sex === null) {
      return errorAlert("Please Enter Pet Name");
    }
    if (petData.pet_type === null) {
      return errorAlert("Please Enter Pet Name");
    }

    // for (const key in petData) {
    //   if (Object.prototype.hasOwnProperty.call(petData, key)) {
    //     const element = petData[key];
    //     if (element === null) {
    //       return errorAlert(`Please enter ${key}`.replaceAll("_", " "));
    //     }
    //   }
    // }
    const PET_INFO = { ...petData, pet_id: Date.now() };

    props.handleAddPet(PET_INFO);

    setPetData({
      pet_id: "",
      pet_name: null,
      pet_race: null,
      pet_photo: null,
      pet_location: null,
      pet_sex: null,
      pet_type: null,

      pet_is_adopted: false,
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Add Pet
      </Button>
      <Modal
        title="Pet Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form action="" className="grid gap-4">
          <Input
            value={petData.pet_name}
            onChange={(event) =>
              setPetData({ ...petData, pet_name: event.target.value })
            }
            size="large"
            placeholder="Enter Pet Name"
          />
          <Input
            value={petData.pet_race}
            onChange={(event) =>
              setPetData({ ...petData, pet_race: event.target.value })
            }
            size="large"
            placeholder="Enter Pet Race"
          />
          <Input
            value={petData.pet_photo}
            onChange={(event) =>
              setPetData({ ...petData, pet_photo: event.target.value })
            }
            size="large"
            placeholder="Enter Pet Image Link"
          />

          <Select
            value={petData.pet_location}
            onChange={(value) =>
              setPetData({ ...petData, pet_location: value })
            }
            size="large"
            placeholder="Select Location"
            style={{
              width: "100%",
            }}
            //   onChange={handlePetLocationFilter}
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
            ]}
          />
          <Select
            value={petData.pet_sex}
            onChange={(value) => setPetData({ ...petData, pet_sex: value })}
            size="large"
            placeholder="Select Gender"
            style={{
              width: "100%",
            }}
            //   onChange={handlePetGenderFilter}
            options={[
              {
                value: "Male",
                label: "Male",
              },
              {
                value: "Female",
                label: "Female",
              },
            ]}
          />
          <Select
            value={petData.pet_type}
            onChange={(value) => setPetData({ ...petData, pet_type: value })}
            size="large"
            placeholder="Select Type"
            style={{
              width: "100%",
            }}
            //   onChange={handlePetTypeFilter}
            options={[
              {
                value: "Dog",
                label: "Dog",
              },
              {
                value: "Cat",
                label: "Cat",
              },
            ]}
          />
        </form>
      </Modal>
    </>
  );
};
export default AddPet;
