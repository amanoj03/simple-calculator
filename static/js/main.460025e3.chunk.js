(this["webpackJsonpsimple-calculator"]=this["webpackJsonpsimple-calculator"]||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_manoj_Documents_React_lcotodo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_manoj_Documents_React_lcotodo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_manoj_Documents_React_lcotodo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),C_Users_manoj_Documents_React_lcotodo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_resultcomponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_components_keypadcomponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),App=function(_Component){Object(C_Users_manoj_Documents_React_lcotodo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_Component);var _super=Object(C_Users_manoj_Documents_React_lcotodo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.a)(App);function App(){var _this;return Object(C_Users_manoj_Documents_React_lcotodo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){var checkResult="";_this.state.result.includes("--")?checkResult=_this.state.result.replace("--","+"):(checkResult=_this.state.result,console.log(_this.state.result));try{_this.setState({result:(eval(checkResult)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(C_Users_manoj_Documents_React_lcotodo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"main"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"padding"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p",null,"Created By Manoj Ayyanawar")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"header"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null,"SIMPLE CALCULATOR")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_resultcomponent__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_keypadcomponent__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick}))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(3),c=_(4),o=_(0),l=_.n(o),s=function(e){Object(c.a)(_,e);var t=Object(r.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(a.a)(_,[{key:"render",value:function(){var e=this.props.result;return l.a.createElement("div",{className:"result"},l.a.createElement("p",null,e))}}]),_}(o.Component);t.a=s},function(e,t,_){"use strict";var n=_(1),a=_(2),r=_(3),c=_(4),o=_(0),l=_.n(o),s=function(e){Object(c.a)(_,e);var t=Object(r.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(a.a)(_,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"button"},l.a.createElement("button",{title:"Open Braces",name:"(",onClick:function(t){return e.props.onClick(t.target.name)}},"("),l.a.createElement("button",{title:"Backspace",name:"CE",onClick:function(t){return e.props.onClick(t.target.name)}},"CE"),l.a.createElement("button",{title:"Close Braces",name:")",onClick:function(t){return e.props.onClick(t.target.name)}},")"),l.a.createElement("button",{title:"Reset",name:"C",onClick:function(t){return e.props.onClick(t.target.name)}},"C"),l.a.createElement("br",null),l.a.createElement("button",{name:"1",onClick:function(t){return e.props.onClick(t.target.name)}},"1"),l.a.createElement("button",{name:"2",onClick:function(t){return e.props.onClick(t.target.name)}},"2"),l.a.createElement("button",{name:"3",onClick:function(t){return e.props.onClick(t.target.name)}},"3"),l.a.createElement("button",{title:"Add",name:"+",onClick:function(t){return e.props.onClick(t.target.name)}},"+"),l.a.createElement("br",null),l.a.createElement("button",{name:"4",onClick:function(t){return e.props.onClick(t.target.name)}},"4"),l.a.createElement("button",{name:"5",onClick:function(t){return e.props.onClick(t.target.name)}},"5"),l.a.createElement("button",{name:"6",onClick:function(t){return e.props.onClick(t.target.name)}},"6"),l.a.createElement("button",{title:"Subtract",name:"-",onClick:function(t){return e.props.onClick(t.target.name)}},"-"),l.a.createElement("br",null),l.a.createElement("button",{name:"7",onClick:function(t){return e.props.onClick(t.target.name)}},"7"),l.a.createElement("button",{name:"8",onClick:function(t){return e.props.onClick(t.target.name)}},"8"),l.a.createElement("button",{name:"9",onClick:function(t){return e.props.onClick(t.target.name)}},"9"),l.a.createElement("button",{title:"Multiply",name:"*",onClick:function(t){return e.props.onClick(t.target.name)}},"x"),l.a.createElement("br",null),l.a.createElement("button",{title:"Decimal",name:".",onClick:function(t){return e.props.onClick(t.target.name)}},"."),l.a.createElement("button",{name:"0",onClick:function(t){return e.props.onClick(t.target.name)}},"0"),l.a.createElement("button",{title:"Calculate",name:"=",onClick:function(t){return e.props.onClick(t.target.name)}},"="),l.a.createElement("button",{title:"Divide",name:"/",onClick:function(t){return e.props.onClick(t.target.name)}},"\xf7"),l.a.createElement("br",null))}}]),_}(o.Component);t.a=s},function(e,t,_){e.exports=_(17)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(6),c=_.n(r),o=(_(15),_(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.460025e3.chunk.js.map