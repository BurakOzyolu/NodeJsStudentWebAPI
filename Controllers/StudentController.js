const Student = require("../Model/Student");

const getStudents = (req, res) => {
    Student.find((err,student) => {
      if(err){
        res.send(err);
      }
      res.json(student);
     });
  };
  
  const createStudent = (req, res) => {
    const student = new Student({
      name: req.body.name,
      surname: req.body.surname,
      grade: req.body.grade,
      city:req.body.city
    });
    
    student.save((err, student) => {
      if (err) {
        res.send(err);
      }
      res.json(student);
    });
  };

  const updateStudent = (req, res) => {
    Student.findOneAndUpdate(
      { _id: req.params.studentId },
      {
        $set: {
          name: req.body.name,
          surname: req.body.surname,
          grade: req.body.grade,
        },
      },
      { new: true },
      (err, Student) => {
        if (err) {
          res.send(err);
        } else res.json(Student);
      }
    );
  };

  const getStudentsByCity = (req,res) => {
    Student.find({ city: req.params.cityId },
      (err,student) => {
      if(err){
        res.send(err);
      }
      res.json(student);
     });
  };


  const getStudentsByGrade = (req,res) => {
    Student.find({ grade: req.params.gradeId },
      (err,student) => {
      if(err){
        res.send(err);
      }
      res.json(student);
     });
  };

  const deleteStudent = (req, res) => {
    Student.deleteOne({ _id: req.params.studentId })
      .then(() => res.json({ message: "Student Deleted" }))
      .catch((err) => res.send(err));
  };

  module.exports = {
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent,
    getStudentsByCity,
    getStudentsByGrade
  };
  