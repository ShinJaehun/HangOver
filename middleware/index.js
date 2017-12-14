var middlewareObj = {};
var Restaurant = require("../models/restaurant");
var Comment = require("../models/comment");

middlewareObj.checkRestaurantOwnership = function(req, res, next){
    if(req.isAuthenticated()) {
        Restaurant.findById(req.params.id, function(err, foundedRestaurant){
            if(err || !foundedRestaurant){
                //이렇게 하면 edit 과정에서 주소의 campground id를 수정하려고 했을 때 
                //문제를 잡아낼 수 있다.
                req.flash("error", "오류가 발생했습니다");
                res.redirect("back");
            } else {
                // console.log(foundedCampground.author.id); // mongoose object
                // console.log(req.user._id); // String 
                //그래서 이 둘을 ===로 비교할 수 없다!
                if(foundedRestaurant.author.id.equals(req.user._id)){
                    // res.render("campgrounds/edit", {campground: foundedCampground}); 
                    next();
                } else {
                    req.flash("error", "허가되지 않은 접근입니다");
                    // res.send("You don't have permission to do that.");
                    res.redirect("back");
                }
            }
        });    
    } else {
        req.flash("error", "로그인해야 합니다");
        // res.send("You need to be logged in to do that.");
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundedComment){
            if(err || !foundedComment){
                req.flash("error", "오류가 발생했습니다");
                res.redirect("back");
            } else {
                // console.log(foundedCampground.author.id); // mongoose object
                // console.log(req.user._id); // String 
                //그래서 이 둘을 ===로 비교할 수 없다!
                if(foundedComment.author.id.equals(req.user._id)){
                    // res.render("campgrounds/edit", {campground: foundedCampground}); 
                    next();
                } else {
                    req.flash("error", "허가되지 않은 접근입니다");
                    // res.send("You don't have permission to do that.");
                    res.redirect("back");
                }
            }
        });    
    } else {
        req.flash("error", "로그인해야 합니다");
        // res.send("You need to be logged in to do that.");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "로그인해야 합니다");  
    //그니까 여기서 오류가 발생했소가 아니라
    //오류가 발생했을 때 출력할 flash 메시지를 정의해줌
    //로그인하기 전에 이루어져야 함!
    res.redirect("/login");
};  

module.exports = middlewareObj;