// 구독 목록. 고친 뒤 Commit(저장)하면 1분쯤 뒤 사이트에 반영돼요.
// name: 서비스명 / amount: 금액(원, 쉼표 없이 숫자만) / day: 매월 결제일 / card: 결제수단
// 매년 결제는 cycle: 'yearly', month: 결제월 을 추가해요.
//   예) { name: '연간 구독', amount: 99000, day: 1, month: 3, cycle: 'yearly', card: '국민카드' },
window.SUBSCRIPTIONS = [
  { name: '배달의 민족', amount: 1990, day: 9, card: '네이버페이(카카오체크카드)' },
  { name: '네이버 mybox', amount: 12650, day: 9, card: '네이버페이(카카오체크카드)' },
  { name: '유튜브 프리미엄 라이트', amount: 8500, day: 11, card: '카카오페이머니' },
  { name: '네이버 멤버십', amount: 4900, day: 12, card: '국민카드' },
  { name: '티빙', amount: 15000, day: 14, card: '네이버페이(국민카드)' },
  { name: '버블', amount: 5000, day: 15, card: '카카오페이머니' },
  { name: '마켓컬리', amount: 1900, day: 18, card: '네이버페이(국민카드)' },
  { name: '카카오 톡서랍', amount: 990, day: 26, card: '카카오페이머니' },
  { name: '카카오 이모티콘 플러스', amount: 3900, day: 27, card: '카카오페이카드' },
];
