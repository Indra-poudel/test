import React from "react";
import PropTypes from "prop-types";
import { Button as ReactStrapButton } from "reactstrap";

import { BUTTON_TYPE } from "../../../constant/constant";

function Button(props) {
  const { type, buttonText, iconRender } = props;

  if (type === BUTTON_TYPE.PRIMARY)
    return (
      <ReactStrapButton {...props}>
        {iconRender && iconRender()} {buttonText}
      </ReactStrapButton>
    );

  return (
    <ReactStrapButton {...props} className="btn-black" {...props}>
      {iconRender && iconRender()} {buttonText}
    </ReactStrapButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(BUTTON_TYPE)),
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.func,
  onClick: PropTypes.func,
};

export default Button;
