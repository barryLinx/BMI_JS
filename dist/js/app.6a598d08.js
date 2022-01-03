/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image/BMICLogo.png":
/*!********************************!*\
  !*** ./src/image/BMICLogo.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "image/BMICLogo.png");

/***/ }),

/***/ "./src/image/BMICLogo_footer.png":
/*!***************************************!*\
  !*** ./src/image/BMICLogo_footer.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "image/BMICLogo_footer.png");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _image_BMICLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/BMICLogo.png */ "./src/image/BMICLogo.png");
/* harmony import */ var _image_BMICLogo_footer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/BMICLogo_footer.png */ "./src/image/BMICLogo_footer.png");
//https://css-tricks.com/building-progress-ring-quickly/
//https://codepen.io/JMChristensen/pen/Ablch




var circle = document.querySelector('.progress-ring__circle');
var circleText = document.querySelector('.circle-center-text');
var circle_ircle = document.querySelector('.circle-ircle');
var circle_bmitag = document.querySelector('.circle-bmitag');
var record_container = document.querySelector('.record-container');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI; //circumference(圓周長) = radius(半徑) * 2 * PI
// step. 1 這邊要先了解 下2行註解 不部會有動畫

circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
circle.style.strokeDashoffset = circumference;
var bmiResult = document.querySelector('.bmi-result');
var time = new Date();
var url = new URL(window.location.href);
var pag_count = 8; //Step 3: Progress to offset

function setProgress(percent) {
  //const offset = circumference - percent / 100 * circumference;
  var offset = (100 - percent) / 100 * circumference; //let colortext;

  circle.style.strokeDashoffset = offset;

  var _bmiCondition = bmiCondition(percent),
      result = _bmiCondition.result,
      colortext = _bmiCondition.colortext,
      className = _bmiCondition.className; //colortext = getCssrootColorVarable('--light');


  circleStyle(colortext, percent);
  bmiResultStyle(result, colortext);
  setLocalStorage({
    head: result,
    bmi: percent.toFixed(2),
    h: hei.value,
    w: wei.value,
    className: className,
    time: "".concat(time.getDate(), "-").concat(time.getMonth() + 1, "-").concat(time.getUTCFullYear())
  });
  UIdisplay(); // if (percent < 18.5) {
  //   colortext = getCssrootColorVarable('--light');
  //   circleStyle(colortext, percent);
  //   bmiResultStyle("過輕",colortext);
  //   // bmiResult.innerHTML = "過輕";
  //   // bmiResult.style.color = colortext;
  //   // circle_bmitag.style.fill = colortext;
  // }
}
/**
 * 拿取 style.css root varable
 * @param {*} colorName 
 * @returns 
 */


function getCssrootColorVarable(colorName) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(colorName);
}
/**
 * 改變圓形的樣式
 * @param {*} color 
 * @param {*} percent 
 */


function circleStyle(color, percent) {
  circle.style.stroke = color;
  circleText.innerHTML = percent.toFixed(2);
  circleText.style.stroke = color;
}
/**
 * bmi結果樣式
 * @param {*} result_text 
 * @param {*} color 
 */


function bmiResultStyle(result_text, color) {
  bmiResult.innerHTML = result_text;
  bmiResult.style.color = color;
  circle_bmitag.style.fill = color;
}

function bmi() {
  var h = hei.value / 100;
  return wei.value / Math.pow(h, 2);
}

function bmiCondition(percent) {
  var color;

  if (percent < 18.5) {
    color = getCssrootColorVarable('--light');
    return {
      result: "過輕",
      colortext: color,
      className: 'record-light'
    };
  }

  if (percent >= 18.5 && percent < 24) {
    color = getCssrootColorVarable('--stand');
    return {
      result: "標準",
      colortext: color,
      className: 'record-stand'
    };
  }

  if (percent >= 24 && percent < 27) {
    color = getCssrootColorVarable('--litleheavy');
    return {
      result: "過重",
      colortext: color,
      className: 'record-litleheavy'
    };
  }

  if (percent >= 27 && percent < 30) {
    color = getCssrootColorVarable('--lightheavy');
    return {
      result: "輕度肥胖",
      colortext: color,
      className: 'record-lightheavy'
    };
  }

  if (percent >= 30 && percent < 35) {
    color = getCssrootColorVarable('--midheavy');
    return {
      result: "中度肥胖",
      colortext: color,
      className: 'record-midheavy'
    };
  }

  if (percent >= 35) {
    color = getCssrootColorVarable('--tooheavy');
    return {
      result: "重度肥胖",
      colortext: color,
      className: 'record-tooheavy'
    };
  }
}

var hei = document.querySelector('.height');
var wei = document.querySelector('.weigth'); // const calcBtn = document.querySelector('.calcBtn')
//setProgress(input.value);

circleText.addEventListener('click', function (e) {
  // if (input.value < 101 && input.value > -1) {
  //   setProgress(input.value);   
  // }
  var bmire = bmi(); //用正規化避免輸入非數字 長度 < 2

  var rules_d = /\d{2,}/; //const rules_zero = /^[1]/;
  // if (hei.value <= 0  || wei.value <= 0) {
  //   alert("請輸入:身高、體重")
  // }

  if (!rules_d.test(hei.value) && !rules_d.test(wei.value)) {
    alert("請輸入2位數以上的數字");
    return;
  }

  setProgress(bmire);
});

