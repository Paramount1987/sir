import "../styles/index.scss";
// libs
//-------------------------------------------------------
window.$ = require("jquery");

window.jQuery = window.$;

require("./libs/index");

// utils
//----------------------------------------------
// require("./utils/index");

// components
//----------------------------------------------
require("./components/sliders/intro-slider");
require("./components/sliders/multi-slider");
require("./components/sliders/single-slider");
require("./components/transition");

require("./components/form");

import Nav from "./components/nav";

Nav.init();
