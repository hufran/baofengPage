<template>
    <div class="container">
        <ul class="clear">
            <li class="intro" v-for="data in footData">
                <h3>{{data.intro}}</h3>
                <p v-for="list in data.contents"><a v-bind:href="list.link">{{list.name}}</a></p>
            </li>
            <li class="contentUs">
                <h3>联系我们</h3>
                <div class="weibo"><img v-bind:src="contact.img1" v-bind:alt="contact.imgName1" /><p>{{contact.imgName1}}</p></div>
                <div class="wechat"><img v-bind:src="contact.img2" v-bind:alt="contact.imgName2" /><p>{{contact.imgName2}}</p></div>
                <div class="msg">
                    <p>{{contact.content1}}</p>
                    <p>{{contact.content2}}</p>
                    <p>{{contact.content3}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
module.exports={
    data:function(){
        return {
            footData:[
                {"intro":"友情链接",contents:[
                    {"name":"暴风影音","link":"http://www.baofeng.com/"}
                ]},
                {"intro":"关于我们",contents:[
                    {"name":"公司介绍","link":"http://www.baofengcloud.com/aboutus/intro.html"},
                    {"name":"服务协议","link":"http://www.baofengcloud.com/aboutus/services.html"}
                ]},
                {"intro":"帮助",contents:[
                    {"name":"快速入门","link":"http://www.baofengcloud.com/help/quickstart.html"},
                    {"name":"注册于登陆","link":"http://www.baofengcloud.com/help/regist.html"},
                    {"name":"常见问题","link":"http://www.baofengcloud.com/help/faq.html"}
                ]}
            ],
            contact:{
                "img1":"./images/weibo.png","imgName1":"关注新浪微博","img2":"./images/weixin.png","imgName2":"微信","content1":"tel：010-62309789-8118","content2":"服务端研发QQ：2425006161","content3":"客户端研发QQ：3096709774"
            },

        }
    }
}
</script>
