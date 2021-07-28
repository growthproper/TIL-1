(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{589:function(t,a,e){"use strict";e.r(a);var s=e(44),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"casperjs-캡쳐시-한글이-깨지는-문제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#casperjs-캡쳐시-한글이-깨지는-문제"}},[t._v("#")]),t._v(" Casperjs 캡쳐시 한글이 깨지는 문제")]),t._v(" "),e("ul",[e("li",[t._v("casperjs로 네이버 카페를 캡쳐하면 일부 페이지 한글이 깨짐.")]),t._v(" "),e("li",[t._v("한글 폰트 때문은 아님. (폰트있음, 아래거 다 필요없음.)\n"),e("ul",[e("li",[e("a",{attrs:{href:"http://stackoverflow.com/questions/15029002/phantomjs-screenshot-font-missing-boxes-rendered-instead",target:"_blank",rel:"noopener noreferrer"}},[t._v("phantomjs screenshot font missing, boxes rendered instead"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://extjs.makewebapp.net/archives/174",target:"_blank",rel:"noopener noreferrer"}},[t._v("phantomjs, casperjs 한글 문제 해결하기"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://blog.sheeps.me/index.php/archives/64",target:"_blank",rel:"noopener noreferrer"}},[t._v("일본 글꼴 설치"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("casperjs가 아니라 phantomjs로 해도 깨짐.")]),t._v(" "),e("li",[t._v("네이버 카페는 html 기본 charset이 KSC5601임.")]),t._v(" "),e("li",[t._v("한글이 깨지지 않는 페이지는 다음처럼 content-type를 두번 정의. euc-kr이 추가되어있음. (뭐야이게..)")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/html;charset=KSC5601"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/html;charset=euc-kr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ul",[e("li",[e("p",[t._v("Webkit에 KSC5601은 나중에 추가되었음. "),e("a",{attrs:{href:"https://bugs.webkit.org/show_bug.cgi?id=59075",target:"_blank",rel:"noopener noreferrer"}},[t._v("Korean encoding alias KSC5601 does not work"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("결국 dependency가 phantomjs 2.0가 아닌 casper는 안됨.")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- casper 1.1.0-beta3 (깨짐)\n  + phantomjs 1.9.8 (깨짐)\n    * AppleWebKit/534.34 (깨짐)\n+ phangomjs 2.0 (정상)\n  + AppleWebKit/538.1 (정상)\n")])])]),e("ul",[e("li",[e("p",[t._v("근데 동작안함. "),e("a",{attrs:{href:"https://github.com/ariya/phantomjs/issues/12928",target:"_blank",rel:"noopener noreferrer"}},[t._v("PhantomJS 2.0 does not work in Mac OS Yosemite"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("사이트가 아니라 github에서 받아야함. "),e("a",{attrs:{href:"https://github.com/eugene1g/phantomjs/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("PhantomJS 2.0 binaries"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("phantomjs 2.0은 KSC5601를 정상 랜더링함.")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"http://phantomjs.org/faq.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phantomjs의 webkit 버전확인"),e("OutboundLink")],1),t._v("은 "),e("code",[t._v("phantomjs examples/useragent.js.")]),t._v(" 로")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);