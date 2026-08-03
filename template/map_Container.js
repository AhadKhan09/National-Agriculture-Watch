// Layer URLs
const layerUrls = {
    'National Boundary': `http://${Ahad}:8080/geoserver/Pak_Boundaries/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Pak_Boundaries%3ANational_Boundary&outputFormat=application%2Fjson`,
    'Provincial Boundary': `http://${Ahad}:8080/geoserver/Pak_Boundaries/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Pak_Boundaries%3AProvincial_Boundary&outputFormat=application%2Fjson`,
    'District Boundary': 'http://172.18.1.85:8080/geoserver/Pak_Boundaries/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Pak_Boundaries%3ADistrict_Boundary&outputFormat=application%2Fjson',
    'Tehsil Boundary': `http://${Ahad}:8080/geoserver/Pak_Boundaries/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Tehsil_Boundary&outputFormat=application%2Fjson`,
    'Vegetation Cover': {
        'January': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:January_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'February': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:Feb_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'March': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:March_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'April': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:April_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'May': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:May_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'June': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:June_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'July': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:July_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'August': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:August_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'September': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:Sept_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'October': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:Oct_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'November': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:Nov_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'December': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:Dec_Average&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`
    },
    'Crop Topology': {
        'January': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:Reclass_Pak_Rabi&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'February': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:rabbi2_done&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'March': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:rabbi_done_3&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'April': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:rabbi_done_4&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'May': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:done_kharif&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'June': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:Reclass_kharif_two&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'July': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:reclass_kharif_3&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'August': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:reclass_kharif_4&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'September': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:reclass_kharif_5&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'October': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:reclass_kharif_6&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'November': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:rabbi_done_5&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'December': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:rabbi_done_6&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`
    },
    'Flood Layer': {
        '2010': { type: 'tms', url: `http://${Saqib}:8080/geoserver/gwc/service/tms/1.0.0/Humza:G15_Flood_Inundation_2010_SUPARCO@EPSG:900913@pbf/{z}/{x}/{y}.pbf`, layerId: 'G15_Flood_Inundation_2010_SUPARCO' },
        '2011': { type: 'tms', url: `http://${Saqib}:8080/geoserver/gwc/service/tms/1.0.0/ne:G16_Flood_Inundation_2011_SUPARCO@EPSG:900913@pbf/{z}/{x}/{y}.pbf`, layerId: 'G16_Flood_Inundation_2011_SUPARCO' },
        '2012': { type: 'tms', url: `http://${Saqib}:8080/geoserver/gwc/service/tms/1.0.0/GCC:G17_Flood_Inundation_2012_SUPARCO@EPSG:900913@pbf/{z}/{x}/{y}.pbf`, layerId: 'G17_Flood_Inundation_2012_SUPARCO' },
        '2013': { type: 'tms', url: `http://${Saqib}:8080/geoserver/gwc/service/tms/1.0.0/ne:G18_Flood_Inundation_2013_SUPARCO@EPSG:900913@pbf/{z}/{x}/{y}.pbf`, layerId: 'G18_Flood_Inundation_2013_SUPARCO' },
        '2014': { type: 'tms', url: `http://${Saqib}:8080/geoserver/gwc/service/tms/1.0.0/ne:G19_Flood_Inundation_2014_SUPARCO@EPSG:900913@pbf/{z}/{x}/{y}.pbf`, layerId: 'G19_Flood_Inundation_2014_SUPARCO' },
        '2015': { type: 'tms', url: `http://${Saqib}:8080/geoserver/gwc/service/tms/1.0.0/ne:G20_Flood_Inundation_2015_NDMA_GIS_Team@EPSG:900913@pbf/{z}/{x}/{y}.pbf`, layerId: 'G20_Flood_Inundation_2015_NDMA_GIS_Team' },
        '2022': { type: 'wms', url: `http://${mam_Ayman}:8080/geoserver/abdul_sattar/wms?service=WMS&version=1.1.0&request=GetMap&layers=river_2022_extent&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true` },
        '2023': { type: 'tms', url: `http://${Saqib}:8080/geoserver/gwc/service/tms/1.0.0/ne:VIIRS_20230726_20230730_FloodExtent_PAK@EPSG:900913@pbf/{z}/{x}/{y}.pbf`, layerId: 'VIIRS_20230726_20230730_FloodExtent_PAK' },
        '2024': { type: 'tms', url: `http://${Saqib}:8080/geoserver/gwc/service/tms/1.0.0/ne:VIIRS_20240420_20240424_MaximumFloodExtent_Pakistan@EPSG:900913@pbf/{z}/{x}/{y}.pbf`, layerId: 'VIIRS_20240420_20240424_MaximumFloodExtent_Pakistan' },
        '2025': { type: 'wms', url: `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:Extant_updated&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true` }
    },
    'Godowns': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3AGodowns&maxFeatures=50&outputFormat=application%2Fjson`,
    'Crop Stress': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=final_stress&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
    'Cropping Zones': {
        'Balochistan': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=Bln_Gen&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Sindh': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=GenCrop_Sindh&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'KPK': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=GenCrop_KPK&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Punjab': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=GenCrop_SPun&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'AJK': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:treeclassification&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`
    },
    'Precipitation': {
        'April Week 1': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:April_W1&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'April Week 2': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:April_W2&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'April Week 3': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:April_W3&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'April Week 4': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:April_W4&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'May Week 1': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:May_W1&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'May Week 2': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:May_W2&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'May Week 3': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:May_W3&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'May Week 4': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:May_W4&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'June Week 1': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:June_W1&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'June Week 2': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:June_W2&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'June Week 3': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:June_W3&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'June Week 4': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:June_W4&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'July Week 1': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:July_W1&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'July Week 2': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:July_W2&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'July Week 3': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:July_W3&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'July Week 4': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:July_W4&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'August Week 1': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:Aug_W1&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'August Week 2': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:Aug_W2&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'August Week 3': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:Aug_W3&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'August Week 4': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:Aug_W4&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'September Week 1': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:Sep_W1&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'September Week 2': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:Sep_W2&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'September Week 3': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:Sep_W3&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'September Week 4': `http://${Ahad}:8080/geoserver/Weekly_Precipitation/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Precipitation:Sep_W4&bbox={bbox-epsg-3857}&width=768&height=557&srs=EPSG:3857&styles=&format=image/png&transparent=true`
    },
    'Drought Index (May)': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Drought_Index_May&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
    'Temperature (May)': `http://${Ahad}:8080/geoserver/Weekly_Temperature/wms?service=WMS&version=1.1.0&request=GetMap&layers=Weekly_Temperature:May_W1&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
    'Provincial Data': {
        'Punjab': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Punjab&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Sindh': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Sindh_District&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'KPK': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:KPK&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Balochistan': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Balochistan&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`
    },
    'Affected Areas': {
        'Punjab': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3APunjab&outputFormat=application%2Fjson`,
        'Sindh': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3ASindh_District&outputFormat=application%2Fjson`,
        'KPK': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3AKPK&outputFormat=application%2Fjson`,
        'Balochistan': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3ABalochistan&outputFormat=application%2Fjson`
    },
    'Crop Highlights': {
        'Wheat': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3AWheat_districts&outputFormat=application%2Fjson`,
        'Rice': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3ARice_districts&outputFormat=application%2Fjson`,
        'Cotton': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3ACotton_districts&outputFormat=application%2Fjson`,
        'Maize': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3AMaize_districts&outputFormat=application%2Fjson`,
        'Sugarcane': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3ASugarcane_districts&outputFormat=application%2Fjson`
    },
    'Crop Classification': {
        'Wheat': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Wheat26&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Rice': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Rice_Agri&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Cotton': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Cotton_Agri&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Maize': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Maize_Agri&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Sugarcane': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Sugarcane_Agri&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`
    }
};

// Track loaded layers
const loadedLayers = {};

const AFFECTED_AREA_MAX_OPACITY = 0.5;
const AFFECTED_AREA_MIN_OPACITY = 0.12;
const AFFECTED_AREA_BREATHE_DURATION_MS = 1700;

const affectedAreaPulseState = {
    layerIds: new Set(),
    animationFrameId: null
};

// State for district blinking
const districtBlinkState = {
    isBlinking: false,
    animationFrameId: null
};
// Global arrays for selected districts and tehsils
let selectedDistrict = [];
let selectedTehsils = [];

function normalizeLayerKey(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

// Legend utility functions
function createMapLegend() {
    if (document.getElementById('map-legend')) return;
    const mapContainer = document.getElementById('map');
    const legend = document.createElement('div');
    legend.id = 'map-legend';
    legend.className = 'map-legend';
    legend.style.display = 'none';

    const title = document.createElement('div');
    title.className = 'legend-title';
    title.textContent = 'Legend';
    legend.appendChild(title);

    mapContainer.appendChild(legend);
    updateHotspotOverlayPosition();
}

function addLegendEntry(key, color, label) {
    createMapLegend();
    const legend = document.getElementById('map-legend');
    if (!legend) return;

    // If entry exists, update color/label
    let entry = document.getElementById('legend-' + key);
    if (entry) {
        entry.querySelector('.legend-color-box').style.background = color;
        entry.querySelector('.legend-label').textContent = label;
        entry.style.display = 'flex';
        return;
    }

    entry = document.createElement('div');
    entry.className = 'legend-item';
    entry.id = 'legend-' + key;

    const colorBox = document.createElement('div');
    colorBox.className = 'legend-color-box';
    colorBox.style.background = color;

    const text = document.createElement('div');
    text.className = 'legend-label';
    text.textContent = label;

    entry.appendChild(colorBox);
    entry.appendChild(text);
    legend.appendChild(entry);
    legend.style.display = 'block';
    updateHotspotOverlayPosition();
    updateMayAugOverlayPosition();
    if (typeof updateComparisonOverlayPosition === 'function') updateComparisonOverlayPosition();
}

function addGradientLegend(key, gradientCss, labelArray) {
    createMapLegend();
    const legend = document.getElementById('map-legend');
    if (!legend) return;

    // If entry exists, return
    let existing = document.getElementById('legend-' + key);
    if (existing) {
        existing.style.display = 'flex';
        return;
    }

    const entry = document.createElement('div');
    entry.className = 'legend-item legend-gradient';
    entry.id = 'legend-' + key;

    const bar = document.createElement('div');
    bar.className = 'legend-gradient-bar';
    bar.style.background = gradientCss;

    const labels = document.createElement('div');
    labels.className = 'legend-gradient-labels';

    labelArray.forEach(text => {
        const lbl = document.createElement('div');
        lbl.className = 'legend-label';
        lbl.textContent = text;
        labels.appendChild(lbl);
    });

    entry.appendChild(bar);
    entry.appendChild(labels);
    legend.appendChild(entry);
    legend.style.display = 'block';
    updateHotspotOverlayPosition();
    updateMayAugOverlayPosition();
    if (typeof updateComparisonOverlayPosition === 'function') updateComparisonOverlayPosition();
}

function createPrecipitationLegend() {
    createMapLegend();
    const legend = document.getElementById('map-legend');
    if (!legend || document.getElementById('legend-precipitation-weekly')) return;

    const entry = document.createElement('div');
    entry.className = 'legend-item legend-precipitation-weekly';
    entry.id = 'legend-precipitation-weekly';

    const title = document.createElement('div');
    title.className = 'legend-precipitation-title';
    title.textContent = 'Precipitation (mm)';

    const bar = document.createElement('div');
    bar.className = 'legend-precipitation-bar';
    bar.style.background = 'linear-gradient(90deg, #fff35c 0%, #c9e34d 18%, #68c87d 36%, #35b5ad 54%, #3a76c2 74%, #5a3f9a 100%)';

    const labels = document.createElement('div');
    labels.className = 'legend-precipitation-labels';
    labels.innerHTML = '<span>0</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span>';

    entry.appendChild(title);
    entry.appendChild(bar);
    entry.appendChild(labels);
    legend.appendChild(entry);
    legend.style.display = 'block';
    updateHotspotOverlayPosition();
    updateMayAugOverlayPosition();
    if (typeof updateComparisonOverlayPosition === 'function') updateComparisonOverlayPosition();
}

function removePrecipitationLegend() {
    removeLegendEntry('precipitation-weekly');
    updateHotspotOverlayPosition();
}

function createDroughtIndexLegend() {
    createMapLegend();
    const legend = document.getElementById('map-legend');
    if (!legend || document.getElementById('legend-drought-index-may')) return;

    const entry = document.createElement('div');
    entry.className = 'legend-item legend-drought-index';
    entry.id = 'legend-drought-index-may';

    const title = document.createElement('div');
    title.className = 'legend-drought-index-title';
    title.textContent = 'Drought Index (May)';

    const bar = document.createElement('div');
    bar.className = 'legend-drought-index-bar';

    const labels = document.createElement('div');
    labels.className = 'legend-drought-index-labels';
    labels.innerHTML = '<span>Low</span><span>Moderate</span><span>High</span><span>Extreme</span>';

    entry.appendChild(title);
    entry.appendChild(bar);
    entry.appendChild(labels);
    legend.appendChild(entry);
    legend.style.display = 'block';
    updateHotspotOverlayPosition();
    updateMayAugOverlayPosition();
    if (typeof updateComparisonOverlayPosition === 'function') updateComparisonOverlayPosition();
}

function removeDroughtIndexLegend() {
    removeLegendEntry('drought-index-may');
    updateHotspotOverlayPosition();
}

function removeLegendEntry(key) {
    const entry = document.getElementById('legend-' + key);
    if (entry) entry.remove();

    const legend = document.getElementById('map-legend');
    if (!legend) return;
    // If no entries left, hide legend
    if (legend.querySelectorAll('.legend-item').length === 0) {
        legend.style.display = 'none';
    }

    updateHotspotOverlayPosition();
    updateMayAugOverlayPosition();
    if (typeof updateComparisonOverlayPosition === 'function') updateComparisonOverlayPosition();
}

function clearLegend() {
    const legend = document.getElementById('map-legend');
    if (legend) {
        legend.querySelectorAll('.legend-item').forEach(e => e.remove());
        legend.style.display = 'none';
    }

    updateHotspotOverlayPosition();
}

// Toggle Map Sidebar Menu
function toggleMapMenu() {
    const sidebar = document.getElementById('mapSidebar');
    sidebar.classList.toggle('active');
}

// Toggle Accordion
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling;

    // Close all other accordions
    document.querySelectorAll('.map-accordion-content').forEach(acc => {
        if (acc.id !== id) {
            acc.classList.remove('active');
            acc.previousElementSibling.classList.remove('active');
        }
    });

    // Stop crop autoplay if opening a different accordion or collapsing the major crops accordion
    if (id !== 'crop-classification-acc' || (button && button.classList.contains('active'))) {
        stopCropAutoplay();
    }

    // Toggle the clicked accordion
    content.classList.toggle('active');
    button.classList.toggle('active');
}

// Handle layer click
function handleLayerClick(layer) {
    event.preventDefault();
    const clickedLink = event.target;

    // Toggle active class
    clickedLink.classList.toggle('active');

    const isActive = clickedLink.classList.contains('active');

    if (layer === 'Vegetation Cover') {
        // Handle vegetation cover toggle (all layers at once)
        toggleVegetationLayers(isActive);

        // Sync the toggle switch
        const toggleSwitch = document.getElementById('vegetation-toggle');
        if (toggleSwitch) {
            toggleSwitch.checked = isActive;
        }

        // Turn off crop topology if activating vegetation
        if (isActive) {
            const cropTopologyToggle = document.getElementById('crop-topology-toggle');
            const cropTopologyBtn = document.querySelectorAll('.map-toggle-btn')[1];
            if (cropTopologyToggle && cropTopologyToggle.checked) {
                cropTopologyToggle.checked = false;
                cropTopologyBtn.classList.remove('active');
                toggleCropTopologyLayers(false);
            }
        }
    } else if (layer === 'Crop Topology') {
        // Handle crop topology toggle (all layers at once)
        toggleCropTopologyLayers(isActive);

        // Sync the toggle switch
        const toggleSwitch = document.getElementById('crop-topology-toggle');
        if (toggleSwitch) {
            toggleSwitch.checked = isActive;
        }

        // Turn off vegetation cover if activating crop topology
        if (isActive) {
            const vegetationToggle = document.getElementById('vegetation-toggle');
            const vegetationBtn = document.querySelector('.map-toggle-btn');
            if (vegetationToggle && vegetationToggle.checked) {
                vegetationToggle.checked = false;
                vegetationBtn.classList.remove('active');
                toggleVegetationLayers(false);
            }
        }
    } else if (layer === 'Precipitation') {
        togglePrecipitationLayers(isActive);

        const toggleSwitch = document.getElementById('map-precipitation-toggle');
        if (toggleSwitch) {
            toggleSwitch.checked = isActive;
        }
    } else if (layer === 'Drought Index (May)') {
        toggleDroughtIndexLayer(isActive);

        const toggleSwitch = document.getElementById('map-drought-index-toggle');
        if (toggleSwitch) {
            toggleSwitch.checked = isActive;
        }
    } else if (layer === 'Temperature (May)') {
        toggleTemperatureLayer(isActive);

        const toggleSwitch = document.getElementById('map-temperature-may-toggle');
        if (toggleSwitch) {
            toggleSwitch.checked = isActive;
        }
    } else {
        // Handle boundary layer toggle (vector tiles)
        if (layer === 'National Boundary' || layer === 'Provincial Boundary') {
            // These still use WFS - keep existing logic
            if (isActive) {
                addLayerToMap(layer);
            } else {
                removeLayerFromMap(layer);
            }
        } else if (layer === 'District Boundary') {
            toggleDistrictBoundary(isActive);
        } else if (layer === 'Tehsil Boundary') {
            toggleTehsilBoundary(isActive);
        } else {
            // Handle other individual layer toggle
            if (isActive) {
                addLayerToMap(layer);
            } else {
                removeLayerFromMap(layer);
            }
        }
    }

    return false;
}

// Toggle boundary layer visibility
function toggleBoundaryVisibility(lineLayerId, labelLayerId, isVisible) {
    const visibility = isVisible ? 'visible' : 'none';

    // Set line layer visibility
    if (map.getLayer(lineLayerId)) {
        map.setLayoutProperty(lineLayerId, 'visibility', visibility);
    }

    // Set label layer visibility
    if (map.getLayer(labelLayerId)) {
        map.setLayoutProperty(labelLayerId, 'visibility', visibility);
    }
}

function ensurePrecipitationLayerOrder() {
    const precipitationLayerEntries = Object.keys(layerUrls['Precipitation'] || {})
        .map(weekName => loadedLayers['precip_' + normalizeLayerKey(weekName)])
        .filter(layerInfo => layerInfo && map.getLayer(layerInfo.layerId));

    if (precipitationLayerEntries.length === 0) {
        return;
    }

    const thematicLayerKeys = [
        ...vegetationMonths.map(month => 'veg_' + normalizeLayerKey(month)),
        ...cropTopologyMonths.map(month => 'crop_' + normalizeLayerKey(month))
    ];

    const thematicAnchor = thematicLayerKeys
        .map(key => loadedLayers[key])
        .find(layerInfo => layerInfo && map.getLayer(layerInfo.layerId));

    if (thematicAnchor) {
        // Keep precipitation below all vegetation/crop layers.
        precipitationLayerEntries.forEach(layerInfo => {
            if (map.getLayer(layerInfo.layerId)) {
                map.moveLayer(layerInfo.layerId, thematicAnchor.layerId);
            }
        });
        ensureAffectedAreasAboveThematic();
        return;
    }

    const boundaryLayers = [
        'DistrictBoundary',
        'districtBoundary',
        'districtBoundary_label',
        'DistrictBoundaryHighlight',
        'TehsilBoundaryLine',
        'TehsilBoundary',
        'TehsilBoundaryHighlight',
        'tehsilBoundary_label'
    ];

    const topBoundaryLayer = boundaryLayers.find(layerId => map.getLayer(layerId));
    precipitationLayerEntries.forEach(layerInfo => {
        if (!map.getLayer(layerInfo.layerId)) {
            return;
        }

        if (topBoundaryLayer) {
            map.moveLayer(layerInfo.layerId, topBoundaryLayer);
        } else {
            map.moveLayer(layerInfo.layerId);
        }
    });

    ensureAffectedAreasAboveThematic();
}

function ensureAffectedAreasAboveThematic() {
    const affectedLayerEntries = Object.entries(loadedLayers)
        .filter(([key, value]) => key.startsWith('provincial_') && value && map.getLayer(value.layerId));

    if (affectedLayerEntries.length === 0) {
        return;
    }

    const boundaryLayers = [
        'DistrictBoundary',
        'districtBoundary',
        'districtBoundary_label',
        'DistrictBoundaryHighlight',
        'TehsilBoundaryLine',
        'TehsilBoundary',
        'TehsilBoundaryHighlight',
        'tehsilBoundary_label'
    ];

    const boundaryAnchor = boundaryLayers.find(layerId => map.getLayer(layerId));

    affectedLayerEntries.forEach(([, value]) => {
        if (!map.getLayer(value.layerId)) {
            return;
        }

        if (boundaryAnchor) {
            // Keep affected areas above thematic rasters but below boundary overlays.
            map.moveLayer(value.layerId, boundaryAnchor);
        } else {
            map.moveLayer(value.layerId);
        }
    });
}

let districtBoundaryEventsBound = false;
let tehsilBoundaryEventsBound = false;

function loadLargeVectorBoundary(url) {
    return new Promise((resolve, reject) => {
        const workerBlobCode = `
            self.onmessage = async function(e) {
                try {
                    const response = await fetch(e.data.url);
                    const geojson = await response.json();
                    self.postMessage({ success: true, data: geojson });
                } catch (error) {
                    self.postMessage({ success: false, error: error.message });
                }
            };
        `;
        
        const blob = new Blob([workerBlobCode], { type: 'application/javascript' });
        const worker = new Worker(URL.createObjectURL(blob));
        
        worker.postMessage({ url: url });
        
        worker.onmessage = function(event) {
            const { success, data, error } = event.data;
            worker.terminate();
            
            if (success) {
                resolve(data);
            } else {
                reject(new Error(error));
            }
        };
        worker.onerror = function(err) {
            worker.terminate();
            reject(err);
        };
    });
}

function ensureDistrictBoundaryLayers() {
    if (map.getSource('districtBoundary')) {
        return Promise.resolve();
    }

    const url = layerUrls['District Boundary'];

    return loadLargeVectorBoundary(url)
        .then(data => {
            map.addSource('districtBoundary', {
                type: 'geojson',
                data: data
            });

            map.addLayer({
                id: 'DistrictBoundary',
                type: 'fill',
                source: 'districtBoundary',
                layout: { visibility: 'visible' },
                paint: {
                    'fill-opacity': 0.2,
                    'fill-color': 'transparent'
                }
            });

            map.addLayer({
                id: 'districtBoundary',
                type: 'line',
                source: 'districtBoundary',
                layout: { visibility: 'none' },
                paint: {
                    'line-opacity': 0.8,
                    'line-color': 'black',
                    'line-width': 1.5
                }
            });

            map.addLayer({
                id: 'districtBoundary_label',
                type: 'symbol',
                source: 'districtBoundary',
                minzoom: 5.5,
                layout: {
                    visibility: 'none',
                    'text-field': ['coalesce', ['get', 'Districts'], ['get', 'District'], ['get', 'DISTRICT'], ['get', 'district'], ['get', 'NAME_2'], ['get', 'name'], ''],
                    'text-letter-spacing': 0.1,
                    'text-size': 13,
                    'text-offset': [0, 0],
                    'text-anchor': 'center'
                },
                paint: {
                    'text-color': 'black',
                    'text-halo-color': '#ffffff',
                    'text-halo-width': 1.5
                }
            });

            map.addLayer({
                id: 'DistrictBoundaryHighlight',
                type: 'fill',
                source: 'districtBoundary',
                paint: {
                    'fill-color': 'red',
                    'fill-opacity': 0.5
                },
                filter: ['in', ['coalesce', ['get', 'Districts'], ['get', 'District'], ['get', 'DISTRICT'], ['get', 'district'], ['get', 'NAME_2'], ['get', 'name']], ['literal', []]]
            });

            if (!districtBoundaryEventsBound) {
                map.on('click', 'DistrictBoundary', (e) => {
                    const visibility = map.getLayoutProperty('districtBoundary_label', 'visibility');
                    if (visibility !== 'visible') {
                        return;
                    }

                    if (e.features && e.features.length > 0) {
                        const clickedFeature = e.features[0];
                        const districtName = clickedFeature.properties.Districts ||
                                             clickedFeature.properties.District || 
                                             clickedFeature.properties.DISTRICT || 
                                             clickedFeature.properties.district || 
                                             clickedFeature.properties.NAME_2 || 
                                             clickedFeature.properties.name;

                        if (!districtName) {
                            return;
                        }

                        if (!selectedDistrict.includes(districtName)) {
                            selectedDistrict.push(districtName);
                        } else {
                            selectedDistrict = selectedDistrict.filter(name => name !== districtName);
                        }

                        map.setFilter('DistrictBoundaryHighlight', [
                            'in',
                            ['coalesce', ['get', 'Districts'], ['get', 'District'], ['get', 'DISTRICT'], ['get', 'district'], ['get', 'NAME_2'], ['get', 'name']],
                            ['literal', selectedDistrict]
                        ]);
                    }
                });

                map.on('mouseenter', 'DistrictBoundary', () => {
                    map.getCanvas().style.cursor = 'pointer';
                });

                map.on('mouseleave', 'DistrictBoundary', () => {
                    map.getCanvas().style.cursor = '';
                });

                districtBoundaryEventsBound = true;
            }
        });
}

function ensureTehsilBoundaryLayers() {
    if (map.getSource('tehsilBoundary')) {
        return Promise.resolve();
    }

    const url = layerUrls['Tehsil Boundary'];

    return loadLargeVectorBoundary(url)
        .then(data => {
            map.addSource('tehsilBoundary', {
                type: 'geojson',
                data: data
            });

            map.addLayer({
                id: 'TehsilBoundaryLine',
                type: 'line',
                source: 'tehsilBoundary',
                layout: { visibility: 'none' },
                paint: {
                    'line-opacity': 0.8,
                    'line-color': 'black',
                    'line-width': 1
                }
            });

            map.addLayer({
                id: 'TehsilBoundary',
                type: 'fill',
                source: 'tehsilBoundary',
                layout: { visibility: 'visible' },
                paint: {
                    'fill-opacity': 0.2,
                    'fill-color': 'transparent'
                }
            });

            map.addLayer({
                id: 'TehsilBoundaryHighlight',
                type: 'fill',
                source: 'tehsilBoundary',
                paint: {
                    'fill-color': 'red',
                    'fill-opacity': 0.5
                },
                filter: ['in', 'TEHSIL', '']
            });

            map.addLayer({
                id: 'tehsilBoundary_label',
                type: 'symbol',
                source: 'tehsilBoundary',
                minzoom: 6,
                layout: {
                    visibility: 'none',
                    'text-field': '{TEHSIL}',
                    'text-letter-spacing': 0.1,
                    'text-size': 13,
                    'text-offset': [0, 0],
                    'text-anchor': 'center'
                },
                paint: {
                    'text-color': 'black'
                }
            });

            if (!tehsilBoundaryEventsBound) {
                map.on('click', 'TehsilBoundary', (e) => {
                    const visibility = map.getLayoutProperty('tehsilBoundary_label', 'visibility');
                    if (visibility !== 'visible') {
                        return;
                    }

                    if (e.features && e.features.length > 0) {
                        const clickedFeature = e.features[0];
                        const tehsilName = clickedFeature.properties.TEHSIL;

                        if (!selectedTehsils.includes(tehsilName)) {
                            selectedTehsils.push(tehsilName);
                        } else {
                            selectedTehsils = selectedTehsils.filter(name => name !== tehsilName);
                        }

                        map.setFilter('TehsilBoundaryHighlight', ['in', 'TEHSIL', ...selectedTehsils]);
                    }
                });

                map.on('mouseenter', 'TehsilBoundary', () => {
                    map.getCanvas().style.cursor = 'pointer';
                });

                map.on('mouseleave', 'TehsilBoundary', () => {
                    map.getCanvas().style.cursor = '';
                });

                tehsilBoundaryEventsBound = true;
            }
        });
}

function toggleDistrictBoundary(isVisible) {
    ensureDistrictBoundaryLayers()
        .then(() => {
            toggleBoundaryVisibility('districtBoundary', 'districtBoundary_label', isVisible);
            if (!isVisible) {
                // Stop blinking if district boundaries are turned off
                try {
                    stopDistrictBlinking();
                } catch (e) {
                    console.warn('stopDistrictBlinking not available yet');
                }
            }
        })
        .catch(error => {
            console.error('Error loading district boundary:', error);
        });
}

function toggleTehsilBoundary(isVisible) {
    ensureTehsilBoundaryLayers()
        .then(() => {
            toggleBoundaryVisibility('TehsilBoundaryLine', 'tehsilBoundary_label', isVisible);
        })
        .catch(error => {
            console.error('Error loading tehsil boundary:', error);
        });
}

