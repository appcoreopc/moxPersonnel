
import * as React from "react";

 interface Props {
  foo: string;
}

export class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>
  }
}
