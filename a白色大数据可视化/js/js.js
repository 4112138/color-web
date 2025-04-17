
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_3();
echarts_5();
echarts_6();
function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '0%',
        right: '2%',
        bottom: '0%',
        containLabel: true
      },
      legend: {
        textStyle: {
            fontFamily: "华文中宋",
            fontWeight: "bold",
            fontSize: '14',
          }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '1px',  // 适当增大，使得Y轴有更多空间
        right: '1px', // 适当增大，让X轴有更大的可视范围
        bottom: '1px',
        containLabel: true
    },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        
        axisLabel:{
            show: true,
            fontFamily: "华文中宋",
            fontWeight: "bold",
            fontSize: '12',
            interval: 0,
            rotate: 20
          },
      },
      yAxis: {
        type: 'category',
        data: ['2019', '2020', '2021', '2022', '2023'],
        axisLabel:{
            show: true,
            fontFamily: "华文中宋",
            fontWeight: "bold",
            fontSize: '12',
          },
      },
      series: [
        {
          name: '新立探矿权',
          type: 'bar',
          barWidth: 8, // 调整柱体宽度
          itemStyle: {
            color: 'rgb(43, 42, 42)',
            barBorderRadius: [10, 10, 10, 10] // 设置圆角
          },
          data: [502, 310, 467, 362, 459]
        },
        {
          name: '新立采矿权',
          type: 'bar',
          barWidth: 8, // 调整柱体宽度
          itemStyle: {
            color: 'rgb(129, 129, 129)',
            barBorderRadius: [10, 10, 10, 10] // 设置圆角
          },
          
          data: [1560, 1553, 1432, 1384, 1377]
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
            xAxis: {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                color: "rgb(0, 0, 0)",
                fontSize: '13',
                interval: 0,
                fontFamily: '华文中宋',
                fontWeight: 'bold'
              },
              data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
            },
            toolbox: {
              feature: {
              saveAsImage: {}
              }
          },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow'}
              },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '5%',
              containLabel: true
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                color: "rgb(0, 0, 0)",
                fontSize: '13',
                fontFamily: '华文中宋',
                fontWeight: 'bold'
              }
            },
            series: [
              {
                data: [36.22,36.22,34.60,35.89,37.89,39.73,40.73,42.71,46.60,48.30],
                color: 'rgb(71, 70, 70)',
                type: 'line',
                areaStyle: {}
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
        var myChart = echarts.init(document.getElementById('echart5'));
    
        option = {
            grid: {
                bottom: 20,
                left: 60
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
                toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
            legend: {
                data: ['资金投入(亿元)', '钻探工作量(万米)'],
                left: 10,
                textStyle: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 11,
                    color: '#000000'
                }
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: { onZero: false },
                data: ['煤炭', '铁矿', '铜矿', '铅锌矿', '金矿', '银矿', '磷矿'],
                // 添加X轴字体样式
                axisLabel: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 11,
                    color: '#000000'
                }
            }],
            yAxis: [{
                name: '资金投入(亿元)',
                nameTextStyle: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 11,
                    color: '#000000'
                },
                type: 'value',
                // 添加Y轴1字体样式
                axisLabel: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 11,
                    color: '#000000'
                }
            }, {
                name: '钻探工作量(万米)',
                nameLocation: 'start',
                nameTextStyle: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 11,
                    color: '#000000'
                },
                alignTicks: true,
                type: 'value',
                inverse: true,
                // 添加Y轴2字体样式
                axisLabel: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 11,
                    color: '#000000'
                }
            }],
            series: [{
                textStyle: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 11,
                    color: '#000000'
                },
                name: '资金投入(亿元)',
                type: 'line',
                areaStyle: {
                    // 设置区域填充颜色（渐变）
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(66, 58, 58, 0.8)' }, // 浅灰色
                        { offset: 1, color: 'rgba(51, 46, 47, 0.1)' }  // 更透明
                    ])
                },
                lineStyle: {
                    width: 2,  // 加粗线条
                    color: 'rgb(0,0,0)'  // 折线颜色（黑色）
                },
                emphasis: {
                    focus: 'series'
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        opacity: 0.3
                    }
                },
                data: [19.72, 5.52, 8.71, 8.63, 14.04, 1.61, 1.99]
            }, {
                name: '钻探工作量(万米)',
                type: 'line',
                yAxisIndex: 1,
                areaStyle: {
                    // 设置区域填充颜色（渐变）
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(55, 59, 61, 0.8)' }, // 浅蓝色
                        { offset: 1, color: 'rgba(54, 162, 235, 0.1)' }  // 更透明
                        
                    ])
                },
                lineStyle: {
                    width: 2,  // 加粗线条
                    color: 'rgb(0, 0, 0)'  // 折线颜色（灰色）
                },
                emphasis: {
                    focus: 'series'
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        opacity: 0.3
                    }
                },
                data: [179, 59, 49, 69, 98, 16, 15]
            }]
        };
    
        myChart.setOption(option);
        window.addEventListener("resize", function() {
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
        data:['2022年','2023年'],
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
        bottom: '5',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel:  {
            interval: 0,
                textStyle: {
                    color: "rgb(0, 0, 0)",
					fontSize:14,
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
                },
                interval: 0,  // 显示所有标签
                rotate: 45,   // 倾斜标签防止重叠（可选）
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(0, 0, 0, 0.2)',
                width: 4,
                type: "solid"
			}

        },

   data: ["煤炭","石油", "天然气","铁矿矿石", "铝土矿石","银矿石", "硫铁矿矿石","磷矿矿石", "盐矿"]

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
					fontSize:12,
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
        name: '2022年',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgb(0, 0, 0)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(57, 58, 58, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 0, 0, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: 'rgb(0,0,0)',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [2707.12,38.06,47.01,162.46,6.7553,7.0344,11.4786,36.9,142.9]

    }, 
{
        name: '2023年',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
			
            normal: {
				color: 'rgba(189, 187, 181, 0.1)',
                 width: 2,
                 type: "solid"
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(111, 113, 114, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: 'rgb(168, 167, 161)',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [2185.7,38.51,48.26,169.17,7.0752,6.6866,10.4666,34.41,155.35]
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
    
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c}%"
            },
            toolbox: {
                feature: {saveAsImage: {}}
            },
            legend: {
                top: '5%',
                left: 'center',
                textStyle: {
                    color: 'rgb(0, 0, 0)',
                    fontSize:'13',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '60%'],
                    color: ['rgb(41, 41, 41)', 'rgb(18, 38, 94)', 'rgb(7, 37, 23)', 'rgb(90, 90, 90)'],
                    avoidLabelOverlap: false,
                    padAngle: 5,
                    itemStyle: {
                        borderRadius: 10
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 69.1, name: '原煤' },
                        { value: 6.2, name: '原油' },
                        { value: 6.2, name: '天然气' },
                        { value: 18.5, name: '一次电力及其他' }
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
function echarts_3() {
        // 确保 DOM 元素存在 
        var myChart = echarts.init(document.getElementById('echart3'));
        option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {color: '#999'}
              }
            },
            grid: {
              top: '20%',
              left: '10%',
              right: '5%',
              bottom: '10%',
            },
            toolbox: {
              feature: {
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
              }
            },
            legend: {
              left: 10,
              data: ['中央财政', '地方财政', '社会资金','地质勘查投入总额'],
              textStyle: {
                fontFamily: '华文中宋',
                fontWeight: 'bold',
                fontSize: 12,
                color: '#000000'
            }
            },
            xAxis: [
              {
                type: 'category',
                data: ['2019', '2020', '2021', '2022', '2023'],
                axisPointer: {
                  type: 'shadow'
                },
                axisLabel: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 12,
                    color: '#000000'
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '亿元',
                min: 0,
                max: 1200,
                interval: 200,
                axisLabel: {
                  formatter: '{value}'
                },
                axisLabel: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 12,
                    color: '#000000'
                }
              },
            ],
            series: [
              {
                name: '中央财政',
                type: 'bar',
                color: 'rgb(15, 53, 8)',
                tooltip: {
                  valueFormatter: function (value) {
                    return value ;
                  }
                },
                data: [
                  83.6, 64.4, 50, 46.9, 52.1
                ]
              },
              {
                name: '地方财政',
                type: 'bar',
                color: 'rgb(21, 40, 68)',
                tooltip: {
                  valueFormatter: function (value) {
                    return value;
                  }
                },
                data: [
                  53.1, 63.9, 76.4, 84.4, 85
                ]
              },
              {
                name: '社会资金',
                type: 'bar',
                color: 'rgb(51, 51, 51)',
                tooltip: {
                  valueFormatter: function (value) {
                    return value;
                  }
                },
                data: [
                  857.5, 743.5, 846.5, 879, 967.9
                ]
              },
              {
                name: '地质勘探投入总额',
                type: 'line',
                color: 'rgb(0, 0, 0)',
                tooltip: {
                  valueFormatter: function (value) {
                    return value;
                  }
                },
                data: [994.2, 871.9, 972.9, 1010.2, 1105]
              },
            ]
          };
        myChart.setOption(option);
          window.addEventListener("resize",function(){
              myChart.resize();
          });
      }

