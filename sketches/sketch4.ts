import p5 from 'p5';

export const sketch4 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 400);
    p.rectMode(p.CENTER);
    p.frameRate(30);
  };

  p.draw = () => {
    p.background(255);
    
    let t = (p.frameCount % 300) / 300;
    
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

    // 외곽 사각형 애니메이션 (화면 외곽 사각형들이 왕복)
    let sideOffset = p.sin(t * p.TWO_PI) * 15;
    let topOffset = p.sin(t * p.TWO_PI) * 20;
    
    p.fill('#acdbfc');
    p.rect(95.5, 118.75 + sideOffset, 45, 67.5);
    
    p.fill('#bee4ff');
    p.rect(222.75 + topOffset, 54.75, 91.5, 61.5);
    
    p.fill('#cae8fd');
    p.rect(460 + topOffset, 60.65, 60, 89.25);
    
    p.fill('#bee4ff');
    p.rect(499, 182 + sideOffset, 60, 60);

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

    // 물결 표현 애니메이션 (좌우 왕복 및 색상 변화)
    p.colorMode(p.RGB);
    let waterColor1 = p.lerpColor(p.color('#afd4cf'), p.color('#6993b9'), (p.sin(t * p.TWO_PI) + 1) / 2);
    let waterColor2 = p.lerpColor(p.color('#a2cfc9'), p.color('#5c8db0'), (p.sin(t * p.TWO_PI + p.PI/3) + 1) / 2);
    let waterColor3 = p.lerpColor(p.color('#b0dad4'), p.color('#7aa8c0'), (p.sin(t * p.TWO_PI + p.PI*2/3) + 1) / 2);
    
    let waveOffset = p.sin(t * p.TWO_PI) * 10;
    
    p.fill(waterColor1);
    p.ellipse(358 + waveOffset, 232, 117, 33);
    
    p.fill(waterColor2);
    p.ellipse(295 + waveOffset * 0.8, 278, 138, 42);
    
    p.fill(waterColor3);
    p.ellipse(430 + waveOffset * 1.2, 293, 87, 30);

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
    p.ellipse(312 + waveOffset * 0.5, 285, 36, 13.5);
    
    p.fill('#e2f7f4');
    p.ellipse(328 + waveOffset * 0.7, 233, 33, 9);
    
    p.fill('#6181aa');
    p.ellipse(251 + waveOffset * 0.6, 246, 30, 7.5);
    p.ellipse(426 + waveOffset * 0.9, 259, 30, 9);

    // 추상적 바위 및 기타 요소
    p.fill('#d7dde6');
    p.quad(93, 224, 176, 273, 202, 342, 93, 343);
    
    p.fill('#bfc5cf');
    p.triangle(162, 279, 162, 365, 372, 365);
    
    p.fill(255);
    p.triangle(401, 262, 265, 369, 401, 369);
    
    p.fill('#a2bfcf');
    p.triangle(129 + sideOffset/3, 285, 129 + sideOffset/3, 375, 180 + sideOffset/3, 375);

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

    // 나뭇잎 애니메이션 (좌우로 서로 다른 범위로 왕복)
    let leafSway1 = p.sin(t * p.TWO_PI) * 4;
    let leafSway2 = p.sin(t * p.TWO_PI + 0.5) * 2.5;
    let leafSway3 = p.sin(t * p.TWO_PI + 1.2) * 5;
    let leafSway4 = p.sin(t * p.TWO_PI + 0.8) * 3.5;
    
    p.fill('#638877');
    p.push();
    p.translate(leafSway1, 0);
    p.triangle(173, 99, 150, 174, 196, 174);
    p.triangle(173, 136, 150, 211, 196, 211);
    p.pop();

    p.push();
    p.translate(leafSway2, 0);
    p.fill('#4d776d');
    p.triangle(158, 72, 74, 211, 159, 211);
    p.pop();

    p.push();
    p.translate(leafSway3, 0);
    p.fill('#5c6462');
    p.triangle(416, 132, 416, 177, 461, 177);
    p.pop();

    p.push();
    p.translate(leafSway4, 0);
    p.fill('#576d67');
    p.triangle(243, 116, 225, 171, 259, 171);
    p.triangle(243, 99, 225, 153, 259, 153);
    p.pop();

    // 나무 기둥
    p.fill('#574545');
    p.rect(142.5, 229.375, 15, 36.75);
    p.rect(173.625, 214.75, 11.25, 7.5);
    
    p.fill('#584949');
    p.rect(242.75, 176, 13.5, 11);
    
    p.fill('#7a6e6e');
    p.noStroke();
    p.quad(370, 312, 480, 312, 481, 357, 315, 357);

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

    // 눈꽃 애니메이션 (좌우로 움직이며 아래로 내려오는 애니메이션)
    let snowFall = ((t * 40) % 40);
    
    p.fill(255);
    p.ellipse(342 + p.sin(t * p.TWO_PI * 2) * 5, 145 - 30 + snowFall, 22.5, 22.5);
    p.ellipse(365 + p.sin(t * p.TWO_PI * 2.5 + 0.5) * 4, 170 - 30 + snowFall, 10.5, 10.5);
    p.ellipse(390 + p.sin(t * p.TWO_PI * 1.8 + 1.0) * 6, 222 - 30 + snowFall, 19.5, 19.5);
    p.ellipse(121 + p.sin(t * p.TWO_PI * 2.2 + 1.5) * 3, 107 - 30 + snowFall, 25.5, 25.5);
    p.ellipse(141 + p.sin(t * p.TWO_PI * 2.7 + 2.0) * 5, 135 - 30 + snowFall, 13.5, 13.5);
    p.ellipse(126 + p.sin(t * p.TWO_PI * 1.9 + 2.5) * 4, 228 - 30 + snowFall, 24, 24);
    p.ellipse(478 + p.sin(t * p.TWO_PI * 2.4 + 3.0) * 6, 126 - 30 + snowFall, 18, 18);
    p.ellipse(210 + p.sin(t * p.TWO_PI * 2.1 + 3.5) * 5, 141 - 30 + snowFall, 24, 24);
    p.ellipse(372 + p.sin(t * p.TWO_PI * 2.6 + 4.0) * 4, 86 - 30 + snowFall, 21, 21);
    p.ellipse(390 + p.sin(t * p.TWO_PI * 1.7 + 4.5) * 3, 105 - 30 + snowFall, 9, 9);
    p.ellipse(275 + p.sin(t * p.TWO_PI * 2.3 + 5.0) * 6, 99 - 30 + snowFall, 33, 33);
    p.ellipse(267 + p.sin(t * p.TWO_PI * 2.0 + 5.5) * 4, 113 - 30 + snowFall, 21, 21);
    p.ellipse(244 + p.sin(t * p.TWO_PI * 2.8 + 0.3) * 5, 225 - 30 + snowFall, 18, 18);
    p.ellipse(204 + p.sin(t * p.TWO_PI * 1.6 + 0.8) * 3, 162 - 30 + snowFall, 12, 12);

    // 대기 효과 애니메이션 (투명도 및 크기 변화)
    let alpha1 = p.map(p.sin(t * p.TWO_PI), -1, 1, 30, 120);
    let alpha2 = p.map(p.sin(t * p.TWO_PI + p.PI/3), -1, 1, 20, 100);
    let alpha3 = p.map(p.sin(t * p.TWO_PI + p.PI*2/3), -1, 1, 20, 90);
    
    let scale1 = p.map(p.sin(t * p.TWO_PI), -1, 1, 0.85, 1.15);
    let scale2 = p.map(p.sin(t * p.TWO_PI + p.PI/3), -1, 1, 0.9, 1.1);
    let scale3 = p.map(p.sin(t * p.TWO_PI + p.PI*2/3), -1, 1, 0.88, 1.12);
    
    p.fill(255, 255, 255, alpha1);
    p.push();
    p.translate(379, 123);
    p.rotate(0.11);
    p.scale(scale1);
    p.ellipse(0, 0, 337.5, 153);
    p.pop();
    
    p.fill(255, 255, 255, alpha2);
    p.push();
    p.translate(232, 198);
    p.scale(scale2);
    p.ellipse(0, 0, 375, 225);
    p.pop();
    
    p.fill(255, 255, 255, alpha3);
    p.push();
    p.translate(429, 302);
    p.rotate(0.13);
    p.scale(scale3);
    p.ellipse(0, 0, 525, 225);
    p.pop();
  };
};