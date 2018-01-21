import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/components/index/index.vue'
import conHotdetail from '@/components/index/contentBox/conHotdetail.vue'
import orderHotel from  '@/components/index/contentBox/orderHotel.vue'
import mysearch from '@/components/index/mysearch.vue'
import order from '@/components/order/order.vue'
import or1 from '@/components/order/or1.vue'
import or2  from '@/components/order/or2.vue'
import or4 from '@/components/order/or4.vue'
import or5 from '@/components/order/or5.vue'

import mine from '@/components/mine/mine.vue'
import wallet from '@/components/mine/wallet.vue'
import sale  from '@/components/mine/sale.vue'
import bankcard  from '@/components/mine/bankcard.vue'
import need  from '@/components/mine/need.vue'
import evaluate  from '@/components/mine/evaluate.vue'
import release  from '@/components/mine/release.vue'
import setup  from '@/components/mine/setup.vue'
import connect  from '@/components/mine/connect.vue'
import updateinfo from '@/components/mine/updateinfo.vue'
import updatehead from '@/components/mine/updateinfo/updatehead.vue'
import updatenickname from '@/components/mine/updateinfo/updatenickname.vue'
import updatebrief from '@/components/mine/updateinfo/updatebrief.vue'
import updatesex from '@/components/mine/updateinfo/updatesex.vue'
import updateage from '@/components/mine/updateinfo/updateage.vue'
import updatejob from '@/components/mine/updateinfo/updatejob.vue'
import updatecity from '@/components/mine/updateinfo/updatecity.vue'

import nologin from '@/components/track/nologin.vue'
import tracks from '@/components/track/tracks.vue'
import dialog from '@/components/track/dialog.vue'
import collect from '@/components/collect/collect.vue'
import tag1 from '@/components/collect/tag-1.vue'
import tag2 from '@/components/collect/tag-2.vue'

import login from '@/components/login/login.vue'
import yanzhengma from '@/components/login/yanzhengma.vue'
import password from '@/components/login/password.vue'

 const routes = [
    {path:'',redirect:'/mains'},  //重定向，为空的时候进入到main文件里
    {path:'/mains',name:'mains',component:index},
    {path:'/conHotdetail/:id',component:conHotdetail,name:'conHotdetail'},
    {path:'/orderHotel/',component:orderHotel,name:'orderHotel'},
    {path:'/mysearch',component:mysearch,name:'mysearch'},
    {path:'/tracks',name:'tracks',component:tracks},

    {path:'/nologin',name:'nologin',component:nologin},

    {path:'/dialog',name:'dialog',component:dialog},
    {path:'/login',component:login,
       children:[
        {path:'/login',redirect:'/password'},
        {path:'/yanzhengma',component:yanzhengma,name:'yanzhengma'},
        {path:'/password',component:password,name:'password'}
      ]},
    // {path:'/collect',component:collect,
    //   children:[
    //     {path:'/collect',redirect:'/tag1'},
    //     {path:'/tag1',component:tag1,name:'tag1'},
    //     {path:'/tag2',component:tag2,name:'tag2'}
    //   ]},
    {path:'/order',component:order,
      children:[
        {path:'/order',redirect:'/or1'},
        {path:'/or1',component:or1,name:'or1'},
        {path:'/or2',component:or2,name:'or2'},
        {path:'/or4',component:or4,name:'or4'},
        {path:'/or5',component:or5,name:'or5'}
      ]},
    {path:'/mine',name:'mine',component:mine},
    {path:'/wallet',component:wallet,name:'wallet'},
    {path:'/sale',component:sale,name:'sale'},
    {path:'/bankcard',component:bankcard,name:'bankcard'},
    // {path:'/need',component:need,name:'need'},
    {path:'/evaluate',component:evaluate,name:'evaluate'},
    {path:'/release',component:release,name:'release'},
    {path:'/setup',component:setup,name:'setup'},
    {path:'/connect',component:connect,name:'connect'},
//  {path:'/updateinfo/:nickname',component:updateinfo,name:'updateinfo'},
//  {path:'/updatenickname/:nickname',component:updatenickname,name:'updatenickname'},
    {path:'/updateinfo',component:updateinfo,name:'updateinfo'},
    {path:'/updatenickname',component:updatenickname,name:'updatenickname'},
    {path:'/updatebrief',component:updatebrief,name:'updatebrief'},
    {path:'/updatesex',component:updatesex,name:'updatesex'},
    {path:'/updateage',component:updateage,name:'updateage'},
    {path:'/updatejob',component:updatejob,name:'updatejob'},
    {path:'/updatecity',component:updatecity,name:'updatecity'},
    
    {path:'**',redirect:'/mains'}
 ]
     
  

export default new Router({
      routes
})