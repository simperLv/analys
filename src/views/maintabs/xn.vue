<template>
  <div class="xn">
     <div class="instract font8">
说明:本分析报告统计数据均为二手住宅成交数据,主打楼盘均指中原的主打楼盘,主城数据来源于锦江区,青羊区,武侯区,成华区,金牛区,高新,天府新区(华阳)。
    </div>
    <div class="maintitle font15">
西南区二手行情(主城)
    </div>
    <div class="content1">
        <el-row>
            <el-col :span="14">
                <div class="chart font8 padding20">
                   <div id="myChart13" :style="{width: '790px', height: '307px'}"></div>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-purple description font8">                    
                {{dnData.month}}月西南区主城所有楼盘市场成交住宅6000套，环比下降15%；中原主打楼盘市场成交1000套，环比下降15%。
                </div>
            </el-col>
        </el-row>
    </div>
     <div class="content2">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple paiban4 font8">
                近3月西南区所有楼盘成交
                </div>
                <el-row>
                <div class="tabledate paiban1 font8">
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
                <div class="grid-content bg-purple paiban4 font8">
                近3月西南区主打楼盘成交
                </div>
                <el-row>
                <div class="tabledate paiban2 font8">
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
     <div class="subtitle font10">
9月西南区楼盘成交及门店分布(主城)
    </div>
 <div class="anniu font8 textleft padding3">
<el-row>
    <el-button size="mini" round @click='Topall()'>有成交楼盘</el-button>
    <el-button size="mini" round @click='Toptree()'>所有楼盘TOP30</el-button>
    <el-button size="mini" round @click='Topone()'>主打楼盘TOP15</el-button>
</el-row>
    </div>
    <div class="ditu padding20">
        <div id="allmap" ref="allmap"></div>
   <router-view></router-view>
    </div>
     <div class="subtitle font10">
9月西南区所有楼盘成交TOP30(主城)
    </div>
     <div class="table1 paiban3 font8">
          <el-row>
                <div class="tabledate font8">
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
           <div class="subtitle font10">
9月西南区主打楼盘成交TOP15(主城)
    </div>
     <div class="table2 paiban3 font8">
          <el-row>
                <div class="tabledate2 paiban1 font8">
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
          <div class="subtitle font10">
