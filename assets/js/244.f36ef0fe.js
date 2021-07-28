(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{624:function(t,v,l){"use strict";l.r(v);var _=l(44),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,l=t._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"react-testing"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#react-testing"}},[t._v("#")]),t._v(" React: Testing")]),t._v(" "),l("h1",{attrs:{id:"velopert님-강의"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#velopert님-강의"}},[t._v("#")]),t._v(" (Velopert님 강의)")]),t._v(" "),l("h2",{attrs:{id:"테스트란"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#테스트란"}},[t._v("#")]),t._v(" 테스트란?")]),t._v(" "),l("ul",[l("li",[t._v("버튼을 누르는 것도 테스트\n"),l("ul",[l("li",[t._v("일일히 하기 힘드니까 자동화")])])]),t._v(" "),l("li",[t._v("주요 이점\n"),l("ul",[l("li",[t._v("원활한 협업 (동료뿐만이 아니라 미래의 나와도 협업)")]),t._v(" "),l("li",[t._v("자신감 있게 리팩토링 할 수 있다")]),t._v(" "),l("li",[t._v("TC 작성한다고 버그가 발생하지 않는건 아님\n"),l("ul",[l("li",[t._v("다만 원인 분석이 빨라짐")]),t._v(" "),l("li",[t._v("버그에 대해 TC를 만들면 실수를 두번 다시 반복 ㄴㄴ")])])])])]),t._v(" "),l("li",[t._v("jest\n"),l("ul",[l("li",[t._v('"test": "jest --watchAll --verbose"\n'),l("ul",[l("li",[t._v("--verbose: 자세히 보여주기")])])]),t._v(" "),l("li",[t._v("test라고 써도 되고 it이라고 써도 되는데 it이 조금 더 문장이 된다")]),t._v(" "),l("li",[t._v("it을 하나의 그룹으로 묶어줄 땐 describe를 씀")])])]),t._v(" "),l("li",[t._v("TDD\n"),l("ul",[l("li",[t._v("코드를 먼저 작성하고 테스트를 짜야하는 경우에는 일부터 테스트를 틀리게라도 짠다")])])])]),t._v(" "),l("h2",{attrs:{id:"리액트-테스트"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#리액트-테스트"}},[t._v("#")]),t._v(" 리액트 테스트")]),t._v(" "),l("ul",[l("li",[t._v("Enzyme 점유율이 높지만 새로 하는데선 react-testing-library 써라")]),t._v(" "),l("li",[t._v("Enzyme\n"),l("ul",[l("li",[t._v("컴포넌트 인스턴스에 접근")]),t._v(" "),l("li",[t._v("state/props 확인")]),t._v(" "),l("li",[t._v("메서드 직접 호출")])])]),t._v(" "),l("li",[t._v("react-testing-library\n"),l("ul",[l("li",[t._v("렌더링 결과에 집중")]),t._v(" "),l("li",[t._v("DOM 기반 테스트")]),t._v(" "),l("li",[t._v("UI 위한 테스트 하기에 최적화")]),t._v(" "),l("li",[t._v("엔자임보다 돔기반 테스트가 편함. 컴포넌트 인스턴스에 접근 안해서 편하기도 함")])])]),t._v(" "),l("li",[t._v("shallow vs mount\n"),l("ul",[l("li",[t._v("shallow는 겉에껏만 렌더함 안에도 있으면 렌더 안함")])])]),t._v(" "),l("li",[t._v("Hook을 만약에 사용한다면 shallow 쓰면 버그날 수 있어서 mount 해야한다\n"),l("ul",[l("li",[t._v("enzyme은 돔기반 테스트 할때 좀 불편한 감이 있다")])])])]),t._v(" "),l("h2",{attrs:{id:"react-testing-library"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#react-testing-library"}},[t._v("#")]),t._v(" react-testing-library")]),t._v(" "),l("ul",[l("li",[t._v("DOM위주 테스트. props나 state 조회하는 일은 없다\n"),l("ul",[l("li",[t._v("리팩토링할때 주로 내부 구조나 네이밍은 바뀌어도 작동 방식은 크게 안 바뀐다는것을 중요시여김.")])])]),t._v(" "),l("li",[t._v("필요한 기능만 지원해줘서 가볍고, 개발자들이 일관적이게 테스트코드 작성하도록 도움")]),t._v(" "),l("li",[t._v("유저 입장에서 테스트하는거기 때문에 class 등으로 querySelector 하기보단 "),l("code",[t._v("getByLabelText")]),t._v("등으로 실제 보이는걸 누르도록 한다")]),t._v(" "),l("li",[t._v("우왕 벨로퍼트님은 습관적으로 매치스냅샷을 쓰시네")])]),t._v(" "),l("hr"),t._v(" "),l("h2",{attrs:{id:"테스트"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#테스트"}},[t._v("#")]),t._v(" 테스트")]),t._v(" "),l("ul",[l("li",[t._v("애플리케이션이 어느 정도 확실한 수준까지 동작하는지 자동으로 확인하는 도구\n"),l("ul",[l("li",[t._v("질, 양(커버리지), 종류(단위, 통합, End-to-end teat(전체 테스트, E2E테스트))")])])]),t._v(" "),l("li",[t._v("테스트 도구: Mocha, Chai, Sinon, Enzyme, jest")]),t._v(" "),l("li",[t._v("리액트의 테스트\n"),l("ul",[l("li",[t._v("테스팅 피라미드: 대부분 단위 테스트 작성 -> 어느정도 통합테스트 -> 몇가지 전체테스트")]),t._v(" "),l("li",[t._v("하지만 리액트 a는: 주로 함수보단 컴포넌트 사용해서, 통합테스트 주로 작성하고 단위테스트는 조금 전략")])])]),t._v(" "),l("li",[t._v("테스트\n"),l("ul",[l("li",[t._v("단위 테스트: 애플리케이션 일부(주로 컴포넌트)를 독립적으로 테스트")]),t._v(" "),l("li",[t._v("통합 테스트: 서로 다른 부분(다른 컴포넌트)들이 모여 특정 상황에서 잘 엮여서 작동하는지 확인. props가 자손에 잘 전달되는지.")]),t._v(" "),l("li",[t._v("전체 테스트: a를 브라우저 환경에서 테스트. e.g. 회원 가입 전체 과정을 흉내내기")])])]),t._v(" "),l("li",[t._v("컴포넌트가 애플리케이션 전체에 걸쳐 재사용되는 일이 없더라도 테스트를 위해 컴포넌트나 함수를 내보내는게 좋다.")])]),t._v(" "),l("h2",{attrs:{id:"mocha와-chai-테스트-설정"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mocha와-chai-테스트-설정"}},[t._v("#")]),t._v(" Mocha와 Chai 테스트 설정")]),t._v(" "),l("ul",[l("li",[t._v("Mocha\n"),l("ul",[l("li",[t._v("특정 프레임워크(애플리케이션)안에 있는 모든 테스트를 실행시키는 실행기")]),t._v(" "),l("li",[t._v("모카는 리액트 a에서 사용되는 유명한 테스트 실행기. (Karma는 앵귤러 테스트 주로 함)")])])]),t._v(" "),l("li",[t._v("Chai\n"),l("ul",[l("li",[l("code",[t._v("X는 Y와 같아야 한다")]),t._v("라고 알려주는 단언을 작성")])])]),t._v(" "),l("li",[t._v("JSDom\n"),l("ul",[l("li",[t._v("리액트 컴포넌트는 실제로 HTML로 그려지며 DOM이 되니 가상의 브라우저가 필요할것이다. 하지만 테스트코드는 실제 브라우저에서 실행x 때문에 컴포넌트를 직접 테스트하기 위한 최소한의 환경을 갖춰야 한다.")])])])]),t._v(" "),l("h2",{attrs:{id:"enzyme으로-테스트-단위-통합-테스트"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#enzyme으로-테스트-단위-통합-테스트"}},[t._v("#")]),t._v(" Enzyme으로 테스트: 단위, 통합 테스트")]),t._v(" "),l("h2",{attrs:{id:"refer"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),l("ul",[l("li",[t._v("https://adhrinae.github.io/posts/react-testing-tutorial-kr")]),t._v(" "),l("li",[t._v("Velopert와 함께하는 리액트 테스팅: http://learn-react-test.vlpt.us/?fbclid=IwAR1ZPsmPULnyxqyhmp76rvwrZP9BhjM6rl3Ao2mXA6KpjGPqW-_1zMX8weI#/05-react-testing-library")])])])}),[],!1,null,null,null);v.default=a.exports}}]);