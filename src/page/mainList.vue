<template>
        <ul class="mainIntro_list">
            <li v-for="list in mainList" v-bind:class="list.css">
                <div class="container">
                    <div v-bind:class="list.detailBlock">
                    </div>
                    <div v-bind:class="list.detailWrite">
                        <h3>{{list.title}}</h3>
                        <div>{{{list.detail}}}</div>
                    </div>
                    <div v-bind:class="list.nextArrow"></div>
                </div>
            </li>
        </ul>
</template>
<script>
module.exports={
    data:function(){
        return {
            mainList:[
                {"css":{mainIntro_p2p:true},title:"全球首家支持P2P加速的云视频解决方案!",detail:"更快速便捷，能够满足从个人到企业级视频应用需求，<br/>其中，智能CDN分发节点超过500个，确保“秒播”的效果；<br/>从注册到网站部署仅需三步，测试调用随时看效果；",detailBlock:{imgBac:true},detailWrite:{floatRight:true,writeFont:true},nextArrow:{arrow:true}},
                {"css":{mainIntro_cross:true},title:"跨平台多屏播放",detail:"提供各种操作系统（如：Windows，Android，IOS）<br/>上各种播放模式（如：客户端、Flash、HTML5、HLS）<br/>的播放器或功能性SDK。",detailBlock:{floatRight:true,imgBac:true},detailWrite:{writeFont:true},nextArrow:{arrow:true}},
                {"css":{mainIntro_solution:true},title:"一站式的解决方案",detail:"功能覆盖在线视频每一个环节：采集、滤镜、编码、<br/>上传、转码、存储、CDN分发、P2P加速、播放器、<br/>防盗链、安全机制、数据统计。",detailBlock:{imgBac:true},detailWrite:{floatRight:true,writeFont:true},nextArrow:{arrow:false}}
            ]
        }
    }
}
</script>
