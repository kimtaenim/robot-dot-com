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

  // 기존 세력 (산업용 팔)
  legacy: { name: '대공장', tile: 'iarm' }
};
