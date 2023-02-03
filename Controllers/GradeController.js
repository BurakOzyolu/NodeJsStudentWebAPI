const Grade = require("../Model/Grade");

const getGrades = (req, res) => {
    Grade.find((err,grade) => {
      if(err){
        res.send(err);
      }
      res.json(grade);
     });
  };
  
  const createGrade = (req, res) => {
    const grade = new Grade({
      name: req.body.name,
    });
    
    grade.save((err, grade) => {
      if (err) {
        res.send(err);
      }
      res.json(grade);
    });
  };

  const updateGrade = (req, res) => {
    Grade.findOneAndUpdate(
      { _id: req.params.gradeId },
      {
        $set: {
          name: req.body.name,
        },
      },
      { new: true },
      (err, Grade) => {
        if (err) {
          res.send(err);
        } else res.json(Grade);
      }
    );
  };
  

  const deleteGrade = (req, res) => {
    Grade.deleteOne({ _id: req.params.gradeId })
      .then(() => res.json({ message: "Grade Deleted" }))
      .catch((err) => res.send(err));
  };

  module.exports = {
    getGrades,
    createGrade,
    deleteGrade,
    updateGrade
  };