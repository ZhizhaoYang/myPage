(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: signIn, signOut, createStream, fetchStreams, fetchStream, editStream, deleteStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStream", function() { return createStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStreams", function() { return fetchStreams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStream", function() { return fetchStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStream", function() { return editStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStream", function() { return deleteStream; });
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _apis_streams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/streams */ "./src/apis/streams.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../history */ "./src/history.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");





 // siginIn action creator

var signIn = function signIn(userId) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_5__["SIGN_IN"],
    payload: userId
  };
}; // signOut action creator

var signOut = function signOut() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_5__["SIGN_OUT"]
  };
}; // createStream action creator

var createStream = function createStream(formValues) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState) {
        var userId, response;
        return _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = getState().auth.userId;
                _context.next = 3;
                return _apis_streams__WEBPACK_IMPORTED_MODULE_3__["default"].post("/streams", Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formValues, {
                  userId: userId
                }));

              case 3:
                response = _context.sent;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["CREATE_STREAM"],
                  payload: response.data
                });
                _history__WEBPACK_IMPORTED_MODULE_4__["default"].push("/");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}; // fetchStreams action creator -- get the list of all existing streams

var fetchStreams = function fetchStreams() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var response;
        return _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _apis_streams__WEBPACK_IMPORTED_MODULE_3__["default"].get("/streams ");

              case 2:
                response = _context2.sent;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["FETCH_STREAMS"],
                  payload: response.data
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}; // fetchStream action creator -- get one stream by the specific stream id

var fetchStream = function fetchStream(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var response;
        return _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _apis_streams__WEBPACK_IMPORTED_MODULE_3__["default"].get("/streams/".concat(id));

              case 2:
                response = _context3.sent;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["FETCH_STREAM"],
                  payload: response.data
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}; // editStream action creator

var editStream = function editStream(id, formValues) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var response;
        return _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _apis_streams__WEBPACK_IMPORTED_MODULE_3__["default"].patch("/streams/".concat(id), formValues);

              case 2:
                response = _context4.sent;
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["EDIT_STREAM"],
                  payload: response.data
                });
                console.log("Edited ".concat(id));
                _history__WEBPACK_IMPORTED_MODULE_4__["default"].push("/");

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}; // delteStream action creator

var deleteStream = function deleteStream(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
        return _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _apis_streams__WEBPACK_IMPORTED_MODULE_3__["default"].delete("/streams/".concat(id));

              case 2:
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_5__["DELETE_STREAM"],
                  payload: id
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT", function() { return SIGN_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_STREAM", function() { return CREATE_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STREAMS", function() { return FETCH_STREAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STREAM", function() { return FETCH_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_STREAM", function() { return DELETE_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_STREAM", function() { return EDIT_STREAM; });
var SIGN_IN = "SIGN_IN";
var SIGN_OUT = "SIGN_OUT";
var CREATE_STREAM = "CREATE_STREAM";
var FETCH_STREAMS = "FETCH_STREAMS";
var FETCH_STREAM = "FETCH_STREAM";
var DELETE_STREAM = "DELETE_STREAM";
var EDIT_STREAM = "EDIT_STREAM";

/***/ }),

/***/ "./src/apis/streams.js":
/*!*****************************!*\
  !*** ./src/apis/streams.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:3001"
}));

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../history */ "./src/history.js");
/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/Header */ "./src/components/common/Header.js");
/* harmony import */ var _streams_StreamCreate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./streams/StreamCreate */ "./src/components/streams/StreamCreate.js");
/* harmony import */ var _streams_StreamDelete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./streams/StreamDelete */ "./src/components/streams/StreamDelete.js");
/* harmony import */ var _streams_StreamEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./streams/StreamEdit */ "./src/components/streams/StreamEdit.js");
/* harmony import */ var _streams_StreamList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./streams/StreamList */ "./src/components/streams/StreamList.js");
/* harmony import */ var _streams_StreamShow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./streams/StreamShow */ "./src/components/streams/StreamShow.js");





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/App.js";










var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Router"], {
        history: _history__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        exact: true,
        component: _streams_StreamList__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/streams/new",
        exact: true,
        component: _streams_StreamCreate__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/streams/edit/:id",
        exact: true,
        component: _streams_StreamEdit__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/streams/delete",
        exact: true,
        component: _streams_StreamDelete__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/streams/show",
        exact: true,
        component: _streams_StreamShow__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/auth/GoogleAuth.js":
