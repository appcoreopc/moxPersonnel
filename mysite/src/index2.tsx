
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Hello2 } from "./components/Hello2";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React"/>,
    document.getElementById("example")
);