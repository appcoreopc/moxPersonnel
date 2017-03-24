
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Hello2 } from "./components/Hello2";
import { Hello3 } from "./components/Hello3";

ReactDOM.render(
    <div> <Hello2></Hello2> <Hello compiler="TypeScript" framework="React" /><Hello3></Hello3> </div>,
    document.getElementById("example")
);