
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { MainComponent } from "./components/MainPanel";
    
let store = createStore(
    (state : any, action: any) => {
        switch (action.type) {
            case 'CANDIDATE_CHANGED':
                console.log('store event here');
                console.log(action);
                return { candidate : action.candidate, key : action.key };
            default:
                return state;
        }
    },
    { candidate : '', key : '' });

ReactDOM.render(
    <Provider store={store}>
        <MainComponent panelTitle="" groupPanelTitle="" />
    </Provider>,
    document.getElementById("example")
);