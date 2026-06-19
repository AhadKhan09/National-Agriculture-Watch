// Portals Container JavaScript

const collectiveCropsData = {
    crops: ["Wheat", "Rice", "Cotton", "Maize", "Sugarcane"],
    years: ["2021-22", "2022-23", "2023-24", "2024-25", "2025-26"],
    data: {
        "Wheat": {
            "2021-22": { prod: "26.20", yield: "2.94", loss: "1.39", potential: "27.59" },
            "2022-23": { prod: "28.16", yield: "3.12", loss: "1.15", potential: "29.31" },
            "2023-24": { prod: "31.43", yield: "3.27", loss: "0.30", potential: "31.73" },
            "2024-25": { prod: "28.42", yield: "3.24", loss: "3.66", potential: "32.08" },
            "2025-26": { prod: "29.31", yield: "3.12", loss: "2.19", potential: "31.50" }
        },
        "Rice": {
            "2021-22": { prod: "9.32", yield: "2.64", loss: "2.18", potential: "11.50" },
            "2022-23": { prod: "7.32", yield: "2.46", loss: "3.18", potential: "10.50" },
            "2023-24": { prod: "9.86", yield: "2.71", loss: "2.64", potential: "12.50" },
            "2024-25": { prod: "9.50", yield: "2.41", loss: "4.00", potential: "13.50" },
            "2025-26": { prod: "9.99", yield: "2.55", loss: "3.00", potential: "13.00" }
        },
        "Cotton": {
            "2021-22": { prod: "8.33", yield: "4.38", loss: "2.23", potential: "10.56" },
            "2022-23": { prod: "4.19", yield: "2.00", loss: "4.12", potential: "8.31" },
            "2023-24": { prod: "10.19", yield: "4.25", loss: "2.58", potential: "12.77" },
            "2024-25": { prod: "7.08", yield: "3.54", loss: "3.79", potential: "10.87" },
            "2025-26": { prod: "7.05", yield: "3.36", loss: "3.13", potential: "10.18" }
        },
        "Maize": {
            "2021-22": { prod: "9.52", yield: "5.77", loss: "1.31", potential: "10.83" },
            "2022-23": { prod: "10.96", yield: "6.39", loss: "0.36", potential: "11.32" },
            "2023-24": { prod: "5.56", yield: "4.81", loss: "4.57", potential: "10.13" },
            "2024-25": { prod: "9.30", yield: "5.35", loss: "1.70", potential: "11.00" },
            "2025-26": { prod: "8.79", yield: "6.46", loss: "2.51", potential: "11.30" }
        },
        "Sugarcane": {
            "2021-22": { prod: "88.65", yield: "70.31", loss: "0.60", potential: "89.25" },
            "2022-23": { prod: "87.64", yield: "66.71", loss: "1.50", potential: "89.14" },
            "2023-24": { prod: "86.40", yield: "73.88", loss: "1.64", potential: "88.04" },
            "2024-25": { prod: "83.50", yield: "66.89", loss: "1.54", potential: "85.04" },
            "2025-26": { prod: "84.50", yield: "74.54", loss: "3.80", potential: "88.30" }
        }
    }
};

const cropChartData = {
    'crop-production': {
        title: "Crop Production (2021-2026)",
        yLabel: "Production (Million Tonnes)",
        gridMin: 0,
        gridMax: 100,
        gridStep: 20,
        unit: "MT",
        years: ["2021-22", "2022-23", "2023-24", "2024-25", "2025-26"],
        crops: [
            { name: "Wheat", color: "#22C55E", values: [26.2, 28.16, 31.43, 28.42, 29.31] },
            { name: "Rice", color: "#3B82F6", values: [9.32, 7.32, 9.86, 9.5, 9.99] },
            { name: "Cotton", color: "#D946EF", values: [8.33, 4.19, 10.19, 7.08, 7.05] },
            { name: "Maize", color: "#15803D", values: [9.52, 10.96, 5.56, 9.3, 8.79] },
            { name: "Sugarcane", color: "#B91C1C", values: [88.65, 87.64, 86.4, 83.5, 84.5] }
        ]
    },
    'crop-loss': {
        title: "Crop Loss (2021-2026)",
        yLabel: "Loss due to Disaster (Million Tonnes)",
        gridMin: 0,
        gridMax: 5,
        gridStep: 1,
        unit: "MT",
        years: ["2021-22", "2022-23", "2023-24", "2024-25", "2025-26"],
        crops: [
            { name: "Wheat", color: "#22C55E", values: [1.39, 1.15, 0.3, 3.66, 2.19] },
            { name: "Rice", color: "#3B82F6", values: [2.18, 3.18, 2.64, 4.0, 3.01] },
            { name: "Cotton", color: "#D946EF", values: [2.23, 4.41, 2.58, 3.79, 3.13] },
            { name: "Maize", color: "#15803D", values: [1.31, 0.36, 4.5, 2.4, 2.51] },
            { name: "Sugarcane", color: "#B91C1C", values: [1.1, 1.5, 1.64, 1.54, 3.8] }
        ]
    }
};

// Toggle Portals Sidebar Menu
function togglePortalsMenu() {
    const sidebar = document.getElementById('portalsSidebar');
    sidebar.classList.toggle('active');
}

