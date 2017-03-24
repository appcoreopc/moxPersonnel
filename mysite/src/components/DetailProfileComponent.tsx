import { loadLib } from 'awesome-typescript-loader/dist/helpers';
import * as React from "react";

interface Props {
  title: string;
}

export class DetailProfileComponent extends React.Component<Props, {}> {
  render() {
    return <div>

      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
      </ul>
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, dolorum, animi. Inventore officiis minus dicta quo officia earum, distinctio velit ut reprehenderit labore veritatis quae architecto totam fuga fugit facilis.</div>
        <div role="tabpanel" className="tab-pane" id="profile"></div>
        <div role="tabpanel" className="tab-pane" id="messages"></div>
        <div role="tabpanel" className="tab-pane" id="settings">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quos quisquam nisi temporibus, perferendis, nemo reprehenderit similique possimus earum natus expedita quo magni dignissimos cupiditate et eaque a quis, reiciendis?</div>
      </div>

    </div>
  }
}