// Add layer to map
function addLayerToMap(layerName) {
    // Check if it's a vegetation month (WMS layer)
    if (layerUrls['Vegetation Cover'] && layerUrls['Vegetation Cover'][layerName]) {
        addWMSLayerToMap(layerName);
        return;
    }

    // Otherwise, treat as WFS layer
    if (!layerUrls[layerName]) {
        console.error('Layer URL not found for:', layerName);
        return;
    }

    const url = layerUrls[layerName];
    const sourceId = layerName.replace(/\s+/g, '_').toLowerCase();
    const layerId = sourceId + '_layer';

    // Fetch GeoJSON data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Add source
            map.addSource(sourceId, {
                type: 'geojson',
                data: data
            });

            // Add layer
            let mapLayerType = 'line';
            let paint = {
                'line-color': getLayerColor(layerName),
                'line-width': getLayerWidth(layerName)
            };

            if (layerName === 'Godowns') {
                mapLayerType = 'circle';
                paint = {
                    'circle-color': getLayerColor(layerName),
                    'circle-radius': 6,
                    'circle-stroke-color': '#ffffff',
                    'circle-stroke-width': 2
                };
            }

            map.addLayer({
                id: layerId,
                type: mapLayerType,
                source: sourceId,
                paint: paint
            });

            // Move boundary layers to top to ensure they appear above other layers
            const boundaryLayers = [
                'DistrictBoundary',
                'districtBoundary',
                'districtBoundary_label',
                'DistrictBoundaryHighlight',
                'TehsilBoundaryLine',
                'TehsilBoundary',
                'TehsilBoundaryHighlight',
                'tehsilBoundary_label'
            ];

            boundaryLayers.forEach(boundaryLayerId => {
                if (map.getLayer(boundaryLayerId)) {
                    map.moveLayer(boundaryLayerId);
                }
            });

            // Mark as loaded
            loadedLayers[layerName] = { sourceId, layerId };

            console.log('Layer added:', layerName);
        })
        .catch(error => {
            console.error('Error loading layer:', layerName, error);
        });
}

function addAffectedAreaLayer(province, visible = true) {
    if (!layerUrls['Affected Areas'] || !layerUrls['Affected Areas'][province]) {
        console.error('Affected area URL not found for:', province);
        return;
    }

    const url = layerUrls['Affected Areas'][province];
    const storageKey = 'provincial_' + normalizeLayerKey(province);
    const sourceId = storageKey + '_source';
    const layerId = storageKey + '_layer';

    if (map.getSource(sourceId)) {
        if (map.getLayer(layerId)) {
            map.setLayoutProperty(layerId, 'visibility', visible ? 'visible' : 'none');
            if (visible) {
                ensureAffectedAreaLayerOrder(layerId);
            }
        }
        loadedLayers[storageKey] = { sourceId, layerId };
        if (visible) {
            startAffectedAreaPulse(province);
        }
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            map.addSource(sourceId, {
                type: 'geojson',
                data: data
            });

            map.addLayer({
                id: layerId,
                type: 'fill',
                source: sourceId,
                paint: {
                    'fill-color': '#ff0000',
                    'fill-opacity': AFFECTED_AREA_MAX_OPACITY,
                    'fill-outline-color': '#ff0000'
                },
                layout: {
                    visibility: visible ? 'visible' : 'none'
                }
            });

            ensureAffectedAreaLayerOrder(layerId);

            const boundaryLayers = [
                'DistrictBoundary',
                'districtBoundary',
                'districtBoundary_label',
                'DistrictBoundaryHighlight',
                'TehsilBoundaryLine',
                'TehsilBoundary',
                'TehsilBoundaryHighlight',
                'tehsilBoundary_label'
            ];

            boundaryLayers.forEach(boundaryLayerId => {
                if (map.getLayer(boundaryLayerId)) {
                    map.moveLayer(boundaryLayerId);
                }
            });

            loadedLayers[storageKey] = { sourceId, layerId };

            if (visible) {
                startAffectedAreaPulse(province);
            }
        })
        .catch(error => {
            console.error('Error loading affected area:', province, error);
        });
}

function ensureAffectedAreaLayerOrder(affectedLayerId) {
    if (!map.getLayer(affectedLayerId)) {
        return;
    }

    const boundaryLayers = [
        'DistrictBoundary',
        'districtBoundary',
        'districtBoundary_label',
        'DistrictBoundaryHighlight',
        'TehsilBoundaryLine',
        'TehsilBoundary',
        'TehsilBoundaryHighlight',
        'tehsilBoundary_label'
    ];

    const boundaryAnchor = boundaryLayers.find(layerId => map.getLayer(layerId));

    if (boundaryAnchor) {
        map.moveLayer(affectedLayerId, boundaryAnchor);
    } else {
        map.moveLayer(affectedLayerId);
    }
}

function ensureThematicLayerOrder(layerId) {
    if (!map.getLayer(layerId)) {
        return;
    }

    const boundaryLayers = [
        'DistrictBoundary',
        'districtBoundary',
        'districtBoundary_label',
        'DistrictBoundaryHighlight',
        'TehsilBoundaryLine',
        'TehsilBoundary',
        'TehsilBoundaryHighlight',
        'tehsilBoundary_label'
    ];

    const boundaryAnchor = boundaryLayers.find(boundaryLayerId => map.getLayer(boundaryLayerId));
    if (boundaryAnchor) {
        // Keep thematic raster below boundary lines/labels but above affected areas.
        map.moveLayer(layerId, boundaryAnchor);
    } else {
        map.moveLayer(layerId);
    }

    ensureAffectedAreasAboveThematic();
}

// Remove layer from map
function removeLayerFromMap(layerName) {
    if (!loadedLayers[layerName]) {
        console.log('Layer not loaded:', layerName);
        return;
    }

    const { sourceId, layerId } = loadedLayers[layerName];

    stopAffectedAreaPulseByLayerId(layerId);

    // Remove layer
    if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
    }

    // Remove source
    if (map.getSource(sourceId)) {
        map.removeSource(sourceId);
    }

    // Remove from loaded layers
    delete loadedLayers[layerName];

    console.log('Layer removed:', layerName);
}

function ensureAffectedAreaPulseAnimation() {
    if (affectedAreaPulseState.animationFrameId !== null) {
        return;
    }

    const animate = (timestamp) => {
        if (affectedAreaPulseState.layerIds.size === 0) {
            affectedAreaPulseState.animationFrameId = null;
            return;
        }

        const progress = (timestamp % AFFECTED_AREA_BREATHE_DURATION_MS) / AFFECTED_AREA_BREATHE_DURATION_MS;
        const wave = (Math.sin((progress * Math.PI * 2) - (Math.PI / 2)) + 1) / 2;
        const currentOpacity = AFFECTED_AREA_MIN_OPACITY + ((AFFECTED_AREA_MAX_OPACITY - AFFECTED_AREA_MIN_OPACITY) * wave);

        affectedAreaPulseState.layerIds.forEach(layerId => {
            const layer = map.getLayer(layerId);
            if (layer && layer.type === 'fill') {
                map.setPaintProperty(layerId, 'fill-opacity', currentOpacity);
            } else {
                affectedAreaPulseState.layerIds.delete(layerId);
            }
        });

        if (affectedAreaPulseState.layerIds.size === 0) {
            affectedAreaPulseState.animationFrameId = null;
            return;
        }

        affectedAreaPulseState.animationFrameId = requestAnimationFrame(animate);
    };

    affectedAreaPulseState.animationFrameId = requestAnimationFrame(animate);
}

function stopAffectedAreaPulseByLayerId(layerId) {
    const wasAnimating = affectedAreaPulseState.layerIds.delete(layerId);
    const layer = map.getLayer(layerId);

    if (wasAnimating && layer && layer.type === 'fill') {
        map.setPaintProperty(layerId, 'fill-opacity', AFFECTED_AREA_MAX_OPACITY);
    }

    if (affectedAreaPulseState.layerIds.size === 0 && affectedAreaPulseState.animationFrameId !== null) {
        cancelAnimationFrame(affectedAreaPulseState.animationFrameId);
        affectedAreaPulseState.animationFrameId = null;
    }
}

function startAffectedAreaPulse(province) {
    const layerKey = 'provincial_' + normalizeLayerKey(province);
    const layerInfo = loadedLayers[layerKey];

    if (!layerInfo || !map.getLayer(layerInfo.layerId)) {
        requestAnimationFrame(() => {
            const retryInfo = loadedLayers[layerKey];
            const retryLayer = retryInfo ? map.getLayer(retryInfo.layerId) : null;
            if (!retryInfo || !retryLayer || retryLayer.type !== 'fill') {
                return;
            }
            affectedAreaPulseState.layerIds.add(retryInfo.layerId);
            ensureAffectedAreaPulseAnimation();
        });
        return;
    }

    const layer = map.getLayer(layerInfo.layerId);
    if (!layer || layer.type !== 'fill') {
        return;
    }

    affectedAreaPulseState.layerIds.add(layerInfo.layerId);
    ensureAffectedAreaPulseAnimation();
}

function stopAffectedAreaPulse(province) {
    const layerKey = 'provincial_' + normalizeLayerKey(province);
    const layerInfo = loadedLayers[layerKey];
    if (!layerInfo) {
        return;
    }

    stopAffectedAreaPulseByLayerId(layerInfo.layerId);
}

// Get color for layer
function getLayerColor(layerName) {
    const colors = {
        'National Boundary': '#000000',
        'Provincial Boundary': '#000000',
        'Godowns': '#ff6600',
        'January': '#FF6B6B',
        'February': '#4ECDC4',
        'March': '#45B7D1',
        'April': '#96CEB4',
        'May': '#FFEAA7',
        'June': '#DDA0DD',
        'July': '#98D8C8',
        'August': '#F7DC6F',
        'September': '#BB8FCE',
        'October': '#85C1E9',
        'November': '#F8C471',
        'December': '#82E0AA',
        'Wheat Fields': '#F5DEB3',
        'Rice Fields': '#98FB98',
        'Cotton Fields': '#FFF8DC',
        'Sugarcane Fields': '#90EE90'
    };
    return colors[layerName] || '#ffffff';
}

// Get width for layer
function getLayerWidth(layerName) {
    const widths = {
        'National Boundary': 3,
        'Provincial Boundary': 2,
        'January': 2,
        'February': 2,
        'March': 2,
        'April': 2,
        'May': 2,
        'June': 2,
        'July': 2,
        'August': 2,
        'September': 2,
        'October': 2,
        'November': 2,
        'December': 2,
        'Wheat Fields': 2,
        'Rice Fields': 2,
        'Cotton Fields': 2,
        'Sugarcane Fields': 2
    };
    return widths[layerName] || 1;
}

// Handle vegetation toggle switch
function handleVegetationToggle(isChecked) {
    const vegetationBtn = document.querySelector('.map-toggle-btn');

    if (isChecked) {
        vegetationBtn.classList.add('active');
        toggleVegetationLayers(true);

        // Turn off crop topology if it's active
        const cropTopologyToggle = document.getElementById('crop-topology-toggle');
        const cropTopologyBtn = document.querySelectorAll('.map-toggle-btn')[1]; // Second button
        if (cropTopologyToggle && cropTopologyToggle.checked) {
            cropTopologyToggle.checked = false;
            cropTopologyBtn.classList.remove('active');
            toggleCropTopologyLayers(false);
        }
    } else {
        vegetationBtn.classList.remove('active');
        toggleVegetationLayers(false);
    }
}

// Handle crop topology toggle switch
function handleCropTopologyToggle(isChecked) {
    const cropTopologyBtn = document.querySelectorAll('.map-toggle-btn')[1]; // Second button

    if (isChecked) {
        cropTopologyBtn.classList.add('active');
        toggleCropTopologyLayers(true);

        // Turn off vegetation cover if it's active
        const vegetationToggle = document.getElementById('vegetation-toggle');
        const vegetationBtn = document.querySelector('.map-toggle-btn');
        if (vegetationToggle && vegetationToggle.checked) {
            vegetationToggle.checked = false;
            vegetationBtn.classList.remove('active');
            toggleVegetationLayers(false);
        }
    } else {
        cropTopologyBtn.classList.remove('active');
        toggleCropTopologyLayers(false);
    }
}

function handlePrecipitationToggle(isChecked) {
    const precipitationBtn = document.querySelector('.map-toggle-btn-precipitation');
    if (precipitationBtn) {
        precipitationBtn.classList.toggle('active', isChecked);
    }

    togglePrecipitationLayers(isChecked);
}

function handleDroughtIndexToggle(isChecked) {
    const droughtIndexBtn = document.querySelector('.map-toggle-btn-drought-index');
    if (droughtIndexBtn) {
        droughtIndexBtn.classList.toggle('active', isChecked);
    }

    toggleDroughtIndexLayer(isChecked);
}

// Handle provincial data toggle switch
function handleProvincialToggle(province, isChecked) {
    const layerKey = 'provincial_' + normalizeLayerKey(province);

    if (isChecked) {
        addAffectedAreaLayer(province, true);
    } else {
        stopAffectedAreaPulse(province);
        removeLayerFromMap(layerKey);
    }
}

// Handle crop-specific affected districts blinking toggle
function handleCropHighlightToggle(cropName, isChecked) {
    const layerKey = 'crop-highlight_' + normalizeLayerKey(cropName);
    const sourceId = layerKey + '_source';
    const layerId = layerKey + '_layer';

    const checkboxEl = document.getElementById('crop-' + cropName.toLowerCase() + '-highlight');
    if (checkboxEl) {
        checkboxEl.checked = isChecked;
    }

    if (!isChecked) {
        stopAffectedAreaPulseByLayerId(layerId);
        removeLayerFromMap(layerKey);
        return;
    }

    if (map.getSource(sourceId)) {
        if (map.getLayer(layerId)) {
            map.setLayoutProperty(layerId, 'visibility', 'visible');
            ensureAffectedAreaLayerOrder(layerId);
        }
        loadedLayers[layerKey] = { sourceId, layerId };
        affectedAreaPulseState.layerIds.add(layerId);
        ensureAffectedAreaPulseAnimation();
        return;
    }

    const url = layerUrls['Crop Highlights'][cropName];
    if (!url) {
        console.error('No Crop Highlight URL found for:', cropName);
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!map) return;

            if (!map.getSource(sourceId)) {
                map.addSource(sourceId, {
                    type: 'geojson',
                    data: data
                });
            }

            if (!map.getLayer(layerId)) {
                map.addLayer({
                    id: layerId,
                    type: 'fill',
                    source: sourceId,
                    paint: {
                        'fill-color': [
                            'match',
                            ['get', 'Stress'],
                            'Very High', '#ff0000',
                            'High', '#ffa500',
                            'rgba(0,0,0,0)'
                        ],
                        'fill-opacity': AFFECTED_AREA_MAX_OPACITY,
                        'fill-outline-color': [
                            'match',
                            ['get', 'Stress'],
                            'Very High', '#ff0000',
                            'High', '#ffa500',
                            'rgba(0,0,0,0)'
                        ]
                    },
                    layout: {
                        visibility: 'visible'
                    },
                    filter: ['in', ['get', 'Stress'], ['literal', ['Very High', 'High']]]
                });
            }

            ensureAffectedAreaLayerOrder(layerId);

            const boundaryLayers = [
                'DistrictBoundary',
                'districtBoundary',
                'districtBoundary_label',
                'DistrictBoundaryHighlight',
                'TehsilBoundaryLine',
                'TehsilBoundary',
                'TehsilBoundaryHighlight',
                'tehsilBoundary_label'
            ];

            boundaryLayers.forEach(boundaryLayerId => {
                if (map.getLayer(boundaryLayerId)) {
                    map.moveLayer(boundaryLayerId);
                }
            });

            loadedLayers[layerKey] = { sourceId, layerId };

            affectedAreaPulseState.layerIds.add(layerId);
            ensureAffectedAreaPulseAnimation();
        })
        .catch(error => {
            console.error('Error loading crop highlight:', cropName, error);
        });
}

// Toggle vegetation layers (all at once)
function toggleVegetationLayers(isActive) {
    const vegetationLayers = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (isActive) {
        // Preload all vegetation months if not already loaded
        preloadAllVegetationMonths();

        // Show slider and start with January
        showVegetationSlider();
        showVegetationMonth('January');
        // Add legend entries
        addLegendEntry('vegetation', '#47a247', 'Vegetation');
        addLegendEntry('other', '#edc664', 'Other');
    } else {
        // Hide slider and remove all layers
        hideVegetationSlider();
        vegetationLayers.forEach(layerName => {
            removeLayerFromMap('veg_' + normalizeLayerKey(layerName));
        });
        // Remove legend entries when turned off
        removeLegendEntry('vegetation');
        removeLegendEntry('other');
    }
}

// Preload all vegetation months for seamless switching
function preloadAllVegetationMonths() {
    const vegetationLayers = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    vegetationLayers.forEach(monthName => {
        // Only add if not already loaded
        if (!loadedLayers['veg_' + normalizeLayerKey(monthName)]) {
            addWMSLayerToMap(monthName, false, 'vegetation'); // Preload but keep hidden
        }
    });

    console.log('All vegetation months preloaded');
}// Toggle crop topology layers (all at once)
function toggleCropTopologyLayers(isActive) {
    if (isActive) {
        // Preload all crop topology months if not already loaded
        preloadAllCropTopologyMonths();

        // Show slider and start with January
        showCropTopologySlider();
        showCropTopologyMonth('January');
        // The legend will be dynamically updated by updateCropTopologyDisplay
    } else {
        // Hide slider and remove all layers
        hideCropTopologySlider();
        cropTopologyMonths.forEach(month => {
            removeLayerFromMap('crop_' + normalizeLayerKey(month));
        });
        // Remove all crop topology legend entries
        removeLegendEntry('wheat');
        removeLegendEntry('mustard');
        removeLegendEntry('barley');
        removeLegendEntry('barseem');
        removeLegendEntry('barren');
        removeLegendEntry('builtup');
        removeLegendEntry('forest');
        removeLegendEntry('cotton');
        removeLegendEntry('sugarcane');
        removeLegendEntry('rice');
        removeLegendEntry('maize');
        removeLegendEntry('kharif_barren');
        removeLegendEntry('kharif_forest');
    }
}

// Vegetation slider variables
let vegetationSliderInterval = null;
let currentVegetationMonth = 0;
const vegetationMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Crop Topology slider variables
let cropTopologySliderInterval = null;
let currentCropTopologyMonth = 0;
const cropTopologyMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Precipitation slider variables
let precipitationSliderInterval = null;
let currentPrecipitationWeek = 0;
const precipitationWeeks = Object.keys(layerUrls['Precipitation'] || {});

// Show vegetation slider
function showVegetationSlider() {
    // Remove existing slider if any
    hideVegetationSlider();

    // Create slider container with new design
    const sliderContainer = document.createElement('div');
    sliderContainer.id = 'vegetation-slider-container';
    sliderContainer.style.cssText = `
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-radius: 16px;
        padding: 8px 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(166, 202, 148, 0.7);
        z-index: 1000;
        max-width: 420px;
        width: 80%;
        font-family: 'Segoe UI', sans-serif;
        animation: slideUp 0.5s ease-out;
    `;

    // Month display section
    const monthDisplay = document.createElement('div');
    monthDisplay.className = 'month-display';
    monthDisplay.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 6px;
    `;

    const monthName = document.createElement('div');
    monthName.id = 'vegetation-month-name';
    monthName.className = 'month-name';
    monthName.textContent = 'JANUARY';
    monthName.style.cssText = `
        font-size: 1.6rem;
        font-weight: 700;
        color: #2d3748;
        text-transform: uppercase;
        letter-spacing: 1.5px;
    `;

    const seasonBadge = document.createElement('span');
    seasonBadge.id = 'vegetation-season-badge';
    seasonBadge.className = 'season-badge season-rabi';
    seasonBadge.textContent = 'Rabi';
    seasonBadge.style.cssText = `
        display: inline-block;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.65rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
    `;

    monthDisplay.appendChild(monthName);
    monthDisplay.appendChild(seasonBadge);

    // Progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        width: 100%;
        height: 5px;
        background: #e2e8f0;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 8px;
    `;

    const progressFill = document.createElement('div');
    progressFill.id = 'vegetation-progress-fill';
    progressFill.className = 'progress-fill';
    progressFill.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #a6ca94 0%, #8fb885 100%);
        border-radius: 6px;
        transition: width 0.3s ease;
        width: 8.33%;
    `;

    progressBar.appendChild(progressFill);

    // Controls
    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    `;

    const prevBtn = document.createElement('button');
    prevBtn.className = 'control-btn';
    prevBtn.innerHTML = '‹';
    prevBtn.setAttribute('aria-label', 'Previous month');
    prevBtn.style.cssText = `
        background: linear-gradient(135deg, #a6ca94 0%, #8fb885 100%);
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(166, 202, 148, 0.4);
    `;
    prevBtn.onclick = prevVegetationMonth;

    const playPauseBtn = document.createElement('button');
    playPauseBtn.id = 'vegetation-play-pause';
    playPauseBtn.className = 'control-btn play-pause-btn';
    playPauseBtn.innerHTML = '▶';
    playPauseBtn.setAttribute('aria-label', 'Play/Pause');
    playPauseBtn.style.cssText = `
        background: linear-gradient(135deg, #a6ca94 0%, #8fb885 100%);
        color: white;
        border: none;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(166, 202, 148, 0.4);
    `;
    playPauseBtn.onclick = toggleVegetationPlayback;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'control-btn';
    nextBtn.innerHTML = '›';
    nextBtn.setAttribute('aria-label', 'Next month');
    nextBtn.style.cssText = `
        background: linear-gradient(135deg, #a6ca94 0%, #8fb885 100%);
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(166, 202, 148, 0.4);
    `;
    nextBtn.onclick = nextVegetationMonth;

    controls.appendChild(prevBtn);
    controls.appendChild(playPauseBtn);
    controls.appendChild(nextBtn);

    // Navigation dots
    const navDots = document.createElement('div');
    navDots.id = 'vegetation-nav-dots';
    navDots.className = 'nav-dots';
    navDots.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 4px;
        margin-top: 8px;
    `;

    // Create dots
    for (let i = 0; i < 12; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.style.cssText = `
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #cbd5e0;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        dot.onclick = () => goToVegetationMonth(i);
        navDots.appendChild(dot);
    }

    // Assemble the slider
    sliderContainer.appendChild(monthDisplay);
    sliderContainer.appendChild(progressBar);
    sliderContainer.appendChild(controls);
    sliderContainer.appendChild(navDots);

    // Add to map container
    const mapContainer = document.getElementById('map');
    mapContainer.appendChild(sliderContainer);

    // Start with January
    showVegetationMonth('January');
    updateVegetationDisplay();

    // Add hover effects
    [prevBtn, playPauseBtn, nextBtn].forEach(btn => {
        btn.onmouseover = () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.boxShadow = '0 6px 20px rgba(166, 202, 148, 0.6)';
        };
        btn.onmouseout = () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = '0 4px 15px rgba(166, 202, 148, 0.4)';
        };
        btn.onmousedown = () => {
            btn.style.transform = 'scale(0.95)';
        };
        btn.onmouseup = () => {
            btn.style.transform = 'scale(1.1)';
        };
    });
}

// Hide vegetation slider
function hideVegetationSlider() {
    const sliderContainer = document.getElementById('vegetation-slider-container');
    if (sliderContainer) {
        sliderContainer.remove();
    }
    if (vegetationSliderInterval) {
        clearInterval(vegetationSliderInterval);
        vegetationSliderInterval = null;
    }
    currentVegetationMonth = 0;
}

// Show specific vegetation month
function showVegetationMonth(monthName) {
    try {
        // Hide all vegetation months first
        vegetationMonths.forEach(month => {
            hideVegetationMonth(month);
        });

        // Show the selected month
        showVegetationMonthLayer(monthName);
    } catch (error) {
        console.error('Error showing vegetation month:', monthName, error);
        // Continue playback even if there's an error
    }
}

// Hide a specific vegetation month (set visibility to none)
function hideVegetationMonth(monthName) {
    const storageKey = 'veg_' + normalizeLayerKey(monthName);
    if (!loadedLayers[storageKey]) {
        return; // Not loaded yet
    }

    const { layerId } = loadedLayers[storageKey];
    if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', 'none');
    }
}

// Show a specific vegetation month (set visibility to visible)
function showVegetationMonthLayer(monthName) {
    const storageKey = 'veg_' + normalizeLayerKey(monthName);
    if (!loadedLayers[storageKey]) {
        // If not loaded yet, add it and set to visible
        addWMSLayerToMap(monthName, true, 'vegetation');
        return;
    }

    const { layerId } = loadedLayers[storageKey];
    if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', 'visible');
        map.setPaintProperty(layerId, 'raster-opacity', 0.95);
        ensureThematicLayerOrder(layerId);
    }
}

// Toggle playback
function toggleVegetationPlayback() {
    const playPauseBtn = document.getElementById('vegetation-play-pause');

    if (vegetationSliderInterval) {
        // Pause
        clearInterval(vegetationSliderInterval);
        vegetationSliderInterval = null;
        playPauseBtn.innerHTML = '▶';
    } else {
        // Play
        playPauseBtn.innerHTML = '❚❚';
        vegetationSliderInterval = setInterval(() => {
            try {
                nextVegetationMonth();
            } catch (error) {
                console.error('Error during playback:', error);
                // Clear interval on error to prevent infinite loop
                clearInterval(vegetationSliderInterval);
                vegetationSliderInterval = null;
                playPauseBtn.innerHTML = '▶';
            }
        }, 2000); // Change month every 2 seconds
    }
}// Previous month
function prevVegetationMonth() {
    currentVegetationMonth = (currentVegetationMonth - 1 + 12) % 12;
    showVegetationMonth(vegetationMonths[currentVegetationMonth]);
    updateVegetationDisplay();

    // Stop playback if user manually navigates
    if (vegetationSliderInterval) {
        clearInterval(vegetationSliderInterval);
        vegetationSliderInterval = null;
        document.getElementById('vegetation-play-pause').innerHTML = '▶';
    }
}

// Next month
function nextVegetationMonth() {
    currentVegetationMonth = (currentVegetationMonth + 1) % 12;
    showVegetationMonth(vegetationMonths[currentVegetationMonth]);
    updateVegetationDisplay();
}

// Go to specific month
function goToVegetationMonth(index) {
    currentVegetationMonth = index;
    showVegetationMonth(vegetationMonths[currentVegetationMonth]);
    updateVegetationDisplay();

    // Stop playback if user manually navigates
    if (vegetationSliderInterval) {
        clearInterval(vegetationSliderInterval);
        vegetationSliderInterval = null;
        document.getElementById('vegetation-play-pause').innerHTML = '▶';
    }
}

// Update vegetation display
function updateVegetationDisplay() {
    const monthName = document.getElementById('vegetation-month-name');
    const seasonBadge = document.getElementById('vegetation-season-badge');
    const progressFill = document.getElementById('vegetation-progress-fill');
    const navDots = document.querySelectorAll('#vegetation-nav-dots .dot');

    if (monthName && seasonBadge && progressFill) {
        // Update month name
        monthName.textContent = vegetationMonths[currentVegetationMonth].toUpperCase();

        // Update season badge
        const seasons = ['Rabi', 'Rabi', 'Rabi', 'Rabi', 'Kharif', 'Kharif', 'Kharif', 'Kharif', 'Kharif', 'Kharif', 'Rabi', 'Rabi'];
        const season = seasons[currentVegetationMonth];
        seasonBadge.textContent = season;

        // Update season badge color
        if (season === 'Kharif') {
            seasonBadge.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
        } else {
            seasonBadge.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        }

        // Update progress bar
        const progress = ((currentVegetationMonth + 1) / 12) * 100;
        progressFill.style.width = progress + '%';

        // Update navigation dots
        navDots.forEach((dot, index) => {
            if (index === currentVegetationMonth) {
                dot.classList.add('active');
                dot.style.background = 'linear-gradient(135deg, #a6ca94 0%, #8fb885 100%)';
                dot.style.width = '20px';
                dot.style.borderRadius = '10px';
            } else {
                dot.classList.remove('active');
                dot.style.background = '#cbd5e0';
                dot.style.width = '8px';
                dot.style.borderRadius = '50%';
            }
        });
    }
}

// Preload all crop topology months for seamless switching
function preloadAllCropTopologyMonths() {
    const cropTopologyLayers = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    cropTopologyLayers.forEach(monthName => {
        // Only add if not already loaded
        if (!loadedLayers['crop_' + normalizeLayerKey(monthName)]) {
            addWMSLayerToMap(monthName, false, 'crop'); // Preload but keep hidden
        }
    });

    console.log('All crop topology months preloaded');
}

