import React from "react";
import { withTranslation } from "react-i18next";
import classes from "./NotFound.scss";

const notFound = props => {
  return (
    <div className={classes.NotFound}>
      <p className={classes.NotFoundMessage}>{props.t("notFound")}</p>
    </div>
  );
};

export default withTranslation("ui")(notFound);
