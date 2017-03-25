
import * as React from "react";
import { HeaderComponent } from "./Header"
import  UserPanelComponent from "./UserPanelComponent"
import { ContactListComponent } from "./ContactListComponent"

 interface Props {
  title : string; 
}

export class GroupPanelComponent extends React.Component<Props, {}> {
  
  constructor() {
    super();
    console.log("group panel created")
  }
  
  render() {
    return <div>
     <HeaderComponent title="Header" imageUrl=""  />
     <UserPanelComponent></UserPanelComponent>
     <ContactListComponent title=""></ContactListComponent>
    </div>
  }
}