// Show crop topology slider
function showCropTopologySlider() {
    // Remove existing slider if any
    hideCropTopologySlider();

    // Create slider container with new design
    const sliderContainer = document.createElement('div');
    sliderContainer.id = 'crop-topology-slider-container';
    sliderContainer.className = 'crop-topology-slider-container';
    sliderContainer.style.cssText = `
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-radius: 16px;
        padding: 8px 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(166, 202, 148, 0.7);
        z-index: 1000;
        max-width: 420px;
        width: 80%;
        font-family: 'Segoe UI', sans-serif;
        animation: slideUp 0.5s ease-out;
    `;

    // Month display section
    const monthDisplay = document.createElement('div');
    monthDisplay.className = 'month-display';
    monthDisplay.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 6px;
    `; const monthName = document.createElement('div');
    monthName.id = 'crop-topology-month-name';
    monthName.className = 'month-name';
    monthName.textContent = 'JANUARY';
    monthName.style.cssText = `
        font-size: 1.6rem;
        font-weight: 700;
        color: #2d3748;
        text-transform: uppercase;
        letter-spacing: 1.5px;
    `;

    const seasonBadge = document.createElement('span');
    seasonBadge.id = 'crop-topology-season-badge';
    seasonBadge.className = 'season-badge season-rabi';
    seasonBadge.textContent = 'Rabi';
    seasonBadge.style.cssText = `
        display: inline-block;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.65rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
    `;

    monthDisplay.appendChild(monthName);
    monthDisplay.appendChild(seasonBadge);

    // Progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        width: 100%;
        height: 5px;
        background: #e2e8f0;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 8px;
    `;

    const progressFill = document.createElement('div');
    progressFill.id = 'crop-topology-progress-fill';
    progressFill.className = 'progress-fill';
    progressFill.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #a6ca94 0%, #8fb885 100%);
        border-radius: 6px;
        transition: width 0.3s ease;
        width: 8.33%;
    `;

    progressBar.appendChild(progressFill);

    // Controls
    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    `;

    const prevBtn = document.createElement('button');
    prevBtn.className = 'control-btn';
    prevBtn.innerHTML = '‹';
    prevBtn.setAttribute('aria-label', 'Previous month');
    prevBtn.style.cssText = `
        background: linear-gradient(135deg, #a6ca94 0%, #8fb885 100%);
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(166, 202, 148, 0.4);
    `;
    prevBtn.onclick = prevCropTopologyMonth;

    const playPauseBtn = document.createElement('button');
    playPauseBtn.id = 'crop-topology-play-pause';
    playPauseBtn.className = 'control-btn play-pause-btn';
    playPauseBtn.innerHTML = '▶';
    playPauseBtn.setAttribute('aria-label', 'Play/Pause');
    playPauseBtn.style.cssText = `
        background: linear-gradient(135deg, #a6ca94 0%, #8fb885 100%);
        color: white;
        border: none;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(166, 202, 148, 0.4);
    `;
    playPauseBtn.onclick = toggleCropTopologyPlayback;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'control-btn';
    nextBtn.innerHTML = '›';
    nextBtn.setAttribute('aria-label', 'Next month');
    nextBtn.style.cssText = `
        background: linear-gradient(135deg, #a6ca94 0%, #8fb885 100%);
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(166, 202, 148, 0.4);
    `;
    nextBtn.onclick = nextCropTopologyMonth;

    controls.appendChild(prevBtn);
    controls.appendChild(playPauseBtn);
    controls.appendChild(nextBtn);

    // Navigation dots
    const navDots = document.createElement('div');
    navDots.id = 'crop-topology-nav-dots';
    navDots.className = 'nav-dots';
    navDots.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 4px;
        margin-top: 8px;
    `;

    // Create dots
    for (let i = 0; i < 12; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.style.cssText = `
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #cbd5e0;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        dot.onclick = () => goToCropTopologyMonth(i);
        navDots.appendChild(dot);
    }

    // Assemble the slider
    sliderContainer.appendChild(monthDisplay);
    sliderContainer.appendChild(progressBar);
    sliderContainer.appendChild(controls);
    sliderContainer.appendChild(navDots);

    // Add to map container
    const mapContainer = document.getElementById('map');
    mapContainer.appendChild(sliderContainer);

    // Start with January
    showCropTopologyMonth('January');
    updateCropTopologyDisplay();

    // Add hover effects
    [prevBtn, playPauseBtn, nextBtn].forEach(btn => {
        btn.onmouseover = () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.boxShadow = '0 6px 20px rgba(166, 202, 148, 0.6)';
        };
        btn.onmouseout = () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = '0 4px 15px rgba(166, 202, 148, 0.4)';
        };
        btn.onmousedown = () => {
            btn.style.transform = 'scale(0.95)';
        };
        btn.onmouseup = () => {
            btn.style.transform = 'scale(1.1)';
        };
    });
}

// Hide crop topology slider
function hideCropTopologySlider() {
    const sliderContainer = document.getElementById('crop-topology-slider-container');
    if (sliderContainer) {
        sliderContainer.remove();
    }
    if (cropTopologySliderInterval) {
        clearInterval(cropTopologySliderInterval);
        cropTopologySliderInterval = null;
    }
    currentCropTopologyMonth = 0;
}

// Show specific crop topology month
function showCropTopologyMonth(monthName) {
    try {
        // Hide all crop topology months first
        cropTopologyMonths.forEach(month => {
            hideCropTopologyMonth(month);
        });

        // Show the selected month
        showCropTopologyMonthLayer(monthName);
    } catch (error) {
        console.error('Error showing crop topology month:', monthName, error);
        // Continue playback even if there's an error
    }
}

// Hide a specific crop topology month (set visibility to none)
function hideCropTopologyMonth(monthName) {
    const storageKey = 'crop_' + normalizeLayerKey(monthName);
    if (!loadedLayers[storageKey]) {
        return; // Not loaded yet
    }

    const { layerId } = loadedLayers[storageKey];
    if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', 'none');
    }
}

// Show a specific crop topology month (set visibility to visible)
function showCropTopologyMonthLayer(monthName) {
    const storageKey = 'crop_' + normalizeLayerKey(monthName);
    if (!loadedLayers[storageKey]) {
        // If not loaded yet, add it and set to visible
        addWMSLayerToMap(monthName, true, 'crop');
        return;
    }

    const { layerId } = loadedLayers[storageKey];
    if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', 'visible');
        map.setPaintProperty(layerId, 'raster-opacity', 0.95);
        ensureThematicLayerOrder(layerId);
    }
}

// Toggle crop topology playback
function toggleCropTopologyPlayback() {
    const playPauseBtn = document.getElementById('crop-topology-play-pause');

    if (cropTopologySliderInterval) {
        // Pause
        clearInterval(cropTopologySliderInterval);
        cropTopologySliderInterval = null;
        playPauseBtn.innerHTML = '▶';
    } else {
        // Play
        playPauseBtn.innerHTML = '❚❚';
        cropTopologySliderInterval = setInterval(() => {
            try {
                nextCropTopologyMonth();
            } catch (error) {
                console.error('Error during crop topology playback:', error);
                // Clear interval on error to prevent infinite loop
                clearInterval(cropTopologySliderInterval);
                cropTopologySliderInterval = null;
                playPauseBtn.innerHTML = '▶';
            }
        }, 2000); // Change month every 2 seconds
    }
}

// Previous crop topology month
function prevCropTopologyMonth() {
    currentCropTopologyMonth = (currentCropTopologyMonth - 1 + 12) % 12;
    showCropTopologyMonth(cropTopologyMonths[currentCropTopologyMonth]);
    updateCropTopologyDisplay();

    // Stop playback if user manually navigates
    if (cropTopologySliderInterval) {
        clearInterval(cropTopologySliderInterval);
        cropTopologySliderInterval = null;
        document.getElementById('crop-topology-play-pause').innerHTML = '▶';
    }
}

// Next crop topology month
function nextCropTopologyMonth() {
    currentCropTopologyMonth = (currentCropTopologyMonth + 1) % 12;
    showCropTopologyMonth(cropTopologyMonths[currentCropTopologyMonth]);
    updateCropTopologyDisplay();
}

// Go to specific crop topology month
function goToCropTopologyMonth(index) {
    currentCropTopologyMonth = index;
    showCropTopologyMonth(cropTopologyMonths[currentCropTopologyMonth]);
    updateCropTopologyDisplay();

    // Stop playback if user manually navigates
    if (cropTopologySliderInterval) {
        clearInterval(cropTopologySliderInterval);
        cropTopologySliderInterval = null;
        document.getElementById('crop-topology-play-pause').innerHTML = '▶';
    }
}

// Update crop topology display
function updateCropTopologyDisplay() {
    const monthName = document.getElementById('crop-topology-month-name');
    const seasonBadge = document.getElementById('crop-topology-season-badge');
    const progressFill = document.getElementById('crop-topology-progress-fill');
    const navDots = document.querySelectorAll('#crop-topology-nav-dots .dot');

    if (monthName && seasonBadge && progressFill) {
        // Update month name
        monthName.textContent = cropTopologyMonths[currentCropTopologyMonth].toUpperCase();

        // Update season badge
        const seasons = ['Rabi', 'Rabi', 'Rabi', 'Rabi', 'Kharif', 'Kharif', 'Kharif', 'Kharif', 'Kharif', 'Kharif', 'Rabi', 'Rabi'];
        const season = seasons[currentCropTopologyMonth];
        seasonBadge.textContent = season;

        // Update season badge color
        if (season === 'Kharif') {
            seasonBadge.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
        } else {
            seasonBadge.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        }

        // Update progress bar
        const progress = ((currentCropTopologyMonth + 1) / 12) * 100;
        progressFill.style.width = progress + '%';

        // Update navigation dots
        navDots.forEach((dot, index) => {
            if (index === currentCropTopologyMonth) {
                dot.classList.add('active');
                dot.style.background = 'linear-gradient(135deg, #a6ca94 0%, #8fb885 100%)';
                dot.style.width = '20px';
                dot.style.borderRadius = '10px';
            } else {
                dot.classList.remove('active');
                dot.style.background = '#cbd5e0';
                dot.style.width = '8px';
                dot.style.borderRadius = '50%';
            }
        });

        // Update Legend based on season
        // Clear out existing before applying the new ones
        removeLegendEntry('wheat');
        removeLegendEntry('mustard');
        removeLegendEntry('barley');
        removeLegendEntry('barseem');
        removeLegendEntry('barren');
        removeLegendEntry('builtup');
        removeLegendEntry('forest');
        removeLegendEntry('cotton');
        removeLegendEntry('sugarcane');
        removeLegendEntry('rice');
        removeLegendEntry('maize');
        removeLegendEntry('kharif_barren');
        removeLegendEntry('kharif_forest');

        if (season === 'Rabi') {
            addLegendEntry('wheat', '#0e226e', 'Wheat');
            addLegendEntry('mustard', '#ebebeb', 'Mustard');
            addLegendEntry('barley', '#6f280d', 'Barley');
            addLegendEntry('barseem', '#6bff55', 'Barseem');
            addLegendEntry('barren', '#f9ac3e', 'Barren Land');
            addLegendEntry('builtup', '#a2100f', 'Builtup');
            addLegendEntry('forest', '#2f7322', 'Forest Cover');
        } else if (season === 'Kharif') {
            addLegendEntry('cotton', '#ff0000', 'Cotton');
            addLegendEntry('sugarcane', '#a8a800', 'Sugarcane');
            addLegendEntry('rice', '#00ffc5', 'Rice');
            addLegendEntry('maize', '#df73ff', 'Maize');
            addLegendEntry('kharif_barren', '#ffaa01', 'Barren Land');
            addLegendEntry('kharif_forest', '#00734c', 'Forest');
        }
    }
}

// Toggle precipitation layers (all at once)
function togglePrecipitationLayers(isActive) {
    if (!precipitationWeeks.length) {
        console.warn('No precipitation weeks configured.');
        return;
    }

    if (isActive) {
        preloadAllPrecipitationWeeks();
        showPrecipitationSlider();
        showPrecipitationWeek(precipitationWeeks[currentPrecipitationWeek]);
        createPrecipitationLegend();
    } else {
        hidePrecipitationSlider();
        precipitationWeeks.forEach(weekName => {
            removeLayerFromMap('precip_' + normalizeLayerKey(weekName));
        });
        removePrecipitationLegend();
    }
}

function toggleDroughtIndexLayer(isActive) {
    const layerName = 'Drought Index (May)';
    const storageKey = 'drought_index_may';

    if (isActive) {
        if (!loadedLayers[storageKey]) {
            addWMSLayerToMap(layerName, true, 'drought-index');
        } else {
            const layerInfo = loadedLayers[storageKey];
            if (map.getLayer(layerInfo.layerId)) {
                map.setLayoutProperty(layerInfo.layerId, 'visibility', 'visible');
                map.setPaintProperty(layerInfo.layerId, 'raster-opacity', 1.0);
                ensureDroughtIndexLayerOrder(layerInfo.layerId);
            }
        }

        createDroughtIndexLegend();
    } else {
        removeLayerFromMap(storageKey);
        removeDroughtIndexLegend();
    }
}

function toggleTemperatureLayer(isActive) {
    const layerName = 'Temperature (May)';
    const storageKey = 'temperature_' + normalizeLayerKey(layerName);

    if (isActive) {
        if (!loadedLayers[storageKey]) {
            addWMSLayerToMap(layerName, true, 'temperature');
        } else {
            const layerInfo = loadedLayers[storageKey];
            if (map.getLayer(layerInfo.layerId)) {
                map.setLayoutProperty(layerInfo.layerId, 'visibility', 'visible');
                map.setPaintProperty(layerInfo.layerId, 'raster-opacity', 1.0);
                ensureThematicLayerOrder(layerInfo.layerId);
            }
        }
    } else {
        removeLayerFromMap(storageKey);
    }
}

function handleTemperatureToggle(isChecked) {
    const tempBtn = document.querySelector('.map-toggle-btn-temperature');
    if (tempBtn) {
        tempBtn.classList.toggle('active', isChecked);
    }

    toggleTemperatureLayer(isChecked);
}

function ensureDroughtIndexLayerOrder(layerId) {
    if (!map.getLayer(layerId)) {
        return;
    }

    const boundaryLayers = [
        'DistrictBoundary',
        'districtBoundary',
        'districtBoundary_label',
        'DistrictBoundaryHighlight',
        'TehsilBoundaryLine',
        'TehsilBoundary',
        'TehsilBoundaryHighlight',
        'tehsilBoundary_label'
    ];

    const boundaryAnchor = boundaryLayers.find(boundaryLayerId => map.getLayer(boundaryLayerId));

    if (boundaryAnchor) {
        map.moveLayer(layerId, boundaryAnchor);
    } else {
        map.moveLayer(layerId);
    }
}

function preloadAllPrecipitationWeeks() {
    precipitationWeeks.forEach(weekName => {
        if (!loadedLayers['precip_' + normalizeLayerKey(weekName)]) {
            addWMSLayerToMap(weekName, false, 'precipitation');
        }
    });
}

function showPrecipitationSlider() {
    hidePrecipitationSlider();

    if (!precipitationWeeks.length) {
        return;
    }

    const sliderContainer = document.createElement('div');
    sliderContainer.id = 'precipitation-slider-container';
    sliderContainer.style.cssText = `
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border-radius: 16px;
        padding: 8px 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(166, 202, 148, 0.7);
        z-index: 1000;
        max-width: 480px;
        width: 82%;
        font-family: 'Segoe UI', sans-serif;
        animation: slideUp 0.5s ease-out;
    `;

    const weekDisplay = document.createElement('div');
    weekDisplay.className = 'month-display';
    weekDisplay.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 6px;
    `;

    const weekName = document.createElement('div');
    weekName.id = 'precipitation-week-name';
    weekName.className = 'month-name';
    weekName.textContent = precipitationWeeks[0].toUpperCase();
    weekName.style.cssText = `
        font-size: 1.5rem;
        font-weight: 700;
        color: #2d3748;
        text-transform: uppercase;
        letter-spacing: 1px;
    `;

    const monthBadge = document.createElement('span');
    monthBadge.id = 'precipitation-month-badge';
    monthBadge.className = 'season-badge';
    monthBadge.textContent = 'APRIL';
    monthBadge.style.cssText = `
        display: inline-block;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.65rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background: linear-gradient(135deg, #4f8dd8 0%, #2d5fa8 100%);
        color: white;
    `;

    weekDisplay.appendChild(weekName);
    weekDisplay.appendChild(monthBadge);

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        width: 100%;
        height: 5px;
        background: #e2e8f0;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 8px;
    `;

    const progressFill = document.createElement('div');
    progressFill.id = 'precipitation-progress-fill';
    progressFill.className = 'progress-fill';
    progressFill.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #4f8dd8 0%, #2d5fa8 100%);
        border-radius: 6px;
        transition: width 0.3s ease;
        width: ${(1 / precipitationWeeks.length) * 100}%;
    `;

    progressBar.appendChild(progressFill);

    const controls = document.createElement('div');
    controls.className = 'controls';
    controls.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    `;

    const prevBtn = document.createElement('button');
    prevBtn.className = 'control-btn';
    prevBtn.innerHTML = '‹';
    prevBtn.setAttribute('aria-label', 'Previous week');
    prevBtn.style.cssText = `
        background: linear-gradient(135deg, #4f8dd8 0%, #2d5fa8 100%);
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(79, 141, 216, 0.45);
    `;
    prevBtn.onclick = prevPrecipitationWeek;

    const playPauseBtn = document.createElement('button');
    playPauseBtn.id = 'precipitation-play-pause';
    playPauseBtn.className = 'control-btn play-pause-btn';
    playPauseBtn.innerHTML = '▶';
    playPauseBtn.setAttribute('aria-label', 'Play/Pause');
    playPauseBtn.style.cssText = `
        background: linear-gradient(135deg, #4f8dd8 0%, #2d5fa8 100%);
        color: white;
        border: none;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(79, 141, 216, 0.45);
    `;
    playPauseBtn.onclick = togglePrecipitationPlayback;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'control-btn';
    nextBtn.innerHTML = '›';
    nextBtn.setAttribute('aria-label', 'Next week');
    nextBtn.style.cssText = `
        background: linear-gradient(135deg, #4f8dd8 0%, #2d5fa8 100%);
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(79, 141, 216, 0.45);
    `;
    nextBtn.onclick = nextPrecipitationWeek;

    controls.appendChild(prevBtn);
    controls.appendChild(playPauseBtn);
    controls.appendChild(nextBtn);

    const navDots = document.createElement('div');
    navDots.id = 'precipitation-nav-dots';
    navDots.className = 'nav-dots';
    navDots.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 4px;
        margin-top: 8px;
    `;

    for (let i = 0; i < precipitationWeeks.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.style.cssText = `
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #cbd5e0;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        dot.onclick = () => goToPrecipitationWeek(i);
        navDots.appendChild(dot);
    }

    sliderContainer.appendChild(weekDisplay);
    sliderContainer.appendChild(progressBar);
    sliderContainer.appendChild(controls);
    sliderContainer.appendChild(navDots);

    const mapContainer = document.getElementById('map');
    mapContainer.appendChild(sliderContainer);

    updatePrecipitationDisplay();

    [prevBtn, playPauseBtn, nextBtn].forEach(btn => {
        btn.onmouseover = () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.boxShadow = '0 6px 20px rgba(79, 141, 216, 0.55)';
        };
        btn.onmouseout = () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = '0 2px 8px rgba(79, 141, 216, 0.45)';
        };
        btn.onmousedown = () => {
            btn.style.transform = 'scale(0.95)';
        };
        btn.onmouseup = () => {
            btn.style.transform = 'scale(1.1)';
        };
    });
}

function hidePrecipitationSlider() {
    const sliderContainer = document.getElementById('precipitation-slider-container');
    if (sliderContainer) {
        sliderContainer.remove();
    }

    if (precipitationSliderInterval) {
        clearInterval(precipitationSliderInterval);
        precipitationSliderInterval = null;
    }

    currentPrecipitationWeek = 0;
}

function showPrecipitationWeek(weekName) {
    try {
        precipitationWeeks.forEach(week => {
            hidePrecipitationWeek(week);
        });

        showPrecipitationWeekLayer(weekName);
    } catch (error) {
        console.error('Error showing precipitation week:', weekName, error);
    }
}

function hidePrecipitationWeek(weekName) {
    const storageKey = 'precip_' + normalizeLayerKey(weekName);
    if (!loadedLayers[storageKey]) {
        return;
    }

    const { layerId } = loadedLayers[storageKey];
    if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', 'none');
    }
}

function showPrecipitationWeekLayer(weekName) {
    const storageKey = 'precip_' + normalizeLayerKey(weekName);
    if (!loadedLayers[storageKey]) {
        addWMSLayerToMap(weekName, true, 'precipitation');
        return;
    }

    const { layerId } = loadedLayers[storageKey];
    if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', 'visible');
        map.setPaintProperty(layerId, 'raster-opacity', 1.0);
        ensurePrecipitationLayerOrder();
    }
}

function togglePrecipitationPlayback() {
    const playPauseBtn = document.getElementById('precipitation-play-pause');

    if (precipitationSliderInterval) {
        clearInterval(precipitationSliderInterval);
        precipitationSliderInterval = null;
        if (playPauseBtn) playPauseBtn.innerHTML = '▶';
    } else {
        if (playPauseBtn) playPauseBtn.innerHTML = '❚❚';
        precipitationSliderInterval = setInterval(() => {
            try {
                nextPrecipitationWeek();
            } catch (error) {
                console.error('Error during precipitation playback:', error);
                clearInterval(precipitationSliderInterval);
                precipitationSliderInterval = null;
                if (playPauseBtn) playPauseBtn.innerHTML = '▶';
            }
        }, 2000);
    }
}

function prevPrecipitationWeek() {
    currentPrecipitationWeek = (currentPrecipitationWeek - 1 + precipitationWeeks.length) % precipitationWeeks.length;
    showPrecipitationWeek(precipitationWeeks[currentPrecipitationWeek]);
    updatePrecipitationDisplay();

    if (precipitationSliderInterval) {
        clearInterval(precipitationSliderInterval);
        precipitationSliderInterval = null;
        const playPauseBtn = document.getElementById('precipitation-play-pause');
        if (playPauseBtn) playPauseBtn.innerHTML = '▶';
    }
}

function nextPrecipitationWeek() {
    currentPrecipitationWeek = (currentPrecipitationWeek + 1) % precipitationWeeks.length;
    showPrecipitationWeek(precipitationWeeks[currentPrecipitationWeek]);
    updatePrecipitationDisplay();
}

function goToPrecipitationWeek(index) {
    currentPrecipitationWeek = index;
    showPrecipitationWeek(precipitationWeeks[currentPrecipitationWeek]);
    updatePrecipitationDisplay();

    if (precipitationSliderInterval) {
        clearInterval(precipitationSliderInterval);
        precipitationSliderInterval = null;
        const playPauseBtn = document.getElementById('precipitation-play-pause');
        if (playPauseBtn) playPauseBtn.innerHTML = '▶';
    }
}

function updatePrecipitationDisplay() {
    const weekName = document.getElementById('precipitation-week-name');
    const monthBadge = document.getElementById('precipitation-month-badge');
    const progressFill = document.getElementById('precipitation-progress-fill');
    const navDots = document.querySelectorAll('#precipitation-nav-dots .dot');

    if (!weekName || !monthBadge || !progressFill) {
        return;
    }

    const label = precipitationWeeks[currentPrecipitationWeek] || '';
    weekName.textContent = label.toUpperCase();

    const monthName = label.split(' ')[0] || '';
    monthBadge.textContent = monthName.toUpperCase();

    const progress = ((currentPrecipitationWeek + 1) / precipitationWeeks.length) * 100;
    progressFill.style.width = progress + '%';

    navDots.forEach((dot, index) => {
        if (index === currentPrecipitationWeek) {
            dot.classList.add('active');
            dot.style.background = 'linear-gradient(135deg, #4f8dd8 0%, #2d5fa8 100%)';
            dot.style.width = '20px';
            dot.style.borderRadius = '10px';
        } else {
            dot.classList.remove('active');
            dot.style.background = '#cbd5e0';
            dot.style.width = '8px';
            dot.style.borderRadius = '50%';
        }
    });
}

// Add WMS layer to map (for vegetation and crop topology months)
function addWMSLayerToMap(layerName, visible = false, layerType = 'vegetation') {
    if (layerType === 'crop-classification') {
        const cropColors = {
            'Wheat': '#1702fa',
            'Cotton': '#A70084',
            'Maize': '#FFFE03',
            'Rice': '#267300',
            'Sugarcane': '#E54C00'
        };
        const key = 'crop_class_' + layerName.toLowerCase();
        if (visible) {
            addLegendEntry(key, cropColors[layerName] || '#000000', layerName);
        } else {
            removeLegendEntry(key);
        }
    }

    // Check both Vegetation Cover and Crop Topology sections
    let wmsUrl;
    if (layerType === 'vegetation' && layerUrls['Vegetation Cover'] && layerUrls['Vegetation Cover'][layerName]) {
        wmsUrl = layerUrls['Vegetation Cover'][layerName];
    } else if (layerType === 'crop' && layerUrls['Crop Topology'] && layerUrls['Crop Topology'][layerName]) {
        wmsUrl = layerUrls['Crop Topology'][layerName];
    } else if (layerType === 'flood' && layerUrls['Flood Layer'] && layerUrls['Flood Layer'][layerName]) {
        wmsUrl = layerUrls['Flood Layer'][layerName].url;
    } else if (layerType === 'crop-stress') {
        wmsUrl = layerUrls[layerName];
    } else if (layerType === 'cropping-zones') {
        wmsUrl = layerUrls['Cropping Zones'][layerName];
    } else if (layerType === 'precipitation' && layerUrls['Precipitation'] && layerUrls['Precipitation'][layerName]) {
        wmsUrl = layerUrls['Precipitation'][layerName];
    } else if (layerType === 'temperature' && layerUrls[layerName]) {
        wmsUrl = layerUrls[layerName];
    } else if (layerType === 'precipitation') {
        wmsUrl = layerUrls[layerName];
    } else if (layerType === 'drought-index' && layerUrls[layerName]) {
        wmsUrl = layerUrls[layerName];
    } else if (layerType === 'provincial-data') {
        wmsUrl = layerUrls['Provincial Data'][layerName];
    } else if (layerType === 'crop-classification' && layerUrls['Crop Classification'] && layerUrls['Crop Classification'][layerName]) {
        wmsUrl = layerUrls['Crop Classification'][layerName];
    } else {
        console.error('WMS Layer URL not found for:', layerName, 'type:', layerType);
        return;
    }

    const prefix = layerType === 'vegetation' ? 'veg_' : layerType === 'crop' ? 'crop_' : layerType === 'flood' ? 'flood_' : layerType === 'crop-stress' ? 'crop-stress_' : layerType === 'cropping-zones' ? 'cropping-zones_' : layerType === 'precipitation' ? 'precip_' : layerType === 'drought-index' ? '' : layerType === 'provincial-data' ? 'provincial_' : layerType === 'temperature' ? 'temperature_' : layerType === 'crop-classification' ? 'crop_class_' : 'default_';
    const normalizedName = normalizeLayerKey(layerName);
    const sourceId = prefix + normalizedName + '_wms';
    const layerId = sourceId + '_layer';
    const storageKey = prefix + normalizedName;

    try {
        // Check if source already exists
        if (map.getSource(sourceId)) {
            if (map.getLayer(layerId)) {
                map.setLayoutProperty(layerId, 'visibility', visible ? 'visible' : 'none');
                if (layerType === 'precipitation') {
                    map.setPaintProperty(layerId, 'raster-opacity', 1.0);
                } else if (layerType === 'provincial-data') {
                    map.setPaintProperty(layerId, 'raster-opacity', AFFECTED_AREA_MAX_OPACITY);
                } else if (layerType === 'vegetation' || layerType === 'crop') {
                    map.setPaintProperty(layerId, 'raster-opacity', 0.95);
                } else if (layerType === 'drought-index') {
                    map.setPaintProperty(layerId, 'raster-opacity', 1.0);
                } else if (layerType === 'temperature') {
                    map.setPaintProperty(layerId, 'raster-opacity', 1.0);
                } else if (layerType === 'crop-classification') {
                    map.setPaintProperty(layerId, 'raster-opacity', 0.95);
                }

                if (visible && (layerType === 'vegetation' || layerType === 'crop' || layerType === 'crop-classification')) {
                    ensureThematicLayerOrder(layerId);
                } else if (visible && layerType === 'drought-index') {
                    ensureDroughtIndexLayerOrder(layerId);
                    createDroughtIndexLegend();
                } else if (visible && layerType === 'temperature') {
                    ensureThematicLayerOrder(layerId);
                }
            }
            if (!loadedLayers[storageKey]) {
                loadedLayers[storageKey] = { sourceId, layerId };
            }
            if (visible) {
                ensurePrecipitationLayerOrder();
            }
            console.log('Source already exists:', sourceId);
            return;
        }

        // Add WMS source
        map.addSource(sourceId, {
            type: 'raster',
            tiles: [wmsUrl],
            tileSize: 256
        });

        // Add raster layer
        map.addLayer({
            id: layerId,
            type: 'raster',
            source: sourceId,
            paint: {
                'raster-opacity': layerType === 'precipitation' ? 1.0 : (layerType === 'provincial-data' ? AFFECTED_AREA_MAX_OPACITY : ((layerType === 'vegetation' || layerType === 'crop' || layerType === 'crop-classification') ? 0.95 : 1.0))
            },
            layout: {
                visibility: visible ? 'visible' : 'none'
            }
        });

        if (visible && (layerType === 'vegetation' || layerType === 'crop' || layerType === 'crop-classification')) {
            ensureThematicLayerOrder(layerId);
        } else if (visible && layerType === 'drought-index') {
            ensureDroughtIndexLayerOrder(layerId);
            createDroughtIndexLegend();
        } else if (visible && layerType === 'temperature') {
            ensureThematicLayerOrder(layerId);
        }

        // Move boundary layers to top to ensure they appear above raster layers
        const boundaryLayers = [
            'DistrictBoundary',
            'districtBoundary',
            'districtBoundary_label',
            'DistrictBoundaryHighlight',
            'TehsilBoundaryLine',
            'TehsilBoundary',
            'TehsilBoundaryHighlight',
            'tehsilBoundary_label'
        ];

        boundaryLayers.forEach(boundaryLayerId => {
            if (map.getLayer(boundaryLayerId)) {
                map.moveLayer(boundaryLayerId);
            }
        });

        ensurePrecipitationLayerOrder();

        // Mark as loaded
        loadedLayers[storageKey] = { sourceId, layerId };

        console.log('WMS Layer added:', layerName, visible ? '(visible)' : '(hidden)', 'type:', layerType);
    } catch (error) {
        console.error('Error adding WMS layer:', layerName, error);
        // Don't throw error - allow playback to continue
    }
}

