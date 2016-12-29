<template>
    <div class="bannerChange">
        {{randomPos()}}
        <ul class="bannerGroup" v-bind:style="{width:uiWidth}">
            <li v-for="(index,data) in bannerData" v-touch:pan="onPan($event)" v-bind:class="data.classList" v-bind:style="{width:liWidth}">
                <div class="container">
                    <h2>{{data.title}}</h2>
                    <div class="describe">{{data.describe}}</div>
                    <div v-if="data.animate" class="snowAnimate">
                        <span v-for="list in snowList" v-bind:class="list.class" v-bind:style="{left:list.posX}"></span>
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
        computed:{
            bannerWidth:function(){
                return ($('body').width());
            },
            bannerLength:function(){
                return (this.bannerData.length);
            },
            uiWidth:function(){
                return this.bannerWidth*this.bannerLength+"px";
            },
            liWidth:function(){
                return this.bannerWidth+"px";
            }
        },
        methods:{
            onPan:function(event){
                console.log(event);alert("pan");
            },
            scrollLeft:function(pos,event){
                console.log(event);
                var rangeLeft=event.deltaX;
                if(pos<this.bannerData.length){


                    alert("left");
                }
            },
            scrollRight:function(pos,event){
                console.log(event);
                alert("right");
            },
            scrollPos:function(pos){

            },
            autoScroll:function(pos){

            },
            computeWidth:function(){
                return {width:(width*length)+'px'};
            },
            randomPos:function(){
                function randomPox(){
                    var width=parseInt($('body').width());
                    var current=Math.ceil(Math.random()*width);
                    if(current>-45&&current<(width-45)){
                        return current;
                    }else{
                        randomPox();
                    }
                }
                if(this.snowList.length==0){
                    var classList=["snowItem1","snowItem2","snowItem3","snowItem4","snowItem5","snowItem6","snowItem7","snowItem8","snowItem9","snowItem10","snowItem11","snowItem12","snowItem13","snowItem14","snowItem15"],len=30;
                    for(var i=0;i<len;i++){
                        var dataItem={};
                        dataItem.class=classList[Math.ceil(Math.random()*(classList.length-1))];
                        dataItem.posX=Math.ceil(Math.random()*parseInt($('body').width()))+"px";
                        this.snowList.push(dataItem);
                    }
                }else{
                    return;
                }
            }
        }
    }
</script>