<template>
<div>
    <div class="cont-hot" >
        <h3>青宿最热</h3>
        <div class='cont-box'>
            <div class='cont-div' v-for='info of mes' :key='info.id' @click="conhotdetail(info)" >
                <img :src="info.housePhoto" alt="">             
                <div class="cont-info"><h5>{{info.price}}</h5> <p>{{info.style}}</p></div>
                <div class="cont-info"> <span> 三亚 </span>  |  <span>评价2</span></div>
            </div>                       
        </div>           
    </div>


</div>
    

</template>


// import {mapState,mapMutations,mapGetters,mapActions}  from 'vuex'


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
                axios.get("/api/user/selectHouse").then(response => {
                    this.mes = response.data.result;
                    console.log(this.mes);
                });
            },
            conhotdetail(info) {
                this.$router.push({ name: "conHotdetail", params: { id: info.id } });
            }
        },
        created() {
            this.getData();
        },
        updated() {
            new Swiper(".app-banner", {
            loop: true,
            autoplay: { delay: 1500 }
            });
        }
    };
</script>
<style lang="scss">


</style>
