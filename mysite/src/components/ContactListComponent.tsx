import { formatError } from 'awesome-typescript-loader/dist/helpers';
import { connect } from 'react-redux';
import * as React from "react";
import {UserPanelComponent}  from "./UserPanelComponent";

interface Props {
  title: string;
}

export class ContactListComponent extends React.Component<Props, {}> {
  render() {
     var names = ['Jake', 'Jon', 'Thruster'];
     var list = names.map(name => {
       return <UserPanelComponent key={name} candidate={name}></UserPanelComponent>;
     });

    return <div className="contactListLayout">
    {list}
  </div>

  }
}
