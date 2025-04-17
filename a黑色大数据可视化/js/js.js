
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
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
          axisLine: {
            show: true,
            lineStyle: {
                ccolor: "rgba(0, 0, 0, 0.1)",
                width: 4,
                type: "solid"
                },
          },
          axisTick: {show: false,},
          axisLabel:  {
            interval: 0,
            rotate: 45, // 旋转 45 度
            show: true,
            splitNumber: 15,
            textStyle: {
              color: "rgb(0, 0, 0)",
              fontSize: '15',
              fontWeight: 'bold',
              fontFamily: "华文中宋"
            },
          },
      }],
    yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '{value}', // Y 轴单位为“亿次”
			    show:true,
          textStyle: {
            color: "rgb(0, 0, 0)",
            fontSize: '15',
            fontWeight: 'bold',
            fontFamily: "华文中宋"
          },
        },
        axisTick: {show: false,},
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
        data: [30906.4,23256.7,29528.8,27957.9,27266.9,27962.6,32466.4,28761.2,27462.5,29041,31605.2,29638.2,27088.1,25782.5],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'rgb(36, 34, 34)',
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
            axisPointer: { type: 'shadow'}
        },
        dataset: {
          source: [
            ['data', 'year'],
            [30906.4, '2010'],
            [23256.7, '2011'],
            [29528.8, '2012'],
            [27957.9, '2013'],
            [27266.9, '2014'],
            [27962.6, '2015'],
            [32466.4, '2016'],
            [28761.2, '2017'],
            [27462.5, '2018'],
            [29041, '2019'],
            [31605.2, '2020'],
            [29638.2, '2021'],
            [27088.1, '2022'],
            [25782.5, '2023'],
          ]
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        grid: {
            left: '3%',    // 左边距
            right: '5%',   // 右边距
            bottom: '0%',  // 底边距
            top: '1%',
            containLabel: true  // 是否包含坐标轴的标签
        },
        xAxis: {
            name: 'data',
            axisLabel: {
                formatter: '{value}', // Y 轴单位为“亿次”
                show:true,
                 textStyle: {
                    color: "rgb(0, 0, 0)",
                    fontSize: '12',
                    interval: 0, // 确保每个标签都显示
                    fontWeight: 'bold',
                    fontFamily: "华文中宋"
                    },
            },
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                show: true,
                formatter: '{value}',
                interval: 0,  // 设置interval为0，确保每个刻度标签都显示
                textStyle: {
                    color: "rgb(0, 0, 0)",
                    fontSize: '12',
                    fontWeight: 'bold',
                    fontFamily: "华文中宋"
                },
            },
            axisTick: {
                show: true,  // 显示刻度线
                alignWithLabel: true  // 确保刻度线与标签对齐
            }
        },

        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'data',
              // Map the "product" column to Y axis
              y: 'year'
            },
            itemStyle: {
                // 添加渐变颜色
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,  // x1, y1, x2, y2 (0,0,1,0 表示从左到右渐变)
                    [{
                        offset: 0,    // 渐变起始位置
                        color: 'rgb(220, 220, 220)' 
                    }, {
                        offset: 1,    // 渐变结束位置
                        color: 'rgb(0, 0, 0)'
                    }]
                )
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
function echarts_3() {
      // 确保 DOM 元素存在 
      var myChart = echarts.init(document.getElementById('echart3'));
      var option = {
        textStyle: {
          fontFamily: '华文中宋',
          fontSize: 14,
          color: 'rgb(0,0,0)',
          fontWeight: 'bold'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: 'rgba(0,0,0,0.2)',
              width: 4,
              type: 'solid'}
          },
          formatter: function (params) {
            // 从第一个数据点获取年份
            var date = new Date(params[0].value[0]);
            var year = date.getFullYear();
            var result = year + '<br/>';
            // 遍历 params，使用 data[2] 获取类别名称
            params.forEach(function (item) {
              var categoryName = item.data[2]; // data[2] 是类别名称
              var value = item.data[1]; // data[1] 是数值
              result += item.marker + categoryName + ': ' + value + '<br/>';
            });
            return result;
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        legend: {
          data: ['地表水', '地下水', '地表水与地下水重复量']
        },
        singleAxis: {
          top: 50,
          bottom: 50,
          axisTick: {},
          axisLabel: {
            formatter: function (value) {
              return new Date(value).getFullYear(); // 只显示年份
            }
          },
          type: 'time',
          axisPointer: {
            animation: false,
            label: {
              show: false
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              opacity: 0.2
            }
          }
        },
        series: [
          {
            type: 'themeRiver',
            showLegendSymbol: false,
            emphasis: {
              itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
              }
            },
            // 为每种类别直接指定颜色
            color: ['rgb(55, 54, 54)', 'rgb(120, 118, 118)', 'rgb(255, 255, 255)'], // 地表水: 深灰, 地下水: 中灰, 重复量: 白色
            data: [
              ['2000', 26561.9, '地表水'], 
              ['2005', 26982.4, '地表水'], 
              ['2006', 24358.1, '地表水'],
              ['2007', 24242.5, '地表水'], 
              ['2008', 26377, '地表水'], 
              ['2009', 23125.2, '地表水'],
              ['2010', 29797.6, '地表水'], 
              ['2011', 22213.6, '地表水'], 
              ['2012', 28373.3, '地表水'],
              ['2013', 26839.5, '地表水'], 
              ['2014', 26263.9, '地表水'], 
              ['2015', 26900.8, '地表水'],
              ['2016', 31273.9, '地表水'], 
              ['2017', 27746.3, '地表水'], 
              ['2018', 26323.2, '地表水'],
              ['2019', 27993.3, '地表水'], 
              ['2020', 30407, '地表水'], 
              ['2021', 28310.5, '地表水'],
              ['2022', 25984.4, '地表水'], 
              ['2023', 24633.5, '地表水'],
              ['2000', 8501.9, '地下水'], 
              ['2005', 8091.1, '地下水'], 
              ['2006', 7642.9, '地下水'],
              ['2007', 7617.2, '地下水'], 
              ['2008', 8122, '地下水'], 
              ['2009', 7267, '地下水'],
              ['2010', 8417, '地下水'], 
              ['2011', 7214.5, '地下水'], 
              ['2012', 8296.4, '地下水'],
              ['2013', 8081.1, '地下水'], 
              ['2014', 7745, '地下水'], 
              ['2015', 7797, '地下水'],
              ['2016', 8854.8, '地下水'], 
              ['2017', 8309.6, '地下水'], 
              ['2018', 8246.5, '地下水'],
              ['2019', 8191.5, '地下水'], 
              ['2020', 8553.5, '地下水'], 
              ['2021', 8195.7, '地下水'],
              ['2022', 7924.4, '地下水'], 
              ['2023', 7807.1, '地下水'],
              ['2000', 7363, '地表水与地下水重复量'], 
              ['2005', 7020.4, '地表水与地下水重复量'], 
              ['2006', 6670.8, '地表水与地下水重复量'],
              ['2007', 6604.5, '地表水与地下水重复量'], 
              ['2008', 7064.7, '地表水与地下水重复量'], 
              ['2009', 6212.1, '地表水与地下水重复量'],
              ['2010', 7308.2, '地表水与地下水重复量'], 
              ['2011', 6171.4, '地表水与地下水重复量'], 
              ['2012', 7140.9, '地表水与地下水重复量'],
              ['2013', 6962.7, '地表水与地下水重复量'], 
              ['2014', 6742, '地表水与地下水重复量'], 
              ['2015', 6735.2, '地表水与地下水重复量'],
              ['2016', 7662.3, '地表水与地下水重复量'], 
              ['2017', 7294.7, '地表水与地下水重复量'], 
              ['2018', 7107.2, '地表水与地下水重复量'],
              ['2019', 7143.8, '地表水与地下水重复量'], 
              ['2020', 7355.3, '地表水与地下水重复量'], 
              ['2021', 6868, '地表水与地下水重复量'],
              ['2022', 6820.7, '地表水与地下水重复量'], 
              ['2023', 6658.1, '地表水与地下水重复量'],
            ]
          }
        ]
      };
    
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
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['长江', '黄河', '淮河'],
              textStyle: {
                fontFamily: '华文中宋',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#000000'  // 可选：设置字体颜色
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
                data: ['2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年'],
                axisLabel: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: '#000000'  
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                    fontFamily: '华文中宋',
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: '#000000'  
                }
              }
            ],
            series: [
              {
                name: '长江',
                type: 'line',
                color: 'rgb(0, 0, 0)',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [0.48,0.39,0.42,0.40,0.44,0.45,0.48,0.5,0.52,0.45]
              },
              {
                name: '黄河',
                type: 'line',
                stack: 'Total',
                color: 'rgb(113, 111, 111)',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [0.45,0.39,0.39,0.35,0.39,0.40,0.47,0.46,0.47,0.42]
              },
              {
                name: '淮河',
                type: 'line',
                stack: 'Total',
                color: 'rgb(255, 255, 255)',
                areaStyle: {},
                emphasis: {
                  focus: 'series'
                },
                data: [0.39,0.21,0.23,0.21,0.25,0.27,0.33,0.36,0.39,0.29]
              },
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
              data: ['流域面积(平方公里)', '河长(公里)'],
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
              data: ['长江', '黄河', '松花江', '辽河', '珠江', '海河', '淮河'],
              // 添加X轴字体样式
              axisLabel: {
                  fontFamily: '华文中宋',
                  fontWeight: 'bold',
                  fontSize: 11,
                  color: '#000000'
              }
          }],
          yAxis: [{
              name: '流域面积(平方公里)',
              type: 'value',
              nameTextStyle: {
                fontFamily: '华文中宋',
                fontWeight: 'bold',
                fontSize: 11,
                color: '#000000'
            },
              // 添加Y轴1字体样式
              axisLabel: {
                  fontFamily: '华文中宋',
                  fontWeight: 'bold',
                  fontSize: 11,
                  color: '#000000'
              }
          }, {
              name: '河长(公里)',
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
              name: '流域面积(平方公里)',
              type: 'line',
              areaStyle: {
                  // 设置区域填充颜色（渐变）
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: 'rgba(195, 106, 106, 0.8)' }, // 浅灰色
                      { offset: 1, color: 'rgba(255, 99, 132, 0.1)' }  // 更透明
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
              data: [1782715, 752773, 561222, 221097, 442527, 265511, 268957]
          }, {
              name: '河长(公里)',
              type: 'line',
              yAxisIndex: 1,
              areaStyle: {
                  // 设置区域填充颜色（渐变）
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: 'rgba(54, 162, 235, 0.8)' }, // 浅蓝色
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
              data: [6300, 5464, 2308, 1390, 2214, 1090, 1000]
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
    color: ['RGB(0, 0, 0)', 'RGB(30, 30, 30)', 'RGB(50, 50, 50)', 'RGB(90, 90, 90)', 'RGB(120, 120, 120)'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} 亿立方米"
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
		
		data: ["用水总量", "农业", "工业","生活","人工生态环境补水"],
		textStyle: {
            color: 'rgb(0, 0, 0)',
            fontSize:'15',
            fontFamily: '华文中宋',
            fontWeight: 'bold'
                }
	},
	
	series: [
		{
		name: '用水总量',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 5906.5,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '农业',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 3672.4,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '工业',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 970.2,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '生活',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 909.8,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
    {
		name: '人工生态环境补水',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 354.1,
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
})