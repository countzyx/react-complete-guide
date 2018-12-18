// @flow
import React from "react";
import type { Element } from "react";
import Person from "./Person/Person";

type PersonData = { id: number, age: number, name: string };

type Props = {
  persons: Array<PersonData>,
  onChangeHandler: ?(
    event: SyntheticEvent<HTMLInputElement>,
    id: number
  ) => void,
  onClickHandler: ?(personIndex: number) => void
};

const Persons = (props: Props) => {
  const { persons, onChangeHandler, onClickHandler } = props;
  return persons.map<Element<any>>((p, i) => (
    <Person
      name={p.name}
      age={p.age}
      key={p.id}
      onChangeHandler={
        onChangeHandler ? event => onChangeHandler(event, p.id) : null
      }
      onClickHandler={onClickHandler ? () => onClickHandler(i) : null}
    />
  ));
};

Persons.defaultProps = {
  onChangeHandler: null,
  onClickHandler: null
};

export default Persons;
