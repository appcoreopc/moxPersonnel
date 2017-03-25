import { formatError } from 'awesome-typescript-loader/dist/helpers';
import { connect } from 'react-redux';

import * as React from "react";
import { UserPanelComponent } from "./UserPanelComponent";

interface Props {
  title: string;
}

export class ContactListComponent extends React.Component<Props, {}> {
  render() {
     var names = ['Jake', 'Jon', 'Thruster'];
     var list = names.map(name => {
       return <UserPanelComponent key={name} title={name}></UserPanelComponent>;
     });

    return <div className="contactListLayout">
    {list}
  </div>
  }
}


const mapStateToProps = (state : any) => state;

const mapDispatchToProps = (dispatch : any) => ({
    incr: () => {
        dispatch({ type: 'INCR', by: 1 });
    },
    decr: () => {
        dispatch({ type: 'INCR', by: -1 });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListComponent);