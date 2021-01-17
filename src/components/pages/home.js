import { Container } from "reactstrap";
import { React, useState } from "react";

import Button from "../common/button";
import { BUTTON_TYPE } from "../../constant/constant";
import AvailableConnectionModal from "../availableConnectionModal";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const toggleModal = () => setModalOpen((prevState) => !prevState);

  return (
    <Container className="mt-5">
      <Button
        type={BUTTON_TYPE.PRIMARY}
        outlined
        onClick={toggleModal}
        buttonText={"Click to toggle Available connection Modal"}
      />
      <AvailableConnectionModal
        isModalOpen={isModalOpen}
        onToggleModal={toggleModal}
      />
    </Container>
  );
};

export default Home;
