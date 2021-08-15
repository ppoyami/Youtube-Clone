# React를 이용한 youtube clone 사이트입니다.

## 데스크탑: 홈 화면

<img width="1680" alt="desktop main" src="https://user-images.githubusercontent.com/50171003/129467846-40dc3eb2-9c9c-4024-b38a-4e41a73f52bc.png">

---

## 데스크탑: 디테일 화면

<img width="1327" alt="디테일 desktop" src="https://user-images.githubusercontent.com/50171003/129467847-1ff23793-0cde-4552-92a7-b2cf990af291.png">

---

## 테블릿: 검색 화면

<img width="577" alt="검색화면 tablet" src="https://user-images.githubusercontent.com/50171003/129467849-1df7e023-82a4-47d6-a901-99e18054d4e8.png">

---

## 모바일: 디테일 화면

<img width="417" alt="디테일페이지 moblie" src="https://user-images.githubusercontent.com/50171003/129467850-2b7f2466-3ae9-497d-b6c9-40f6625beac3.png">

---

## 프로젝트 구조

```
📦 src
├─ components // 페이지 별 폴더 구성
│  ├─ Common
│  ├─ Detail
│  └─ Home
├─ constants // 일반상수 모음
├─ helpers // 일반함수 모음
├─ hooks
├─ pages // 라우팅 되는 페이지
├─ service // api
├─ store // 스토어 폴더
│  └─ modules // 리듀서 폴더
├─ styles // 글로벌, 테마, 기타 스타일
├─ App.js
└─ index.js

```

## 새롭게 시도해본 것들

1. 클래스로 API 통신 인스턴스를 생성해서 각 리듀서의 청크 함수를 생성해보았다.
2. axios의 interceptors를 사용해서 에러처리의 중복을 줄여보았다.
3. 여러 개의 엔드 포인트에서 정보를 받아 하나로 조합할 때, Promise.all 의 병렬처리를 이용해보았다.
4. 아이콘을 미리 호출해서 상수로서 사용해보았다.
5. 미디어 쿼리 자체를 모듈화 해보았다.
6. styled-components에서 제공하는 theme에 접근하는 코드를 user snippets으로 만들어보았다.

## 개선해야 할 사항들

1. 디자인 시스템을 먼저 구축하자
   1. 공통 레이아웃을 정의하고, elements/ 하위 컴포넌트로 재사용성을 높이자.
   2. 정해진 컬러 시스템과 사이즈(font, padding, margin)를 테마로 제공
2. 컴포넌트 상태 정의와 리덕스 스토어 디자인을 미리 설계해보자
3. 목업 데이터로 정적버전을 구현하고, 실제 데이터로 테스트하기
4. 비동기 처리에 대해 좀 더 공부가 필요하다. 에러처리를 어떻게 해야하는 지 아직 잘 모른다.
5. 코드의 가독성과 일관성이 많이 떨어짐. 리액트 설계 패턴에 대해 고민해보기
