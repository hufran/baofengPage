/**
 * Created by Administrator on 2016/12/26.
 */
var $=require("../util/jquery.js");
module.exports={
    computeWidth:function(){
        $('#navBar .firstNav').bind('mouseover',function(){
            $(this).find(' .navBar_second').each(function(el){
                var width= 0,length= 0;
                var ele=$(this).find('.navBar_Group');
                length=ele.length;
                for(var i=0;i<length;i++){
                    width+=parseFloat(ele.eq(i).width())+parseFloat(ele.eq(i).css('padding-left'))+parseFloat(ele.eq(i).css('padding-right'));
                    if(i==1){
                        width+=1;
                    }
                }
                $(this).css('width',width+'px');
            });
        });
    }
};