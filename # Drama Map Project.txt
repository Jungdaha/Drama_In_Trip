# Drama Map Project

드라마 촬영지 정보를 지도에 표시하고, 해당 장소의 주소, 촬영된 드라마 정보, 주변 맛집, 리뷰 등을 제공하는 서비스입니다.

## 목차

- [기능](#기능)
- [설치](#설치)
- [사용 방법](#사용-방법)
- [API](#api)
- [폴더 구조](#폴더-구조)
- [기여](#기여)
- [라이선스](#라이선스)

## 기능

- 지도에 드라마 촬영지 마커 표시
- 마커 클릭 시 해당 장소의 세부 정보(주소, 드라마 정보, 주변 맛집, 리뷰 등) 표시
- 드라마 정보와 함께 영상(.mp4) 파일 업로드 및 표시
- 주변 맛집 정보 제공
- 사용자 리뷰 및 좋아요 표시

## 설치

### 백엔드 (Node.js)

1. 리포지토리를 클론합니다:
   ```bash
   git clone https://github.com/yourusername/drama-map-project.git
   cd drama-map-project/backend

2. 필요한 패키지를 설치합니다:
npm install

3. MySQL 데이터베이스를 설정합니다:
CREATE DATABASE drama_map;
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON drama_map.* TO 'username'@'localhost';
FLUSH PRIVILEGES;

4. backend/models/index.js 파일에서 MySQL 설정을 업데이트합니다:
const sequelize = new Sequelize('drama_map', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

5. 백엔드 서버를 실행합니다:
npm run dev

### 프론트엔드 (React.js)

1. 프론트엔드 디렉토리로 이동합니다:
cd ../frontend

2. 필요한 패키지를 설치합니다:
npm install

3. 프론트엔드 서버를 실행합니다:
npm start

## 사용 방법

1) 브라우저에서 http://localhost:3000을 엽니다.
2) 지도를 통해 드라마 촬영지 정보를 확인할 수 있습니다.
3) 마커를 클릭하여 해당 장소의 세부 정보를 확인할 수 있습니다.

## API
- GET /api/locations   모든 드라마 촬영지 정보를 가져옵니다.

응답 예시
[
  {
    "id": 1,
    "name": "촬영지 이름",
    "address": "주소",
    "dramaInfo": "드라마 정보",
    "videoUrl": "/uploads/video.mp4",
    "latitude": 37.5665,
    "longitude": 126.9780,
    "reviews": [
      {
        "id": 1,
        "user": "사용자 이름",
        "comment": "리뷰 내용",
        "likes": 10
      }
    ],
    "restaurants": [
      {
        "id": 1,
        "name": "맛집 이름"
      }
    ]
  }
]

- POST /api/locations 새로운 드라마 촬영지 정보를 추가합니다.

요청 예시
POST /api/locations
Content-Type: multipart/form-data

{
  "name": "촬영지 이름",
  "address": "주소",
  "dramaInfo": "드라마 정보",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "video": <파일 업로드>,
  "reviews": "[{\"user\": \"사용자 이름\", \"comment\": \"리뷰 내용\", \"likes\": 10}]",
  "restaurants": "[{\"name\": \"맛집 이름\"}]"
}

## 폴더 구조

drama-map-project/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.js
    │   ├── index.js
    │   └── package.json

## Contribute
1) 이 리포지토리를 포크합니다.
2) 기능을 추가하거나 버그를 수정합니다.
3) 변경 사항을 커밋합니다.
4) 이 리포지토리에 풀 리퀘스트를 생성합니다.

## 라이센스
이 프로젝트는 MIT 라이선스 하에 라이선스가 부여됩니다.