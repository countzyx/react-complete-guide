// @flow
import * as React from 'react';

type Props = {
  age: number,
  children?: React.Node,
  name: string,
  onClickHandler?: ?(e: SyntheticEvent<>) => void,
};

const Person = (props: Props) => {
  const {
    age, children, onClickHandler, name,
  } = props;
  return (
    <p onClick={onClickHandler}>
      I&apos;m&nbsp;
      {name}
      &nbsp;and I am&nbsp;
      {age}
      &nbsp;years old!
      {children != null && <div>{children}</div>}
    </p>
  );
};

Person.defaultProps = {
  children: null,
  onClickHandler: null,
};

export default Person;
