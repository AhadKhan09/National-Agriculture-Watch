// Layer URLs
const layerUrls = {
    'National Boundary': `http://${Ahad}:8080/geoserver/Pak_Boundaries/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Pak_Boundaries%3ANational_Boundary&outputFormat=application%2Fjson`,
    'Provincial Boundary': `http://${Ahad}:8080/geoserver/Pak_Boundaries/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Pak_Boundaries%3AProvincial_Boundary&outputFormat=application%2Fjson`,
    'District Boundary': `http://${Ahad}:8080/geoserver/Pak_Boundaries/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Pak_Boundaries%3ADistrict_Boundary&outputFormat=application%2Fjson`,
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
    'Crop Classification': {
        'Wheat': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Wheat_Dummy&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Rice': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Rice_Dummy&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Cotton': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Cotton_Agri&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Maize': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Maize_Dummy&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Sugarcane': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Sugarcane_Dummy&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`
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

function ensureDistrictBoundaryLayers() {
    if (map.getSource('districtBoundary')) {
        return Promise.resolve();
    }

    const url = layerUrls['District Boundary'];

    return fetch(url)
        .then(response => response.json())
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
                minzoom: 6,
                layout: {
                    visibility: 'none',
                    'text-field': ['coalesce', ['get', 'District'], ['get', 'DISTRICT'], ''],
                    'text-letter-spacing': 0.1,
                    'text-size': 13,
                    'text-offset': [0, 0],
                    'text-anchor': 'center'
                },
                paint: {
                    'text-color': 'black',
                    'text-halo-color': '#000000'
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
                filter: ['in', ['coalesce', ['get', 'District'], ['get', 'DISTRICT']], ['literal', []]]
            });

            if (!districtBoundaryEventsBound) {
                map.on('click', 'DistrictBoundary', (e) => {
                    const visibility = map.getLayoutProperty('districtBoundary_label', 'visibility');
                    if (visibility !== 'visible') {
                        return;
                    }

                    if (e.features && e.features.length > 0) {
                        const clickedFeature = e.features[0];
                        const districtName = clickedFeature.properties.District || clickedFeature.properties.DISTRICT;

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
                            ['coalesce', ['get', 'District'], ['get', 'DISTRICT']],
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

    return fetch(url)
        .then(response => response.json())
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
                const layerName = key.replace(/^(veg_|crop_|flood_|crop-stress_|cropping-zones_|provincial_|precip_)/, '');
                const normalizedKey = key.replace(/^(veg_|crop_|flood_|crop-stress_|cropping-zones_|provincial_|precip_)/, '');

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
        lossLabel: "Loss",
        prodLabel: "Area / Prod.",
        chartTitle: "Wheat Yield: Actual vs Potential",
        chartYTitle: "Wheat Yield (M tonnes)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 24,
        gridMax: 33,
        gridLabels: [24, 27, 30, 33],
        tableRows: [
            { year: "2021–22", area: "8.97 M ha", prod: "26.20 M t", event: "Extreme heat hit during the critical grain-filling stage", loss: "4.58%", severity: "moderate" },
            { year: "2022–23", area: "9.04 M ha", prod: "28.16 M t", event: "Standing flood water delayed sowing", loss: "4.1%", severity: "moderate" },
            { year: "2023–24", area: "9.59 M ha", prod: "31.43 M t", event: "Post-flood recovery period", loss: "1.0%", severity: "low" },
            { year: "2024–25", area: "9.10 M ha", prod: "28.42 M t", event: "Prolonged heatwaves & localized rainfall", loss: "12.9%", severity: "severe" },
            { year: "2025–26", area: "9.39 M ha", prod: "29.31 M t", event: "Above-normal temperatures", loss: "7.5%", severity: "elevated" }
        ],
        chartData: {
            actual: [26.20, 28.16, 31.43, 28.42, 29.31],
            potential: [27.59, 29.31, 31.74, 32.08, 31.50]
        }
    },
    Rice: {
        title: "🍚 Rice Production · Climate Impact",
        prodUnit: "M tons",
        lossLabel: "Loss",
        prodLabel: "Area / Prod.",
        chartTitle: "Rice Yield: Actual vs Potential",
        chartYTitle: "Rice Yield (M tons)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 6,
        gridMax: 12,
        gridLabels: [6, 8, 10, 12],
        tableRows: [
            { year: "2021–22", area: "3.53 M ha", prod: "9.32 M tons", event: "Heatwave occurred before the rice nursery transplantation season", loss: "3.22%", severity: "low" },
            { year: "2022–23", area: "2.98 M ha", prod: "7.32 M tons", event: "Historic monsoon floods, waterlogging & damage to agricultural infrastructure", loss: "27.3%", severity: "severe" },
            { year: "2023–24", area: "3.60 M ha", prod: "9.87 M tons", event: "Post-flood recovery, favorable monsoon rainfall, higher market prices", loss: "3.1%", severity: "low" },
            { year: "2024–25", area: "3.80 M ha", prod: "9.72 M tons", event: "Prolonged heatwaves & localized rainfall", loss: "3.1%", severity: "low" },
            { year: "2025–26", area: "3.03 M ha", prod: "9.99 M tons", event: "Late autumn flash floods before harvesting", loss: "15.1%", severity: "severe" }
        ],
        chartData: {
            actual: [9.32, 7.32, 9.78, 9.78, 9.99],
            potential: [9.62, 9.32, 10.08, 10.08, 11.5]
        }
    },
    Cotton: {
        title: "🌱 Cotton Production · Climate Impact",
        prodUnit: "M Bales",
        lossLabel: "Loss",
        prodLabel: "Area / Prod.",
        chartTitle: "Cotton Yield: Actual vs Potential",
        chartYTitle: "Cotton Yield (M Bales)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 3,
        gridMax: 12,
        gridLabels: [3, 6, 9, 12],
        tableRows: [
            { year: "2021–22", area: "1.93 M ha", prod: "8.33 M Bales", event: "Germination heat stress", loss: "12.7%", severity: "elevated" },
            { year: "2022–23", area: "2.14 M ha", prod: "3.9 M Bales", event: "Historic monsoon floods", loss: "53%", severity: "severe" },
            { year: "2023–24", area: "2.42 M ha", prod: "8.35 M Bales", event: "Recovery year floods and expansion in sown area", loss: "13.4%", severity: "elevated" },
            { year: "2024–25", area: "2.02 M ha", prod: "5.52 M Bales", event: "Erratic monsoons outbreaks of whitefly and pink bollworm pests", loss: "28.4%", severity: "severe" },
            { year: "2025–26", area: "2.11 M ha", prod: "7.05 M Bales", event: "High late-season moisture caused mature cotton bolls to rot and drop off, Leaf curl virus", loss: "14.9%", severity: "elevated" }
        ],
        chartData: {
            actual: [8.33, 3.9, 8.35, 5.52, 7.05],
            potential: [10.56, 8.31, 10.72, 8.08, 10.5]
        }
    },
    Maize: {
        title: "🌽 Maize Production · Climate Impact",
        prodUnit: "M tons",
        lossLabel: "Loss",
        prodLabel: "Area / Prod.",
        chartTitle: "Maize Yield: Actual vs Potential",
        chartYTitle: "Maize Yield (M tons)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 8,
        gridMax: 14,
        gridLabels: [8, 10, 12, 14],
        tableRows: [
            { year: "2021–22", area: "1.65 M ha", prod: "9.52 M tons", event: "Heat wave, Water scarcity", loss: "13.76%", severity: "elevated" },
            { year: "2022–23", area: "1.71 M ha", prod: "8.74 M tons", event: "Catastrophic Floods, Pests and Diseases", loss: "17.2%", severity: "severe" },
            { year: "2023–24", area: "1.75 M ha", prod: "9.21 M tons", event: "Post-Flood Recovery Period", loss: "10.0%", severity: "elevated" },
            { year: "2024–25", area: "1.50 M ha", prod: "9.30 M tons", event: "Heatwaves during pollination, fertilization failure", loss: "4.3%", severity: "moderate" },
            { year: "2025–26", area: "1.50 M ha", prod: "9.70 M tons", event: "Pest & Disease, Erratic Rainfall", loss: "23.7%", severity: "severe" }
        ],
        chartData: {
            actual: [9.52, 8.74, 9.21, 9.3, 9.7],
            potential: [10.83, 10.24, 10.13, 9.7, 12]
        }
    },
    Sugarcane: {
        title: "🎋 Sugarcane Production · Climate Impact",
        prodUnit: "M tons",
        lossLabel: "Loss",
        prodLabel: "Area / Prod.",
        chartTitle: "Sugarcane Yield: Actual vs Potential",
        chartYTitle: "Sugarcane Yield (M tons)",
        legendActual: "Actual Yield",
        legendPotential: "Potential",
        gridMin: 80,
        gridMax: 92,
        gridLabels: [80, 84, 88, 92],
        tableRows: [
            { year: "2021–22", area: "1.26 M ha", prod: "88.65 M tons", event: "Heat increased water requirements", loss: "0.68%", severity: "low" },
            { year: "2022–23", area: "1.31 M ha", prod: "87.64 M tons", event: "Historic monsoon floods, delayed the industrial crushing season", loss: "1.7%", severity: "low" },
            { year: "2023–24", area: "1.22 M ha", prod: "86.4 M tons", event: "Heat stress & canal water shortage", loss: "1.9%", severity: "low" },
            { year: "2024–25", area: "1.14 M ha", prod: "83.5 M tons", event: "Shifting of land to rice due to Lower economic returns", loss: "1.8%", severity: "low" },
            { year: "2025–26", area: "1.16 M ha", prod: "84.5 M tons", event: "Strong winds and late river surges", loss: "4.5%", severity: "moderate" }
        ],
        chartData: {
            actual: [88.65, 87.64, 86.4, 83.5, 84.5],
            potential: [89.25, 89.14, 88.04, 85.04, 88.3]
        }
    }
};

function showWheatImpactOverlay(cropName = 'Wheat') {
    if (!document) return;
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

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

            /* Card A: table (large size like Impact Calculator) */
            .wheat-table { width:100%; border-collapse:collapse; font-size:20px; color: var(--text-light); table-layout: fixed; }
            .wheat-table th {
              text-align:center;
              font-size:16px;
              font-weight:700;
              color: var(--sunset-2);
              text-transform:uppercase;
              letter-spacing:.4px;
              padding:0 4px 10px;
              border-bottom:1px solid rgba(255,255,255,.12);
            }
            .wheat-table th:nth-child(1){ width:20%; }
            .wheat-table th:nth-child(2){ width:26%; }
            .wheat-table th:nth-child(3){ width:32%; }
            .wheat-table th:nth-child(4){ width:22%; }

            .wheat-table td { padding:10px 4px; text-align:center; vertical-align:middle; border-bottom:1px solid rgba(255,255,255,.06); }

            tr.wheat-data-row { opacity:0; animation: wheatRowIn .5s ease forwards; }
            @keyframes wheatRowIn { from { opacity:0; transform: translateX(-10px); } to { opacity:1; transform: translateX(0); } }
            tr.wheat-data-row:hover { background: rgba(255,255,255,.05); }
            tr.wheat-data-row:last-child td { border-bottom:none; }

            .wheat-year-cell { font-weight:700; color: var(--text-light); font-size:18px; }
            .wheat-num-cell { color: var(--text-muted); line-height:1.55; font-size:16px; }
            .wheat-num-cell .wheat-unit { font-size:13px; opacity:.7; }
            .wheat-event-cell { color:#e6cfe0; font-style:italic; line-height:1.4; font-size:14px; }

            /* Blinking loss badge: zoom blinks the bounding box + digit together in sync */
            .wheat-loss-badge {
              display:inline-flex;
              align-items:center;
              justify-content:center;
              font-size:16px;
              font-weight:700;
              width:70px;
              height:26px;
              border-radius:13px;
              color:#1c1c1c;
              white-space:nowrap;
              transform-origin:center;
              animation: wheatZoomBlink 1.4s ease-in-out infinite;
            }
            
            @keyframes wheatZoomBlink {
              0% { transform: scale(0.85); opacity: 0.6; }
              50% { transform: scale(1.15); opacity: 1; }
              100% { transform: scale(0.85); opacity: 0.6; }
            }

            .wheat-loss-badge.low { background: var(--low); }
            .wheat-loss-badge.moderate { background: var(--moderate); }
            .wheat-loss-badge.elevated { background: var(--elevated); }
            .wheat-loss-badge.severe { background: var(--severe); color:#fff; }

            /* Card B: SVG chart */
            .wheat-chart-svg { width:100%; height:auto; display:block; }

            .wheat-line-actual, .wheat-line-potential {
              fill:none;
              stroke-width:2.5;
              stroke-linecap:round;
              stroke-linejoin:round;
              stroke-dasharray:1000;
              stroke-dashoffset:1000;
              animation: wheatDrawLine 1.6s ease forwards;
            }
            .wheat-line-actual { stroke: var(--aurora-1); animation-delay:.25s; }
            .wheat-line-potential { stroke: var(--aurora-2); stroke-dasharray: 6 5; animation-delay:.05s; }
            @keyframes wheatDrawLine { to { stroke-dashoffset:0; } }

            .wheat-gap-fill { fill: var(--severe); opacity:0; animation: wheatFadeIn 1s ease forwards; animation-delay:1.5s; }
            @keyframes wheatFadeIn { to { opacity:.16; } }

            .wheat-point { opacity:0; transform-box: fill-box; transform-origin:center; animation: wheatPopIn .4s ease forwards; transition: r 0.2s ease, filter 0.2s ease; }
            .wheat-point:hover { r: 6; filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8)); cursor: pointer; }
            @keyframes wheatPopIn { from { opacity:0; transform: scale(0); } to { opacity:1; transform: scale(1); } }
            .wheat-point-actual { fill: var(--aurora-1); }
            .wheat-point-potential { fill: var(--aurora-2); }

            .wheat-grid-line { stroke: rgba(255,255,255,.06); stroke-width:1; opacity: 0; animation: wheatFadeInGrid 0.8s ease forwards; }
            @keyframes wheatFadeInGrid { to { opacity: 1; } }
            
            .wheat-axis-label, .wheat-axis-title { opacity: 0; animation: wheatFadeInLabels 0.8s ease forwards; animation-delay: 0.4s; }
            @keyframes wheatFadeInLabels { to { opacity: 1; } }

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
              width: 220px;
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
            .wheat-tooltip-event {
              font-size: 12px;
              font-style: italic;
              color: #ffb86b;
              margin-top: 6px;
              border-top: 1px dashed rgba(255, 255, 255, 0.15);
              padding-top: 6px;
              line-height: 1.3;
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

    // Build Table Rows dynamically
    const tableRowsHTML = crop.tableRows.map((row, idx) => {
        const delay = (idx * 0.09).toFixed(2);
        const areaParts = row.area.split(' ');
        const prodParts = row.prod.split(' ');
        
        const areaVal = areaParts[0];
        const areaUnit = areaParts.slice(1).join(' ');
        
        const prodVal = prodParts[0];
        const prodUnit = prodParts.slice(1).join(' ');
        
        return `
          <tr class="wheat-data-row" style="animation-delay: ${delay}s;">
            <td class="wheat-year-cell">${row.year}</td>
            <td class="wheat-num-cell">${areaVal}<span class="wheat-unit"> ${areaUnit}</span><br>${prodVal}<span class="wheat-unit"> ${prodUnit}</span></td>
            <td class="wheat-event-cell">${row.event}</td>
            <td><span class="wheat-loss-badge ${row.severity}"><span class="wheat-loss-digit">${row.loss}</span></span></td>
          </tr>
        `;
    }).join('\n');

    // Build Chart Paths & coordinates dynamically
    const xCoords = [60, 132.5, 205, 277.5, 350];
    const range = crop.gridMax - crop.gridMin;
    const actualY = crop.chartData.actual.map(v => 130 - ((v - crop.gridMin) / range) * 120);
    const potentialY = crop.chartData.potential.map(v => 130 - ((v - crop.gridMin) / range) * 120);

    const actualPathD = `M${xCoords[0]},${actualY[0]} L${xCoords[1]},${actualY[1]} L${xCoords[2]},${actualY[2]} L${xCoords[3]},${actualY[3]} L${xCoords[4]},${actualY[4]}`;
    const potentialPathD = `M${xCoords[0]},${potentialY[0]} L${xCoords[1]},${potentialY[1]} L${xCoords[2]},${potentialY[2]} L${xCoords[3]},${potentialY[3]} L${xCoords[4]},${potentialY[4]}`;
    const gapFillD = `M${xCoords[0]},${actualY[0]} L${xCoords[1]},${actualY[1]} L${xCoords[2]},${actualY[2]} L${xCoords[3]},${actualY[3]} L${xCoords[4]},${actualY[4]} L${xCoords[4]},${potentialY[4]} L${xCoords[3]},${potentialY[3]} L${xCoords[2]},${potentialY[2]} L${xCoords[1]},${potentialY[1]} L${xCoords[0]},${potentialY[0]} Z`;

    const gridLabelsHTML = crop.gridLabels.map((lbl, idx) => {
        const yVal = 133 - idx * 40;
        return `<text class="wheat-axis-label wheat-axis-label-y" x="50" y="${yVal}">${lbl}</text>`;
    }).join('\n');

    const actualCircles = actualY.map((y, idx) => {
        const val = crop.chartData.actual[idx];
        const delay = (1.3 + idx * 0.15).toFixed(2);
        const year = crop.tableRows[idx].year;
        return `<circle class="wheat-point point-actual" cx="${xCoords[idx]}" cy="${y}" r="3.2" style="animation-delay:${delay}s"><title>${year} Actual: ${val} ${crop.prodUnit}</title></circle>`;
    }).join('\n');

    const potentialCircles = potentialY.map((y, idx) => {
        const val = crop.chartData.potential[idx];
        const delay = (1.3 + idx * 0.15).toFixed(2);
        const year = crop.tableRows[idx].year;
        return `<circle class="wheat-point point-potential" cx="${xCoords[idx]}" cy="${y}" r="2.6" style="animation-delay:${delay}s"><title>${year} Potential: ${val} ${crop.prodUnit}</title></circle>`;
    }).join('\n');

    container.innerHTML = `
        <div class="wheat-stack">
          <!-- CARD A — Production / Climate Impact table -->
          <div class="wheat-card wheat-cardA" id="wheat-cardA">
            <div class="wheat-card-header" onclick="toggleWheatCard('wheat-cardA')">
              <div class="wheat-header-text">
                <h3>${crop.title}</h3>
              </div>
              <svg class="wheat-toggle-icon" viewBox="0 0 24 24" fill="none" style="width: 18px; height: 18px; position: absolute; right: 10px; top: 50%; transform: translateY(-50%); transition: transform 0.35s ease;">
                <path d="M6 9l6 6 6-6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke="#3a1226"/>
              </svg>
            </div>
            <div class="wheat-card-body">
              <table class="wheat-table">
                <thead>
                  <tr>
                    <th>Crop Year</th>
                    <th>${crop.prodLabel}</th>
                    <th>Major Disaster / Climate Event</th>
                    <th>${crop.lossLabel}</th>
                  </tr>
                </thead>
                <tbody id="wheat-tableBody">
                  ${tableRowsHTML}
                </tbody>
              </table>
            </div>
          </div>

          <!-- CARD B — Yield trend chart (pure SVG) -->
          <div class="wheat-card wheat-cardB" id="wheat-cardB" style="position:relative;">
            <div class="wheat-card-header" onclick="toggleWheatCard('wheat-cardB')">
              <div class="wheat-header-text">
                <h3>${crop.chartTitle}</h3>
              </div>
              <svg class="wheat-toggle-icon" viewBox="0 0 24 24" fill="none" style="width: 18px; height: 18px; position: absolute; right: 10px; top: 50%; transform: translateY(-50%); transition: transform 0.35s ease;">
                <path d="M6 9l6 6 6-6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke="#062330"/>
              </svg>
            </div>
            <div class="wheat-card-body" style="position:relative;">
              <svg class="wheat-chart-svg" viewBox="0 0 380 195" xmlns="http://www.w3.org/2000/svg">
                <line class="wheat-grid-line" x1="60" y1="130" x2="350" y2="130"/>
                <line class="wheat-grid-line" x1="60" y1="90"  x2="350" y2="90"/>
                <line class="wheat-grid-line" x1="60" y1="50"  x2="350" y2="50"/>
                <line class="wheat-grid-line" x1="60" y1="10"  x2="350" y2="10"/>
                ${gridLabelsHTML}

                <text class="wheat-axis-title" x="20" y="70" transform="rotate(-90 20 70)">${crop.chartYTitle}</text>

                <path class="wheat-gap-fill" d="${gapFillD}"/>

                <path class="wheat-line-potential" d="${potentialPathD}"/>
                <path class="wheat-line-actual" d="${actualPathD}"/>

                ${actualCircles}
                ${potentialCircles}

                <!-- Interactive Tracker components -->
                <line id="wheat-tracker-line" class="wheat-tracker-line" x1="0" y1="10" x2="0" y2="130" style="display:none;" />
                <circle id="wheat-tracker-actual" class="wheat-tracker-highlight point-actual-highlight" cx="0" cy="0" r="5" style="display:none;" />
                <circle id="wheat-tracker-potential" class="wheat-tracker-highlight point-potential-highlight" cx="0" cy="0" r="5" style="display:none;" />

                <text class="wheat-axis-label wheat-axis-label-x" x="60"    y="152">21–22</text>
                <text class="wheat-axis-label wheat-axis-label-x" x="132.5" y="152">22–23</text>
                <text class="wheat-axis-label wheat-axis-label-x" x="205"   y="152">23–24</text>
                <text class="wheat-axis-label wheat-axis-label-x" x="277.5" y="152">24–25</text>
                <text class="wheat-axis-label wheat-axis-label-x" x="350"   y="152">25–26</text>

                <text class="wheat-axis-title" x="205" y="178">Crop Year</text>
              </svg>

              <!-- Chart Tooltip -->
              <div id="wheat-chart-tooltip" class="wheat-chart-tooltip" style="opacity:0; pointer-events:none;"></div>

              <div class="wheat-legend-row">
                <span><span class="wheat-legend-dot wheat-dot-actual"></span>${crop.legendActual}</span>
                <span><span class="wheat-legend-dot wheat-dot-potential"></span>${crop.legendPotential}</span>
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
    initWheatChartInteractivity(crop);
}

function initWheatChartInteractivity(crop) {
    const cardB = document.getElementById('wheat-cardB');
    if (!cardB) return;

    const svg = cardB.querySelector('.wheat-chart-svg');
    const tooltip = cardB.querySelector('#wheat-chart-tooltip');
    const trackerLine = svg.querySelector('#wheat-tracker-line');
    const trackerActual = svg.querySelector('#wheat-tracker-actual');
    const trackerPotential = svg.querySelector('#wheat-tracker-potential');

    if (!svg || !tooltip) return;

    const xCoords = [60, 132.5, 205, 277.5, 350];
    const range = crop.gridMax - crop.gridMin;
    const actualY = crop.chartData.actual.map(v => 130 - ((v - crop.gridMin) / range) * 120);
    const potentialY = crop.chartData.potential.map(v => 130 - ((v - crop.gridMin) / range) * 120);

    svg.addEventListener('mousemove', (e) => {
        const rect = svg.getBoundingClientRect();
        // Calculate mouse X/Y relative to the SVG viewBox (0 0 380 195)
        const mouseX = ((e.clientX - rect.left) / rect.width) * 380;
        const mouseY = ((e.clientY - rect.top) / rect.height) * 195;

        // Find the closest coordinate index
        let closestIdx = 0;
        let minDist = Infinity;
        xCoords.forEach((cx, idx) => {
            const dist = Math.abs(mouseX - cx);
            if (dist < minDist) {
                minDist = dist;
                closestIdx = idx;
            }
        });

        // If the mouse is close enough to the chart area
        if (mouseX >= 40 && mouseX <= 370 && mouseY >= 0 && mouseY <= 150) {
            const targetX = xCoords[closestIdx];
            const targetActualY = actualY[closestIdx];
            const targetPotentialY = potentialY[closestIdx];
            const row = crop.tableRows[closestIdx];

            // Position and show vertical line
            trackerLine.setAttribute('x1', targetX);
            trackerLine.setAttribute('x2', targetX);
            trackerLine.style.display = 'block';

            // Position and show highlight circles
            trackerActual.setAttribute('cx', targetX);
            trackerActual.setAttribute('cy', targetActualY);
            trackerActual.style.display = 'block';

            trackerPotential.setAttribute('cx', targetX);
            trackerPotential.setAttribute('cy', targetPotentialY);
            trackerPotential.style.display = 'block';

            // Update tooltip content
            const lossVal = row.loss;
            const eventText = row.event;
            const actualVal = crop.chartData.actual[closestIdx];
            const potentialVal = crop.chartData.potential[closestIdx];
            
            tooltip.innerHTML = `
                <div class="wheat-tooltip-year">${row.year}</div>
                <div class="wheat-tooltip-row">
                    <span class="wheat-tooltip-label">Actual:</span>
                    <span class="wheat-tooltip-val" style="color:var(--aurora-1);">${actualVal} ${crop.prodUnit}</span>
                </div>
                <div class="wheat-tooltip-row">
                    <span class="wheat-tooltip-label">Potential:</span>
                    <span class="wheat-tooltip-val" style="color:var(--aurora-2);">${potentialVal} ${crop.prodUnit}</span>
                </div>
                <div class="wheat-tooltip-row">
                    <span class="wheat-tooltip-label">Yield Loss:</span>
                    <span class="wheat-tooltip-val" style="color:var(--severe);">${lossVal}</span>
                </div>
                ${eventText ? `<div class="wheat-tooltip-event">${eventText}</div>` : ''}
            `;

            // Position tooltip relative to card body bounds
            let tooltipX = ((targetX / 380) * rect.width);
            let tooltipY = ((targetActualY / 195) * rect.height) - 40;

            // Prevent tooltip from going outside card body bounds
            const tooltipWidth = 220; 
            if (tooltipX + tooltipWidth + 20 > rect.width) {
                tooltipX = tooltipX - tooltipWidth - 20; // show on left of guide line
            } else {
                tooltipX = tooltipX + 20; // show on right of guide line
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
        const actualSpan = legendRow.children[0];
        const potentialSpan = legendRow.children[1];

        const actualLine = svg.querySelector('.wheat-line-actual');
        const potentialLine = svg.querySelector('.wheat-line-potential');
        const actualPoints = svg.querySelectorAll('.point-actual');
        const potentialPoints = svg.querySelectorAll('.point-potential');

        if (actualSpan && potentialSpan && actualLine && potentialLine) {
            actualSpan.style.cursor = 'pointer';
            potentialSpan.style.cursor = 'pointer';
            actualSpan.style.transition = 'opacity 0.2s ease';
            potentialSpan.style.transition = 'opacity 0.2s ease';

            actualSpan.addEventListener('mouseenter', () => {
                potentialLine.style.opacity = '0.15';
                potentialPoints.forEach(p => p.style.opacity = '0.15');
                actualLine.style.strokeWidth = '4';
                actualSpan.style.fontWeight = 'bold';
            });
            actualSpan.addEventListener('mouseleave', () => {
                potentialLine.style.opacity = '1';
                potentialPoints.forEach(p => p.style.opacity = '1');
                actualLine.style.strokeWidth = '2.5';
                actualSpan.style.fontWeight = 'normal';
            });

            potentialSpan.addEventListener('mouseenter', () => {
                actualLine.style.opacity = '0.15';
                actualPoints.forEach(p => p.style.opacity = '0.15');
                potentialLine.style.strokeWidth = '4';
                potentialSpan.style.fontWeight = 'bold';
            });
            potentialSpan.addEventListener('mouseleave', () => {
                actualLine.style.opacity = '1';
                actualPoints.forEach(p => p.style.opacity = '1');
                potentialLine.style.strokeWidth = '2.5';
                potentialSpan.style.fontWeight = 'normal';
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

function handleCropClassificationToggle(cropName, isChecked) {
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

function initMap() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [69.3451, 30.3753], // Center on Pakistan
        zoom: 4
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
    map.on('load', function () {
        console.log('Map loaded successfully');
    });
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