<template>
  <div class="main">
    <div class="title-imageDiv">
        <img src='../assets/1.png'>
        <div class="BigTitle">{{title.titleName}}<br>{{title.titleDate}}</div>
    </div>
    <div class="xuanxiang">
      <el-tabs v-model="activeName">
    <el-tab-pane label="全市" name="first">
      <city></city>
    </el-tab-pane>
    <el-tab-pane label="东南区" name="second">
      <dn></dn>
    </el-tab-pane>
    <el-tab-pane label="大北区" name="third">
      <db></db>
    </el-tab-pane>
    <el-tab-pane label="西南区" name="fourth">
      <xn></xn>
    </el-tab-pane>
    <el-tab-pane label="东区" name="five">
      <dq></dq>
    </el-tab-pane>
  </el-tabs>
    </div>

  </div>
</template>

<script>
import city from '@/views/maintabs/city.vue' 
import dn from '@/views/maintabs/dn.vue'
import db from '@/views/maintabs/db.vue' 
import xn from '@/views/maintabs/xn.vue'
import dq from '@/views/maintabs/dq.vue'
export default {
  name: 'main',
  data () {
    return {
      title:{
        titleName:'二手市场分析月报',
        titleDate:'2018年10月'
      },
      activeName: 'first'
    }
  },
   components:{city,dn,db,xn,dq}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main .el-tabs__nav-wrap{
  background-color: #99CCFF;
}
.main .el-tabs__item:hover{
  background-color: #ffffff;
}
.main .el-tabs__item.is-active{
  background-color: #ffffff;
}
.main .el-tabs--top .el-tabs__item.is-top:last-child{
  padding-right: 20px;
}
/* .main .el-tabs--top .el-tabs__item.is-top:first-child{
  padding-left: 20px;
} */
.main  .el-tabs__nav-wrap.is-scrollable{
 padding: 0;
}
.main .el-tabs__nav-next, .el-tabs__nav-prev{
  display: none;
}
.main .el-tabs__item{
  padding: 0 10px;
}
.el-tabs__active-bar{
transform: unset!important;
    width: 0px!important;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2){
  padding-left: 10px
}
.main .el-tabs__header{
  margin:0;
}
</style>
