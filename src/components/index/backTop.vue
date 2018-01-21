
<style scoped>
    .top{

        opacity: 0.7;
        color: #333;
        text-align: center;
        border-radius:50%;
        width:80px;
        height:50px;
        font-size:5px;
       
    }
     .fa-hand-o-up{
            font-size:35px;  
            padding-top:10px; 
            color:black;
        }
</style>
<template>
    <Back-top :height="70" :bottom="60">
        <div class="top"><i class="fa  fa-hand-o-up"></i> </div>
    </Back-top>
</template>
<script>
    export default {
        
    }
</script>