// Add TMS layer to map (for flood layers)
function addTMSLayerToMap(year, layerData) {
    const sourceId = 'flood_' + year + '_tms';
    const layerId = 'flood_' + year + '_layer';
    const storageKey = 'flood_' + year;

    try {
        // Check if source already exists
        if (map.getSource(sourceId)) {
            console.log('Source already exists:', sourceId);
            return;
        }

        // Add TMS source
        map.addSource(sourceId, {
            type: 'vector',
            scheme: 'tms',
            tiles: [layerData.url]
        });

        // Add fill layer for flood extent
        map.addLayer({
            id: layerId,
            type: 'fill',
            source: sourceId,
            'source-layer': layerData.layerId,
            paint: {
                'fill-color': 'rgba(0, 0, 255, 0.5)', // Semi-transparent blue for flood
                'fill-opacity': 0.7
            }
        });

        // Move boundary layers to top to ensure they appear above flood layers
        const boundaryLayers = [
            'DistrictBoundary',
            'districtBoundary',
            'districtBoundary_label',
            'DistrictBoundaryHighlight',
            'TehsilBoundaryLine',
            'TehsilBoundary',
            'TehsilBoundaryHighlight',
            'tehsilBoundary_label'
        ];

        boundaryLayers.forEach(boundaryLayerId => {
            if (map.getLayer(boundaryLayerId)) {
                map.moveLayer(boundaryLayerId);
            }
        });

        // Mark as loaded
        loadedLayers[storageKey] = { sourceId, layerId };

        console.log('TMS Flood Layer added:', year);
    } catch (error) {
        console.error('Error adding TMS flood layer:', year, error);
    }
}

// Mapbox Access Token - Replace with your own token
mapboxgl.accessToken = CONFIG.MAPBOX_TOKEN;

// Initialize Map
let map;

// Basemap Control Class
class BasemapControl {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

        // Create button with layers icon
        this._button = document.createElement('button');
        this._button.className = 'basemap-button';
        this._button.type = 'button';
        this._button.title = 'Change Basemap';
        this._button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        this._button.style.cssText = `
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #666;
            font-size: 16px;
            transition: all 0.2s ease;
        `;

        this._container.appendChild(this._button);

        // Create popup container
        this._popup = document.createElement('div');
        this._popup.className = 'basemap-popup';
        this._popup.style.cssText = `
            position: absolute;
            top: 1px;
            right: 40px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(166, 202, 148, 0.7);
            border-radius: 8px;
            padding: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            display: none;
            z-index: 1000;
            min-width: 180px;
            font-family: 'Segoe UI', sans-serif;
        `;

        // Basemap options
        const basemaps = [
            { name: 'Satellite Streets', style: 'mapbox://styles/mapbox/satellite-streets-v12', icon: '🛰️' },
            { name: 'Streets', style: 'mapbox://styles/mapbox/streets-v12', icon: '🗺️' },
            { name: 'Satellite', style: 'mapbox://styles/mapbox/satellite-v9', icon: '🌍' },
            { name: 'Outdoors', style: 'mapbox://styles/mapbox/outdoors-v12', icon: '🏔️' },
            { name: 'Light', style: 'mapbox://styles/mapbox/light-v11', icon: '☀️' },
            { name: 'Dark', style: 'mapbox://styles/mapbox/dark-v11', icon: '🌙' }
        ];

        basemaps.forEach(basemap => {
            const option = document.createElement('div');
            option.className = 'basemap-option';
            option.dataset.style = basemap.style;
            option.style.cssText = `
                padding: 8px 12px;
                cursor: pointer;
                border-radius: 4px;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: background-color 0.2s ease;
                font-size: 14px;
                color: #333;
            `;

            if (basemap.style === 'mapbox://styles/mapbox/satellite-streets-v12') {
                option.style.backgroundColor = 'rgba(166, 202, 148, 0.2)';
                option.style.fontWeight = '600';
            }

            option.innerHTML = `
                <span style="font-size: 16px;">${basemap.icon}</span>
                <span>${basemap.name}</span>
            `;

            option.addEventListener('mouseenter', () => {
                option.style.backgroundColor = 'rgba(166, 202, 148, 0.1)';
            });

            option.addEventListener('mouseleave', () => {
                if (option.dataset.style !== 'mapbox://styles/mapbox/satellite-streets-v12') {
                    option.style.backgroundColor = 'transparent';
                } else {
                    option.style.backgroundColor = 'rgba(166, 202, 148, 0.2)';
                }
            });

            option.addEventListener('click', () => {
                this.selectBasemap(basemap.style);
                this.hidePopup();
            });

            this._popup.appendChild(option);
        });

        this._container.appendChild(this._popup);

        // Event listeners
        this._button.addEventListener('click', () => {
            if (this._popup.style.display === 'none') {
                this.showPopup();
            } else {
                this.hidePopup();
            }
        });

        // Close popup when clicking outside
        document.addEventListener('click', (e) => {
            if (!this._container.contains(e.target)) {
                this.hidePopup();
            }
        });

        return this._container;
    }

    showPopup() {
        this._popup.style.display = 'block';
        this._button.style.backgroundColor = 'rgba(166, 202, 148, 0.2)';
    }

    hidePopup() {
        this._popup.style.display = 'none';
        this._button.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }

    selectBasemap(style) {
        // Update active option styling
        const options = this._popup.querySelectorAll('.basemap-option');
        options.forEach(option => {
            if (option.dataset.style === style) {
                option.style.backgroundColor = 'rgba(166, 202, 148, 0.2)';
                option.style.fontWeight = '600';
            } else {
                option.style.backgroundColor = 'transparent';
                option.style.fontWeight = 'normal';
            }
        });

        // Store current layer states before style change
        const currentLayers = {};
        Object.keys(loadedLayers).forEach(key => {
            const layerInfo = loadedLayers[key];
            if (layerInfo && this._map.getLayer(layerInfo.layerId)) {
                currentLayers[key] = {
                    ...layerInfo,
                    visible: this._map.getLayoutProperty(layerInfo.layerId, 'visibility') !== 'none'
                };
            }
        });

        // Change style - this will remove all layers
        this._map.setStyle(style);

        // Re-add all layers after style change
        this._map.once('style.load', () => {
            // Re-add all previously loaded layers
            Object.keys(currentLayers).forEach(key => {
                const layerInfo = currentLayers[key];
                const layerName = key.replace(/^(veg_|crop_|flood_|crop-stress_|cropping-zones_|provincial_|precip_|crop-highlight_)/, '');
                const normalizedKey = key.replace(/^(veg_|crop_|flood_|crop-stress_|cropping-zones_|provincial_|precip_|crop-highlight_)/, '');

                // Determine layer type from key prefix
                if (key.startsWith('veg_')) {
                    const matchedName = vegetationMonths.find(month => normalizeLayerKey(month) === normalizedKey);
                    if (matchedName) {
                        addWMSLayerToMap(matchedName, layerInfo.visible, 'vegetation');
                    }
                } else if (key.startsWith('crop_')) {
                    const matchedName = cropTopologyMonths.find(month => normalizeLayerKey(month) === normalizedKey);
                    if (matchedName) {
                        addWMSLayerToMap(matchedName, layerInfo.visible, 'crop');
                    }
                } else if (key.startsWith('flood_')) {
                    // For flood layers, we need the original data
                    const floodData = layerUrls['Flood Layer'][layerName];
                    if (floodData) {
                        if (floodData.type === 'tms') {
                            addTMSLayerToMap(layerName, floodData);
                            if (layerInfo.visible) {
                                this._map.setLayoutProperty(layerInfo.layerId, 'visibility', 'visible');
                            }
                        } else {
                            addWMSLayerToMap(layerName, layerInfo.visible, 'flood');
                        }
                    }
                } else if (key.startsWith('crop-stress_')) {
                    const cropStressName = Object.keys(layerUrls).find(name => normalizeLayerKey(name) === normalizedKey);
                    if (cropStressName) {
                        addWMSLayerToMap(cropStressName, layerInfo.visible, 'crop-stress');
                    }
                } else if (key.startsWith('cropping-zones_')) {
                    const zoneNames = Object.keys(layerUrls['Cropping Zones'] || {});
                    const matchedName = zoneNames.find(name => normalizeLayerKey(name) === normalizedKey);
                    if (matchedName) {
                        addWMSLayerToMap(matchedName, layerInfo.visible, 'cropping-zones');
                    }
                } else if (key.startsWith('provincial_')) {
                    const provincialNames = Object.keys(layerUrls['Affected Areas'] || {});
                    const normalized = key.replace(/^provincial_/, '');
                    const matchedName = provincialNames.find(name => normalizeLayerKey(name) === normalized);
                    if (matchedName) {
                        addAffectedAreaLayer(matchedName, layerInfo.visible);
                    }
                } else if (key.startsWith('crop-highlight_')) {
                    const crops = ['Wheat', 'Rice', 'Cotton', 'Maize', 'Sugarcane'];
                    const matchedName = crops.find(name => normalizeLayerKey(name) === normalizedKey);
                    if (matchedName) {
                        handleCropHighlightToggle(matchedName, layerInfo.visible);
                    }
                } else if (key.startsWith('precip_')) {
                    const precipitationNames = Object.keys(layerUrls['Precipitation'] || {});
                    const normalized = key.replace(/^precip_/, '');
                    const matchedName = precipitationNames.find(name => normalizeLayerKey(name) === normalized);
                    if (matchedName) {
                        addWMSLayerToMap(matchedName, layerInfo.visible, 'precipitation');
                    }
                } else if (key.startsWith('temperature_')) {
                    const tempKey = 'Temperature (May)';
                    addWMSLayerToMap(tempKey, layerInfo.visible, 'temperature');
                } else if (key.startsWith('drought_index_')) {
                    const droughtKey = 'Drought Index (May)';
                    addWMSLayerToMap(droughtKey, layerInfo.visible, 'drought-index');
                } else {
                    // Handle other layer types (boundaries, godowns, etc.)
                    if (layerUrls[layerName]) {
                        addLayerToMap(layerName);
                        if (!layerInfo.visible) {
                            this._map.setLayoutProperty(layerInfo.layerId, 'visibility', 'none');
                        }
                    }
                }
            });

            console.log('Basemap changed successfully. All layers preserved.');
        });
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

// District blinking: start/stop functions and control
function startDistrictBlinking() {
    if (districtBlinkState.isBlinking) return;

    // Require selected districts
    if (!selectedDistrict || selectedDistrict.length === 0) {
        // Nothing selected - do not start
        return;
    }

    districtBlinkState.isBlinking = true;

    const animate = (timestamp) => {
        if (!districtBlinkState.isBlinking) {
            districtBlinkState.animationFrameId = null;
            return;
        }

        // If highlight layer missing or no selected districts, stop
        if (!map || !map.getLayer('DistrictBoundaryHighlight') || selectedDistrict.length === 0) {
            stopDistrictBlinking();
            return;
        }

        // Sine-wave opacity between 0.15 and 0.85
        const period = 800; // ms
        const wave = (Math.sin((timestamp % period) / period * Math.PI * 2 - Math.PI / 2) + 1) / 2;
        const opacity = 0.15 + (0.7 * wave);

        try {
            map.setPaintProperty('DistrictBoundaryHighlight', 'fill-opacity', opacity);
        } catch (e) {
            // If setting paint fails, stop animation
            stopDistrictBlinking();
            return;
        }

        districtBlinkState.animationFrameId = requestAnimationFrame(animate);
    };

    districtBlinkState.animationFrameId = requestAnimationFrame(animate);
}

function stopDistrictBlinking() {
    if (!districtBlinkState.isBlinking) return;
    districtBlinkState.isBlinking = false;
    if (districtBlinkState.animationFrameId !== null) {
        cancelAnimationFrame(districtBlinkState.animationFrameId);
        districtBlinkState.animationFrameId = null;
    }

    // Reset to default highlight opacity if layer exists
    if (map && map.getLayer('DistrictBoundaryHighlight')) {
        try {
            map.setPaintProperty('DistrictBoundaryHighlight', 'fill-opacity', 0.5);
        } catch (e) {
            // ignore
        }
    }
}

class DistrictBlinkControl {
    onAdd(mapInstance) {
        this._map = mapInstance;
        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

        const button = document.createElement('button');
        button.className = 'mapboxgl-ctrl-icon district-blink-btn';
        button.type = 'button';
        button.title = 'Toggle district blink';
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8" fill="red"/></svg>';

        button.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (districtBlinkState.isBlinking) {
                stopDistrictBlinking();
                button.classList.remove('active');
            } else {
                // Ensure layers are present
                ensureDistrictBoundaryLayers().then(() => {
                    // If nothing selected, try to select none - do nothing
                    if (!selectedDistrict || selectedDistrict.length === 0) {
                        // No selection - briefly flash to indicate no selected districts
                        return;
                    }
                    startDistrictBlinking();
                    button.classList.add('active');
                }).catch(() => {
                    // ignore
                });
            }
        };

        this._container.appendChild(button);
        return this._container;
    }

    onRemove() {
        if (this._container && this._container.parentNode) this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

// Hotspot overlay state and control
const hotspotState = {
    visible: false,
    imgElement: null
};

function showHotspotOverlay() {
    if (!document) return;
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    let img = document.getElementById('hotspot-overlay');
    if (!img) {
        img = document.createElement('img');
        img.id = 'hotspot-overlay';
        // Path relative to the app root
        img.src = 'Data/Hotspot.png';
        img.style.position = 'absolute';
        img.style.bottom = '12px';
        img.style.right = '12px';
        img.style.maxWidth = '1040px';
        img.style.maxHeight = '1040px';
        img.style.zIndex = '1201';
        img.style.pointerEvents = 'none';
        img.alt = 'Hotspot';
        mapContainer.appendChild(img);
        hotspotState.imgElement = img;
    } else {
        img.style.display = 'block';
        hotspotState.imgElement = img;
    }

    hotspotState.visible = true;
    img.style.zIndex = '1201';
    updateHotspotOverlayPosition();
}

function hideHotspotOverlay() {
    const img = document.getElementById('hotspot-overlay');
    if (img) {
        img.style.display = 'none';
    }
    hotspotState.visible = false;
}

function updateHotspotOverlayPosition() {
    const img = document.getElementById('hotspot-overlay');
    if (!img || img.style.display === 'none') {
        return;
    }

    const legend = document.getElementById('map-legend');
    const hasLegend = !!(legend && legend.style.display !== 'none' && legend.querySelectorAll('.legend-item').length > 0);
    const bottomOffset = hasLegend ? (legend.offsetHeight + 18) : 12;

    img.style.bottom = bottomOffset + 'px';
    img.style.right = '12px';
    img.style.zIndex = '1201';
}

class HotspotControl {
    onAdd(mapInstance) {
        this._map = mapInstance;
        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

        const button = document.createElement('button');
        button.className = 'mapboxgl-ctrl-icon hotspot-btn';
        button.type = 'button';
        button.title = 'Toggle hotspot overlay';
        // simple svg icon
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#ff5722"/></svg>';

        button.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (hotspotState.visible) {
                hideHotspotOverlay();
                button.classList.remove('active');
            } else {
                showHotspotOverlay();
                button.classList.add('active');
            }
        };

        this._container.appendChild(button);
        return this._container;
    }

    onRemove() {
        if (this._container && this._container.parentNode) this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

// May-Aug overlay state and control - Now used for Heatwave Impact Calculator
const mayAugState = {
    visible: false,
    element: null
};

function showMayAugOverlay() {
    if (!document) return;
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    let container = document.getElementById('mayaug-overlay');
    if (!container) {
        container = document.createElement('div');
        container.id = 'mayaug-overlay';
        container.style.position = 'absolute';
        container.style.top = '50%'; // Vertically centered
        container.style.transform = 'translateY(-50%)';
        container.style.right = '40px'; // Placed correctly according to image
        container.style.width = '370px'; // Wider to accommodate even larger fonts
        container.style.zIndex = '1202';
        container.style.background = '#000000'; // Black background
        container.style.color = '#fff';
        container.style.border = '2px solid #d32f2f'; // Give it a red outline
        container.style.borderRadius = '8px';
        container.style.fontFamily = "'Rajdhani', sans-serif";
        container.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
        container.style.pointerEvents = 'auto'; // allow interaction if any
        container.style.overflow = 'hidden';

        // Add a pulsing style for the 10-15% text and load Rajdhani font
        if (!document.getElementById('impact-calc-style')) {
            const style = document.createElement('style');
            style.id = 'impact-calc-style';
            style.innerHTML = `
                @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');
                
                @keyframes impactPulse {
                    0% { opacity: 1; transform: scale(1); text-shadow: 0 0 10px #ff3333; }
                    50% { opacity: 0.7; transform: scale(1.05); text-shadow: 0 0 20px #ff3333; }
                    100% { opacity: 1; transform: scale(1); text-shadow: 0 0 10px #ff3333; }
                }
                .impact-blinking-text {
                    animation: impactPulse 1.2s infinite;
                    color: #fff;
                    font-weight: 700;
                    font-size: 38px;
                    padding: 5px;
                    display: inline-block;
                    margin-top: 5px;
                }
            `;
            document.head.appendChild(style);
        }

        container.innerHTML = `
            <div style="background: rgba(211, 47, 47, 0.8); color: white; text-align: center; padding: 12px; font-size: 30px; font-weight: 700; border-bottom: 2px solid #b71c1c; text-transform: uppercase;">
                IMPACT CALCULATOR
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 20px;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background: rgba(128, 128, 128, 0.3);">
                    <td style="padding: 12px; font-weight: 600; color: #4caf50; width: 35%; border-right: 1px solid rgba(255,255,255,0.2);">Crop</td>
                    <td style="padding: 12px;">Cotton, Rice, Sugarcane, Mango, Citrus</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background: rgba(128, 128, 128, 0.3);">
                    <td style="padding: 12px; font-weight: 600; color: #4caf50; border-right: 1px solid rgba(255,255,255,0.2);">Stage</td>
                    <td style="padding: 12px;">Sowing, Nursery / Fruit maturation</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); background: rgba(128, 128, 128, 0.3);">
                    <td style="padding: 12px; font-weight: 600; color: #4caf50; border-right: 1px solid rgba(255,255,255,0.2);">Impact</td>
                    <td style="padding: 12px;">Poor germination, seedling stress, fruit drop</td>
                </tr>
            </table>
            <div style="padding: 20px; text-align: center; border-top: 2px solid rgba(255,255,255,0.1); background: rgba(128, 128, 128, 0.5);">
                <div style="font-weight: 700; margin-bottom: 5px; color: #ff9800; text-transform: uppercase; font-size: 24px;">Estimated Loss (Crop)</div>
                <div class="impact-blinking-text">10 - 15%</div>
            </div>
        `;
        mapContainer.appendChild(container);
        mayAugState.element = container;
    } else {
        container.style.display = 'block';
        mayAugState.element = container;
    }

    mayAugState.visible = true;
    container.style.zIndex = '1202';
    updateMayAugOverlayPosition();
}

function hideMayAugOverlay() {
    const img = document.getElementById('mayaug-overlay');
    if (img) {
        img.style.display = 'none';
    }
    mayAugState.visible = false;
}

function updateMayAugOverlayPosition() {
    const img = document.getElementById('mayaug-overlay');
    if (!img || img.style.display === 'none') {
        return;
    }

    // Centered vertically on container
    img.style.top = '50%';
    img.style.transform = 'translateY(-50%)';
    img.style.right = '40px';
    img.style.zIndex = '1202';
}

// Wheat Production Impact Widgets State & control
const wheatImpactState = {
    visible: false,
    element: null
};

// Config dataset containing table metrics and chart stats for each crop
const cropData = {
    Wheat: {
        title: "🌾 Wheat Production · Climate Impact",
        prodUnit: "M t",
        lossLabel: "Loss Due to Disaster",
        prodLabel: "Production",
        chartTitle: "Wheat Yield: Actual vs Potential",
        chartYTitle: "Wheat Yield (M tonnes)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 24,
        gridMax: 33,
        gridLabels: [24, 27, 30, 33],
        headers: {
            year: "Year",
            area: "Area<br><span style=\"font-size:11px;opacity:.7\">(M/Ha)</span>",
            prod: "Prod.<br><span style=\"font-size:11px;opacity:.7\">(M t)</span>",
            yield: "Avg Yield<br><span style=\"font-size:11px;opacity:.7\">(t/Ha)</span>",
            loss: "Loss Due to<br>Disaster (M t)",
            potential: "Potential Prod.<br>w/o Disaster (M t)"
        },
        tableRows: [
            { year: "2021–22", area: 8.9, prod: 26.20, yield: 2.94, loss: 1.39, potential: 27.59, lossPercent: "4.58%", event: "Extreme heat hit during the critical grain-filling stage", severity: "moderate" },
            { year: "2022–23", area: 9.0, prod: 28.16, yield: 3.12, loss: 1.15, potential: 29.31, lossPercent: "4.1%", event: "Standing flood water delayed sowing", severity: "moderate" },
            { year: "2023–24", area: 9.6, prod: 31.43, yield: 3.27, loss: 0.30, potential: 31.73, lossPercent: "1.0%", event: "Post-flood recovery period", severity: "low" },
            { year: "2024–25", area: 8.9, prod: 28.42, yield: 3.24, loss: 3.66, potential: 32.08, lossPercent: "12.9%", event: "Prolonged heatwaves & localized rainfall", severity: "severe" },
            { year: "2025–26", area: 9.3, prod: 29.31, yield: 3.12, loss: 2.19, potential: 31.50, lossPercent: "7.5%", event: "Above-normal temperatures", severity: "elevated" }
        ],
        chartData: {
            actual: [26.20, 28.16, 31.43, 28.42, 29.31],
            potential: [27.59, 29.31, 31.73, 32.08, 31.50]
        },
        chartDataB: {
            actual: [26.2, 28.16, 31.43, 28.42, 29.31, 28.3, 27.5, 28.4, 27.5],
            potential: [30.0, 32.0, 34.0, 32.08, 32.5, 32.8, 33.0, 33.5, 33.0],
            irrigation25: [null, null, null, null, 29.31, 27.2, 26.0, 26.3, 25.4],
            gridMin: 24,
            gridMax: 36,
            gridLabels: [24, 28, 32, 36],
            tableRows: [
                { year: "2021–22", prod: 26.2, potential: 30.0, loss: 3.8, lossPercent: "12.7%", event: "Extreme heat hit during the critical grain-filling stage", severity: "elevated" },
                { year: "2022–23", prod: 28.16, potential: 32.0, loss: 3.84, lossPercent: "12.0%", event: "Standing flood water delayed sowing", severity: "elevated" },
                { year: "2023–24", prod: 31.43, potential: 34.0, loss: 2.57, lossPercent: "7.6%", event: "Post-flood recovery period", severity: "moderate" },
                { year: "2024–25", prod: 28.42, potential: 32.08, loss: 3.66, lossPercent: "11.4%", event: "Prolonged heatwaves & localized rainfall", severity: "elevated" },
                { year: "2025–26", prod: 29.31, potential: 32.5, loss: 3.19, lossPercent: "9.8%", event: "Above-normal temperatures", severity: "moderate" },
                { year: "2026–27", prod: 28.3, potential: 32.8, loss: 4.5, lossPercent: "13.7%", event: "Unexpected precipitation and minor pest outbreaks", severity: "elevated" },
                { year: "2027–28", prod: 27.5, potential: 33.0, loss: 5.5, lossPercent: "16.7%", event: "Fluctuating winter temperatures", severity: "elevated" },
                { year: "2028–29", prod: 28.4, potential: 33.5, loss: 5.1, lossPercent: "15.2%", event: "Short-term dry spell during early tillering", severity: "elevated" },
                { year: "2029–30", prod: 27.5, potential: 33.0, loss: 5.5, lossPercent: "16.7%", event: "Warm wind gusts during grain filling", severity: "elevated" }
            ]
        }
    },
    Rice: {
        title: "🍚 Rice Production · Climate Impact",
        prodUnit: "M tons",
        lossLabel: "Loss Due to Disaster",
        prodLabel: "Production",
        chartTitle: "Rice Yield: Actual vs Potential",
        chartYTitle: "Rice Yield (M tons)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 6,
        gridMax: 15,
        gridLabels: [6, 9, 12, 15],
        headers: {
            year: "Year",
            area: "Area<br><span style=\"font-size:11px;opacity:.7\">(M/Ha)</span>",
            prod: "Prod.<br><span style=\"font-size:11px;opacity:.7\">(M Tons)</span>",
            yield: "Avg Yield<br><span style=\"font-size:11px;opacity:.7\">(Tons/Ha)</span>",
            loss: "Loss Due to<br>Disaster (M Tons)",
            potential: "Potential Prod.<br>w/o Disaster (M Tons)"
        },
        tableRows: [
            { year: "2021–22", area: 3.5, prod: 9.32, yield: 2.64, loss: 2.18, potential: 11.50, lossPercent: "3.22%", event: "Heatwave occurred before the rice nursery transplantation season", severity: "low" },
            { year: "2022–23", area: 2.9, prod: 7.32, yield: 2.46, loss: 3.18, potential: 10.50, lossPercent: "27.3%", event: "Historic monsoon floods, waterlogging & damage to agricultural infrastructure", severity: "severe" },
            { year: "2023–24", area: 3.6, prod: 9.86, yield: 2.71, loss: 2.64, potential: 12.50, lossPercent: "3.1%", event: "Post-flood recovery, favorable monsoon rainfall, higher market prices", severity: "low" },
            { year: "2024–25", area: 3.8, prod: 9.50, yield: 2.41, loss: 4.00, potential: 13.50, lossPercent: "3.1%", event: "Prolonged heatwaves & localized rainfall", severity: "low" },
            { year: "2025–26", area: 3.3, prod: 9.99, yield: 2.55, loss: 3.01, potential: 13.00, lossPercent: "15.1%", event: "Late autumn flash floods before harvesting", severity: "severe" }
        ],
        chartData: {
            actual: [9.32, 7.32, 9.86, 9.50, 9.99],
            potential: [11.50, 10.50, 12.50, 13.50, 13.00]
        },
        chartDataB: {
            actual: [9.32, 7.32, 9.86, 9.5, 9.99, 9.4, 9.15, 9.35, 9.05],
            potential: [11.5, 12.0, 12.5, 13.5, 13.0, 13.5, 14.0, 13.75, 14.0],
            irrigation25: [null, null, null, null, 9.99, 8.5, 8.3, 8.1, 8.0],
            gridMin: 6,
            gridMax: 15,
            gridLabels: [6, 9, 12, 15],
            tableRows: [
                { year: "2021–22", prod: 9.32, potential: 11.5, loss: 2.18, lossPercent: "19.0%", event: "Heatwave occurred before the rice nursery transplantation season", severity: "elevated" },
                { year: "2022–23", prod: 7.32, potential: 12.0, loss: 4.68, lossPercent: "39.0%", event: "Historic monsoon floods, waterlogging & damage to agricultural infrastructure", severity: "severe" },
                { year: "2023–24", prod: 9.86, potential: 12.5, loss: 2.64, lossPercent: "21.1%", event: "Post-flood recovery, favorable monsoon rainfall, higher market prices", severity: "elevated" },
                { year: "2024–25", prod: 9.5, potential: 13.5, loss: 4.0, lossPercent: "29.6%", event: "Prolonged heatwaves & localized rainfall", severity: "elevated" },
                { year: "2025–26", prod: 9.99, potential: 13.0, loss: 3.01, lossPercent: "23.2%", event: "Late autumn flash floods before harvesting", severity: "elevated" },
                { year: "2026–27", prod: 9.4, potential: 13.5, loss: 4.1, lossPercent: "30.4%", event: "Canal water constraints in southern districts", severity: "severe" },
                { year: "2027–28", prod: 9.15, potential: 14.0, loss: 4.85, lossPercent: "34.6%", event: "High humidity leading to minor bacterial leaf blight", severity: "severe" },
                { year: "2028–29", prod: 9.35, potential: 13.75, loss: 4.4, lossPercent: "32.0%", event: "Irregular summer monsoon patterns", severity: "severe" },
                { year: "2029–30", prod: 9.05, potential: 14.0, loss: 4.95, lossPercent: "35.4%", event: "Elevated night temperatures during grain filling", severity: "severe" }
            ]
        }
    },
    Cotton: {
        title: "🌱 Cotton Production · Climate Impact",
        prodUnit: "M Bales",
        lossLabel: "Loss Due to Disaster",
        prodLabel: "Production",
        chartTitle: "Cotton Yield: Actual vs Potential",
        chartYTitle: "Cotton Yield (M Bales)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 2,
        gridMax: 14,
        gridLabels: [2, 6, 10, 14],
        headers: {
            year: "Year",
            area: "Area<br><span style=\"font-size:11px;opacity:.7\">(M/Ha)</span>",
            prod: "Prod.<br><span style=\"font-size:11px;opacity:.7\">(M T/B)</span>",
            yield: "Avg Yield<br><span style=\"font-size:11px;opacity:.7\">(B/Ha)</span>",
            loss: "Loss Due to<br>Disaster (M T/B)",
            potential: "Potential Prod.<br>w/o Disaster (M T/B)"
        },
        tableRows: [
            { year: "2021–22", area: 1.9, prod: 8.33, yield: 4.38, loss: 2.23, potential: 10.56, lossPercent: "12.7%", event: "Germination heat stress", severity: "elevated" },
            { year: "2022–23", area: 2.1, prod: 4.19, yield: 2.00, loss: 4.41, potential: 8.31, lossPercent: "53%", event: "Historic monsoon floods", severity: "severe" },
            { year: "2023–24", area: 2.4, prod: 10.19, yield: 4.25, loss: 2.58, potential: 12.77, lossPercent: "13.4%", event: "Recovery year floods and expansion in sown area", severity: "elevated" },
            { year: "2024–25", area: 2.0, prod: 7.08, yield: 3.54, loss: 3.79, potential: 10.87, lossPercent: "28.4%", event: "Erratic monsoons outbreaks of whitefly and pink bollworm pests", severity: "severe" },
            { year: "2025–26", area: 2.1, prod: 7.05, yield: 3.36, loss: 3.13, potential: 10.18, lossPercent: "14.9%", event: "High late-season moisture caused mature cotton bolls to rot and drop off, Leaf curl virus", severity: "elevated" }
        ],
        chartData: {
            actual: [8.33, 4.19, 10.19, 7.08, 7.05],
            potential: [10.56, 8.31, 12.77, 10.87, 10.18]
        },
        chartDataB: {
            actual: [8.33, 4.19, 9.19, 7.08, 7.05, 6.83, 6.65, 7.4, 7.15],
            potential: [10.56, 10.3, 11.0, 11.5, 10.5, 10.52, 10.82, 11.05, 11.3],
            irrigation25: [null, null, null, null, 7.05, 6.0, 5.9, 6.2, 5.95],
            gridMin: 2,
            gridMax: 14,
            gridLabels: [2, 6, 10, 14],
            tableRows: [
                { year: "2021–22", prod: 8.33, potential: 10.56, loss: 2.23, lossPercent: "21.1%", event: "Germination heat stress", severity: "elevated" },
                { year: "2022–23", prod: 4.19, potential: 10.3, loss: 6.11, lossPercent: "59.3%", event: "Historic monsoon floods", severity: "severe" },
                { year: "2023–24", prod: 9.19, potential: 11.0, loss: 1.81, lossPercent: "16.5%", event: "Recovery year floods and expansion in sown area", severity: "elevated" },
                { year: "2024–25", prod: 7.08, potential: 11.5, loss: 4.42, lossPercent: "38.4%", event: "Erratic monsoons outbreaks of whitefly and pink bollworm pests", severity: "severe" },
                { year: "2025–26", prod: 7.05, potential: 10.5, loss: 3.45, lossPercent: "32.9%", event: "High late-season moisture caused mature cotton bolls to rot and drop off, Leaf curl virus", severity: "severe" },
                { year: "2026–27", prod: 6.83, potential: 10.52, loss: 3.69, lossPercent: "35.1%", event: "Pink bollworm pest infestation and heat anomalies", severity: "severe" },
                { year: "2027–28", prod: 6.65, potential: 10.82, loss: 4.17, lossPercent: "38.5%", event: "Excessive rainfall during early boll formation", severity: "severe" },
                { year: "2028–29", prod: 7.4, potential: 11.05, loss: 3.65, lossPercent: "33.0%", event: "Favorable weather and controlled pest management", severity: "severe" },
                { year: "2029–30", prod: 7.15, potential: 11.3, loss: 4.15, lossPercent: "36.7%", event: "Slight water shortage during vegetative growth", severity: "severe" }
            ]
        }
    },
    Maize: {
        title: "🌽 Maize Production · Climate Impact",
        prodUnit: "M tons",
        lossLabel: "Loss Due to Disaster",
        prodLabel: "Production",
        chartTitle: "Maize Yield: Actual vs Potential",
        chartYTitle: "Maize Yield (M tons)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 4,
        gridMax: 13,
        gridLabels: [4, 7, 10, 13],
        headers: {
            year: "Year",
            area: "Area<br><span style=\"font-size:11px;opacity:.7\">(M/Ha)</span>",
            prod: "Prod.<br><span style=\"font-size:11px;opacity:.7\">(M Tons)</span>",
            yield: "Avg Yield<br><span style=\"font-size:11px;opacity:.7\">(Tons/Ha)</span>",
            loss: "Loss Due to<br>Disaster (M Tons)",
            potential: "Potential Prod.<br>w/o Disaster (M Tons)"
        },
        tableRows: [
            { year: "2021–22", area: 1.6, prod: 9.52, yield: 5.77, loss: 1.31, potential: 10.83, lossPercent: "13.76%", event: "Heat wave, Water scarcity", severity: "elevated" },
            { year: "2022–23", area: 1.7, prod: 10.96, yield: 6.39, loss: 0.36, potential: 11.32, lossPercent: "17.2%", event: "Catastrophic Floods, Pests and Diseases", severity: "severe" },
            { year: "2023–24", area: 1.6, prod: 5.56, yield: 4.81, loss: 4.50, potential: 10.13, lossPercent: "10.0%", event: "Post-Flood Recovery Period", severity: "elevated" },
            { year: "2024–25", area: 1.5, prod: 9.30, yield: 5.35, loss: 2.40, potential: 11.70, lossPercent: "4.3%", event: "Heatwaves during pollination, fertilization failure", severity: "moderate" },
            { year: "2025–26", area: 1.7, prod: 8.79, yield: 6.46, loss: 2.51, potential: 11.30, lossPercent: "23.7%", event: "Pest & Disease, Erratic Rainfall", severity: "severe" }
        ],
        chartData: {
            actual: [9.52, 10.96, 5.56, 9.30, 8.79],
            potential: [10.83, 11.32, 10.13, 11.70, 11.30]
        },
        chartDataB: {
            actual: [9.52, 5.56, 9.35, 9.3, 8.79, 8.45, 8.03, 8.35, 8.09],
            potential: [10.83, 10.5, 11.32, 11.7, 11.3, 11.6, 12.0, 12.4, 12.8],
            irrigation25: [null, null, null, null, 8.79, 7.5, 7.0, 7.2, 6.9],
            gridMin: 4,
            gridMax: 13,
            gridLabels: [4, 7, 10, 13],
            tableRows: [
                { year: "2021–22", prod: 9.52, potential: 10.83, loss: 1.31, lossPercent: "12.1%", event: "Heat wave, Water scarcity", severity: "moderate" },
                { year: "2022–23", prod: 5.56, potential: 10.5, loss: 4.94, lossPercent: "47.0%", event: "Catastrophic Floods, Pests and Diseases", severity: "severe" },
                { year: "2023–24", prod: 9.35, potential: 11.32, loss: 1.97, lossPercent: "17.4%", event: "Post-Flood Recovery Period", severity: "elevated" },
                { year: "2024–25", prod: 9.3, potential: 11.7, loss: 2.4, lossPercent: "20.5%", event: "Heatwaves during pollination, fertilization failure", severity: "elevated" },
                { year: "2025–26", prod: 8.79, potential: 11.3, loss: 2.51, lossPercent: "22.2%", event: "Pest & Disease, Erratic Rainfall", severity: "elevated" },
                { year: "2026–27", prod: 8.45, potential: 11.6, loss: 3.15, lossPercent: "27.2%", event: "High summer temperatures affecting pollination", severity: "elevated" },
                { year: "2027–28", prod: 8.03, potential: 12.0, loss: 3.97, lossPercent: "33.1%", event: "Shortage of quality seed supplies and heat stress", severity: "severe" },
                { year: "2028–29", prod: 8.35, potential: 12.4, loss: 4.05, lossPercent: "32.7%", event: "Favorable late monsoon rainfall", severity: "severe" },
                { year: "2029–30", prod: 8.09, potential: 12.8, loss: 4.71, lossPercent: "36.8%", event: "Increased incidence of stem borer insect attacks", severity: "severe" }
            ]
        }
    },
    Sugarcane: {
        title: "🎋 Sugarcane Production · Climate Impact",
        prodUnit: "M tons",
        lossLabel: "Loss Due to Disaster",
        prodLabel: "Production",
        chartTitle: "Sugarcane Yield: Actual vs Potential",
        chartYTitle: "Sugarcane Yield (M tons)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 80,
        gridMax: 92,
        gridLabels: [80, 84, 88, 92],
        headers: {
            year: "Year",
            area: "Area<br><span style=\"font-size:11px;opacity:.7\">(M/Ha)</span>",
            prod: "Prod.<br><span style=\"font-size:11px;opacity:.7\">(M Tons)</span>",
            yield: "Avg Yield<br><span style=\"font-size:11px;opacity:.7\">(Tons/Ha)</span>",
            loss: "Loss Due to<br>Disaster (M Tons)",
            potential: "Potential Prod.<br>w/o Disaster (M Tons)"
        },
        tableRows: [
            { year: "2021–22", area: 1.2, prod: 88.65, yield: 70.31, loss: 1.10, potential: 89.75, lossPercent: "0.68%", event: "Heat increased water requirements", severity: "low" },
            { year: "2022–23", area: 1.3, prod: 87.64, yield: 66.71, loss: 1.50, potential: 89.14, lossPercent: "1.7%", event: "Historic monsoon floods, delayed the industrial crushing season", severity: "low" },
            { year: "2023–24", area: 1.3, prod: 86.40, yield: 73.88, loss: 1.64, potential: 88.04, lossPercent: "1.9%", event: "Heat stress & canal water shortage", severity: "low" },
            { year: "2024–25", area: 1.2, prod: 83.50, yield: 66.89, loss: 1.54, potential: 85.04, lossPercent: "1.8%", event: "Shifting of land to rice due to Lower economic returns", severity: "low" },
            { year: "2025–26", area: 1.1, prod: 84.50, yield: 74.54, loss: 3.80, potential: 88.30, lossPercent: "4.5%", event: "Strong winds and late river surges", severity: "moderate" }
        ],
        chartData: {
            actual: [88.65, 87.64, 86.40, 83.50, 84.50],
            potential: [89.75, 89.14, 88.04, 85.04, 88.30]
        },
        chartDataB: {
            actual: [88.65, 87.64, 86.4, 83.5, 84.5, 84.03, 83.85, 85.2, 85.0],
            potential: [89.75, 89.14, 88.04, 86.04, 88.3, 87.6, 88.1, 89.0, 89.5],
            irrigation25: [null, null, null, null, 84.5, 82.5, 82.0, 82.3, 82.5],
            gridMin: 80,
            gridMax: 92,
            gridLabels: [80, 84, 88, 92],
            tableRows: [
                { year: "2021–22", prod: 88.65, potential: 89.75, loss: 1.1, lossPercent: "1.2%", event: "Heat increased water requirements", severity: "low" },
                { year: "2022–23", prod: 87.64, potential: 89.14, loss: 1.5, lossPercent: "1.7%", event: "Historic monsoon floods, delayed the industrial crushing season", severity: "low" },
                { year: "2023–24", prod: 86.4, potential: 88.04, loss: 1.64, lossPercent: "1.9%", event: "Heat stress & canal water shortage", severity: "low" },
                { year: "2024–25", prod: 83.5, potential: 86.04, loss: 2.54, lossPercent: "3.0%", event: "Shifting of land to rice due to Lower economic returns", severity: "low" },
                { year: "2025–26", prod: 84.5, potential: 88.3, loss: 3.8, lossPercent: "4.3%", event: "Strong winds and late river surges", severity: "low" },
                { year: "2026–27", prod: 84.03, potential: 87.6, loss: 3.57, lossPercent: "4.1%", event: "Canal lining renovations causing temporary dry periods", severity: "low" },
                { year: "2028–29", prod: 85.2, potential: 89.0, loss: 3.8, lossPercent: "4.3%", event: "Favorable rainfall and timely fertilizer distribution", severity: "low" },
                { year: "2029–30", prod: 85.0, potential: 89.5, loss: 4.5, lossPercent: "5.0%", event: "Crushing delays due to market price disputes", severity: "moderate" }
            ]
        }
    }
};

// --- Water Loss Excel Data Handler ---
let waterLossExcelData = {
    Rice: {
        years: ['2026', '2027', '2028', '2029', '2030', '2031'],
        target: [9.17, 9.5, 10.0, 10.3, 10.8, 11.3],
        withWaterLoss: [8.1613, 7.9779, 7.8862, 7.7028, 7.7028, 7.6111]
    },
    Cotton: {
        years: ['2026', '2027', '2028', '2029', '2030', '2031'],
        target: [9.64, 9.98, 10.28, 10.78, 11.28, 11.58],
        withWaterLoss: [8.676, 8.4832, 8.3868, 8.194, 8.0976, 8.0012]
    },
    Maize: {
        years: ['2026', '2027', '2028', '2029', '2030', '2031'],
        target: [9.77, 10.02, 10.37, 10.65, 10.96, 11.33],
        withWaterLoss: [8.9884, 8.8907, 8.793, 8.5976, 8.4999, 8.4022]
    },
    Sugarcane: {
        years: ['2026', '2027', '2028', '2029', '2030', '2031'],
        target: [80.3, 80.48, 80.67, 80.82, 81.03, 81.18],
        withWaterLoss: [73.073, 72.27, 71.467, 70.664, 69.861, 69.058]
    },
    Wheat: {
        years: ['2026', '2027', '2028', '2029', '2030', '2031'],
        target: [32.5, 32.8, 33.15, 33.47, 33.86, 34.28],
        withWaterLoss: [29.575, 28.925, 28.275, 27.95, 27.4625, 26.975]
    }
};

let currentActiveOverlayCrop = 'Wheat';
let isWaterLossExcelLoading = false;

function ensureXlsxLoadedForMap() {
    if (window.XLSX) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[data-xlsx="true"]');
        if (existing) {
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', () => reject(new Error('Failed to load XLSX library')));
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
        script.async = true;
        script.dataset.xlsx = 'true';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load XLSX library'));
        document.head.appendChild(script);
    });
}

async function loadWaterLossExcelData() {
    if (isWaterLossExcelLoading) return;
    isWaterLossExcelLoading = true;

    try {
        await ensureXlsxLoadedForMap();
        
        let res = await fetch(encodeURI('./Data/crop Water Req.xlsx'));
        if (!res.ok) {
            res = await fetch('./Data/Crop_Water_Requirement.xlsx');
        }
        if (!res.ok) return;

        const arrayBuffer = await res.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });

        const sheetName = workbook.SheetNames.find(s => s.trim().toLowerCase() === 'water loss') || workbook.SheetNames[1];
        if (!sheetName) return;

        const sheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        if (!json || json.length < 2) return;

        let yearRow = json[0];
        let years = [];
        let colStart = -1;
        for (let c = 0; c < yearRow.length; c++) {
            const val = yearRow[c];
            if (val !== null && val !== undefined && !isNaN(parseFloat(val)) && String(val).trim().length >= 4) {
                if (colStart === -1) colStart = c;
                years.push(String(val).trim());
            }
        }

        if (years.length === 0 || colStart === -1) return;

        const parsedCrops = {};
        let currentCrop = null;

        for (let r = 0; r < json.length; r++) {
            const row = json[r];
            if (!row || row.length === 0) continue;

            const colA = row[0] ? String(row[0]).trim() : '';
            const colB = row[1] ? String(row[1]).trim() : '';

            if (colA) {
                currentCrop = colA;
            }

            if (currentCrop && colB) {
                const cropKey = currentCrop;
                if (!parsedCrops[cropKey]) {
                    parsedCrops[cropKey] = {
                        years: years,
                        target: [],
                        withWaterLoss: []
                    };
                }

                const vals = [];
                for (let c = colStart; c < colStart + years.length; c++) {
                    const v = parseFloat(row[c]);
                    vals.push(!isNaN(v) ? v : 0);
                }

                if (colB.toLowerCase().includes('target')) {
                    parsedCrops[cropKey].target = vals;
                } else if (colB.toLowerCase().includes('water loss')) {
                    parsedCrops[cropKey].withWaterLoss = vals;
                }
            }
        }

        let updatedAny = false;
        for (const key in parsedCrops) {
            if (parsedCrops[key].target.length > 0 && parsedCrops[key].withWaterLoss.length > 0) {
                waterLossExcelData[key] = parsedCrops[key];
                updatedAny = true;
            }
        }

        if (updatedAny && wheatImpactState.visible && currentActiveOverlayCrop) {
            showWheatImpactOverlay(currentActiveOverlayCrop);
        }
    } catch (err) {
        console.warn('Failed to load/parse Water Loss from Excel file:', err);
    } finally {
        isWaterLossExcelLoading = false;
    }
}