9月西南区0成交主打楼盘(主城)
    </div>
     <div class="table3 paiban3 font8">
          <el-row>
                <div class="tabledate3 paiban1 font8">
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
import iconMage from '../../assets/marker.png'
export default {
  name: "db",
  data() {
    return {
      dnData: {
        month: "9",
        dncj: 6000, //总成交
        schb: "-15%", //环比
        dnzd: 1000, //主打成交
        zdhb: "-15%" //环比
      },
      tableData: [
        {
          expert: "全市",
          month1: "8451",
          month2: "8451",
          month3: "8451"
        },
        {
          expert: "中原",
          month1: "20",
          month2: "20",
          month3: "20"
        },
        {
          expert: "市占",
          month1: "0.23%",
          month2: "0.23%",
          month3: "0.23%"
        },
        {
          expert: "链家",
          month1: "3000",
          month2: "3000",
          month3: "3000"
        },
        {
          expert: "市占",
          month1: "35.5%",
          month2: "35.5%",
          month3: "35.5"
        }
      ],
      tableData1: [
        {
          rank: "1",
          name: "神仙树大院",
          isZD: "是",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10
        },
        {
          rank: "2",
          name: "中铁西子香荷",
          isZD: "",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10
        },
        {
          rank: "3",
          name: "神仙树大院",
          isZD: "是",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10
        },
        {
          rank: "4",
          name: "神仙树大院",
          isZD: "是",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10
        },
        {
          rank: "2",
          name: "中铁西子香荷",
          isZD: "",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10
        },
        {
          rank: "2",
          name: "中铁西子香荷",
          isZD: "",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10
        },
        {
          rank: "2",
          name: "中铁西子香荷",
          isZD: "",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10
        }
      ],
      tableData2: [
        {
          rank: "1",
          name: "神仙树大院",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10,
          store: "神仙树大院分行"
        },
        {
          rank: "1",
          name: "神仙树大院",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10,
          store: "神仙树大院分行"
        },
        {
          rank: "1",
          name: "神仙树大院",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10,
          store: "神仙树大院分行"
        },
        {
          rank: "1",
          name: "神仙树大院",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10,
          store: "神仙树大院分行"
        },
        {
          rank: "1",
          name: "神仙树大院",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10,
          store: "神仙树大院分行"
        },
        {
          rank: "1",
          name: "神仙树大院",
          market: "57",
          lianjia: 17,
          zhongyuan: 12,
          youxiao: 47,
          weituo: 5,
          daikan: 21,
          fangpan: 5,
          guapai: 10,
          store: "神仙树大院分行"
        }
      ],
      tableData3: [
        {
          name: "置信丽都花园城巴厘岛B区",
          youxiao: 4,
          weituo: "",
          daikan: 30,
          shikan: 1,
          fangpan: "",
          guapai: 10,
          store: "大悦城分行"
        },
        {
          name: "保利锦湖林语二期",
          youxiao: 1,
          weituo: "",
          daikan: "",
          shikan: "",
          fangpan: "",
          guapai: "",
          store: "盛和二路分行"
        }
      ],
      //地图相关变量
      Themap:'',
      bounds:'',
      sw:'',
      ne:'',
      lngSpan:'',
      latSpan:'',
      marker1:'',//红色标注
      item:[],
      item1:[
          { lng: 104.10590561688, lat: 30.593994507661, title: "锦馨家园" },
          { lng: 104.147519, lat: 30.604259, title: "鑫苑名家一期" },
          { lng: 104.076296, lat: 30.561445, title: "世纪城天鹅湖花园" },
          {
            lng: 104.151423,
            lat: 30.599538,
            title: "锦江城市花园三期(公园天下)"
          },
          { lng: 104.101614, lat: 30.556128, title: "香榭国际" },
          {
            lng: 104.047761,
            lat: 30.550517,
            title: "保利心语上府(保利心语花园二期)"
          },
          { lng: 104.043444, lat: 30.565286, title: "建发天府鹭洲" },
          { lng: 104.101614, lat: 30.556125, title: "香榭国际(欧拉公寓)" },
          { lng: 104.104464, lat: 30.628147, title: "万达锦华城" },
          { lng: 104.081916, lat: 30.514669, title: "名著司南" },
          { lng: 104.059419, lat: 30.555931, title: "复地雍湖湾" },
          { lng: 104.101345, lat: 30.61789, title: "翡翠城四期" },
          { lng: 104.138753, lat: 30.604846, title: "卓锦城六期(紫红双郡)" },
          { lng: 104.077274, lat: 30.518854, title: "城南晶座" },
          { lng: 104.139699, lat: 30.60461, title: "卓锦城五期(繁花郡)" },
          { lng: 104.068027, lat: 30.589737, title: "中航国际广场" },
          { lng: 104.054462, lat: 30.561824, title: "中海兰庭" },
          { lng: 104.152547, lat: 30.601192, title: "锦江城市花园二期" },
          { lng: 104.054145, lat: 30.55775, title: "华润凤凰城一期" },
          { lng: 104.13277, lat: 30.608772, title: "蓝谷地天域(五期)" },
          { lng: 104.090217, lat: 30.605078, title: "蓝光凯丽香江" },
          { lng: 104.130247, lat: 30.605761, title: "上东锦城" },
          { lng: 104.042346, lat: 30.563655, title: "双祥社区" },
          { lng: 104.049967, lat: 30.560067, title: "保利百合花园" },
          { lng: 104.051229, lat: 30.558644, title: "都城雅颂居" },
          { lng: 104.07110391396, lat: 30.553941181417, title: "花样年香年广场" }
        ],

        bounds2:'',
      sw2:'',
      ne2:'',
      lngSpan2:'',
      latSpan2:'',
      items:[
          { lng: 104.06803, lat: 30.54667, title: "东南A区新盘分销中心一部" },
          { lng: 104.146239, lat: 30.595438, title: "华熙五二八分行" },
          { lng: 104.157493, lat: 30.598373, title: "东御佲家分行" },
          { lng: 104.145195, lat: 30.609304, title: "锦江逸家分行" },
          { lng: 104.101654, lat: 30.642172, title: "朝阳名宅分行" },
          { lng: 104.101791, lat: 30.646738, title: "世纪朝阳分行" },
          { lng: 104.089135, lat: 30.552667, title: "红树湾分行" },
          { lng: 104.099098, lat: 30.555908, title: "御廷上郡分行" },
          { lng: 104.061203, lat: 30.600889, title: "南城都汇分行" },
          { lng: 104.06165, lat: 30.599018, title: "成汉中路一分行" },
          { lng: 104.086008, lat: 30.529353, title: "英伦联邦分行" },
          { lng: 104.101149, lat: 30.558453, title: "香榭国际分行" },
          { lng: 104.079518, lat: 30.599164, title: "天府长城分行" },
          { lng: 104.078415, lat: 30.631352, title: "棕南分行" },
          { lng: 104.085001, lat: 30.574197, title: "东南C区新盘分销中心二部" },
          { lng: 104.063391, lat: 30.595295, title: "府城大道分行" },
          { lng: 104.059555, lat: 30.562213, title: "汇锦城分行" },
          { lng: 104.060252, lat: 30.556673, title: "雍湖湾分行" }
        ],
        item11:[
          { lng: 104.10590561688, lat: 30.593994507661, title: "锦馨家园" },
          { lng: 104.147519, lat: 30.604259, title: "鑫苑名家一期" },
          { lng: 104.076296, lat: 30.561445, title: "世纪城天鹅湖花园" },
          {
            lng: 104.151423,
            lat: 30.599538,
            title: "锦江城市花园三期(公园天下)"
          },
          { lng: 104.101614, lat: 30.556128, title: "香榭国际" },
          {
            lng: 104.047761,
            lat: 30.550517,
            title: "保利心语上府(保利心语花园二期)"
          },
          { lng: 104.043444, lat: 30.565286, title: "建发天府鹭洲" },
          { lng: 104.101614, lat: 30.556125, title: "香榭国际(欧拉公寓)" },
          { lng: 104.104464, lat: 30.628147, title: "万达锦华城" },
          { lng: 104.081916, lat: 30.514669, title: "名著司南" },
          { lng: 104.059419, lat: 30.555931, title: "复地雍湖湾" }

        ],
        item12:[
          { lng: 104.10590561688, lat: 30.593994507661, title: "锦馨家园" },
          { lng: 104.147519, lat: 30.604259, title: "鑫苑名家一期" },
          { lng: 104.076296, lat: 30.561445, title: "世纪城天鹅湖花园" },
          {
            lng: 104.151423,
            lat: 30.599538,
            title: "锦江城市花园三期(公园天下)"
          },
          { lng: 104.101614, lat: 30.556128, title: "香榭国际" },
          {
            lng: 104.047761,
            lat: 30.550517,
            title: "保利心语上府(保利心语花园二期)"
          }

        ],
    };
  },
  methods: {
    drawLine13(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart13'))
        // 绘制图表
        myChart.setOption({
            title : {
                 text: '西南区所有楼盘及主打楼盘成交走势',
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
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(103.995327,30.675225), 12); // 初始化地图,设置中心点坐标和地图级别
      map.addControl(
        new BMap.MapTypeControl({
          //添加地图类型控件
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.enableScrollWheelZoom();
      this.item = this.item1;
      // 编写自定义函数,创建标注
      return map;
      
    },
     addMarker(point, title,map) {
       this.marker1 = new BMap.Marker(point);
        map.addOverlay(this.marker1);
        var label = new BMap.Label(title, { offset: new BMap.Size(20, -10) });
         this.marker1.setLabel(label);
        label.setStyle({
          borderColor: "red" //边
        });
      },
    // 编写自定义函数,创建标注
      addMarker2(point1, title,map) {
        var myIcon = new BMap.Icon(iconMage,new BMap.Size(15,15))
        var marker = new BMap.Marker(point1,{icon:myIcon});
        map.addOverlay(marker);
        var label = new BMap.Label(title, { offset: new BMap.Size(20, -10) });
        marker.setLabel(label);
        label.setStyle({
          //给label设置样式，任意的CSS都是可以的
          borderColor: "blue" //边
        });
      },
      addMarked(map){
          // 随机向地图添加25个标注
        this.bounds = map.getBounds();
        this.sw = this.bounds.getSouthWest();
        this.ne = this.bounds.getNorthEast();
        this.lngSpan = Math.abs(this.sw.lng - this.ne.lng);
        this.latSpan = Math.abs(this.ne.lat - this.sw.lat);
        for (var i = 0; i < this.item.length; i++) {
          var point = new BMap.Point(this.item[i].lng, this.item[i].lat);
          this.addMarker(point, this.item[i].title,map);
        }
        debugger
         this.bounds2 = map.getBounds();
        this.sw = this.bounds.getSouthWest();
        this.ne = this.bounds.getNorthEast();
        this.lngSpan = Math.abs(this.sw.lng - this.ne.lng);
        this.latSpan = Math.abs(this.ne.lat - this.sw.lat);
        for (var i = 0; i < this.items.length; i++) {
          var point = new BMap.Point(this.items[i].lng, this.items[i].lat);
          this.addMarker2(point, this.items[i].title,map);
        }
      },
      Topall(){
        this.Themap.clearOverlays();
        //调用后台接口，获取前30的数据


        this.item=this.item1;

        this.addMarked(this.Themap);
       
      },
      Toptree(){
        this.Themap.clearOverlays();
        //调用后台接口，获取前30的数据


        this.item = this.item11;

        this.addMarked(this.Themap);
       
      },
       Topone(){
        this.Themap.clearOverlays();
        //调用后台接口，获取前30的数据


        this.item = this.item12;

        this.addMarked(this.Themap);
       
      }
  },
  mounted() {
    this.Themap = this.map();
    this.addMarked(this.Themap);
    this.drawLine13();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.xn {
  background-color: rgba(153, 204, 255, 0.1);
}
.instract {
  background-color: rgba(242, 242, 242, 1);
  line-height: 1.5;
  text-align: left;
  padding-left: 20px;
  color: rgb(204, 0, 0);
  /* font-size: 10px; */
}
.maintitle {
  font-weight: 800;
  text-align: center;
  padding: 10px;
}
.subtitle {
  font-weight: 800;
  text-align: center;
  padding: 10px;
}
.description2 {
  text-align: left;
  text-indent: 2em;
  padding: 20px;
}
.description {
  text-align: left;
  text-indent: 2em;
  padding: 20px 10px 10px 10px;
}
.paiban1 {
  padding: 0px 10px 10px 0px;
}
.paiban2 {
  padding: 0px 0px 10px 10px;
}
.paiban3 {
  padding: 0px 0px 20px 0px;
}
.paiban4 {
  padding: 10px 0px 0px 0px;
}
.textleft {
  float: left;
}
#allmap {
  width: 100%;
  height: 40rem;
}
@media screen and (max-width: 600px) {
  #allmap {
    width: 100%;
    height: 20rem;
  }
}
.point1 {
  background-color: blue;
}
</style>