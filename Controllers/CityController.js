const City = require("../Model/City");

const getCities = (req, res) => {
    City.find((err,city) => {
      if(err){
        res.send(err);
      }
      res.json(city);
     });
  };
  
  const createCity = (req, res) => {
    const city = new City({
      name: req.body.name,
    });
    
    city.save((err, city) => {
      if (err) {
        res.send(err);
      }
      res.json(city);
    });
  };

  const updateCity = (req, res) => {
    City.findOneAndUpdate(
      { _id: req.params.cityId },
      {
        $set: {
          name: req.body.name,
        },
      },
      { new: true },
      (err, City) => {
        if (err) {
          res.send(err);
        } else res.json(City);
      }
    );
  };
  

  const deleteCity = (req, res) => {
    City.deleteOne({ _id: req.params.cityId })
      .then(() => res.json({ message: "City Deleted" }))
      .catch((err) => res.send(err));
  };

  module.exports = {
    getCities,
    createCity,
    deleteCity,
    updateCity
  };