function getCropGridBounds(cropName, targetVals, waterLossVals) {
    const allVals = [...targetVals, ...waterLossVals].filter(v => typeof v === 'number' && !isNaN(v));
    if (allVals.length === 0) return { minG: 0, maxG: 10, labels: [0, 5, 10] };

    const minVal = Math.min(...allVals);
    const maxVal = Math.max(...allVals);

    let step;
    if (maxVal > 50) step = 5;
    else if (maxVal > 20) step = 4;
    else step = 2;

    let minG = Math.floor((minVal - 1) / step) * step;
    if (minG < 0) minG = 0;
    let maxG = Math.ceil((maxVal + 1) / step) * step;

    const labels = [];
    for (let v = minG; v <= maxG; v += step) {
        labels.push(v);
    }
    return { minG, maxG, labels };
}

function showWheatImpactOverlay(cropName = 'Wheat') {
    if (!document) return;
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    currentActiveOverlayCrop = cropName;
    loadWaterLossExcelData();

    const crop = cropData[cropName] || cropData['Wheat'];

    let container = document.getElementById('wheat-impact-overlay');
    if (!container) {
        container = document.createElement('div');
        container.id = 'wheat-impact-overlay';
        container.style.position = 'absolute';
        container.style.top = '50%'; // Vertically centered
        container.style.transform = 'translateY(-50%)';
        container.style.right = '40px';
        container.style.width = '580px';
        container.style.zIndex = '1202';
        container.style.pointerEvents = 'auto'; // allow interaction
        container.style.overflow = 'hidden';
        mapContainer.appendChild(container);
    }

    container.style.display = 'block';
    wheatImpactState.element = container;

    // Load styles once
    if (!document.getElementById('wheat-impact-style')) {
        const style = document.createElement('style');
        style.id = 'wheat-impact-style';
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');

            :root {
              /* Card A — "Sunset Harvest" */
              --plum-deep:#1c0f29;
              --plum-mid:#3a1c46;
              --sunset-1:#FF5D8F;
              --sunset-2:#FFB86B;

              /* Card B — "Aurora Night" */
              --indigo-deep:#0b1026;
              --indigo-mid:#16213e;
              --aurora-1:#00C9A7;
              --aurora-2:#4361EE;

              /* Loss severity colors */
              --low:#4ade80;
              --moderate:#fbbf24;
              --elevated:#fb923c;
              --severe:#f43f5e;

              --text-light:#F4F1EA;
              --text-muted:#A9B4D0;

              /* Futuristic column colors from user template */
              --ca:#43DCB3;
              --cb:#63B3ED;
              --cc:#ECC94B;
              --cd:#FC814A;
              --ce:#9A75EA;
            }

            .wheat-stack {
              display:flex;
              flex-direction:column;
              gap:18px;
              width:100%;
              max-width: 580px;
              font-family: 'Rajdhani', sans-serif;
            }

            /* Shared card shell */
            .wheat-card {
              border-radius:16px;
              overflow:hidden;
              box-shadow: 0 14px 32px rgba(0,0,0,.5);
              opacity:0;
              transform: translateY(16px);
              animation: wheatCardIn .6s ease forwards;
              transition: transform .25s ease, box-shadow .25s ease;
            }
            .wheat-card:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(0,0,0,.6); }
            @keyframes wheatCardIn { to { opacity:1; transform: translateY(0); } }

            .wheat-cardA { background: linear-gradient(165deg, var(--plum-mid), var(--plum-deep)); }
            .wheat-cardB { background: linear-gradient(165deg, var(--indigo-mid), var(--indigo-deep)); animation-delay:.15s; }

            /* Compact, centered header (large size like Impact Calculator) */
            .wheat-card-header {
              position:relative;
              padding:6px 34px 6px 12px;
              cursor:pointer;
              user-select:none;
              background-size:200% 200%;
              animation: wheatGradientShift 9s ease infinite;
            }
            .wheat-cardA .wheat-card-header { background-image: linear-gradient(120deg, var(--sunset-1), var(--sunset-2), var(--sunset-1)); }
            .wheat-cardB .wheat-card-header { background-image: linear-gradient(120deg, var(--aurora-2), var(--aurora-1), var(--aurora-2)); }
            @keyframes wheatGradientShift {
              0%   { background-position: 0% 50%; }
              50%  { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .wheat-header-text { text-align:center; }
            .wheat-header-text h3 { margin:0; font-size:18px; font-weight:700; line-height:1.25; text-transform: uppercase; }

            .wheat-toggle-icon {
              position:absolute;
              right:12px;
              top:50%;
              transform: translateY(-50%);
              width:20px; height:20px;
              transition: transform .35s ease;
            }
            .wheat-card.wheat-collapsed .wheat-toggle-icon { transform: translateY(-50%) rotate(-90deg); }
            .wheat-cardA .wheat-toggle-icon path { stroke:#3a1226; }
            .wheat-cardB .wheat-toggle-icon path { stroke:#062330; }

            /* Body: no scrollbars, sizes to content */
            .wheat-card-body {
              max-height: 700px;
              overflow:hidden;
              padding:12px 14px;
              opacity:1;
              transition: max-height .45s ease, opacity .3s ease, padding .45s ease;
            }
            .wheat-card.wheat-collapsed .wheat-card-body { max-height:0; opacity:0; padding:0 14px; }

            /* Card A: 6-column styled table matching user's template */
            .crop-table {
              width: 100%;
              border-collapse: collapse;
              font-family: 'Rajdhani', sans-serif;
              font-size: 15px;
              color: var(--text-light);
              table-layout: fixed;
            }
            .crop-table thead tr.hdr th {
              text-align: center;
              font-size: 13px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: .3px;
              padding: 8px 3px;
              border-bottom: 2px solid rgba(255,255,255,.12);
              line-height: 1.35;
            }
            
            .crop-th-year  { color: var(--text-muted);         background: rgba(255,255,255,.04); width: 13%; }
            .crop-th-area  { color: var(--ca);                 background: rgba(67,220,179,.1);   width: 13%; }
            .crop-th-prod  { color: var(--cb);                 background: rgba(99,179,237,.1);   width: 15%; }
            .crop-th-yield { color: var(--cc);                 background: rgba(236,201,75,.1);   width: 14%; }
            .crop-th-loss  { color: var(--cd);                 background: rgba(252,129,74,.1);   width: 21%; }
            .crop-th-potential { color: var(--ce);             background: rgba(154,117,234,.1);  width: 24%; }

            .crop-table td {
              padding: 10px 3px;
              text-align: center;
              vertical-align: middle;
              border-bottom: 1px solid rgba(255,255,255,.06);
              font-size: 15px;
            }

            tr.crop-data-row { opacity: 0; animation: cropRowIn .5s ease forwards; }
            @keyframes cropRowIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
            tr.crop-data-row:hover { background: rgba(255,255,255,.05); }
            tr.crop-data-row:last-child td { border-bottom: none; }

            .crop-td-year  { font-weight: 700; color: var(--text-light); }
            .crop-td-area  { color: var(--ca); font-weight: 600; }
            .crop-td-prod  { color: var(--cb); font-weight: 600; }
            .crop-td-yield { color: var(--cc); font-weight: 600; }
            .crop-td-potential { color: var(--ce); font-weight: 600; }

            /* Loss badge: zoom-pulse, uniform speed, staggered per row */
            .crop-loss-badge {
              display: inline-block;
              font-size: 14px;
              font-weight: 700;
              padding: 4px 10px;
              border-radius: 12px;
              color: #1c1c1c;
              white-space: nowrap;
              transform-origin: center;
              animation: cropZoomPulse 1.2s ease-in-out infinite;
            }
            @keyframes cropZoomPulse {
              0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(255,255,255,.0); }
              40%  { transform: scale(1.18); box-shadow: 0 0 0 5px rgba(255,255,255,.0); }
              60%  { transform: scale(1.18); }
              100% { transform: scale(1);    box-shadow: 0 0 0 0 rgba(255,255,255,.0); }
            }
            .crop-loss-badge.low      { background: var(--low); }
            .crop-loss-badge.moderate { background: var(--moderate); }
            .crop-loss-badge.elevated { background: var(--elevated); }
            .crop-loss-badge.severe   { background: var(--severe); color: #fff; }

            /* Card B: SVG chart */
            .wheat-chart-svg { width:100%; height:auto; display:block; }

            .wheat-line-actual, .wheat-line-potential {
              fill:none;
              stroke-width:2.5;
              stroke-linecap:round;
              stroke-linejoin:round;
              clip-path: inset(0 100% 0 0);
              animation: snakeLineReveal 5.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
            .wheat-line-actual { stroke: var(--aurora-1); animation-delay: 0.15s; }
            .wheat-line-potential { stroke: var(--aurora-2); stroke-dasharray: 6 5; animation-delay: 0.05s; }

            @keyframes snakeLineReveal {
              0%   { clip-path: inset(0 100% 0 0); }
              100% { clip-path: inset(0 0% 0 0); }
            }

            .wheat-gap-fill {
              fill: var(--severe);
              opacity: 0;
              clip-path: inset(0 100% 0 0);
              animation: snakeGapReveal 5.0s cubic-bezier(0.4, 0, 0.2, 1) forwards;
              animation-delay: 0.2s;
            }
            @keyframes snakeGapReveal {
              0%   { clip-path: inset(0 100% 0 0); opacity: 0; }
              100% { clip-path: inset(0 0% 0 0); opacity: 0.18; }
            }

            .wheat-point {
              opacity: 0;
              transform-box: fill-box;
              transform-origin: center;
              animation: snakePointPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
              transition: r 0.2s ease, filter 0.2s ease;
            }
            .wheat-point:hover { r: 6; filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.9)); cursor: pointer; }
            @keyframes snakePointPop {
              0%   { opacity:0; transform: scale(0); filter: drop-shadow(0 0 0px transparent); }
              70%  { opacity:1; transform: scale(1.4); filter: drop-shadow(0 0 8px #00C9A7); }
              100% { opacity:1; transform: scale(1); filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5)); }
            }
            .point-actual { fill: var(--aurora-1); }
            .point-potential { fill: var(--aurora-2); }

            .wheat-grid-line { stroke: rgba(255,255,255,.06); stroke-width:1; opacity: 0; animation: wheatFadeInGrid 0.8s ease forwards; }
            @keyframes wheatFadeInGrid { to { opacity: 1; } }
            
            .wheat-axis-label, .wheat-axis-title { opacity: 0; animation: wheatFadeInLabels 0.8s ease forwards; animation-delay: 0.4s; }
            @keyframes wheatFadeInLabels { to { opacity: 1; } }

            @keyframes fsBadgeFadeIn {
                0% { opacity: 0; transform: translateY(3px); }
                100% { opacity: 1; transform: translateY(0); }
            }

            .wheat-legend-row { display:flex; gap:14px; justify-content:center; margin-top:4px; font-size:16px; color: #ffffff; }
            .wheat-legend-dot { display:inline-block; width:12px; height:12px; border-radius:50%; margin-right:5px; vertical-align:middle; }
            .wheat-dot-actual { background: var(--aurora-1); }
            .wheat-dot-potential { background: var(--aurora-2); }
            
            /* Interactive Tooltip style */
            .wheat-chart-tooltip {
              position: absolute;
              background: rgba(11, 16, 38, 0.88);
              border: 1px solid rgba(0, 201, 167, 0.6);
              border-radius: 10px;
              padding: 10px 12px;
              color: var(--text-light);
              font-family: 'Rajdhani', sans-serif;
              font-size: 14px;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.25s ease, transform 0.15s ease, left 0.1s ease, top 0.1s ease;
              box-shadow: 0 10px 28px rgba(0,0,0,0.6);
              z-index: 10;
              width: 270px;
              backdrop-filter: blur(8px);
              -webkit-backdrop-filter: blur(8px);
            }
            .wheat-tooltip-year {
              font-weight: 700;
              font-size: 15px;
              color: var(--aurora-1);
              border-bottom: 1px solid rgba(255, 255, 255, 0.12);
              padding-bottom: 4px;
              margin-bottom: 6px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .wheat-tooltip-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 3px;
              font-size: 14px;
            }
            .wheat-tooltip-label {
              color: var(--text-muted);
            }
            .wheat-tooltip-val {
              font-weight: 700;
            }

            @keyframes tooltipLossZoomPulse {
              0%   { transform: scale(1); filter: drop-shadow(0 0 0px transparent); }
              50%  { transform: scale(1.22); filter: drop-shadow(0 0 10px #f43f5e); color: #ff2a55; }
              100% { transform: scale(1); filter: drop-shadow(0 0 0px transparent); }
            }

            .tooltip-loss-zoom {
              display: inline-block;
              font-weight: 800;
              animation: tooltipLossZoomPulse 1.0s ease-in-out infinite;
              transform-origin: center center;
            }
            
            /* Tracker components styles */
            .wheat-tracker-line {
              stroke: rgba(0, 201, 167, 0.45);
              stroke-width: 1.5;
              stroke-dasharray: 4 4;
              pointer-events: none;
            }
            .wheat-tracker-highlight {
              stroke: #fff;
              stroke-width: 1.5;
              pointer-events: none;
              animation: wheatHighlightPulse 1.2s infinite ease-in-out;
            }
            .point-actual-highlight {
              fill: var(--aurora-1);
            }
            .point-potential-highlight {
              fill: var(--aurora-2);
            }
            @keyframes wheatHighlightPulse {
              0% { r: 5; stroke-width: 1.5; opacity: 0.9; }
              50% { r: 8; stroke-width: 2.5; opacity: 0.5; }
              100% { r: 5; stroke-width: 1.5; opacity: 0.9; }
            }
            
            .wheat-axis-label { fill: #ffffff; font-size:14px; font-family:'Rajdhani', sans-serif; }
            .wheat-axis-label-y { text-anchor:end; }
            .wheat-axis-label-x { text-anchor:middle; }
            .wheat-axis-title { fill: #ffffff; font-size:16px; font-weight:600; text-anchor:middle; font-family:'Rajdhani', sans-serif; }
        `;
        document.head.appendChild(style);
    }

    const maxLoss = Math.max(...crop.tableRows.map(r => r.loss));
    const getLossClass = (l) => {
        const p = l / maxLoss;
        if (p < .25) return 'low';
        if (p < .5) return 'moderate';
        if (p < .75) return 'elevated';
        return 'severe';
    };

    // Build Table Rows dynamically for Card A
    const tableRowsHTML = crop.tableRows.map((row, idx) => {
        const delay = (idx * 0.09).toFixed(2);

        const areaVal = row.area.toFixed(1);
        const prodVal = row.prod.toFixed(2);
        const yieldVal = row.yield.toFixed(2);
        const lossVal = row.loss.toFixed(2);
        const potentialVal = row.potential.toFixed(2);
        const cls = getLossClass(row.loss);

        return `
          <tr class="crop-data-row" style="animation-delay: ${delay}s;">
            <td class="crop-td-year">${row.year}</td>
            <td class="crop-td-area">${areaVal}</td>
            <td class="crop-td-prod">${prodVal}</td>
            <td class="crop-td-yield">${yieldVal}</td>
            <td>
              <span class="crop-loss-badge ${cls}">${lossVal}</span>
            </td>
            <td class="crop-td-potential">${potentialVal}</td>
          </tr>
        `;
    }).join('\n');

    // Fetch Card B Water Loss data directly from Excel dataset
    const cropKey = Object.keys(waterLossExcelData).find(k => k.toLowerCase() === cropName.toLowerCase()) || cropName;
    const lossData = waterLossExcelData[cropKey] || {
        years: ['2026', '2027', '2028', '2029', '2030', '2031'],
        target: [0, 0, 0, 0, 0, 0],
        withWaterLoss: [0, 0, 0, 0, 0, 0]
    };

    const years = lossData.years;
    const targetVals = lossData.target;
    const waterLossVals = lossData.withWaterLoss;

    let prodUnit = 'M tons';
    if (cropName.toLowerCase() === 'cotton') prodUnit = 'M Bales';
    else if (cropName.toLowerCase() === 'wheat') prodUnit = 'M t';
    else if (crop && crop.prodUnit) prodUnit = crop.prodUnit;

    const bounds = getCropGridBounds(cropName, targetVals, waterLossVals);
    const minG = bounds.minG;
    const maxG = bounds.maxG;
    const gridLabels = bounds.labels;
    const range = maxG - minG || 1;

    const xCoords = [];
    const startX = 60;
    const endX = 350;
    const stepX = (endX - startX) / Math.max(1, years.length - 1);
    for (let i = 0; i < years.length; i++) {
        xCoords.push(startX + i * stepX);
    }

    const targetY = targetVals.map(v => 130 - ((v - minG) / range) * 120);
    const waterLossY = waterLossVals.map(v => 130 - ((v - minG) / range) * 120);

    // Smooth Snake Curve path generator
    function createSmoothPath(xVals, yVals) {
        if (xVals.length === 0) return '';
        if (xVals.length === 1) return `M ${xVals[0]},${yVals[0]}`;
        let path = `M ${xVals[0]},${yVals[0]}`;
        for (let i = 0; i < xVals.length - 1; i++) {
            const x0 = xVals[i];
            const y0 = yVals[i];
            const x1 = xVals[i + 1];
            const y1 = yVals[i + 1];
            const cp1x = x0 + (x1 - x0) / 2;
            const cp1y = y0;
            const cp2x = x0 + (x1 - x0) / 2;
            const cp2y = y1;
            path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x1},${y1}`;
        }
        return path;
    }

    function createSmoothGapFill(xVals, tY, wY) {
        if (xVals.length < 2) return '';
        const topPath = createSmoothPath(xVals, tY);
        const revX = xVals.slice().reverse();
        const revY = wY.slice().reverse();
        let botPath = `L ${revX[0]},${revY[0]}`;
        for (let i = 0; i < revX.length - 1; i++) {
            const x0 = revX[i];
            const y0 = revY[i];
            const x1 = revX[i + 1];
            const y1 = revY[i + 1];
            const cp1x = x0 + (x1 - x0) / 2;
            const cp1y = y0;
            const cp2x = x0 + (x1 - x0) / 2;
            const cp2y = y1;
            botPath += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x1},${y1}`;
        }
        return `${topPath} ${botPath} Z`;
    }

    const targetPathD = createSmoothPath(xCoords, targetY);
    const waterLossPathD = createSmoothPath(xCoords, waterLossY);
    const gapFillD = createSmoothGapFill(xCoords, targetY, waterLossY);

    const gridLabelsHTML = gridLabels.map(lbl => {
        const yVal = 130 - ((lbl - minG) / range) * 120;
        return `
            <line class="wheat-grid-line" x1="60" y1="${yVal}" x2="350" y2="${yVal}"/>
            <text class="wheat-axis-label wheat-axis-label-y" x="50" y="${yVal + 4}">${lbl}</text>
        `;
    }).join('\n');

    const targetCircles = targetY.map((y, idx) => {
        const val = targetVals[idx];
        const delay = (0.20 + idx * 0.95).toFixed(2);
        const yr = years[idx];
        return `<circle class="wheat-point point-potential" cx="${xCoords[idx]}" cy="${y}" r="3.2" style="animation-delay:${delay}s"><title>${yr} Target: ${val} ${prodUnit}</title></circle>`;
    }).join('\n');

    const waterLossCircles = waterLossY.map((y, idx) => {
        const val = waterLossVals[idx];
        const delay = (0.20 + idx * 0.95).toFixed(2);
        const yr = years[idx];
        return `<circle class="wheat-point point-actual" cx="${xCoords[idx]}" cy="${y}" r="3.2" style="animation-delay:${delay}s"><title>${yr} With Water Loss: ${val} ${prodUnit}</title></circle>`;
    }).join('\n');

    const targetBadges = targetY.map((y, idx) => {
        const val = targetVals[idx].toFixed(1);
        const delay = (0.20 + idx * 0.95).toFixed(2);
        const cx = xCoords[idx];
        return `
          <g style="opacity: 0; animation: fsBadgeFadeIn 0.6s ease-out forwards; animation-delay: ${delay}s;">
            <rect x="${cx - 19}" y="${y - 17}" width="38" height="13" rx="3" fill="rgba(11, 16, 38, 0.85)" stroke="var(--aurora-2)" stroke-width="1"/>
            <text x="${cx}" y="${y - 7}" text-anchor="middle" fill="var(--aurora-2)" font-size="9" font-weight="700">${val}</text>
          </g>
        `;
    }).join('\n');

    const waterLossBadges = waterLossY.map((y, idx) => {
        const val = waterLossVals[idx].toFixed(1);
        const delay = (0.20 + idx * 0.95).toFixed(2);
        const cx = xCoords[idx];
        return `
          <g style="opacity: 0; animation: fsBadgeFadeIn 0.6s ease-out forwards; animation-delay: ${delay}s;">
            <rect x="${cx - 19}" y="${y + 6}" width="38" height="13" rx="3" fill="rgba(11, 16, 38, 0.85)" stroke="var(--aurora-1)" stroke-width="1"/>
            <text x="${cx}" y="${y + 16}" text-anchor="middle" fill="var(--aurora-1)" font-size="9" font-weight="700">${val}</text>
          </g>
        `;
    }).join('\n');

    const xLabelsHTML = years.map((yr, idx) => {
        return `<text class="wheat-axis-label wheat-axis-label-x" x="${xCoords[idx]}" y="146">${yr}</text>`;
    }).join('\n');

    container.innerHTML = `
        <div class="wheat-stack">
          <!-- CARD A — Production / Climate Impact table -->
          <div class="wheat-card wheat-cardA" id="wheat-cardA">
            <div class="wheat-card-header" onclick="toggleWheatCard('wheat-cardA')">
              <div class="wheat-header-text">
                <h3>${crop.title}</h3>
              </div>
              <button class="wheat-fullscreen-btn" onclick="openCropCardModal('${cropName}', 'cardA', event)" title="Maximize Modal View" style="position: absolute; right: 38px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.18); border: none; border-radius: 4px; width: 22px; height: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, transform 0.2s ease;">
                <svg viewBox="0 0 24 24" fill="none" stroke="#3a1226" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 13px; height: 13px;">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </button>
              <svg class="wheat-toggle-icon" viewBox="0 0 24 24" fill="none" style="width: 18px; height: 18px; position: absolute; right: 10px; top: 50%; transform: translateY(-50%); transition: transform 0.35s ease;">
                <path d="M6 9l6 6 6-6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke="#3a1226"/>
              </svg>
            </div>
            <div class="wheat-card-body">
              <table class="crop-table">
                <thead>
                  <tr class="hdr">
                    <th class="crop-th-year">${crop.headers.year}</th>
                    <th class="crop-th-area">${crop.headers.area}</th>
                    <th class="crop-th-prod">${crop.headers.prod}</th>
                    <th class="crop-th-yield">${crop.headers.yield}</th>
                    <th class="crop-th-loss">${crop.headers.loss}</th>
                    <th class="crop-th-potential">${crop.headers.potential}</th>
                  </tr>
                </thead>
                <tbody id="crop-tableBody">
                  ${tableRowsHTML}
                </tbody>
              </table>
            </div>
          </div>

          <!-- CARD B — Production Loss due to Water Shortage -->
          <div class="wheat-card wheat-cardB" id="wheat-cardB" style="position:relative;">
            <div class="wheat-card-header" onclick="toggleWheatCard('wheat-cardB')">
              <div class="wheat-header-text">
                <h3>${cropName} Production Loss due to Water Shortage.</h3>
              </div>
              <button class="wheat-fullscreen-btn" onclick="openCropCardModal('${cropName}', 'cardB', event)" title="Maximize Modal View" style="position: absolute; right: 38px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.18); border: none; border-radius: 4px; width: 22px; height: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, transform 0.2s ease;">
                <svg viewBox="0 0 24 24" fill="none" stroke="#062330" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 13px; height: 13px;">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </button>
              <svg class="wheat-toggle-icon" viewBox="0 0 24 24" fill="none" style="width: 18px; height: 18px; position: absolute; right: 10px; top: 50%; transform: translateY(-50%); transition: transform 0.35s ease;">
                <path d="M6 9l6 6 6-6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke="#062330"/>
              </svg>
            </div>
            <div class="wheat-card-body" style="position:relative; padding: 10px 14px 6px 14px;">
              <svg class="wheat-chart-svg" viewBox="0 0 380 172" xmlns="http://www.w3.org/2000/svg">
                ${gridLabelsHTML}

                <text class="wheat-axis-title" x="20" y="70" transform="rotate(-90 20 70)">${cropName} (${prodUnit})</text>

                <path class="wheat-gap-fill" d="${gapFillD}"/>

                <path class="wheat-line-potential" d="${targetPathD}"/>
                <path class="wheat-line-actual" d="${waterLossPathD}"/>

                ${targetCircles}
                ${waterLossCircles}

                ${targetBadges}
                ${waterLossBadges}

                <!-- Interactive Tracker components -->
                <line id="wheat-tracker-line" class="wheat-tracker-line" x1="0" y1="10" x2="0" y2="130" style="display:none;" />
                <circle id="wheat-tracker-actual" class="wheat-tracker-highlight point-actual-highlight" cx="0" cy="0" r="5" style="display:none;" />
                <circle id="wheat-tracker-potential" class="wheat-tracker-highlight point-potential-highlight" cx="0" cy="0" r="5" style="display:none;" />

                ${xLabelsHTML}

                <text class="wheat-axis-title" x="205" y="166">Year</text>
              </svg>

              <!-- Chart Tooltip -->
              <div id="wheat-chart-tooltip" class="wheat-chart-tooltip" style="opacity:0; pointer-events:none;"></div>

              <div class="wheat-legend-row" style="margin-top: 2px; margin-bottom: 2px;">
                <span><span class="wheat-legend-dot wheat-dot-potential"></span>Target Production</span>
                <span><span class="wheat-legend-dot wheat-dot-actual"></span>With Water Shortage</span>
              </div>
            </div>
          </div>
        </div>
    `;

    // Hide other map overlays to prevent overlap
    hideMayAugOverlay();
    hideHotspotOverlay();
    hideComparisonOverlay();
    hideYieldComparisonOverlay();

    // Turn off corresponding toggle checkboxes
    const droughtEl = document.getElementById('others-drought-impacts-toggle');
    if (droughtEl) droughtEl.checked = false;

    const heatwaveEl = document.getElementById('others-heatwave-impacts-toggle');
    if (heatwaveEl) heatwaveEl.checked = false;

    const comparisonEl = document.getElementById('others-comparison-toggle');
    if (comparisonEl) comparisonEl.checked = false;

    const yieldEl = document.getElementById('others-yield-comparison-toggle');
    if (yieldEl) yieldEl.checked = false;

    wheatImpactState.visible = true;
    updateWheatImpactOverlayPosition();

    // Initialize Chart interactivity
    initWheatChartInteractivity(cropName, crop);
}

function initWheatChartInteractivity(cropName, crop) {
    const cardB = document.getElementById('wheat-cardB');
    if (!cardB) return;

    const svg = cardB.querySelector('.wheat-chart-svg');
    const tooltip = cardB.querySelector('#wheat-chart-tooltip');
    const trackerLine = svg.querySelector('#wheat-tracker-line');
    const trackerActual = svg.querySelector('#wheat-tracker-actual');
    const trackerPotential = svg.querySelector('#wheat-tracker-potential');

    if (!svg || !tooltip) return;

    const cropKey = Object.keys(waterLossExcelData).find(k => k.toLowerCase() === cropName.toLowerCase()) || cropName;
    const lossData = waterLossExcelData[cropKey] || {
        years: ['2026', '2027', '2028', '2029', '2030', '2031'],
        target: [0, 0, 0, 0, 0, 0],
        withWaterLoss: [0, 0, 0, 0, 0, 0]
    };

    const years = lossData.years;
    const targetVals = lossData.target;
    const waterLossVals = lossData.withWaterLoss;

    let prodUnit = 'M tons';
    if (cropName.toLowerCase() === 'cotton') prodUnit = 'M Bales';
    else if (cropName.toLowerCase() === 'wheat') prodUnit = 'M t';
    else if (crop && crop.prodUnit) prodUnit = crop.prodUnit;

    const bounds = getCropGridBounds(cropName, targetVals, waterLossVals);
    const minG = bounds.minG;
    const maxG = bounds.maxG;
    const range = maxG - minG || 1;

    const xCoords = [];
    const startX = 60;
    const endX = 350;
    const stepX = (endX - startX) / Math.max(1, years.length - 1);
    for (let i = 0; i < years.length; i++) {
        xCoords.push(startX + i * stepX);
    }

    const targetY = targetVals.map(v => 130 - ((v - minG) / range) * 120);
    const waterLossY = waterLossVals.map(v => 130 - ((v - minG) / range) * 120);

    svg.addEventListener('mousemove', (e) => {
        const rect = svg.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * 380;
        const mouseY = ((e.clientY - rect.top) / rect.height) * 195;

        let closestIdx = 0;
        let minDist = Infinity;
        xCoords.forEach((cx, idx) => {
            const dist = Math.abs(mouseX - cx);
            if (dist < minDist) {
                minDist = dist;
                closestIdx = idx;
            }
        });

        if (mouseX >= 40 && mouseX <= 370 && mouseY >= 0 && mouseY <= 160) {
            const targetX = xCoords[closestIdx];
            const tY = targetY[closestIdx];
            const wY = waterLossY[closestIdx];
            const yr = years[closestIdx];
            const tVal = targetVals[closestIdx];
            const wVal = waterLossVals[closestIdx];
            const loss = tVal - wVal;
            const lossPct = tVal > 0 ? ((loss / tVal) * 100).toFixed(1) : '0';

            trackerLine.setAttribute('x1', targetX);
            trackerLine.setAttribute('x2', targetX);
            trackerLine.style.display = 'block';

            trackerPotential.setAttribute('cx', targetX);
            trackerPotential.setAttribute('cy', tY);
            trackerPotential.style.display = 'block';

            trackerActual.setAttribute('cx', targetX);
            trackerActual.setAttribute('cy', wY);
            trackerActual.style.display = 'block';

            tooltip.innerHTML = `
                <div class="wheat-tooltip-year">${yr} - ${cropName} Water Shortage</div>
                <div class="wheat-tooltip-row">
                    <span class="wheat-tooltip-label">Target Production:</span>
                    <span class="wheat-tooltip-val" style="color:var(--aurora-2);">${tVal.toFixed(2)} ${prodUnit}</span>
                </div>
                <div class="wheat-tooltip-row">
                    <span class="wheat-tooltip-label">With Water Shortage:</span>
                    <span class="wheat-tooltip-val" style="color:var(--aurora-1);">${wVal.toFixed(2)} ${prodUnit}</span>
                </div>
                <div class="wheat-tooltip-row" style="border-top:1px dashed rgba(255,255,255,0.15);padding-top:4px;margin-top:4px;">
                    <span class="wheat-tooltip-label">Production Shortfall:</span>
                    <span class="wheat-tooltip-val" style="color:#f43f5e;">-${loss.toFixed(2)} ${prodUnit} <span class="tooltip-loss-zoom">(${lossPct}%)</span></span>
                </div>
            `;

            let tooltipX = ((targetX / 380) * rect.width);
            let tooltipY = ((wY / 195) * rect.height) - 40;

            const tooltipWidth = 270;
            if (tooltipX + tooltipWidth + 20 > rect.width) {
                tooltipX = tooltipX - tooltipWidth - 20;
            } else {
                tooltipX = tooltipX + 20;
            }

            tooltip.style.left = `${tooltipX}px`;
            tooltip.style.top = `${tooltipY}px`;
            tooltip.style.opacity = '1';
        } else {
            hideTracker();
        }
    });

    svg.addEventListener('mouseleave', () => {
        hideTracker();
    });

    function hideTracker() {
        trackerLine.style.display = 'none';
        trackerActual.style.display = 'none';
        trackerPotential.style.display = 'none';
        tooltip.style.opacity = '0';
    }

    // Legend interactivity: hovering over a legend span highlights the line
    const legendRow = cardB.querySelector('.wheat-legend-row');
    if (legendRow) {
        const potentialSpan = legendRow.children[0];
        const actualSpan = legendRow.children[1];

        const targetLine = svg.querySelector('.wheat-line-potential');
        const waterLossLine = svg.querySelector('.wheat-line-actual');
        const targetPoints = svg.querySelectorAll('.point-potential');
        const waterLossPoints = svg.querySelectorAll('.point-actual');

        const setHoverState = (hoveredSpan, activeLine, activePoints, inactiveLine, inactivePoints) => {
            hoveredSpan.style.fontWeight = 'bold';
            if (activeLine) activeLine.style.strokeWidth = '4';
            if (inactiveLine) inactiveLine.style.opacity = '0.15';
            if (inactivePoints) inactivePoints.forEach(p => p.style.opacity = '0.15');
        };

        const resetHoverState = (hoveredSpan, activeLine, activePoints, inactiveLine, inactivePoints) => {
            hoveredSpan.style.fontWeight = 'normal';
            if (activeLine) activeLine.style.strokeWidth = '2.5';
            if (inactiveLine) inactiveLine.style.opacity = '1';
            if (inactivePoints) inactivePoints.forEach(p => p.style.opacity = '1');
        };

        if (potentialSpan && targetLine) {
            potentialSpan.style.cursor = 'pointer';
            potentialSpan.style.transition = 'opacity 0.2s ease';
            potentialSpan.addEventListener('mouseenter', () => {
                setHoverState(potentialSpan, targetLine, targetPoints, waterLossLine, waterLossPoints);
            });
            potentialSpan.addEventListener('mouseleave', () => {
                resetHoverState(potentialSpan, targetLine, targetPoints, waterLossLine, waterLossPoints);
            });
        }

        if (actualSpan && waterLossLine) {
            actualSpan.style.cursor = 'pointer';
            actualSpan.style.transition = 'opacity 0.2s ease';
            actualSpan.addEventListener('mouseenter', () => {
                setHoverState(actualSpan, waterLossLine, waterLossPoints, targetLine, targetPoints);
            });
            actualSpan.addEventListener('mouseleave', () => {
                resetHoverState(actualSpan, waterLossLine, waterLossPoints, targetLine, targetPoints);
            });
        }
    }
}

function hideWheatImpactOverlay() {
    const container = document.getElementById('wheat-impact-overlay');
    if (container) {
        container.style.display = 'none';
    }
    wheatImpactState.visible = false;
}

// --- Crop Card Modal Handler ---
function openCropCardModal(cropName, cardType = 'cardB', event) {
    if (event) event.stopPropagation();

    let modal = document.getElementById('crop-card-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'crop-card-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.zIndex = '999999';
        modal.style.background = 'rgba(5, 8, 22, 0.92)';
        modal.style.backdropFilter = 'blur(18px)';
        modal.style.webkitBackdropFilter = 'blur(18px)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.padding = '20px';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCropCardModal();
        });
    }

    const targetParent = document.fullscreenElement || 
                         document.webkitFullscreenElement || 
                         document.mozFullScreenElement || 
                         document.msFullscreenElement ||
                         document.getElementById('map') || 
                         document.body;

    if (!modal.parentElement || modal.parentElement !== targetParent) {
        targetParent.appendChild(modal);
    }

    modal.style.zIndex = '99999999';

    const crop = cropData[cropName] || cropData['Wheat'];
    const cropKey = Object.keys(waterLossExcelData).find(k => k.toLowerCase() === cropName.toLowerCase()) || cropName;
    const lossData = waterLossExcelData[cropKey] || {
        years: ['2026', '2027', '2028', '2029', '2030', '2031'],
        target: [0, 0, 0, 0, 0, 0],
        withWaterLoss: [0, 0, 0, 0, 0, 0]
    };

    const years = lossData.years;
    const targetVals = lossData.target;
    const waterLossVals = lossData.withWaterLoss;

    let prodUnit = 'M tons';
    if (cropName.toLowerCase() === 'cotton') prodUnit = 'M Bales';
    else if (cropName.toLowerCase() === 'wheat') prodUnit = 'M t';
    else if (crop && crop.prodUnit) prodUnit = crop.prodUnit;

    const bounds = getCropGridBounds(cropName, targetVals, waterLossVals);
    const minG = bounds.minG;
    const maxG = bounds.maxG;
    const gridLabels = bounds.labels;
    const range = maxG - minG || 1;

    const xCoords = [];
    const startX = 90;
    const endX = 1130;
    const stepX = (endX - startX) / Math.max(1, years.length - 1);
    for (let i = 0; i < years.length; i++) {
        xCoords.push(startX + i * stepX);
    }

    const targetY = targetVals.map(v => 420 - ((v - minG) / range) * 360);
    const waterLossY = waterLossVals.map(v => 420 - ((v - minG) / range) * 360);

    function createSmoothPath(xVals, yVals) {
        if (xVals.length === 0) return '';
        if (xVals.length === 1) return `M ${xVals[0]},${yVals[0]}`;
        let path = `M ${xVals[0]},${yVals[0]}`;
        for (let i = 0; i < xVals.length - 1; i++) {
            const x0 = xVals[i];
            const y0 = yVals[i];
            const x1 = xVals[i + 1];
            const y1 = yVals[i + 1];
            const cp1x = x0 + (x1 - x0) / 2;
            const cp1y = y0;
            const cp2x = x0 + (x1 - x0) / 2;
            const cp2y = y1;
            path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x1},${y1}`;
        }
        return path;
    }

    function createSmoothGapFill(xVals, tY, wY) {
        if (xVals.length < 2) return '';
        const topPath = createSmoothPath(xVals, tY);
        const revX = xVals.slice().reverse();
        const revY = wY.slice().reverse();
        let botPath = `L ${revX[0]},${revY[0]}`;
        for (let i = 0; i < revX.length - 1; i++) {
            const x0 = revX[i];
            const y0 = revY[i];
            const x1 = revX[i + 1];
            const y1 = revY[i + 1];
            const cp1x = x0 + (x1 - x0) / 2;
            const cp1y = y0;
            const cp2x = x0 + (x1 - x0) / 2;
            const cp2y = y1;
            botPath += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x1},${y1}`;
        }
        return `${topPath} ${botPath} Z`;
    }

    const targetPathD = createSmoothPath(xCoords, targetY);
    const waterLossPathD = createSmoothPath(xCoords, waterLossY);
    const gapFillD = createSmoothGapFill(xCoords, targetY, waterLossY);

    const gridLabelsHTML = gridLabels.map(lbl => {
        const yVal = 420 - ((lbl - minG) / range) * 360;
        return `
            <line class="wheat-grid-line" x1="90" y1="${yVal}" x2="1130" y2="${yVal}" style="stroke-width: 1.5px;"/>
            <text class="wheat-axis-label wheat-axis-label-y" x="78" y="${yVal + 7}" style="font-size:24px; font-weight:700;">${lbl}</text>
        `;
    }).join('\n');

    const targetCircles = targetY.map((y, idx) => {
        const val = targetVals[idx];
        const delay = (0.20 + idx * 0.95).toFixed(2);
        const yr = years[idx];
        return `<circle class="wheat-point point-potential" cx="${xCoords[idx]}" cy="${y}" r="9" style="animation-delay:${delay}s"><title>${yr} Target: ${val} ${prodUnit}</title></circle>`;
    }).join('\n');

    const waterLossCircles = waterLossY.map((y, idx) => {
        const val = waterLossVals[idx];
        const delay = (0.20 + idx * 0.95).toFixed(2);
        const yr = years[idx];
        return `<circle class="wheat-point point-actual" cx="${xCoords[idx]}" cy="${y}" r="9" style="animation-delay:${delay}s"><title>${yr} With Water Loss: ${val} ${prodUnit}</title></circle>`;
    }).join('\n');

    const targetBadges = targetY.map((y, idx) => {
        const val = targetVals[idx].toFixed(2);
        const delay = (0.20 + idx * 0.95).toFixed(2);
        const cx = xCoords[idx];
        return `
          <g style="opacity: 0; animation: fsBadgeFadeIn 0.6s ease-out forwards; animation-delay: ${delay}s;">
            <rect x="${cx - 48}" y="${y - 35}" width="96" height="26" rx="6" fill="rgba(11, 16, 38, 0.88)" stroke="var(--aurora-2)" stroke-width="1.8"/>
            <text x="${cx}" y="${y - 17}" text-anchor="middle" fill="var(--aurora-2)" font-size="16" font-weight="700">${val}</text>
          </g>
        `;
    }).join('\n');

    const waterLossBadges = waterLossY.map((y, idx) => {
        const val = waterLossVals[idx].toFixed(2);
        const delay = (0.20 + idx * 0.95).toFixed(2);
        const cx = xCoords[idx];
        return `
          <g style="opacity: 0; animation: fsBadgeFadeIn 0.6s ease-out forwards; animation-delay: ${delay}s;">
            <rect x="${cx - 48}" y="${y + 12}" width="96" height="26" rx="6" fill="rgba(11, 16, 38, 0.88)" stroke="var(--aurora-1)" stroke-width="1.8"/>
            <text x="${cx}" y="${y + 30}" text-anchor="middle" fill="var(--aurora-1)" font-size="16" font-weight="700">${val}</text>
          </g>
        `;
    }).join('\n');

    const xLabelsHTML = years.map((yr, idx) => {
        return `<text class="wheat-axis-label wheat-axis-label-x" x="${xCoords[idx]}" y="462" style="font-size:26px; font-weight:700;">${yr}</text>`;
    }).join('\n');

    let contentHTML = '';

    if (cardType === 'cardA') {
        const maxLoss = Math.max(...crop.tableRows.map(r => r.loss));
        const getLossClass = (l) => {
            const p = l / maxLoss;
            if (p < .25) return 'low';
            if (p < .5) return 'moderate';
            if (p < .75) return 'elevated';
            return 'severe';
        };

        const tableRowsHTML = crop.tableRows.map((row, idx) => {
            const delay = (idx * 0.09).toFixed(2);
            return `
              <tr class="crop-data-row" style="animation-delay: ${delay}s;">
                <td class="crop-td-year" style="font-size:24px; padding:20px 12px; font-weight:700;">${row.year}</td>
                <td class="crop-td-area" style="font-size:24px; padding:20px 12px; font-weight:700;">${row.area.toFixed(1)}</td>
                <td class="crop-td-prod" style="font-size:24px; padding:20px 12px; font-weight:700;">${row.prod.toFixed(2)}</td>
                <td class="crop-td-yield" style="font-size:24px; padding:20px 12px; font-weight:700;">${row.yield.toFixed(2)}</td>
                <td style="padding:20px 12px;">
                  <span class="crop-loss-badge ${getLossClass(row.loss)}" style="font-size:22px; padding:8px 22px; border-radius:20px;">${row.loss.toFixed(2)}</span>
                </td>
                <td class="crop-td-potential" style="font-size:24px; padding:20px 12px; font-weight:700;">${row.potential.toFixed(2)}</td>
              </tr>
            `;
        }).join('\n');

        contentHTML = `
            <div style="background: linear-gradient(165deg, var(--plum-mid), var(--plum-deep)); border-radius: 24px; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 30px 80px rgba(0,0,0,0.85); width: 95vw; height: 90vh; max-width: 1700px; max-height: 980px; padding: 32px 40px; color: var(--text-light); font-family: 'Rajdhani', sans-serif; display: flex; flex-direction: column; justify-content: space-between;">
                <div style="display:flex; justify-content:center; align-items:center; border-bottom: 1px solid rgba(255,255,255,0.18); padding-bottom: 18px; margin-bottom: 18px; position:relative; width:100%;">
                    <h2 style="margin:0; font-size:34px; font-weight:700; color:var(--sunset-2); text-transform:uppercase; letter-spacing:0.8px; text-align:center; width:100%;">${crop.title}</h2>
                    <button onclick="closeCropCardModal()" style="position:absolute; right:0; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.12); border:none; color:#fff; font-size:28px; font-weight:bold; width:50px; height:50px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s;">✕</button>
                </div>
                <div style="flex:1; overflow-y:auto;">
                    <table class="crop-table" style="font-size:24px; width:100%;">
                        <thead>
                          <tr class="hdr" style="font-size:24px;">
                            <th class="crop-th-year" style="padding:16px 12px; font-size:22px;">${crop.headers.year}</th>
                            <th class="crop-th-area" style="padding:16px 12px; font-size:22px;">${crop.headers.area}</th>
                            <th class="crop-th-prod" style="padding:16px 12px; font-size:22px;">${crop.headers.prod}</th>
                            <th class="crop-th-yield" style="padding:16px 12px; font-size:22px;">${crop.headers.yield}</th>
                            <th class="crop-th-loss" style="padding:16px 12px; font-size:22px;">${crop.headers.loss}</th>
                            <th class="crop-th-potential" style="padding:16px 12px; font-size:22px;">${crop.headers.potential}</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${tableRowsHTML}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    } else {
        contentHTML = `
            <div style="background: linear-gradient(165deg, var(--indigo-mid), var(--indigo-deep)); border-radius: 24px; border: 1px solid rgba(0, 201, 167, 0.5); box-shadow: 0 30px 80px rgba(0,0,0,0.85); width: 95vw; height: 90vh; max-width: 1700px; max-height: 980px; padding: 32px 40px; color: var(--text-light); font-family: 'Rajdhani', sans-serif; display: flex; flex-direction: column; justify-content: space-between; position:relative;">
                <div style="display:flex; justify-content:center; align-items:center; border-bottom: 1px solid rgba(255,255,255,0.18); padding-bottom: 18px; margin-bottom: 12px; position:relative; width:100%;">
                    <h2 style="margin:0; font-size:34px; font-weight:700; color:var(--aurora-1); text-transform:uppercase; letter-spacing:0.8px; text-align:center; width:100%;">${cropName} Production Loss due to Water Shortage</h2>
                    <button onclick="closeCropCardModal()" style="position:absolute; right:0; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.12); border:none; color:#fff; font-size:28px; font-weight:bold; width:50px; height:50px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s;">✕</button>
                </div>
                <div style="position:relative; width:100%; flex:1; display:flex; flex-direction:column; justify-content:center;">
                    <svg class="wheat-chart-svg" viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; max-height: 68vh;">
                        ${gridLabelsHTML}
                        <text class="wheat-axis-title" x="28" y="240" transform="rotate(-90 28 240)" style="font-size:28px; font-weight:700;">${cropName} (${prodUnit})</text>
                        <path class="wheat-gap-fill" d="${gapFillD}"/>
                        <path class="wheat-line-potential" d="${targetPathD}" style="stroke-width:5.5px;"/>
                        <path class="wheat-line-actual" d="${waterLossPathD}" style="stroke-width:5.5px;"/>
                        ${targetCircles}
                        ${waterLossCircles}

                        ${targetBadges}
                        ${waterLossBadges}
                        
                        <line id="modal-tracker-line" class="wheat-tracker-line" x1="0" y1="20" x2="0" y2="420" style="display:none; stroke-width:2.5px;" />
                        <circle id="modal-tracker-actual" class="wheat-tracker-highlight point-actual-highlight" cx="0" cy="0" r="11" style="display:none;" />
                        <circle id="modal-tracker-potential" class="wheat-tracker-highlight point-potential-highlight" cx="0" cy="0" r="11" style="display:none;" />

                        ${xLabelsHTML}
                        <text class="wheat-axis-title" x="610" y="504" style="font-size:28px; font-weight:700;">Year</text>
                    </svg>
                    <div id="modal-chart-tooltip" class="wheat-chart-tooltip" style="opacity:0; pointer-events:none; font-size:24px; padding:22px 28px; width:480px; border-width:2px; border-radius:14px; background:rgba(11,16,38,0.95);"></div>
                </div>
                <div class="wheat-legend-row" style="margin-top:16px; font-size:26px; font-weight:700; display:flex; justify-content:center; gap:48px;">
                    <span><span class="wheat-legend-dot wheat-dot-potential" style="width:22px; height:22px;"></span>Target Production</span>
                    <span><span class="wheat-legend-dot wheat-dot-actual" style="width:22px; height:22px;"></span>With Water Shortage</span>
                </div>
            </div>
        `;
    }

    modal.innerHTML = contentHTML;
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
    });

    if (cardType === 'cardB') {
        initModalChartInteractivity(cropName, cropKey, years, targetVals, waterLossVals, bounds, prodUnit);
    }
}

function closeCropCardModal() {
    const modal = document.getElementById('crop-card-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function initModalChartInteractivity(cropName, cropKey, years, targetVals, waterLossVals, bounds, prodUnit) {
    const modal = document.getElementById('crop-card-modal');
    if (!modal) return;
    const svg = modal.querySelector('.wheat-chart-svg');
    const tooltip = modal.querySelector('#modal-chart-tooltip');
    const trackerLine = svg.querySelector('#modal-tracker-line');
    const trackerActual = svg.querySelector('#modal-tracker-actual');
    const trackerPotential = svg.querySelector('#modal-tracker-potential');

    if (!svg || !tooltip) return;

    const minG = bounds.minG;
    const maxG = bounds.maxG;
    const range = maxG - minG || 1;

    const xCoords = [];
    const startX = 90;
    const endX = 1130;
    const stepX = (endX - startX) / Math.max(1, years.length - 1);
    for (let i = 0; i < years.length; i++) {
        xCoords.push(startX + i * stepX);
    }

    const targetY = targetVals.map(v => 420 - ((v - minG) / range) * 360);
    const waterLossY = waterLossVals.map(v => 420 - ((v - minG) / range) * 360);

    svg.addEventListener('mousemove', (e) => {
        const rect = svg.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * 1200;
        const mouseY = ((e.clientY - rect.top) / rect.height) * 520;

        let closestIdx = 0;
        let minDist = Infinity;
        xCoords.forEach((cx, idx) => {
            const dist = Math.abs(mouseX - cx);
            if (dist < minDist) {
                minDist = dist;
                closestIdx = idx;
            }
        });

        if (mouseX >= 60 && mouseX <= 1160 && mouseY >= 10 && mouseY <= 470) {
            const targetX = xCoords[closestIdx];
            const tY = targetY[closestIdx];
            const wY = waterLossY[closestIdx];
            const yr = years[closestIdx];
            const tVal = targetVals[closestIdx];
            const wVal = waterLossVals[closestIdx];
            const loss = tVal - wVal;
            const lossPct = tVal > 0 ? ((loss / tVal) * 100).toFixed(1) : '0';

            trackerLine.setAttribute('x1', targetX);
            trackerLine.setAttribute('x2', targetX);
            trackerLine.style.display = 'block';

            trackerPotential.setAttribute('cx', targetX);
            trackerPotential.setAttribute('cy', tY);
            trackerPotential.style.display = 'block';

            trackerActual.setAttribute('cx', targetX);
            trackerActual.setAttribute('cy', wY);
            trackerActual.style.display = 'block';

            tooltip.innerHTML = `
                <div class="wheat-tooltip-year" style="font-size:24px; font-weight:700; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:8px; margin-bottom:10px;">${yr} - ${cropName} Water Shortage</div>
                <div class="wheat-tooltip-row" style="font-size:22px; margin-top:8px;">
                    <span class="wheat-tooltip-label" style="font-size:22px;">Target Production:</span>
                    <span class="wheat-tooltip-val" style="color:var(--aurora-2); font-size:22px; font-weight:700;">${tVal.toFixed(2)} ${prodUnit}</span>
                </div>
                <div class="wheat-tooltip-row" style="font-size:22px; margin-top:6px;">
                    <span class="wheat-tooltip-label" style="font-size:22px;">With Water Shortage:</span>
                    <span class="wheat-tooltip-val" style="color:var(--aurora-1); font-size:22px; font-weight:700;">${wVal.toFixed(2)} ${prodUnit}</span>
                </div>
                <div class="wheat-tooltip-row" style="font-size:22px; border-top:1px dashed rgba(255,255,255,0.2); padding-top:8px; margin-top:8px;">
                    <span class="wheat-tooltip-label" style="font-size:22px;">Production Shortfall:</span>
                    <span class="wheat-tooltip-val" style="color:#f43f5e; font-size:22px; font-weight:700;">-${loss.toFixed(2)} ${prodUnit} <span class="tooltip-loss-zoom" style="font-size:26px; color:#ff2a55;">(${lossPct}%)</span></span>
                </div>
            `;

            let tooltipX = ((targetX / 1200) * rect.width);
            let tooltipY = ((wY / 520) * rect.height) - 60;

            const tooltipWidth = 440;
            if (tooltipX + tooltipWidth + 24 > rect.width) {
                tooltipX = tooltipX - tooltipWidth - 24;
            } else {
                tooltipX = tooltipX + 24;
            }

            tooltip.style.left = `${tooltipX}px`;
            tooltip.style.top = `${tooltipY}px`;
            tooltip.style.opacity = '1';
        } else {
            hideModalTracker();
        }
    });

    svg.addEventListener('mouseleave', () => {
        hideModalTracker();
    });

    function hideModalTracker() {
        trackerLine.style.display = 'none';
        trackerActual.style.display = 'none';
        trackerPotential.style.display = 'none';
        tooltip.style.opacity = '0';
    }
}

function updateWheatImpactOverlayPosition() {
    const container = document.getElementById('wheat-impact-overlay');
    if (!container || container.style.display === 'none') {
        return;
    }
    container.style.top = '50%';
    container.style.transform = 'translateY(-50%)';
    container.style.right = '40px';
    container.style.zIndex = '1202';
}

function toggleWheatCard(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.classList.toggle('wheat-collapsed');
    }
}

function showCropAutoplayOverlay() {
    if (!document) return;
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    let container = document.getElementById('crop-autoplay-overlay');
    if (!container) {
        container = document.createElement('div');
        container.id = 'crop-autoplay-overlay';
        container.style.position = 'absolute';
        container.style.top = '90px'; // Moved upwards to avoid overlaying map controls
        container.style.right = '40px';
        container.style.width = '750px';
        container.style.zIndex = '1202';
        container.style.pointerEvents = 'auto'; // allow interaction
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '15px';
        mapContainer.appendChild(container);
    }

    // Reset sub-containers to trigger card entry animations
    container.innerHTML = `
        <div id="crop-autoplay-table-sub"></div>
        <div id="crop-autoplay-graph-sub"></div>
    `;

    container.style.display = 'flex';

    if (!document.getElementById('crop-autoplay-style')) {
        const style = document.createElement('style');
        style.id = 'crop-autoplay-style';
        style.innerHTML = `
            .autoplay-card {
              border-radius:16px;
              overflow:hidden;
              box-shadow: 0 14px 32px rgba(0,0,0,.5);
              background: linear-gradient(165deg, #16213e, #0b1026);
              border: 1px solid rgba(0, 201, 167, 0.4);
              font-family: 'Rajdhani', sans-serif;
              color: #F4F1EA;
              padding: 22px;
              width: 100%;
              box-sizing: border-box;
            }

            .autoplay-title {
              font-size: 24px;
              font-weight: 700;
              text-transform: uppercase;
              text-align: center;
              margin-bottom: 18px;
              letter-spacing: 0.5px;
              background: linear-gradient(120deg, #4361EE, #00C9A7);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .autoplay-table {
              width: 100%;
              border-collapse: collapse;
            }

            .autoplay-table th {
              font-size: 16px;
              font-weight: 700;
              text-transform: uppercase;
              padding: 12px 6px;
              border-bottom: 2px solid rgba(255,255,255,.12);
              text-align: center;
            }

            .autoplay-th-crop    { color: #F4F1EA; width: 12%; }
            .autoplay-th-area    { color: #43DCB3; width: 12%; }
            .autoplay-th-target  { color: #e9d8fd; width: 20%; }
            .autoplay-th-stages  { color: #63B3ED; width: 25%; }
            .autoplay-th-impact  { color: #ECC94B; width: 18%; }
            .autoplay-th-loss    { color: #FC814A; width: 13%; }

            .autoplay-table td {
              padding: 14px 6px;
              text-align: center;
              vertical-align: middle;
              border-bottom: 1px solid rgba(255,255,255,.06);
              font-size: 16px;
              line-height: 1.35;
            }

            .autoplay-row-active {
              background: rgba(0, 201, 167, 0.08) !important;
              box-shadow: inset 0 0 10px rgba(0, 201, 167, 0.2) !important;
            }

            .autoplay-td-crop {
              font-weight: 700;
              text-transform: uppercase;
            }
            .crop-rice-color { color: #43DCB3; }
            .crop-cotton-color { color: #FC814A; }
            .crop-maize-color { color: #ECC94B; }
            .crop-sugarcane-color { color: #9A75EA; }

            .autoplay-td-area {
              color: #43DCB3;
              font-weight: 600;
            }

            .autoplay-td-target {
              color: #e9d8fd;
              font-weight: 600;
            }

            .autoplay-td-stages {
              color: #e2e8f0;
              font-weight: 500;
            }

            .autoplay-td-impact {
              color: #e2e8f0;
              font-weight: 500;
            }

            /* Blinking Zoom Pulse for Estimated Loss % badge */
            .autoplay-loss-badge {
              display: inline-block;
              font-size: 15px;
              font-weight: 700;
              padding: 5px 10px;
              border-radius: 12px;
              color: #1c1c1c;
              white-space: nowrap;
              transform-origin: center;
              animation: cropZoomPulse 1.4s ease-in-out infinite;
            }

            @keyframes cropZoomPulse {
              0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.45);
              }
              50% {
                transform: scale(1.08);
                box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
              }
              100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
              }
            }

            .autoplay-loss-badge.low { background: #4ade80; }
            .autoplay-loss-badge.moderate { background: #fbbf24; }
            .autoplay-loss-badge.elevated { background: #fb923c; }
            .autoplay-loss-badge.severe { background: #f43f5e; color: #fff; }

            /* Scoped Kharif Graph Card styles to prevent collision */
            .autoplay-graph-card {
              --bg-deep: #081525;
              --panel-1: #0c2038;
              --panel-2: #0a1a2e;
              --border-cyan: rgba(79, 216, 255, 0.28);
              --cyan: #4fd8ff;
              --text-main: #e8f1f8;
              --text-muted: #7a93ab;
              --track-bg: rgba(255, 255, 255, 0.05);
              --green-1: #00c853;
              --green-2: #39ffb0;
              --red-1: #ff4d6d;
              --red-2: #c9002e;

              width: 100%;
              box-sizing: border-box;
              background: linear-gradient(160deg, var(--panel-1) 0%, var(--panel-2) 100%);
              border: 1px solid var(--border-cyan);
              border-radius: 16px;
              padding: 22px 30px 20px;
              position: relative;
              box-shadow: 0 20px 50px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03);
              opacity: 0;
              animation: autoplayCardIn 0.6s ease-out forwards;
              font-family: -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
              color: var(--text-main);
            }

            @keyframes autoplayCardIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }

            .autoplay-graph-card .scan-mask {
              position: absolute;
              inset: 0;
              border-radius: 16px;
              overflow: hidden;
              pointer-events: none;
              z-index: 0;
            }

            .autoplay-graph-card .scan {
              position: absolute;
              top: 0; left: 0;
              width: 45%;
              height: 100%;
              background: linear-gradient(100deg, transparent, rgba(79,216,255,0.07), transparent);
              transform: translateX(-120%);
              animation: autoplayScanSweep 2.6s ease-out 0.35s 1;
              pointer-events: none;
            }

            @keyframes autoplayScanSweep {
              to { transform: translateX(320%); }
            }

            .autoplay-graph-card .autoplay-graph-header {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
              margin-bottom: 12px;
              position: relative;
              z-index: 1;
            }

            .autoplay-graph-card .autoplay-graph-eyebrow {
              font-size: 11px;
              letter-spacing: 1.6px;
              color: var(--cyan);
              font-weight: 700;
              margin: 0 0 6px;
              text-transform: uppercase;
              display: flex;
              align-items: center;
              gap: 7px;
            }

            .autoplay-graph-card .autoplay-graph-dot {
              width: 6px; height: 6px; border-radius: 50%;
              background: var(--green-2);
              box-shadow: 0 0 8px rgba(57,255,176,0.9);
              animation: autoplayGraphBlink 1.8s ease-in-out infinite;
            }

            @keyframes autoplayGraphBlink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.35; }
            }

            .autoplay-graph-card .autoplay-graph-title {
              font-size: 19px;
              font-weight: 700;
              color: var(--text-main);
              margin: 0;
            }

            .autoplay-graph-card .autoplay-graph-rows {
              display: flex;
              flex-direction: column;
              gap: 18px;
              position: relative;
              z-index: 1;
            }

            .autoplay-graph-card .crop-row {
              display: flex;
              align-items: center;
              gap: 14px;
              opacity: 0;
              transform: translateY(14px);
              animation: autoplayRowIn 0.6s ease-out forwards;
              padding: 4px 6px;
              border-radius: 8px;
              transition: background-color 0.3s ease, box-shadow 0.3s ease;
            }

            .autoplay-graph-card .crop-row.autoplay-row-active {
              background: rgba(79, 216, 255, 0.08) !important;
              box-shadow: inset 0 0 10px rgba(79, 216, 255, 0.2) !important;
            }

            .autoplay-graph-card .label-wrap {
              flex: 0 0 108px;
              position: relative;
            }

            .autoplay-graph-card .crop-label {
              font-size: 14.5px;
              font-weight: 700;
              color: var(--text-main);
              display: flex;
              align-items: center;
              gap: 6px;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .autoplay-graph-card .crop-row.crop-disabled .crop-label {
              opacity: 0.35;
              text-decoration: line-through;
            }
            .autoplay-graph-card .crop-row.crop-disabled .track-wrap {
              opacity: 0 !important;
              visibility: hidden !important;
              pointer-events: none !important;
            }

            .autoplay-graph-card .tooltip {
              position: absolute;
              bottom: 100%;
              left: 0;
              margin-bottom: 10px;
              transform: translateY(-4px);
              width: 230px;
              background: #0c2440;
              border: 1px solid var(--border-cyan);
              border-radius: 10px;
              padding: 10px 12px;
              font-size: 11.5px;
              line-height: 1.5;
              color: var(--text-main);
              opacity: 0;
              visibility: hidden;
              transition: opacity 0.2s ease, transform 0.2s ease;
              z-index: 30;
              box-shadow: 0 10px 24px rgba(0,0,0,0.5);
              pointer-events: none;
            }
            .autoplay-graph-card .tooltip b { color: var(--cyan); }
            .autoplay-graph-card .label-wrap:hover .tooltip {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            }

            .autoplay-graph-card .track-wrap {
              flex: 1 1 auto;
              height: 32px;
              position: relative;
              transition: opacity 0.4s ease, visibility 0.4s ease;
            }

            .autoplay-graph-card .track-bg {
              position: absolute;
              inset: 0;
              background: var(--track-bg);
              border-radius: 16px;
              box-shadow: inset 0 1px 4px rgba(0,0,0,0.5);
            }

            .autoplay-graph-card .bar-fill {
              position: absolute;
              top: 0; left: 0;
              height: 100%;
              width: 0px;
              border-radius: 16px;
              background: linear-gradient(90deg, var(--green-1), var(--green-2));
              box-shadow: 0 0 14px rgba(57,255,176,0.55);
              transition: width 1.3s cubic-bezier(0.22,0.9,0.24,1);
              display: flex;
              align-items: center;
              justify-content: flex-end;
              padding-right: 8px;
              overflow: hidden;
            }

            .autoplay-graph-card .bar-fill::after {
              content: "";
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              background: linear-gradient(90deg, rgba(255,255,255,0.18), transparent 60%);
            }

            .autoplay-graph-card .bar-value {
              position: relative;
              z-index: 2;
              font-size: 11px;
              font-weight: 700;
              color: #04351d;
              white-space: nowrap;
            }

            .autoplay-graph-card .loss-circle {
              position: absolute;
              top: 50%;
              left: 0;
              width: 34px;
              height: 34px;
              margin-top: -17px;
              border-radius: 50%;
              background: radial-gradient(circle at 35% 30%, var(--red-1), var(--red-2));
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: 9.5px;
              font-weight: 700;
              transform: scale(0);
              opacity: 0;
              box-shadow: 0 4px 10px rgba(0,0,0,0.4);
              white-space: nowrap;
              transition: left 1.3s cubic-bezier(0.22,0.9,0.24,1);
            }
            .autoplay-graph-card .loss-circle.show {
              animation: autoplayPopIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards,
                         autoplayPulseRing 2.2s ease-out 0.5s infinite;
            }
            @keyframes autoplayPopIn {
              0% { transform: scale(0); opacity: 0; }
              70% { transform: scale(1.18); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes autoplayPulseRing {
              0% { box-shadow: 0 0 0 0 rgba(255,77,109,0.55); }
              70% { box-shadow: 0 0 0 10px rgba(255,77,109,0); }
              100% { box-shadow: 0 0 0 0 rgba(255,77,109,0); }
            }

            .autoplay-graph-card .target-label {
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%) translateX(6px);
              white-space: nowrap;
              opacity: 0;
              transition: opacity 0.4s ease, transform 0.4s ease, left 1.3s cubic-bezier(0.22,0.9,0.24,1);
            }
            .autoplay-graph-card .target-label.show {
              opacity: 1;
              transform: translateY(-50%) translateX(0);
            }

            .autoplay-graph-card .target-val {
              font-size: 13px;
              font-weight: 700;
              color: var(--text-main);
              display: block;
            }

            .autoplay-graph-card .autoplay-graph-legend {
              display: flex;
              gap: 22px;
              margin-top: 20px;
              padding-top: 12px;
              border-top: 1px solid rgba(255,255,255,0.07);
              position: relative;
              z-index: 1;
            }

            .autoplay-graph-card .legend-item {
              display: flex;
              align-items: center;
              gap: 7px;
              font-size: 11.5px;
              color: var(--text-muted);
              transition: opacity 0.3s ease;
            }

            .autoplay-graph-card .legend-item.inactive {
              opacity: 0.35;
            }

            .autoplay-graph-card .swatch {
              width: 11px; height: 11px;
              border-radius: 3px;
            }
            .autoplay-graph-card .swatch.green { background: linear-gradient(90deg, var(--green-1), var(--green-2)); }
            .autoplay-graph-card .swatch.red { background: linear-gradient(135deg, var(--red-1), var(--red-2)); border-radius: 50%; }

            /* Legend disable styles */
            .autoplay-graph-card.hide-achieved .bar-fill {
              width: 0px !important;
              opacity: 0 !important;
            }
            .autoplay-graph-card.hide-achieved .bar-value {
              opacity: 0 !important;
            }

            .autoplay-graph-card.hide-shortfall .loss-circle {
              opacity: 0 !important;
              transform: scale(0) !important;
              animation: none !important;
            }

            .autoplay-graph-card .crop-row:nth-child(1) { animation-delay: 0.15s; }
            .autoplay-graph-card .crop-row:nth-child(2) { animation-delay: 0.30s; }
            .autoplay-graph-card .crop-row:nth-child(3) { animation-delay: 0.45s; }
            .autoplay-graph-card .crop-row:nth-child(4) { animation-delay: 0.60s; }

            @keyframes autoplayRowIn {
              to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }

    renderCropAutoplayTable();
}

function animateAutoplayNumber(el, start, end, duration, format) {
    const t0 = performance.now();
    function tick(now) {
        const t = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = start + (end - start) * eased;
        el.textContent = format(val);
        if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function initCropAutoplayGraph() {
    const graphSub = document.getElementById('crop-autoplay-graph-sub');
    if (!graphSub) return;

    // Ordered ranking-wise (descending order by production)
    const crops = [
        { name: "Sugarcane", production: 73.88, loss: 6.42, target: 80.30, critical: "Grand growth, cane elongation", impact: "Lower yield and quality" },
        { name: "Maize",     production: 8.69,  loss: 1.07, target: 9.77,  critical: "Tasseling, silking",            impact: "Lower grain filling" },
        { name: "Cotton",    production: 8.00,  loss: 1.64, target: 9.64,  critical: "Flowering, boll formation",     impact: "Flower and boll shedding" },
        { name: "Rice",      production: 7.89,  loss: 1.28, target: 9.17,  critical: "Panicle initiation, flowering", impact: "Reduced pollination" }
    ];

    graphSub.innerHTML = `
        <div class="autoplay-graph-card" id="autoplay-graph-card">
          <div class="scan-mask"><div class="scan"></div></div>

          <div class="autoplay-graph-header">
            <div>
              <p class="autoplay-graph-eyebrow"><span class="autoplay-graph-dot"></span>Kharif 2026&ndash;27</p>
              <h2 class="autoplay-graph-title">Production vs Target by Crop</h2>
            </div>
          </div>

          <div class="autoplay-graph-rows" id="autoplay-graph-rows">
            ${crops.map(c => `
              <div class="crop-row" data-crop="${c.name.toLowerCase()}">
                <div class="label-wrap">
                  <div class="crop-label">${c.name}</div>
                  <div class="tooltip"><b>Critical stage:</b> ${c.critical}<br><b>Impact:</b> ${c.impact}</div>
                </div>
                <div class="track-wrap">
                  <div class="track-bg"></div>
                  <div class="bar-fill">
                    <span class="bar-value">0.00</span>
                  </div>
                  <div class="loss-circle">${c.loss.toFixed(2)}</div>
                  <div class="target-label">
                    <span class="target-val">0.00</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="autoplay-graph-legend">
            <div class="legend-item" id="legend-achieved"><span class="swatch green"></span>Achieved production</div>
            <div class="legend-item" id="legend-shortfall"><span class="swatch red"></span>Shortfall from target</div>
          </div>
        </div>
    `;

    // Hook up interactive legend toggles
    setTimeout(() => {
        const achLegend = document.getElementById('legend-achieved');
        const shortLegend = document.getElementById('legend-shortfall');
        const card = document.getElementById('autoplay-graph-card');

        if (achLegend && card) {
            achLegend.style.cursor = 'pointer';
            achLegend.onclick = () => {
                card.classList.toggle('hide-achieved');
                achLegend.classList.toggle('inactive');
                layoutCropAutoplayGraph();
            };
        }

        if (shortLegend && card) {
            shortLegend.style.cursor = 'pointer';
            shortLegend.onclick = () => {
                card.classList.toggle('hide-shortfall');
                shortLegend.classList.toggle('inactive');
                layoutCropAutoplayGraph();
            };
        }

        layoutCropAutoplayGraph();

        // Hook up crop label clicks to toggle disable state
        document.querySelectorAll('#autoplay-graph-card .crop-row').forEach(row => {
            const label = row.querySelector('.crop-label');
            if (label) {
                label.onclick = () => {
                    row.classList.toggle('crop-disabled');
                    layoutCropAutoplayGraph();
                };
            }
        });

        // Animate values
        const maxProduction = Math.max(...crops.map(c => c.production));
        const CIRCLE_SIZE = 34;
        const GAP_BAR_CIRCLE = 8;
        const GAP_CIRCLE_LABEL = 10;
        const LABEL_RESERVE = 66;

        const sampleTrack = document.querySelector('#autoplay-graph-card .track-wrap');
        if (!sampleTrack) return;
        const trackWidth = sampleTrack.clientWidth;
        const reserved = CIRCLE_SIZE + GAP_BAR_CIRCLE + GAP_CIRCLE_LABEL + LABEL_RESERVE;
        const usable = Math.max(40, trackWidth - reserved);

        document.querySelectorAll('#autoplay-graph-card .crop-row').forEach((row, i) => {
            const c = crops[i];
            const ratio = c.production / maxProduction;
            const barPx = ratio * usable;

            const valEl = row.querySelector('.bar-value');
            const circle = row.querySelector('.loss-circle');
            const targetLabel = row.querySelector('.target-label');
            const targetVal = row.querySelector('.target-val');

            animateAutoplayNumber(valEl, 0, c.production, 1300, v => v.toFixed(2));
            setTimeout(() => circle.classList.add('show'), 1150);
            setTimeout(() => {
                targetLabel.classList.add('show');
                animateAutoplayNumber(targetVal, 0, c.target, 700, v => v.toFixed(2));
            }, 1300);
        });
    }, 100);
}

function layoutCropAutoplayGraph() {
    const card = document.getElementById('autoplay-graph-card');
    if (!card) return;

    // Ordered ranking-wise (descending order by production)
    const crops = [
        { name: "Sugarcane", production: 73.88, loss: 6.42, target: 80.30 },
        { name: "Maize",     production: 8.69,  loss: 1.07, target: 9.77 },
        { name: "Cotton",    production: 8.00,  loss: 1.64, target: 9.64 },
        { name: "Rice",      production: 7.89,  loss: 1.28, target: 9.17 }
    ];

    const isHideAchieved = card.classList.contains('hide-achieved');
    const isHideShortfall = card.classList.contains('hide-shortfall');

    // Filter crops to only include active (non-disabled) crops for maxProduction scaling
    const activeCrops = crops.filter(c => {
        const row = document.querySelector(`#autoplay-graph-card .crop-row[data-crop="${c.name.toLowerCase()}"]`);
        return row ? !row.classList.contains('crop-disabled') : true;
    });

    const maxProduction = activeCrops.length > 0 ? Math.max(...activeCrops.map(c => c.production)) : 1;
    const CIRCLE_SIZE = 34;
    const GAP_BAR_CIRCLE = 8;
    const GAP_CIRCLE_LABEL = 10;
    const LABEL_RESERVE = 66;

    const sampleTrack = document.querySelector('#autoplay-graph-card .track-wrap');
    if (!sampleTrack) return;
    const trackWidth = sampleTrack.clientWidth;

    // Dynamically calculate reserved space to maximize usability when components are hidden
    let reserved = 0;
    if (!isHideShortfall) {
        reserved += CIRCLE_SIZE + GAP_BAR_CIRCLE + GAP_CIRCLE_LABEL;
    } else {
        reserved += GAP_BAR_CIRCLE;
    }
    reserved += LABEL_RESERVE;

    const usable = Math.max(40, trackWidth - reserved);

    document.querySelectorAll('#autoplay-graph-card .crop-row').forEach((row, i) => {
        const c = crops[i];
        const ratio = c.production / maxProduction;
        const barPx = isHideAchieved ? 0 : (ratio * usable);
        
        let circleLeft = 0;
        let targetLeft = 0;

        if (!isHideAchieved) {
            circleLeft = barPx + GAP_BAR_CIRCLE;
        } else {
            circleLeft = 0;
        }

        if (!isHideShortfall) {
            targetLeft = circleLeft + CIRCLE_SIZE + GAP_CIRCLE_LABEL;
        } else {
            targetLeft = barPx + GAP_BAR_CIRCLE;
        }

        const fill = row.querySelector('.bar-fill');
        const circle = row.querySelector('.loss-circle');
        const targetLabel = row.querySelector('.target-label');

        circle.style.left = circleLeft + 'px';
        targetLabel.style.left = targetLeft + 'px';
        fill.style.width = barPx + 'px';
    });
}

// Window resize layout syncing
window.addEventListener('resize', () => {
    const overlay = document.getElementById('crop-autoplay-overlay');
    if (overlay && overlay.style.display !== 'none') {
        layoutCropAutoplayGraph();
    }
});

function renderCropAutoplayTable(currentCrop = '') {
    const container = document.getElementById('crop-autoplay-overlay');
    if (!container) return;

    const tableSub = document.getElementById('crop-autoplay-table-sub');
    if (tableSub) {
        const data = [
            { crop: "Rice", area: "3.39", targetProduction: "9.17", stages: "Panicle initiation, flowering", impact: "Reduced pollination", loss: "13 - 15", severity: "severe", colorClass: "crop-rice-color" },
            { crop: "Cotton", area: "2.16", targetProduction: "9.64", stages: "Flowering, boll formation", impact: "Flower and boll shedding", loss: "16 - 18", severity: "elevated", colorClass: "crop-cotton-color" },
            { crop: "Maize", area: "1.50", targetProduction: "9.77", stages: "Tasseling, silking", impact: "Lower grain filling", loss: "10 - 12", severity: "low", colorClass: "crop-maize-color" },
            { crop: "Sugarcane", area: "1.14", targetProduction: "80.3", stages: "Grand growth, cane elongation", impact: "Lower yield and quality", loss: "7 - 9", severity: "moderate", colorClass: "crop-sugarcane-color" }
        ];

        const rowsHTML = data.map(row => {
            const isActive = (row.crop.toLowerCase() === currentCrop.toLowerCase());
            const rowClass = isActive ? 'class="autoplay-row-active"' : '';
            return `
              <tr ${rowClass}>
                <td class="autoplay-td-crop ${row.colorClass}">${row.crop}</td>
                <td class="autoplay-td-area">${row.area}</td>
                <td class="autoplay-td-target">${row.targetProduction}</td>
                <td class="autoplay-td-stages">${row.stages}</td>
                <td class="autoplay-td-impact">${row.impact}</td>
                <td>
                  <span class="autoplay-loss-badge ${row.severity}">${row.loss}</span>
                </td>
              </tr>
            `;
        }).join('\n');

        tableSub.innerHTML = `
            <div class="autoplay-card">
              <div class="autoplay-title">Monsoon impact on Major Kharif Crops (2026–2027)</div>
              <table class="autoplay-table">
                <thead>
                  <tr>
                    <th class="autoplay-th-crop">Crop</th>
                    <th class="autoplay-th-area">Area (M ha)</th>
                    <th class="autoplay-th-target">Target Production (MT)</th>
                    <th class="autoplay-th-stages">Critical Stages</th>
                    <th class="autoplay-th-impact">Impact</th>
                    <th class="autoplay-th-loss">Estimated Loss (%)</th>
                  </tr>
                </thead>
                <tbody>
                  ${rowsHTML}
                </tbody>
              </table>
            </div>
        `;
    }

    const graphSub = document.getElementById('crop-autoplay-graph-sub');
    if (graphSub) {
        let card = document.getElementById('autoplay-graph-card');
        if (!card) {
            initCropAutoplayGraph();
        } else {
            // Update active crop row highlighting in the graph container
            document.querySelectorAll('#autoplay-graph-card .crop-row').forEach(row => {
                const cropName = row.getAttribute('data-crop');
                if (cropName === currentCrop.toLowerCase()) {
                    row.classList.add('autoplay-row-active');
                } else {
                    row.classList.remove('autoplay-row-active');
                }
            });
        }
    }
}

let cropAutoplayInterval = null;
let cropAutoplayIndex = -1;

function handleCropAutoplayToggle(btn) {
    const crops = ['Rice', 'Cotton', 'Maize', 'Sugarcane'];
    const playIcon = btn.querySelector('.autoplay-play-icon');
    const pauseIcon = btn.querySelector('.autoplay-pause-icon');

    if (cropAutoplayInterval) {
        stopCropAutoplay();
    } else {
        // Hide existing cards
        hideWheatImpactOverlay();

        // Show autoplay table overlay
        showCropAutoplayOverlay();

        // Ensure Wheat is turned off when autoplay starts
        const wheatToggle = document.getElementById('crop-wheat-toggle');
        if (wheatToggle && wheatToggle.checked) {
            wheatToggle.checked = false;
            addWMSLayerToMap('Wheat', false, 'crop-classification');
        }

        // Show the autoplay slider
        const sliderContainer = document.getElementById('crop-autoplay-slider');
        if (sliderContainer) {
            sliderContainer.classList.add('show');
            sliderContainer.querySelectorAll('.crop-slider-item').forEach(item => {
                item.classList.remove('crop-active');
            });
        }

        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline-block';
        btn.classList.add('playing');

        // Find currently checked crop, start from there
        let currentCheckedIdx = crops.findIndex(crop => {
            const toggle = document.getElementById('crop-' + crop.toLowerCase() + '-toggle');
            return toggle && toggle.checked;
        });

        cropAutoplayIndex = currentCheckedIdx !== -1 ? currentCheckedIdx : 0;

        const playStep = () => {
            const currentCrop = crops[cropAutoplayIndex];

            crops.forEach((cropName, idx) => {
                const toggle = document.getElementById('crop-' + cropName.toLowerCase() + '-toggle');
                const isNeedActive = (idx <= cropAutoplayIndex);
                if (toggle) {
                    toggle.checked = isNeedActive;
                }
                addWMSLayerToMap(cropName, isNeedActive, 'crop-classification');

                // Update slider items animation state
                const sliderItem = document.querySelector(`#crop-autoplay-slider .crop-slider-item[data-crop="${cropName.toLowerCase()}"]`);
                if (sliderItem) {
                    if (isNeedActive) {
                        sliderItem.classList.add('crop-active');
                    } else {
                        sliderItem.classList.remove('crop-active');
                    }
                }
            });

            // Update row active highlighting on table
            renderCropAutoplayTable(currentCrop);

            cropAutoplayIndex = (cropAutoplayIndex + 1) % crops.length;
        };

        playStep();
        cropAutoplayInterval = setInterval(playStep, 3000);
    }
}

function stopCropAutoplay() {
    if (cropAutoplayInterval) {
        clearInterval(cropAutoplayInterval);
        cropAutoplayInterval = null;
    }
    const btn = document.querySelector('.crop-autoplay-btn');
    if (btn) {
        const playIcon = btn.querySelector('.autoplay-play-icon');
        const pauseIcon = btn.querySelector('.autoplay-pause-icon');
        if (playIcon && pauseIcon) {
            playIcon.style.display = 'inline-block';
            pauseIcon.style.display = 'none';
        }
        btn.classList.remove('playing');
    }

    // Hide the autoplay table overlay
    const autoplayContainer = document.getElementById('crop-autoplay-overlay');
    if (autoplayContainer) {
        autoplayContainer.style.display = 'none';
    }

    // Hide the autoplay slider
    const sliderContainer = document.getElementById('crop-autoplay-slider');
    if (sliderContainer) {
        sliderContainer.classList.remove('show');
        sliderContainer.querySelectorAll('.crop-slider-item').forEach(item => {
            item.classList.remove('crop-active');
        });
    }

    // Restore the individual crop overlay card if a checkbox is checked
    const crops = ['Wheat', 'Rice', 'Cotton', 'Maize', 'Sugarcane'];
    let lastCheckedCrop = null;
    crops.forEach(crop => {
        const el = document.getElementById('crop-' + crop.toLowerCase() + '-toggle');
        if (el && el.checked) {
            lastCheckedCrop = crop;
        }
    });

    if (lastCheckedCrop) {
        showWheatImpactOverlay(lastCheckedCrop);
    }
}

function handleCropClassificationToggle(cropName, isChecked) {
    // Stop autoplay when a toggle is manually clicked
    stopCropAutoplay();

    const crops = ['Wheat', 'Rice', 'Cotton', 'Maize', 'Sugarcane'];

    if (isChecked) {
        // Enforce mutual exclusivity within crop classification dropdown: turn off all other crop toggles
        crops.forEach(otherCrop => {
            if (otherCrop !== cropName) {
                const el = document.getElementById('crop-' + otherCrop.toLowerCase() + '-toggle');
                if (el && el.checked) {
                    el.checked = false;
                    addWMSLayerToMap(otherCrop, false, 'crop-classification');
                }
            }
        });

        // Hide existing overlay display before swapping to prevent blink issues
        hideWheatImpactOverlay();

        // Add WMS layer for the checked crop
        addWMSLayerToMap(cropName, true, 'crop-classification');

        // Show impact widgets overlay if crop dataset exists
        if (cropData[cropName]) {
            showWheatImpactOverlay(cropName);
        }
    } else {
        // Remove WMS layer for the unchecked crop
        addWMSLayerToMap(cropName, false, 'crop-classification');

        // Hide impact widgets overlay
        hideWheatImpactOverlay();
    }
}

class MayAugControl {
    onAdd(mapInstance) {
        this._map = mapInstance;
        this._container = document.createElement('div');
        this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

        const button = document.createElement('button');
        button.className = 'mapboxgl-ctrl-icon mayaug-btn';
        button.type = 'button';
        button.title = 'Toggle May-Aug overlay';
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="14" rx="2" fill="#4caf50"/><path d="M3 19h18v2H3z" fill="#388e3c"/></svg>';

        button.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (mayAugState.visible) {
                hideMayAugOverlay();
                button.classList.remove('active');
            } else {
                showMayAugOverlay();
                button.classList.add('active');
            }
        };

        this._container.appendChild(button);
        return this._container;
    }

    onRemove() {
        if (this._container && this._container.parentNode) this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}

// Others (Simex) toggle
function handleOthersToggle(type, isActive) {
    // Enforce mutually exclusive selection for all layers EXCEPT vulnerable-districts
    if (isActive && type !== 'vulnerable-districts') {
        if (type !== 'drought-impacts') {
            const el = document.getElementById('others-drought-impacts-toggle');
            if (el) el.checked = false;
            hideHotspotOverlay();
        }
        if (type !== 'heatwave-impacts') {
            const el = document.getElementById('others-heatwave-impacts-toggle');
            if (el) el.checked = false;
            hideMayAugOverlay();
        }
        if (type !== 'comparison') {
            const el = document.getElementById('others-comparison-toggle');
            if (el) el.checked = false;
            hideComparisonOverlay();
        }
        if (type !== 'yield-comparison') {
            const el = document.getElementById('others-yield-comparison-toggle');
            if (el) el.checked = false;
            hideYieldComparisonOverlay();
        }

        // Turn off all crop classification toggles and hide their WMS layers
        stopCropAutoplay();
        const crops = ['Wheat', 'Rice', 'Cotton', 'Maize', 'Sugarcane'];
        crops.forEach(crop => {
            const el = document.getElementById('crop-' + crop.toLowerCase() + '-toggle');
            if (el && el.checked) {
                el.checked = false;
                addWMSLayerToMap(crop, false, 'crop-classification');
            }
        });
        hideWheatImpactOverlay();
    }

    if (type === 'vulnerable-districts') {
        if (isActive) {
            showVulnerableDistricts();
        } else {
            hideVulnerableDistricts();
        }
    } else if (type === 'drought-impacts') {
        if (isActive) {
            showHotspotOverlay();
        } else {
            hideHotspotOverlay();
        }
    } else if (type === 'heatwave-impacts') {
        if (isActive) {
            showMayAugOverlay();
        } else {
            hideMayAugOverlay();
        }
    } else if (type === 'comparison') {
        if (isActive) {
            showComparisonOverlay();
        } else {
            hideComparisonOverlay();
        }
    } else if (type === 'yield-comparison') {
        if (isActive) {
            showYieldComparisonOverlay();
        } else {
            hideYieldComparisonOverlay();
        }
    }
}

// Vulnerable Districts state & logic
let vulnerableBlinkInterval = null;

function showVulnerableDistricts() {
    if (!map) return;

    // Add source if it doesn't exist
    if (!map.getSource('vulnerable-districts-source')) {
        map.addSource('vulnerable-districts-source', {
            type: 'geojson',
            data: 'http://172.18.0.80:8080/geoserver/HEATWAVE/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=HEATWAVE%3AVulnerable_new&outputFormat=application%2Fjson'
        });
    }

    // Add layer if it doesn't exist
    if (!map.getLayer('vulnerable-districts-layer')) {
        map.addLayer({
            'id': 'vulnerable-districts-layer',
            'type': 'fill',
            'source': 'vulnerable-districts-source',
            'paint': {
                'fill-color': '#ff0000',
                'fill-opacity': 0.8,
                'fill-outline-color': '#ffffff'
            }
        });
    } else {
        map.setLayoutProperty('vulnerable-districts-layer', 'visibility', 'visible');
    }

    // Continuously blink and move to top
    let blinkOpacity = 0.8;
    let fadeOut = true;

    if (vulnerableBlinkInterval) clearInterval(vulnerableBlinkInterval);

    vulnerableBlinkInterval = setInterval(() => {
        if (!map.getLayer('vulnerable-districts-layer')) return;

        // Ensure it stays on top by constantly moving it to the end of layers
        map.moveLayer('vulnerable-districts-layer');

        if (fadeOut) {
            blinkOpacity -= 0.1;
            if (blinkOpacity <= 0.2) fadeOut = false;
        } else {
            blinkOpacity += 0.1;
            if (blinkOpacity >= 0.8) fadeOut = true;
        }
        map.setPaintProperty('vulnerable-districts-layer', 'fill-opacity', blinkOpacity);
    }, 150); // Gives a noticeable flashing/blinking effect
}

function hideVulnerableDistricts() {
    if (vulnerableBlinkInterval) {
        clearInterval(vulnerableBlinkInterval);
        vulnerableBlinkInterval = null;
    }
    if (map && map.getLayer('vulnerable-districts-layer')) {
        map.setLayoutProperty('vulnerable-districts-layer', 'visibility', 'none');
    }
}

// Comparison overlay state
const comparisonState = {
    visible: false,
    element: null
};

function showComparisonOverlay() {
    if (!document) return;
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    let container = document.getElementById('comparison-overlay');
    if (!container) {
        container = document.createElement('div');
        container.id = 'comparison-overlay';
        container.style.position = 'absolute';
        container.style.bottom = '12px';
        container.style.right = '12px';
        container.style.width = '800px';
        container.style.zIndex = '1202';
        container.style.background = '#111'; // Dark background
        container.style.padding = '25px 10px 0 10px';
        container.style.borderRadius = '8px';
        container.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
        container.style.overflow = 'hidden';

        container.innerHTML = `
            <a href="https://flourish-user-preview.com/28968077/JKMmslA9X7eAuD7RYbv3EhT7eEoAywmrf8s1N1GC5PgJZN5c8dGUaH22eHFXyfrw/" target="_blank" title="Open in new tab" style="position: absolute; top: 8px; right: 10px; z-index: 10; background: rgba(255,255,255,0.2); border: none; color: white; cursor: pointer; border-radius: 4px; padding: 4px 8px; text-decoration: none; display: flex; align-items: center; justify-content: center; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.4)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
            <iframe src="https://flo.uri.sh/visualisation/28968077/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width: 100%; height: 500px; border: none; margin-bottom: -20px;"></iframe>`;

        mapContainer.appendChild(container);
        comparisonState.element = container;
    } else {
        container.style.display = 'block';
        comparisonState.element = container;
    }

    comparisonState.visible = true;
    updateComparisonOverlayPosition();
}

function hideComparisonOverlay() {
    const container = document.getElementById('comparison-overlay');
    if (container) {
        container.style.display = 'none';
    }
    comparisonState.visible = false;
}

function updateComparisonOverlayPosition() {
    const container = document.getElementById('comparison-overlay');
    if (!container || container.style.display === 'none') {
        return;
    }

    const legend = document.getElementById('map-legend');
    const hasLegend = !!(legend && legend.style.display !== 'none' && legend.querySelectorAll('.legend-item').length > 0);
    const bottomOffset = hasLegend ? (legend.offsetHeight + 18) : 12;

    container.style.bottom = bottomOffset + 'px';
    container.style.right = '12px';
}

// Yield Comparison overlay state
const yieldComparisonState = {
    visible: false,
    element: null
};

function showYieldComparisonOverlay() {
    if (!document) return;
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    let container = document.getElementById('yield-comparison-overlay');
    if (!container) {
        container = document.createElement('div');
        container.id = 'yield-comparison-overlay';
        container.style.position = 'absolute';
        container.style.bottom = '12px';
        container.style.right = '12px';
        container.style.width = '800px';
        container.style.zIndex = '1202';
        container.style.background = '#111'; // Dark background
        container.style.padding = '25px 10px 0 10px';
        container.style.borderRadius = '8px';
        container.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
        container.style.overflow = 'hidden';

        container.innerHTML = `
            <a href="https://flourish-user-preview.com/27886116/6yRSxejYw95e_LJ-VmioGNI2t4oTAs9uFvT5tzs6D9rO4x515PFAYiOsvnIhnVhD/" target="_blank" title="Open in new tab" style="position: absolute; top: 8px; right: 10px; z-index: 10; background: rgba(255,255,255,0.2); border: none; color: white; cursor: pointer; border-radius: 4px; padding: 4px 8px; text-decoration: none; display: flex; align-items: center; justify-content: center; transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.4)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
            <iframe src="https://flo.uri.sh/visualisation/27886116/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width: 100%; height: 500px; border: none; margin-bottom: -20px;"></iframe>`;

        mapContainer.appendChild(container);
        yieldComparisonState.element = container;
    } else {
        container.style.display = 'block';
        yieldComparisonState.element = container;
    }

    yieldComparisonState.visible = true;
    updateYieldComparisonOverlayPosition();
}

function hideYieldComparisonOverlay() {
    const container = document.getElementById('yield-comparison-overlay');
    if (container) {
        container.style.display = 'none';
    }
    yieldComparisonState.visible = false;
}

function updateYieldComparisonOverlayPosition() {
    const container = document.getElementById('yield-comparison-overlay');
    if (!container || container.style.display === 'none') {
        return;
    }

    const legend = document.getElementById('map-legend');
    const hasLegend = !!(legend && legend.style.display !== 'none' && legend.querySelectorAll('.legend-item').length > 0);
    const bottomOffset = hasLegend ? (legend.offsetHeight + 18) : 12;

    container.style.bottom = bottomOffset + 'px';
    container.style.right = '12px';
}

let mainMapLifecycleRegistry = null;

function forceMapResize(mapInstance) {
    if (!mapInstance) return;

    requestAnimationFrame(() => {
        try {
            mapInstance.resize();
        } catch (error) {
            console.warn('Main map resize warning:', error);
        }
    });

    // Handle delayed resize to ensure rendering transition finishes
    setTimeout(() => {
        try {
            mapInstance.resize();
        } catch (error) {
            console.warn('Main map delayed resize warning:', error);
        }
    }, 200);

    setTimeout(() => {
        try {
            mapInstance.resize();
        } catch (error) {
            console.warn('Main map transition resize warning:', error);
        }
    }, 350);
}

function initMap() {
    // Teardown any preexisting instance to reclaim WebGL memory
    if (typeof map !== 'undefined' && map) {
        try {
            map.remove();
        } catch (e) {
            console.warn("Main map cleanup skipped:", e);
        }
        map = null;
    }

    // Reset boundary event states and selections
    districtBoundaryEventsBound = false;
    tehsilBoundaryEventsBound = false;
    selectedDistrict = [];
    selectedTehsils = [];

    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [69.3451, 30.3753], // Center on Pakistan
        zoom: 4
    });

    window.map = map;
    window.mapInstance = map;

    // Set up lifecycle AbortController to prevent duplicate listeners
    if (mainMapLifecycleRegistry) {
        mainMapLifecycleRegistry.abort();
    }
    mainMapLifecycleRegistry = new AbortController();
    const signal = mainMapLifecycleRegistry.signal;

    const resizeHandler = () => {
        if (!window.map || window.map !== map) return;

        // Apply native map padding dynamically instead of CSS padding-top
        // to prevent click/highlight coordinate offsets.
        const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
        map.setPadding({ top: isFullscreen ? 74 : 0, bottom: 0, left: 0, right: 0 });

        forceMapResize(map);
    };

    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(eventType => {
        document.addEventListener(eventType, resizeHandler, { signal });
    });
    window.addEventListener('resize', resizeHandler, { signal });

    map.on('remove', () => {
        if (mainMapLifecycleRegistry) {
            mainMapLifecycleRegistry.abort();
            mainMapLifecycleRegistry = null;
        }
    });

    // Add basemap control
    map.addControl(new BasemapControl(), 'top-right');

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add fullscreen control
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    // Add district blink control
    map.addControl(new DistrictBlinkControl(), 'top-right');

    // Map loaded event
    let mapLoaded = false;
    const pendingLayerOps = [];

    map.on('load', function () {
        mapLoaded = true;
        pendingLayerOps.forEach(fn => fn());
        pendingLayerOps.length = 0;
    });
    function whenMapReady(fn) {
    if (mapLoaded) { fn(); } else { pendingLayerOps.push(fn); }
}
}

// Export for resize handler
window.mapInstance = null;

function handleMainMapFloodToggle(year, isChecked) {
    if (!map) return;
    const layerData = layerUrls['Flood Layer'][year];
    const layerIdPrefix = 'main_flood_' + year;

    if (isChecked) {
        if (layerData.type === 'tms') {
            addMainMapTMSLayer(layerIdPrefix, layerData);
        } else if (layerData.type === 'wms') {
            addMainMapWMSLayer(layerIdPrefix, layerData.url);
        }
    } else {
        removeMainMapCommonLayer(layerIdPrefix);
    }
}

function addMainMapTMSLayer(idPrefix, layerData) {
    const sourceId = idPrefix + '_tms';
    const layerId = idPrefix + '_layer';

    if (!map.getSource(sourceId)) {
        map.addSource(sourceId, {
            type: 'vector',
            scheme: 'tms',
            tiles: [layerData.url]
        });
    }

    if (!map.getLayer(layerId)) {
        map.addLayer({
            id: layerId,
            type: 'fill',
            source: sourceId,
            'source-layer': layerData.layerId,
            paint: {
                'fill-color': 'rgba(0, 0, 255, 0.5)',
                'fill-opacity': 0.7
            }
        });
    }

    // Ensure it shows at the top if other layers are also on
    map.moveLayer(layerId);
}

function addMainMapWMSLayer(idPrefix, url) {
    const sourceId = idPrefix + '_wms';
    const layerId = idPrefix + '_layer';

    if (!map.getSource(sourceId)) {
        map.addSource(sourceId, {
            type: 'raster',
            tiles: [url],
            tileSize: 256
        });
    }

    if (!map.getLayer(layerId)) {
        map.addLayer({
            id: layerId,
            type: 'raster',
            source: sourceId,
            paint: {
                'raster-opacity': 1.0
            }
        });
    }

    // Ensure it shows at the top if other layers are also on
    map.moveLayer(layerId);
}

function removeMainMapCommonLayer(idPrefix) {
    if (!map) return;
    const layerId = idPrefix + '_layer';
    const wmsSourceId = idPrefix + '_wms';
    const tmsSourceId = idPrefix + '_tms';

    if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
    }
    if (map.getSource(wmsSourceId)) {
        map.removeSource(wmsSourceId);
    }
    if (map.getSource(tmsSourceId)) {
        map.removeSource(tmsSourceId);
    }
}

// Make functions available globally
window.toggleMapMenu = toggleMapMenu;
window.handleMainMapFloodToggle = handleMainMapFloodToggle;
window.toggleAccordion = toggleAccordion;
window.handleLayerClick = handleLayerClick;
window.handleVegetationToggle = handleVegetationToggle;
window.handleCropTopologyToggle = handleCropTopologyToggle;
window.handlePrecipitationToggle = handlePrecipitationToggle;
window.handleDroughtIndexToggle = handleDroughtIndexToggle;
window.handleProvincialToggle = handleProvincialToggle;
window.handleCropHighlightToggle = handleCropHighlightToggle;
window.handleTemperatureToggle = handleTemperatureToggle;
window.initMap = initMap;
window.startDistrictBlinking = startDistrictBlinking;
window.stopDistrictBlinking = stopDistrictBlinking;
window.showHotspotOverlay = showHotspotOverlay;
window.hideHotspotOverlay = hideHotspotOverlay;
window.showMayAugOverlay = showMayAugOverlay;
window.hideMayAugOverlay = hideMayAugOverlay;
window.handleCropClassificationToggle = handleCropClassificationToggle;
window.toggleWheatCard = toggleWheatCard;
window.showWheatImpactOverlay = showWheatImpactOverlay;
window.hideWheatImpactOverlay = hideWheatImpactOverlay;
window.handleCropAutoplayToggle = handleCropAutoplayToggle;
window.stopCropAutoplay = stopCropAutoplay;