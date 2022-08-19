"use strict";
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ RubyBlock),
/* harmony export */   "d": () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CodeBlock = ({ children , lang , ...codeProps })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
            className: lang,
            ...codeProps,
            children: children
        })
    })
;
const RubyBlock = ({ children , ...codeProps })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeBlock, {
        lang: "rb",
        children: children
    })
;


/***/ }),

/***/ 142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Notes */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Notes = ({ children  })=>/*#__PURE__*/ _jsx("aside", {
        className: "notes",
        children: children
    })
;


/***/ }),

/***/ 344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Presentation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DEFAULT_CLASSES = (/* unused pure expression or super */ null && ([
    "reveal"
]));
const Presentation = ({ children , ...options })=>{
    const { handleSlideChanged , handleSlideTransitionEnd  } = options;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const clientSideInitialization = async ()=>{
            const { default: Reveal  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 886, 23));
            const { default: MarkdownPlugin  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 806, 23));
            const { default: HighlightPlugin  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 757, 23));
            const { default: NotesPlugin  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 480, 23));
            const deck = new Reveal({
                plugins: [
                    MarkdownPlugin,
                    HighlightPlugin,
                    NotesPlugin
                ],
                slideNumber: "c",
                ...options
            });
            deck.initialize();
            if (handleSlideChanged) deck.on("slidechanged", handleSlideChanged);
            if (handleSlideTransitionEnd) deck.on("slidetransitionend", handleSlideTransitionEnd);
        };
        clientSideInitialization();
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "reveal",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "slides",
            children: children
        })
    });
};


/***/ }),

/***/ 890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Slide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Slide = ({ children , ...slideProps })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        ...slideProps,
        children: children
    })
;


/***/ })

};
;