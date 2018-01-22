<template>
    <div>
        房东故事
        <div class="back" @click="back">
            返回
        </div>
    </div>
</template>
<script>
export default {
    name:'con1',
    methods:{
        back(){
            this.$router.push({path:'/mains'})
        }
    }
}
</script>

<style>

    .back{
        position:fixed;
        bottom:0.5rem;
        right: 0.2rem;;
        background:#017c84;
        opacity: 0.7;
        color:#fff;
        width:0.5rem;
        height:0.5rem;
        border-radius:0.25rem;
        text-align: center;
        font-size:0.15rem;line-height: 0.5rem;
    }
</style>
