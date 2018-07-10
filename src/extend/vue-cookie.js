export default
{
    install(Vue)
    {
    	Vue.prototype.setCookie=function(name, value, options){
    		if (value === null) {
                value = '';
                options = {
                    'max-age': -1
                };
            }
    		var cookieText = "";
    		cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    		if(typeof options=='number'){
    			cookieText += "; Max-Age=" + options;
    		}
    		else if(typeof options=='object'){
    			for(var key in options){
    				if(key=='max-age'){
    					cookieText += "; Max-Age=" + options[key];
    				}
    				else if(key=='path'){
    					cookieText += "; path=" + options[key];
    				}
    				else if(key=='domain'){
    					cookieText += "; domain=" + options[key];
    				}
    				else if(key=='secure'){
    					cookieText += "; secure";
    				}
    			}
    		}
    		document.cookie = cookieText;
    	};
    	Vue.prototype.getCookie=function(name){
            var cookieName = encodeURIComponent(name) + "=",
                cookieStart = document.cookie.indexOf(cookieName),
                cookieValue = "";
            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf (";", cookieStart);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
    	};
    	Vue.prototype.clearCookie=function(name){
    		this.setCookie(name,null);
    	}
    }
}