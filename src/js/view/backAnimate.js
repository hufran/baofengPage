/**
 * Created by Administrator on 2016/12/29.
 */
var $=require("../util/jquery.js");
module.exports={
    scrollPos:function(){
        var ele=$('#videoContain'),scrollStartPos=0,scrollEndPos=0,scrollRange= 0,currentPos=0;
        $(document).on('scroll',function(event){
            currentPos=parseInt(ele.css('background-position-y'));
            scrollEndPos=event.target.body.scrollTop;
            scrollRange=Math.ceil((scrollEndPos)/5.4);
            $('#videoContain').css('background-position','center '+(scrollRange+'px'));
            scrollStartPos=scrollEndPos;
        });
    }
};