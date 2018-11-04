<template>
  <div class="city">
    <div class="instract font3">
说明:本分析报告统计数据均为二手住宅成交数据,主打楼盘均指中原的主打楼盘,主城数据来源于锦江区,青羊区,武侯区,成华区,金牛区,高新,天府新区(华阳)。
    </div>
    <div class="maintitle font5">
全市二手行情
    </div>
    <div class="content">
        <el-row>
            <el-col :span="14">
                <div class="tabledate font5 padding10">
                  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="expert"
      label="行家"
      min-width="40">
    </el-table-column>
    <el-table-column label="主城区">
      <el-table-column
        prop="all1"
        label="所有楼盘"
        min-width="40">
      </el-table-column>
       <el-table-column
        prop="main1"
        label="主打楼盘"
        min-width="40">
      </el-table-column>
    </el-table-column>
    <el-table-column label="郊区">
      <el-table-column
        prop="all2"
        label="所有楼盘"
        min-width="40">
      </el-table-column>
       <el-table-column
        prop="main2"
        label="主打楼盘"
        min-width="40">
      </el-table-column>
    </el-table-column>
    
  </el-table>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-purple-light description font3">
                    {{quanshiData.month}}月主城区市场成交二手住宅2667套，其中中原成交4套，市占率为0.15%，链家成交911套， 市占率为34.15%；主城区中原主打楼盘市场成交二手住宅1000套，其中中原成交2套，市占率为0.2%， 链家成交360套，市占率为36%。
                </div>
                <div class="grid-content bg-purple-light description font3">
                    {{jiaoquData.month}}月郊区市场成交二手住宅2667套，其中中原成交4套，市占率为0.15%，链家成交911套， 市占率为34.15%；郊区中原主打楼盘市场成交二手住宅1000套，其中中原成交2套，市占率为0.2%， 链家成交360套，市占率为36%。
                </div>
            </el-col>
        </el-row>
    </div>
    

        <div class="content2">
            
        <el-row>
            
            <el-col :span="10"><div class="grid-content bg-purple description font3">                    
                {{quanshiData.month}}月主城区所有楼盘市场成交二手住宅6000套，环比下降15%；主城区中原主打楼盘市场成交二手住宅1000套，环比下降15%。
             </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light padding10 font3">
                    <img src='https://d26uhratvi024l.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/二手市场月报/u14.png?token=1294c3b2c77fba142c1996ca5b1cc1f3'>
                </div>
            </el-col>
          
        </el-row>

    </div>
    <div class="content3">
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple paiban3 font3">
                各站区所有楼盘成交走势（主城）
                <el-row>
                        <img src='https://d2v8ggac1o0f6z.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/二手市场月报/u123.png?token=9c08a699f70a481b940e90ea858e5256'>
                     </el-row>
                
                </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light paiban3 font3">
                各战区主打楼盘成交走势（主城）
               <el-row>
                        <img src='https://d2v8ggac1o0f6z.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/二手市场月报/u123.png?token=9c08a699f70a481b940e90ea858e5256'>
                     </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="content4">
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple description font3">
                {{siquscData.month}}月东南区所有楼盘市场成交二手住宅2000套，环比下降3%；
                大北区成交2000套，环比下降3%；西南区成交2000套，
                环比下降3%；东区成交2000套，环比下降3%。

                </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light description font3">
                {{siquzcData.month}}月东南区中原主打楼盘市场成交二手住宅2000套，环比下降3%；
                大北区成交2000套，环比下降3%；西南区成交2000套，
                环比下降3%；东区成交2000套，环比下降3%。
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="content5 padding20">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple texrCenter  paiban1 font3">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple texrCenter tablename font3">
                                主城所有楼盘<br>中原成交
                            </div>
                        </el-col>
                        <el-col :span="12">
                             <div class="grid-content bg-purple texrCenter tablename font3">
                                半年成交<br>{{zyljData.zysy}}套
                            </div>
                        </el-col>    
                     </el-row>
                 </div>
           
                <div class="grid-content bg-purple texrCenter paiban1 font3">
                          <img src='https://dxlfb468n8ekd.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/二手市场月报/u50.png?token=36e38afb1da3edee4845fd9fff3e877a'>
                </div> 
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light texrCenter  paiban2 font3">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple texrCenter tablename font3">
                                主城所有楼盘<br>链家成交
                            </div>
                        </el-col>
                        <el-col :span="12">
                             <div class="grid-content bg-purple texrCenter tablename font3">
                                半年成交<br>{{zyljData.zysy}}套
                            </div>
                        </el-col>    
                     </el-row>
                 </div>
           
                <div class="grid-content bg-purple texrCenter paiban2 font3">
                            <img src='https://dxlfb468n8ekd.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/二手市场月报/u50.png?token=36e38afb1da3edee4845fd9fff3e877a'>
                </div>
            </el-col>
        </el-row>
    </div>
   <div class="content5 padding20">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple texrCenter  paiban1 font3">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple texrCenter tablename font3">
                                主城主打楼盘<br>中原成交
                            </div>
                        </el-col>
                        <el-col :span="12">
                             <div class="grid-content bg-purple texrCenter tablename font3">
                                半年成交<br>{{zyljData.zysy}}套
                            </div>
                        </el-col>    
                     </el-row>
                 </div>
           
                <div class="grid-content bg-purple texrCenter paiban1 font3">
                            <img src='https://dxlfb468n8ekd.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/二手市场月报/u50.png?token=36e38afb1da3edee4845fd9fff3e877a'>
                </div> 
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light texrCenter  paiban2 font3">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple texrCenter tablename font3">
                                主城主打楼盘<br>链家成交
                            </div>
                        </el-col>
                        <el-col :span="12">
                             <div class="grid-content bg-purple texrCenter tablename font3">
                                半年成交<br>{{zyljData.zysy}}套
                            </div>
                        </el-col>    
                     </el-row>
                 </div>
           
                <div class="grid-content bg-purple texrCenter paiban2 font3">
                            <img src='https://dxlfb468n8ekd.cloudfront.net/gsc/J3LUL3/6a/2e/a0/6a2ea0e8e1274ed28693352e654d58a4/images/二手市场月报/u50.png?token=36e38afb1da3edee4845fd9fff3e877a'>
                </div>
            </el-col>
        </el-row>
    </div> 
