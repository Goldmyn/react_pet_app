import { useParams } from "react-router";
import { PET_DATA } from "../data";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";

function PetDetails() {
  const params = useParams();
  const [petInfo, setPetInfo] = useState(null);

  const getPetDetails = () => {
    const pet = PET_DATA.find((item) => item.pet_id === Number(params.pet_id));
    setPetInfo(pet);
  };

  useEffect(() => {
    getPetDetails();
  }, []);

  if (petInfo === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container mx-auto grid place-items-center">
      <Row>
        <Col span={16}>
          <Card title={petInfo.pet_name} bordered={false}>
            {petInfo.pet_description}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PetDetails;
