import p5 from 'p5';

export const sketch1 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 400);
    p.rectMode(p.CENTER);
  };

  p.draw = () => {
    p.background(255);
    
    // 하늘 배경
    p.fill('#d6eeff');
    p.noStroke();
    p.rect(300, 180, 404, 270);
    
    // 지면
    p.fill('#f0f8ff');
    p.rect(300, 217.5, 404, 195);

    // 나무 그림자들
    p.fill('#afb8b6');
    p.ellipse(174, 217, 36, 13.5);
    p.ellipse(242, 181, 36, 13.5);
    p.ellipse(436, 186, 36, 13.5);
    p.ellipse(143, 246, 36, 13.5);

    // 외곽 사각형
    p.fill('#acdbfc');
    p.rect(95.5, 118.75, 45, 67.5);
    
    p.fill('#bee4ff');
    p.rect(222.75, 54.75, 91.5, 61.5);
    
    p.fill('#cae8fd');
    p.rect(460, 60.65, 60, 89.25);
    
    p.fill('#bee4ff');
    p.rect(499, 182, 60, 60);

    // 온천 (가장 큰 타원)
    p.fill('#6993b9');
    p.ellipse(337, 262, 309, 153);

    // 온천 주변 바위
    p.fill('#727579');
    p.ellipse(426, 205, 45, 34.5);
    
    p.push();
    p.translate(385, 191);
    p.rotate(0.18);
    p.ellipse(0, 0, 43.5, 31.5);
    p.pop();
    
    p.ellipse(347, 188, 36, 25.5);
    
    p.push();
    p.translate(307, 189);
    p.rotate(-0.15);
    p.ellipse(0, 0, 51, 36);
    p.pop();
    
    p.push();
    p.translate(269, 195);
    p.rotate(-0.17);
    p.ellipse(0, 0, 48, 36);
    p.pop();
    
    p.push();
    p.translate(234, 209);
    p.rotate(-0.22);
    p.ellipse(0, 0, 63.75, 45);
    p.pop();
    
    p.push();
    p.translate(199, 239);
    p.rotate(0.72);
    p.ellipse(0, 0, 48, 52.5);
    p.pop();
    
    p.push();
    p.translate(464, 228);
    p.rotate(0.72);
    p.ellipse(0, 0, 57, 43.5);
    p.pop();

    // 물결 표현 (청록 계열)
    p.fill('#afd4cf');
    p.ellipse(358, 232, 117, 33);
    
    p.fill('#a2cfc9');
    p.ellipse(295, 278, 138, 42);
    
    p.fill('#b0dad4');
    p.ellipse(430, 293, 87, 30);

    // 온천 주변 바위(양끝)
    p.fill('#727579');
    p.push();
    p.translate(214, 291);
    p.rotate(0.72);
    p.ellipse(0, 0, 93.75, 63.75);
    p.pop();

    p.fill('#727579');
    p.push();
    p.translate(487, 303);
    p.rotate(0.35);
    p.ellipse(0, 0, 101.25, 134.25);
    p.pop();

    // 물결 표현 (하이라이트)
    p.fill('#d6ece9');
    p.ellipse(312, 285, 36, 13.5);
    
    p.fill('#e2f7f4');
    p.ellipse(328, 233, 33, 9);
    
    p.fill('#6181aa');
    p.ellipse(251, 246, 30, 7.5);
    p.ellipse(426, 259, 30, 9);

    // 추상적 바위 및 기타 요소
    p.fill('#d7dde6');
    p.quad(93, 224, 176, 273, 202, 342, 93, 343);
    
    p.fill('#bfc5cf');
    p.triangle(162, 279, 162, 365, 372, 365);
    
    p.fill(255);
    p.triangle(401, 262, 265, 369, 401, 369);
    
    p.fill('#a2bfcf');
    p.triangle(129, 285, 129, 375, 180, 375);

    // 증기 효과 (얇은 사각형)
    p.fill(255);
    p.push();
    p.translate(380, 159);
    p.rotate(-0.06);
    p.quad(-186, -33.75, 57, -32.25, 119.25, -30, -121.5, -30.75);
    p.pop();
    
    p.push();
    p.translate(423, 172);
    p.rotate(-0.04);
    p.quad(-125.25, -33, 21, -32.25, 58.5, -30.75, -86.25, -31.5);
    p.pop();
    
    p.push();
    p.translate(368, 191);
    p.rotate(0.02);
    p.quad(-125.25, -33, 21, -32.25, 58.5, -30.75, -86.25, -31.5);
    p.pop();
    
    // 바위 위 눈
    p.fill('#eaeef3');
    p.triangle(111, 250, 111, 276, 156, 277);

    // 나뭇잎
    p.fill('#638877');
    p.triangle(173, 99, 150, 174, 196, 174);
    p.triangle(173, 136, 150, 211, 196, 211);

    p.fill('#4d776d');
    p.triangle(158, 72, 74, 211, 159, 211);

    p.fill('#5c6462');
    p.triangle(416, 132, 416, 177, 461, 177);

    p.fill('#576d67');
    p.triangle(243, 116, 225, 171, 259, 171);
    p.triangle(243, 99, 225, 153, 259, 153);  

    // 나무 기둥
    p.fill('#574545');
    p.rect(142.5, 229.375, 15, 36.75);
    p.rect(173.625, 214.75, 11.25, 7.5);
    
    p.fill('#584949');
    p.rect(242.75, 171.5, 13.5, 21);
    
    p.fill('#7a6e6e');
    p.noStroke();
    p.quad(370, 312, 480, 312, 481, 356, 315, 357);

    // 돌 명암
    p.fill('#9b9fa5');
    p.push();
    p.translate(488, 305);
    p.rotate(0.41);
    p.ellipse(0, 0, 78.75, 109.5);
    p.pop();
    
    // 쓰러진 나무
    p.fill('#695d5d');
    p.rect(435.875, 182.25, 15.75, 10.5);

    // 눈꽃
    p.fill(255);
    p.ellipse(342, 145, 22.5, 22.5);
    p.ellipse(365, 170, 10.5, 10.5);
    p.ellipse(390, 222, 19.5, 19.5);
    p.ellipse(121, 107, 25.5, 25.5);
    p.ellipse(141, 135, 13.5, 13.5);
    p.ellipse(126, 228, 24, 24);
    p.ellipse(478, 126, 18, 18);
    p.ellipse(210, 141, 24, 24);
    p.ellipse(372, 86, 21, 21);
    p.ellipse(390, 105, 9, 9);
    p.ellipse(275, 99, 33, 33);
    p.ellipse(267, 113, 21, 21);
    p.ellipse(244, 225, 18, 18);
    p.ellipse(204, 162, 12, 12);

    // 대기 효과 (투명도 있는 레이어들)
    p.fill(255, 255, 255, 82);
    p.push();
    p.translate(379, 123);
    p.rotate(0.11);
    p.ellipse(0, 0, 337.5, 153);
    p.pop();
    
    p.fill(255, 255, 255, 59);
    p.ellipse(232, 198, 375, 225);
    
    p.fill(255, 255, 255, 51);
    p.push();
    p.translate(429, 302);
    p.rotate(0.13);
    p.ellipse(0, 0, 525, 225);
    p.pop();
  };
};