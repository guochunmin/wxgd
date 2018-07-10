<style  rel="stylesheet/less" lang="less" scoped>
	@import url("../assets/less/mixin.less");
	footer{
	    position:fixed;
	    bottom: 0;
	    left:0;
	    right:0;
	    border-top:1px solid #ddd;
	    nav{ 
	        /*background-color: @color;*/
	    }
	    ul{
	        list-style: none;
	        font-size:0;
	    }
	    li{
	        display:inline-block;
	        width:25%;
	        padding-top:7px;
	        padding-bottom:5px;
	    }
	    a{
	        text-decoration: none;
	        color:@font-color;
	        &.active{
	        	color:@color;
	        }
	    }
	    i,span{
	        display:block;
	        text-align:center;
	            font-size:0.8rem;
	        &.iconfont{
	            font-size:1.6rem;
	            font-weight: 800;
	        }
	    }
	}
</style>
<template>
	<footer>
		<nav>
			<ul>
				<li>
					<router-link :to="{path:'/index'}" :class="active==1?'active':''">
						<i class="iconfont icon-home"></i>
						<span>首页</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/category'}" :class="active==2?'active':''">
						<i class="iconfont icon-fenlei"></i>
						<span>分类</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/cart'}" :class="active==3?'active':''">
						<i class="iconfont icon-cart"></i>
						<span>购物车</span>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/personal'}" :class="active==4?'active':''">
						<i class="iconfont icon-personal-center"></i>
						<span>个人中心</span>
					</router-link>
				</li>
			</ul>
		</nav>
	</footer>
</template>
<script>
export default {
	props:{
		active:Number
	}
}
</script>