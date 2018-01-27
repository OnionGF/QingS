

<template>

        <div class="box">
            <div class="box-con">
                <img src="/static/img/0_03.png" alt="">
                <a href="">
                    <h3>{{data.name}}</h3>
                    <span>{{data.date}}</span>
                    <span>{{data.price}}</span>
                </a>
            </div>
            <!-- <a  class='ply' href=""></a> -->
            <i-button   class='ply'  type="primary" shape="circle" size="small">{{data.ping}}</i-button>
            <!-- <i-button   class='ply'  type="primary" shape="circle" size="small">{{data.again}}</i-button>             -->
        </div>     

</template>


<script>
    export default {
        name:'box',
        props:['data'],
        data(){
            return{
               
            }
        }
       
    }
</script>

<style lang="scss" scoped>
    .box{
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #ccc;
        background:#fff;
 
        .box-con{
            width:3rem;
            display: flex;
            justify-content: flex-start;
            margin:0.1rem;
            img{
                width:0.7rem;
                height:0.7rem;
                margin-right:0.2rem;
            }
            a{
                display: flex;
                flex-direction: column;
                color:#999;                             
            }
        }
        .ply{
            font-size:0.15rem;
            margin-top:0.2rem;
            height:0.25rem;
            background:#017C84;
            margin-right:0.1rem;
        }
    }
</style>

