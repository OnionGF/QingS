

<template>
    <div class="home">
        <div class="m-image">
            <div class="title">
            	<span>我的</span>
            	<i class="iconfont share">&#xe61d;</i>
            </div>
            <header>
                <div class="person-head">
                	<img src="../../style/usage/1.png"/>
                </div>
                <div class="person-info">
                    <p class="person-info-name">那天八点半</p>
                    <p class="person-info-signature">来到青宿一天了</p>
                </div>
                <div class="iconfont personmore">&#xe609;</div>
            </header>
            <nav>          
                 <router-link to="/wallet" class="wallet">
                 	<i class="iconfont iwallet">&#xe623;</i>
                 	<span>钱包</span>
                 </router-link>
                <router-link to="/sale" class="sale">
                	<i class="iconfont isale">&#xe61f;</i>
                 	<span>优惠券</span>
                </router-link>
                <router-link to="/bankcard" class="bankcard">
                	<i class="iconfont ibankcard">&#xe610;</i>
                 	<span>银行卡</span>
                </router-link>
            </nav>   
        </div>
        <div class="mes">
          	<router-link to="/need" class="need">
             	<i class="iconfont ineed">&#xe650;</i>
             	<span>我的需求</span>
            </router-link>
            <router-link to="/evaluate" class="evaluate">
            	<i class="iconfont ievaluate">&#xe66e;</i>
             	<span>我的评价</span>
            </router-link>
            <router-link to="/release" class="release">
            	<i class="iconfont irelease">&#xe61e;</i>
             	<span>我要发布房源</span>
            </router-link>
            <router-link to="/setup" class="setup">
            	<i class="iconfont isetup">&#xe60c;</i>
             	<span>设置</span>
            </router-link>
            <router-link to="/connect" class="connect">
            	<i class="iconfont iconnect">&#xe681;</i>
             	<span>客服及意见反馈</span>
            </router-link>
        </div>
    </div>
</template>


<script>
    export default {
        name:'mine'
       
    }
</script>