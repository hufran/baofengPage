<template>
    <div>
        <div class="floatLeft logo"><a href="http://www.baofengcloud.com" title="暴风云视频">暴风云视频</a></div>
        <div class="floatLeft nav">
            <ul id="navBar">
                <li v-for="(index,data) in navData" v-bind:class="{'firstNav':true,'cur':((index==myMessage)?true:false)}" >
                    <a href="{{data.firstLink}}">{{data.firstNav}}</a>
                    <div class="navBar_second" v-if="data.secondNav.length>0">
                        <div class="navBar_Group" v-for="(index,list) in data.secondNav" v-bind:class="{'navBar_Group':true,'bor':(index==1?true:false)}">
                            <p>{{list.intro}}</p>
                            <ul>
                                <li v-for="item in list.content">
                                    <a href="{{item.link}}">{{item.name}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="floatRight user">
            <div class="userLogin floatLeft" v-if="isLogin==0?true:false">
                <a href="/user/login">登录</a><i>|</i><a href="/user/reg">注册</a>
            </div>
            <div class="userName floatLeft" v-if="isLogin==1?true:false">
                <a href="http://www.baofengcloud.com/reconciliation/lists" target="_blank">{{userData.name}}</a>
                <ul class="userDetail">
                    <li class="userAccount clear">
                        <div class="userIcon"></div>
                        <div class="userMsg">
                            <p>{{userData.name}}</p>
                            <p>类型：{{userData.type}}</p>
                            <p>余额：{{userData.account}}</p>
                        </div>
                    </li>
                    <li class="clear unread">
                        <i></i><a href="http://www.baofengcloud.com/pm/lists">未读消息<em></em></a>
                    </li>
                    <li class="clear logout">
                        <i></i><a href="/user/logout">退出登录</a>
                    </li>
                </ul>
            </div>
            <div class="manager floatLeft"><a href="http://www.baofengcloud.com/user/mainpanel"><i></i><span>管理中心</span></a></div>
        </div>
    </div>
</template>
<script>
module.exports={
    data:function(){
        return {
            navData:[
                {"firstNav":"首页","secondNav":[],"firstLink":"http://www.baofengcloud.com"},
                {"firstNav":"产品介绍","secondNav":[
                    {"intro":"介绍","content":[
                            {"name":"产品概述",link:"http://www.baofengcloud.com/product/info.html"},
                            {"name":"点播",link:"http://www.baofengcloud.com/product/saas.html"},
                            {"name":"直播",link:"http://www.baofengcloud.com/product/live.html"},
                            {"name":"混合云",link:"http://www.baofengcloud.com/product/pcloud.html"}
                        ]
                    },
                    {"intro":"更新","content":[
                        {"name":"产品更新",link:"http://www.baofengcloud.com/news/list_1_1.html"}
                    ]}
                ],"firstLink":"http://www.baofengcloud.com/product/info.html"},
                {"firstNav":"收费标准","firstLink":"http://www.baofengcloud.com/finance/package?servicetype=1","secondNav":[
                    {"intro":"标准",content:[
                        {"name":"点播",link:"http://www.baofengcloud.com/finance/package?servicetype=1"},
                        {"name":"直播",link:"http://www.baofengcloud.com/finance/package?servicetype=2"}
                    ]}
                ]},
                {"firstNav":"方案","firstLink":"http://www.baofengcloud.com/cases/livebroad.html","secondNav":[
                    {"intro":"方案",content:[
                        {"name":"大型活动直播方案",link:"http://www.baofengcloud.com/cases/livebroad.html"},
                        {"name":"移动直播方案","link":"http://www.baofengcloud.com/cases/mobilebroad.html"},
                        {"name":"全景视频方案","link":"http://www.baofengcloud.com/cases/live_fmv.html"}
                    ]},
                    {"intro":"指南",content:[
                        {"name":"直播助手使用指南",link:"http://www.baofengcloud.com/cases/liveassistant.html"},
                        {"name":"fmle使用指南",link:"http://www.baofengcloud.com/cases/livefmle.html"},
                        {"name":"obs使用指南",link:"http://www.baofengcloud.com/cases/liveobs.html"}
                    ]}
                ]},
                {"firstNav":"文档中心","firstLink":"http://www.baofengcloud.com/apisdk/safety/privatevideo.html","secondNav":[
                    {"intro":"文档",content:[
                        {"name":"防盗链",link:"http://www.baofengcloud.com/apisdk/safety/privatevideo.html"},
                        {"name":"API文档",link:"http://www.baofengcloud.com/apisdk/api.html"},
                        {"name":"SDK文档",link:"http://www.baofengcloud.com/apisdk/sdk.html"}
                    ]},
                    {"intro":"下载",content:[
                        {"name":"资源下载",link:"http://www.baofengcloud.com/apisdk/resourcedownload.html"}
                    ]}
                ]},
                {"firstNav":"关于我们","firstLink":"http://www.baofengcloud.com/aboutus/intro.html","secondNav":[
                    {"intro":"关于",content:[
                        {"name":"公司介绍",link:"http://www.baofengcloud.com/aboutus/intro.html"},
                        {"name":"联系我们",link:"http://www.baofengcloud.com/aboutus/contact.html"}
                    ]},
                    {"intro":"协议",content:[
                        {"name":"服务协议",link:"http://www.baofengcloud.com/aboutus/services.html"}
                    ]}
                ]},
                {"firstNav":"帮助","firstLink":"http://www.baofengcloud.com/help/quickstart.html","secondNav":[
                    {"intro":"FAQ",content:[
                        {"name":"快速入门",link:"http://www.baofengcloud.com/help/quickstart.html"},
                        {"name":"注册与登录",link:"http://www.baofengcloud.com/help/regist.html"},
                        {"name":"常见问题",link:"http://www.baofengcloud.com/help/faq.html"}
                    ]}
                ]}
            ]
        }
    },
    props:{
        myMessage:Number,
        isLogin:Number,
        userData:Object
    }
};
</script>
