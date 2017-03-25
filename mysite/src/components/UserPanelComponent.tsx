import { loadLib } from 'awesome-typescript-loader/dist/helpers';
import * as React from "react";
import { connect } from 'react-redux';

interface Props {
  title: string;
  counter: string;
}

export class UserPanelComponent extends React.Component<any, {}> {

  context: any;
  static contextTypes = {
    store: React.PropTypes.object
  }

  private unsubscribe: Function;

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    console.log(this.props);
    console.log(this.context);
    
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick<MouseEvent>(evt: MouseEvent): void {
    
    console.log(this.props);
    console.log(this.state);
    this.props.incr();
  }

  render() {
    return <div className="userPanelLayout" onClick={e => this.handleClick(e) }>
      <li>
       <label>Counter: </label><b>#{this.context.store.getState().counter}</b>
       </li>
      <li className="avatarLayout">
        <img src="images/profile_anony.jpg" className="avatar" /></li>
      <li> {this.props.title} </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPanelComponent);