/*!*******************************************!*\
  !*** ./src/components/auth/GoogleAuth.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/auth/GoogleAuth.js";




var GoogleAuth =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GoogleAuth, _Component);

  function GoogleAuth() {
    var _this;

    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoogleAuth);

    _this = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GoogleAuth).call(this));

    _this.componentDidMount = function () {
      // load auth2 api from gapi documentation
      window.gapi.load("client:auth2", function () {
        // initialize the gapi by your clientId
        window.gapi.client.init({
          clientId: "1054677549802-a9mh9bagtpffrvo6gj25762e5f1cccjl.apps.googleusercontent.com",
          // decide to get what scope of user's information from google
          scope: "email"
        }) // promise
        .then(function () {
          // store the return gapi.auth2 in a variable
          _this.auth = window.gapi.auth2.getAuthInstance();

          _this.onAuthChange(_this.auth.isSignedIn.get()); // listen to the change of authentication status and change the displaying content that in view


          _this.auth.isSignedIn.listen(_this.onAuthChange);
        });
      });
    };

    _this.onAuthChange = function (isSignedIn) {
      if (isSignedIn) {
        _this.props.signIn(_this.auth.currentUser.get().getId());
      } else {
        _this.props.signOut();
      }
    };

    _this.onSignInClick = function () {
      _this.auth.signIn();
    };

    _this.onSignOutClick = function () {
      _this.auth.signOut();
    };

    _this.renderAuthButton = function () {
      if (_this.props.isSignedIn === null) {
        return null;
      } else if (_this.props.isSignedIn) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          onClick: _this.onSignOutClick,
          className: "ui red google button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "google icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }), "Sign Out");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          onClick: _this.onSignInClick,
          className: "ui red google button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "google icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }), "Sign In with Google");
      }
    };

    _this.auth = null;
    return _this;
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleAuth, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.renderAuthButton());
    }
  }]);

  return GoogleAuth;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  signIn: _actions__WEBPACK_IMPORTED_MODULE_7__["signIn"],
  signOut: _actions__WEBPACK_IMPORTED_MODULE_7__["signOut"]
})(GoogleAuth));

/***/ }),

/***/ "./src/components/common/Header.js":
/*!*****************************************!*\
  !*** ./src/components/common/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/GoogleAuth */ "./src/components/auth/GoogleAuth.js");





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/common/Header.js";




var Header =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui secondary pointing menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Streamy"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "right menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "All Streams"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_auth_GoogleAuth__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/common/Modal.js":
/*!****************************************!*\
  !*** ./src/components/common/Modal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/common/Modal.js";



var Modal =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, _Component);

  function Modal() {
    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

    return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal).apply(this, arguments));
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
    key: "render",
    value: function render() {
      return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui dimmer modals visible active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui standard modal visible active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "Delete Stream"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Are you sure you want to delete this stream?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "actions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "ui red button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Delete"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Cancel")))), document.querySelector("#modal-root"));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/streams/StreamCreate.js":
/*!************************************************!*\
  !*** ./src/components/streams/StreamCreate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _StreamForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StreamForm */ "./src/components/streams/StreamForm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/streams/StreamCreate.js";





var StreamCreate =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StreamCreate, _Component);

  function StreamCreate() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StreamCreate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StreamCreate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onSubmit = function (formValues) {
      _this.props.createStream(formValues);
    };

    return _this;
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StreamCreate, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Create a Stream"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_StreamForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }
  }]);

  return StreamCreate;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]); // connect the states and actions to the form wrapped component(this)


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, {
  createStream: _actions__WEBPACK_IMPORTED_MODULE_8__["createStream"]
})(StreamCreate));

/***/ }),

/***/ "./src/components/streams/StreamDelete.js":
/*!************************************************!*\
  !*** ./src/components/streams/StreamDelete.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Modal */ "./src/components/common/Modal.js");





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/streams/StreamDelete.js";



var StreamDelete =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StreamDelete, _Component);

  function StreamDelete() {
    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StreamDelete);

    return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StreamDelete).apply(this, arguments));
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StreamDelete, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "StreamDelete"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }));
    }
  }]);

  return StreamDelete;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StreamDelete);

/***/ }),

/***/ "./src/components/streams/StreamEdit.js":
/*!**********************************************!*\
  !*** ./src/components/streams/StreamEdit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _StreamForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StreamForm */ "./src/components/streams/StreamForm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/streams/StreamEdit.js";






var StreamEdit =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StreamEdit, _Component);

  function StreamEdit() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StreamEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StreamEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.componentDidMount = function () {
      _this.props.fetchStream(_this.props.match.params.id);
    };

    _this.onSubmit = function (formValues) {
      _this.props.editStream(_this.props.match.params.id, formValues);
    };

    return _this;
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StreamEdit, [{
    key: "render",
    value: function render() {
      if (!this.props.stream) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "Loading...");
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Edit a Stream"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_StreamForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit: this.onSubmit,
        initialValues: lodash__WEBPACK_IMPORTED_MODULE_7___default.a.pick(this.props.stream, "title", "description", "userId"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }));
    }
  }]);

  return StreamEdit;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  fetchStream: _actions__WEBPACK_IMPORTED_MODULE_9__["fetchStream"],
  editStream: _actions__WEBPACK_IMPORTED_MODULE_9__["editStream"]
})(StreamEdit));

