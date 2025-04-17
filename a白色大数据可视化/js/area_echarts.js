
$(function () {
    map();
    function map() {
        var myChart = echarts.init(document.getElementById('map_1'));
var data = [
    {name: '北京市', value: 201},
    {name: '天津市', value: null},
    {name: '河北省', value: 713},
    {name: '山西省', value: 1474},
    {name: '内蒙古自治区', value: 1504},
    {name: '辽宁省', value: 730},
    {name: '吉林省', value: 353},
    {name: '黑龙江省', value: 541},
    {name: '上海市', value: null},
    {name: '江苏省', value: 636},
    {name: '浙江省', value: 2220},
    {name: '安徽省', value: 654},
    {name: '福建省', value: 2468},
    {name: '江西省', value: 1281},
    {name: '山东省', value: 933},
    {name: '河南省', value: 891},
    {name: '湖北省', value: 1281},
    {name: '湖南省', value: 793},
    {name: '广东省', value: 790},
    {name: '广西壮族自治区', value: 1013},
    {name: '海南省', value: 129},
    {name: '重庆市', value: 65},
    {name: '四川省', value: 1455},
    {name: '贵州省', value: 404},
    {name: '云南省', value: 644},
    {name: '西藏自治区', value: 3},
    {name: '陕西省', value: 571},
    {name: '甘肃省', value: 2742},
    {name: '青海省', value: 839},
    {name: '宁夏回族自治区', value: 115},
    {name: '新疆维吾尔自治区', value: 1849},
    {name: '香港特别行政区', value: null},
    {name: '澳门特别行政区', value: null},
    {name: '台湾省', value: 277}
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
    title: {
        text: '2023年省份的矿产总数(个)',
        left: '58%',
        textStyle: {
            color: 'rgb(0,0,0)',
            fontSize: 35,
            fontFamily: '华文中宋'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var value = params.data && params.data.value !== null ? params.data.value : '数据缺失';
            return params.name + '<br>矿产总数' + params.data.value + '个';
        },
    },
    visualMap: {
        min: 0,           // 数据最小值
        max: 2742,          // 数据最大值
        text: ['高', '低'], // 颜色条两端的文字
        realtime: false,   // 是否实时更新
        calculable: true,  // 是否显示拖拽手柄
        inRange: {
            color: ['rgb(255, 255, 255)','rgb(83, 79, 79)' ] // 颜色范围：更柔和的浅红到鲜红
        },
        show: false,
    },
    series : [
        {
            name: '各省份的矿产总数(个)',
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
