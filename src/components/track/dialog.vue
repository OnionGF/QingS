<template>
	<div class="dialogcon">
		<div class="dialogcontit"> 
			<i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="mess">三亚异地风情度假村</span>
        </div>  
        <div class="dialogcontitcon">
        	<!--<p class="dialogcontitconp">09:57</p>
        	<p class=""></p>-->
        	
        </div>
        <div class="dialogconfooter">
        	<p class="dialogconvoice"><i class="iconfont dialogvoice">&#xe805;</i></p>
        	<p class="dialogconwenzi"><input class="dialogtxt"type="text"/></p>
        	<p class="dialogconsmile"><i class="iconfont dialogsmile">&#xe62c;</i></p>
        	<p class="dialogconinsert"><i class="iconfont dialoginsert">&#xe726;</i></p>
        </div>
		
	</div>
    <!--<v-button type="primary" @click="_showModal2">显示对话框</v-button>
    <v-modal title="对话框标题"
    :visible="visible2"
    :confirm-loading="confirmLoading"
    :on-ok="_handleOk2"
    :on-cancel="_handleCancel2">
    <p>对话框的内容</p>
    </v-modal> -->
    
</template>


<script>


export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
<style lang="scss">
	
	
</style>