/**
 * Created by Administrator on 2016/12/27.
 */
var clouds={};
clouds.util={
    provide:function(name){
        var splitChar=".",nameSpace=[],space=window;
        if(typeof name=="undefined"||name.length==0){
            return;
        }
        nameSpace=name.split(splitChar);
        for(var i= 0,len=nameSpace.length;i<len;i++){
            if(space[space[i]]){
                space=space[space[i]];
            }else{
                space=space[space[i]]=new Object();
            }
        }
    },
    inherits:function(child,parent){
        child.prototype=new parent();
        child.prototype.constructor=child;
    },
    analyzetpl:function(url,json){
        if(typeof url=="undefined"||typeof json=="undefined"){
            return url;
        }
        return url.replace(/\{(.*?)\}/,function(){
            if(typeof arguments[1]=="undefined"){
                return ""
            }
            return data[arguments[1]];
        });
    }
};