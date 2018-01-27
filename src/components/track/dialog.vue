<template>

	<div class="dialogcon">
		<div class="dialogcontit"> 
			<i class="iconfont back" onclick="javascript:history.back(-1);">&#xe624;</i>
            <span class="mess">三亚异地风情度假村</span>
        </div>  
        <div class="dialogcontitcon">
			
        	
        </div>
        <div class="dialogconfooter">
        	<!-- <p class="dialogconvoice"><i class="iconfont dialogvoice">&#xe805;</i></p>
        	<p class="dialogconwenzi"><input class="dialogtxt"type="text"/></p>
        	<p class="dialogconsmile"><i class="iconfont dialogsmile">&#xe62c;</i></p>
        	<p class="dialogconinsert"><i class="iconfont dialoginsert">&#xe726;</i></p> -->
			<textarea id="t1" v-model="mes"></textarea>
			<input @click="send" type="button" id="b1" value="发送">
        </div>
		
	</div>
    <!-- <v-button type="primary" @click="_showModal2">显示对话框</v-button> -->

</template>

<script>
	 import foots from '../footer/foot'
	 export default {
		data(){
			return{
				mes:''
			}
		},
        name:'nologin',
        components:{foots},
       	methods: {
            gologin() {
                this.$router.push({ name: "password"});
			},
			send(){	
				this.fn();	
				// ot1.val('');
				this.mes=''

			},
			fn(){
				var od1 = document.getElementsByClassName("dialogcontitcon")[0];
				var ot1 = document.getElementById("t1");
				var ob1 = document.getElementById("b1");				
				var ot = ot1.value;
				var li = document.createElement("li");
				var span = document.createElement("span");			
				od1.appendChild(li);
				li.appendChild(span);				
				span.style.background="#dd0";
				span.style.borderRadius = "6px";
				var txt = document.createTextNode(ot);		
				span.appendChild(txt);	
			}
			
        },
	}
	var od1 = document.getElementsByClassName("dialogcontitcon")[0];
	var ot1 = document.getElementById("t1");
	var ob1 = document.getElementById("b1");
		
		document.onkeydown = function(evt){
			evt = evt || window.event;
			if(evt.ctrlKey && evt.keyCode==13){
				fn();
				ot1.value="";
			}
		}
</script>

<style lang="scss">
	
	.nologin{
		.nologintitle{
			height: 0.4rem;
			background: #017C84;
			line-height: 0.4rem;
			text-align: center;
			color: #fff;
			font-size: 0.2rem;
		}
		.nologincenter{
			.nologincenterwenzi{
				margin-top: 3.14rem;
				text-align: center;
				color: #5f636b;
				font-size: 16px;
			}
		}
		.nologinbtn{
			width: 3.3rem;
			height: 0.44rem;
			background: #017C84;
			color: #fff;
			outline: none;
			border: none;
			margin-top: 1.25rem;
			margin-left: 0.25rem;
		}
	
	}






	
	
</style>

