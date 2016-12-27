<template>
    <div class="bannerChange">
        {{randomPos()}}
        <ul class="bannerGroup">
            <li v-for="(index,data) in bannerData" v-touch:swipeleft="scrollLeft" v-touch:swiperight="scrollRight" v-bind:class="data.classList" >
                <div class="container">
                    <h2>{{data.title}}</h2>
                    <div class="describe">{{data.describe}}</div>
                    <div v-if="data.animate" class="snowAnimate">
                        <span v-for="list in snowList" v-bind:class="list.class" v-bind:style="{left:list.posX,top:list.posY}"></span>
                    </div>
                    <div v-bind:class="data.btnClass"><a v-bind:href="data.link">{{data.btn}}<i></i></a></div>
                </div>
            </li>
        </ul>
        <ul class="pointGroup container">
            <li v-for="(index,data) in bannerData" v-touch:tap="scrollPos" v-bind:class="{cur:data.classList.cur,mrg0:(index==bannerData.length-1)?true:false}"></li>
        </ul>
    </div>

</template>
<script>
    var $=require("../js/util/jquery.js");
    module.exports={
        data:function(){
            return {
                bannerData:[
                    {"title":"全球最省成本在线视频解决方案","describe":"为用户提供高效点播、直播等业务的一站式解决方案",classList:{cur:true,banner1:true},animate:true,link:"http://www.baofengcloud.com/product/info.html",btn:"查看详情",btnClass:{btn1:true}},
                    {"title":"套餐流量低至9折起，赠送更大存储空间","describe":"降低IT成本，加快产品周期，消灭技术难题",classList:{cur:false,banner2:true},cur:false,animate:false,link:"http://www.baofengcloud.com/finance/package?servicetype=1",btn:"立即查看",btnClass:{btn2:true}}
                ],
                snowList:[]
            }
        },
        methods:{
            scrollLeft:function(pos){
                if(pos<this.bannerData.length){
                    alert(1);
                }
            },
            scrollRight:function(pos){

            },
            scrollPos:function(pos){

            },
            autoScroll:function(pos){

            },
            randomPos:function(){

                function randomVal(){
                    var current=Math.ceil(Math.random()*100);
                    if(current>45){
                        return (-current);
                    }else{
                        current=Math.ceil(Math.random()*100);
                    }
                }
                if(this.snowList.length==0){
                    var classList=["snowItem1","snowItem2","snowItem3","snowItem4","snowItem5","snowItem6","snowItem7","snowItem8","snowItem9","snowItem10","snowItem11","snowItem12","snowItem13","snowItem14","snowItem15"],len=70;
                    for(var i=0;i<len;i++){
                        var dataItem={};
                        dataItem.class=classList[Math.ceil(Math.random()*(classList.length-1))];
                        dataItem.posX=Math.ceil(Math.random()*parseInt($('body').width()))+"px";
                        dataItem.posY=randomVal()+"px";
                        this.snowList.push(dataItem);
                    }
                    console.log(this.snowList);
                }else{
                    return;
                }
            }
        }
    }
</script>