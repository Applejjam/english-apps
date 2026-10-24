/*
  NAVI PLAY 방문자 통계 (GoatCounter)
  - 방문자 화면에는 아무것도 보이지 않아요. 통계는 GoatCounter 대시보드에서 개발자만 볼 수 있어요.
  - 쿠키를 쓰지 않고 개인정보(이름·IP 원본 등)를 저장하지 않아요.
  - 아래 CODE에 GoatCounter 가입 때 정한 코드를 넣으면 집계가 시작돼요.
    예) 대시보드 주소가 https://naviplay.goatcounter.com 이면 CODE = 'naviplay'
  - 내 방문은 빼고 싶다면: 사이트 주소 끝에 #toggle-goatcounter 를 붙여 한 번 열면,
    그 브라우저에서는 집계되지 않아요. (다시 열면 해제)
*/
(function () {
  var CODE = 'naviplay'; // ← 여기에 GoatCounter 코드 입력

  if (!CODE) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
