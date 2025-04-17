
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
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
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
                rotate: 45, // 旋转 45 度
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgb(0, 0, 0)",
                    fontSize: '15',
                    fontWeight: 'bold'
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} 亿次', // Y 轴单位为“亿次”
			show:true,
			 textStyle: {
 					color: "rgb(0, 0, 0)",
                    fontSize: '15',
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
        data: [4, 5, 7, 8, 9, 10, 11, 13, 14, 14.5, 1, 4, 8],
        barWidth:'40%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:"rgb(236, 124, 11)",
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
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['名人故居', '遗址旧址', '纪念场馆', '烈士陵园', '重大工程', '综合景区'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgb(0, 0, 0)",
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
                    fontSize: '18',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           formatter: '{value} %', // Y 轴单位为“%”
			show:true,
			 textStyle: {
 					color: "rgb(0, 0, 0)",
                    fontSize: '18',
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
        data: [57.92, 73.66, 79.56, 62.12, 25.14, 49.83],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'rgb(163, 22, 6)',
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
      		data: ['福建', '湖南', '江西', '陕西', '山东', '广东', '辽宁', '湖北'],
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
                    fontSize: '18',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgb(0, 0, 0)",
                    fontSize: '18',
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
        data: [100, 95.04, 52.41, 48.33, 48.05, 43.43, 41.94, 40.84],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'rgb(230, 197, 11)',
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
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: "rgba(0, 0, 0, 0.1)",
                width: 4,
                type: "solid"
            }
        }
    },
    toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
		    legend: {
    top:'0%',
        data:['2021年','2022年'],
                textStyle: {
           color: 'rgb(0, 0, 0)',
			fontSize:'18',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        }
    },
    grid: {
        left: '5',
		top: '30',
        right: '5',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgb(0, 0, 0)",
					fontSize:16,
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
                },
                interval: 0,
                rotate: 45,
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(0, 0, 0, 0.2)',
                width: 4,
                type: "solid"
			}

        },

        data: ["广东", "江苏", "浙江", "安徽", "山东", "四川", "河南", "湖北", "北京", "上海", "湖南", "内蒙古"]

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(0, 0, 0, 0.1)',
                width: 4,
                type: "solid"
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgb(0, 0, 0)",
					fontSize:16,
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(0, 0, 0, 0.1)',
                 width: 4,
                 type: "solid"
            }
        }
    }],
    series: [
		{
        name: '2021年',
        type: 'line',
         smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(0, 0, 0, 0.1)',
                 width: 2,
                 type: "solid"
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(218, 24, 24, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(101, 14, 14, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: 'rgb(158, 8, 8)',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [70.01, 82.36, 37.11, 31.75, 41.37, 43.27, 100, 32.13, 31.54, 41.65, 48.16, 13.28]

    }, 
{
        name: '2022年',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#FFC107',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 193, 7, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 235, 59, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: 'rgb(255, 209, 4)',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [100, 73.57, 60.86, 58.66, 66.16, 62.8, 81.36, 60.27, 50.46, 49.23, 70.84, 12.84]

    }, 
	
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
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
			show: false,
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
	color: ['#FA8072', '#FF7F50', '#FF0000', '#B22222', '#FF4500', '#FFD700'],
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
		
		data: ['家人或亲友结伴', '单位', '个人自助游', '旅行社组织', '党团活动', '学校组织', '其他'],
		textStyle: {
                    color: 'rgb(0, 0, 0)',
                    fontSize:'13',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
                }
	},
	
	series: [
		{
		name: '家人或亲友结伴',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 79.41,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '学校或单位组织',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 64.02,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '个人自助游',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 40.93,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '旅行社组织',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 26.99,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '党团活动',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['20%', '30%'],
		itemStyle: dataStyle,
		data: [{
			value: 24.49,
			name: '05'
		}, {
			value: 50,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
        {
		name: '其他',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 0.65,
			name: '06'
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
        text: '消费分布',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			fontSize:'20',
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
        data:['较高','高','中等','较低','低', '其他'],
                textStyle: {
            color: 'rgb(0, 0, 0)',
			fontSize:'12',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'消费分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#FA8072', '#FF7F50', '#FF0000', '#B22222', '#FF4500', '#FFD700'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:40.33, name:'较高'},
                {value:29.89, name:'高'},
                {value:17.69, name:'中等'},
                {value:9.10, name:'较低'},
                {value:3.00, name:'低'},
                {value:0.01, name:'其他'}
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
        text: '年龄分布',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			fontSize:'20',
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
        data:['60岁+','36-59岁','19-35岁','18岁-'],
                textStyle: {
           color: 'rgb(0, 0, 0)',
			fontSize:'12',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#FA8072', '#FF7F50', '#FF0000', '#B22222', '#FF4500', '#FFD700'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:1.10, name:'60岁+'},
                {value:20.89, name:'36-59岁'},
                {value:77.31, name:'19-35岁'},
                {value:0.7, name:'18岁-'}
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
        text: '满意程度',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			fontSize:'20',
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
        data:['非常满意','满意','一般','不满意','非常不满意'],
                textStyle: {
            color: 'rgb(0, 0, 0)',
			fontSize:'12',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'满意程度',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#FA8072', '#FF7F50', '#FF0000', '#B22222', '#FF4500', '#FFD700'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:31.73, name:'非常满意'},
                {value:63.82, name:'满意'},
                {value:3.90, name:'一般'},
                {value:0.50, name:'不满意'},
                {value:0.05, name:'非常不满意'},
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