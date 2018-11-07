<template>
  <div class="city">
    <div class="instract font8">
说明:本分析报告统计数据均为二手住宅成交数据,主打楼盘均指中原的主打楼盘,主城数据来源于锦江区,青羊区,武侯区,成华区,金牛区,高新,天府新区(华阳)。
    </div>
    <div class="maintitle font15">
全市二手行情
    </div>
    <div class="content">
        <el-row>
            <el-col :span="14">
                <div class="tabledate font8 padding10">
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
                <div class="grid-content bg-purple-light description font8">
                    {{quanshiData.month}}月主城区市场成交二手住宅2667套，其中中原成交4套，市占率为0.15%，链家成交911套， 市占率为34.15%；主城区中原主打楼盘市场成交二手住宅1000套，其中中原成交2套，市占率为0.2%， 链家成交360套，市占率为36%。
                </div>
                <div class="grid-content bg-purple-light description font8">
                    {{jiaoquData.month}}月郊区市场成交二手住宅2667套，其中中原成交4套，市占率为0.15%，链家成交911套， 市占率为34.15%；郊区中原主打楼盘市场成交二手住宅1000套，其中中原成交2套，市占率为0.2%， 链家成交360套，市占率为36%。
                </div>
            </el-col>
        </el-row>
    </div>
    

        <div class="content2">
            
        <el-row>
            
            <el-col :span="10"><div class="grid-content bg-purple description font8">                    
                {{quanshiData.month}}月主城区所有楼盘市场成交二手住宅6000套，环比下降15%；主城区中原主打楼盘市场成交二手住宅1000套，环比下降15%。
             </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light padding10 font8">
                    <div id="myChart" :style="{width: '100%', height: '370px'}"></div>
                </div>
            </el-col>
        </el-row>

    </div>
    <div class="content3">
        <el-row>
            <el-col :span="12">
                <el-row>
                        <div id="myChart1" :style="{width: '100%', height: '370px'}"></div>
                     </el-row>
            </el-col>
            <el-col :span="12">
               <el-row>
                         <div id="myChart2" :style="{width: '100%', height: '370px'}"></div>
                     </el-row>
            </el-col>
        </el-row>
    </div>
    <div class="content4">
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple description font8">
                {{siquscData.month}}月东南区所有楼盘市场成交二手住宅2000套，环比下降3%；
                大北区成交2000套，环比下降3%；西南区成交2000套，
                环比下降3%；东区成交2000套，环比下降3%。

                </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light description font8">
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
                <div class="grid-content bg-purple texrCenter  paiban1 font8">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple texrCenter tablename font8">
                                主城所有楼盘<br>中原成交
                            </div>
                        </el-col>
                        <el-col :span="12">
                             <div class="grid-content bg-purple texrCenter tablename font8">
                                半年成交<br>{{zyljData.zysy}}套
                            </div>
                        </el-col>    
                     </el-row>
                 </div>
           
                <div class="grid-content bg-purple texrCenter paiban1 font8">
                          <div id="myChart3" :style="{width: '100%', height: '370px'}"></div>
                </div> 
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light texrCenter  paiban2 font8">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple texrCenter tablename font8">
                                主城所有楼盘<br>链家成交
                            </div>
                        </el-col>
                        <el-col :span="12">
                             <div class="grid-content bg-purple texrCenter tablename font8">
                                半年成交<br>{{zyljData.zysy}}套
                            </div>
                        </el-col>    
                     </el-row>
                 </div>
           
                <div class="grid-content bg-purple texrCenter paiban2 font8">
                            <div id="myChart4" :style="{width: '100%', height: '370px'}"></div>
                </div>
            </el-col>
        </el-row>
    </div>
   <div class="content5 padding20">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple texrCenter  paiban1 font8">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple texrCenter tablename font8">
                                主城主打楼盘<br>中原成交
                            </div>
                        </el-col>
                        <el-col :span="12">
                             <div class="grid-content bg-purple texrCenter tablename font8">
                                半年成交<br>{{zyljData.zysy}}套
                            </div>
                        </el-col>    
                     </el-row>
                 </div>
           
                <div class="grid-content bg-purple texrCenter paiban1 font8">
                            <div id="myChart5" :style="{width: '100%', height: '370px'}"></div>
                </div> 
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light texrCenter  paiban2 font8">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple texrCenter tablename font8">
                                主城主打楼盘<br>链家成交
                            </div>
                        </el-col>
                        <el-col :span="12">
                             <div class="grid-content bg-purple texrCenter tablename font8">
                                半年成交<br>{{zyljData.zysy}}套
                            </div>
                        </el-col>    
                     </el-row>
                 </div>
           
                <div class="grid-content bg-purple texrCenter paiban2 font8">
                            <div id="myChart6" :style="{width: '100%', height: '370px'}"></div>
                </div>
            </el-col>
        </el-row>
    </div> 
