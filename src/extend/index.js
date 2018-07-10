import layer from 'vue-layer'
import vueTouch from './vue-touch'
import http from './vue-http'
import cookie from './vue-cookie'
import utils from './vue-utils'
import collect from './vue-collect'
export default function(Vue){
	Vue.prototype.layer=layer(Vue);
	Vue.use(vueTouch);
	Vue.use(http);
	Vue.use(cookie);
	Vue.use(utils);
	Vue.use(collect);
}
