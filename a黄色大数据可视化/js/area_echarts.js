$(function () {
        map();
        function map() {
        var myChart = echarts.init(document.getElementById('map_1'));
        var data = [
            {name: '北京市', value: 1118},
            {name: '天津市', value: 309},
            {name: '河北省', value: 4122},
            {name: '山西省', value: 1490},
            {name: '内蒙古自治区', value: 4809},
            {name: '辽宁省', value: 1721},
            {name: '吉林省', value: 1943},
            {name: '黑龙江省', value: 6238},
            {name: '上海市', value: 15},
            {name: '江苏省', value: 3856},
            {name: '浙江省', value: 1240},
            {name: '安徽省', value: 4679},
            {name: '福建省', value: 2198},
            {name: '江西省', value: 9241},
            {name: '山东省', value: 3222},
            {name: '河南省', value: 2917},
            {name: '湖北省', value: 1560},
            {name: '湖南省', value: 3345},
            {name: '广东省', value: 6811},
            {name: '广西壮族自治区', value: 2992},
            {name: '海南省', value: 1229},
            {name: '重庆市', value: 2086},
            {name: '四川省', value: 3046},
            {name: '贵州省', value: 1181},
            {name: '云南省', value: 1423},
            {name: '西藏自治区', value: 2221},
            {name: '陕西省', value: 6626},
            {name: '甘肃省', value: 1423.7},
            {name: '青海省', value: 222.1},
            {name: '宁夏回族自治区', value: 564},
            {name: '新疆维吾尔自治区', value: 6629.6},
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
                text: '2023年各省份耕地灌溉面积',
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
                    return params.name + '<br>耕地灌溉面积：' + value + ' 千公顷';
                }
            },
            visualMap: {
                min: 0,
                max: 9241,
                text: ['高', '低'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: [ 'rgb(242, 244, 178)','rgb(212, 195, 13)']
                },
                show: false // 显示颜色条，便于调试
            },
            series: [
                {
                    name: '各省市耕地灌溉面积',
                    type: 'map',
                    map: 'China',  // 使用自定义地图
                    roam: false, // 启用缩放和平移，便于查看
                    label: {
                        normal: {
                            show: false // 显示省份名称，便于调试
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: data
                }]
        };

        myChart.setOption(option);
        console.log('地图配置已应用');
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.error('GeoJSON 加载失败:', textStatus, errorThrown);
    alert('无法加载 map.json 文件，请检查文件路径或格式');
    });
}});
