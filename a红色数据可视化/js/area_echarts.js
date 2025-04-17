
$(function () {
    map();
    function map() {
        var myChart = echarts.init(document.getElementById('map_1'));
        var data = [
            {name: '北京市', value: 50.46},
            {name: '天津市', value: 15.26},
            {name: '河北省', value: 41.6},
            {name: '山西省', value: 28.36},
            {name: '内蒙古自治区', value: 12.84},
            {name: '辽宁省', value: 34.73},
            {name: '吉林省', value: 27.14},
            {name: '黑龙江省', value:29.54},
            {name: '上海市', value: 49.23},
            {name: '江苏省', value: 73.57},
            {name: '浙江省', value: 60.86},
            {name: '安徽省', value: 58.66},
            {name: '福建省', value: 85.04},
            {name: '江西省', value: 61.34},
            {name: '山东省', value: 66.16},
            {name: '河南省', value: 81.36},
            {name: '湖北省', value: 60.27},
            {name: '湖南省', value: 70.84},
            {name: '广东省', value: 100},
            {name: '广西壮族自治区', value: 52.2},
            {name: '海南省', value: 41.11},
            {name: '重庆市', value: 37.06},
            {name: '四川省', value: 62.8},
            {name: '贵州省', value: 39.01},
            {name: '云南省', value: 49.9},
            {name: '西藏自治区', value: 17.99},
            {name: '陕西省', value: 51.26},
            {name: '甘肃省', value: 28.41},
            {name: '青海省', value: 1},
            {name: '宁夏回族自治区', value: 13.51},
            {name: '新疆维吾尔自治区', value: 2.19},
            {name: '台湾省', value: null},
            {name: '香港特别行政区', value: null},
            {name: '澳门特别行政区', value: null}
        ];
        $.getJSON('map.geojson')
                    .done(function(geoJson) {
                        console.log('GeoJSON 加载成功:', geoJson);

                // 检查 GeoJSON 中的名称
                var geoNames = geoJson.features.map(function(feature) {
                    return feature.properties.name;
                });
                console.log('GeoJSON 中的区域名称:', geoNames);

                // 检查数据匹配情况
                data.forEach(function(item) {
                    if (!geoNames.includes(item.name)) {
                        console.warn('数据中的名称未在 GeoJSON 中找到:', item.name);
                    }
                });

                // 注册地图
                echarts.registerMap('China', geoJson);
option = {
   // backgroundColor: '#404a59',
    title: {
        text: '中国烈士纪念设施分布图',
        left: '58.5%',
        textStyle: {
            color: 'rgb(0,0,0)',
            fontSize: 35,
            fontFamily: '华文中宋'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + '<br>红色旅游发展总指数：' + params.data.value;
        }
    },
    visualMap: {
        min: 0,           // 数据最小值
        max: 60,          // 数据最大值（根据你的数据调整，例如山东的 [28, 59]）
        text: ['高', '低'], // 颜色条两端的文字
        realtime: false,   // 是否实时更新
        calculable: true,  // 是否显示拖拽手柄
        inRange: {
            color: ['#FFCCCC', '#CC0000'] // 颜色范围：更柔和的浅红到鲜红
        },
        show: false,
    },
    series : [
        {
            name: '纪念碑数量',
            type: 'map',
            mapType: 'China', 
            roam: false,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: data
        }
    ]
};

myChart.setOption(option);
console.log('地图配置已应用');
}).fail(function(jqXHR, textStatus, errorThrown) {
console.error('GeoJSON 加载失败:', textStatus, errorThrown);
alert('无法加载 map.json 文件，请检查文件路径或格式');
});
}});

