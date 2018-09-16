// @flow
import * as React from 'react';

type Props = {
  age: string,
  children?: React.Node,
  name: string,
};

const Person = (props: Props) => {
  const { age, children, name } = props;
  return (
    <p>
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
};

export default Person;
