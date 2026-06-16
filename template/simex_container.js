function forceSimexMapResize(simexMap) {
    if (!simexMap) return;

    requestAnimationFrame(() => {
        try {
            simexMap.resize();
        } catch (error) {
            console.warn('Simex map resize warning:', error);
        }
    });

    setTimeout(() => {
        try {
            simexMap.resize();
        } catch (error) {
            console.warn('Simex map delayed resize warning:', error);
        }
    }, 180);
}

// Toggle Simex Accordion
function toggleSimexAccordion(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.simex-accordion-icon');

    // Close all other accordions
    document.querySelectorAll('.simex-accordion-content').forEach(acc => {
        if (acc.id !== id) {
            acc.classList.remove('active');
            const otherHeader = acc.previousElementSibling;
            const otherIcon = otherHeader.querySelector('.simex-accordion-icon');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
    });

    // Toggle the clicked accordion
    const wasActive = content.classList.contains('active');
    content.classList.toggle('active');
    const isNowActive = content.classList.contains('active');

    if (icon) {
        icon.style.transform = isNowActive ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}

// Show map in simex content area
function showSimexMap() {
    const simexContent = document.querySelector('.simex-content');
    if (!simexContent) return;

    if (window.simexMapInstance) {
        window.simexMapInstance.remove();
        window.simexMapInstance = null;
    }

    // Clear current content
    simexContent.innerHTML = '';

    // Create map container
    const mapContainer = document.createElement('div');
    mapContainer.id = 'simex-map';
    mapContainer.style.cssText = `
        width: 100%;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
    `;

    simexContent.appendChild(mapContainer);

    // Initialize map
    const simexMap = new mapboxgl.Map({
        container: 'simex-map',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [69.3451, 30.3753], // Center on Pakistan
        zoom: 4,
        accessToken: CONFIG.MAPBOX_TOKEN
    });

    // Add navigation control
    simexMap.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add fullscreen control (Targeting the whole simex-section)
    simexMap.addControl(new mapboxgl.FullscreenControl({ container: document.getElementById('simex-section') }), 'top-right');

    // Store reference for cleanup
    window.simexMapInstance = simexMap;

    const resizeHandler = () => {
        if (!window.simexMapInstance || window.simexMapInstance !== simexMap) return;
        forceSimexMapResize(simexMap);
    };

    document.addEventListener('fullscreenchange', resizeHandler);
    document.addEventListener('webkitfullscreenchange', resizeHandler);
    document.addEventListener('mozfullscreenchange', resizeHandler);
    document.addEventListener('MSFullscreenChange', resizeHandler);
    window.addEventListener('resize', resizeHandler);

    simexMap.on('remove', () => {
        document.removeEventListener('fullscreenchange', resizeHandler);
        document.removeEventListener('webkitfullscreenchange', resizeHandler);
        document.removeEventListener('mozfullscreenchange', resizeHandler);
        document.removeEventListener('MSFullscreenChange', resizeHandler);
        window.removeEventListener('resize', resizeHandler);
    });

    // Add provincial boundary when map loads
    simexMap.on('load', function () {
        forceSimexMapResize(simexMap);

        // Add provincial boundary source
        simexMap.addSource('simex-provincial-boundary', {
            type: 'geojson',
            data: `http://${Ahad}:8080/geoserver/Pak_Boundaries/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Pak_Boundaries%3AProvincial_Boundary&maxFeatures=50&outputFormat=application%2Fjson`
        });

        // Add provincial boundary layer
        simexMap.addLayer({
            id: 'simex-provincial-boundary-layer',
            type: 'line',
            source: 'simex-provincial-boundary',
            paint: {
                'line-color': '#000000', // Black color as specified
                'line-width': 2
            }
        });

        console.log('Provincial boundary added to simex map');
    });

    console.log('Simex map initialized with provincial boundary');
}

// Simex legend helper functions (independent from main map legend)
function createSimexLegend() {
    const parent = document.getElementById('simex-map');
    if (!parent) return;
    if (document.getElementById('simex-legend')) return;

    const legend = document.createElement('div');
    legend.id = 'simex-legend';
    // apply main map legend styles + simex overrides
    legend.className = 'map-legend simex-map-legend';

    const title = document.createElement('div');
    title.className = 'legend-title';
    title.textContent = 'Legend';
    legend.appendChild(title);

    parent.appendChild(legend);
}

function addSimexLegendEntry(key, color, label, outline = false, shape = 'box') {
    createSimexLegend();
    const legend = document.getElementById('simex-legend');
    if (!legend) return;

    let entry = document.getElementById('simex-legend-' + key);
    if (entry) {
        entry.querySelector('.legend-color-box').style.background = outline ? 'transparent' : color;
        entry.querySelector('.legend-color-box').style.borderColor = outline ? color : 'rgba(0,0,0,0.06)';
        entry.querySelector('.legend-label').textContent = label;
        entry.style.display = 'flex';
        return;
    }

    entry = document.createElement('div');
    entry.className = 'legend-item';
    entry.id = 'simex-legend-' + key;

    const colorBox = document.createElement('div');
    // support line or box shapes
    colorBox.className = 'legend-color-box' + (outline ? ' outline' : '') + (shape === 'line' ? ' line' : '');
    if (shape === 'line') {
        // set color using CSS color so ::after can use currentColor
        colorBox.style.color = color;
    } else {
        colorBox.style.background = outline ? 'transparent' : color;
        colorBox.style.border = outline ? `2px solid ${color}` : '1px solid rgba(0,0,0,0.06)';
    }

    const text = document.createElement('div');
    text.className = 'legend-label';
    text.textContent = label;

    entry.appendChild(colorBox);
    entry.appendChild(text);
    legend.appendChild(entry);
}

function removeSimexLegendEntry(key) {
    const entry = document.getElementById('simex-legend-' + key);
    if (entry) entry.remove();
    // If no items left, remove legend
    const legend = document.getElementById('simex-legend');
    if (legend && legend.querySelectorAll('.legend-item').length === 0) {
        legend.remove();
    }
}

// Show charts in simex content area
function showSimexCharts() {
    const simexContent = document.querySelector('.simex-content');

    // Clean up map if it exists
    if (window.simexMapInstance) {
        window.simexMapInstance.remove();
        window.simexMapInstance = null;
    }

    // Clear current content
    simexContent.innerHTML = '';

    // Check if any chart is currently selected and load it
    const toggles = ['food-crops-toggle', 'horticulture-toggle', 'cash-crops-toggle', 'combined-toggle', 'import-toggle', 'export-toggle'];
    let activeChart = null;

    for (const toggleId of toggles) {
        const toggle = document.getElementById(toggleId);
        if (toggle && toggle.checked) {
            // Map toggle ID to data type
            const dataTypeMap = {
                'food-crops-toggle': 'food-crops',
                'horticulture-toggle': 'horticulture',
                'cash-crops-toggle': 'cash-crops',
                'combined-toggle': 'combined',
                'import-toggle': 'import',
                'export-toggle': 'export'
            };
            activeChart = dataTypeMap[toggleId];
            break;
        }
    }

    if (activeChart) {
        // Load the active chart
        loadSimexDataByType(activeChart);
    } else {
        // Show placeholder if no chart is selected
        simexContent.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666;">Select a chart from the menu to view data</div>';
    }

    console.log('Simex charts restored');
}

// Handle simex data toggle
function handleSimexDataToggle(dataType, isChecked) {
    if (!window.simexMapInstance) {
        console.log('Simex map not initialized');
        return;
    }

    const map = window.simexMapInstance;

    if (isChecked) {
        console.log('Loading', dataType, 'data...');
        loadSimexDataLayer(dataType, map);
    } else {
        console.log('Hiding', dataType, 'data...');
        hideSimexDataLayer(dataType, map);
    }
}

// Load simex data layer
function loadSimexDataLayer(dataType, map) {
    const layerConfigs = {
        'AOI': {
            type: 'wfs',
            url: `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3ASahiwal_Pakpattan_CISE&maxFeatures=50&outputFormat=application%2Fjson`,
            layerId: 'simex-aoi-layer',
            sourceId: 'simex-aoi-source',
            layerType: 'fill',
            paint: {
                // Keep fill transparent so AOI is hollow; outline created as separate line layer
                'fill-color': 'rgba(0, 0, 0, 0)',
                'fill-opacity': 0
            }
        },
        'LST': {
            type: 'wms',
            url: `http://${Ahad}:8080/geoserver/Agri_Portal/wms?SERVICE=WMS&REQUEST=GetMap&LAYERS=Agri_Portal:MODIS_LST_Day_2018_Jan_May&VERSION=1.3.0&FORMAT=image/png&TRANSPARENT=true&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&BBOX={bbox-epsg-3857}`,
            layerId: 'simex-lst-layer',
            sourceId: 'simex-lst-source'
        },
        'Frost': {
            type: 'wms',
            url: `http://${Ahad}:8080/geoserver/Agri_Portal/wms?SERVICE=WMS&REQUEST=GetMap&LAYERS=Agri_Portal:Processed%20raster&VERSION=1.3.0&FORMAT=image/png&TRANSPARENT=true&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&BBOX={bbox-epsg-3857}`,
            layerId: 'simex-frost-layer',
            sourceId: 'simex-frost-source'
        },
        'Precipitation': {
            type: 'wms',
            url: `http://${Ahad}:8080/geoserver/Agri_Portal/wms?SERVICE=WMS&REQUEST=GetMap&LAYERS=Agri_Portal:total_precitation&VERSION=1.3.0&FORMAT=image/png&TRANSPARENT=true&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&BBOX={bbox-epsg-3857}`,
            layerId: 'simex-precipitation-layer',
            sourceId: 'simex-precipitation-source'
        },
        'Soil Moisture': {
            type: 'wms',
            url: `http://${Ahad}:8080/geoserver/Agri_Portal/wms?SERVICE=WMS&REQUEST=GetMap&LAYERS=Agri_Portal:SoilWaterContent_33kPa_FieldCapacity&VERSION=1.3.0&FORMAT=image/png&TRANSPARENT=true&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&BBOX={bbox-epsg-3857}`,
            layerId: 'simex-soil-moisture-layer',
            sourceId: 'simex-soil-moisture-source'
        },
        'Temperature': {
            type: 'wms',
            url: `http://${Ahad}:8080/geoserver/Agri_Portal/wms?SERVICE=WMS&REQUEST=GetMap&LAYERS=Agri_Portal:temperature_2ma&VERSION=1.3.0&FORMAT=image/png&TRANSPARENT=true&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&BBOX={bbox-epsg-3857}`,
            layerId: 'simex-temperature-layer',
            sourceId: 'simex-temperature-source'
        },
        'Humidity': {
            type: 'wms',
            url: `http://${Ahad}:8080/geoserver/Agri_Portal/wms?SERVICE=WMS&REQUEST=GetMap&LAYERS=Agri_Portal:dew_temp&VERSION=1.3.0&FORMAT=image/png&TRANSPARENT=true&WIDTH=256&HEIGHT=256&CRS=EPSG:3857&BBOX={bbox-epsg-3857}`,
            layerId: 'simex-humidity-layer',
            sourceId: 'simex-humidity-source'
        }
    };

    const config = layerConfigs[dataType];
    if (!config) {
        console.error('Unknown data type:', dataType);
        return;
    }

    try {
        // Check if source already exists
        if (map.getSource(config.sourceId)) {
            console.log('Source already exists:', config.sourceId);
            // Just make sure the layer is visible
            if (map.getLayer(config.layerId)) {
                map.setLayoutProperty(config.layerId, 'visibility', 'visible');
            }
            // If an outline layer is present, make sure it's visible too
            if (map.getLayer(config.layerId + '-outline')) {
                map.setLayoutProperty(config.layerId + '-outline', 'visibility', 'visible');
            }
            return;
        }

        if (config.type === 'wfs') {
            // Add WFS source
            map.addSource(config.sourceId, {
                type: 'geojson',
                data: config.url
            });

            // Add fill layer
            map.addLayer({
                id: config.layerId,
                type: config.layerType,
                source: config.sourceId,
                paint: config.paint
            });

            // If this is AOI, add an outline line layer to make it hollow with an outline
            if (dataType === 'AOI') {
                const outlineLayerId = config.layerId + '-outline';
                // Outline layer for AOI
                map.addLayer({
                    id: outlineLayerId,
                    type: 'line',
                    source: config.sourceId,
                    paint: {
                        'line-color': '#fa1313',
                        'line-width': 2
                    }
                });

                // Add legend entry for AOI in simex map (hollow style) as a line
                addSimexLegendEntry('aoi', '#fa1313', 'AOI', true, 'line');
            }
        } else if (config.type === 'wms') {
            // Add WMS source
            map.addSource(config.sourceId, {
                type: 'raster',
                tiles: [config.url],
                tileSize: 256
            });

            // Add raster layer
            map.addLayer({
                id: config.layerId,
                type: 'raster',
                source: config.sourceId,
                paint: {
                    'raster-opacity': 0.7
                }
            });
        }

        // Move provincial boundary above this layer
        if (map.getLayer('simex-provincial-boundary-layer')) {
            map.moveLayer('simex-provincial-boundary-layer');
        }

        console.log('Simex layer added:', dataType);
    } catch (error) {
        console.error('Error adding simex layer:', dataType, error);
    }
}

// Hide simex data layer
function hideSimexDataLayer(dataType, map) {
    const layerIdMap = {
        'AOI': 'simex-aoi-layer',
        'LST': 'simex-lst-layer',
        'Frost': 'simex-frost-layer',
        'Precipitation': 'simex-precipitation-layer',
        'Soil Moisture': 'simex-soil-moisture-layer',
        'Temperature': 'simex-temperature-layer',
        'Humidity': 'simex-humidity-layer'
    };

    const layerId = layerIdMap[dataType];
    if (!layerId) {
        console.error('Unknown data type:', dataType);
        return;
    }

    try {
        if (map.getLayer(layerId)) {
            map.setLayoutProperty(layerId, 'visibility', 'none');
            console.log('Simex layer hidden:', dataType);
        }
        // hide outline layer for AOI if exists
        if (dataType === 'AOI') {
            const outlineId = layerId + '-outline';
            if (map.getLayer(outlineId)) {
                map.setLayoutProperty(outlineId, 'visibility', 'none');
            }
            // Remove AOI legend from simex map
            removeSimexLegendEntry('aoi');
        }
    } catch (error) {
        console.error('Error hiding simex layer:', dataType, error);
    }
}

// Toggle Simex Sidebar Menu
function toggleSimexMenu() {
    const sidebar = document.getElementById('simexSidebar');
    sidebar.classList.toggle('active');
}

// Handle simex click
function handleSimexClick(simexType) {
    event.preventDefault();
    const clickedLink = event.target;

    // Toggle active class
    clickedLink.classList.toggle('active');

    const isActive = clickedLink.classList.contains('active');

    let toggleId, dataType;
    if (simexType === 'Food Crops') {
        toggleId = 'food-crops-toggle';
        dataType = 'food-crops';
    } else if (simexType === 'Horticulture') {
        toggleId = 'horticulture-toggle';
        dataType = 'horticulture';
    } else if (simexType === 'Cash Crops') {
        toggleId = 'cash-crops-toggle';
        dataType = 'cash-crops';
    } else if (simexType === 'Combined') {
        toggleId = 'combined-toggle';
        dataType = 'combined';
    } else if (simexType === 'Import') {
        toggleId = 'import-toggle';
        dataType = 'import';
    } else if (simexType === 'Export') {
        toggleId = 'export-toggle';
        dataType = 'export';
    }

    // Handle simex toggle
    toggleSimex(isActive, toggleId, dataType);

    // Turn off other simex types if activating this one
    if (isActive) {
        turnOffOtherSimex(toggleId);
    }

    return false;
}

// Handle simex toggle
function handleSimexToggle(isChecked, dataType) {
    // Check if simex-data accordion is open
    const simexDataAccordion = document.getElementById('simex-data');
    const isSimexDataOpen = simexDataAccordion && simexDataAccordion.classList.contains('active');

    if (isSimexDataOpen) {
        // If simex data is open, don't load charts
        console.log('Simex data accordion is open - charts disabled');
        return;
    }

    if (isChecked) {
        // Load the simex data
        loadSimexDataByType(dataType);

        // Turn off other toggles
        turnOffOtherSimex(event.target.id);
    } else {
        // If unchecked, maybe hide or clear data
        clearSimexContent();
    }
}

// Toggle simex
function toggleSimex(isActive, toggleId, dataType) {
    const toggleSwitch = document.getElementById(toggleId);

    if (isActive) {
        toggleSwitch.checked = true;
        loadSimexDataByType(dataType);
    } else {
        toggleSwitch.checked = false;
        // Maybe clear data or hide
        clearSimexContent();
    }
}

// Turn off other simex types
function turnOffOtherSimex(activeId) {
    const toggles = ['food-crops-toggle', 'horticulture-toggle', 'cash-crops-toggle', 'combined-toggle', 'import-toggle', 'export-toggle'];
    const btns = document.querySelectorAll('.simex-toggle-btn');

    toggles.forEach(id => {
        if (id !== activeId) {
            document.getElementById(id).checked = false;
        }
    });

    // Remove active class from all buttons except the active one
    btns.forEach(btn => {
        const simexType = btn.textContent.trim();
        let btnToggleId;
        if (simexType === 'Food Crops') btnToggleId = 'food-crops-toggle';
        else if (simexType === 'Horticulture') btnToggleId = 'horticulture-toggle';
        else if (simexType === 'Cash Crops') btnToggleId = 'cash-crops-toggle';
        else if (simexType === 'Combined') btnToggleId = 'combined-toggle';
        else if (simexType === 'Import') btnToggleId = 'import-toggle';
        else if (simexType === 'Export') btnToggleId = 'export-toggle';

        if (btnToggleId !== activeId) {
            btn.classList.remove('active');
        }
    });
}

// Load Simex Data by Type
function loadSimexDataByType(dataType) {
    console.log('Loading simex data for:', dataType);
    const simexContent = document.querySelector('.simex-content');
    if (!simexContent) return;

    // Clear previous content
    simexContent.innerHTML = '';

    let visualisationId;
    switch (dataType) {
        case 'food-crops':
            visualisationId = '21007129';
            break;
        case 'horticulture':
            visualisationId = '21780743';
            break;
        case 'cash-crops':
            visualisationId = '21743866';
            break;
        case 'combined':
            visualisationId = '24331144';
            break;
        case 'import':
            visualisationId = '24431948';
            break;
        case 'export':
            visualisationId = '24387615';
            break;
        default:
            // Placeholder for unknown types
            const placeholder = document.createElement('div');
            placeholder.style.padding = '16px';
            placeholder.innerHTML = `<p class="text-muted">Simex data for <strong>${dataType}</strong> will be displayed here</p>`;
            simexContent.appendChild(placeholder);
            return;
    }

    // Embed Flourish visualization
    const iframe = document.createElement('iframe');
    iframe.src = `https://public.flourish.studio/visualisation/${visualisationId}/embed`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.title = `${dataType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} - Flourish Visualization`;
    iframe.allowFullscreen = true;
    simexContent.appendChild(iframe);
}

// Clear simex container content
function clearSimexContent() {
    const simexContent = document.querySelector('.simex-content');
    if (simexContent) simexContent.innerHTML = '';
}

// Load Simex Data
function loadSimexData() {
    // Fetch and display simex data
    // Example: fetch('Data/simex.json')
    //   .then(response => response.json())
    //   .then(data => {
    //       displaySimexData(data);
    //   })
    //   .catch(error => console.error('Error loading simex data:', error));

    console.log('Simex data will be loaded here');

    // Initialize default selection for simex controls
    if (typeof initSimexSelector === 'function') {
        initSimexSelector();
    }
}

// Display Simex Map by default
function initSimexSelector() {
    // Show map by default
    showSimexMap();
}

function displaySimexData(data) {
    if (!Array.isArray(data) || data.length === 0) {
        showSimexMap();
        return;
    }

    const simexContent = document.querySelector('.simex-content');
    if (!simexContent) return;

    if (window.simexMapInstance) {
        window.simexMapInstance.remove();
        window.simexMapInstance = null;
    }

    simexContent.innerHTML = '';
    const pre = document.createElement('pre');
    pre.className = 'text-muted';
    pre.style.cssText = 'padding: 12px; margin: 0; font-size: 12px; white-space: pre-wrap;';
    pre.textContent = JSON.stringify(data, null, 2);
    simexContent.appendChild(pre);
}

/* ==========================================
   MOVED LAYER URLS
   ========================================== */
const simexMovedLayerUrls = {
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
    'Godowns': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3AGodowns&outputFormat=application%2Fjson`,
    'Crop Stress': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=final_stress&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
    'Irrigation': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3AIrrigation_MBK1&outputFormat=application%2Fjson`,
    'Main Rivers': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3ARivers_main&outputFormat=application%2Fjson`,
    'CCAs': `http://${Ahad}:8080/geoserver/Agri_Portal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Agri_Portal%3Acanal1&outputFormat=application%2Fjson`,
    'Major Crop Type': {
        'Rice': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Rice26&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Sugarcane': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Sugarcane261&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Wheat': `http://${Ahad}:8080/geoserver/Agri_Portal/wms?service=WMS&version=1.1.0&request=GetMap&layers=Agri_Portal:Wheat26&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`
    },
    'Cropping Zones': {
        'Balochistan': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=Bln_Gen&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Sindh': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=GenCrop_Sindh&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'KPK': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=GenCrop_KPK&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'Punjab': `http://${mam_Seemal}:8080/geoserver/landslide_areej/wms?service=WMS&version=1.1.0&request=GetMap&layers=GenCrop_SPun&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`,
        'AJK': `http://${mam_Seemal}:8080/geoserver/landslide_final/wms?service=WMS&version=1.1.0&request=GetMap&layers=landslide_final:treeclassification&bbox={bbox-epsg-3857}&width=768&height=558&srs=EPSG:3857&styles=&format=image/png&transparent=true`
    }
};

/* ==========================================
   SIMEX LAYER TOGGLE FUNCTIONS
   ========================================== */

function handleSimexFloodToggle(year, isChecked) {
    if (!window.simexMapInstance) return;
    const layerData = simexMovedLayerUrls['Flood Layer'][year];

    if (isChecked) {
        if (layerData.type === 'tms') {
            addSimexTMSLayer(year, layerData);
        } else if (layerData.type === 'wms') {
            addSimexWMSLayer('flood_' + year, layerData.url);
        }
    } else {
        removeSimexCommonLayer('flood_' + year);
    }
}

function handleSimexGodownsToggle(isChecked) {
    if (!window.simexMapInstance) return;
    const url = simexMovedLayerUrls['Godowns'];

    if (isChecked) {
        addSimexWFSLayer('godowns', url, 'Godowns', '#ff6600', 6);
        addSimexLegendEntry('godowns', '#ff6600', 'Godowns');
        bindSimexGodownsPopup();
    } else {
        removeSimexCommonLayer('godowns');
        removeSimexLegendEntry('godowns');
    }
}

function handleSimexCropStressToggle(isChecked) {
    if (!window.simexMapInstance) return;
    const url = simexMovedLayerUrls['Crop Stress'];

    if (isChecked) {
        addSimexWMSLayer('crop_stress', url);
        // Add legend entries manually as in map container
        addSimexLegendEntry('simex_cropstress_veryhigh', '#c04e2d', 'Very High');
        addSimexLegendEntry('simex_cropstress_high', '#cec056', 'High');
        addSimexLegendEntry('simex_cropstress_medium', '#f2562f', 'Medium');
        addSimexLegendEntry('simex_cropstress_low', '#318c35', 'Low');
        addSimexLegendEntry('simex_cropstress_verylow', '#113c19', 'Very Low');
    } else {
        removeSimexCommonLayer('crop_stress');
        removeSimexLegendEntry('simex_cropstress_veryhigh');
        removeSimexLegendEntry('simex_cropstress_high');
        removeSimexLegendEntry('simex_cropstress_medium');
        removeSimexLegendEntry('simex_cropstress_low');
        removeSimexLegendEntry('simex_cropstress_verylow');
    }
}

function handleSimexIrrigationToggle(isChecked) {
    if (!window.simexMapInstance) return;
    const url = simexMovedLayerUrls['Irrigation'];

    if (isChecked) {
        addSimexWFSLineLayer('irrigation', url, '#2d7ff9', 2);
    } else {
        removeSimexCommonLayer('irrigation');
    }
}

function handleSimexMainRiversToggle(isChecked) {
    if (!window.simexMapInstance) return;
    const url = simexMovedLayerUrls['Main Rivers'];

    if (isChecked) {
        addSimexWFSFillLayer('main_rivers', url, '#1f78b4', 0.75);
    } else {
        removeSimexCommonLayer('main_rivers');
    }
}

function handleSimexCCAsToggle(isChecked) {
    if (!window.simexMapInstance) return;
    const url = simexMovedLayerUrls['CCAs'];

    if (isChecked) {
        addSimexWFSFillLayer('ccas', url, '#088d3b', 0.6, 2);
    } else {
        removeSimexCommonLayer('ccas');
    }
}

function handleSimexMajorCropToggle(cropName, isChecked) {
    if (!window.simexMapInstance) return;
    const url = simexMovedLayerUrls['Major Crop Type'][cropName];
    const cropId = 'major_crop_' + cropName.toLowerCase();

    if (isChecked) {
        addSimexWMSLayer(cropId, url);
    } else {
        removeSimexCommonLayer(cropId);
    }
}

function handleSimexCroppingZoneToggle(zone, isChecked) {
    if (!window.simexMapInstance) return;
    const url = simexMovedLayerUrls['Cropping Zones'][zone];
    const zoneId = 'cropping_' + zone.toLowerCase();

    if (isChecked) {
        addSimexWMSLayer(zoneId, url);
        // Add single legend for zones
        if (!document.getElementById('simex-legend-cropping-zones')) {
            addSimexLegendEntry('simex_cropping_zones', 'linear-gradient(180deg, #e53025 0%, #a8fd66 50%, #2e93a7 100%)', 'Cropping Zones');
        }
    } else {
        removeSimexCommonLayer(zoneId);
        // Check if any other zones are active, if not remove legend
        const toggles = ['cropping-balochistan-toggle', 'cropping-sindh-toggle', 'cropping-kpk-toggle', 'cropping-punjab-toggle', 'cropping-ajk-toggle'];
        const stillOn = toggles.some(id => document.getElementById(id) && document.getElementById(id).checked);
        if (!stillOn) {
            removeSimexLegendEntry('simex_cropping_zones');
        }
    }
}

/* ==========================================
   SIMEX MAP HELPER FUNCTIONS
   ========================================== */

function addSimexTMSLayer(year, layerData) {
    const map = window.simexMapInstance;
    const sourceId = 'flood_' + year + '_tms';
    const layerId = 'flood_' + year + '_layer';

    if (map.getSource(sourceId)) return;

    map.addSource(sourceId, {
        type: 'vector',
        scheme: 'tms',
        tiles: [layerData.url]
    });

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

function addSimexWMSLayer(idPrefix, url) {
    const map = window.simexMapInstance;
    const sourceId = idPrefix + '_wms';
    const layerId = sourceId + '_layer';

    if (map.getSource(sourceId)) return;

    map.addSource(sourceId, {
        type: 'raster',
        tiles: [url],
        tileSize: 256
    });

    map.addLayer({
        id: layerId,
        type: 'raster',
        source: sourceId,
        paint: {
            'raster-opacity': 1.0
        }
    });
}

function addSimexWFSLayer(id, url, name, color, radius) {
    const map = window.simexMapInstance;
    const sourceId = id + '_source';
    const layerId = id + '_layer';

    if (map.getSource(sourceId)) return;

    map.addSource(sourceId, {
        type: 'geojson',
        data: url
    });

    map.addLayer({
        id: layerId,
        type: 'circle',
        source: sourceId,
        paint: {
            'circle-color': color || '#ff6600',
            'circle-radius': radius || 6,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
        }
    });
}

let simexGodownsPopupBound = false;

function bindSimexGodownsPopup() {
    const map = window.simexMapInstance;
    if (!map || simexGodownsPopupBound) return;

    map.on('click', 'godowns_layer', (e) => {
        const feature = e.features && e.features[0];
        if (!feature || !feature.properties) return;

        const props = feature.properties;
        const popupHtml = `
            <div class="simex-popup">
                <div><strong>Province:</strong> ${props.Province || ''}</div>
                <div><strong>Zone:</strong> ${props.Zone || ''}</div>
                <div><strong>Field:</strong> ${props.Field5 || ''}</div>
                <div><strong>No:</strong> ${props.No_ || ''}</div>
                <div><strong>Type:</strong> ${props.Type || ''}</div>
                <div><strong>Size per G:</strong> ${props.Size_per_G || ''}</div>
                <div><strong>Storage Capacity:</strong> ${props.Storage_Ca || ''}</div>
                <div><strong>Address:</strong> ${props.Address || ''}</div>
            </div>
        `;

        new mapboxgl.Popup({ closeButton: true, closeOnClick: true })
            .setLngLat(e.lngLat)
            .setHTML(popupHtml)
            .addTo(map);
    });

    map.on('mouseenter', 'godowns_layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'godowns_layer', () => {
        map.getCanvas().style.cursor = '';
    });

    simexGodownsPopupBound = true;
}

function addSimexWFSLineLayer(id, url, color, width) {
    const map = window.simexMapInstance;
    const sourceId = id + '_source';
    const layerId = id + '_layer';

    if (map.getSource(sourceId)) return;

    map.addSource(sourceId, {
        type: 'geojson',
        data: url
    });

    map.addLayer({
        id: layerId,
        type: 'line',
        source: sourceId,
        paint: {
            'line-color': color || '#2d7ff9',
            'line-width': width || 2
        }
    });
}

function addSimexWFSFillLayer(id, url, color, opacity, outlineWidth) {
    const map = window.simexMapInstance;
    const sourceId = id + '_source';
    const layerId = id + '_layer';
    const outlineLayerId = id + '_outline';

    if (map.getSource(sourceId)) return;

    map.addSource(sourceId, {
        type: 'geojson',
        data: url
    });

    map.addLayer({
        id: layerId,
        type: 'fill',
        source: sourceId,
        paint: {
            'fill-color': color || '#1f78b4',
            'fill-opacity': opacity || 0.35
        }
    });

    if (outlineWidth && outlineWidth > 0) {
        map.addLayer({
            id: outlineLayerId,
            type: 'line',
            source: sourceId,
            paint: {
                'line-color': color || '#1f78b4',
                'line-width': outlineWidth
            }
        });
    }
}

function removeSimexCommonLayer(idPrefix) {
    const map = window.simexMapInstance;
    if (!map) return;

    const layerIdsToRemove = [
        idPrefix,
        idPrefix + '_layer',
        idPrefix + '_wms_layer',
        idPrefix + '_outline'
    ];

    layerIdsToRemove.forEach(layerId => {
        if (map.getLayer(layerId)) {
            map.removeLayer(layerId);
        }
    });

    const sourceIdsToRemove = [
        idPrefix + '_tms',
        idPrefix + '_wms',
        idPrefix + '_source'
    ];

    sourceIdsToRemove.forEach(sourceId => {
        if (map.getSource(sourceId) && !map.getStyle().layers.some(l => l.source === sourceId)) {
            map.removeSource(sourceId);
        }
    });
}

// Make functions available globally
window.toggleSimexAccordion = toggleSimexAccordion;
window.handleSimexDataToggle = handleSimexDataToggle;
window.initSimexSelector = initSimexSelector;
window.showSimexMap = showSimexMap;
window.toggleSimexMenu = toggleSimexMenu;
window.showSimexCharts = showSimexCharts;
window.handleSimexClick = handleSimexClick;
window.handleSimexToggle = handleSimexToggle;
window.loadSimexData = loadSimexData;
window.displaySimexData = displaySimexData;
window.handleSimexFloodToggle = handleSimexFloodToggle;
window.handleSimexGodownsToggle = handleSimexGodownsToggle;
window.handleSimexCropStressToggle = handleSimexCropStressToggle;
window.handleSimexCroppingZoneToggle = handleSimexCroppingZoneToggle;
window.handleSimexIrrigationToggle = handleSimexIrrigationToggle;
window.handleSimexMainRiversToggle = handleSimexMainRiversToggle;
window.handleSimexCCAsToggle = handleSimexCCAsToggle;
window.handleSimexMajorCropToggle = handleSimexMajorCropToggle;