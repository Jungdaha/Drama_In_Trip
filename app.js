const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5000;
const db = require('./models');

// 미들웨어 설정
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// 라우터 설정
const locationRoutes = require('./routes/locationRoutes');
app.use('/api/locations', locationRoutes(upload));

// 기본 라우트
app.get('/', (req, res) => {
  res.send('드라마 촬영지 정보 API');
});

// 데이터베이스 연결 및 서버 시작
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다`);
  });
});
