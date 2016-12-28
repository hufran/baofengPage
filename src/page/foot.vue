<template>
    <div class="container">
        <ul class="">
            <li v-for=""></li>
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
                    {"name":"公司介绍","link":"http://www.baofengcloud.com/aboutus/intro.html"}，
                    {"name":"服务协议","link":"http://www.baofengcloud.com/aboutus/services.html"}
                ]},
                {"intro":"帮助",contents:[
                    {"name":"快速入门","link":"http://www.baofengcloud.com/help/quickstart.html"},
                    {"name":"注册于登陆","link":"http://www.baofengcloud.com/help/regist.html"},
                    {"name":"常见问题","link":"http://www.baofengcloud.com/help/faq.html"}
                ]}
            ],
            contact:{
                "name":"关注新浪微博",
            }
        }
    }
}
</script>
