
<style>
      .swiper-container-vertical{
            width: 100%;
            height: 2rem;
         
        }  
</style>
<template>
    <div>

    </div>

</template>

<script>
 
    import Swiper from 'swiper'
    import axios from "axios";


    export default {
        name: "con-hot",
        data: function() {
            return {
                mes: []
            };
        },
        methods: {
            getData() {
            // let that = this;
                console.log('请求数据')
                axios.get("/static/mock/selectHouse.json").then(response => {
                    this.mes = response.data.result;
                    console.log(response)
                    console.log(this.mes);
                });
            }
        },
        created() {
            this.getData();
        },
        updated(){
			// new Swiper('.hot',{
            //     loop :true,
            //     direction:'vertical',
			// 	autoplay:{delay:2000}
			// })
		}
    };
</script>
