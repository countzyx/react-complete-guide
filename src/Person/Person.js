// @flow
import * as React from 'react';
import './Person.css';

type Props = {
  age: number,
  children?: React.Node,
  name: string,
  onClickHandler?: ?(e: SyntheticEvent<>) => void,
  onChangeHandler?: ?(e: SyntheticEvent<HTMLInputElement>) => void,
};

const Person = (props: Props) => {
  const {
    age, children, onChangeHandler, onClickHandler, name,
  } = props;
  return (
    <div className="Person">
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
  onClickHandler: null,
};

export default Person;
