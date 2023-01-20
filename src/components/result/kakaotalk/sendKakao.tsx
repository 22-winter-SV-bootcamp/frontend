import React from 'react';

/* props 추가해서 ResultImg로부터 이미지 링크 받아오기 */
export const sendKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;

    if (!kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_SOME_KEY);
    }
    // 메시지 공유 함수
    kakao.Share.sendCustom({
      //requestUrl: 'http://localhost:3000/', // 페이지 url
      templateId: 88903, // 메시지템플릿 번호
      templateArgs: {
        IMAGE:
          'https://simsontest.s3.ap-northeast-2.amazonaws.com/83b17690-8e22-471b-ad3c-c8ffba67066d.jpg',
        TITLE: '심슨테스트', // 제목 텍스트 ${TITLE}
        DESC: '나는 테스트중', // 설명 텍스트 ${DESC}
      },
      installTalk: true,
    });
  }
};
