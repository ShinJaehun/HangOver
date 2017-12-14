var mongoose = require("mongoose");
var Restaurant = require("./models/restaurant");
var Comment     = require("./models/comment");

var data = [
    {
        name: "서귀포게스트하우스",
        image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles1.naver.net%2FMjAxNzAxMDVfODUg%2FMDAxNDgzNjAwNTc2NDMz.Rhv-gVxdjxQXStLZpUq_o7JQk8a6dVNssCq-M2ZV9VAg.HLRbY_ahApaBTUEg7l0u_jU3Y2Ouh2hAfmHyDeUH-JYg.JPEG.h3style%2FIMG_9768.JPG&type=b400",
        description: "불러 이제 봄이 어머니 계십니다. 이름을 무성할 별에도 딴은 내 하나 하나에 사람들의 하나의 까닭입니다. 별 계집애들의 이름을 아이들의 벌써 이웃 어머니 별을 하나에 까닭입니다. 봄이 아스라히 사랑과 까닭입니다. 아이들의 별 이런 잠, 릴케 때 속의 있습니다. 내일 보고, 별 있습니다. 별에도 별 언덕 않은 계십니다. 별 나는 하나에 패, 어머니, 무엇인지 이웃 별빛이 있습니다. 하나에 별이 새워 버리었습니다."
    },
    {
        name: "보목캠핑장",
        image: "http://blogfiles3.naver.net/20130713_284/llllllan_1373643382963IgdKT_JPEG/2013-07-12_20%3B55%3B50.jpg",
        description: "다 쉬이 별 남은 오는 불러 별에도 둘 봅니다. 사랑과 이런 다 밤이 봅니다. 벌레는 멀리 피어나듯이 경, 지나가는 언덕 나의 다하지 까닭입니다. 무엇인지 아이들의 별을 내일 둘 이름과, 봅니다. 어머니 내일 가을로 벌레는 불러 걱정도 아직 잔디가 있습니다. 별빛이 책상을 나는 이런 밤이 남은 위에도 헤일 봅니다. 내 아직 이름을 이름을 듯합니다. 어머님, 애기 다 거외다. 아이들의 비둘기, 다 시와 봅니다."
    },
    {
        name: "롯데호텔 캠핑장",
        image: "http://imgnews.naver.com/image/008/2011/10/06/2011100611363179575_2.jpg",
        description: "동경과 아름다운 별들을 무덤 불러 계십니다. 나는 이 별 우는 나의 있습니다. 못 사람들의 가을 가난한 아무 다 아스라히 나의 이 까닭입니다. 패, 하나 그리고 하나의 아스라히 오는 하나에 무엇인지 듯합니다. 별이 슬퍼하는 헤일 별빛이 피어나듯이 거외다. 릴케 잔디가 하나의 사람들의 이웃 나는 하나에 버리었습니다. 많은 가을 패, 하나에 별을 봅니다. 헤는 릴케 내 가을로 때 나는 까닭입니다. 별을 시와 불러 토끼, 않은 풀이 자랑처럼 내 있습니다."
    }
]; 
       
function seedDB(){
    // Restaurant.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log("removed restaurants!");
    //         data.forEach(function(seed){
    //             Restaurant.create(seed, function(err, restaurant){
    //                 if(err){
    //                     console.log(err);
    //                 } else {
    //                     console.log("added restaurant");
    //                     //이게 바로 callback 지옥입니다.
    //                     Comment.create(
    //                         {
    //                             text: "이 곳은 정말 ㅈ 같은 곳이에요!",
    //                             author: "싸가지없는양아취ㅅㄲ"
    //                         }, function(err, comment){
    //                             if (err) {
    //                                 console.log(err);
    //                             } else {
    //                                 restaurant.comments.push(comment);
    //                                 restaurant.save();
    //                                 console.log("created a new comment");
    //                             }
    //                         });
    //                 }
    //             });
    //         });
    //     }
    // });
}

module.exports = seedDB;