var Car = require('./../models/car');

exports.find = function(req, res) {
      Car.find({}, function(err, car){
        if(err){
          return;
        }
        res.render('cars_list', {
          cars: cars
        });
      });
};

exports.new = function(req, res){
      res.render('cars_new');
}

exports.edit = function(req, res) {
      Car.findById(req.params.id, function(err, car){
        if(err){
          return;
        }
        res.render('cars_edit', {
          car: car
        });
    });
};

exports.create = function(req, res){
    Car.create(req.body, function(err, car){
      if(err){
        return;
      }
      res.redirect('/cars');
    });
};

exports.update = function(req, res){
    Car.update({
        _id: req.params.id
    }, req.body, function(err, car){
      if (err){
        return;
      }
      res.redirect('/cars');
    });
};

exports.remove = function(req, res){
  Car.remove({
    _id: req.params.id
  }, function(err){
    if(err){
      return;
    }
    res.redirect('/cars')
  });
};
