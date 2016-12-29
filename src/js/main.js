var Vue=require("vue");
var Head=require("../page/head");
var banner=require("../page/banner");
var contentList=require("../page/contentList");
var mainList=require("../page/mainList");
var foot=require("../page/foot");
var VueTouch = require('vue-touch');
Vue.use(VueTouch);
new Vue({
	el: 'body',
	components: { lead:Head ,banner:banner,contentList:contentList,mainList:mainList,foot:foot}
});

var comp=require("./view/computeNav.js");
comp.computeWidth();

var backAnimate=require("./view/backAnimate.js");
backAnimate.scrollPos();

var introAnimate=require("./view/introAnimate.js");
console.log(introAnimate);
introAnimate.anim('.mainIntro_p2p','anim');
introAnimate.anim('.mainIntro_cross','anim');
introAnimate.anim('.mainIntro_solution','anim');