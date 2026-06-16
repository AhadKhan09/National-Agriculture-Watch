// Portals Container JavaScript

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
    const toggles = ['lims-toggle', 'fsp-toggle', 'data-toggle', 'nad-toggle'];
    const btns = document.querySelectorAll('.portals-toggle-btn');
    
    toggles.forEach(id => {
        if (id !== activeId) {
            document.getElementById(id).checked = false;
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
    if (graphType === 'Balochistan Crop Distribution') {
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