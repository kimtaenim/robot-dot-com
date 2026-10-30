// ROBOT-DOT-COM 수치표. 재미 조정은 여기 숫자만 바꾼다.
window.CONFIG = {
  board: {
    cols: 6,          // 가로 칸 수
    rows: 10,         // 세로 줄 수 (홀수 줄은 반 칸 오른쪽으로 밀림)
    cellMax: 56,      // 칸 폭 최대(px). 화면이 좁거나 낮으면 자동으로 줄어듦
    cellMin: 40,      // 칸 폭 최소(px)
    gap: 2            // 칸 사이 틈(px)
  },

  // 회사 유형 5종 (플레이어·경쟁사 공통)
  types: [
    { key: 'arm',   name: '협동로봇',   tile: 'arm',   speed: 1.0, price: 10, grade: 1.0, resist: '보통' },
    { key: 'legs',  name: '4족로봇',    tile: 'legs',  speed: 0.8, price: 12, grade: 1.3, resist: '높음' },
    { key: 'hum',   name: '휴머노이드', tile: 'hum',   speed: 0.7, price: 6,  grade: 2.0, resist: '낮음' },
    { key: 'wheel', name: '서비스로봇', tile: 'wheel', speed: 1.4, price: 8,  grade: 0.7, resist: '낮음' },
    { key: 'tool',  name: '부품·SW',    tile: 'tool',  speed: 0.6, price: 14, grade: 1.6, resist: '높음' }
  ],

  // 회사 5색 : 0번이 내 회사, 1-4번이 경쟁사
  companyColors: ['#F28C28', '#4CC46A', '#A57BE8', '#4DB8F0', '#F2D23C'],

  // 경쟁사 (가상 회사. 실제 회사 이름 금지)
  rivals: {
    count: 4,
    names: ['깡통상사', '삐빅테크', '볼트공방', '덜컹로보', '찌릿기계', '뚝딱메카', '나사네', '철컥산업'],
    growBase: 1,      // 매 턴 뻗는 칸 수 (유형 속도 계수를 곱해 누적, 1 이상 쌓이면 1칸)
    bigAt: 15,        // 칸 수가 이 이상이면
    growBig: 2        // 매 턴 이만큼 뻗음
  },

  // 접촉 판정
  contact: {
    absorbRatio: 2,   // 맞닿은 두 회사 중 한쪽이 다른 쪽의 이 배수 이상이면 통째로 흡수
    absorbPerTurn: 1, // 한 회사가 한 턴에 흡수할 수 있는 횟수 (연쇄 흡수로 판이 한 번에 끝나는 것 방지)
    minBigSize: 6,    // 큰 쪽이 이 칸 수 이상일 때만 흡수 (초반에 1칸 대 2칸으로 먹히는 것 방지)
    graceTurns: 5     // 처음 이 턴 동안은 흡수 없음
  },

  // 돈 : 매출 = 칸 수 × 유형 매출 단가 (시장 칸 보너스는 5단계)
  economy: {
    startCash: 50,          // 창업 때 지갑
    stealPerCell: 10,       // 뺏기 비용 = 상대 칸 수 × 이 값 × 상대 유형 저항
    guardPerCell: 5,        // 방어 비용 = 내 칸 수 × 이 값
    guardStreakMul: 2,      // 연속으로 방어하면 비용이 이 배수씩 오름 (한 턴 쉬면 원래대로)
    resist: { '낮음': 0.8, '보통': 1.0, '높음': 1.3 },
    rivalStealChance: 0.2   // 경쟁사가 자금이 있을 때 가장 약한 이웃 칸 1개를 뺏을 확률
  },

  // 기존 세력 (산업용 팔)
  legacy: { name: '대공장', tile: 'iarm' }
};
