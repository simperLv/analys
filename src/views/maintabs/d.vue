<template>
  <div class="d">
     <div class="instract font3">
说明:本分析报告统计数据均为二手住宅成交数据,主打楼盘均指中原的主打楼盘,主城数据来源于锦江区,青羊区,武侯区,成华区,金牛区,高新,天府新区(华阳)。
    </div>
    <div class="maintitle font5">
东区二手行情(主城)
    </div>
    <div class="content1">
        <el-row>
            <el-col :span="14">
                <div class="chart font5 padding20">
                    <img src='https://d26uhratvi024l.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/二手市场月报/u14.png?token=1294c3b2c77fba142c1996ca5b1cc1f3'>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-purple description font3">                    
                {{dnData.month}}月东区主城所有楼盘市场成交住宅6000套，环比下降15%；中原主打楼盘市场成交1000套，环比下降15%。
                </div>
            </el-col>
        </el-row>
    </div>
     <div class="content2">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple paiban4 font3">
                近3月东区所有楼盘成交
                </div>
                <el-row>
                <div class="tabledate paiban1 font3">
                <el-table
                 :data="tableData"
                 style="width: 100%">
                 <el-table-column
                  prop="expert"
                  label="行家"
                  min-width="40">
                 </el-table-column>
                 <el-table-column
                  prop="month1"
                  label="7月"
                  min-width="40">
                 </el-table-column>
                 <el-table-column
                  prop="month2"
                  label="8月"
                  min-width="40">
                 </el-table-column>
                 <el-table-column
                 prop="month3"
                 label="9月"
                 min-width="40">
                 </el-table-column>
               </el-table>
               </div>
               </el-row>
            </el-col>
           <el-col :span="12">
                <div class="grid-content bg-purple paiban4 font3">
                近3月东区主打楼盘成交
                </div>
                <el-row>
                <div class="tabledate paiban2 font3">
                <el-table
                 :data="tableData"
                 style="width: 100%">
                 <el-table-column
                  prop="expert"
                  label="行家"
                  min-width="40">
                 </el-table-column>
                 <el-table-column
                  prop="month1"
                  label="7月"
                  min-width="40">
                 </el-table-column>
                 <el-table-column
                  prop="month2"
                  label="8月"
                  min-width="40">
                 </el-table-column>
                 <el-table-column
                 prop="month3"
                 label="9月"
                 min-width="40">
                 </el-table-column>
               </el-table>
               </div>
               </el-row>
            </el-col>
        </el-row>
    </div>
     <div class="subtitle font5">
9月东区楼盘成交及门店分布(主城)
    </div>
 <div class="anniu font5 textleft padding3">
<el-row>
    <el-button size="mini" round>有成交楼盘</el-button>
    <el-button size="mini" round>所有楼盘TOP30</el-button>
    <el-button size="mini" round>主打楼盘TOP15</el-button>
</el-row>
    </div>
    <div class="ditu padding20">
        <img src='https://d26uhratvi024l.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/东南区/u237_c.png?token=9bbfb95a98d19d705990fedd6b5b0010'>
    </div>
     <div class="subtitle font10">
9月东区所有楼盘成交TOP30(主城)
    </div>
     <div class="table1 paiban3 font3">
          <el-row>
                <div class="tabledate font3">
               <el-table
    :data="tableData1"
    border
    style="width: 100%">
    <el-table-column
      fixed="left"
      prop="rank"
      label="排名"
      min-width="30">
    </el-table-column>
    <el-table-column
    fixed
      prop="name"
      label="楼盘"
      min-width="150">
    </el-table-column>
    <el-table-column
      prop="isZD"
      label="是否主打"
      min-width="50">
    </el-table-column>
    <el-table-column label="市场成交">
    <el-table-column
      prop="market"
      label="市场"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="lianjia"
      label="链家"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="zhongyuan"
      label="中原"
      min-width="40">
    </el-table-column>
     </el-table-column>
     <el-table-column label="A+指标">
    <el-table-column
      prop="youxiao"
      label="有效房源量"
      min-width="65">
    </el-table-column>
   <el-table-column
      prop="weituo"
      label="委托量"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="daikan"
      label="带看量"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="fangpan"
      label="官网放盘"
      min-width="50">
    </el-table-column>
        </el-table-column>
    <el-table-column
      prop="guapai"
      label="市场挂牌"
      min-width="50">
    </el-table-column>

  </el-table>
               </div>
               </el-row>
         </div>
           <div class="subtitle font5">
9月东区主打楼盘成交TOP15(主城)
    </div>
     <div class="table2 paiban3 font3">
          <el-row>
                <div class="tabledate2 paiban1 font3">
               <el-table
    :data="tableData2"
    border
    style="width: 100%">
    <el-table-column
      fixed="left"
      prop="rank"
      label="排名"
      min-width="30">
    </el-table-column>
    <el-table-column
    fixed
      prop="name"
      label="楼盘"
      min-width="150">
    </el-table-column>
    <el-table-column label="市场成交">
    <el-table-column
      prop="market"
      label="市场"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="lianjia"
      label="链家"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="zhongyuan"
      label="中原"
      min-width="40">
    </el-table-column>
     </el-table-column>
     <el-table-column label="A+指标">
    <el-table-column
      prop="youxiao"
      label="有效房源量"
      min-width="65">
    </el-table-column>
   <el-table-column
      prop="weituo"
      label="委托量"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="daikan"
      label="带看量"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="fangpan"
      label="官网放盘"
      min-width="50">
    </el-table-column>
 </el-table-column>
    <el-table-column
      prop="guapai"
      label="市场挂牌"
      min-width="50">
    </el-table-column>
    <el-table-column
      prop="store"
      label="责任分行"
      min-width="150">
    </el-table-column>
  </el-table>
               </div>
               </el-row>
         </div>
          <div class="subtitle font5">
