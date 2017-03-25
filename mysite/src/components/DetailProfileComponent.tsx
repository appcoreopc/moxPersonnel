import { loadLib } from 'awesome-typescript-loader/dist/helpers';
import * as React from "react";
import { connect } from 'react-redux';

 class DetailProfileComponent extends React.Component<any, {}> {

  render() {
    return <div onClick={e => this.props.incr()}>
      {this.props.counter}
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
      </ul>
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="home">{this.props.counter}</div>
        <div role="tabpanel" className="tab-pane" id="profile"></div>
        <div role="tabpanel" className="tab-pane" id="messages"></div>
        <div role="tabpanel" className="tab-pane" id="settings">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quos quisquam nisi temporibus, perferendis, nemo reprehenderit similique possimus earum natus expedita quo magni dignissimos cupiditate et eaque a quis, reiciendis?</div>
      </div>
      
    </div>
  }
}

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: any) => ({
  incr: () => {
    console.log('redux at work@');
    dispatch({ type: 'INCR', by: 1 });
  },
  decr: () => {
    dispatch({ type: 'INCR', by: -1 });
    console.log('redux at work@----');
  }
});

console.log('teest');
export default connect(mapStateToProps, mapDispatchToProps)(DetailProfileComponent);

