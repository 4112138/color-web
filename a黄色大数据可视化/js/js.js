
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
      		data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        axisLine: {
            show: true,
         lineStyle: {
            ccolor: "rgba(0, 0, 0, 0.1)",
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
                    fontSize: '13',
                    fontFamily: "华文中宋",
                    fontWeight: 'bold'
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} 千公顷', // Y 轴单位为“亿次”
			show:true,
			 textStyle: {
                color: "rgb(0, 0, 0)",
                fontSize: '13',
                fontFamily: "华文中宋",
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
        data: [60347.7, 61681.6, 62490.5, 63473.3, 64539.5, 65872.6, 67140.6, 67815.6, 68271.6, 68678.6, 69160.5, 69609.5],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'rgb(187, 184, 4)',
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
      legend: {
        textStyle: {
          fontFamily: '华文中宋',
          fontWeight: 'bold',
          fontSize: 10,
          color: '#000000'  // 可选：设置字体颜色
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
          axisLabel: {
            fontFamily: "华文中宋",
            fontWeight: "bold",
            fontSize: 14 // 调整字体大小以适应显示
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            fontFamily: "华文中宋",
            fontWeight: "bold",
            fontSize: 12 // 调整字体大小以适应显示
          }
        }
      ],
      series: [
        {
          name: '谷物',
          type: 'bar',
          color: "rgb(228, 124, 38)",
          emphasis: {
            focus: 'series'
          },
          data: [61520.5, 61003.6, 61369.7, 61674.3, 63275.7, 63324.3, 61430]
        },
        {
          name: '小麦',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series'
          },
          data: [11324.1, 11344, 11359.6, 11345.4, 11369.4, 11372.3, 11369]
        },
        {
          name: '玉米',
          type: 'bar',
          stack: 'Ad',
          color: "rgb(243, 232, 38)",
          emphasis: {
            focus: 'series'
          },
          data: [25907.1, 25717.4, 26077.9, 26066.5, 27255.1, 27720.3, 28884.2]
        },
        {
          name: '薯类',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [2798.6, 2869.4, 2882.7, 2967.4, 6043.5, 2977.4, 3013.9]
        },
        {
          name: '花生',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [1708.2, 1733.2, 1752, 1793.3, 1830.8, 1832.9, 1923.1]
        },
        {
          name: '油菜籽',
          type: 'bar',
          data: [1327.4, 1328.1, 1348.5, 1404.9, 1417.4, 1551.1, 1631.7],
          emphasis: {
            focus: 'series'
          },
          markLine: {
            lineStyle: {
              type: 'dashed'
            },
            data: [[{ type: 'min' }, { type: 'max' }]]
          }
        },
        {
          name: '糖料',
          type: 'bar',
          barWidth: 5,
          stack: 'Search Engine',
          emphasis: {
            focus: 'series'
          },
          data: [11378.8, 11397.4, 12619.1, 12014, 11454.4, 11236.5, 11376.3]
        },
        {
          name: '甘蔗',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series'
          },
          data: [10440.4, 10809.7, 10938.8, 10812.1, 10666.4, 10338.1, 10456.6]
        },
        
        {
          name: '豆类',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series'
          },
          data: [1841.6, 1920.3, 2131.9, 2287.5, 1966.5, 2316.9, 2316.9]
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
                left: '3%',
                right: '4%',
                top: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
              type: 'category',
              axisLabel: {
                fontFamily: "华文中宋",
                fontWeight: "bold",
                interval: 0, // 确保每个标签都显示
                fontSize: 14 
              },
              boundaryGap: false,
      		  data: ['湖南', '湖北', '江苏',  '河北', '安徽', '内蒙古', '山东', '河南', '黑龙江', '新疆'],
            },
            yAxis: {
              type: 'value',
              min: 2000,  // 根据数据调整最小值
              max: 7000,
              axisLabel: {
                fontFamily: "华文中宋",
                fontWeight: "bold",
                interval: 0, // 确保每个标签都显示
                fontSize: 12 
            }
            },
            series: [
              {
                data: [2917.6, 3220.2, 3856.7, 4122, 4679.1, 4809, 5241.7, 5666.7, 6238.5, 6629.6],
                type: 'line',
                color: 'rgb(228, 225, 30)',
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
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart4'));

    option = {
      color: ['rgb(255, 160, 0)', 'rgb(255, 235, 59)', 'rgb(241, 97, 71)', 'rgb(255, 193, 7)', 'rgb(255, 245, 157)'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['粮食作物', '油料', '棉花', '麻料', '糖料'],
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
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLabel:{
            show: true,
            fontFamily: "华文中宋",
            fontWeight: "bold",
            fontSize: '12',
          },
          data: ['2000', '2010', '2015', '2020', '2022', '2023']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel:{
            show: true,
            fontFamily: "华文中宋",
            fontWeight: "bold",
            fontSize: '12',
          }
        }
      ],
      series: [
        {
          name: '粮食作物',
          type: 'line',
          stack: 'Total',
          color: 'rgb(255, 160, 0)',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 160, 0)'
              },
              {
                offset: 1,
                color: 'rgb(254, 241, 179)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [108463, 111695, 118963, 116768, 118332, 118969]
        },
        {
          name: '油料',
          type: 'line',
          stack: 'Total',
          color: 'rgb(255, 235, 59)',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 235, 59)'
              },
              {
                offset: 1,
                color: 'rgb(254, 241, 179)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [15400, 13695, 13314, 13129, 13141, 13922]
        },
        {
          name: '棉花',
          type: 'line',
          stack: 'Total',
          color: 'rgb(241, 97, 71)',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(241, 97, 71)'
              },
              {
                offset: 1,
                color: 'rgb(254, 241, 179)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [4041, 4366, 3775, 3169, 3000, 2788]
        },
        {
          name: '麻料',
          type: 'line',
          stack: 'Total',
          color: 'rgb(255, 193, 7)',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 193, 7)'
              },
              {
                offset: 1,
                color: 'rgb(254, 241, 179)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [262, 91, 54, 69, 58, 49]
        },
        {
          name: '糖料',
          type: 'line',
          color: 'rgb(245, 41, 18)',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(245, 41, 18)'
              },
              {
                offset: 1,
                color: 'rgb(254, 241, 179)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: [1514, 1809, 1573, 1568, 1453, 1415]
        }
      ]
    };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
  var myChart = echarts.init(document.getElementById('echart6'));
  setTimeout(function () {
    option = {
      textStyle: {
        fontFamily: "华文中宋",
        fontWeight: "bold",
        fontSize: '12',
      },
      toolbox: {
        feature: {
        saveAsImage: {}
        }
    },
      legend: {
      },
      grid: {
        left: '0%',
		    top: '10%',
        right: '0%',
        bottom: '0%',
       containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['product', '2018', '2019', '2020', '2021', '2022', '2023'],
          ['粮食', 469, 472, 474, 483, 486, 493],
          ['谷物', 435, 436, 437, 448, 448, 455],
          ['棉花', 4.4, 4.2, 4.2, 4.1, 4.2, 4],
          ['油料', 24.5, 24.8, 25.4, 25.6, 25.9, 27.4]
        ]
      },
      xAxis: { type: 'category'},
      yAxis: {gridIndex: 0},
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          lineStyle: {color: 'rgb(224, 221, 19)'}
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          lineStyle: {color: 'rgb(191, 146, 11)'}
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          lineStyle: {color: 'rgb(220, 32, 32)'}
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' },
          lineStyle: {color: 'rgb(159, 224, 79)'}
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          textStyle: {
            fontFamily: "华文中宋",
            fontWeight: "bold",
            fontSize: '14',
          },
          center: ['50%', '55%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
          },
          itemStyle: {
            color: function (params) {
              // 为饼状图每个扇区指定颜色，与折线图对应
              var colorList = ['rgb(224, 221, 19)', 'rgb(191, 146, 11)', 'rgb(220, 32, 32)', 'rgb(159, 224, 79)'];
              return colorList[params.dataIndex];
            }
          }
        }
      ]
    };
    myChart.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
        myChart.setOption({
          series: {
            id: 'pie',
            label: {
              formatter: '{b}: {@[' + dimension + ']} ({d}%)'
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
    myChart.setOption(option);
  });
  
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
	    title: [{
        text: '人均农作品产量比例',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			      fontSize:'15',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '2%',
        },

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
        data:["粮食", "谷物", "棉花", "油料"],
                textStyle: {
                    color: 'rgb(0, 0, 0)',
                    fontSize:'15',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'人均主要农作品产量（公斤）',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['rgb(255, 235, 59)', 'rgb(204, 172, 0)', 'rgb(255, 193, 7)', 'rgb(255, 160, 0)', 'rgb(255, 245, 157)'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value: 0.506, name: '粮食'},
                {value: 0.468, name: '谷物'},
                {value: 0.004, name: '棉花'},
                {value: 0.028, name: '油料'},
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
        text: '主要农作品产量比例',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			fontSize:'15',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '2%',
        },

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
        data:["粮食", "薯类", "油料", "麻类", "糖料"],
                textStyle: {
                    color: 'rgb(0, 0, 0)',
                    fontSize:'15',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'主要农作品产量比例',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['rgb(204, 172, 0)', 'rgb(255, 235, 59)', 'rgb(255, 160, 0)', 'rgb(255, 193, 7)', 'rgb(255, 245, 157)'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {"value": 79.2, "name": "粮食"},
                {"value": 3.4, "name": "薯类"},
                {"value": 4.4, "name": "油料"},
                {"value": 0.0, "name": "麻类"},
                {"value": 13.0, "name": "糖料"}
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
        text: '主要农作品消耗量比例',
        left: 'center',
        textStyle: {
            color: 'rgb(0,0,0)',
			      fontSize:'15',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '2%',
        },
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
        data:["粮食","谷物","棉花","油料"],
                textStyle: {
                    color: 'rgb(0, 0, 0)',
                    fontSize:'15',
                    fontFamily: '华文中宋',
                    fontWeight: 'bold'
        }
    },
    series: [
        {
        	name:'主要农作品消耗量比例',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['rgb(204, 172, 0)', 'rgb(255, 235, 59)', 'rgb(255, 160, 0)', 'rgb(255, 193, 7)', 'rgb(255, 245, 157)'],
            label: {show:false},
			labelLine: {show:false},
            data:[
                {"value": 40.2, "name": "粮食"},
                {"value": 37.1, "name": "谷物"},
                {"value": 0.3, "name": "棉花"},
                {"value": 22.3, "name": "油料"}
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



		
		
		


		









