
$(function () {
    map();
    function map() {
        var myChart = echarts.init(document.getElementById('map_1'));
var data = [
    {name: '北京市', value: 41.5},
    {name: '天津市', value: 17.8},
    {name: '河北省', value: 241.4},
    {name: '山西省', value: 143.9},
    {name: '内蒙古自治区', value: 491.9},
    {name: '辽宁省', value: 305.5},
    {name: '吉林省', value: 498.8},
    {name: '黑龙江省', value: 1015},
    {name: '上海市', value: 41.5},
    {name: '江苏省', value: 422.1},
    {name: '浙江省', value: 730.1},
    {name: '安徽省', value: 692.8},
    {name: '福建省', value: 979.4},
    {name: '江西省', value: 1409.5},
    {name: '山东省', value: 249.8},
    {name: '河南省', value: 472.3},
    {name: '湖北省', value: 1094.2},
    {name: '湖南省', value: 1190.1},
    {name: '广东省', value: 1956},
    {name: '广西壮族自治区', value: 1520.2},
    {name: '海南省', value: 326.1},
    {name: '重庆市', value: 698.4},
    {name: '四川省', value: 2166.8},
    {name: '贵州省', value: 647.1},
    {name: '云南省', value: 1502.3},
    {name: '西藏自治区', value: 4427.3},
    {name: '陕西省', value: 546.3},
    {name: '甘肃省', value: 222.6},
    {name: '青海省', value: 855.4},
    {name: '宁夏回族自治区', value: 8.1},
    {name: '新疆维吾尔自治区', value: 868.3},
    {name: '香港特别行政区', value: null},
    {name: '澳门特别行政区', value: null},
    {name: '台湾省', value: null}
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
        text: '2023年各省份水资源总量(亿立方米)',
        left: '55%',
        textStyle: {
            color: 'rgb(0,0,0)',
            fontSize: 35,
            fontFamily: '华文中宋'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + '<br>水资源总量' + params.data.value + '亿立方米';
        },
    },
    visualMap: {
        min: 8.1,           // 数据最小值
        max: 4427.3,          // 数据最大值
        text: ['高', '低'], // 颜色条两端的文字
        realtime: false,   // 是否实时更新
        calculable: true,  // 是否显示拖拽手柄
        inRange: {
            color: ['rgb(207, 207, 205)','rgb(0, 0, 0)' ] // 颜色范围：更柔和的浅红到鲜红
        },
        show: false,
    },
    series : [
        {
            name: '各省份水资源总量(亿立方米)',
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