</div>
</template>

<script>
    export default {
        name: 'city',
        data() {
            return {
                quanshiData:{
                            month:'9',
                            sczcj:2667, //市场总成价
                            sczy:4,//市场中原成交
                            zyszl:'0.15%', //中原市占率
                            sclj:911,//市场链家成交
                            ljszl:'34.15%',//链家市占率
                            sczd:1000,//市场主打成交
                            zyzd:2,//中原主打成交
                            zdzysz:'0.2%',//中原主打市占率
                            ljzd:360,//链家主打成交
                            ljzdsz:'36%',//链家主打市占率
                    },
                jiaoquData:{
                            month:'9',
                            sczcj:2667, //市场总成价
                            sczy:4,//市场中原成交
                            zyszl:'0.15%', //中原市占率
                            sclj:911,//市场链家成交
                            ljszl:'34.15%',//链家市占率
                            sczd:1000,//市场主打成交
                            zyzd:2,//中原主打成交
                            zdzysz:'0.2%',//中原主打市占率
                            ljzd:360,//链家主打成交
                            ljzdsz:'36%',//链家主打市占率  
                 },
                  zhuchengData:{
                            month:'9',
                            zcsc:6000, //主城市场
                            zchb:'-15%',//主城市场环比
                            zczd:1000, //主城主打
                            zczdhb:'-15',//主城主打环比
                 },
                 siquscData:{
                            month:'9',
                            dnsc:2000, //东南主城成交
                            dnhb:'-3%',//东南环比
                            dbsc:2000, //大北主城成交
                            dbhb:'-3%',//大北环比
                            xnsc:2000, //西南主城成交
                            xnhb:'-3%',//西南环比
                            dqsc:2000, //东区主城成交
                            dqhb:'-3%',//东区环比
                 },
                 siquzcData:{
                            month:'9',
                            dnsc:2000, //东南主城成交
                            dnhb:'-3%',//东南环比
                            dbsc:2000, //大北主城成交
                            dbhb:'-3%',//大北环比
                            xnsc:2000, //西南主城成交
                            xnhb:'-3%',//西南环比
                            dqsc:2000, //东区主城成交
                            dqhb:'-3%',//东区环比
                 },
                  zyljData:{
                            zysy:66,//中原所有累计
                            ljsy:66, //链家所有累计
                            zyzd:66,//中原主打累计
                            ljzd:66, //链家主打累计
                            
                 },
                tableData: [{
          expert: '全市',
          all1: '2667',
          main1: '1000',
          all2: '2667',
          main2: '1000',
        }, {
           expert: '中原',
          all1: '4',
          main1: '2',
          all2: '4',
          main2: '2',
        }, {
          expert: '市占',
          all1: '0.15%',
          main1: '0.20%',
          all2: '0.15%',
          main2: '0.20%',
        }, {
          expert: '链家',
          all1: '911',
          main1: '360',
          all2: '911',
          main2: '360',
        }, {
          expert: '市占',
          all1: '34.15%',
          main1: '36.00%',
          all2: '34.15%',
          main2: '36.00%',
        }]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.city{
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
.description{
    text-align: left;
    text-indent: 2em;
    padding:20px 10px 10px 10px;
}
.description2{
    text-align: left;
    text-indent: 2em;
    padding: 20px;
}

.tablename{
    background-color:rgba(153, 204, 255, 0.43921568627451);
    
}
.paiban1{
    padding:0px 10px 0px 0px;
}
.paiban2{
    padding:0px 0px 0px 10px;
}
.paiban3{
    padding:20px 10px 10px 10px;
}

.el-table th>.cell{
    font-size:5px;
    text-align:center;
    line-height: 8px;
}
.el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
    padding-left: 0px;
}
.el-table .cell, .el-table th div{
        padding-right: 0px;
}
.el-table .cell, .el-table th div{
    overflow: visible;
}

.el-table{
    font-size:5px;
    text-align:center;
}
.el-table .cell{
    line-height: 10px;
}
.el-table td, .el-table th{
    text-align: center;
}
</style>