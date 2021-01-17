import React from "react";
import {
  Modal as ReactStrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Button from "../common/button";
import {
  googleIcon,
  myQuestionIcon,
  trustPilot,
  tripAdvisorIcon,
  bookingDotCom,
  facebook,
} from "../../assets/image";
import { BUTTON_TYPE } from "../../constant/constant";

const CONNECTION_ITEMS = [
  {
    Label: "Google",
    key: "google",
    icon: googleIcon,
    onClick: () => {},
  },
  {
    Label: "Trip Advisor",
    key: "trip-advisor",
    icon: tripAdvisorIcon,
    onClick: () => {},
  },
  {
    Label: "Trust Pilot",
    key: "trust_pilot",
    icon: trustPilot,
    onClick: () => {},
  },
  {
    Label: "Facebook",
    key: "facebook",
    icon: facebook,
    onClick: () => {},
  },
  {
    Label: "Booking.com",
    key: "booking.com",
    icon: bookingDotCom,
    onClick: () => {},
  },
];

const AvailableConnectionModal = (props) => {
  const { handleClose, isModalOpen, onToggleModal } = props;

  return (
    <ReactStrapModal
      size={"lg"}
      {...props}
      isOpen={isModalOpen}
      onClosed={handleClose}
      toggle={onToggleModal}
      backdrop={true}
    >
      <ModalHeader className="modal-header" isModalOpen={isModalOpen}>
        Available Connections
      </ModalHeader>
      <ModalBody className="modal-body">
        <div className="available-connection-item-wrapper">
          {CONNECTION_ITEMS.map((connection) => (
            <div key={connection.key} className="available-connection-item">
              <div className="available-connection-item-title">
                <div>{connection.Label}</div>
                <img alt="google-icon" src={connection.icon} />
              </div>
              <Button
                outline
                type={BUTTON_TYPE.PRIMARY}
                onClick={connection.onClick}
                buttonText={"Connect"}
              />
            </div>
          ))}
        </div>
      </ModalBody>
      <ModalFooter className="modal-footer">
        <div className="left-button-groups">
          <Button
            type={BUTTON_TYPE.PRIMARY}
            buttonText={"Update Calender & Continue"}
          />
          <Button onClick={onToggleModal} buttonText={"Cancel"} />
        </div>
        <div className="right-button">
          <Button
            iconRender={() => <img src={myQuestionIcon} />}
            buttonText={"Help"}
          />
        </div>
      </ModalFooter>
    </ReactStrapModal>
  );
};

export default AvailableConnectionModal;
