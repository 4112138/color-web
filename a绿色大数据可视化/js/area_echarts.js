$(function () {
    map();
    function map() {
        var myChart = echarts.init(document.getElementById('map_1'));
        var data = [
            {name: '北京市', value: 90480},
            {name: '天津市', value: 64560},
            {name: '河北省', value: 274762},
            {name: '山西省', value: 80212},
            {name: '内蒙古自治区', value: 308710},
            {name: '辽宁省', value: 60642},
            {name: '吉林省', value: 12325},
            {name: '黑龙江省', value: 337295},
            {name: '上海市', value: 667},
            {name: '江苏省', value: 44533},
            {name: '浙江省', value: 162847},
            {name: '安徽省', value: 350601},
            {name: '福建省', value: 231915},
            {name: '江西省', value: 120149},
            {name: '山东省', value: 224191},
            {name: '河南省', value: 138006},
            {name: '湖北省', value: 209044},
            {name: '湖南省', value: 147870},
            {name: '广东省', value: 367607},
            {name: '广西壮族自治区', value: 1014833},
            {name: '海南省', value: 18757},
            {name: '重庆市', value: 206728},
            {name: '四川省', value: 180180},
            {name: '贵州省', value: 252962},
            {name: '云南省', value: 96780},
            {name: '西藏自治区', value: 8172},
            {name: '陕西省', value: 79226},
            {name: '青海省', value: 39792},
            {name: '甘肃省', value: 64149},
            {name: '宁夏回族自治区', value: 10319},
            {name: '新疆维吾尔自治区', value: 289355},
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
            var option = {
                title: {
                    text: '2022年各省份森林抚育面积',
                    left: '57.5%',
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
                        return params.name + '<br>森林抚育面积：' + params.data.value + '公顷';
                    },
                },
                visualMap: {
                    min: 0,           // 数据最小值
                    max: 1031900,          // 数据最大值（根据你的数据调整，例如山东的 [28, 59]）
                    realtime: false,   // 是否实时更新
                    calculable: false,  // 是否显示拖拽手柄
                    inRange: {
                        color: ['rgb(155, 211, 138)','rgb(17, 121, 36)' ] // 颜色范围：更柔和的浅红到鲜红
                    },
                    show: false,
                },
                series : [
                    {
                        name: '各省市森林抚育面积',
                        type: 'map',  
                        map: 'China', 
                        roam: false,                         
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }                            },
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
