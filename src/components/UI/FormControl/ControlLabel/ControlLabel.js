import React from "react";
import { withTranslation, Trans } from "react-i18next";
import Button from "../../Button/Button";
import classes from "./ControlLabel.scss";

const controlLabel = props => {
  const labelClasses = [classes.Label];
  if (props.required) {
    labelClasses.push(classes.Required);
  }

  let labelText = props.t(props.label);
  if (labelText.indexOf("</1>") !== -1) {
    labelText = (
      <Trans i18nKey={props.label}>
        Tresc{" "}
        <Button
          btnType="linkButton"
          clicked={event => {
            event.stopPropagation();
            props.openTip(event, props.controlId);
          }}
        >
          link
        </Button>
      </Trans>
    );
  }
  return (
    <label
      onClick={props.clicked}
      htmlFor={props.controlId}
      className={labelClasses.join(" ")}
    >
      {labelText}
    </label>
  );
};

export default withTranslation("contact")(controlLabel);
