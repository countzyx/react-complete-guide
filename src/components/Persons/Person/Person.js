// @flow
import React from "react";
import type { Element, Node } from "react";
import styles from "./Person.module.css";

type Props = {
  age: number,
  children?: Node,
  name: string,
  onClickHandler?: ?(e: SyntheticEvent<>, personIndex: number) => void,
  onChangeHandler?: ?(
    event: SyntheticEvent<HTMLInputElement>,
    id: number
  ) => void
};

const Person = (props: Props): Element<any> => {
  const { age, children, onChangeHandler, onClickHandler, name } = props;
  return (
    <div className={styles.Person}>
      <div onClick={onClickHandler}>
        I&apos;m&nbsp;
        {name}
        &nbsp;and I am&nbsp;
        {age}
        &nbsp;years old!
        {children != null && <div>{children}</div>}
      </div>
      <input type="text" onChange={onChangeHandler} defaultValue={name} />
    </div>
  );
};

Person.defaultProps = {
  children: null,
  onChangeHandler: null,
  onClickHandler: null
};

export default Person;
