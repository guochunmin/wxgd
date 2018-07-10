<template>
  <div class="wrapper" v-swipeleft='left' v-swiperight='right'>
  	<v-pagination
  		:total="total"
  		:current="current"
  		:pageSize="pageSize"
  		@getPageSize="getPageSize"
  		@jump="jump"
  		></v-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      total:20,
      current:4,
      pageSize:25
    }
  },
  methods:{
  	left(){
  		console.log('left')
  	},
  	right(){
  		console.log('right')
  	},
  	jump(index){
			this.current=index;
  	},
  	getPageSize(pageSize){
  		this.pageSize=pageSize;
  	}
  },
  components:{
  	'v-pagination':(resolve)=>{
  		require(['components/pagination'],resolve);
  	}
  }
}
</script>
<style lang="less" scoped="scoped">
@import url("../assets/less/mixin.less");
.wrapper{
	height:100%;
	width:100%;
	background-color: ghostwhite;
}
</style>
