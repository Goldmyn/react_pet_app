import { Card, Tag, Button } from "antd";
const { Meta } = Card;

const PetCard = (props) => {
  return (
    <>
      <Card
        hoverable
        cover={
          <img
            className="w-[500px] h-[300px] object-cover"
            alt="example"
            src={props.image}
          />
        }
      >
        <Meta
          title={props.name}
          description={
            <div className="grid gap-2">
              <h2>
                <strong>Race </strong>
                <span>{props.race}</span>
              </h2>
              <h2>
                <strong>Type </strong>
                <span>{props.type}</span>
              </h2>
              <h2>
                <strong>Gender </strong>
                <span>{props.gender}</span>
              </h2>
              <h2>
                <strong>Location </strong>
                <span>{props.location}</span>
              </h2>
              <div>
                {props.isAdopted === false ? (
                  <Tag color="green">Available</Tag>
                ) : (
                  <Tag color="red">Adopted</Tag>
                )}
              </div>
              <Button
                disabled={props.isAdopted === true ? true : false}
                onClick={() => props.handlePetAdoption(props.id)}
              >
                Adopt Pet
              </Button>
            </div>
          }
        />
      </Card>
    </>
  );
};

export default PetCard;
