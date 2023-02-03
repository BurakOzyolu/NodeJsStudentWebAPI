const express = require('express');
const router = require("./router");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require('body-parser')

//Veritabanı bağlantı URL
MONGODB_URL="mongodb+srv://burak13:r5WHpT5zdRV8oMzB@cluster0.ycte6yv.mongodb.net/StudentDB"

//Port Numarası
const PORT = 8000;

const app = express();

mongoose.set('strictQuery', true);

dotenv.config();


//Cors 
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));

app.use(router);

//Sunucuyu çalıştırma
app.listen(PORT, async () => {
  console.log(`Sunucu ${PORT} port numarasında çalışıyor`);
});

//MongoDB Veritbanı bağlantısı
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB veritananına bağlandı");
  })
  .catch((err) => {
    console.log("MongoDB veritananına bağlanamıyor");
  });