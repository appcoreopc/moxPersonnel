
import * as React from "react";
import { GroupPanelComponent } from "./GroupPanelComponent"
import { UserPanelComponent } from "./UserPanelComponent"
import { DetailProfileComponent } from "./DetailProfileComponent"

 interface Props {
  groupPanelTitle: string;
  panelTitle : string; 
}

export class MainComponent extends React.Component<Props, {}> {
  render() {
    return <div className="container blueLayout">
        <div className="row">
            <div className="col-sm-4">
            <GroupPanelComponent title="main title"> </GroupPanelComponent>
            </div>
            <div className="col-sm-8">
            <DetailProfileComponent title="Detail"> </DetailProfileComponent>
            </div>
        </div>
    </div>
  }
}
