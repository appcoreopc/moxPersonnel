import { loadLib } from 'awesome-typescript-loader/dist/helpers';
import * as React from "react";
import { connect } from 'react-redux';

interface UserPanelProps {
  candidate?: string;
  candidateChanged?: Function;
}

export class UserPanelComponent extends React.Component<UserPanelProps, {}> {

  context: any;
  static contextTypes = {
    store: React.PropTypes.object
  }
  private unsubscribe: Function;
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick<MouseEvent>(evt: MouseEvent): void {
    console.log('clicked');
    //console.log(this.props);
    let candidateInfo = this.props;
    console.log(candidateInfo);
    this.context.store.dispatch({
      type : "CANDIDATE_CHANGED", 
      candidate : candidateInfo.candidate
    });
  }

  render() {
    return <div className="userPanelLayout" onClick={e => this.handleClick(e)}>
      <li>
        <label>Counter: </label><b>{this.props.candidate}</b>
      </li>
      <li className="avatarLayout">
        <img src="images/profile_anony.jpg" className="avatar" /></li>
      <li> {this.props.candidate} </li>
    </div>
  }
}

// const mapStateToProps = (state: any) => {
//   console.log('logging state info');
//   console.log(state);
//   return state;
// }

// const mapDispatchToProps = (dispatch: any) => ({
//   candidateChanged: (candidate: string) => {
//     console.log(candidate);
//     dispatch({ type: 'CANDIDATE_CHANGED', candidate: candidate });
//   }
// });

//export default connect(mapStateToProps, mapDispatchToProps)(UserPanelComponent);