function setLocalStorage(parms) {
  if (localStorage.bmi_log !== undefined) {
    var newbmilog;
    newbmilog = JSON.parse(window.localStorage.getItem("bmi_log"));
    newbmilog.unshift(parms);
    window.localStorage.removeItem("bmi_log");
    window.localStorage.setItem("bmi_log", JSON.stringify(newbmilog));
  } else {
    //let b = [].push(parms);//會出事
    var b = [];
    b.push(parms); //console.log(JSON.stringify(b.push(parms)));

    window.localStorage.setItem("bmi_log", JSON.stringify(b));
  }
}

function getLocalStorage() {
  return JSON.parse(window.localStorage.getItem("bmi_log"));
}

function paginationLC(list) {
  //console.log(num);
  //let list = getLocalStorage() == undefined ? [] : getLocalStorage();
  var pag_total = []; //分頁共幾頁

  var c = []; // 暫存

  if (list.length == 1) {
    pag_total.push(list); // 無法直接 return p.return (list)

    return pag_total;
  }

  list.forEach(function (l) {
    c.push(l);

    if (c.length % pag_count == 0) {
      //p.push([...c]);//ES6  ref value
      pag_total.push(Array.from(c)); //不影響原來的  array

      c.length = 0;
    }
  });

  if (c.length % pag_count !== 0) {
    pag_total.push(Array.from(c));
  } //console.log("pag_total", pag_total);


  return pag_total;
}

function UIdisplay(params) {
  var page = params || 1; //方法1
  //---------------------------------------------------------
  //const urlParams = new URLSearchParams(window.location.search);
  //const clickPage = urlParams.get('p');
  // console.log("urlParams",urlParams);
  // console.log("clickPage",clickPage);
  //let p = (clickPage !== null) ? clickPage:num;
  //---------------------------------------------------------
  //方法2
  //---------------------------------------------------------
  //---------------------------------------------------------  

  var list = getLocalStorage() == undefined ? [] : getLocalStorage();
  console.log("list", list);
  var pag = paginationLC(list);
  var results = "";

  if (list.length == 0) {
    return;
  }

  console.log(pag[page - 1]);
  pag[page - 1].forEach(function (l) {
    results += "\n<li class=\"record ".concat(l.className, "\">\n  <span class=\"record-title\">").concat(l.head, "</span>\n  <span class=\"record-content\"><small>BMI</small>").concat(l.bmi, "</span>\n  <span class=\"record-content\"><small>weight</small>").concat(l.w, "kg</span>\n  <span class=\"record-content\"><small>height</small>").concat(l.h, "cm</span>\n  <span class=\"record-time\">").concat(l.time, "</span>\n</li>\n    ");
  });
  record_container.innerHTML = results;
  UIpagination(pag.length);
}

function UIpagination(pag_len) {
  var pag_wrap = document.querySelector('.pag-wrap');
  var results = "";

  if (pag_len <= 1) {
    return;
  }

  for (var i = 0; i < pag_len; i++) {
    results += "\n    <li>\n      <button class=\"pag-click\" data-id=".concat(i + 1, " >").concat(i + 1, "</button>\n    </li>\n    ");
  } //方法1
  //---------------------------------------------------------
  //<li>
  //<a href="http://${url.host}${url.pathname}?p=${i+1}" class="pag-click" data-id=${i + 1} >${i + 1}</a>
  //</li>
  //---------------------------------------------------------


  pag_wrap.innerHTML = results; //必須等 pag_wrap.innerHTML = results; 才能執行
  //const pag_click = [...document.querySelectorAll('.pag-click')];
  //console.log(pag_click);

  var paginationEle = document.getElementById('pagination');
  paginationEle.addEventListener("click", function (e) {
    //const {id} = e.target.dataset;
    e.preventDefault();
    UIdisplay(e.target.innerText); // console.log(e.target)
    // console.log(id)
    // console.log("#pagination",e.target.currentTarget)
  }); // pag_click.forEach(btn => {
  //   btn.addEventListener("click", e => {
  //     //paginationLC(e.target.innerText);
  //     e.preventDefault();
  //     UIdisplay(e.target.innerText);
  //    // console.log(e.target.innerText);
  //     //console.log(1)      
  //   })
  // });
}
/**
 * 監聽 每顆按鈕 點選分頁
 */
// function pagClick(pag_click) {
//   console.log("pag_click",pag_click);
//   //沒法讀取到 pag_click pag_click =[] 空的
//   pag_click.forEach(btn => {
//     btn.addEventListener("click", e => {
//       //paginationLC(e.target.innerText);
//       //e.preventDefault();
//       UIdisplay(e.target.innerHtml);
//       console.log(e.target.innerHtml);
//     })
//   });
//   //console.log(pag_click);
// }

/** init 初始化
 * 
 *  */


document.addEventListener("DOMContentLoaded", function (e) {
  UIdisplay(1); //pagClick();
});
/** init 初始化
 * 
 *  */
// (function () {
//   UIdisplay(1);
// })();
})();

/******/ })()
;
//# sourceMappingURL=app.6a598d08.js.map