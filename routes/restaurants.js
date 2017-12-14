var express = require("express");
var router = express.Router();
var Restaurant = require("../models/restaurant");
var middleware = require("../middleware");


router.get("/", function(req, res){
    Restaurant.find({}, function(err, allRestaurants){
        if(err){
            console.log(err);
        } else {
            res.render("restaurants/index", {restaurants: allRestaurants});        
        }
    })
});

router.post("/", middleware.isLoggedIn, function(req, res){
   var name = req.body.name;
   var phone = req.body.phone;
   var address = req.body.address;
   var image = req.body.image;  
   var desc = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   }
   var newRestaurant = {
       name:name,
       phone:phone,
       address:address,
       image:image,
       description:desc,
       author:author
   };

   Restaurant.create(newRestaurant, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
           res.redirect("/restaurants");
       }
   })
});

router.get("/new", middleware.isLoggedIn, function(req, res) {
   res.render("restaurants/new"); 
});

router.get("/:id", function(req, res) {
    Restaurant.findById(req.params.id).populate("comments").exec(function(err, foundedRestaurant){
       if(err || !foundedRestaurant){
        //   console.log(err);
            req.flash("error", "오류가 발생했습니다");
            res.redirect("back");
       } else {
        //   console.log(foundedCampground);
            res.render("restaurants/show", {restaurant: foundedRestaurant});
       }
    });
});

router.get("/:id/edit", middleware.checkRestaurantOwnership, function(req, res) {
    Restaurant.findById(req.params.id, function(err, foundedRestaurant) {
        res.render("restaurants/edit", {restaurant:foundedRestaurant});
    });
});

router.put("/:id", middleware.checkRestaurantOwnership, function(req, res){
    Restaurant.findByIdAndUpdate(req.params.id, req.body.editing_restaurant, function(err, updatedRestaurant){
        if(err){
            res.redirect("/restaurants");
        } else {
            res.redirect("/restaurants/" + updatedRestaurant.id);
        }
    });
});

router.delete("/:id", middleware.checkRestaurantOwnership, function(req, res){
    Restaurant.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/restaurants");
        } else {
            res.redirect("/restaurants");
        }
    });
});


module.exports = router;