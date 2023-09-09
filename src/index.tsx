import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./app.scss";

import { manifest } from "goodbye-world-react-webpack";
import axios from 'axios';
import { nodeScriptReplace } from "./scriptLoading";
const el = document.getElementById("app");

ReactDOM.render(<App />, el);

// Load script
const url =`${manifest.hostPath}/${manifest.resource}`;
axios.get(url, {
    
}).then(res => {
    let anchor = document.getElementById("gbw");
    anchor.innerHTML = res.data;
    nodeScriptReplace(anchor);
})