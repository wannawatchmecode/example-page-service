import React from "react";
import {manifest} from 'goodbye-world-react-webpack';
const App = () => {
  <script src={manifest.hostPath + '/' + manifest.resource}></script>
  return <h1>Hello React</h1>;
};

export default App;