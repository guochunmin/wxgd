export default
{
    install(Vue)
    {
        Vue.prototype.$http=function(options){ 
            if(!options || typeof options != 'object'){
                alert("参数错误，请传入对象参数！");
                return false;
            }
            if(!options.url){
                alert("url不能为空");
                return false;
            }
            options.type = options.type?options.type.toUpperCase():'GET';
            options.async = (options.async && options.async === false)?false:true;
            options.dataType = options.dataType || "json";
            options.data = options.data || {};
            options.headers = options.headers || {};
            options.success = options.success || function(){};
            options.error = options.error || function(){};
            options.done = options.done || function(){};
			/*将数据转化为字符串*/
            var strData=function(data){
                var dataStr="";
                for(var key in data){
                    dataStr += key+'='+data[key]+'&';
                }
                dataStr = dataStr && dataStr.slice(0,-1);
                return dataStr;
            };
            var xhr;
            if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
                  xhr=new XMLHttpRequest();
            }
            else{// code for IE6, IE5
                  xhr=new ActiveXObject("Microsoft.XMLHTTP");
            }
			xhr.onreadystatechange=function(){
                if(xhr.readyState == 4 && xhr.status==200){
                	options.success(xhr.responseText);
                	options.done();
                }
                else if(xhr.readyState == 4 && xhr.status!=200){
                	options.error(xhr.responseText);
                	options.done();
                }
			}
            if(options.type==="GET"){
                xhr.open(options.type,options.url+'?'+strData(options.data),options.async);
                xhr.send(null);
            }
            else if(options.type==="POST"){
                xhr.open(options.type,options.url,options.async);
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                for(var key in options.headers){
                    xhr.setRequestHeader(key,options.headers[key]);
                }
                xhr.send(strData(options.data));
            }
        };
        Vue.prototype.$post=function(options){
            options.type='post';
            this.$http(options);
        };
        Vue.prototype.$get=function(options){
            options.type='get';
            this.$http(options);
        };
    }
}