// function echarts_31() {
//         // 基于准备好的dom，初始化echarts实例
//         var myChart = echarts.init(document.getElementById('fb1')); 
// option = {
   
// 	    title: [{
//         text: '2023年矿产勘查资金投入',
//         left: 'center',
//         textStyle: {
//             color: 'rgb(0,0,0)',
// 			fontSize:'13',
//             fontFamily: '华文中宋',
//             fontWeight: 'bold'
//         }

//     }],
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a}<br/>{b}: {d}亿元",
// position:function(p){   //其中p为当前鼠标的位置
//             return [p[0] + 10, p[1] - 10];
//         }
//     },
//     legend: {
        
// top:'70%',
//        itemWidth: 10,
//         itemHeight: 10,
//         data:["煤炭", "金矿", "铜矿", "铅锌矿","铁矿","铝土矿","磷矿"],
//                 textStyle: {
//                     color: 'rgb(0, 0, 0)',
//                     fontSize:'13',
//                     fontFamily: '华文中宋',
//                     fontWeight: 'bold'
//         }
//     },
//     series: [
//         {
//         	name:'2023年主要矿产勘查资金投入',
//             type:'pie',
// 			center: ['50%', '42%'],
//             radius: ['40%', '60%'],
//             color: ['RGB(0, 0, 0)', 'RGB(40, 40, 40)', 'RGB(70, 70, 70)', 'RGB(100, 100, 100)', 'RGB(130, 130, 130)','RGB(50, 60, 70)', 'RGB(70, 50, 50)'],
//             label: {show:false},
// 			labelLine: {show:false},
//             data:[
//                 {value: 19.72, name: '煤炭'},
//                 {value: 14.04, name: '金矿'},
//                 {value: 8.71, name: '铜矿'},
//                 {value: 8.63, name: '铅锌矿'},
//                 {value: 5.52, name: '铁矿'},
//                 {value: 2.7, name: '铝土矿'},
//                 {value: 1.99, name: '磷矿'},
//             ]
//         }
//     ]
// };
      
