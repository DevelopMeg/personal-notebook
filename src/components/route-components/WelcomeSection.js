import React from "react";
import ChooseAction from "../subcomponents/ChooseAction";

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <h2 className="welcome-section__title">Create your notebook</h2>
      <ChooseAction />
    </section>
  );
};

export default WelcomeSection;
