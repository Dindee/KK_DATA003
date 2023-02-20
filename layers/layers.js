var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> แปลงยางพารา'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ป่าอนุรักษ์'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> แหล่งน้ำ'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ถนน'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> ต้นไม้ขนาดใหญ่'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> แหล่งเรียนรู้'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> กลุ่มชุดดินในแปลงยาง'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__8, 
                style: style__8,
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> ลำคลอง'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__9, 
                style: style__9,
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> เส้นถนน'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9];
lyr__1.set('fieldAliases', {'FSC_ID': 'FSC_ID', 'X': 'X', 'Y': 'Y', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'เลขที่ดิน': 'เลขที่ดิน', 'ชื่อสมาชิก': 'ชื่อสมาชิก', 'ผลผลิต': 'ผลผลิต', 'เนื้อที่(ไร่)': 'เนื้อที่(ไร่)', 'พันธุ์ยาง': 'พันธุ์ยาง', 'ระยะปลูก': 'ระยะปลูก', 'ชื่อผู้กรีด': 'ชื่อผู้กรีด', 'รูปแบบการกรีด': 'รูปแบบการกรีด', 'ความลาดชัน': 'ความลาดชัน', });
lyr__2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Sqm': 'Sqm', 'Area_Rai': 'Area_Rai', });
lyr__3.set('fieldAliases', {'ID': 'ID', 'HY_USE': 'HY_USE', 'HY_PNAME': 'HY_PNAME', 'HY_PVOL': 'HY_PVOL', 'HY_PQUAL': 'HY_PQUAL', 'REMARK': 'REMARK', });
lyr__4.set('fieldAliases', {'id': 'id', });
lyr__5.set('fieldAliases', {'NUM': 'NUM', 'X': 'X', 'Y': 'Y', 'T_NAME(Tha)': 'T_NAME(Tha)', 'IMAGE': 'IMAGE', });
lyr__6.set('fieldAliases', {'ชื่อ': 'ชื่อ', });
lyr__7.set('fieldAliases', {'FID_prov_2': 'FID_prov_2', 'SOILGROUP': 'SOILGROUP', 'ชุดดิน': 'ชุดดิน', 'ชุดดินที่พบ': 'ชุดดินที่พบ', 'คุณสมบัติของดิน': 'คุณสมบัติของดิน', 'ความอุดมสมบูรณ์': 'ความอุดมสมบูรณ์', 'ปัญหาของดิน': 'ปัญหาของดิน', 'ความเหมาะสมในการถมดิน': 'ความเหมาะสมในการถมดิน', 'ความเหมาะสมในการขุดบ่อ': 'ความเหมาะสมในการขุดบ่อ', 'LDD_Soilgrop_URL': 'LDD_Soilgrop_URL', 'การปลูกไม้ผลไม้ยืนต้น': 'การปลูกไม้ผลไม้ยืนต้น', });
lyr__8.set('fieldAliases', {'ID': 'ID', 'HY_USE': 'HY_USE', 'HY_LNAME': 'HY_LNAME', });
lyr__9.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr__1.set('fieldImages', {'FSC_ID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'เลขที่ดิน': 'TextEdit', 'ชื่อสมาชิก': 'TextEdit', 'ผลผลิต': 'TextEdit', 'เนื้อที่(ไร่)': 'TextEdit', 'พันธุ์ยาง': 'TextEdit', 'ระยะปลูก': 'TextEdit', 'ชื่อผู้กรีด': 'TextEdit', 'รูปแบบการกรีด': 'TextEdit', 'ความลาดชัน': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'Range', 'Name': 'TextEdit', 'Sqm': 'TextEdit', 'Area_Rai': 'TextEdit', });
lyr__3.set('fieldImages', {'ID': 'Range', 'HY_USE': 'Range', 'HY_PNAME': 'TextEdit', 'HY_PVOL': 'Range', 'HY_PQUAL': 'TextEdit', 'REMARK': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'Range', });
lyr__5.set('fieldImages', {'NUM': 'Range', 'X': 'Range', 'Y': 'Range', 'T_NAME(Tha)': 'TextEdit', 'IMAGE': 'ExternalResource', });
lyr__6.set('fieldImages', {'ชื่อ': 'TextEdit', });
lyr__7.set('fieldImages', {'FID_prov_2': 'Range', 'SOILGROUP': 'TextEdit', 'ชุดดิน': 'TextEdit', 'ชุดดินที่พบ': 'TextEdit', 'คุณสมบัติของดิน': 'TextEdit', 'ความอุดมสมบูรณ์': 'TextEdit', 'ปัญหาของดิน': 'TextEdit', 'ความเหมาะสมในการถมดิน': 'TextEdit', 'ความเหมาะสมในการขุดบ่อ': 'TextEdit', 'LDD_Soilgrop_URL': 'TextEdit', 'การปลูกไม้ผลไม้ยืนต้น': 'TextEdit', });
lyr__8.set('fieldImages', {'ID': 'Range', 'HY_USE': 'Range', 'HY_LNAME': 'TextEdit', });
lyr__9.set('fieldImages', {'id': 'Range', 'Name': 'TextEdit', });
lyr__1.set('fieldLabels', {'FSC_ID': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'LATITUDE': 'inline label', 'LONGITUDE': 'inline label', 'เลขที่ดิน': 'inline label', 'ชื่อสมาชิก': 'inline label', 'ผลผลิต': 'inline label', 'เนื้อที่(ไร่)': 'inline label', 'พันธุ์ยาง': 'inline label', 'ระยะปลูก': 'inline label', 'ชื่อผู้กรีด': 'inline label', 'รูปแบบการกรีด': 'inline label', 'ความลาดชัน': 'inline label', });
lyr__2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label', 'Sqm': 'no label', 'Area_Rai': 'no label', });
lyr__3.set('fieldLabels', {'ID': 'no label', 'HY_USE': 'no label', 'HY_PNAME': 'no label', 'HY_PVOL': 'no label', 'HY_PQUAL': 'no label', 'REMARK': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', });
lyr__5.set('fieldLabels', {'NUM': 'no label', 'X': 'inline label', 'Y': 'inline label', 'T_NAME(Tha)': 'inline label', 'IMAGE': 'inline label', });
lyr__6.set('fieldLabels', {'ชื่อ': 'inline label', });
lyr__7.set('fieldLabels', {'FID_prov_2': 'no label', 'SOILGROUP': 'inline label', 'ชุดดิน': 'inline label', 'ชุดดินที่พบ': 'inline label', 'คุณสมบัติของดิน': 'inline label', 'ความอุดมสมบูรณ์': 'inline label', 'ปัญหาของดิน': 'inline label', 'ความเหมาะสมในการถมดิน': 'inline label', 'ความเหมาะสมในการขุดบ่อ': 'inline label', 'LDD_Soilgrop_URL': 'inline label', 'การปลูกไม้ผลไม้ยืนต้น': 'inline label', });
lyr__8.set('fieldLabels', {'ID': 'no label', 'HY_USE': 'no label', 'HY_LNAME': 'no label', });
lyr__9.set('fieldLabels', {'id': 'no label', 'Name': 'header label', });
lyr__9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});