/***/ }),

/***/ "./src/components/streams/StreamForm.js":
/*!**********************************************!*\
  !*** ./src/components/streams/StreamForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/streams/StreamForm.js";




var StreamForm =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StreamForm, _Component);

  function StreamForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StreamForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StreamForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderInput = function (formProps) {
      var input = formProps.input,
          label = formProps.label,
          meta = formProps.meta;
      var fieldclass = classnames__WEBPACK_IMPORTED_MODULE_7___default()("field", {
        error: meta.touched && meta.error
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: fieldclass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, label), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", Object.assign({}, input, {
        autoComplete: "off",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      })), _this.renderError(meta));
    };

    _this.renderError = function (meta) {
      var error = meta.error,
          touched = meta.touched;

      if (touched && error) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui error message",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, error));
      }
    };

    _this.onSubmit = function (formValues) {
      _this.props.onSubmit(formValues);
    };

    return _this;
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StreamForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "ui form error",
        onSubmit: this.props.handleSubmit(this.onSubmit),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        name: "title",
        component: this.renderInput,
        label: "Enter Title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
        name: "description",
        component: this.renderInput,
        label: "Enter Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "ui button primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Submit"));
    }
  }]);

  return StreamForm;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var validate = function validate(formValues) {
  var errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
}; // wrap the StreamForm component with reduxForm


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_6__["reduxForm"])({
  form: "streamForm",
  validate: validate
})(StreamForm));

/***/ }),

/***/ "./src/components/streams/StreamList.js":
/*!**********************************************!*\
  !*** ./src/components/streams/StreamList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/streams/StreamList.js";





var StreamList =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StreamList, _Component);

  function StreamList() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StreamList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StreamList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.componentDidMount = function () {
      _this.props.fetchStreams();
    };

    _this.renderAdmin = function (stream) {
      if (stream.userId === _this.props.currentUserId) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "right floated content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: "/streams/edit/".concat(stream.id),
          className: "ui button primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, "Edit"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "ui button red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "Delete"));
      }
    };

    _this.renderCreate = function () {
      if (_this.props.isSignedIn) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            textAlign: "right"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          to: "/streams/new",
          className: "ui button primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "Create Scream"));
      }
    };

    _this.renderList = function () {
      return _this.props.streams.map(function (stream) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "item",
          key: stream.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, _this.renderAdmin(stream), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "large middle aligned icon camera",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, stream.title, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, stream.description)));
      });
    };

    return _this;
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StreamList, [{
    key: "render",
    value: function render() {
      // console.log(this.props.streams);
      // console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Streams"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui celled list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.renderList()), this.renderCreate());
    }
  }]);

  return StreamList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  fetchStreams: _actions__WEBPACK_IMPORTED_MODULE_8__["fetchStreams"]
})(StreamList));

/***/ }),

/***/ "./src/components/streams/StreamShow.js":
/*!**********************************************!*\
  !*** ./src/components/streams/StreamShow.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/components/streams/StreamShow.js";


var StreamShow =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StreamShow, _Component);

  function StreamShow() {
    Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StreamShow);

    return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StreamShow).apply(this, arguments));
  }

  Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StreamShow, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, "StreamShow");
    }
  }]);

  return StreamShow;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StreamShow);

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
var _jsxFileName = "/Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/index.js";







 // create redux devtools

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_3__["compose"]; // create redux store

var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/reducers/authReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/authReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


var INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SIGN_IN"]:
      return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isSignedIn: true,
        userId: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SIGN_OUT"]:
      return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isSignedIn: false,
        userId: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./src/reducers/authReducer.js");
/* harmony import */ var _streamReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./streamReducer */ "./src/reducers/streamReducer.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  streams: _streamReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  // Redux Form -- create form reducer to serve for all the Form Components
  form: redux_form__WEBPACK_IMPORTED_MODULE_1__["reducer"]
}));

/***/ }),

/***/ "./src/reducers/streamReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/streamReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");




var INITIAL_STATE = {};

var streamReducer = function streamReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_STREAMS"]:
      return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.mapKeys(action.payload, "id"));

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["FETCH_STREAM"]:
      return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload.id, action.payload));

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["CREATE_STREAM"]:
      return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload.id, action.payload));

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["EDIT_STREAM"]:
      return Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_Users_zhizhaoyang_Desktop_MyDocs_Study_notes_Udemy_Stephen_Grider_Modern_React_with_Redux_streams_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload.id, action.payload));

    case _actions_types__WEBPACK_IMPORTED_MODULE_3__["DELETE_STREAM"]:
      return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.omit(state, action.payload);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (streamReducer);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/zhizhaoyang/Desktop/MyDocs/Study_notes/Udemy/Stephen_Grider/Modern_React_with_Redux /streams-app/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map