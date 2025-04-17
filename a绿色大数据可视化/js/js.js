
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6();
function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    // 设置固定的横轴（X轴）和竖轴（Y轴）数据
    const date = ['广东', '湖北', '河南', '山东', '福建', '辽宁', '江西', '四川', '内蒙古', '新疆'];
    const data = [44.7342, 45.4685, 46.0619, 46.5062, 46.5686, 47.4788, 48.5823, 59.2108, 100.8349, 157.3840];

    // option
    option = {
        grid: {
            left: '3%',    // 左边距
            right: '10%',   // 右边距
            bottom: '20%',  // 底边距
            top: '2%',
            containLabel: true  // 是否包含坐标轴的标签
        },
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
            return [pt[0], '10%'];
            }
    },

    toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
        axisLabel: {
            fontFamily: "华文中宋",
            fontWeight: "bold",
            interval: 0, // 确保每个标签都显示
            rotate: 0, // 横向显示（可根据需要调整角度，例如 45）
            fontSize: 14 // 调整字体大小以适应显示
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        min: 44, 
        max: 160,
        interval: 10,
        axisLabel: {
          show: true,
          formatter: '{value}w公顷',
          fontFamily: "华文中宋",
          fontWeight: "bold",
        },
        splitLine: {
          show: true // 显示网格线
        }
      },
    dataZoom: [
        {
        type: 'inside',
        start: 0,
        end: 100
        },
        {
        start: 0,
        end: 100
        },
        {
        fontFamily: "华文中宋",
        fontWeight: "bold",
        fontSize: 14,
        }
    ],
    series: [
        {
        name: '数据',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
            color: 'rgb(166, 223, 184)'
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: 'rgb(196, 235, 142)'
            },
            {
                offset: 1,
                color: 'rgb(25, 137, 68)'
            }
            ])
        },
        data: data
        }
    ]
    };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
    grid: {
        left: '0%',
		top:'20%',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['河南', '山东', '湖北', '四川', '重庆', '新疆', '内蒙古', '江西', '广东', '浙江'],
        axisLine: {
            show: true,
         lineStyle: {
            color: "rgba(0, 0, 0, 0.1)",
            width: 4,
            type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               rotate:45,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgb(0, 0, 0)",
                    fontSize: '13',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           formatter: '{value} 公顷', // Y 轴单位为“%”
			show:true,
			 textStyle: {
                color: "rgb(0, 0, 0)",
                fontSize: '13',
                fontFamily: '华文中宋',
                fontWeight: 'bold'
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(0, 0, 0, 0.1)",
                width: 4,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(0, 0, 0, 0.1)",
                width: 2
            }
        }
    }],
    series: [
		{
       
        type: 'bar',
        data: [95571, 106144, 109419, 118810, 122979, 130964, 174065, 266611, 279547, 372999],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'rgb(75, 154, 63)',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['河南', '四川', '贵州', '河北', '甘肃', '福建', '内蒙古', '湖北', '山西', '西藏'],
        axisLine: {
            show: true,
         lineStyle: {
            color: "rgba(0, 0, 0, 0.1)",
            width: 4,
            type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "rgb(0, 0, 0)",
                    fontSize: '13',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           formatter: '{value} 公顷', 
			show:true,
			 textStyle: {
                color: "rgb(0, 0, 0)",
                fontSize: '15',
                fontFamily: '华文中宋',
                fontWeight: 'bold',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(0, 0, 0, 0.1)",
                width: 4,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(0, 0, 0, 0.1)",
                width: 2
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [176322, 184517, 186903, 193707, 252005, 257812, 261710, 300184, 362017, 381952],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'rgb(161, 212, 137)',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_4() {
        var myChart = echarts.init(document.getElementById('echart4'));
    
        option = {
            grid: {
                left: '3%',
                right: '10%',
                bottom: '0%',
                top: '5%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['2021年', '2022年'],
                right: '0%',  // 将图例移到右边
                top: '20%'     // 可选：调整垂直位置
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                interval: 0,
                data: ['木材', '竹材', '锯材', '人造板', '木竹地板'],
                axisLabel: {
                    fontFamily: "华文中宋",
                    fontWeight: "bold",
                    interval: 0,
                    rotate: 0,
                    fontSize: 14
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    fontFamily: "华文中宋",
                    fontWeight: "bold",
                    fontSize: 14
                }
            }],
            series: [{
                name: '2021年',
                type: 'bar',
                data: [11589, 325568, 7952, 33673, 82347],
                itemStyle: {  // 添加柱体颜色配置
                    color: 'rgb(56, 100, 66)'  // 2021年的柱体颜色（蓝色）
                },
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            }, {
                name: '2022年',
                type: 'bar',
                data: [12193, 421840, 5699, 30110, 65058],
                itemStyle: {  // 添加柱体颜色配置
                    color: 'rgb(81, 134, 65)'  // 2022年的柱体颜色（绿色）
                },
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            }]
        };
    
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
option = {
	color: ['rgb(63, 119, 17)','rgb(22, 57, 25)', 'rgb(125, 184, 118)', 'rgb(19, 155, 34)', 'rgb(53, 130, 51)','rgb(0,0,0)'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} %"
	},
        toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: ["抚育采伐", "补植抚育", "人工促进天然更新", "其他综合抚育"],
		textStyle: {
            color: 'rgb(0, 0, 0)',
            fontSize:'15',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
                }
	},
	
	series: [
		{
		name: '抚育采伐',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 21.72,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '补植抚育',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 6.62,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '人工促进天然更新',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 3.67,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '其他综合抚育',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 69.99,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
	    title: [{
        text: '全国林地结构',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			fontSize:'15',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br/>{b}: {d}%",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:["非木材地", "灌木林地", "其他", "竹林地"],
                textStyle: {
                    color: 'rgb(0, 0, 0)',
                    fontSize:'13',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'全国林地结构',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['rgb(12, 96, 25)', 'rgb(119, 243, 183)', 'rgb(122, 194, 100)', 'rgb(0, 0, 0)'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value: 69.4, name: '非木材地'},
                {value: 20.6, name: '灌木林地'},
                {value: 7.5, name: '其他'},
                {value: 2.5, name: '竹林地'}
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '全国单地结构',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			fontSize:'15',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:["天然牧草地", "其他草地", "人工牧草地"],
                textStyle: {
           color: 'rgb(0, 0, 0)',
			fontSize:'13',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'全国单地结构',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['rgb(23, 72, 14)','rgb(72, 188, 63)', 'rgb(0, 0, 0)'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value: 80.7, name: '天然牧草地'},
                {value: 19.1, name: '其他草地'},
                {value: 0.2, name: '人工牧草地'}
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '全国湿地结构',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			fontSize:'15',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'65%',
       itemWidth: 10,
        itemHeight: 10,
        data:["沿海滩涂","内陆滩涂","沼泽地","红树林地","沼泽草地","森林沼泽","灌丛沼泽"],
                textStyle: {
                    color: 'rgb(0, 0, 0)',
                    fontSize:'11',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'全国湿地结构',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['rgb(63, 119, 17)','rgb(22, 57, 25)', 'rgb(125, 184, 118)', 'rgb(36, 228, 71)', 'rgb(185, 243, 192)', 'rgb(53, 130, 51)','rgb(0,0,0)'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value: 6.4, name: '沿海滩涂'},
                {value: 25.5, name: '内陆滩涂'},
                {value: 8.2, name: '沼泽地'},
                {value: 0.1, name: '红树林地'},
                {value: 47.2, name: '沼泽草地'},
                {value: 9.4, name: '森林沼泽'},
                {value: 3.2, name: '灌丛沼泽'}
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