// Toggle Portals Accordion
function togglePortalsAccordion(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.portals-accordion-icon');
    
    // Close all other accordions
    document.querySelectorAll('.portals-accordion-content').forEach(acc => {
        if (acc.id !== id) {
            acc.classList.remove('active');
            const otherHeader = acc.previousElementSibling;
            const otherIcon = otherHeader.querySelector('.portals-accordion-icon');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle the clicked accordion
    content.classList.toggle('active');
    const isNowActive = content.classList.contains('active');
    
    if (icon) {
        icon.style.transform = isNowActive ? 'rotate(180deg)' : 'rotate(0deg)';
    }

    // Special handling for Graphs accordion
    if (id === 'graphs-data') {
        if (isNowActive) {
            // Auto open Food Crops if no other graph is active
            const anyGraphActive = document.querySelector('.portals-accordion-content .portals-toggle-btn.active');
            if (!anyGraphActive) {
                const foodLink = document.querySelector('a[onclick="handleGraphClick(\'Food Crops\')"]');
                const foodToggle = document.getElementById('food-crops-toggle');
                
                if (foodLink && foodToggle) {
                    // Activate Food Crops
                    foodToggle.checked = true;
                    foodLink.classList.add('active');
                    turnOffOtherGraphs('food-crops-toggle');
                    loadGraphDataByType('food-crops');
                }
            }
        } else {
            // Closed - restore portal
            // Uncheck all graphs
            turnOffOtherGraphs(null); // Turn off all
            
            // Restore portal iframe
            restorePortalIframe();
        }
    }

    if (id === 'graphs-new' && !isNowActive) {
        // If closing new graphs, restore portal when no old/new graph is active
        const anyOldGraph = document.querySelector('#graphs-data input[type="checkbox"]:checked');
        const anyNewGraph = document.querySelector('#graphs-new input[type="checkbox"]:checked');
        if (!anyOldGraph && !anyNewGraph) {
            restorePortalIframe();
        }
    }
}

// Toggle Portal Fullscreen
window.togglePortalFullscreen = function() {
    const section = document.getElementById('portals-section');
    if (!document.fullscreenElement) {
        if (section.requestFullscreen) {
            section.requestFullscreen();
        } else if (section.mozRequestFullScreen) {
            section.mozRequestFullScreen();
        } else if (section.webkitRequestFullscreen) {
            section.webkitRequestFullscreen();
        } else if (section.msRequestFullscreen) {
            section.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Handle portal click
function handlePortalClick(portal) {
    event.preventDefault();
    const clickedLink = event.target;
    
    // Toggle active class
    clickedLink.classList.toggle('active');
    
    const isActive = clickedLink.classList.contains('active');
    
    let toggleId, url;
    if (portal === 'LIMS') {
        toggleId = 'lims-toggle';
        url = 'https://pakkissan.com/ndma';
    } else if (portal === 'Food Security Portal') {
        toggleId = 'fsp-toggle';
        url = 'https://fsp.gov.pk/';
    } else if (portal === 'Data Portal') {
        toggleId = 'data-toggle';
        url = 'http://pc.urbanunit.gov.pk/DataBank/Index';
    } else if (portal === 'National Account Dashboard') {
        toggleId = 'nad-toggle';
        url = 'https://na.data.gov.pk/Crops/Home';
    }
    
    // Handle portal toggle
    togglePortal(isActive, toggleId, url);
    
    // Turn off other portals if activating this one
    if (isActive) {
        turnOffOtherPortals(toggleId);
    }
    
    return false;
}

// Handle portal toggle switch
function handlePortalToggle(isChecked, url) {
    if (isChecked) {
        // Load the portal
        const portalIframe = document.getElementById('portal-iframe');
        portalIframe.src = url;
        
        // Turn off other toggles
        turnOffOtherPortals(event.target.id);
    } else {
        // If unchecked, maybe hide or load default
        // For now, just uncheck
    }
}

// Toggle portal
function togglePortal(isActive, toggleId, url) {
    const toggleSwitch = document.getElementById(toggleId);
    const portalIframe = document.getElementById('portal-iframe');
    
    if (isActive) {
        toggleSwitch.checked = true;
        portalIframe.src = url;
    } else {
        toggleSwitch.checked = false;
        // Maybe load default or hide
    }
}

// Turn off other portals
function turnOffOtherPortals(activeId) {
    const toggles = ['lims-toggle', 'fsp-toggle', 'data-toggle', 'nad-toggle', 'collective-crops-toggle'];
    const btns = document.querySelectorAll('.portals-toggle-btn');
    
    toggles.forEach(id => {
        if (id !== activeId) {
            const el = document.getElementById(id);
            if (el) el.checked = false;
        }
    });
    
    // Remove active class from all buttons except the active one
    btns.forEach(btn => {
        const portalName = btn.textContent.trim();
        let btnToggleId;
        if (portalName === 'LIMS') btnToggleId = 'lims-toggle';
        else if (portalName === 'Food Security Portal') btnToggleId = 'fsp-toggle';
        else if (portalName === 'Data Portal') btnToggleId = 'data-toggle';
        else if (portalName === 'National Account Dashboard') btnToggleId = 'nad-toggle';
        else if (portalName === 'Collective Crops') btnToggleId = 'collective-crops-toggle';
        
        if (btnToggleId !== activeId) {
            btn.classList.remove('active');
        }
    });
}

// Initialize Portal Selector
function initPortalSelector() {
    // Set LIMS as default active portal
    const limsToggle = document.getElementById('lims-toggle');
    const limsBtn = document.querySelector('.portals-toggle-btn');
    const portalIframe = document.getElementById('portal-iframe');
    
    if (limsToggle && limsBtn && portalIframe) {
        limsToggle.checked = true;
        limsBtn.classList.add('active');
        portalIframe.src = 'https://pakkissan.com/ndma';
    }
}

// Load Portals Data
function loadPortalsData() {
    // Fetch and display portals data
    // Example: fetch('Data/portals.json')
    //   .then(response => response.json())
    //   .then(data => {
    //       displayPortalsData(data);
    //   })
    //   .catch(error => console.error('Error loading portals data:', error));
    
    console.log('Portals data will be loaded here');
}

// Display Portals Data
function displayPortalsData(data) {
    const portalsContent = document.querySelector('.portals-content');
    // Clear placeholder
    portalsContent.innerHTML = '';
    
    // Add your code to display portals data here
}

// Handle Graph click (Moved from Simex)
function handleGraphClick(graphType) {
    event.preventDefault();
    const clickedLink = event.target;

    // Toggle active class
    clickedLink.classList.toggle('active');

    const isActive = clickedLink.classList.contains('active');

    let toggleId, dataType;
    if (graphType === 'Food Crops') {
        toggleId = 'food-crops-toggle';
        dataType = 'food-crops';
    } else if (graphType === 'Horticulture') {
        toggleId = 'horticulture-toggle';
        dataType = 'horticulture';
    } else if (graphType === 'Cash Crops') {
        toggleId = 'cash-crops-toggle';
        dataType = 'cash-crops';
    } else if (graphType === 'Population') {
        toggleId = 'population-toggle';
        dataType = 'population';
    } else if (graphType === 'Combined') {
        toggleId = 'combined-toggle';
        dataType = 'combined';
    } else if (graphType === 'Import') {
        toggleId = 'import-toggle';
        dataType = 'import';
    } else if (graphType === 'Export') {
        toggleId = 'export-toggle';
        dataType = 'export';
    }

    // Handle graph toggle
    toggleGraph(isActive, toggleId, dataType);

    // Turn off other graphs if activating this one
    if (isActive) {
        turnOffOtherGraphs(toggleId);
    }

    return false;
}

// Handle graph toggle
function handleGraphToggle(isChecked, dataType) {
    if (isChecked) {
        // Load the graph data
        loadGraphDataByType(dataType);

        // Turn off other toggles
        turnOffOtherGraphs(event.target.id);
        // Also turn off new graphs when old graphs are selected
        turnOffOtherNewGraphs(null);
    } else {
        // If unchecked, maybe restore default or iframe
        // For now, restoring iframe seems appropriate if all graphs are unchecked, 
        // or just clearing content.
        // Let's reload default portal if all unchecked?
        // Or just clear.
        restorePortalIframe();
    }
}

// Toggle graph
function toggleGraph(isActive, toggleId, dataType) {
    const toggleSwitch = document.getElementById(toggleId);

    if (isActive) {
        toggleSwitch.checked = true;
        loadGraphDataByType(dataType);
    } else {
        toggleSwitch.checked = false;
        restorePortalIframe();
    }
}

// Turn off other graphs
function turnOffOtherGraphs(activeId) {
    const toggles = ['food-crops-toggle', 'horticulture-toggle', 'cash-crops-toggle', 'combined-toggle', 'import-toggle', 'export-toggle'];
    const btns = document.querySelectorAll('.portals-toggle-btn'); // Note: we reused class name in migration?
    // In move_graphs.py, we replaced simex-toggle-btn with portals-toggle-btn.
    
    toggles.forEach(id => {
        if (id !== activeId) {
            const el = document.getElementById(id);
            if (el) el.checked = false;
        }
    });

    // Remove active class from all buttons except the active one
    // But we need to distinguish graph buttons from portal buttons if they share class 'portals-toggle-btn'
    // Portal buttons are for [LIMS, Food Security, etc.]
    // Graph buttons are for [Food Crops, etc.]
    
    btns.forEach(btn => {
        // Check if this button is a graph button
        const text = btn.textContent.trim();
        const graphTypes = ['Food Crops', 'Horticulture', 'Cash Crops', 'Combined', 'Import', 'Export'];
        
        if (graphTypes.includes(text)) {
             // It's a graph button
             // Logic to remove active if not the current one
             let btnToggleId;
             if (text === 'Food Crops') btnToggleId = 'food-crops-toggle';
             else if (text === 'Horticulture') btnToggleId = 'horticulture-toggle';
             else if (text === 'Cash Crops') btnToggleId = 'cash-crops-toggle';
             else if (text === 'Combined') btnToggleId = 'combined-toggle';
             else if (text === 'Import') btnToggleId = 'import-toggle';
             else if (text === 'Export') btnToggleId = 'export-toggle';
             
             if (btnToggleId !== activeId) {
                 btn.classList.remove('active');
             }
        }
    });
}

// Handle new graphs click
function handleNewGraphClick(graphType) {
    event.preventDefault();
    const clickedLink = event.target;

    clickedLink.classList.toggle('active');
    const isActive = clickedLink.classList.contains('active');

    let toggleId, dataType;
    if (graphType === 'Crop Production') {
        toggleId = 'crop-production-toggle';
        dataType = 'crop-production';
    } else if (graphType === 'Crop Loss') {
        toggleId = 'crop-loss-toggle';
        dataType = 'crop-loss';
    } else if (graphType === 'Balochistan Crop Distribution') {
        toggleId = 'balochistan-crop-distribution-toggle';
        dataType = 'balochistan-crop-distribution';
    } else if (graphType === 'Balochistan Farm Info') {
        toggleId = 'balochistan-farm-info-toggle';
        dataType = 'balochistan-farm-info';
    } else if (graphType === 'KPK Crop Distribution') {
        toggleId = 'kpk-crop-distribution-toggle';
        dataType = 'kpk-crop-distribution';
    } else if (graphType === 'KPK Farm Info') {
        toggleId = 'kpk-farm-info-toggle';
        dataType = 'kpk-farm-info';
    } else if (graphType === 'Sindh Crop Distribution') {
        toggleId = 'sindh-crop-distribution-toggle';
        dataType = 'sindh-crop-distribution';
    } else if (graphType === 'Sindh Farm Info') {
        toggleId = 'sindh-farm-info-toggle';
        dataType = 'sindh-farm-info';
    } else if (graphType === 'Punjab Crop Distribution') {
        toggleId = 'punjab-crop-distribution-toggle';
        dataType = 'punjab-crop-distribution';
    } else if (graphType === 'Punjab Farm Info') {
        toggleId = 'punjab-farm-info-toggle';
        dataType = 'punjab-farm-info';
    } else if (graphType === 'Pakistan Crop Distribution') {
        toggleId = 'pakistan-crop-distribution-toggle';
        dataType = 'pakistan-crop-distribution';
    } else if (graphType === 'Pakistan Farm Info') {
        toggleId = 'pakistan-farm-info-toggle';
        dataType = 'pakistan-farm-info';
    }

    toggleNewGraph(isActive, toggleId, dataType);

    if (isActive) {
        turnOffOtherNewGraphs(toggleId);
        turnOffOtherGraphs(null);
    }

    return false;
}

// Handle new graphs toggle
function handleNewGraphToggle(isChecked, dataType) {
    if (isChecked) {
        loadNewGraphDataByType(dataType);
        turnOffOtherNewGraphs(event.target.id);
        turnOffOtherGraphs(null);
    } else {
        restorePortalIframe();
    }
}

function toggleNewGraph(isActive, toggleId, dataType) {
    const toggleSwitch = document.getElementById(toggleId);
    if (isActive) {
        toggleSwitch.checked = true;
        loadNewGraphDataByType(dataType);
    } else {
        toggleSwitch.checked = false;
        restorePortalIframe();
    }
}

function turnOffOtherNewGraphs(activeId) {
    const toggles = [
        'crop-production-toggle',
        'crop-loss-toggle',
        'balochistan-crop-distribution-toggle',
        'balochistan-farm-info-toggle',
        'kpk-crop-distribution-toggle',
        'kpk-farm-info-toggle',
        'sindh-crop-distribution-toggle',
        'sindh-farm-info-toggle',
        'punjab-crop-distribution-toggle',
        'punjab-farm-info-toggle',
        'pakistan-crop-distribution-toggle',
        'pakistan-farm-info-toggle'
    ];

    toggles.forEach(id => {
        if (id !== activeId) {
            const el = document.getElementById(id);
            if (el) el.checked = false;
        }
    });

    const btns = document.querySelectorAll('.portals-graph-new-btn');
    btns.forEach(btn => {
        const text = btn.textContent.trim();
        const map = {
            'Crop Production': 'crop-production-toggle',
            'Crop Loss': 'crop-loss-toggle',
            'Balochistan Crop Distribution': 'balochistan-crop-distribution-toggle',
            'Balochistan Farm Info': 'balochistan-farm-info-toggle',
            'KPK Crop Distribution': 'kpk-crop-distribution-toggle',
            'KPK Farm Info': 'kpk-farm-info-toggle',
            'Sindh Crop Distribution': 'sindh-crop-distribution-toggle',
            'Sindh Farm Info': 'sindh-farm-info-toggle',
            'Punjab Crop Distribution': 'punjab-crop-distribution-toggle',
            'Punjab Farm Info': 'punjab-farm-info-toggle',
            'Pakistan Crop Distribution': 'pakistan-crop-distribution-toggle',
            'Pakistan Farm Info': 'pakistan-farm-info-toggle'
        };

        if (map[text] !== activeId) {
            btn.classList.remove('active');
        }
    });
}

function loadNewGraphDataByType(dataType) {
    let displayContainer = document.querySelector('.portal-iframe-container');

    if (!displayContainer) {
        const portalsContent = document.querySelector('.portals-content');
        displayContainer = document.createElement('div');
        displayContainer.className = 'portal-iframe-container';
        portalsContent.appendChild(displayContainer);
    }

    displayContainer.innerHTML = '';

    if (dataType === 'crop-production' || dataType === 'crop-loss') {
        renderAnimatedCropChart(dataType, displayContainer);
        return;
    }

    const visualizations = {
        'balochistan-crop-distribution': { id: '27421026', title: 'Balochistan Crop Distribution' },
        'balochistan-farm-info': { id: '27421022', title: 'Balochistan Farm Info' },
        'kpk-crop-distribution': { id: '27421010', title: 'KPK Crop Distribution' },
        'kpk-farm-info': { id: '27421009', title: 'KPK Farm Info' },
        'sindh-crop-distribution': { id: '27421002', title: 'Sindh Crop Distribution' },
        'sindh-farm-info': { id: '27420994', title: 'Sindh Farm Info' },
        'punjab-crop-distribution': { id: '27420942', title: 'Punjab Crop Distribution' },
        'punjab-farm-info': { id: '27420955', title: 'Punjab Farm Info' },
        'pakistan-crop-distribution': { id: '27420898', title: 'Pakistan Crop Distribution' },
        'pakistan-farm-info': { id: '27420832', title: 'Pakistan Farm Info' }
    };

    const selected = visualizations[dataType];
    if (!selected) {
        displayContainer.innerHTML = `<div style="display:flex;height:100%;align-items:center;justify-content:center;"><p>Graph data for <strong>${dataType}</strong></p></div>`;
        return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://public.flourish.studio/visualisation/${selected.id}/embed`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.title = `${selected.title} - Flourish Visualization`;
    iframe.allowFullscreen = true;
    displayContainer.appendChild(iframe);
}

// Restore Portal Iframe (when no graph selected)
function restorePortalIframe() {
     // Check if any portal is active
     // Actually, if we uncheck a graph, we probably want to see the active portal.
     // initPortalSelector sets LIMS by default.
     
     // Let's check which portal switch is checked
     const portalToggles = ['lims-toggle', 'fsp-toggle', 'data-toggle', 'nad-toggle'];
     let activePortalUrl = 'https://pakkissan.com/ndma'; // Default
     
     for (const id of portalToggles) {
         const el = document.getElementById(id);
         if (el && el.checked) {
              // Find url
              if (id === 'lims-toggle') activePortalUrl = 'https://pakkissan.com/ndma';
              else if (id === 'fsp-toggle') activePortalUrl = 'https://fsp.gov.pk/';
              else if (id === 'data-toggle') activePortalUrl = 'http://pc.urbanunit.gov.pk/DataBank/Index';
              else if (id === 'nad-toggle') activePortalUrl = 'https://na.data.gov.pk/Crops/Home';
              break;
         }
     }
     
     // Do not clear the entire portals-content as it contains the sidebar
     let container = document.querySelector('.portal-iframe-container');
     if (!container) {
          const portalsContent = document.querySelector('.portals-content');
          container = document.createElement('div');
          container.className = 'portal-iframe-container';
          portalsContent.appendChild(container);
     }
     
     // Only clear the iframe container
     container.innerHTML = '';
     
     const iframe = document.createElement('iframe');
     iframe.id = 'portal-iframe';
     iframe.src = activePortalUrl;
     iframe.width = '100%';
     iframe.height = '100%';
     iframe.frameBorder = '0';
     
     container.appendChild(iframe);
}

// Load Graph Data by Type
function loadGraphDataByType(dataType) {
    console.log('Loading graph data for:', dataType);
    
    // We target the display area. existing is .portal-iframe-container
    let displayContainer = document.querySelector('.portal-iframe-container');
    
    // Create if missing (append to portals-content)
    if (!displayContainer) {
        const portalsContent = document.querySelector('.portals-content');
        displayContainer = document.createElement('div');
        displayContainer.className = 'portal-iframe-container';
        portalsContent.appendChild(displayContainer);
    }
    
    // Clear display container only
    displayContainer.innerHTML = '';

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
        case 'population':
            visualisationId = '29032998';
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
            displayContainer.innerHTML = `<div style="display:flex;height:100%;align-items:center;justify-content:center;"><p>Graph data for <strong>${dataType}</strong></p></div>`;
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
    displayContainer.appendChild(iframe);
}

function renderAnimatedCropChart(dataType, displayContainer) {
    // Cancel any running animation
    if (displayContainer.animId) {
        cancelAnimationFrame(displayContainer.animId);
        displayContainer.animId = null;
    }

    const chartInfo = cropChartData[dataType];
    if (!chartInfo) return;

    // Load styles once
    if (!document.getElementById('crop-chart-style')) {
        const style = document.createElement('style');
        style.id = 'crop-chart-style';
        style.innerHTML = `
            .crop-chart-wrapper {
                background: linear-gradient(145deg, #0b1026, #16213e);
                border-radius: 16px;
                padding: 24px;
                color: #f8fafc;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
                height: 100%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }
            .crop-chart-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
            }
            .crop-chart-title {
                margin: 0;
                font-size: 20px;
                font-weight: 700;
                letter-spacing: 1px;
                text-transform: uppercase;
                flex-grow: 1;
                text-align: center;
                color: #fff;
            }
            .crop-chart-replay-btn {
                display: flex;
                align-items: center;
                gap: 6px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.15);
                padding: 6px 14px;
                border-radius: 6px;
                color: #cbd5e1;
                cursor: pointer;
                font-size: 13px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                transition: all 0.25s ease;
            }
            .crop-chart-replay-btn:hover {
                background: rgba(255, 255, 255, 0.12);
                border-color: #3b82f6;
                color: #fff;
                box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
            }
            .crop-chart-replay-btn svg {
                transition: transform 0.5s ease;
            }
            .crop-chart-replay-btn:hover svg {
                transform: rotate(-180deg);
            }
            .crop-chart-body {
                flex-grow: 1;
                position: relative;
                width: 100%;
                height: calc(100% - 60px);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            svg#crop-chart-svg {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.25);
                border-radius: 12px;
                overflow: visible;
            }
            .crop-grid-line {
                stroke: rgba(255, 255, 255, 0.06);
                stroke-width: 1.2;
            }
            .crop-grid-line-dashed {
                stroke: rgba(255, 255, 255, 0.08);
                stroke-width: 1;
                stroke-dasharray: 4 4;
            }
            .crop-axis-label {
                fill: #94a3b8;
                font-size: 12px;
                font-weight: 500;
            }
            .crop-year-label {
                font-weight: 600;
                text-transform: uppercase;
            }
            .crop-line-path {
                fill: none;
                stroke-width: 3.5;
                stroke-linecap: round;
                stroke-linejoin: round;
            }
            .crop-line-glow {
                fill: none;
                stroke-width: 8;
                stroke-linecap: round;
                stroke-linejoin: round;
                opacity: 0.15;
                filter: blur(4px);
            }
            .crop-end-label {
                font-size: 13px;
                font-weight: 700;
                alignment-baseline: middle;
            }
            .crop-chart-dot {
                r: 4.5;
                stroke-width: 1.5;
                stroke: #0b1026;
            }
            .crop-tooltip {
                position: absolute;
                background: rgba(11, 16, 38, 0.95);
                border: 1px solid rgba(255, 255, 255, 0.15);
                border-radius: 8px;
                padding: 10px 12px;
                color: #f8fafc;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.2s ease, transform 0.1s ease;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
                z-index: 100;
                font-size: 13px;
                backdrop-filter: blur(4px);
            }
            .crop-tooltip-title {
                font-weight: 700;
                color: #fff;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                margin-bottom: 6px;
                padding-bottom: 4px;
            }
            .crop-tooltip-row {
                display: flex;
                justify-content: space-between;
                gap: 16px;
                margin-bottom: 3px;
            }
            .crop-tooltip-name {
                font-weight: 500;
            }
            .crop-tooltip-value {
                font-weight: 700;
            }
        `;
        document.head.appendChild(style);
    }

    // Build outer wrapper structure
    displayContainer.innerHTML = `
        <div class="crop-chart-wrapper">
            <div class="crop-chart-header">
                <button class="crop-chart-replay-btn" id="crop-chart-replay-btn">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" style="vertical-align:middle; margin-right:4px;">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.57-.57" />
                    </svg>
                    Replay
                </button>
                <h3 class="crop-chart-title">${chartInfo.title}</h3>
            </div>
            <div class="crop-chart-body">
                <svg id="crop-chart-svg" viewBox="0 0 1000 450" xmlns="http://www.w3.org/2000/svg"></svg>
                <div class="crop-tooltip" id="crop-chart-tooltip"></div>
            </div>
        </div>
    `;

    const svgEl = displayContainer.querySelector('#crop-chart-svg');
    const tooltipEl = displayContainer.querySelector('#crop-chart-tooltip');

    // Build static SVG components
    const gridLines = [];
    const gridLabels = [];
    if (dataType === 'crop-production') {
        for (let v = 0; v <= 100; v += 20) {
            const y = 410 - 3.4 * v;
            gridLines.push(`<line class="crop-grid-line" x1="70" y1="${y}" x2="820" y2="${y}" />`);
            gridLabels.push(`<text class="crop-axis-label" x="50" y="${y + 4}" text-anchor="end">${v}</text>`);
        }
    } else {
        for (let v = 0; v <= 5; v += 1) {
            const y = 410 - 68 * v;
            gridLines.push(`<line class="crop-grid-line" x1="70" y1="${y}" x2="820" y2="${y}" />`);
            gridLabels.push(`<text class="crop-axis-label" x="50" y="${y + 4}" text-anchor="end">${v}</text>`);
        }
    }

    const yearGridLines = [];
    const yearLabels = [];
    chartInfo.years.forEach((yr, idx) => {
        const x = 70 + idx * 187.5;
        yearGridLines.push(`<line class="crop-grid-line-dashed" x1="${x}" y1="50" x2="${x}" y2="410" />`);
        yearLabels.push(`<text class="crop-axis-label crop-year-label" x="${x}" y="35" transform="rotate(-90 ${x} 35)" text-anchor="middle">${yr}</text>`);
    });

    // Create placeholders for lines, glow lines, end circles, and end labels
    const pathsHTML = [];
    const glowsHTML = [];
    const dotsHTML = [];
    const labelsHTML = [];

    chartInfo.crops.forEach(crop => {
        glowsHTML.push(`<path id="glow-${crop.name}" class="crop-line-glow" stroke="${crop.color}" d="" />`);
        pathsHTML.push(`<path id="path-${crop.name}" class="crop-line-path" stroke="${crop.color}" d="" />`);
        dotsHTML.push(`<circle id="dot-${crop.name}" class="crop-chart-dot" fill="${crop.color}" cx="0" cy="0" r="5" />`);
        labelsHTML.push(`<text id="label-${crop.name}" class="crop-end-label" fill="${crop.color}" x="0" y="0"></text>`);
    });

    svgEl.innerHTML = `
        <!-- X-axis grid lines (dashed) -->
        ${yearGridLines.join('\n')}
        <!-- Y-axis grid lines (solid) -->
        ${gridLines.join('\n')}
        
        <!-- Y-axis labels -->
        ${gridLabels.join('\n')}
        <!-- X-axis labels (rotated) -->
        ${yearLabels.join('\n')}

        <!-- Path glow underlay (for visual depth) -->
        ${glowsHTML.join('\n')}
        
        <!-- Main paths -->
        ${pathsHTML.join('\n')}
        
        <!-- End circles -->
        ${dotsHTML.join('\n')}
        
        <!-- End labels -->
        ${labelsHTML.join('\n')}

        <!-- Hover guide line -->
        <line id="crop-hover-line" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="4 4" x1="0" y1="50" x2="0" y2="410" style="display:none;" />
    `;

    // Start animation
    let startTime = null;
    const duration = 2000;

    const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        chartInfo.crops.forEach(crop => {
            const xCoords = [70, 257.5, 445, 632.5, 820];
            const yCoords = crop.values.map(v => {
                if (dataType === 'crop-production') {
                    return 410 - 3.4 * v;
                } else {
                    return 410 - 68 * v;
                }
            });

            // Segment-based progression calculation
            const currentSeg = progress * 4;
            const segIndex = Math.floor(currentSeg);
            const segProgress = currentSeg - segIndex;

            let pathD = `M ${xCoords[0]} ${yCoords[0]}`;
            for (let i = 1; i <= segIndex; i++) {
                pathD += ` L ${xCoords[i]} ${yCoords[i]}`;
            }

            let xTip = xCoords[segIndex];
            let yTip = yCoords[segIndex];
            let valTip = crop.values[segIndex];

            if (segIndex < 4) {
                xTip = xCoords[segIndex] + (xCoords[segIndex + 1] - xCoords[segIndex]) * segProgress;
                yTip = yCoords[segIndex] + (yCoords[segIndex + 1] - yCoords[segIndex]) * segProgress;
                valTip = crop.values[segIndex] + (crop.values[segIndex + 1] - crop.values[segIndex]) * segProgress;
                pathD += ` L ${xTip} ${yTip}`;
            }

            const pathEl = svgEl.querySelector(`#path-${crop.name}`);
            const glowEl = svgEl.querySelector(`#glow-${crop.name}`);
            const dotEl = svgEl.querySelector(`#dot-${crop.name}`);
            const labelEl = svgEl.querySelector(`#label-${crop.name}`);

            if (pathEl) pathEl.setAttribute('d', pathD);
            if (glowEl) glowEl.setAttribute('d', pathD);
            if (dotEl) {
                dotEl.setAttribute('cx', xTip);
                dotEl.setAttribute('cy', yTip);
            }
            if (labelEl) {
                labelEl.setAttribute('x', xTip + 10);
                labelEl.setAttribute('y', yTip + 4);
                labelEl.textContent = `${crop.name} ${valTip.toFixed(2)}`;
            }
        });

        if (progress < 1) {
            displayContainer.animId = requestAnimationFrame(animate);
        } else {
            displayContainer.animId = null;
        }
    };

    displayContainer.animId = requestAnimationFrame(animate);

    // Replay button handler
    const replayBtn = displayContainer.querySelector('#crop-chart-replay-btn');
    if (replayBtn) {
        replayBtn.addEventListener('click', () => {
            if (displayContainer.animId) {
                cancelAnimationFrame(displayContainer.animId);
            }
            startTime = null;
            displayContainer.animId = requestAnimationFrame(animate);
        });
    }

    // Interactivity / Tooltip Handler
    const xCoords = [70, 257.5, 445, 632.5, 820];
    svgEl.addEventListener('mousemove', (e) => {
        const rect = svgEl.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * 1000;
        const mouseY = ((e.clientY - rect.top) / rect.height) * 450;

        // Ensure we are inside chart boundary
        if (mouseX >= 50 && mouseX <= 840 && mouseY >= 45 && mouseY <= 420) {
            // Find closest year index
            let closestIdx = 0;
            let minDist = Infinity;
            xCoords.forEach((cx, idx) => {
                const dist = Math.abs(mouseX - cx);
                if (dist < minDist) {
                    minDist = dist;
                    closestIdx = idx;
                }
            });

            const targetX = xCoords[closestIdx];
            const yearName = chartInfo.years[closestIdx];

            // Update hover guide line
            const hoverLine = svgEl.querySelector('#crop-hover-line');
            if (hoverLine) {
                hoverLine.setAttribute('x1', targetX);
                hoverLine.setAttribute('x2', targetX);
                hoverLine.style.display = 'block';
            }

            // Build tooltip rows HTML
            const rowsHTML = chartInfo.crops.map(crop => {
                const val = crop.values[closestIdx].toFixed(2);
                return `
                    <div class="crop-tooltip-row" style="color: ${crop.color}">
                        <span class="crop-tooltip-name">${crop.name}:</span>
                        <span class="crop-tooltip-value">${val} ${chartInfo.unit}</span>
                    </div>
                `;
            }).join('');

            tooltipEl.innerHTML = `
                <div class="crop-tooltip-title">${yearName}</div>
                ${rowsHTML}
            `;

            // Position tooltip relative to container
            let tooltipX = ((targetX / 1000) * rect.width) + 15;
            let tooltipY = ((mouseY / 450) * rect.height) - 40;

            // Boundary checks
            const tooltipWidth = 160;
            if (tooltipX + tooltipWidth > rect.width) {
                tooltipX = tooltipX - tooltipWidth - 30; // show to the left
            }

            tooltipEl.style.left = `${tooltipX}px`;
            tooltipEl.style.top = `${tooltipY}px`;
            tooltipEl.style.opacity = '1';
        } else {
            hideHoverGuide();
        }
    });

    svgEl.addEventListener('mouseleave', () => {
        hideHoverGuide();
    });

    function hideHoverGuide() {
        const hoverLine = svgEl.querySelector('#crop-hover-line');
        if (hoverLine) hoverLine.style.display = 'none';
        tooltipEl.style.opacity = '0';
    }
}

function handleCollectiveCropsClick() {
    event.preventDefault();
    const clickedLink = document.getElementById('collective-crops-btn');
    if (!clickedLink) return false;
    
    clickedLink.classList.toggle('active');
    const isActive = clickedLink.classList.contains('active');
    
    handleCollectiveCropsToggle(isActive);
    return false;
}

function handleCollectiveCropsToggle(isChecked) {
    const toggleSwitch = document.getElementById('collective-crops-toggle');
    const clickedLink = document.getElementById('collective-crops-btn');
    
    if (toggleSwitch) toggleSwitch.checked = isChecked;
    if (clickedLink) {
        if (isChecked) clickedLink.classList.add('active');
        else clickedLink.classList.remove('active');
    }
    
    if (isChecked) {
        loadCollectiveCropsTable();
        turnOffOtherPortals('collective-crops-toggle');
        turnOffOtherGraphs(null);
        turnOffOtherNewGraphs(null);
    } else {
        restorePortalIframe();
    }
}

function loadCollectiveCropsTable() {
    let displayContainer = document.querySelector('.portal-iframe-container');
    
    if (!displayContainer) {
        const portalsContent = document.querySelector('.portals-content');
        displayContainer = document.createElement('div');
        displayContainer.className = 'portal-iframe-container';
        portalsContent.appendChild(displayContainer);
    }
    
    displayContainer.innerHTML = '';
    renderCollectiveCropsTable(displayContainer);
}

function renderCollectiveCropsTable(displayContainer) {
    if (displayContainer.animId) {
        cancelAnimationFrame(displayContainer.animId);
        displayContainer.animId = null;
    }

    if (!document.getElementById('collective-table-style')) {
        const style = document.createElement('style');
        style.id = 'collective-table-style';
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');
            
            .collective-dashboard-container {
                box-sizing: border-box;
                font-family: 'Rajdhani', sans-serif;
                font-weight: 500;
                background: #f0f4f0;
                min-height: 100%;
                width: 100%;
                padding: 24px 16px;
                color: #1a1a1a;
                overflow-y: auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            .collective-dashboard-container *, 
            .collective-dashboard-container *::before, 
            .collective-dashboard-container *::after { 
                box-sizing: border-box; 
                margin: 0; 
                padding: 0; 
                font-family: inherit;
            }
            .collective-dashboard-container .card {
                background: #fff;
                border-radius: 16px;
                box-shadow: 0 2px 16px rgba(0,0,0,0.09);
                padding: 20px 20px 24px;
                max-width: 1100px;
                margin: 0 auto;
                transition: max-width 0.3s ease, width 0.3s ease;
            }
            :fullscreen .collective-dashboard-container .card,
            :-webkit-full-screen .collective-dashboard-container .card {
                max-width: calc(100% - 160px) !important;
                width: calc(100% - 160px) !important;
                margin: 0 auto !important;
            }
            @media (max-width: 767px) {
                :fullscreen .collective-dashboard-container .card,
                :-webkit-full-screen .collective-dashboard-container .card {
                    max-width: 95% !important;
                    width: 95% !important;
                }
            }
            .collective-dashboard-container .top-bar {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 12px;
                margin-bottom: 16px;
            }
            .collective-dashboard-container .top-bar h2 {
                font-size: 19px;
                font-weight: 700;
                color: #1a472a;
            }
            .collective-dashboard-container .top-bar p {
                font-size: 13.5px;
                font-weight: 500;
                color: #666;
                margin-top: 3px;
            }
            .collective-dashboard-container .controls {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .collective-dashboard-container .controls label {
                font-size: 13.5px;
                font-weight: 600;
                color: #444;
            }
            .collective-dashboard-container .year-dropdown-container {
                position: relative;
                display: inline-block;
                user-select: none;
            }
            .collective-dashboard-container .year-dropdown-btn {
                background: #f9fff9;
                border: 1.5px solid #a5d6a7;
                border-radius: 8px;
                padding: 7px 12px;
                color: #1a472a;
                cursor: pointer;
                font-size: 14.5px;
                font-weight: 600;
                min-width: 180px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                transition: border-color 0.2s, background 0.2s;
            }
            .collective-dashboard-container .year-dropdown-btn:hover {
                border-color: #388e3c;
                background: #f1f8e9;
            }
            .collective-dashboard-container .year-dropdown-btn::after {
                content: "▼";
                font-size: 10px;
                color: #1a472a;
                transition: transform 0.2s;
                margin-left: 8px;
            }
            .collective-dashboard-container .year-dropdown-container.open .year-dropdown-btn::after {
                transform: rotate(180deg);
            }
            .collective-dashboard-container .year-dropdown-content {
                display: none;
                position: absolute;
                top: 100%;
                right: 0;
                margin-top: 4px;
                background: #fff;
                border: 1.5px solid #a5d6a7;
                border-radius: 8px;
                padding: 6px 0;
                min-width: 180px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                z-index: 100;
            }
            .collective-dashboard-container .year-dropdown-container.open .year-dropdown-content {
                display: block;
            }
            .collective-dashboard-container .year-dropdown-item {
                display: flex;
                align-items: center;
                padding: 8px 12px;
                gap: 8px;
                cursor: pointer;
                transition: background 0.15s;
            }
            .collective-dashboard-container .year-dropdown-item:hover {
                background: #f1f8e9;
            }
            .collective-dashboard-container .year-dropdown-item input[type="checkbox"] {
                cursor: pointer;
                width: 14px;
                height: 14px;
                accent-color: #388e3c;
            }
            .collective-dashboard-container .year-dropdown-item span {
                font-size: 14px;
                font-weight: 600;
                color: #1a472a;
            }
            .collective-dashboard-container .legend {
                display: flex;
                flex-wrap: wrap;
                gap: 14px;
                margin-bottom: 14px;
            }
            .collective-dashboard-container .legend-item { 
                display: flex; 
                align-items: center; 
                gap: 6px; 
                font-size: 13px; 
                font-weight: 600;
                color: #555; 
            }
            .collective-dashboard-container .swatch { 
                width: 11px; 
                height: 11px; 
                border-radius: 3px; 
                flex-shrink: 0; 
            }
            .collective-dashboard-container .table-wrapper {
                width: 100%;
                overflow-x: auto;
                border-radius: 12px;
                border: 1.5px solid #c8e6c9;
                padding: 4px;
                background: #fff;
            }
            .collective-dashboard-container table {
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
                min-width: 560px;
                margin-bottom: 24px;
                border-radius: 12px;
                overflow: hidden;
                border: 1.5px solid #c8e6c9;
            }
            .collective-dashboard-container table:last-child {
                margin-bottom: 0;
            }
            .collective-dashboard-container thead th {
                background: #1a472a;
                color: #c8f0d0;
                font-weight: 700;
                font-size: 13px;
                padding: 10px 12px;
                text-align: center;
                border-right: 1px solid rgba(255,255,255,0.12);
                white-space: nowrap;
                position: relative;
                user-select: none;
            }
            .collective-dashboard-container thead th:last-child { 
                border-right: none; 
            }
            .collective-dashboard-container thead th .short-label {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1px;
            }
            .collective-dashboard-container thead th .short-label span { 
                line-height: 1.3; 
            }
            .collective-dashboard-container thead th .unit { 
                font-size: 11px; 
                opacity: 0.85; 
                font-weight: 500; 
            }
            .collective-dashboard-container thead th[data-tip] { 
                cursor: help; 
            }
            .collective-dashboard-container thead th[data-tip] .short-label { 
                border-bottom: 1px dashed rgba(200,240,208,0.5); 
                padding-bottom: 1px; 
            }
            .collective-dashboard-container .tooltip {
                visibility: hidden;
                opacity: 0;
                position: absolute;
                z-index: 99;
                bottom: calc(100% + 8px);
                left: 50%;
                transform: translateX(-50%);
                background: #263238;
                color: #ecf5f0;
                font-size: 13px;
                font-weight: 500;
                padding: 8px 12px;
                border-radius: 8px;
                pointer-events: none;
                box-shadow: 0 4px 14px rgba(0,0,0,0.22);
                transition: opacity 0.18s, visibility 0.18s;
                line-height: 1.5;
                text-align: left;
                max-width: 220px;
                white-space: normal;
            }
            .collective-dashboard-container .tooltip::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border: 6px solid transparent;
                border-top-color: #263238;
            }
            .collective-dashboard-container thead th[data-tip]:hover .tooltip {
                visibility: visible;
                opacity: 1;
            }
            .collective-dashboard-container .year-group-header th {
                background: #2e7d32;
                color: #dcedc8;
                font-size: 13px;
                font-weight: 700;
                padding: 7px 10px;
                text-align: center;
                border-right: 2px solid rgba(255,255,255,0.18);
            }
            .collective-dashboard-container .year-group-header th:last-child { 
                border-right: none; 
            }
            .collective-dashboard-container .sub-header th {
                background: #388e3c;
                color: #f1f8e9;
                font-size: 12px;
                font-weight: 600;
                padding: 6px 10px;
                text-align: center;
                border-right: 1px solid rgba(255,255,255,0.1);
                position: relative;
                cursor: help;
            }
            .collective-dashboard-container .sub-header th:last-child { 
                border-right: none; 
            }
            .collective-dashboard-container .sub-header th[data-tip]:hover .tooltip { 
                visibility: visible; 
                opacity: 1; 
            }
            .collective-dashboard-container tbody tr { 
                transition: background 0.15s; 
            }
            .collective-dashboard-container tbody tr:nth-child(odd) { 
                background: #fff; 
            }
            .collective-dashboard-container tbody tr:nth-child(even) { 
                background: #f9fdf9; 
            }
            .collective-dashboard-container tbody tr:hover { 
                background: #e8f5e9; 
            }
            .collective-dashboard-container tbody td {
                padding: 10px 12px;
                text-align: center;
                border-right: 1px solid #e8f5e9;
                font-variant-numeric: tabular-nums;
                color: #222;
                vertical-align: middle;
                font-weight: 600;
            }
            .collective-dashboard-container tbody td:last-child { 
                border-right: none; 
            }
            .collective-dashboard-container td.crop-name {
                text-align: left;
                font-weight: 700;
                color: #1b5e20;
                background: #f1f8e9;
                border-right: 2px solid #a5d6a7 !important;
                white-space: nowrap;
                min-width: 110px;
                font-size: 14.5px;
            }
            .collective-dashboard-container td.crop-name .crop-icon { 
                margin-right: 5px; 
            }
            .collective-dashboard-container td.cell-prod { 
                color: #1565c0; 
                font-weight: 600; 
            }
            .collective-dashboard-container td.cell-yield { 
                color: #e65100; 
                font-weight: 600; 
            }
            .collective-dashboard-container td.cell-potential { 
                color: #4a148c; 
                font-weight: 600; 
            }
            .collective-dashboard-container td.cell-loss-wrap { 
                padding: 6px 8px; 
            }
            .collective-dashboard-container .cell-loss {
                display: inline-block;
                background: #c62828;
                color: #fff;
                font-weight: 700;
                font-size: 13px;
                padding: 4px 10px;
                border-radius: 6px;
                min-width: 42px;
                text-align: center;
                animation: collectiveZoomBlink 1.4s ease-in-out infinite;
            }
            @keyframes collectiveZoomBlink {
                0%   { transform: scale(1);    background: #c62828; box-shadow: 0 0 0 0 rgba(198,40,40,0); }
                30%  { transform: scale(1.20); background: #e53935; box-shadow: 0 0 8px 3px rgba(229,57,53,0.5); }
                60%  { transform: scale(0.95); background: #b71c1c; box-shadow: 0 0 2px 0 rgba(183,28,28,0.2); }
                100% { transform: scale(1);    background: #c62828; box-shadow: 0 0 0 0 rgba(198,40,40,0); }
            }
            .collective-dashboard-container td.yr-divider { 
                border-left: 2px solid #a5d6a7; 
            }
            .collective-dashboard-container .summary-strip {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 18px;
            }
            .collective-dashboard-container .summary-card {
                flex: 1;
                min-width: 120px;
                background: #f1f8e9;
                border: 1.5px solid #c8e6c9;
                border-radius: 10px;
                padding: 11px 14px;
                text-align: center;
            }
            .collective-dashboard-container .summary-card .val {
                font-size: 24px;
                font-weight: 700;
                display: block;
                line-height: 1.2;
            }
            .collective-dashboard-container .summary-card .lbl {
                font-size: 12.5px;
                color: #555;
                margin-top: 3px;
                display: block;
                font-weight: 600;
            }
            .collective-dashboard-container .val-loss { 
                color: #c62828; 
            }
            .collective-dashboard-container .val-prod { 
                color: #1565c0; 
            }
            .collective-dashboard-container .val-pot { 
                color: #4a148c; 
            }
            .collective-dashboard-container .fade-in { 
                animation: collectiveFadeSlide 0.32s ease forwards; 
            }
            @keyframes collectiveFadeSlide {
                from { opacity: 0; transform: translateY(8px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            @media (max-width: 600px) {
                .collective-dashboard-container .top-bar { flex-direction: column; }
                .collective-dashboard-container .summary-card { min-width: 100px; }
            }

            /* Fullscreen Mode - Large Font & Spacious Padding Scale-up */
            :fullscreen .collective-dashboard-container,
            :-webkit-full-screen .collective-dashboard-container {
                padding: 32px 24px !important;
            }
            :fullscreen .collective-dashboard-container .top-bar h2,
            :-webkit-full-screen .collective-dashboard-container .top-bar h2 {
                font-size: 23px !important;
            }
            :fullscreen .collective-dashboard-container .top-bar p,
            :-webkit-full-screen .collective-dashboard-container .top-bar p {
                font-size: 16px !important;
            }
            :fullscreen .collective-dashboard-container .controls label,
            :-webkit-full-screen .collective-dashboard-container .controls label {
                font-size: 16px !important;
            }
            :fullscreen .collective-dashboard-container .year-dropdown-btn,
            :-webkit-full-screen .collective-dashboard-container .year-dropdown-btn {
                font-size: 16px !important;
                padding: 10px 16px !important;
                min-width: 210px !important;
            }
            :fullscreen .collective-dashboard-container .year-dropdown-item span,
            :-webkit-full-screen .collective-dashboard-container .year-dropdown-item span {
                font-size: 16px !important;
            }
            :fullscreen .collective-dashboard-container .legend-item,
            :-webkit-full-screen .collective-dashboard-container .legend-item {
                font-size: 15px !important;
                gap: 8px !important;
            }
            :fullscreen .collective-dashboard-container .swatch,
            :-webkit-full-screen .collective-dashboard-container .swatch {
                width: 14px !important;
                height: 14px !important;
            }
            :fullscreen .collective-dashboard-container table,
            :-webkit-full-screen .collective-dashboard-container table {
                font-size: 16.5px !important;
            }
            :fullscreen .collective-dashboard-container thead th,
            :-webkit-full-screen .collective-dashboard-container thead th {
                font-size: 15px !important;
                padding: 14px 16px !important;
            }
            :fullscreen .collective-dashboard-container thead th .unit,
            :-webkit-full-screen .collective-dashboard-container thead th .unit {
                font-size: 12.5px !important;
            }
            :fullscreen .collective-dashboard-container .year-group-header th,
            :-webkit-full-screen .collective-dashboard-container .year-group-header th {
                font-size: 15px !important;
                padding: 11px 14px !important;
            }
            :fullscreen .collective-dashboard-container .sub-header th,
            :-webkit-full-screen .collective-dashboard-container .sub-header th {
                font-size: 14px !important;
                padding: 9px 14px !important;
            }
            :fullscreen .collective-dashboard-container tbody td,
            :-webkit-full-screen .collective-dashboard-container tbody td {
                padding: 13px 15px !important;
            }
            :fullscreen .collective-dashboard-container td.crop-name,
            :-webkit-full-screen .collective-dashboard-container td.crop-name {
                font-size: 16.5px !important;
                min-width: 135px !important;
            }
            :fullscreen .collective-dashboard-container .cell-loss,
            :-webkit-full-screen .collective-dashboard-container .cell-loss {
                font-size: 15px !important;
                padding: 6px 13px !important;
                border-radius: 8px !important;
                min-width: 50px !important;
            }
            :fullscreen .collective-dashboard-container .summary-card,
            :-webkit-full-screen .collective-dashboard-container .summary-card {
                padding: 16px 20px !important;
                border-radius: 12px !important;
            }
            :fullscreen .collective-dashboard-container .summary-card .val,
            :-webkit-full-screen .collective-dashboard-container .summary-card .val {
                font-size: 29px !important;
            }
            :fullscreen .collective-dashboard-container .summary-card .lbl,
            :-webkit-full-screen .collective-dashboard-container .summary-card .lbl {
                font-size: 15px !important;
            }
            :fullscreen .collective-dashboard-container .tooltip,
            :-webkit-full-screen .collective-dashboard-container .tooltip {
                font-size: 14px !important;
                max-width: 270px !important;
                padding: 10px 14px !important;
            }
        `;
        document.head.appendChild(style);
    }

    displayContainer.innerHTML = `
        <div class="collective-dashboard-container">
            <div class="card">
              <div class="top-bar">
                <div>
                  <h2>Crop-wise Production Data</h2>
                  <p>Values: Production &amp; Potential in M&nbsp;T/B &nbsp;|&nbsp; Yield in T/B per Ha &nbsp;|&nbsp; Loss in M&nbsp;T/B</p>
                </div>
                <div class="controls">
                  <label>Select years:</label>
                  <div class="year-dropdown-container" id="collectiveYearDropdown">
                    <div class="year-dropdown-btn" id="collectiveYearDropdownBtn">All Years</div>
                    <div class="year-dropdown-content">
                      <div class="year-dropdown-item">
                        <input type="checkbox" id="yr-chk-2021-22" checked />
                        <span>2021-22</span>
                      </div>
                      <div class="year-dropdown-item">
                        <input type="checkbox" id="yr-chk-2022-23" checked />
                        <span>2022-23</span>
                      </div>
                      <div class="year-dropdown-item">
                        <input type="checkbox" id="yr-chk-2023-24" checked />
                        <span>2023-24</span>
                      </div>
                      <div class="year-dropdown-item">
                        <input type="checkbox" id="yr-chk-2024-25" checked />
                        <span>2024-25</span>
                      </div>
                      <div class="year-dropdown-item">
                        <input type="checkbox" id="yr-chk-2025-26" checked />
                        <span>2025-26</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="legend">
                <div class="legend-item"><div class="swatch" style="background:#1565c0"></div>Production</div>
                <div class="legend-item"><div class="swatch" style="background:#e65100"></div>Avg Yield</div>
                <div class="legend-item"><div class="swatch" style="background:#c62828"></div>Loss Due to Disaster (blinking)</div>
                <div class="legend-item"><div class="swatch" style="background:#4a148c"></div>Potential Production</div>
                <div class="legend-item" style="margin-left:auto; font-style:italic; font-size:11px; color:#888;">
                  💡 Hover column headers to see full title
                </div>
              </div>

              <div class="table-wrapper" id="collectiveTablesContainer"></div>

              <div class="summary-strip" id="collectiveSummaryStrip"></div>
            </div>
        </div>
    `;

    const dropdownContainer = displayContainer.querySelector('#collectiveYearDropdown');
    const dropdownBtn = displayContainer.querySelector('#collectiveYearDropdownBtn');
    const tablesContainer = displayContainer.querySelector('#collectiveTablesContainer');
    const summaryStrip = displayContainer.querySelector('#collectiveSummaryStrip');

    // Toggle dropdown open/close
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContainer.classList.toggle('open');
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
        dropdownContainer.classList.remove('open');
    });

    const checkboxes = dropdownContainer.querySelectorAll('.year-dropdown-item input[type="checkbox"]');
    checkboxes.forEach(chk => {
        chk.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        chk.addEventListener('change', () => {
            updateSelectedYears();
        });
    });

    const items = dropdownContainer.querySelectorAll('.year-dropdown-item');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const chk = item.querySelector('input[type="checkbox"]');
            if (chk) {
                chk.checked = !chk.checked;
                chk.dispatchEvent(new Event('change'));
            }
        });
    });

    const CROPS = [
      { name: 'Wheat',     icon: '🌾' },
      { name: 'Rice',      icon: '🍚' },
      { name: 'Cotton',    icon: '🌿' },
      { name: 'Maize',     icon: '🌽' },
      { name: 'Sugarcane', icon: '🎋' },
    ];

    const DATA = {
      '2021-22': {
        Wheat:     { prod: 26.20, yield: 2.94,  loss: 1.39, pot: 27.59 },
        Rice:      { prod: 9.32,  yield: 2.64,  loss: 2.18, pot: 11.50 },
        Cotton:    { prod: 8.33,  yield: 4.38,  loss: 2.23, pot: 10.56 },
        Maize:     { prod: 9.52,  yield: 5.77,  loss: 1.31, pot: 10.83 },
        Sugarcane: { prod: 88.65, yield: 70.31, loss: 0.60, pot: 89.25 },
      },
      '2022-23': {
        Wheat:     { prod: 28.16, yield: 3.12,  loss: 1.15, pot: 29.31 },
        Rice:      { prod: 7.32,  yield: 2.46,  loss: 3.18, pot: 10.50 },
        Cotton:    { prod: 4.19,  yield: 2.00,  loss: 4.12, pot: 8.31  },
        Maize:     { prod: 10.96, yield: 6.39,  loss: 0.36, pot: 11.32 },
        Sugarcane: { prod: 87.64, yield: 66.71, loss: 1.50, pot: 89.14 },
      },
      '2023-24': {
        Wheat:     { prod: 31.43, yield: 3.27,  loss: 0.30, pot: 31.73 },
        Rice:      { prod: 9.86,  yield: 2.71,  loss: 2.64, pot: 12.50 },
        Cotton:    { prod: 10.19, yield: 4.25,  loss: 2.58, pot: 12.77 },
        Maize:     { prod: 5.56,  yield: 4.81,  loss: 4.57, pot: 10.13 },
        Sugarcane: { prod: 86.40, yield: 73.88, loss: 1.64, pot: 88.04 },
      },
      '2024-25': {
        Wheat:     { prod: 28.42, yield: 3.24,  loss: 3.66, pot: 32.08 },
        Rice:      { prod: 9.50,  yield: 2.41,  loss: 4.00, pot: 13.50 },
        Cotton:    { prod: 7.08,  yield: 3.54,  loss: 3.79, pot: 10.87 },
        Maize:     { prod: 9.30,  yield: 5.35,  loss: 1.70, pot: 11.00 },
        Sugarcane: { prod: 83.50, yield: 66.89, loss: 1.54, pot: 85.04 },
      },
      '2025-26': {
        Wheat:     { prod: 29.31, yield: 3.12,  loss: 2.19, pot: 31.50 },
        Rice:      { prod: 9.99,  yield: 2.55,  loss: 3.00, pot: 13.00 },
        Cotton:    { prod: 7.05,  yield: 3.36,  loss: 3.13, pot: 10.18 },
        Maize:     { prod: 8.79,  yield: 6.46,  loss: 2.51, pot: 11.30 },
        Sugarcane: { prod: 84.50, yield: 74.54, loss: 3.80, pot: 88.30 },
      },
    };

    const YEARS = ['2021-22','2022-23','2023-24','2024-25','2025-26'];

    const COL_TITLES = {
      prod:  'Year Production (M T/B)',
      yield: 'Average Yield (T/B / Ha)',
      loss:  'Loss Due to Disaster (M T/B)',
      pot:   'Potential Production without Disaster (M T/B)',
    };

    const COL_SHORT = {
      prod:  ['Prod.',      'M T/B'],
      yield: ['Avg Yield',  'T/B/Ha'],
      loss:  ['Loss',       'M T/B'],
      pot:   ['Pot. Prod.', 'M T/B'],
    };

    function thWithTip(short, unit, tip, extraStyle) {
      return `<th data-tip="${tip}" style="${extraStyle||''}">
        <div class="short-label">
          <span>${short}</span>
          <span class="unit">(${unit})</span>
        </div>
        <div class="tooltip">${tip}</div>
      </th>`;
    }

    function updateSelectedYears() {
        const selected = [];
        checkboxes.forEach(c => {
            if (c.checked) {
                selected.push(c.getAttribute('id').replace('yr-chk-', ''));
            }
        });

        if (selected.length === 0) {
            dropdownBtn.textContent = 'Select Years';
        } else if (selected.length === YEARS.length) {
            dropdownBtn.textContent = 'All Years';
        } else {
            dropdownBtn.textContent = selected.join(', ');
        }

        renderTables(selected);
    }

    function renderTables(selectedYears) {
        tablesContainer.innerHTML = '';
        
        if (selectedYears.length === 0) {
            tablesContainer.innerHTML = '<div style="padding: 24px; text-align: center; color: #555; font-style: italic;">Please select at least one year.</div>';
            summaryStrip.innerHTML = '';
            return;
        }

        // Partitioning logic: Max 3 years per line, split balanced for 4, 5
        const partitioned = [];
        const N = selectedYears.length;
        if (N <= 3) {
            partitioned.push(selectedYears);
        } else if (N === 4) {
            partitioned.push(selectedYears.slice(0, 2));
            partitioned.push(selectedYears.slice(2, 4));
        } else if (N === 5) {
            partitioned.push(selectedYears.slice(0, 3));
            partitioned.push(selectedYears.slice(3, 5));
        }

        partitioned.forEach(subset => {
            const tableEl = renderTableSubset(subset);
            tablesContainer.appendChild(tableEl);
        });

        // Summary calculations
        if (selectedYears.length === 1) {
            const yr = selectedYears[0];
            const d = DATA[yr];
            let totalLoss = 0, totalProd = 0, totalPot = 0;
            CROPS.forEach(c => {
                const r = d[c.name];
                totalLoss += r.loss; totalProd += r.prod; totalPot += r.pot;
            });
            const lossRate = ((totalLoss / (totalProd + totalLoss)) * 100).toFixed(1);
            summaryStrip.innerHTML = `
              <div class="summary-card"><span class="val val-prod">${totalProd.toFixed(1)}</span><span class="lbl">Total production (M T/B)</span></div>
              <div class="summary-card"><span class="val val-loss">${totalLoss.toFixed(2)}</span><span class="lbl">Total disaster loss (M T/B)</span></div>
              <div class="summary-card"><span class="val">${lossRate}%</span><span class="lbl">Overall loss rate</span></div>
              <div class="summary-card"><span class="val val-pot">${totalPot.toFixed(1)}</span><span class="lbl">Potential production (M T/B)</span></div>
            `;
        } else {
            let cumLoss = 0;
            selectedYears.forEach(y => {
                CROPS.forEach(c => {
                    cumLoss += DATA[y][c.name].loss;
                });
            });
            summaryStrip.innerHTML = `
              <div class="summary-card"><span class="val val-loss">${cumLoss.toFixed(2)}</span><span class="lbl">Cumulative disaster loss (M T/B)</span></div>
              <div class="summary-card"><span class="val">${selectedYears.length}</span><span class="lbl">Years displayed</span></div>
              <div class="summary-card"><span class="val">${CROPS.length}</span><span class="lbl">Crops tracked</span></div>
            `;
        }

        // Restart fade animation
        tablesContainer.classList.remove('fade-in');
        void tablesContainer.offsetWidth;
        tablesContainer.classList.add('fade-in');
    }

    function renderTableSubset(yearsSubset) {
        const tableEl = document.createElement('table');
        
        const thead = document.createElement('thead');
        let row1 = `<tr class="year-group-header">
            <th rowspan="2" style="background:#1a472a;border-right:2px solid rgba(255,255,255,0.18);text-align:left;vertical-align:middle;min-width:110px">Crop</th>`;
        yearsSubset.forEach(y => {
            row1 += `<th colspan="4">📅 ${y}</th>`;
        });
        row1 += '</tr>';

        let row2 = `<tr class="sub-header">`;
        yearsSubset.forEach(() => {
            row2 += thWithTip(COL_SHORT.prod[0],  COL_SHORT.prod[1],  COL_TITLES.prod, 'border-left:2px solid rgba(255,255,255,0.2)');
            row2 += thWithTip(COL_SHORT.yield[0], COL_SHORT.yield[1], COL_TITLES.yield, '');
            row2 += thWithTip(COL_SHORT.loss[0],  COL_SHORT.loss[1],  COL_TITLES.loss, '');
            row2 += thWithTip(COL_SHORT.pot[0],   COL_SHORT.pot[1],   COL_TITLES.pot, '');
        });
        row2 += '</tr>';

        thead.innerHTML = row1 + row2;
        tableEl.appendChild(thead);

        const tbody = document.createElement('tbody');
        CROPS.forEach(c => {
            const tr = document.createElement('tr');
            let cells = `<td class="crop-name"><span class="crop-icon">${c.icon}</span>${c.name}</td>`;
            yearsSubset.forEach((y, yi) => {
                const r = DATA[y][c.name];
                const divider = yi > 0 ? ' yr-divider' : '';
                cells += `
                  <td class="cell-prod${divider}">${r.prod.toFixed(2)}</td>
                  <td class="cell-yield">${r.yield.toFixed(2)}</td>
                  <td class="cell-loss-wrap"><span class="cell-loss">${r.loss.toFixed(2)}</span></td>
                  <td class="cell-potential">${r.pot.toFixed(2)}</td>
                `;
            });
            tr.innerHTML = cells;
            tbody.appendChild(tr);
        });
        tableEl.appendChild(tbody);
        return tableEl;
    }

    updateSelectedYears();
}

// Make functions available globally
window.togglePortalsMenu = togglePortalsMenu;
window.togglePortalsAccordion = togglePortalsAccordion;
window.handlePortalClick = handlePortalClick;
window.handlePortalToggle = handlePortalToggle;
window.initPortalSelector = initPortalSelector;
window.loadPortalsData = loadPortalsData;
window.displayPortalsData = displayPortalsData;
window.handleGraphClick = handleGraphClick;
window.handleGraphToggle = handleGraphToggle;
window.handleNewGraphClick = handleNewGraphClick;
window.handleNewGraphToggle = handleNewGraphToggle;
window.renderAnimatedCropChart = renderAnimatedCropChart;
window.handleCollectiveCropsClick = handleCollectiveCropsClick;
window.handleCollectiveCropsToggle = handleCollectiveCropsToggle;
window.renderCollectiveCropsTable = renderCollectiveCropsTable;