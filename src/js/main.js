var Vue=require("vue");
var Head=require("../page/head");
var banner=require("../page/banner");
var contentList=require("../page/contentList");
var mainList=require("../page/mainList");
var VueTouch = require('vue-touch');
Vue.use(VueTouch);
new Vue({
	el: 'body',
	components: { lead:Head ,banner:banner,contentList:contentList,mainList:mainList}
});

var comp=require("./view/computeNav.js");
comp.computeWidth();


