var express = require("express");
var router = express.Router({mergeParams: true});
var Restaurant = require("../models/restaurant");
var Comment = require("../models/comment");
var middleware = require("../middleware");

router.get("/new", middleware.isLoggedIn, function(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
        if (err) {
            console.log(err);
        } else {
           res.render("comments/new", {restaurant: restaurant}); 
        }
    });
});

router.post("/", middleware.isLoggedIn, function(req, res){
   Restaurant.findById(req.params.id, function(err, restaurant) {
      if(err){
          console.log(err);
          res.redirect("/restaurants");
      } else {
          Comment.create(req.body.comment, function(err, comment){
              if(err){
                  req.flash("error", "오류가 발생했습니다");
                  console.log(err);
              } else {
                  comment.author.id = req.user._id;
                  comment.author.username = req.user.username;
                  comment.save();
                  
                  restaurant.comments.push(comment);
                  restaurant.save();
                  req.flash("success", "댓글을 올렸습니다");
                  res.redirect("/restaurants/" + restaurant._id);
              }
          });
      }
   });
});

router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Restaurant.findById(req.params.id, function(err, foundedRestaurant) {
        if(err || !foundedRestaurant){
            req.flash("error", "오류가 발생했습니다");
            res.redirect("back");
        }
        Comment.findById(req.params.comment_id, function(err, foundedComment) {
            if(err){
                res.redirect("back");
            } else {
                res.render("comments/edit", {restaurant_id: req.params.id, comment: foundedComment}); 
            }
        });
    });
});

router.put("/:comment_id",  middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, foundedComment){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/restaurants/" + req.params.id);
        }
    })
});

router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect("back");
        } else {
            req.flash("success", "댓글을 삭제했습니다");
            res.redirect("/restaurants/" + req.params.id);
        }
    });
});

module.exports = router;