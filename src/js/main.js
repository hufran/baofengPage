var Vue=require("vue");
var Head=require("../page/head");

new Vue({
	el: 'body',
	components: { lead:Head }
});

var comp=require("./view/computeNav.js");
comp.computeWidth();