//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart.resize();
//         });
//     }
// function echarts_32() {
//         // 基于准备好的dom，初始化echarts实例
//         var myChart = echarts.init(document.getElementById('fb2'));
// option = {
   
// 	    title: [{
//         text: '2023年矿产钻探工作量',
//         left: 'center',
//         textStyle: {
//             color: 'rgb(0,0,0)',
// 			fontSize:'13',
//             fontFamily: '华文中宋',
//             fontWeight: 'bold'
//         }

//     }],
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {d}万米",
// position:function(p){   //其中p为当前鼠标的位置
//             return [p[0] + 10, p[1] - 10];
//         }
//     },
//     legend: {
        
//     top:'70%',
//        itemWidth: 10,
//         itemHeight: 10,
//         data:["煤炭", "钼矿", "铁矿", "金矿","铅锌矿","铝土矿","磷矿"],
//         textStyle: {
//                     color: 'rgb(0, 0, 0)',
//                     fontSize:'13',
//                     fontFamily: '华文中宋',
//                     fontWeight: 'bold'
//         }
//     },
//     series: [
//         {
//         	name:'2023年主要矿产勘探钻探工作量',
//             type:'pie',
// 			center: ['50%', '42%'],
//             radius: ['40%', '60%'],
//             color: ['RGB(0, 0, 0)', 'RGB(40, 40, 40)', 'RGB(70, 70, 70)', 'RGB(100, 100, 100)', 'RGB(130, 130, 130)','RGB(50, 60, 70)', 'RGB(70, 50, 50)'],
//             label: {show:false},
// 			labelLine: {show:false},
//             data:[
//                 {value: 179, name: '煤炭'},
//                 {value: 98, name: '钼矿'},
//                 {value: 69, name: '铁矿'},
//                 {value: 59, name: '金矿'},
//                 {value: 49, name: '铅锌矿'},
//                 {value: 27, name: '铝土矿'},
//                 {value: 24, name: '磷矿'},
//             ]
//         }
//     ]
// };
      
//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart.resize();
//         });
//     }
// function echarts_33() {
//         // 基于准备好的dom，初始化echarts实例
//         var myChart = echarts.init(document.getElementById('fb3'));
// option = {
// 	    title: [{
//         text: '2022地质勘探资金投入',
//         left: 'center',
//         textStyle: {
//             color: 'rgb(0,0,0)',
// 			fontSize:'13',
//             fontFamily: '华文中宋',
//             fontWeight: 'bold'
//         }

//     }],
//     tooltip: {
//         trigger: 'item',
//         formatter: "{a} <br/>{b}: {d}亿元",
// position:function(p){   //其中p为当前鼠标的位置
//             return [p[0] + 10, p[1] - 10];
//         }
//     },
//     legend: {
//     top:'70%',
//        itemWidth: 10,
//         itemHeight: 10,
//         data:["中央财政", "地方财政", "社会资金", "地质"],
//                 textStyle: {
//                     color: 'rgb(0, 0, 0)',
//                     fontSize:'13',
//                     fontFamily: '华文中宋',
//                     fontWeight: 'bold'
//         }
//     },
//     series: [
//         {
//         	name:'2022年地质勘探资金投入',
//             type:'pie',
// 			center: ['50%', '42%'],
//             radius: ['40%', '60%'],
//             color: ['RGB(0, 0, 0)',  'RGB(70, 70, 70)',  'RGB(130, 130, 130)', 'RGB(70, 50, 50)'],
//             label: {show:false},
// 			labelLine: {show:false},
//             data:[
//                 {value: 46.9, name: '中央财政'},
//                 {value: 84.4, name: '地方财政'},
//                 {value: 879.0, name: '社会资金'},
//                 {value: 1010.2, name: '地质'},

//             ]
//         }
//     ]
// };
      
//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart.resize();
//         });
//     }
				
	
})



	


		









