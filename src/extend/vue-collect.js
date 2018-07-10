export default
{
    install(Vue)
    {
    	//设为首页
    	Vue.prototype.setHome=function(){
			var url=window.location.href;
		    try{
		        document.body.style.behavior='url(#default#homepage)';
		        document.body.setHomePage(url);
		    }catch(e){
		        if(window.netscape){
		            try{
		                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		            }catch(e){
		                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
		            }
		        }else{
		            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
		        }
		    }
		};
		//收藏本站
    	Vue.prototype.addFavorite=function(){
			var url=window.location.href;
			var title=document.title;
		    try {
		        window.external.addFavorite(url, title);
		    }
		    catch (e) {
		        try {
		            window.sidebar.addPanel(title, url, "");
		        }
		        catch (e) {
		            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
		        }
		    }
		};
		//保存到桌面
    	Vue.prototype.toDesktop=function(){
			var sUrl=window.location.href;
			var sName=document.title;
			try {
			    var WshShell = new ActiveXObject("WScript.Shell");
			    var oUrlLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop")     + "\\" + sName + ".url");
			    oUrlLink.TargetPath = sUrl;
			    oUrlLink.Save();
			}  
			catch(e){  
			    alert("当前安全级别不允许操作！");  
			}
		}
    }
}