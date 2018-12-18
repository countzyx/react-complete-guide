// @flow
import React from "react";
import Styles from "./Cockpit.module.css";

type Props = {
  personsCount: number,
  togglePersonsHandler: ?(e: SyntheticEvent<>, personIndex: number) => void,
  useRedButton: boolean
};

const Cockpit = (props: Props) => {
  const { personsCount, togglePersonsHandler, useRedButton } = props;

  const personCountCssClasses = [];
  if (personsCount <= 2) {
    personCountCssClasses.push(Styles.red);
  }

  if (personsCount <= 1) {
    personCountCssClasses.push(Styles.bold);
  }

  const buttonClass = useRedButton ? Styles.Red : "";

  return (
    <div className={Styles.Cockpit}>
      <h1>Hi, I&apos;m a React App!</h1>
      <p className={personCountCssClasses.join(" ")}>
        {personsCount}
        &nbsp;persons listed
      </p>
      <button
        type="button"
        className={buttonClass}
        onClick={togglePersonsHandler}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
