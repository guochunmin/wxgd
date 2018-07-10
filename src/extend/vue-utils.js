export default
{
    install(Vue)
    {
    	//获取[min,max]之间的随机数
    	Vue.prototype.randomNum=function(min,max){
			var num=Math.floor(Math.random()*(max-min+1)+min);
			return num;
		};
		//获取随机颜色
    	Vue.prototype.randomColor=function(){
			var r=Math.floor(Math.random()*256);
			var g=Math.floor(Math.random()*256);
			var b=Math.floor(Math.random()*256);
			return "rgb("+r+','+g+','+b+")";
		};
		//获取时间戳
    	Vue.prototype.getTime=function(){
			if(arguments.length==0 || arguments[0]=='s'){
				return Math.round(new Date().getTime()/1000);
			}
			else{
				return Math.round(new Date().getTime());
			}
		}
    }
}