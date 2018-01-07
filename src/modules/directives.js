
import Vue from 'vue'

Vue.directive('changeClass',{
	inserted(el,binding){
		window.addEventListener("scroll",function(e){
            console.log('123')
			// if(this.scrollY>Number(binding.arg)){
			// 	binding.value.value=true
			// }else{
			// 	binding.value.value=false
            // }
            console.log(this.scrollY)
		})
		
	}
})


