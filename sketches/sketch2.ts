import p5 from 'p5';

export const sketch2 = (p: p5) => {
  const X_origin = 166.67;

  function flip(a: number) {
    return 2 * X_origin - a;
  }

  p.setup = () => {
    p.createCanvas(400, 600);
  };

  p.draw = () => {
    p.background(255);
    p.noStroke();

    p.translate(-50, -50);
    p.scale(1.5);

    // 헤드폰 곡선
    p.fill('#404040');
    p.ellipse(166.4, 163.3, 174.5, 138);

    p.fill('#FFFFFF');
    p.ellipse(166.4, 161.7, 165.5, 126);
    p.rect(65, 160, 200, 100);

    // 옷
    p.fill('#DDD5CF');
    p.push();
    p.stroke('#262626');
    p.strokeWeight(2);
    p.quad(180, 330, 365, 370, 330, 535, 145, 495);
    p.quad(flip(180), 330, flip(365), 370, flip(330), 535, flip(145), 495);
    p.noStroke();
    p.rect(120, 330, 90, 160);
    p.pop();

    // 목
    p.fill('#FDDEBF');
    p.push();
    p.stroke('#262626');
    p.strokeWeight(4);
    p.ellipse(165.5, 334.7, 92, 75);
    p.noStroke();
    p.rect(119.5, 268, 92, 67);
    p.ellipse(165.5, 334.7, 92, 75);
    p.pop();

    // 헤드폰 이어컵
    p.fill('#404040');
    p.rect(225, 185, 20, 70);
    p.rect(88, 185, 20, 70);

    // 머리카락 베이스
    p.fill('#262626');
    p.rect(97.5, 143, 138.5, 50.5);

    p.push();
    p.translate(X_origin, 139.5);
    p.ellipse(0, 0, 138.5, 74);
    p.pop();

    // 머리카락 가르마
    p.fill('#FEECDA');
    p.push();
    p.translate(196, 175.5);
    p.ellipse(0, 0, 29.5, 60);
    p.pop();

    // 얼굴 베이스
    p.rect(109, 193.5, 117, 67);
    p.quad(flip(204), 247.5, flip(224.5), 260, flip(195), 302.5, flip(177), 289);
    p.quad(204, 247.5, 224.5, 260, 195, 302.5, 177, 289);

    // 얼굴 턱
    p.push();
    p.translate(X_origin, 300);
    p.ellipse(0, 0, 58, 28);
    p.pop();

    p.rect(135, 247.5, 64, 44);

    // 헤드폰
    p.fill('#404040');
    p.rect(73, 200, 16, 40);
    p.rect(244.5, 200, 16, 40);
    p.rect(79.4, 160, 4.4, 40);
    p.rect(249, 160, 4.4, 40);

    // 머리카락 옆 볼륨
    p.fill('#262626');
    p.push();
    p.translate(101.5, 160);
    p.rotate(1.7);
    p.ellipse(0, 0, 67, 26.7);
    p.pop();

    p.push();
    p.translate(flip(101.5), 160);
    p.rotate(1.45);
    p.ellipse(0, 0, 67, 26.7);
    p.pop();

    // 눈썹
    p.fill('#262626');
    p.rect(176.5, 189.5, 42, 6);
    p.rect(115, 189.5, 42, 6);

    // 오른쪽 눈 아이라인
    p.fill('#262626');
    p.push();
    p.translate(196.4, 216.7);
    p.rotate(3.1);
    p.ellipse(0, 0, 31, 18.5);
    p.pop();

    p.push();
    p.translate(205.3, 216.4);
    p.rotate(-2.8);
    p.ellipse(0, 0, 31, 15);
    p.pop();

    // 오른쪽 눈 흰자
    p.fill('#F2F2F2');
    p.push();
    p.translate(197.2, 218.5);
    p.rotate(-3.1);
    p.ellipse(0, 0, 33, 18);
    p.pop();

    // 오른쪽 눈동자
    p.fill('#262626');
    p.push();
    p.translate(196.9, 214.1);
    p.ellipse(0, 0, 12.4, 12.6);
    p.pop();

    // 오른쪽 눈 밑 윤곽선 
    p.fill('#FEECDA');
    p.quad(flip(113.9), 215.6, flip(130.7), 220.8, flip(128.4), 228.2, flip(111.6), 223);
    p.quad(flip(127.1), 219.9, flip(153.8), 218.2, flip(154.6), 232.5, flip(128), 234.1);

    // 왼쪽 눈 아이라인
    p.fill('#262626');
    p.push();
    p.translate(137.8, 216.7);
    p.rotate(-3.1);
    p.ellipse(0, 0, 31, 18.5);
    p.pop();

    p.push();
    p.translate(128.8, 216.4);
    p.rotate(2.8);
    p.ellipse(0, 0, 31, 15);
    p.pop();

    // 왼쪽 눈 흰자
    p.fill('#F2F2F2');
    p.push();
    p.translate(136.9, 218.5);
    p.rotate(3.1);
    p.ellipse(0, 0, 33, 18);
    p.pop();

    // 왼쪽 눈동자
    p.fill('#262626');
    p.push();
    p.translate(137.7, 214.1);
    p.rotate(3.1);
    p.ellipse(0, 0, 12.4, 12.6);
    p.pop();

    // 왼쪽 눈 밑 윤곽선
    p.fill('#FEECDA');
    p.quad(113.9, 215.6, 130.7, 220.8, 128.4, 228.2, 111.6, 223);
    p.quad(127.1, 219.9, 153.8, 218.2, 154.6, 232.5, 128.0, 234.1);

    // 추가 커버
    p.push();
    p.rectMode(p.CENTER);
    p.rect(X_origin, 229, 110, 15);
    p.pop();

    // 코
    p.fill('#262626');
    p.triangle(X_origin + 1.2, 255, X_origin - 1.2, 255, X_origin, 220);

    // 입
    p.push();
    p.translate(X_origin, 269);
    p.ellipse(0, 0, 54, 15);
    p.pop();

    // 입술
    p.fill('#FEECDA');
    p.push();
    p.translate(X_origin, 267.5);
    p.ellipse(0, 0, 52, 15);
    p.pop();

    p.rect(134.7, 261.8, 64.2, 7.8);

    // 볼
    p.push();
    p.translate(225, 226);
    p.ellipse(0, 0, 6, 65);
    p.pop();

    p.push();
    p.translate(flip(225), 226);
    p.ellipse(0, 0, 6, 65);
    p.pop();

    // 도형 깍기
    p.fill('#FFFFFF');
    p.quad(flip(101.1), 255.7, flip(107.4), 253.2, flip(113.1), 267.6, flip(106.7), 270.1);
    p.quad(101.1, 255.7, 107.4, 253.2, 113.1, 267.6, 106.7, 270.1);
    p.rect(112.5, 275, 7.5, 62);
    p.rect(211.3, 280, 7.5, 57);
  };
};