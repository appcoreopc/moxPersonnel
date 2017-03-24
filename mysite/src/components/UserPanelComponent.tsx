import { loadLib } from 'awesome-typescript-loader/dist/helpers';
import * as React from "react";

interface Props {
  title : string; 
}

export class UserPanelComponent extends React.Component<Props, {}> {
  render() {
    return <div className="userPanelLayout">
      <li className="avatarLayout"> 
      <img src="images/profile_anony.jpg" className="avatar"/></li>
      <li> {this.props.title } </li>
    </div>
  }
}
