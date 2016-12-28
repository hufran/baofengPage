<template>
    <div class="container clear">
        <ul class="detailList_intro clear">
            <li v-for="(index,list) in detailList" v-bind:class="{'noBor':(index==(detailList.length-1))?true:false}">
                <div class="detailList_top">
                    <div v-bind:class="list.css"></div>
                    <div class="cover"></div>
                    <div v-bind:class="list.classList"></div>
                    <h3>{{list.name}}</h3>
                </div>
                <div class="detailList_bottom">
                    {{list.intro}}
                </div>
                <div class="clear"><a v-bind:href="list.link" class="btn1">{{list.btn}}</a></div>
            </li>
        </ul>
    </div>
</template>
<script>
    module.exports={
        data:function(){
            return {
                detailList:[
                    {"name":"点播服务",css:{covBac1:true,covPic:true},"intro":"点播服务是一套成熟的多操作系统、多屏、多种播放模式、多清晰度的一站式点播解决方案......",classList:{detailList_icon:true,bac1:true},btn:"查看详情",link:"http://www.baofengcloud.com/product/saas.html"},
                    {"name":"直播服务",css:{covBac2:true,covPic:true},"intro":"直播服务是一套成熟的多操作系统、多屏、多种播放模式的高清大型直播解决方案。直播可以同时承载百万人同时......",classList:{detailList_icon:true,bac2:true},btn:"查看详情",link:"http://www.baofengcloud.com/product/live.html"},
                    {"name":"视频云托管",css:{covBac3:true,covPic:true},"intro":"视频云托管是针对类似移动端视频快速分享业务提供的一套视频点播方案，有机结合了云存储、云转码和CDN系统......",classList:{detailList_icon:true,bac3:true},btn:"查看详情",link:"http://www.baofengcloud.com/product/paas.html"},
                    {"name":"互动直播",css:{covBac4:true,covPic:true},"intro":"互动直播服务是一套成熟的多操作系统、多屏、多种播放模式的中小型视频直播解决方案......",classList:{detailList_icon:true,bac4:true},btn:"查看详情",link:"http://www.baofengcloud.com/product/ilive.html"}
                ]
            }
        }
    }
</script>