9月东区0成交主打楼盘(主城)
    </div>
     <div class="table3 paiban3 font3">
          <el-row>
                <div class="tabledate3 paiban1 font3">
                    <el-table
    :data="tableData3"
    border
    style="width: 100%">
    <el-table-column
    fixed="left"
      prop="name"
      label="楼盘"
      min-width="150">
    </el-table-column>
     <el-table-column label="A+指标">
    <el-table-column
      prop="youxiao"
      label="有效房源量"
      min-width="65">
    </el-table-column>
   <el-table-column
      prop="weituo"
      label="委托量"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="daikan"
      label="带看量"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="shikan"
      label="实勘量"
      min-width="40">
    </el-table-column>
    <el-table-column
      prop="fangpan"
      label="官网放盘"
      min-width="50">
    </el-table-column>
 </el-table-column>
    <el-table-column
      prop="guapai"
      label="市场挂牌"
      min-width="50">
    </el-table-column>
    <el-table-column
      prop="store"
      label="责任分行"
      min-width="150">
    </el-table-column>
  </el-table>
               </div>
               </el-row>
         </div>
</div>
</template>

<script>
    export default {
        name: 'd',
        data() {
            return {
                dnData:{
                            month:'9',
                            dncj:6000, //总成交
                            schb:'-15%',//环比
                            dnzd:1000, //主打成交
                            zdhb:'-15%',//环比
                },
                 tableData: [{
          expert: '全市',
          month1: '8451',
          month2: '8451',
          month3: '8451',
        }, {
           expert: '中原',
          month1: '20',
          month2: '20',
          month3: '20',
        }, {
          expert: '市占',
          month1: '0.23%',
          month2: '0.23%',
          month3: '0.23%',
        }, {
         expert: '链家',
          month1: '3000',
          month2: '3000',
          month3: '3000',
        }, {
          expert: '市占',
          month1: '35.5%',
          month2: '35.5%',
          month3: '35.5',
        }],
         tableData1: [{
          rank: '1',
          name: '神仙树大院',
          isZD: '是',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
        }, {
          rank: '2',
          name: '中铁西子香荷',
          isZD: '',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
        }, {
          rank: '3',
          name: '神仙树大院',
          isZD: '是',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
        }, {
         rank: '4',
          name: '神仙树大院',
          isZD: '是',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
        },{
          rank: '2',
          name: '中铁西子香荷',
          isZD: '',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
        },{
          rank: '2',
          name: '中铁西子香荷',
          isZD: '',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
        },{
          rank: '2',
          name: '中铁西子香荷',
          isZD: '',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
        }
        ],
        tableData2: [{
          rank: '1',
          name: '神仙树大院',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
          store:'神仙树大院分行',
        }, {
           rank: '1',
          name: '神仙树大院',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
          store:'神仙树大院分行',
        }, {
           rank: '1',
          name: '神仙树大院',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
          store:'神仙树大院分行',
        },{
          rank: '1',
          name: '神仙树大院',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
          store:'神仙树大院分行',
        },{
           rank: '1',
          name: '神仙树大院',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
          store:'神仙树大院分行',
        },{
           rank: '1',
          name: '神仙树大院',
          market: '57',
          lianjia:17,
          zhongyuan:12,
          youxiao: 47,
          weituo: 5,
          daikan:21,
          fangpan:5,
          guapai:10,
          store:'神仙树大院分行',
        }
        ],
        tableData3: [{
          name: '置信丽都花园城巴厘岛B区',
          youxiao: 4,
          weituo: '',
          daikan:30,
          shikan:1,
          fangpan:'',
          guapai:10,
          store:'大悦城分行',
        }, {
           name: '保利锦湖林语二期',
          youxiao: 1,
          weituo: '',
          daikan:'',
          shikan:'',
          fangpan:'',
          guapai:'',
          store:'盛和二路分行',
        }],
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dn{
    background-color: rgba(153,204,255,0.1)
}
.instract{
    background-color: rgba(242,242,242,1);
    line-height:1.5;
    text-align:left;
    padding-left: 20px;
    color:rgb(204,0,0);
    /* font-size: 10px; */
}
.maintitle
{

font-weight: 800;
text-align: center;
padding: 10px;
}
.subtitle
{

font-weight: 800;
text-align: center;
padding: 10px;
}
.description2{
    text-align: left;
    text-indent: 2em;
    padding: 20px;
}
.description{
    text-align: left;
    text-indent: 2em;
    padding:20px 10px 10px 10px;
}
.paiban1{
    padding:0px 10px 10px 0px;
}
.paiban2{
    padding:0px 0px 10px 10px;
}
.paiban3{
    padding:0px 0px 20px 0px;
}
.paiban4{
    padding:10px 0px 0px 0px;
}
.textleft{
    float: left
}
</style>