</div>
</template>

<script>




window.onresize = function(){
drawLine1.resize();
drawLine2.resize();
drawLine3.resize();
drawLine4.resize();            
}
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
        },
        mounted(){
            this.drawLine1();
            this.drawLine2();
            this.drawLine3();
            this.drawLine4();
            this.drawLine5();
            this.drawLine6();
            this.drawLine7();
        },
           methods: {
    drawLine1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        window.onresize = myChart.resize;
        // 绘制图表
        myChart.setOption({
            title : {
                 text: '主城区所有楼盘及主打楼盘成交走势',
                 x:'center',
                 textAlign:'left'
              },
            tooltip: {  trigger: 'axis',
                formatter: function (params, ticket, callback) {
                 var htmlStr = '';
                    var j = 0;
                    var data3 = ['20%','40%','50%','50%','50%','50%'];
                    for(var i=0;i<params.length;i++){
        	            var param = params[i];
        	
                    var xName = param.name;//x轴的名称
                    var seriesName = param.seriesName;//图例名称
                    seriesName.p
                    var value = param.value;//y轴值
                    var color = param.color;//图例颜色
                    var hotelParent = '主打占所有比例';
        	/*var data1=[
                {value:335, name:hotelParent},
                {value:310, name:hotelParent},
                {value:234, name:hotelParent},
                {value:135, name:hotelParent},
                {value:1548, name:hotelParent}
            ]*/
        	
        	
        	if(i===0){
        	  htmlStr += xName + '<br/>';//x轴的名称
        	}
        	//htmlStr += hotelParent + '<br/>';
        	
       
        	htmlStr +='<div>';
       
        	//为了保证和原来的效果一样，这里自己实现了一个点的效果
        	htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';
        	//htmlStr1 += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';
        	//圆点后面显示的文本
        	htmlStr += seriesName + '：' + value + '套';
        	//htmlStr1 += hotelParent + '：' + data3[i] ;
        	htmlStr += '</div>';
        /*	if(i === 0){
        	   htmlStr += hotelParent +  '：' + data3[i];
        	}
             
          }*/
              
        	 
          }
        
          
          return htmlStr;
         }
        },
         legend: {
        
         y: 'bottom',
        data:['所有楼盘成交量','中原主打楼盘成交量','主打占所有比例']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
            xAxis : [
        {
            type : 'category',
            data : ['4月','5月','6月','7月','8月','9月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'所有楼盘成交量',
            type:'bar',
          data :[ 23, 25, 76, 135, 162, 32]
        },
        {
            name:'中原主打楼盘成交量',
            type:'bar',
            data:[ 26, 28, 70, 175, 182, 48]
            
        }
    ]
        });
    },
     drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart.setOption({
        baseOption: { 
            title: {
        text: '各战区所有楼盘成交走势(主城)',
        x:'center'
    },
            tooltip: {   trigger: 'axis',
        },
         legend: {
             y: '30px',
             x:'50px',
            

        data:['东区','西南区','大北区','东南区']
         
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
   xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4月','5月','6月','7月','8月','9月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
       
        {
            name:'东区',
            type:'line',
            stack: '总量',
            data:[182, 191, 234, 290, 330, 310]
        },
        {
            name:'西南区',
            type:'line',
            stack: '总量',
            data:[232, 201, 154, 190, 330, 410]
        },
        {
            name:'大北区',
            type:'line',
            stack: '总量',
            data:[332, 301, 334, 390, 330, 320]
        },
        {
            name:'东南区',
            type:'line',
            stack: '总量',
            data:[ 932, 901, 934, 1290, 1330, 1320]
        }
    ]},
    media: [ // 这里定义了 media query 的逐条规则。
        {
           query: {
            maxAspectRatio: 1           // 当长宽比小于1时。
        },
        option: {
            legend: {                   // legend 放在底部中间。
                right: 'center',
                bottom: 0,
                orient: 'horizontal'    // legend 横向布局。
            },
            series: [                   // 两个饼图左右布局。
                {
                    radius: [20, '50%'],
                    center: ['50%', '30%']
                },
                {
                    radius: [30, '50%'],
                    center: ['50%', '70%']
                }
            ]
        }
    },
    {
        query: {
            maxWidth: 500               // 当容器宽度小于 500 时。
        },
        option: {
            legend: {
                right: 10,              // legend 放置在右侧中间。
                top: '15%',
                orient: 'vertical'      // 纵向布局。
            },
            series: [                   // 两个饼图上下布局。
                {
                    radius: [20, '50%'],
                    center: ['50%', '30%']
                },
                {
                    radius: [30, '50%'],
                    center: ['50%', '75%']
                }
            ]
        }
    },
        ]
});
        
    },
      drawLine3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart.setOption({
            title: {
        text: '各战区主打楼盘成交走势(主城)',
        x:'center'
    },
            tooltip: {   trigger: 'axis',
        },
         legend: {
             y: '30px',
             x:'50px',

        data:['东区','西南区','大北区','东南区']
         
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
   xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4月','5月','6月','7月','8月','9月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
       
        {
            name:'东区',
            type:'line',
            stack: '总量',
            data:[182, 191, 234, 290, 330, 310]
        },
        {
            name:'西南区',
            type:'line',
            stack: '总量',
            data:[232, 201, 154, 190, 330, 410]
        },
        {
            name:'大北区',
            type:'line',
            stack: '总量',
            data:[332, 301, 334, 390, 330, 320]
        },
        {
            name:'东南区',
            type:'line',
            stack: '总量',
            data:[ 932, 901, 934, 1290, 1330, 1320]
        }
    ]
        });
    },
     drawLine4(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart3'))
        // 绘制图表
        myChart.setOption({
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['所有楼盘中原成交量','中原市占率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['4月','5月','6月','7月','8月','9月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '成交量(套)',
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '市占率',
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'所有楼盘中原成交量',
            type:'bar',
            data:[26.4, 28.7, 70.7, 175.6, 182.2, 48.7]
        },
        {
            name:'中原市占率',
            type:'line',
            yAxisIndex: 1,
            data:[4.5, 6.3, 10.2, 20.3, 23.4, 23.0]
        }
    ]
        });
    },
    drawLine5(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart4'))
        // 绘制图表
        myChart.setOption({
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['所有楼盘中原成交量','中原市占率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['4月','5月','6月','7月','8月','9月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '成交量(套)',
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '市占率',
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'所有楼盘中原成交量',
            type:'bar',
            data:[26.4, 28.7, 70.7, 175.6, 182.2, 48.7]
        },
        {
            name:'中原市占率',
            type:'line',
            yAxisIndex: 1,
            data:[4.5, 6.3, 10.2, 20.3, 23.4, 23.0]
        }
    ]
        });
    },
    drawLine6(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart5'))
        // 绘制图表
        myChart.setOption({
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['所有楼盘中原成交量','中原市占率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['4月','5月','6月','7月','8月','9月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '成交量(套)',
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '市占率',
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'所有楼盘中原成交量',
            type:'bar',
            data:[26.4, 28.7, 70.7, 175.6, 182.2, 48.7]
        },
        {
            name:'中原市占率',
            type:'line',
            yAxisIndex: 1,
            data:[4.5, 6.3, 10.2, 20.3, 23.4, 23.0]
        }
    ]
        });
    },
    drawLine7(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart6'))
        // 绘制图表
        myChart.setOption({
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['所有楼盘中原成交量','中原市占率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['4月','5月','6月','7月','8月','9月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '成交量(套)',
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '市占率',
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'所有楼盘中原成交量',
            type:'bar',
            data:[26.4, 28.7, 70.7, 175.6, 182.2, 48.7]
        },
        {
            name:'中原市占率',
            type:'line',
            yAxisIndex: 1,
            data:[4.5, 6.3, 10.2, 20.3, 23.4, 23.0]
        }
    ]
        });
    },
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
    line-height:2.5;
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
    font-size:8px;
    text-align:center;
    line-height: 0px;
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
    font-size:8px;
    text-align:center;
}
.el-table .cell{
    line-height: 0px;
}
.el-table td, .el-table th{
    text-align: center;
}

</style>