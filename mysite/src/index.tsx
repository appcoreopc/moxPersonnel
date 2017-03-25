
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { MainComponent } from "./components/MainPanel";
    
let store = createStore(
    (state : any, action: any) => {
        switch (action.type) {
            case 'INCR':
                return { counter: state.counter + action.by };
            default:
                return state;
        }
    },
    { counter: 0 });

ReactDOM.render(
    <Provider store={store}>
        <MainComponent panelTitle="" groupPanelTitle="" />
    </Provider>,
    document.getElementById("example")
);