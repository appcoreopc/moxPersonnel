
import * as React from "react";

 interface Props {
  title : string; 
  imageUrl : string;
}

export class HeaderComponent extends React.Component<Props, {}> {
  render() {
    return <div>
    <span><img src="images/group.png"/></span>
    </div>
  }
}
