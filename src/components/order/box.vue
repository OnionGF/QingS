

<template>

        <div class="box">
            <div class="box-con">
                <img src="/static/img/0_03.png" alt="">
                <a href="">
                    <h3>主题公寓</h3>
                    <span>09月16日-09月17日</span>
                    <span>房价：￥6000</span>
                </a>
            </div>
            <a  class='ply' href="">{{data}}</a>
        </div>     

</template>


<script>
    export default {
        name:'box',
        props:['data']
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
            margin-right:0.1rem;
        }
    }
</style>

