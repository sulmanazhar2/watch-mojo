import React from "react";

import Icon from "../../assets/button-arrow.svg";

import "./ready-to-start-project.styles.scss";

const ReadyToStartProject: React.FC = () => (
  <div className="ready-to-start-project-component">
    <div className="ready-to-start-project__content">
      <h2 className="ready-to-start-project__title">
        Ready to start your project?
      </h2>
      <p className="ready-to-start-project__text">
        Hop on a membership and start requesting designs immediately.
      </p>
      <button className="ready-to-start-project__button">
        <span className="button-text">Start Now</span>
        <Icon />
      </button>
    </div>
  </div>
);

export default ReadyToStartProject;
