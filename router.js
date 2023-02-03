const { getStudents, createStudent,deleteStudent,updateStudent,getStudentsByCity,getStudentsByGrade } = require("./Controllers/StudentController");

const { getGrades, createGrade,deleteGrade,updateGrade } = require("./Controllers/GradeController");

const { getCities, createCity,deleteCity,updateCity } = require("./Controllers/CityController");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("<b>Let's build a CRUD API!<b>");
});

//Student routes
router.get("/students", getStudents);

router.post("/students",createStudent);

router.delete("/students/:studentId", deleteStudent);

router.put("/students/:studentId",updateStudent);

//Öğrencileri Şehire göre listeler
router.get("/getStudentsByCity/:cityId",getStudentsByCity);

//Öğrencileri Bölüme göre listeler
router.get("/getStudentsByGrade/:gradeId",getStudentsByGrade);


//Grade routes
router.get("/grades", getGrades);

router.post("/grades",createGrade);

router.delete("/grades/:gradeId", deleteGrade);

router.put("/grades/:gradeId",updateGrade);

//City routes
router.get("/cities", getCities);

router.post("/cities",createCity);

router.delete("/cities/:cityId", deleteCity);

router.put("/cities/:cityId",updateCity);

module.exports = router;

