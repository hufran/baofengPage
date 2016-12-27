var Vue=require("vue");
var Head=require("../page/head");
var banner=require("../page/banner");
var VueTouch = require('vue-touch');
Vue.use(VueTouch);
new Vue({
	el: 'body',
	components: { lead:Head ,banner:banner}
});

var comp=require("./view/computeNav.js");
comp.computeWidth();


