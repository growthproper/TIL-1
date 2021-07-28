(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{531:function(e,t,r){"use strict";r.r(t);var a=r(44),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"google-tag-manager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#google-tag-manager"}},[e._v("#")]),e._v(" Google Tag Manager")]),e._v(" "),r("p",[e._v("(2.0 beta ver.) https://tagmanager.google.com/#/home\n(기존 ver.) https://www.google.com/tagmanager/")]),e._v(" "),r("p",[e._v("##무엇인가?\n만든 목적: 사용자의 Custom HTML 태그 사용을 줄이기")]),e._v(" "),r("ul",[r("li",[e._v("사이트 코드를 수정하지 않고도 구글 외부의 태그를 추가 및 업데이트 할 수 있다.\n"),r("ul",[r("li",[e._v("=>오류를 줄일 수 있고, 웹마스터에게 요청하지 않아도 되며, 사이트에 태그를 빠르게 삽입 가능")])])]),e._v(" "),r("li",[e._v("태그\n"),r("ul",[r("li",[e._v("Google과 같은 제3자에게 정보를 전송하는 자바스크립트 코드.")]),e._v(" "),r("li",[e._v("GTM같은걸 사용하지 않으면 이런걸 사이트의 소스코드에 직접 추가해야 한다.")]),e._v(" "),r("li",[e._v("GTM의 인터페이스에서 실행하려는 태그와 실행을 원하는 시점을 지정하면 됨.")])])]),e._v(" "),r("li",[e._v("러닝커브가 좀 있습니다 ^^")])]),e._v(" "),r("p",[e._v("##설치방법\nhttp://mindthelog.com/2015/02/%EA%B5%AC%EA%B8%80-%ED%83%9C%EA%B7%B8%EB%A7%A4%EB%8B%88%EC%A0%80/")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("<body>")]),e._v("시작하는 태그 바로 뒤에 스니펫을 붙여넣는다.")]),e._v(" "),r("li",[e._v("home > 새태그 > Google Analytics > Universal Analytics > 태그이름설정 > 추적아이디입력("),r("a",{attrs:{href:"https://support.google.com/tagmanager/answer/3281379?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("도움"),r("OutboundLink")],1),e._v(") > 페이지뷰 > 모든페이지 > 완료")]),e._v(" "),r("li",[e._v("태그가 추가되면, 컨테이너 버전을 새로 만들어서 저장(우측상단) (게시까지 하지 않으면 계속 오류나니까 주의!)")])]),e._v(" "),r("p",[e._v("##Trigger Guide")]),e._v(" "),r("ul",[r("li",[e._v("How tags are fired(and blocked)")]),e._v(" "),r("li",[e._v("예전버전에선 rules라고 했다.")]),e._v(" "),r("li",[e._v("Click, Link click, form submit, error, history event, timer 이벤트들을 specify한다.")]),e._v(" "),r("li",[e._v("이 트리거를 만들면, GTM이 자동으로 그 이벤트들을 listening한다.")]),e._v(" "),r("li",[e._v("All pages는 전체에서, Some pages는 특정 조건에서 트리거된다.")]),e._v(" "),r("li",[e._v("filter를 추가할수 있다. (ex. Session alive equals true, Page path matches RegEx ^/contacts-us/$)")])]),e._v(" "),r("p",[e._v("##Variable Guide")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("~~varible name~~")]),e._v(" 이렇게 쓴다.")]),e._v(" "),r("li",[e._v("tip: GA Tracking Code도 저장해두면 좋다.\n-변수"),r("code",[e._v(">")]),e._v(" 사용자 정의 변수 새로 만들기"),r("code",[e._v(">")]),e._v(" 유형:상수"),r("code",[e._v(">")]),e._v(" 값: UA-3108...-2")]),e._v(" "),r("li",[e._v("변수 이름 바꾸면 reference하고있는것들도 자동업데이트 된다.")])]),e._v(" "),r("h3",{attrs:{id:"pages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pages"}},[e._v("#")]),e._v(" Pages")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Page URL")]),e._v(" – 주소 반환 (http://www.simoahava.com/article?parameter=true#anchor)")]),e._v(" "),r("li",[r("strong",[e._v("Page Hostname")]),e._v(" – 호스트네임 반환 (www.simoahava.com)")]),e._v(" "),r("li",[r("strong",[e._v("Page Path")]),e._v(" – 패스 반환 (/article)")]),e._v(" "),r("li",[r("strong",[e._v("Referrer")]),e._v(" – returns a string containing the URL of the page which brought the visitor to the current page (http://www.simoahava.com/home/), from document.referrer")])]),e._v(" "),r("p",[e._v("####Utilities")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Event")]),e._v(" – returns a string containing the value stored in the ‘event’ dataLayer key")]),e._v(" "),r("li",[r("strong",[e._v("Container ID")]),e._v(" – 컨테이너 아이디 반환 (GTM-XXXXXX)")]),e._v(" "),r("li",[r("strong",[e._v("Container Version")]),e._v(" – 컨테이너 버젼 반환")]),e._v(" "),r("li",[r("strong",[e._v("Random Number")]),e._v(" – 0 에서 2147483647까지 랜덤넘버")])]),e._v(" "),r("p",[e._v("####Errors")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Error Message")]),e._v("- JavaScript Error Trigger로 나온 에러메세지")]),e._v(" "),r("li",[r("strong",[e._v("Error Line")]),e._v(" – 에러난 라인넘버")]),e._v(" "),r("li",[r("strong",[e._v("Error URL")]),e._v(" – 에러난 스크립트 url")]),e._v(" "),r("li",[r("strong",[e._v("Debug Mode")]),e._v(" – 유저가 GTM Debug mode에 있는지 Boolean리턴")])]),e._v(" "),r("p",[e._v("####Clicks")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Click Element")]),e._v(" – returns an HTML element that was the target of an auto-event action; this object is retrieved from the gtm.element key in dataLayer")]),e._v(" "),r("li",[r("strong",[e._v("Click Classes")]),e._v(" – returns a string contained in the className attribute value of the auto-event element")]),e._v(" "),r("li",[r("strong",[e._v("Click ID")]),e._v(" – returns a string contained in the id attribute value of the auto-event element")]),e._v(" "),r("li",[r("strong",[e._v("Click Target")]),e._v(" – returns a string contained in the target attribute value of the auto-event element")]),e._v(" "),r("li",[r("strong",[e._v("Click URL")]),e._v(" – returns a string contained in the href or action attribute value of the auto-event element")]),e._v(" "),r("li",[r("strong",[e._v("Click Text")]),e._v(" – returns a string contained in the textContent / innerText attribute value of the auto-event element")])]),e._v(" "),r("p",[e._v("####Forms\nThese are exactly the same as the Click Variables. I’m not sure why we need two sets of variables, when one generic “Auto-Event” type would suffice.")]),e._v(" "),r("p",[e._v("####History")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("New History Fragment")]),e._v(" – returns a string containing the new URL fragment after a page history change auto-event action is registered")]),e._v(" "),r("li",[r("strong",[e._v("Old History Fragment")]),e._v(" – returns a string containing the previous URL fragment")]),e._v(" "),r("li",[r("strong",[e._v("New History State")]),e._v(" – returns an object containing the new history state after a pushState() has been registered")]),e._v(" "),r("li",[r("strong",[e._v("Old History State")]),e._v(" – returns an object containing the old history state")]),e._v(" "),r("li",[r("strong",[e._v("History Source")]),e._v(" – returns a string describing the event that initiated the history change (e.g. popstate or pushState)")])]),e._v(" "),r("p",[e._v("##Tips")]),e._v(" "),r("ul",[r("li",[e._v("맨 처음에 "),r("strong",[e._v("게시")]),e._v("를 하지 않으면 스니펫을 추가하여도 계속 404에러가 난다.")]),e._v(" "),r("li",[e._v("변수 탭에서 원하는 것들을 클릭해두지 않으면 안보여서 당황할 수도 있다.")]),e._v(" "),r("li",[e._v("jquery쓰는법: $대신 jQuery('.top')이런식으로 쓴다.\n"),r("ul",[r("li",[e._v("자바스크립트: "),r("code",[e._v("return ~~Click Element~~.parentElement.parentElement.parentElement.getAttribute(‘id’)")]),e._v(";")]),e._v(" "),r("li",[e._v("제이쿼리: "),r("code",[e._v("return jQuery(~~Click Element~~).closest('div').attr('id')")]),e._v(";")])])])]),e._v(" "),r("p",[e._v("##Youtube Video\n"),r("a",{attrs:{href:"http://youtu.be/7FXbsCWsEi8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Tag Manager: Key Concepts"),r("OutboundLink")],1),e._v(" "),r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/7FXbsCWsEi8",frameborder:"0",allowfullscreen:""}}),e._v(" "),r("a",{attrs:{href:"http://youtu.be/-H_TikHFfso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Tracking in Google Analytics Universal through Google Tag Manager"),r("OutboundLink")],1),e._v(" "),r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/-H_TikHFfso",frameborder:"0",allowfullscreen:""}}),e._v(" "),r("a",{attrs:{href:"http://youtu.be/dArRMR1YuCY",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auto Event Tracking in the new version of Google Tag Manager"),r("OutboundLink")],1),e._v(" "),r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/dArRMR1YuCY",frameborder:"0",allowfullscreen:""}})]),e._v(" "),r("h2",{attrs:{id:"tagmanager-css-selector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tagmanager-css-selector"}},[e._v("#")]),e._v(" Tagmanager CSS Selector")]),e._v(" "),r("p",[e._v("http://www.simoahava.com/analytics/matches-css-selector-operator-in-gtm-triggers/")]),e._v(" "),r("h2",{attrs:{id:"load-order-of-gtm-events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#load-order-of-gtm-events"}},[e._v("#")]),e._v(" Load order of GTM events")]),e._v(" "),r("p",[r("code",[e._v("…gtm.js… > …gtm.dom… > …gtm.load")])]),e._v(" "),r("p",[e._v("If you want your tags to fire on the earliest possible moment, use either "),r("s",[e._v("event")]),e._v(" equals gtm.js or "),r("s",[e._v("url")]),e._v(" matches regex .*.")]),e._v(" "),r("p",[e._v("If you want your tags to fire after the DOM has loaded, for example if you know you have important variables processed at the very bottom of your page template, use "),r("s",[e._v("event")]),e._v(" equals gtm.dom.")]),e._v(" "),r("p",[e._v("If you want to wait for the window to load, meaning all initial requests have to be processed first, use "),r("s",[e._v("event")]),e._v(" equals gtm.load.")]),e._v(" "),r("p",[e._v("Note! I strongly recommend against leaving any critical tags to wait for gtm.load, since any hitches or timeouts in loading your page might lead to the tag never firing.")]),e._v(" "),r("p",[e._v("##reference\nhttps://support.google.com/tagmanager/answer/6102821\nhttps://support.google.com/tagmanager/answer/2574305?hl=ko&ref_topic=3441530\nhttp://social-insight.co.kr/?p=842#axzz3SY9JTNFO\nhttp://www.simoahava.com/analytics/trigger-guide-google-tag-manager/\n"),r("a",{attrs:{href:"http://www.simoahava.com/analytics/auto-event-tracking-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auto-Event Tracking In Google Tag Manager"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://www.lunametrics.com/blog/2014/05/08/tracking-clicks-custom-data-attributes-google-tag-manager-google-analytics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tracking Clicks Using Custom Data Attributes, Google Tag Manager, and Google Analytics"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://www.simoahava.com/analytics/macro-magic-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Macro Magic For Google Tag Manager"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://www.simoahava.com/analytics/variable-guide-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Variable Guide For Google Tag Manager"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://www.simoahava.com/analytics/trigger-guide-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trigger Guide For Google Tag Manager"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://marketlytics.com/tracking-banner-impressions-using-google-tag-manager-and-universal-analytics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("track banner impressions"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://milooy.wordpress.com/2016/01/14/google-analtyics-2-google-tag-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Analtyics 삽질냠냠 #2 이벤트, 그리고 Google Tag Manager"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);