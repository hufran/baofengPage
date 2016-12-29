/**
 * Created by Administrator on 2016/12/29.
 */
var $=require('../util/jquery.js');
module.exports={
    anim:function(ele,classList){
        var elePos=0;
        ele=$(ele);
        elePos=ele.offset().top-parseInt(window.innerHeight);
        function add(event){
            if(event.target.body.scrollTop>=elePos){
                ele.find('.imgBac').addClass(classList);
                ele.find('.writeFont').addClass(classList);
                $(document).off('scroll',add);
            }
        }
        $(document).on('scroll',add);
    }
};

