//https://css-tricks.com/building-progress-ring-quickly/
//https://codepen.io/JMChristensen/pen/Ablch
import './css/reset.css';
import './css/style.css';

import './image/BMICLogo.png';
import './image/BMICLogo_footer.png';



const circle = document.querySelector('.progress-ring__circle');
const circleText = document.querySelector('.circle-center-text');
const circle_ircle = document.querySelector('.circle-ircle');
const circle_bmitag = document.querySelector('.circle-bmitag');
const record_container = document.querySelector('.record-container');

const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
//circumference(圓周長) = radius(半徑) * 2 * PI

// step. 1 這邊要先了解 下2行註解 不部會有動畫
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;
const bmiResult = document.querySelector('.bmi-result');

const time = new Date();
const url = new URL(window.location.href);
const pag_count = 8;


//Step 3: Progress to offset

function setProgress(percent) {

  //const offset = circumference - percent / 100 * circumference;
  const offset = ((100 - percent) / 100) * circumference;
  //let colortext;

  circle.style.strokeDashoffset = offset;
  let { result, colortext, className } = bmiCondition(percent);
  //colortext = getCssrootColorVarable('--light');
  circleStyle(colortext, percent);
  bmiResultStyle(result, colortext);

  setLocalStorage({
    head: result,
    bmi: percent.toFixed(2),
    h: hei.value,
    w: wei.value,
    className: className,
    time: `${time.getDate()}-${time.getMonth() + 1}-${time.getUTCFullYear()}`
  })
  UIdisplay();
  // if (percent < 18.5) {
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
  let h = hei.value / 100;
  return wei.value / Math.pow(h, 2);
}

function bmiCondition(percent) {
  let color;
  if (percent < 18.5) {
    color = getCssrootColorVarable('--light');
    return { result: "過輕", colortext: color, className: 'record-light' };
  }

  if (percent >= 18.5 && percent < 24) {
    color = getCssrootColorVarable('--stand');
    return { result: "標準", colortext: color, className: 'record-stand' };
  }

  if (percent >= 24 && percent < 27) {
    color = getCssrootColorVarable('--litleheavy');
    return { result: "過重", colortext: color, className: 'record-litleheavy' };
  }

  if (percent >= 27 && percent < 30) {
    color = getCssrootColorVarable('--lightheavy');
    return { result: "輕度肥胖", colortext: color, className: 'record-lightheavy' };
  }
  if (percent >= 30 && percent < 35) {
    color = getCssrootColorVarable('--midheavy');
    return { result: "中度肥胖", colortext: color, className: 'record-midheavy' };

  }
  if (percent >= 35) {
    color = getCssrootColorVarable('--tooheavy');
    return { result: "重度肥胖", colortext: color, className: 'record-tooheavy' };
  }
}

const hei = document.querySelector('.height');
const wei = document.querySelector('.weigth');


// const calcBtn = document.querySelector('.calcBtn')
//setProgress(input.value);

circleText.addEventListener('click', function (e) {
  // if (input.value < 101 && input.value > -1) {
  //   setProgress(input.value);   
  // }
  let bmire = bmi();
  //用正規化避免輸入非數字 長度 < 2
  const rules_d = /\d{2,}/;
  //const rules_zero = /^[1]/;

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
    let newbmilog;
    newbmilog = JSON.parse(window.localStorage.getItem("bmi_log"));
    newbmilog.unshift(parms);
    window.localStorage.removeItem("bmi_log");
    window.localStorage.setItem("bmi_log", JSON.stringify(newbmilog));
  } else {
    //let b = [].push(parms);//會出事
    let b = [];
    b.push(parms)

    //console.log(JSON.stringify(b.push(parms)));
    window.localStorage.setItem("bmi_log", JSON.stringify(b));
  }
}

function getLocalStorage() {
  return JSON.parse(window.localStorage.getItem("bmi_log"));
}

function paginationLC(list) {
  //console.log(num);
  //let list = getLocalStorage() == undefined ? [] : getLocalStorage();
  let pag_total = []; //分頁共幾頁
  let c = []; // 暫存
  
  
  if (list.length == 1) {
    pag_total.push(list) // 無法直接 return p.return (list)
    return pag_total;
  }

  list.forEach(l => {
    c.push(l)
    if (c.length % pag_count == 0) {
      //p.push([...c]);//ES6  ref value
      pag_total.push(Array.from(c)); //不影響原來的  array
      c.length = 0;
    }

  });

  if (c.length % pag_count !== 0) {
    pag_total.push(Array.from(c));
  }
  //console.log("pag_total", pag_total);

  return pag_total;
}

function UIdisplay(params) {
 let page = params || 1;
  //方法1
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
  let list = getLocalStorage() == undefined ? [] : getLocalStorage();
  console.log("list",list);
  let pag = paginationLC(list);
  let results = "";

  if (list.length == 0) {
    return;
  }

  console.log(pag[page-1]);

  pag[page-1].forEach(l => {
    results += `
<li class="record ${l.className}">
  <span class="record-title">${l.head}</span>
  <span class="record-content"><small>BMI</small>${l.bmi}</span>
  <span class="record-content"><small>weight</small>${l.w}kg</span>
  <span class="record-content"><small>height</small>${l.h}cm</span>
  <span class="record-time">${l.time}</span>
</li>
    `
  });

  record_container.innerHTML = results;
  UIpagination(pag.length);
}




function UIpagination(pag_len) {
  const pag_wrap = document.querySelector('.pag-wrap')
  let results = "";
  if (pag_len <= 1) {
    return;
  }
  for (let i = 0; i < pag_len; i++) {
    results += `
    <li>
      <button class="pag-click" data-id=${i + 1} >${i + 1}</button>
    </li>
    `
  }
  //方法1
  //---------------------------------------------------------
  //<li>
  //<a href="http://${url.host}${url.pathname}?p=${i+1}" class="pag-click" data-id=${i + 1} >${i + 1}</a>
  //</li>
  //---------------------------------------------------------
  pag_wrap.innerHTML = results;

  //必須等 pag_wrap.innerHTML = results; 才能執行
  
  //console.log(pag_click);
  
  const paginationEle =document.getElementById('pagination');
  paginationEle.addEventListener("click",(e)=>{
    //const {id} = e.target.dataset;
    e.preventDefault();
    UIdisplay(e.target.innerText);
    // console.log(e.target)
    // console.log(id)
    // console.log("#pagination",e.target.currentTarget)
  })
  //const pag_click = [...document.querySelectorAll('.pag-click')];
  // pag_click.forEach(btn => {
  //   btn.addEventListener("click", e => {
  //     e.preventDefault();
  //     UIdisplay(e.target.innerText);
  //    // console.log(e.target.innerText);
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
document.addEventListener("DOMContentLoaded", (e) => {  
  UIdisplay(1);
  //pagClick();
})


/** init 初始化
 * 
 *  */ 
// (function () {
//   UIdisplay(1);

// })();



