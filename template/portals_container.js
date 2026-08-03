
let isFsModalFullscreen = false;

// Active chart instances tracker & ResizeObserver helper to prevent zero-dimension collapse
const activeChartInstances = {};
const activeChartObservers = new Map();

function attachChartResizeObserver(containerIdOrEl, chartInstance) {
    const container = typeof containerIdOrEl === 'string' ? document.getElementById(containerIdOrEl) : containerIdOrEl;
    if (!container) return;

    if (activeChartObservers.has(container)) {
        activeChartObservers.get(container).disconnect();
    }

    const observer = new ResizeObserver(() => {
        if (chartInstance && typeof chartInstance.resize === 'function') {
            chartInstance.resize();
        }
    });

    observer.observe(container);
    activeChartObservers.set(container, observer);
}

function destroyChartInstance(instanceKey) {
    if (activeChartInstances[instanceKey]) {
        try {
            if (typeof activeChartInstances[instanceKey].destroy === 'function') {
                activeChartInstances[instanceKey].destroy();
            } else if (typeof activeChartInstances[instanceKey].dispose === 'function') {
                activeChartInstances[instanceKey].dispose();
            }
        } catch (e) {
            console.warn("Chart cleanup warning:", e);
        }
        delete activeChartInstances[instanceKey];
    }
}

function clearGhostTooltips() {
    const tooltipIds = ['fs-tooltip', 'modal-fs-tooltip', 'ganttTooltip', 'fs-crop-info-popover'];
    tooltipIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
        }
    });

    document.querySelectorAll('.wheat-chart-tooltip, .gantt-tooltip').forEach(tt => {
        tt.style.opacity = '0';
        tt.style.pointerEvents = 'none';
    });
}

function resizeFoodSecurityCharts() {
    Object.values(activeChartInstances).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            try {
                chart.resize();
            } catch (e) {
                console.warn("Chart resize warning:", e);
            }
        }
    });
    if (typeof updateFoodSecurityModalView === 'function') {
        updateFoodSecurityModalView();
    }
}

function switchFoodSecurityChartView(targetView) {
    if (targetView === 1 || targetView === 2) {
        currentFoodSecurityGraphView = targetView;
    } else if (targetView === 'view1') {
        currentFoodSecurityGraphView = 1;
    } else if (targetView === 'view2') {
        currentFoodSecurityGraphView = 2;
    }

    clearGhostTooltips();
    destroyChartInstance('foodSecurity');

    const label = `Chart View ${currentFoodSecurityGraphView}`;
    const btnText1 = document.getElementById('fs-graph-switcher-text');
    const btnText2 = document.getElementById('modal-fs-graph-switcher-text');
    
    if (btnText1) btnText1.textContent = label;
    if (btnText2) btnText2.textContent = label;

    const inlineWrapper = document.getElementById('fs-chart-wrapper');
    if (inlineWrapper && inlineWrapper.parentElement) {
        const displayContainer = inlineWrapper.parentElement.parentElement;
        if (displayContainer) renderFoodSecurityGraph(displayContainer);
    }

    const modal = document.getElementById('food-security-modal');
    if (modal && modal.style.opacity === '1') {
        openFoodSecurityModal(null);
    }

    requestAnimationFrame(() => {
        resizeFoodSecurityCharts();
    });
}

window.resizeFoodSecurityCharts = resizeFoodSecurityCharts;
window.attachChartResizeObserver = attachChartResizeObserver;
window.destroyChartInstance = destroyChartInstance;
window.clearGhostTooltips = clearGhostTooltips;
window.switchFoodSecurityChartView = switchFoodSecurityChartView;

function openFoodSecurityModal(e) {
    if (e) e.stopPropagation();
    let modal = document.getElementById('food-security-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'food-security-modal';
        modal.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(4, 7, 20, 0.92); backdrop-filter:blur(12px); z-index:99999; display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s ease; padding:18px; box-sizing:border-box;';
    }

    const targetParent = document.fullscreenElement || 
                         document.webkitFullscreenElement || 
                         document.mozFullScreenElement || 
                         document.msFullscreenElement || 
                         document.body;

    if (modal.parentElement !== targetParent) {
        targetParent.appendChild(modal);
    }
    
    const isFull = modal.classList.contains('is-full-extent');

    if (isFull) {
        modal.style.padding = '0';
    } else {
        modal.style.padding = '18px';
    }

    modal.innerHTML = `
        <div id="food-security-modal-content" style="background: linear-gradient(165deg, rgba(8, 12, 30, 0.99), rgba(15, 23, 42, 1.0)); border-radius: ${isFull ? '0' : '20px'}; border: ${isFull ? 'none' : '1px solid rgba(0, 229, 255, 0.35)'}; box-shadow: 0 25px 60px rgba(0,0,0,0.95); padding: ${isFull ? '16px 28px' : '22px 30px'}; color: #f8fafc; font-family: 'Rajdhani', sans-serif; width: ${isFull ? '100vw' : '96vw'}; max-width: ${isFull ? '100vw' : '1550px'}; height: ${isFull ? '100vh' : '93vh'}; max-height: ${isFull ? '100vh' : '93vh'}; display: flex; flex-direction: column; justify-content: space-between; position: relative; box-sizing: border-box;">
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.14); padding-bottom: 8px; flex-shrink: 0; position: relative;">
                <div>
                    <h2 style="margin: 0; font-size: ${isFull ? '28px' : '26px'}; font-weight: 700; color: #00E5FF; letter-spacing: 0.8px; text-transform: uppercase;">
                        National Agriculture and Food Security Outlook (2026 - 2030)
                    </h2>
                    <p style="margin: 2px 0 0 0; font-size: 15px; color: #94A3B8;">
                        ${currentFoodSecurityGraphView === 2 ? 'Crop Categorization & Deficit Loss Outlook (Food Crops, Cash Crops, & Others)' : 'Dynamic auto-rescaling 5-metric projection & red-loss hatch deficit analysis'}
                    </p>
                </div>
                <div style="display:flex; align-items:center; gap:12px;">
                    <button onclick="toggleFsCropInfoModal(event)" title="Crop Categorization Breakdown" style="background: rgba(0, 229, 255, 0.18); border: 1px solid rgba(0, 229, 255, 0.45); color: #00E5FF; font-family: 'Rajdhani', sans-serif; font-style: italic; font-weight: 800; font-size: 20px; width: 42px; height: 42px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 12px rgba(0,229,255,0.3); transition: all 0.2s ease;">i</button>
                    <button onclick="closeFoodSecurityModal()" style="background:rgba(255,255,255,0.12); border:none; color:#fff; font-size:26px; font-weight:bold; width:44px; height:44px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s;">✕</button>
                </div>
            </div>

            <div id="modal-fs-wrapper" style="position: relative; width: 100%; flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 300px;">
                <svg id="modal-fs-svg" viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-height: ${isFull ? '84vh' : '70vh'};">
                </svg>
                <div id="modal-fs-tooltip" class="wheat-chart-tooltip" style="position: absolute; opacity: 0; pointer-events: none; font-size: 16px; padding: 18px 24px; width: 560px; border: 1.8px solid rgba(0, 229, 255, 0.6); background: rgba(8, 14, 32, 0.97); z-index: 100; box-shadow: 0 12px 30px rgba(0,0,0,0.85); backdrop-filter: blur(10px); transition: opacity 0.2s ease, left 0.08s ease, top 0.08s ease; white-space: nowrap;"></div>
            </div>

            ${currentFoodSecurityGraphView === 2 ? `
                <div style="display: flex; justify-content: center; gap: 12px; margin-top: 10px; margin-bottom: 4px; flex-shrink: 0; z-index: 5; flex-wrap: wrap;">
                    <div class="fs-legend-btn ${!fsV2State.pop ? 'is-off' : ''}" data-v2-key="pop" onclick="toggleFsGroupV2('pop', this)" style="color:#00E5FF;"><input type="checkbox" data-v2-label-key="pop" ${fsV2LabelsState.pop ? 'checked' : ''} onclick="toggleFsV2Label('pop', event)" title="Toggle values/labels" style="cursor:pointer; accent-color:#00E5FF; margin-right:4px;"/><span style="display:inline-block; width:20px; height:0; border-top:3px solid #00E5FF; vertical-align:middle; margin-right:6px;"></span>Population (Million)</div>
                    <div class="fs-legend-btn ${!fsV2State.foodDem ? 'is-off' : ''}" data-v2-key="foodDem" onclick="toggleFsGroupV2('foodDem', this)" style="color:#FFB703;"><input type="checkbox" data-v2-label-key="foodDem" ${fsV2LabelsState.foodDem ? 'checked' : ''} onclick="toggleFsV2Label('foodDem', event)" title="Toggle values/labels" style="cursor:pointer; accent-color:#FFB703; margin-right:4px;"/><span style="display:inline-block; width:20px; height:0; border-top:3px dashed #FFB703; vertical-align:middle; margin-right:6px;"></span>Food Requirement (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.foodAvail ? 'is-off' : ''}" data-v2-key="foodAvail" onclick="toggleFsGroupV2('foodAvail', this)" style="color:#FFB703;"><input type="checkbox" data-v2-label-key="foodAvail" ${fsV2LabelsState.foodAvail ? 'checked' : ''} onclick="toggleFsV2Label('foodAvail', event)" title="Toggle values/labels" style="cursor:pointer; accent-color:#FFB703; margin-right:4px;"/><span style="display:inline-block; width:20px; height:0; border-top:3px solid #FFB703; vertical-align:middle; margin-right:6px;"></span>Food Availability (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.waterShort ? 'is-off' : ''}" data-v2-key="waterShort" onclick="toggleFsGroupV2('waterShort', this)" style="color:#EF4444;"><input type="checkbox" data-v2-label-key="waterShort" ${fsV2LabelsState.waterShort ? 'checked' : ''} onclick="toggleFsV2Label('waterShort', event)" title="Toggle values/labels" style="cursor:pointer; accent-color:#EF4444; margin-right:4px;"/><span style="display:inline-block; width:20px; height:0; border-top:3px dashed #EF4444; vertical-align:middle; margin-right:6px;"></span>Water Shortage (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.foodCrops ? 'is-off' : ''}" data-v2-key="foodCrops" onclick="toggleFsGroupV2('foodCrops', this)" style="color:#22C55E;"><input type="checkbox" data-v2-label-key="foodCrops" ${fsV2LabelsState.foodCrops ? 'checked' : ''} onclick="toggleFsV2Label('foodCrops', event)" title="Toggle labels/details" style="cursor:pointer; accent-color:#22C55E; margin-right:4px;"/><span style="display:inline-block; width:12px; height:12px; background:#22C55E; border-radius:2px; vertical-align:middle; margin-right:6px;"></span>Food Crops (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.cashCrops ? 'is-off' : ''}" data-v2-key="cashCrops" onclick="toggleFsGroupV2('cashCrops', this)" style="color:#00E5FF;"><input type="checkbox" data-v2-label-key="cashCrops" ${fsV2LabelsState.cashCrops ? 'checked' : ''} onclick="toggleFsV2Label('cashCrops', event)" title="Toggle labels/details" style="cursor:pointer; accent-color:#00E5FF; margin-right:4px;"/><span style="display:inline-block; width:12px; height:12px; background:#00E5FF; border-radius:2px; vertical-align:middle; margin-right:6px;"></span>Cash Crops (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.others ? 'is-off' : ''}" data-v2-key="others" onclick="toggleFsGroupV2('others', this)" style="color:#C084FC;"><input type="checkbox" data-v2-label-key="others" ${fsV2LabelsState.others ? 'checked' : ''} onclick="toggleFsV2Label('others', event)" title="Toggle labels/details" style="cursor:pointer; accent-color:#C084FC; margin-right:4px;"/><span style="display:inline-block; width:12px; height:12px; background:#C084FC; border-radius:2px; vertical-align:middle; margin-right:6px;"></span>Others (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.redBox ? 'is-off' : ''}" data-v2-key="redBox" onclick="toggleFsGroupV2('redBox', this)" style="color:#FFB703;"><input type="checkbox" data-v2-label-key="redBox" ${fsV2LabelsState.redBox ? 'checked' : ''} onclick="toggleFsV2Label('redBox', event)" title="Toggle deficit value" style="cursor:pointer; accent-color:#FFB703; margin-right:4px;"/><span style="display:inline-block; width:14px; height:12px; border:2px dotted #FFB703; background:url(#v2-yellow-hatch-pattern); vertical-align:middle; margin-right:6px;"></span>Food Deficit (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.waterDeficitBar ? 'is-off' : ''}" data-v2-key="waterDeficitBar" onclick="toggleFsGroupV2('waterDeficitBar', this)" style="color:#EF4444;"><span style="display:inline-block; width:14px; height:12px; border:2px dotted #EF4444; background:url(#v2-red-hatch-pattern); vertical-align:middle; margin-right:6px;"></span>Water Deficit (MMT)</div>
                </div>
            ` : ''}
        </div>
    `;

    modal.style.display = 'flex';
    setTimeout(() => { modal.style.opacity = '1'; }, 10);
    updateFoodSecurityModalView();

    // Trigger chart/modal resize after CSS rendering pass
    requestAnimationFrame(() => {
        resizeFoodSecurityCharts();
    });
}

function closeFoodSecurityModal() {
    const modal = document.getElementById('food-security-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function updateFoodSecurityModalView() {
    const modal = document.getElementById('food-security-modal');
    if (!modal) return;
    const svg = modal.querySelector('#modal-fs-svg');
    if (!svg) return;
    if (currentFoodSecurityGraphView === 2) {
        drawFoodSecurityView2(svg, modal, true);
    }
}

function toggleFoodSecurityFullscreen(e) {
    if (e) e.stopPropagation();
    let modal = document.getElementById('food-security-modal');
    if (!modal) {
        openFoodSecurityModal(e);
        modal = document.getElementById('food-security-modal');
    }
    
    // Toggle full-extent mode on modal element
    const isCurrentlyFull = modal.classList.contains('is-full-extent');
    if (isCurrentlyFull) {
        modal.classList.remove('is-full-extent');
    } else {
        modal.classList.add('is-full-extent');
    }
    
    openFoodSecurityModal(null);
}

window.openFoodSecurityModal = openFoodSecurityModal;
window.closeFoodSecurityModal = closeFoodSecurityModal;
window.updateFoodSecurityModalView = updateFoodSecurityModalView;
window.toggleFoodSecurityFullscreen = toggleFoodSecurityFullscreen;

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

    if (id === 'cwr-acc' && !isNowActive) {
        // If closing CWR accordion, turn off CWR toggles and restore portal iframe if no other graph is active
        turnOffOtherCWR(null);
        const anyOldGraph = document.querySelector('#graphs-data input[type="checkbox"]:checked');
        const anyNewGraph = document.querySelector('#graphs-new input[type="checkbox"]:checked');
        if (!anyOldGraph && !anyNewGraph) {
            restorePortalIframe();
        }
    }
}

// Toggle Portal Fullscreen
window.togglePortalFullscreen = function () {
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
    if (typeof turnOffOtherCWR === 'function') turnOffOtherCWR(null);
    const toggles = ['lims-toggle', 'fsp-toggle', 'data-toggle', 'nad-toggle', 'collective-crops-toggle', 'food-security-graph-toggle'];
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
        else if (portalName === 'Food Security Graph') btnToggleId = 'food-security-graph-toggle';

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
    if (typeof turnOffOtherCWR === 'function') turnOffOtherCWR(null);
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
    if (typeof turnOffOtherCWR === 'function') turnOffOtherCWR(null);
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

let collectiveCropsAbortController = null;

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

    if (collectiveCropsAbortController) {
        collectiveCropsAbortController.abort();
    }
    collectiveCropsAbortController = new AbortController();
    const signal = collectiveCropsAbortController.signal;

    // Toggle dropdown open/close
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContainer.classList.toggle('open');
    }, { signal });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
        dropdownContainer.classList.remove('open');
    }, { signal });

    const checkboxes = dropdownContainer.querySelectorAll('.year-dropdown-item input[type="checkbox"]');
    checkboxes.forEach(chk => {
        chk.addEventListener('click', (e) => {
            e.stopPropagation();
        }, { signal });
        chk.addEventListener('change', () => {
            updateSelectedYears();
        }, { signal });
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
        }, { signal });
    });

    const CROPS = [
        { name: 'Wheat', icon: '🌾' },
        { name: 'Rice', icon: '🍚' },
        { name: 'Cotton', icon: '🌿' },
        { name: 'Maize', icon: '🌽' },
        { name: 'Sugarcane', icon: '🎋' },
    ];

    const DATA = {
        '2021-22': {
            Wheat: { prod: 26.20, yield: 2.94, loss: 1.39, pot: 27.59 },
            Rice: { prod: 9.32, yield: 2.64, loss: 2.18, pot: 11.50 },
            Cotton: { prod: 8.33, yield: 4.38, loss: 2.23, pot: 10.56 },
            Maize: { prod: 9.52, yield: 5.77, loss: 1.31, pot: 10.83 },
            Sugarcane: { prod: 88.65, yield: 70.31, loss: 0.60, pot: 89.25 },
        },
        '2022-23': {
            Wheat: { prod: 28.16, yield: 3.12, loss: 1.15, pot: 29.31 },
            Rice: { prod: 7.32, yield: 2.46, loss: 3.18, pot: 10.50 },
            Cotton: { prod: 4.19, yield: 2.00, loss: 4.12, pot: 8.31 },
            Maize: { prod: 10.96, yield: 6.39, loss: 0.36, pot: 11.32 },
            Sugarcane: { prod: 87.64, yield: 66.71, loss: 1.50, pot: 89.14 },
        },
        '2023-24': {
            Wheat: { prod: 31.43, yield: 3.27, loss: 0.30, pot: 31.73 },
            Rice: { prod: 9.86, yield: 2.71, loss: 2.64, pot: 12.50 },
            Cotton: { prod: 10.19, yield: 4.25, loss: 2.58, pot: 12.77 },
            Maize: { prod: 5.56, yield: 4.81, loss: 4.57, pot: 10.13 },
            Sugarcane: { prod: 86.40, yield: 73.88, loss: 1.64, pot: 88.04 },
        },
        '2024-25': {
            Wheat: { prod: 28.42, yield: 3.24, loss: 3.66, pot: 32.08 },
            Rice: { prod: 9.50, yield: 2.41, loss: 4.00, pot: 13.50 },
            Cotton: { prod: 7.08, yield: 3.54, loss: 3.79, pot: 10.87 },
            Maize: { prod: 9.30, yield: 5.35, loss: 1.70, pot: 11.00 },
            Sugarcane: { prod: 83.50, yield: 66.89, loss: 1.54, pot: 85.04 },
        },
        '2025-26': {
            Wheat: { prod: 29.31, yield: 3.12, loss: 2.19, pot: 31.50 },
            Rice: { prod: 9.99, yield: 2.55, loss: 3.00, pot: 13.00 },
            Cotton: { prod: 7.05, yield: 3.36, loss: 3.13, pot: 10.18 },
            Maize: { prod: 8.79, yield: 6.46, loss: 2.51, pot: 11.30 },
            Sugarcane: { prod: 84.50, yield: 74.54, loss: 3.80, pot: 88.30 },
        },
    };

    const YEARS = ['2021-22', '2022-23', '2023-24', '2024-25', '2025-26'];

    const COL_TITLES = {
        prod: 'Year Production (M T/B)',
        yield: 'Average Yield (T/B / Ha)',
        loss: 'Loss Due to Disaster (M T/B)',
        pot: 'Potential Production without Disaster (M T/B)',
    };

    const COL_SHORT = {
        prod: ['Prod.', 'M T/B'],
        yield: ['Avg Yield', 'T/B/Ha'],
        loss: ['Loss', 'M T/B'],
        pot: ['Pot. Prod.', 'M T/B'],
    };

    function thWithTip(short, unit, tip, extraStyle) {
        return `<th data-tip="${tip}" style="${extraStyle || ''}">
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
            row2 += thWithTip(COL_SHORT.prod[0], COL_SHORT.prod[1], COL_TITLES.prod, 'border-left:2px solid rgba(255,255,255,0.2)');
            row2 += thWithTip(COL_SHORT.yield[0], COL_SHORT.yield[1], COL_TITLES.yield, '');
            row2 += thWithTip(COL_SHORT.loss[0], COL_SHORT.loss[1], COL_TITLES.loss, '');
            row2 += thWithTip(COL_SHORT.pot[0], COL_SHORT.pot[1], COL_TITLES.pot, '');
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

// --- Crop Water Requirement (CWR) Module ---

function handleCWRClick(reqType) {
    if (typeof event !== 'undefined' && event) event.preventDefault();

    let toggleId, typeKey;
    if (reqType === 'National Requirement') {
        toggleId = 'cwr-national-toggle';
        typeKey = 'national';
    } else if (reqType === 'Provincial Requirement') {
        toggleId = 'cwr-provincial-toggle';
        typeKey = 'provincial';
    } else if (reqType === 'Crop wise Requirement') {
        toggleId = 'cwr-cropwise-toggle';
        typeKey = 'cropwise';
    }

    const toggle = document.getElementById(toggleId);
    const isCurrentlyChecked = toggle ? toggle.checked : false;
    const newState = !isCurrentlyChecked;

    if (toggle) toggle.checked = newState;
    handleCWRToggle(newState, typeKey);
    return false;
}

function setCWRActiveState(typeKey, isActive) {
    const toggle = document.getElementById(`cwr-${typeKey}-toggle`);
    if (toggle) toggle.checked = isActive;
    document.querySelectorAll('#cwr-acc .portals-toggle-btn').forEach(btn => {
        const text = btn.textContent.trim();
        if ((typeKey === 'national' && text === 'National Requirement') ||
            (typeKey === 'provincial' && text === 'Provincial Requirement') ||
            (typeKey === 'cropwise' && text === 'Crop wise Requirement')) {
            if (isActive) btn.classList.add('active');
            else btn.classList.remove('active');
        }
    });
}

function handleCWRToggle(isChecked, typeKey) {
    const toggleId = `cwr-${typeKey}-toggle`;
    if (isChecked) {
        turnOffOtherPortals(null);
        turnOffOtherGraphs(null);
        turnOffOtherNewGraphs(null);
        turnOffOtherCWR(toggleId);
        setCWRActiveState(typeKey, true);
        let displayContainer = document.querySelector('.portal-iframe-container');
        if (!displayContainer) {
            const portalsContent = document.querySelector('.portals-content');
            displayContainer = document.createElement('div');
            displayContainer.className = 'portal-iframe-container';
            portalsContent.appendChild(displayContainer);
        }
        displayContainer.innerHTML = '';
        if (typeKey === 'national') {
            loadNationalCropWaterRequirement(displayContainer);
        } else if (typeKey === 'provincial') {
            loadProvincialCropWaterRequirement(displayContainer);
        } else if (typeKey === 'cropwise') {
            loadCropWiseWaterRequirement(displayContainer);
        }
    } else {
        setCWRActiveState(typeKey, false);
        restorePortalIframe();
    }
}

function turnOffOtherCWR(activeId) {
    const toggles = ['cwr-national-toggle', 'cwr-provincial-toggle', 'cwr-cropwise-toggle'];
    toggles.forEach(id => {
        if (id !== activeId) {
            const el = document.getElementById(id);
            if (el) el.checked = false;
        }
    });
    document.querySelectorAll('#cwr-acc .portals-toggle-btn').forEach(btn => {
        const text = btn.textContent.trim();
        let btnToggleId;
        if (text === 'National Requirement') btnToggleId = 'cwr-national-toggle';
        else if (text === 'Provincial Requirement') btnToggleId = 'cwr-provincial-toggle';
        else if (text === 'Crop wise Requirement') btnToggleId = 'cwr-cropwise-toggle';
        if (btnToggleId !== activeId) {
            btn.classList.remove('active');
        }
    });
}

function ensureXlsxLoadedForPortals() {
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
        document.head.appendChild(script);
    });
}

async function loadNationalCropWaterRequirement(displayContainer) {
    displayContainer.innerHTML = `
        <div class="cwr-loading-container" style="display:flex;height:100%;align-items:center;justify-content:center;background:#0b1026;color:#38bdf8;font-family:'Segoe UI',sans-serif;flex-direction:column;gap:12px;">
            <div class="loading"></div>
            <div style="font-weight:600;font-size:15px;">Loading National Water Requirement Data...</div>
        </div>
    `;
    let cwrDataByYear = {};
    try {
        await ensureXlsxLoadedForPortals();
        let res = await fetch('./Data/CWR.xlsx');
        if (!res.ok) {
            res = await fetch('./Data/Crop_Water_Requirement.xlsx');
        }
        if (res.ok) {
            const arrayBuffer = await res.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            if (json && json.length >= 3) {
                const firstRow = json[0] || [];
                for (let c = 0; c < firstRow.length; c++) {
                    const val = firstRow[c];
                    if (val && !isNaN(parseInt(val)) && parseInt(val) >= 2020 && parseInt(val) <= 2050) {
                        const yrStr = String(parseInt(val));
                        const reqList = [];
                        const availList = [];
                        for (let r = 2; r < json.length; r++) {
                            const row = json[r];
                            if (row && row[c] !== undefined && row[c] !== null && String(row[c]).trim() !== '') {
                                const monthName = String(row[c]).trim();
                                const availNum = row[c + 1] !== undefined && row[c + 1] !== null ? parseFloat(row[c + 1]) : NaN;
                                const reqNum = row[c + 2] !== undefined && row[c + 2] !== null ? parseFloat(row[c + 2]) : NaN;
                                if (!isNaN(reqNum)) reqList.push({ month: monthName, value: reqNum });
                                if (!isNaN(availNum)) availList.push({ month: monthName, value: availNum });
                            }
                        }
                        if (reqList.length > 0) {
                            cwrDataByYear[yrStr] = {
                                requirement: reqList,
                                availability: availList
                            };
                        }
                    }
                }
            }
        }
    } catch (err) {
        console.warn('Failed to fetch/parse CWR.xlsx:', err);
    }

    if (Object.keys(cwrDataByYear).length === 0) {
        cwrDataByYear = {
            '2026': {
                requirement: [
                    { month: 'Jan', value: 7.39 }, { month: 'Feb', value: 9.3 }, { month: 'March', value: 10.89 },
                    { month: 'April', value: 8.29 }, { month: 'May', value: 9.82 }, { month: 'June', value: 16.18 },
                    { month: 'July', value: 17.67 }, { month: 'August', value: 17.78 }, { month: 'Sep', value: 15.61 },
                    { month: 'Oct', value: 9.82 }, { month: 'Nov', value: 4.13 }, { month: 'Dec', value: 5.1 }
                ],
                availability: [
                    { month: 'Jan', value: 5.64 }, { month: 'Feb', value: 7.02 }, { month: 'March', value: 8.38 },
                    { month: 'April', value: 7.06 }, { month: 'May', value: 8.35 }, { month: 'June', value: 13.44 },
                    { month: 'July', value: 15.44 }, { month: 'August', value: 15.16 }, { month: 'Sep', value: 13.26 },
                    { month: 'Oct', value: 7.71 }, { month: 'Nov', value: 3.48 }, { month: 'Dec', value: 4.05 }
                ]
            },
            '2027': {
                requirement: [
                    { month: 'Jan', value: 7.55 }, { month: 'Feb', value: 9.50 }, { month: 'March', value: 11.20 },
                    { month: 'April', value: 8.50 }, { month: 'May', value: 10.10 }, { month: 'June', value: 16.70 },
                    { month: 'July', value: 18.10 }, { month: 'August', value: 18.30 }, { month: 'Sep', value: 16.00 },
                    { month: 'Oct', value: 10.10 }, { month: 'Nov', value: 4.25 }, { month: 'Dec', value: 5.25 }
                ],
                availability: [
                    { month: 'Jan', value: 5.65 }, { month: 'Feb', value: 7.05 }, { month: 'March', value: 8.40 },
                    { month: 'April', value: 7.10 }, { month: 'May', value: 8.40 }, { month: 'June', value: 13.45 },
                    { month: 'July', value: 15.45 }, { month: 'August', value: 15.17 }, { month: 'Sep', value: 13.28 },
                    { month: 'Oct', value: 7.73 }, { month: 'Nov', value: 3.50 }, { month: 'Dec', value: 4.08 }
                ]
            },
            '2028': {
                requirement: [
                    { month: 'Jan', value: 7.70 }, { month: 'Feb', value: 9.70 }, { month: 'March', value: 11.45 },
                    { month: 'April', value: 8.70 }, { month: 'May', value: 10.30 }, { month: 'June', value: 16.96 },
                    { month: 'July', value: 18.35 }, { month: 'August', value: 18.57 }, { month: 'Sep', value: 16.25 },
                    { month: 'Oct', value: 10.30 }, { month: 'Nov', value: 4.35 }, { month: 'Dec', value: 5.40 }
                ],
                availability: [
                    { month: 'Jan', value: 5.70 }, { month: 'Feb', value: 7.10 }, { month: 'March', value: 8.45 },
                    { month: 'April', value: 7.15 }, { month: 'May', value: 8.45 }, { month: 'June', value: 13.70 },
                    { month: 'July', value: 15.50 }, { month: 'August', value: 15.45 }, { month: 'Sep', value: 13.35 },
                    { month: 'Oct', value: 7.80 }, { month: 'Nov', value: 3.55 }, { month: 'Dec', value: 4.12 }
                ]
            },
            '2029': {
                requirement: [
                    { month: 'Jan', value: 7.80 }, { month: 'Feb', value: 9.85 }, { month: 'March', value: 11.60 },
                    { month: 'April', value: 8.85 }, { month: 'May', value: 10.45 }, { month: 'June', value: 16.94 },
                    { month: 'July', value: 18.45 }, { month: 'August', value: 18.57 }, { month: 'Sep', value: 16.35 },
                    { month: 'Oct', value: 10.40 }, { month: 'Nov', value: 4.40 }, { month: 'Dec', value: 5.50 }
                ],
                availability: [
                    { month: 'Jan', value: 5.72 }, { month: 'Feb', value: 7.12 }, { month: 'March', value: 8.48 },
                    { month: 'April', value: 7.18 }, { month: 'May', value: 8.48 }, { month: 'June', value: 13.53 },
                    { month: 'July', value: 15.48 }, { month: 'August', value: 15.26 }, { month: 'Sep', value: 13.30 },
                    { month: 'Oct', value: 7.78 }, { month: 'Nov', value: 3.52 }, { month: 'Dec', value: 4.10 }
                ]
            },
            '2030': {
                requirement: [
                    { month: 'Jan', value: 7.95 }, { month: 'Feb', value: 10.00 }, { month: 'March', value: 11.75 },
                    { month: 'April', value: 9.00 }, { month: 'May', value: 10.60 }, { month: 'June', value: 17.05 },
                    { month: 'July', value: 18.60 }, { month: 'August', value: 18.68 }, { month: 'Sep', value: 16.50 },
                    { month: 'Oct', value: 10.55 }, { month: 'Nov', value: 4.50 }, { month: 'Dec', value: 5.60 }
                ],
                availability: [
                    { month: 'Jan', value: 5.75 }, { month: 'Feb', value: 7.15 }, { month: 'March', value: 8.50 },
                    { month: 'April', value: 7.20 }, { month: 'May', value: 8.50 }, { month: 'June', value: 13.60 },
                    { month: 'July', value: 15.52 }, { month: 'August', value: 15.34 }, { month: 'Sep', value: 13.35 },
                    { month: 'Oct', value: 7.82 }, { month: 'Nov', value: 3.56 }, { month: 'Dec', value: 4.15 }
                ]
            }
        };
    }

    const years = Object.keys(cwrDataByYear);
    const initialYear = years.length > 0 ? (years.includes('2026') ? '2026' : years[0]) : '';
    renderSnakeNationalCWRChart(displayContainer, cwrDataByYear, initialYear);
}

function ensureCwrStyles() {
    if (document.getElementById('cwr-styles')) return;
    const style = document.createElement('style');
    style.id = 'cwr-styles';
    style.innerHTML = `
        .cwr-dashboard-wrapper {
            background:
                radial-gradient(1100px circle at 12% -20%, rgba(34, 197, 94, 0.28), transparent 48%),
                radial-gradient(1100px circle at 100% 120%, rgba(59, 130, 246, 0.32), transparent 50%),
                linear-gradient(180deg, #0b1026 0%, #070b1a 100%);
            border-radius: 16px;
            padding: 16px 22px;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 10px;
            color: #f8fafc;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            position: relative;
            overflow: hidden;
        }
        .cwr-header-national {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 8px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            padding-bottom: 10px;
        }
        .cwr-title-area {
            text-align: center;
        }
        .cwr-title-area h2 {
            margin: 0;
            font-size: 20px;
            font-weight: 800;
            letter-spacing: 0.5px;
            background: linear-gradient(90deg, #4ade80 0%, #38bdf8 60%, #60a5fa 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        .cwr-subtitle-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            margin-top: 3px;
            flex-wrap: wrap;
        }
        .cwr-subtitle {
            font-size: 14px;
            color: #cbd5e1;
            font-weight: 600;
        }
        .cwr-live-dot {
            width: 9px;
            height: 9px;
            background-color: #38bdf8;
            border-radius: 50%;
            display: inline-block;
            box-shadow: 0 0 10px #38bdf8;
            animation: cwrPulse 1.8s infinite;
        }
        @keyframes cwrPulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7); }
            70% { transform: scale(1.15); box-shadow: 0 0 0 8px rgba(56, 189, 248, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
        }
        .cwr-stats-row {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-top: 6px;
            flex-wrap: wrap;
        }
        .cwr-stat-card {
            background: rgba(255, 255, 255, 0.07);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 12px;
            padding: 8px 22px;
            text-align: center;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
            min-width: 150px;
        }
        .cwr-stat-label {
            font-size: 12px;
            color: #cbd5e1;
            display: block;
            font-weight: 700;
            letter-spacing: 0.5px;
        }
        .cwr-stat-val {
            font-size: 20px;
            font-weight: 800;
            color: #f8fafc;
        }
        .cwr-stat-val small {
            font-size: 13px;
            opacity: 0.9;
        }
        .text-cyan { color: #38bdf8; }
        .text-amber { color: #fbbf24; }
        .text-green { color: #4ade80; }

        .cwr-year-select-wrap {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .cwr-year-select-label {
            font-size: 13px;
            color: #cbd5e1;
            font-weight: 700;
        }
        .cwr-year-select {
            background: rgba(15, 23, 42, 0.95);
            color: #38bdf8;
            border: 1px solid rgba(56, 189, 248, 0.5);
            border-radius: 8px;
            padding: 4px 12px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            outline: none;
            transition: all 0.2s ease;
        }
        .cwr-year-select:hover, .cwr-year-select:focus {
            border-color: #38bdf8;
            background: rgba(15, 23, 42, 1);
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
        }

        .cwr-year-checkboxes {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-left: 10px;
        }
        .cwr-chk-label {
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.12);
            padding: 3px 10px;
            border-radius: 6px;
            user-select: none;
            transition: all 0.2s ease;
        }
        .cwr-chk-label:hover {
            background: rgba(255, 255, 255, 0.14);
        }

        .cwr-legend-row {
            display: flex;
            gap: 10px;
            margin: 4px 0 6px;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
        .cwr-legend-chip {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.16);
            color: #cbd5e1;
            border-radius: 20px;
            padding: 5px 14px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
            user-select: none;
        }
        .cwr-legend-chip:hover {
            transform: translateY(-1px);
        }
        .cwr-legend-chip.active {
            color: #f8fafc;
            border-color: rgba(255, 255, 255, 0.35);
            background: rgba(255, 255, 255, 0.12);
        }
        .cwr-legend-chip.active#cwrLegendReq {
            color: #86efac;
            border-color: rgba(34, 197, 94, 0.6);
            background: rgba(34, 197, 94, 0.15);
        }
        .cwr-legend-chip.active#cwrLegendAvail {
            color: #93c5fd;
            border-color: rgba(59, 130, 246, 0.6);
            background: rgba(59, 130, 246, 0.15);
        }
        .cwr-legend-chip.active#cwrLegendDeficit {
            color: #fca5a5;
            border-color: rgba(239, 68, 68, 0.6);
            background: rgba(239, 68, 68, 0.15);
        }
        .cwr-legend-chip.active#cwrLegendRabi {
            color: #d8b4fe;
            border-color: rgba(168, 85, 247, 0.6);
            background: rgba(168, 85, 247, 0.15);
        }
        .cwr-legend-chip.active#cwrLegendKharif {
            color: #fde047;
            border-color: rgba(234, 179, 8, 0.6);
            background: rgba(234, 179, 8, 0.15);
        }
        .cwr-legend-chip:not(.active) {
            opacity: 0.4;
            background: rgba(255, 255, 255, 0.02);
        }
        .cwr-legend-dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            display: inline-block;
        }
        .cwr-chart-area {
            flex: 1;
            position: relative;
            width: 100%;
            min-height: 250px;
            margin-top: 4px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.18);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.35);
            padding: 6px;
            box-sizing: border-box;
        }
        .cwr-chart-area canvas {
            width: 100%;
            height: 100%;
            display: block;
        }
        .cwr-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 8px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            margin-top: 4px;
        }
        .cwr-btn {
            background: rgba(56, 189, 248, 0.12);
            border: 1px solid rgba(56, 189, 248, 0.3);
            color: #38bdf8;
            border-radius: 6px;
            padding: 5px 12px;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
        }
        .cwr-btn:hover {
            background: rgba(56, 189, 248, 0.25);
            transform: translateY(-1px);
        }
        .cwr-speed-group {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .cwr-speed-label {
            font-size: 11px;
            color: #94a3b8;
            font-weight: 600;
        }
        .cwr-speed-btn {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #cbd5e1;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 11px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .cwr-speed-btn.active, .cwr-speed-btn:hover {
            background: #38bdf8;
            color: #0b1026;
            font-weight: 700;
            border-color: #38bdf8;
        }
        .cwr-hover-tooltip {
            position: absolute;
            top: 18px;
            right: 18px;
            background: rgba(11, 16, 38, 0.96);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-radius: 14px;
            padding: 16px 20px;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8);
            pointer-events: none;
            z-index: 100;
            display: none;
            min-width: 440px;
        }
        .cwr-hover-tooltip-title {
            font-size: 16px;
            font-weight: 800;
            color: #38bdf8;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            padding-bottom: 8px;
            margin-bottom: 10px;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .cwr-hover-row {
            display: grid;
            grid-template-columns: 80px 1.1fr 1.1fr 1.4fr;
            gap: 12px;
            align-items: center;
            font-size: 14.5px;
            padding: 6px 0;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.09);
        }
        .cwr-hover-row:last-child {
            border-bottom: none;
        }
        .cwr-hover-year-badge {
            font-size: 15px;
            font-weight: 800;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .cwr-hover-val-req { color: #f8fafc; font-weight: 700; font-size: 14.5px; }
        .cwr-hover-val-avail { color: #93c5fd; font-weight: 700; font-size: 14.5px; }
        .cwr-hover-val-def { font-weight: 800; font-size: 14.5px; }
    `;
    document.head.appendChild(style);
}

function getFullMonthName(name) {
    if (!name) return '';
    const n = String(name).trim().toLowerCase();
    if (n.startsWith('jan')) return 'January';
    if (n.startsWith('feb')) return 'February';
    if (n.startsWith('mar')) return 'March';
    if (n.startsWith('apr')) return 'April';
    if (n.startsWith('may')) return 'May';
    if (n.startsWith('jun')) return 'June';
    if (n.startsWith('jul')) return 'July';
    if (n.startsWith('aug')) return 'August';
    if (n.startsWith('sep')) return 'September';
    if (n.startsWith('oct')) return 'October';
    if (n.startsWith('nov')) return 'November';
    if (n.startsWith('dec')) return 'December';
    return String(name).trim();
}

const YEAR_COLORS = {
    '2026': '#22c55e', // Green
    '2027': '#06b6d4', // Cyan
    '2028': '#f59e0b', // Gold / Amber
    '2029': '#a855f7', // Purple
    '2030': '#ef4444'  // Red
};

function renderSnakeNationalCWRChart(displayContainer, monthDataOrMultiYear, availDataOrInitialYear) {
    ensureCwrStyles();

    if (displayContainer.animId) {
        cancelAnimationFrame(displayContainer.animId);
        displayContainer.animId = null;
    }

    let cwrDataByYear = {};
    let initialYear = '2026';

    if (monthDataOrMultiYear && typeof monthDataOrMultiYear === 'object' && !Array.isArray(monthDataOrMultiYear)) {
        cwrDataByYear = monthDataOrMultiYear;
        if (typeof availDataOrInitialYear === 'string') {
            initialYear = availDataOrInitialYear;
        }
    } else if (Array.isArray(monthDataOrMultiYear)) {
        cwrDataByYear['2026'] = {
            requirement: monthDataOrMultiYear,
            availability: Array.isArray(availDataOrInitialYear) ? availDataOrInitialYear : []
        };
        initialYear = '2026';
    }

    const years = Object.keys(cwrDataByYear).sort();

    if (years.length === 0) {
        displayContainer.innerHTML = `
            <div class="cwr-dashboard-wrapper" style="justify-content:center;align-items:center;">
                <div style="color:#ef4444;font-weight:700;font-size:16px;">No National Crop Water Requirement data available.</div>
            </div>
        `;
        return;
    }

    let currentYear = initialYear;
    let selectedYears = [...years]; // For All Years mode

    function getYearData(yr) {
        const d = cwrDataByYear[yr] || { requirement: [], availability: [] };
        return {
            monthData: d.requirement || [],
            availData: d.availability || []
        };
    }

    function calcSingleStats(yr) {
        const { monthData: mData } = getYearData(yr);
        if (!mData || mData.length === 0) return { total: '0.00', peak: { month: '-', value: 0 }, min: { month: '-', value: 0 } };
        const total = mData.reduce((acc, m) => acc + (m.value || 0), 0).toFixed(2);
        let peak = mData[0] || { month: '-', value: 0 };
        let min = mData[0] || { month: '-', value: 0 };
        mData.forEach(m => {
            if (m.value > peak.value) peak = m;
            if (m.value < min.value) min = m;
        });
        return { total, peak: { month: getFullMonthName(peak.month), value: peak.value }, min: { month: getFullMonthName(min.month), value: min.value } };
    }

    function calcAllYearsStats() {
        const activeYrs = selectedYears.filter(y => cwrDataByYear[y]);
        if (activeYrs.length === 0) return { total: '0.00 (Avg)', peak: { label: '-' }, min: { label: '-' } };

        let totals = [];
        let globalPeak = { yr: '', month: '', value: -Infinity };
        let globalMin = { yr: '', month: '', value: Infinity };

        activeYrs.forEach(yr => {
            const { monthData: mData } = getYearData(yr);
            const yrTotal = mData.reduce((acc, m) => acc + (m.value || 0), 0);
            totals.push(yrTotal);
            mData.forEach(m => {
                if (m.value > globalPeak.value) globalPeak = { yr, month: getFullMonthName(m.month), value: m.value };
                if (m.value < globalMin.value) globalMin = { yr, month: getFullMonthName(m.month), value: m.value };
            });
        });

        const avgTotal = (totals.reduce((a, b) => a + b, 0) / totals.length).toFixed(2);
        const peakYrShort = globalPeak.yr ? globalPeak.yr.slice(-2) : '';
        const minYrShort = globalMin.yr ? globalMin.yr.slice(-2) : '';

        return {
            total: `${avgTotal} <small>MAF (Avg)</small>`,
            peakLabel: `${globalPeak.month} '${peakYrShort} (${globalPeak.value.toFixed(2)} <small>MAF</small>)`,
            minLabel: `${globalMin.month} '${minYrShort} (${globalMin.value.toFixed(2)} <small>MAF</small>)`
        };
    }

    function buildHeaderHtml() {
        const dropdownOptionsHtml = `
            <option value="All Years" ${currentYear === 'All Years' ? 'selected' : ''}>All Years</option>
            ${years.map(y => `<option value="${y}" ${y === currentYear ? 'selected' : ''}>${y}</option>`).join('')}
        `;

        const checkboxesHtml = years.map(y => `
            <label class="cwr-chk-label" style="color:${YEAR_COLORS[y] || '#38bdf8'};">
                <input type="checkbox" class="cwr-year-chk" data-year="${y}" ${selectedYears.includes(y) ? 'checked' : ''} style="accent-color:${YEAR_COLORS[y] || '#38bdf8'}; cursor:pointer;">
                ${y}
            </label>
        `).join('');

        let statsHtml = '';
        if (currentYear === 'All Years') {
            const s = calcAllYearsStats();
            statsHtml = `
                <div class="cwr-stat-card">
                    <span class="cwr-stat-label">ANNUAL TOTAL</span>
                    <span class="cwr-stat-val text-cyan" id="cwrStatTotal">${s.total}</span>
                </div>
                <div class="cwr-stat-card">
                    <span class="cwr-stat-label">PEAK DEMAND</span>
                    <span class="cwr-stat-val text-amber" id="cwrStatPeak">${s.peakLabel}</span>
                </div>
                <div class="cwr-stat-card">
                    <span class="cwr-stat-label">MIN DEMAND</span>
                    <span class="cwr-stat-val text-green" id="cwrStatMin">${s.minLabel}</span>
                </div>
            `;
        } else {
            const s = calcSingleStats(currentYear);
            statsHtml = `
                <div class="cwr-stat-card">
                    <span class="cwr-stat-label">ANNUAL TOTAL</span>
                    <span class="cwr-stat-val text-cyan" id="cwrStatTotal">${s.total} <small>MAF</small></span>
                </div>
                <div class="cwr-stat-card">
                    <span class="cwr-stat-label">PEAK DEMAND</span>
                    <span class="cwr-stat-val text-amber" id="cwrStatPeak">${s.peak.month} (${s.peak.value} <small>MAF</small>)</span>
                </div>
                <div class="cwr-stat-card">
                    <span class="cwr-stat-label">MIN DEMAND</span>
                    <span class="cwr-stat-val text-green" id="cwrStatMin">${s.min.month} (${s.min.value} <small>MAF</small>)</span>
                </div>
            `;
        }

        return { dropdownOptionsHtml, checkboxesHtml, statsHtml };
    }

    function buildLegendHtml() {
        if (currentYear === 'All Years') {
            const yearChips = years.map(y => `
                <button class="cwr-legend-chip ${selectedYears.includes(y) ? 'active' : ''}" data-year="${y}" type="button" style="border-color:${YEAR_COLORS[y] || '#38bdf8'}; color:${YEAR_COLORS[y] || '#38bdf8'};">
                    <span class="cwr-legend-dot" style="background:${YEAR_COLORS[y] || '#38bdf8'};"></span>${y}
                </button>
            `).join('');

            return `
                ${yearChips}
                <button class="cwr-legend-chip active" id="cwrLegendReqStyle" type="button" style="cursor:default;">
                    ------ Requirement (Dotted)
                </button>
                <button class="cwr-legend-chip active" id="cwrLegendAvailStyle" type="button" style="cursor:default;">
                    ────── Availability (Solid)
                </button>
                <button class="cwr-legend-chip active" id="cwrLegendRabi" type="button">
                    📄 Rabi Season (Nov – Apr)
                </button>
                <button class="cwr-legend-chip active" id="cwrLegendKharif" type="button">
                    📄 Kharif Season (May – Oct)
                </button>
            `;
        } else {
            return `
                <button class="cwr-legend-chip active" id="cwrLegendReq" type="button">
                    <span class="cwr-legend-dot" style="background:#22c55e;"></span>Requirement
                </button>
                <button class="cwr-legend-chip active" id="cwrLegendAvail" type="button">
                    <span class="cwr-legend-dot" style="background:#3b82f6;"></span>Availability
                </button>
                <button class="cwr-legend-chip active" id="cwrLegendDeficit" type="button">
                    <span class="cwr-legend-dot" style="background:#ef4444;"></span>Deficit (Requirement – Availability)
                </button>
                <button class="cwr-legend-chip active" id="cwrLegendRabi" type="button">
                    📄 Rabi Season (Nov – Apr)
                </button>
                <button class="cwr-legend-chip active" id="cwrLegendKharif" type="button">
                    📄 Kharif Season (May – Oct)
                </button>
            `;
        }
    }

    const { dropdownOptionsHtml, checkboxesHtml, statsHtml } = buildHeaderHtml();

    displayContainer.innerHTML = `
        <div class="cwr-dashboard-wrapper">
            <div class="cwr-header cwr-header-national">
                <div class="cwr-title-area">
                    <h2><span class="cwr-live-dot"></span>NATIONAL CROP WATER REQUIREMENT</h2>
                    <div class="cwr-subtitle-row">
                        <span class="cwr-subtitle">Monthly Volume Demand Flow (MAF)</span>
                        <div class="cwr-year-select-wrap">
                            <span class="cwr-year-select-label">Year:</span>
                            <select id="cwrYearSelect" class="cwr-year-select">
                                ${dropdownOptionsHtml}
                            </select>
                            <div class="cwr-year-checkboxes" id="cwrYearCheckboxes" style="display:${currentYear === 'All Years' ? 'inline-flex' : 'none'};">
                                ${checkboxesHtml}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cwr-stats-row" id="cwrStatsRowContainer">
                    ${statsHtml}
                </div>
            </div>

            <div class="cwr-legend-row" id="cwrLegendRowContainer">
                ${buildLegendHtml()}
            </div>

            <div class="cwr-chart-area">
                <canvas id="cwrSnakeCanvas"></canvas>
                <div class="cwr-hover-tooltip" id="cwrHoverTooltip"></div>
            </div>

            <div class="cwr-controls">
                <button class="cwr-btn" id="cwrPlayPauseBtn" title="Play/Pause Animation">
                    <svg class="cwr-icon-pause" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    <svg class="cwr-icon-play" viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="display:none;"><path d="M8 5v14l11-7z"/></svg>
                    <span id="cwrPlayPauseText">Pause</span>
                </button>
                <button class="cwr-btn" id="cwrReplayBtn" title="Replay Animation">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>
                    Replay
                </button>
                <div class="cwr-speed-group">
                    <span class="cwr-speed-label">Speed:</span>
                    <button class="cwr-speed-btn active" data-speed="1">1x</button>
                    <button class="cwr-speed-btn" data-speed="1.5">1.5x</button>
                    <button class="cwr-speed-btn" data-speed="2">2x</button>
                </div>
            </div>
        </div>
    `;

    const canvas = displayContainer.querySelector('#cwrSnakeCanvas');
    const tooltipEl = displayContainer.querySelector('#cwrHoverTooltip');
    const yearSelect = displayContainer.querySelector('#cwrYearSelect');

    if (!canvas) return;

    let isPlaying = true;
    let animSpeed = 1.0;
    let progress = 0;
    let showRequirement = true;
    let showAvailability = true;
    let showDeficit = true;
    let showRabi = true;
    let showKharif = true;

    function attachListeners() {
        const legendReqBtn = displayContainer.querySelector('#cwrLegendReq');
        const legendAvailBtn = displayContainer.querySelector('#cwrLegendAvail');
        const legendDeficitBtn = displayContainer.querySelector('#cwrLegendDeficit');
        const legendRabiBtn = displayContainer.querySelector('#cwrLegendRabi');
        const legendKharifBtn = displayContainer.querySelector('#cwrLegendKharif');

        if (legendReqBtn) {
            legendReqBtn.onclick = () => {
                showRequirement = !showRequirement;
                legendReqBtn.classList.toggle('active', showRequirement);
            };
        }

        if (legendAvailBtn) {
            legendAvailBtn.onclick = () => {
                showAvailability = !showAvailability;
                legendAvailBtn.classList.toggle('active', showAvailability);
            };
        }

        if (legendDeficitBtn) {
            legendDeficitBtn.onclick = () => {
                showDeficit = !showDeficit;
                legendDeficitBtn.classList.toggle('active', showDeficit);
            };
        }

        if (legendRabiBtn) {
            legendRabiBtn.onclick = () => {
                showRabi = !showRabi;
                legendRabiBtn.classList.toggle('active', showRabi);
            };
        }

        if (legendKharifBtn) {
            legendKharifBtn.onclick = () => {
                showKharif = !showKharif;
                legendKharifBtn.classList.toggle('active', showKharif);
            };
        }

        // Year Legend Chips in All Years mode
        displayContainer.querySelectorAll('.cwr-legend-chip[data-year]').forEach(chip => {
            chip.onclick = () => {
                const yr = chip.dataset.year;
                if (selectedYears.includes(yr)) {
                    selectedYears = selectedYears.filter(y => y !== yr);
                } else {
                    selectedYears.push(yr);
                }

                // Sync checkbox
                const chk = displayContainer.querySelector(`.cwr-year-chk[data-year="${yr}"]`);
                if (chk) chk.checked = selectedYears.includes(yr);

                chip.classList.toggle('active', selectedYears.includes(yr));
                updateStatsAndLegend();
            };
        });

        // Year Checkboxes in All Years mode
        displayContainer.querySelectorAll('.cwr-year-chk').forEach(chk => {
            chk.onchange = () => {
                const yr = chk.dataset.year;
                if (chk.checked) {
                    if (!selectedYears.includes(yr)) selectedYears.push(yr);
                } else {
                    selectedYears = selectedYears.filter(y => y !== yr);
                }

                const chip = displayContainer.querySelector(`.cwr-legend-chip[data-year="${yr}"]`);
                if (chip) chip.classList.toggle('active', selectedYears.includes(yr));

                updateStatsAndLegend();
            };
        });
    }

    function updateStatsAndLegend() {
        const statsContainer = displayContainer.querySelector('#cwrStatsRowContainer');
        const legendContainer = displayContainer.querySelector('#cwrLegendRowContainer');
        const chkBoxContainer = displayContainer.querySelector('#cwrYearCheckboxes');

        if (chkBoxContainer) {
            chkBoxContainer.style.display = currentYear === 'All Years' ? 'inline-flex' : 'none';
        }

        const { statsHtml } = buildHeaderHtml();
        if (statsContainer) statsContainer.innerHTML = statsHtml;
        if (legendContainer) {
            legendContainer.innerHTML = buildLegendHtml();
            attachListeners();
        }
    }

    attachListeners();

    // REQUEST 2: Restart animation from first month (Jan) on year change!
    if (yearSelect) {
        yearSelect.onchange = (e) => {
            currentYear = e.target.value;
            updateStatsAndLegend();

            // Restart animation from January
            progress = 0;
            isPlaying = true;
            const playPauseText = displayContainer.querySelector('#cwrPlayPauseText');
            const iconPause = displayContainer.querySelector('.cwr-icon-pause');
            const iconPlay = displayContainer.querySelector('.cwr-icon-play');
            if (playPauseText) playPauseText.textContent = 'Pause';
            if (iconPause) iconPause.style.display = 'inline-block';
            if (iconPlay) iconPlay.style.display = 'none';
        };
    }

    const playPauseBtn = displayContainer.querySelector('#cwrPlayPauseBtn');
    const playPauseText = displayContainer.querySelector('#cwrPlayPauseText');
    const iconPause = displayContainer.querySelector('.cwr-icon-pause');
    const iconPlay = displayContainer.querySelector('.cwr-icon-play');
    const replayBtn = displayContainer.querySelector('#cwrReplayBtn');

    if (playPauseBtn) {
        playPauseBtn.onclick = () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                playPauseText.textContent = 'Pause';
                if (iconPause) iconPause.style.display = 'inline-block';
                if (iconPlay) iconPlay.style.display = 'none';
            } else {
                playPauseText.textContent = 'Play';
                if (iconPause) iconPause.style.display = 'none';
                if (iconPlay) iconPlay.style.display = 'inline-block';
            }
        };
    }

    if (replayBtn) {
        replayBtn.onclick = () => {
            progress = 0;
            isPlaying = true;
            if (playPauseText) playPauseText.textContent = 'Pause';
            if (iconPause) iconPause.style.display = 'inline-block';
            if (iconPlay) iconPlay.style.display = 'none';
        };
    }

    const speedBtns = displayContainer.querySelectorAll('.cwr-speed-btn');
    speedBtns.forEach(btn => {
        btn.onclick = () => {
            speedBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            animSpeed = parseFloat(btn.dataset.speed) || 1.0;
        };
    });

    let hoverMonthIndex = -1;

    canvas.onmousemove = (e) => {
        // REQUEST 3: Hover box ONLY displayed in "All Years" mode!
        if (currentYear !== 'All Years') {
            hoverMonthIndex = -1;
            if (tooltipEl) tooltipEl.style.display = 'none';
            return;
        }

        const sampleMonthData = getYearData(years[0]).monthData;
        if (sampleMonthData.length === 0) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const width = rect.width;
        const paddingLeft = 60;
        const paddingRight = 60;
        const chartW = width - paddingLeft - paddingRight;

        let closestIdx = -1;
        let minDist = Infinity;
        sampleMonthData.forEach((_, i) => {
            const x = paddingLeft + (sampleMonthData.length === 1 ? chartW / 2 : (i / (sampleMonthData.length - 1)) * chartW);
            const dist = Math.abs(mouseX - x);
            if (dist < minDist) {
                minDist = dist;
                closestIdx = i;
            }
        });

        if (closestIdx !== -1 && minDist < 40 && tooltipEl) {
            hoverMonthIndex = closestIdx;
            const targetMonth = sampleMonthData[closestIdx].month;
            const fullMonth = getFullMonthName(targetMonth);

            let html = `
                <div class="cwr-hover-tooltip-title">
                    <span>🗓️ ${fullMonth} Comparison</span>
                    <span style="font-size:12px;color:#94a3b8;font-weight:600;">(MAF)</span>
                </div>
            `;

            const activeYrs = selectedYears.filter(y => cwrDataByYear[y]);
            activeYrs.forEach(yr => {
                const yrObj = cwrDataByYear[yr];
                const reqItem = (yrObj && yrObj.requirement) ? yrObj.requirement.find(m => m.month.toLowerCase() === targetMonth.toLowerCase()) : null;
                const availItem = (yrObj && yrObj.availability) ? yrObj.availability.find(m => m.month.toLowerCase() === targetMonth.toLowerCase()) : null;

                const reqVal = reqItem ? reqItem.value : 0;
                const availVal = availItem ? availItem.value : 0;
                const diff = availVal - reqVal;
                const pct = reqVal > 0 ? (Math.abs(diff) / reqVal * 100).toFixed(1) : '0.0';
                const diffStr = diff >= 0 ? `+${diff.toFixed(2)} (+${pct}%)` : `${diff.toFixed(2)} (${pct}%)`;
                const yrColor = YEAR_COLORS[yr] || '#38bdf8';

                html += `
                    <div class="cwr-hover-row">
                        <span class="cwr-hover-year-badge" style="color:${yrColor};">● ${yr}</span>
                        <span class="cwr-hover-val-req">Req: <b>${reqVal.toFixed(2)}</b></span>
                        <span class="cwr-hover-val-avail">Avail: <b>${availVal.toFixed(2)}</b></span>
                        <span class="cwr-hover-val-def" style="color:#ef4444;">Def: ${diffStr}</span>
                    </div>
                `;
            });

            tooltipEl.innerHTML = html;
            tooltipEl.style.display = 'block';
        } else {
            hoverMonthIndex = -1;
            if (tooltipEl) tooltipEl.style.display = 'none';
        }
    };

    canvas.onmouseleave = () => {
        hoverMonthIndex = -1;
        if (tooltipEl) tooltipEl.style.display = 'none';
    };

    function drawChart() {
        const rect = canvas.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        const ctx = canvas.getContext('2d');
        ctx.save();
        ctx.scale(dpr, dpr);

        const width = rect.width;
        const height = rect.height;

        const paddingLeft = 60;
        const paddingRight = 60;
        const paddingTop = 50;
        const paddingBottom = 45;

        const chartW = width - paddingLeft - paddingRight;
        const chartH = height - paddingTop - paddingBottom;

        const primaryYrData = getYearData(currentYear === 'All Years' ? years[0] : currentYear);
        const refMonthData = primaryYrData.monthData;

        if (refMonthData.length === 0) {
            ctx.restore();
            return;
        }

        let maxVal = 22;
        if (currentYear === 'All Years') {
            selectedYears.forEach(y => {
                const { monthData: mData, availData: aData } = getYearData(y);
                const mMax = Math.max(...mData.map(m => m.value || 0), 0);
                const aMax = Math.max(...aData.map(a => a.value || 0), 0);
                if (mMax > maxVal) maxVal = mMax;
                if (aMax > maxVal) maxVal = aMax;
            });
            maxVal = maxVal * 1.12;
        } else {
            const { monthData: mData, availData: aData } = getYearData(currentYear);
            const mMax = Math.max(...mData.map(m => m.value || 0), 0);
            const aMax = Math.max(...aData.map(a => a.value || 0), 0);
            maxVal = Math.max(22, Math.max(mMax, aMax) * 1.15);
        }

        function getCoords(idx, val) {
            const x = paddingLeft + (refMonthData.length === 1 ? chartW / 2 : (idx / (refMonthData.length - 1)) * chartW);
            const y = paddingTop + chartH - (val / maxVal) * chartH;
            return { x, y };
        }

        ctx.clearRect(0, 0, width, height);

        // 1. Season Background Bands (Rabi vs Kharif)
        const idxMay = refMonthData.findIndex(m => String(m.month).toLowerCase().includes('may'));
        const idxNov = refMonthData.findIndex(m => String(m.month).toLowerCase().includes('nov'));

        const refPoints = refMonthData.map((m, i) => getCoords(i, m.value));
        const xMay = idxMay !== -1 ? refPoints[idxMay].x - (chartW / 22) : paddingLeft + chartW * (4 / 11);
        const xNov = idxNov !== -1 ? refPoints[idxNov].x - (chartW / 22) : paddingLeft + chartW * (10 / 11);

        if (showRabi) {
            ctx.fillStyle = 'rgba(40, 30, 80, 0.45)';
            ctx.fillRect(paddingLeft, paddingTop, xMay - paddingLeft, chartH);
            ctx.fillRect(xNov, paddingTop, width - paddingRight - xNov, chartH);

            ctx.fillStyle = '#c084fc';
            ctx.font = 'bold 12px "Segoe UI", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('RABI SEASON', (paddingLeft + xMay) / 2, paddingTop + 16);
            ctx.fillText('RABI', (xNov + width - paddingRight) / 2, paddingTop + 16);
        }

        if (showKharif) {
            ctx.fillStyle = 'rgba(75, 60, 15, 0.35)';
            ctx.fillRect(xMay, paddingTop, xNov - xMay, chartH);

            ctx.fillStyle = '#facc15';
            ctx.font = 'bold 12px "Segoe UI", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('KHARIF SEASON', (xMay + xNov) / 2, paddingTop + 16);
        }

        // Season vertical dividers
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = 'rgba(234, 179, 8, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.moveTo(xMay, paddingTop);
        ctx.lineTo(xMay, paddingTop + chartH);
        ctx.moveTo(xNov, paddingTop);
        ctx.lineTo(xNov, paddingTop + chartH);
        ctx.stroke();
        ctx.setLineDash([]);

        // 2. Horizontal Grid Lines (Y-axis Numerical Ticks)
        const yStepValues = [2.0, 6.7, 11.4, 16.1, 20.8];
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.09)';
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 14px "Segoe UI", sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';

        yStepValues.forEach(stepVal => {
            const gy = paddingTop + chartH - (stepVal / maxVal) * chartH;
            ctx.beginPath();
            ctx.setLineDash([3, 3]);
            ctx.moveTo(paddingLeft, gy);
            ctx.lineTo(paddingLeft + chartW, gy);
            ctx.stroke();
            ctx.setLineDash([]);

            ctx.fillText(`${stepVal}`, paddingLeft - 10, gy);
        });

        // 3. Vertical Month Grid Lines & X-axis Full Month Labels
        const fullMonths = refMonthData.map(m => getFullMonthName(m.month));
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        refMonthData.forEach((m, i) => {
            const pt = refPoints[i];

            ctx.beginPath();
            ctx.setLineDash([2, 4]);
            ctx.strokeStyle = (i === hoverMonthIndex) ? 'rgba(56, 189, 248, 0.6)' : 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = (i === hoverMonthIndex) ? 2 : 1;
            ctx.moveTo(pt.x, paddingTop);
            ctx.lineTo(pt.x, paddingTop + chartH);
            ctx.stroke();
            ctx.setLineDash([]);

            const passed = i <= progress;
            ctx.font = (passed || i === hoverMonthIndex) ? 'bold 16px "Segoe UI", sans-serif' : '600 15px "Segoe UI", sans-serif';
            ctx.fillStyle = (i === hoverMonthIndex) ? '#38bdf8' : (passed ? '#38bdf8' : '#ffffff');
            ctx.fillText(fullMonths[i], pt.x, paddingTop + chartH + 12);
        });

        // Axis lines
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.moveTo(paddingLeft, paddingTop);
        ctx.lineTo(paddingLeft, paddingTop + chartH);
        ctx.lineTo(paddingLeft + chartW, paddingTop + chartH);
        ctx.stroke();

        // Helper function for drawing continuous bezier curves
        function drawCurveSeries(seriesPoints, color, isDotted) {
            if (progress <= 0 || seriesPoints.length === 0) return;

            const currentIdx = Math.min(Math.floor(progress), seriesPoints.length - 1);
            const tSegment = progress - currentIdx;

            ctx.beginPath();
            ctx.moveTo(seriesPoints[0].x, seriesPoints[0].y);

            for (let i = 0; i < currentIdx; i++) {
                const p0 = seriesPoints[i];
                const p1 = seriesPoints[i + 1];
                const cpX = (p0.x + p1.x) / 2;
                ctx.bezierCurveTo(cpX, p0.y, cpX, p1.y, p1.x, p1.y);
            }

            let headX = seriesPoints[0].x;
            let headY = seriesPoints[0].y;

            if (currentIdx < seriesPoints.length - 1) {
                const p0 = seriesPoints[currentIdx];
                const p1 = seriesPoints[currentIdx + 1];
                const cpX = (p0.x + p1.x) / 2;
                const t = tSegment;
                const invT = 1 - t;
                headX = invT * invT * invT * p0.x + 3 * invT * invT * t * cpX + 3 * invT * t * t * cpX + t * t * t * p1.x;
                headY = invT * invT * invT * p0.y + 3 * invT * invT * t * p0.y + 3 * invT * t * t * p1.y + t * t * t * p1.y;

                ctx.bezierCurveTo(invT * p0.x + t * cpX, p0.y, cpX, invT * p0.y + t * p1.y, headX, headY);
            } else {
                headX = seriesPoints[seriesPoints.length - 1].x;
                headY = seriesPoints[seriesPoints.length - 1].y;
            }

            // Glow Stroke
            ctx.shadowColor = color;
            ctx.shadowBlur = 10;
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            if (isDotted) ctx.setLineDash([5, 4]);
            else ctx.setLineDash([]);

            ctx.stroke();
            ctx.setLineDash([]);

            // Core Stroke
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.2;
            if (isDotted) ctx.setLineDash([5, 4]);
            else ctx.setLineDash([]);
            ctx.stroke();
            ctx.setLineDash([]);

            // Head Particle
            if (progress < seriesPoints.length - 1) {
                ctx.shadowColor = color;
                ctx.shadowBlur = 14;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(headX, headY, 5, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(headX, headY, 2.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        function drawBadge(x, y, text, borderColor, bgColor, isAbove) {
            ctx.font = 'bold 13px "Segoe UI", sans-serif';
            const textW = ctx.measureText(text).width;
            const badgeW = textW + 16;
            const badgeH = 23;
            const badgeX = Math.min(Math.max(x - badgeW / 2, 4), width - badgeW - 4);
            const badgeY = isAbove ? (y - badgeH) : y;

            ctx.beginPath();
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 1;
            ctx.moveTo(x, isAbove ? y : y);
            ctx.lineTo(x, isAbove ? badgeY + badgeH : badgeY);
            ctx.stroke();

            ctx.fillStyle = bgColor;
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 1;

            const r = 5;
            ctx.beginPath();
            ctx.moveTo(badgeX + r, badgeY);
            ctx.lineTo(badgeX + badgeW - r, badgeY);
            ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + r);
            ctx.lineTo(badgeX + badgeW, badgeY + badgeH - r);
            ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - r, badgeY + badgeH);
            ctx.lineTo(badgeX + r, badgeY + badgeH);
            ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - r);
            ctx.lineTo(badgeX, badgeY + r);
            ctx.quadraticCurveTo(badgeX, badgeY, badgeX + r, badgeY);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, badgeX + badgeW / 2, badgeY + badgeH / 2);
        }

        // --- DRAW CANVAS MODES ---
        if (currentYear === 'All Years') {
            // REQUEST 4: "All Years" Mode: Draw Dotted Requirements and Solid Availability lines for all selected years
            const activeYrs = selectedYears.filter(y => cwrDataByYear[y]);

            activeYrs.forEach(yr => {
                const yrColor = YEAR_COLORS[yr] || '#38bdf8';
                const { monthData: mData, availData: aData } = getYearData(yr);
                const reqPts = mData.map((m, i) => getCoords(i, m.value));
                const availPts = aData.map((a, i) => getCoords(i, a.value));

                if (showRequirement) drawCurveSeries(reqPts, yrColor, true);  // Dotted Requirement
                if (showAvailability) drawCurveSeries(availPts, yrColor, false); // Solid Availability

                // Node dots for active years
                mData.forEach((m, i) => {
                    const isPassed = i <= Math.floor(progress) || (i === Math.floor(progress) + 1 && progress >= mData.length - 1);
                    if (isPassed) {
                        const ptR = reqPts[i];
                        const ptA = availPts[i];

                        if (showRequirement && ptR) {
                            ctx.fillStyle = yrColor;
                            ctx.beginPath();
                            ctx.arc(ptR.x, ptR.y, 4, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.fillStyle = '#0b1026';
                            ctx.beginPath();
                            ctx.arc(ptR.x, ptR.y, 1.8, 0, Math.PI * 2);
                            ctx.fill();
                        }
                        if (showAvailability && ptA) {
                            ctx.fillStyle = yrColor;
                            ctx.beginPath();
                            ctx.arc(ptA.x, ptA.y, 4, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.fillStyle = '#0b1026';
                            ctx.beginPath();
                            ctx.arc(ptA.x, ptA.y, 1.8, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                });
            });
        } else {
            // Single Year Mode (e.g. 2026)
            const { monthData: mData, availData: aData } = getYearData(currentYear);
            const reqPts = mData.map((m, i) => getCoords(i, m.value));
            const availPts = aData.map((a, i) => getCoords(i, a.value));

            // Deficit Ribbon Fill
            if (showDeficit && showRequirement && showAvailability && progress > 0 && availPts.length > 0) {
                const currentIdx = Math.min(Math.floor(progress), reqPts.length - 1);
                const tSegment = progress - currentIdx;

                ctx.beginPath();
                ctx.moveTo(reqPts[0].x, reqPts[0].y);

                for (let i = 0; i < currentIdx; i++) {
                    const p0 = reqPts[i];
                    const p1 = reqPts[i + 1];
                    const cpX = (p0.x + p1.x) / 2;
                    ctx.bezierCurveTo(cpX, p0.y, cpX, p1.y, p1.x, p1.y);
                }

                let headReqX = reqPts[0].x;
                let headReqY = reqPts[0].y;

                if (currentIdx < reqPts.length - 1) {
                    const p0 = reqPts[currentIdx];
                    const p1 = reqPts[currentIdx + 1];
                    const cpX = (p0.x + p1.x) / 2;
                    const t = tSegment;
                    const invT = 1 - t;
                    headReqX = invT * invT * invT * p0.x + 3 * invT * invT * t * cpX + 3 * invT * t * t * cpX + t * t * t * p1.x;
                    headReqY = invT * invT * invT * p0.y + 3 * invT * invT * t * p0.y + 3 * invT * t * t * p1.y + t * t * t * p1.y;

                    ctx.bezierCurveTo(invT * p0.x + t * cpX, p0.y, cpX, invT * p0.y + t * p1.y, headReqX, headReqY);
                } else {
                    headReqX = reqPts[reqPts.length - 1].x;
                    headReqY = reqPts[reqPts.length - 1].y;
                }

                let headAvailX = availPts[0].x;
                let headAvailY = availPts[0].y;

                if (currentIdx < availPts.length - 1) {
                    const a0 = availPts[currentIdx];
                    const a1 = availPts[currentIdx + 1];
                    const cpX = (a0.x + a1.x) / 2;
                    const t = tSegment;
                    const invT = 1 - t;
                    headAvailX = invT * invT * invT * a0.x + 3 * invT * invT * t * cpX + 3 * invT * t * t * cpX + t * t * t * a1.x;
                    headAvailY = invT * invT * invT * a0.y + 3 * invT * invT * t * a0.y + 3 * invT * t * t * a1.y + t * t * t * a1.y;
                } else if (availPts.length > 0) {
                    headAvailX = availPts[availPts.length - 1].x;
                    headAvailY = availPts[availPts.length - 1].y;
                }

                ctx.lineTo(headAvailX, headAvailY);

                if (currentIdx < availPts.length - 1) {
                    const a0 = availPts[currentIdx];
                    const a1 = availPts[currentIdx + 1];
                    const cpX = (a0.x + a1.x) / 2;
                    const t = tSegment;
                    const invT = 1 - t;
                    ctx.bezierCurveTo(cpX, invT * a0.y + t * a1.y, invT * a0.x + t * cpX, a0.y, a0.x, a0.y);
                }

                for (let i = currentIdx - 1; i >= 0; i--) {
                    const a0 = availPts[i];
                    const a1 = availPts[i + 1];
                    const cpX = (a0.x + a1.x) / 2;
                    ctx.bezierCurveTo(cpX, a1.y, cpX, a0.y, a0.x, a0.y);
                }

                ctx.closePath();
                const fillGrad = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + chartH);
                fillGrad.addColorStop(0, 'rgba(239, 68, 68, 0.45)');
                fillGrad.addColorStop(1, 'rgba(185, 28, 28, 0.25)');
                ctx.fillStyle = fillGrad;
                ctx.fill();
            }

            if (showRequirement) drawCurveSeries(reqPts, '#22c55e', false);
            if (showAvailability) drawCurveSeries(availPts, '#3b82f6', false);

            // Node Dots & Badges for Single-Year Mode
            mData.forEach((m, i) => {
                const ptReq = reqPts[i];
                const ptAvail = availPts[i];
                const isPassed = i <= Math.floor(progress) || (i === Math.floor(progress) + 1 && progress >= mData.length - 1);

                if (isPassed) {
                    // Requirement Node & Badge
                    if (showRequirement) {
                        ctx.shadowColor = '#22c55e';
                        ctx.shadowBlur = 8;
                        ctx.fillStyle = '#22c55e';
                        ctx.beginPath();
                        ctx.arc(ptReq.x, ptReq.y, (i === hoverMonthIndex ? 6 : 4.5), 0, Math.PI * 2);
                        ctx.fill();

                        ctx.fillStyle = '#0b1026';
                        ctx.beginPath();
                        ctx.arc(ptReq.x, ptReq.y, 2, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.shadowBlur = 0;

                        drawBadge(ptReq.x, ptReq.y - 6, `${m.value} MAF`, '#22c55e', 'rgba(15, 23, 42, 0.92)', true);
                    }

                    // Availability Node & Badge
                    if (showAvailability && ptAvail) {
                        ctx.shadowColor = '#3b82f6';
                        ctx.shadowBlur = 8;
                        ctx.fillStyle = '#3b82f6';
                        ctx.beginPath();
                        ctx.arc(ptAvail.x, ptAvail.y, (i === hoverMonthIndex ? 6 : 4.5), 0, Math.PI * 2);
                        ctx.fill();

                        ctx.fillStyle = '#0b1026';
                        ctx.beginPath();
                        ctx.arc(ptAvail.x, ptAvail.y, 2, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.shadowBlur = 0;

                        drawBadge(ptAvail.x, ptAvail.y + 6, `${aData[i].value} MAF`, '#3b82f6', 'rgba(15, 23, 42, 0.92)', false);
                    }

                    // Floating Red Deficit Badge (Above Requirement)
                    if (showDeficit && showRequirement && showAvailability && ptAvail) {
                        const defVal = (aData[i].value - m.value).toFixed(2);
                        const defStr = `${defVal} MAF`;
                        drawBadge(ptReq.x, ptReq.y - 32, defStr, '#ef4444', '#ef4444', true);
                    }
                }
            });
        }

        ctx.restore();
    }

    function tick() {
        if (isPlaying) {
            progress += 0.008 * animSpeed;
            if (progress >= 11) {
                progress = 11;
            }
        }
        drawChart();
        displayContainer.animId = requestAnimationFrame(tick);
    }

    tick();
}

function loadProvincialCropWaterRequirement(displayContainer) {
    if (displayContainer.animId) {
        cancelAnimationFrame(displayContainer.animId);
        displayContainer.animId = null;
    }

    ensureCwrStyles();

    displayContainer.innerHTML = `
        <div class="cwr-dashboard-wrapper">
            <div class="cwr-header cwr-header-center">
                <div class="cwr-title-area">
                    <h2><span class="cwr-live-dot"></span>PROVINCIAL CROP WATER REQUIREMENT</h2>
                    <span class="cwr-subtitle">Water Volume Demand by Province (MAF)</span>
                </div>
            </div>
            <div class="cwr-prov-image-area">
                <img src="./Data/crop water reuqirment pak.png" alt="Provincial Crop Water Requirement - Pakistan" class="cwr-prov-image">
            </div>
        </div>
    `;

    if (!document.getElementById('cwr-prov-image-styles')) {
        const style = document.createElement('style');
        style.id = 'cwr-prov-image-styles';
        style.innerHTML = `
            .cwr-header-center {
                justify-content: center;
                text-align: center;
            }
            .cwr-header-center .cwr-title-area h2 {
                justify-content: center;
            }
            .cwr-prov-image-area {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                margin-top: 10px;
            }
            .cwr-prov-image {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                border-radius: 8px;
            }
        `;
        document.head.appendChild(style);
    }
}

async function loadCropWiseWaterRequirement(displayContainer) {
    if (displayContainer.animId) {
        cancelAnimationFrame(displayContainer.animId);
        displayContainer.animId = null;
    }
    if (displayContainer._cwrCropTimer) {
        clearInterval(displayContainer._cwrCropTimer);
        displayContainer._cwrCropTimer = null;
    }
    if (displayContainer._cwrTrendTimer) {
        clearInterval(displayContainer._cwrTrendTimer);
        displayContainer._cwrTrendTimer = null;
    }
    if (displayContainer.cwrChartInstance) {
        displayContainer.cwrChartInstance.destroy();
        displayContainer.cwrChartInstance = null;
    }
    if (displayContainer.cwrTrendChartInstance) {
        displayContainer.cwrTrendChartInstance.destroy();
        displayContainer.cwrTrendChartInstance = null;
    }

    if (!document.getElementById('cwr-inter-font')) {
        const fontLink = document.createElement('link');
        fontLink.id = 'cwr-inter-font';
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        document.head.appendChild(fontLink);
    }

    if (!document.getElementById('cwr-cropwise-card-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'cwr-cropwise-card-styles';
        styleEl.innerHTML = `
            .cwr-cropwise-card-wrapper {
                font-family: 'Inter', sans-serif;
                background: #000000;
                width: 100%;
                height: 100%;
                overflow-y: auto;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                padding: 24px;
                box-sizing: border-box;
            }

            .cwr-cropwise-card-wrapper .card {
                width: 100%;
                max-width: 1100px;
                background: #111111;
                border: 1px solid rgba(255,255,255,0.15);
                border-radius: 24px;
                padding: 36px 48px;
            }

            .cwr-cropwise-card-wrapper .top-row {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 12px;
            }

            .cwr-cropwise-card-wrapper .badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(120,80,255,0.15);
                border: 1px solid rgba(120,80,255,0.25);
                color: #a78bfa;
                font-size: 0.8rem;
                font-weight: 700;
                padding: 6px 16px;
                border-radius: 999px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .cwr-cropwise-card-wrapper .badge::before {
                content: '';
                width: 7px; height: 7px;
                background: #a78bfa;
                border-radius: 50%;
                animation: cwrPulse 2s infinite;
            }

            @keyframes cwrPulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.4; transform: scale(1.6); }
            }

            .cwr-cropwise-card-wrapper .year-tag {
                background: rgba(96,165,250,0.15);
                border: 1px solid rgba(96,165,250,0.3);
                color: #60a5fa;
                font-size: 1.4rem;
                font-weight: 800;
                padding: 10px 24px;
                border-radius: 12px;
                white-space: nowrap;
            }

            .cwr-cropwise-card-wrapper .title-section { margin-bottom: 8px; }

            .cwr-cropwise-card-wrapper h1 {
                font-size: 2.8rem;
                font-weight: 900;
                color: #ffffff;
                letter-spacing: -1px;
                line-height: 1.1;
                margin-bottom: 4px;
            }

            .cwr-cropwise-card-wrapper .subtitle {
                font-size: 1.05rem;
                color: rgba(255,255,255,0.7);
                font-weight: 500;
                margin-bottom: 8px;
            }

            .cwr-cropwise-card-wrapper .total-row {
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 24px;
            }

            .cwr-cropwise-card-wrapper .total-number {
                font-size: 4rem;
                font-weight: 900;
                color: #ffffff;
                line-height: 1;
            }

            .cwr-cropwise-card-wrapper .total-unit {
                font-size: 1.2rem;
                color: rgba(255,255,255,0.7);
                font-weight: 600;
            }

            .cwr-cropwise-card-wrapper .view-toggle {
                display: flex;
                gap: 10px;
                margin-bottom: 24px;
            }

            .cwr-cropwise-card-wrapper .toggle-btn {
                padding: 12px 24px;
                font-size: 0.95rem;
                font-weight: 700;
                font-family: 'Inter', sans-serif;
                border: 2px solid rgba(255,255,255,0.2);
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s;
                background: transparent;
                color: rgba(255,255,255,0.6);
            }

            .cwr-cropwise-card-wrapper .toggle-btn.active {
                background: linear-gradient(135deg, rgba(120,80,255,0.3), rgba(96,165,250,0.3));
                border-color: rgba(120,80,255,0.5);
                color: #ffffff;
            }

            .cwr-cropwise-card-wrapper .toggle-btn:hover:not(.active) {
                border-color: rgba(255,255,255,0.35);
                color: #ffffff;
            }

            .cwr-cropwise-card-wrapper .crop-cards {
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                gap: 12px;
                margin-bottom: 28px;
            }

            .cwr-cropwise-card-wrapper .crop-card {
                background: #1a1a1a;
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 16px;
                padding: 18px 12px;
                text-align: center;
                transition: all 0.3s;
            }

            .cwr-cropwise-card-wrapper .crop-card:hover {
                background: #222222;
                transform: translateY(-3px);
                box-shadow: 0 12px 40px rgba(0,0,0,0.5);
            }

            .cwr-cropwise-card-wrapper .crop-icon {
                font-size: 2rem;
                margin-bottom: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 50px;
                animation: cwrWindSway 3s ease-in-out infinite;
                transform-origin: bottom center;
            }

            @keyframes cwrWindSway {
                0% { transform: rotate(0deg) translateX(0); }
                15% { transform: rotate(5deg) translateX(2px); }
                30% { transform: rotate(-3deg) translateX(-1px); }
                45% { transform: rotate(4deg) translateX(2px); }
                60% { transform: rotate(-2deg) translateX(-1px); }
                75% { transform: rotate(3deg) translateX(1px); }
                90% { transform: rotate(-1deg) translateX(0); }
                100% { transform: rotate(0deg) translateX(0); }
            }

            .cwr-cropwise-card-wrapper .crop-card:nth-child(2) .crop-icon { animation-delay: 0.2s; }
            .cwr-cropwise-card-wrapper .crop-card:nth-child(3) .crop-icon { animation-delay: 0.5s; }
            .cwr-cropwise-card-wrapper .crop-card:nth-child(4) .crop-icon { animation-delay: 0.8s; }
            .cwr-cropwise-card-wrapper .crop-card:nth-child(5) .crop-icon { animation-delay: 0.3s; }
            .cwr-cropwise-card-wrapper .crop-card:nth-child(6) .crop-icon { animation-delay: 0.6s; }

            .cwr-cropwise-card-wrapper .crop-icon img, 
            .cwr-cropwise-card-wrapper .crop-icon svg {
                width: 3rem;
                height: 3rem;
                object-fit: contain;
                filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
            }

            .cwr-cropwise-card-wrapper .crop-name {
                font-size: 0.85rem;
                font-weight: 700;
                color: #ffffff;
                margin-bottom: 6px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .cwr-cropwise-card-wrapper .crop-value {
                font-size: 1.5rem;
                font-weight: 900;
                color: #ffffff;
                line-height: 1;
            }

            .cwr-cropwise-card-wrapper .crop-unit {
                font-size: 0.7rem;
                font-weight: 600;
                color: rgba(255,255,255,0.6);
                margin-top: 4px;
            }

            .cwr-cropwise-card-wrapper .crop-bar {
                width: 100%;
                height: 4px;
                background: rgba(255,255,255,0.1);
                border-radius: 999px;
                margin-top: 10px;
                overflow: hidden;
            }

            .cwr-cropwise-card-wrapper .crop-bar-fill {
                height: 100%;
                border-radius: 999px;
                transition: width 0.8s ease;
            }

            .cwr-cropwise-card-wrapper .chart-area {
                width: 100%;
                height: 420px;
                margin-bottom: 28px;
                position: relative;
            }

            .cwr-cropwise-card-wrapper .controls-row {
                display: flex;
                align-items: center;
                gap: 20px;
            }

            .cwr-cropwise-card-wrapper .play-btn {
                flex-shrink: 0;
                padding: 16px 36px;
                font-size: 1.05rem;
                font-weight: 800;
                font-family: 'Inter', sans-serif;
                border: none;
                border-radius: 14px;
                cursor: pointer;
                transition: all 0.3s;
                color: #fff;
            }

            .cwr-cropwise-card-wrapper .play-btn.stopped {
                background: linear-gradient(135deg, #34d399, #10b981);
                box-shadow: 0 8px 30px rgba(52,211,153,0.3);
            }

            .cwr-cropwise-card-wrapper .play-btn.playing {
                background: linear-gradient(135deg, #ef4444, #dc2626);
                box-shadow: 0 8px 30px rgba(239,68,68,0.3);
            }

            .cwr-cropwise-card-wrapper .play-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }

            .cwr-cropwise-card-wrapper .slider-wrap { flex: 1; }

            .cwr-cropwise-card-wrapper .slider-label {
                font-size: 0.95rem;
                font-weight: 700;
                color: rgba(255,255,255,0.8);
                margin-bottom: 10px;
            }

            .cwr-cropwise-card-wrapper input[type="range"] {
                -webkit-appearance: none;
                width: 100%;
                height: 10px;
                background: rgba(255,255,255,0.15);
                border-radius: 999px;
                outline: none;
                cursor: pointer;
            }

            .cwr-cropwise-card-wrapper input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 28px; height: 28px;
                background: linear-gradient(135deg, #a78bfa, #60a5fa);
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(167,139,250,0.5);
            }

            .cwr-cropwise-card-wrapper input[type="range"]::-moz-range-thumb {
                width: 28px; height: 28px;
                background: linear-gradient(135deg, #a78bfa, #60a5fa);
                border-radius: 50%;
                border: none;
                cursor: pointer;
            }

            .cwr-cropwise-card-wrapper .year-markers {
                display: flex;
                justify-content: space-between;
                margin-top: 6px;
            }

            .cwr-cropwise-card-wrapper .year-markers span {
                font-size: 0.85rem;
                font-weight: 700;
                color: rgba(255,255,255,0.7);
            }

            .cwr-cropwise-card-wrapper .year-cards {
                display: grid;
                grid-template-columns: repeat(6, 1fr);
                gap: 12px;
                margin-bottom: 28px;
            }

            .cwr-cropwise-card-wrapper .year-card {
                background: #1a1a1a;
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 16px;
                padding: 18px 12px;
                text-align: center;
                transition: all 0.3s;
                cursor: pointer;
                position: relative;
                overflow: hidden;
            }

            .cwr-cropwise-card-wrapper .year-card::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0;
                height: 3px;
                background: linear-gradient(90deg, #60a5fa, #a78bfa);
                opacity: 0;
                transition: opacity 0.3s;
            }

            .cwr-cropwise-card-wrapper .year-card:hover {
                background: #222222;
                transform: translateY(-3px);
                box-shadow: 0 12px 40px rgba(0,0,0,0.5);
            }

            .cwr-cropwise-card-wrapper .year-card:hover::before { opacity: 1; }

            .cwr-cropwise-card-wrapper .year-card.active {
                background: rgba(96,165,250,0.12);
                border-color: rgba(96,165,250,0.3);
            }

            .cwr-cropwise-card-wrapper .year-card.active::before { opacity: 1; }

            .cwr-cropwise-card-wrapper .year-card-icon {
                font-size: 1.6rem;
                margin-bottom: 6px;
                display: block;
            }

            .cwr-cropwise-card-wrapper .year-card-year {
                font-size: 1.1rem;
                font-weight: 800;
                color: #ffffff;
                margin-bottom: 6px;
            }

            .cwr-cropwise-card-wrapper .year-card.active .year-card-year { color: #60a5fa; }

            .cwr-cropwise-card-wrapper .year-card-value {
                font-size: 1.6rem;
                font-weight: 900;
                color: #ffffff;
                line-height: 1;
            }

            .cwr-cropwise-card-wrapper .year-card-unit {
                font-size: 0.65rem;
                font-weight: 600;
                color: rgba(255,255,255,0.6);
                margin-top: 4px;
            }

            .cwr-cropwise-card-wrapper .year-card-change {
                display: inline-flex;
                align-items: center;
                gap: 3px;
                margin-top: 8px;
                padding: 3px 8px;
                border-radius: 6px;
                font-size: 0.7rem;
                font-weight: 700;
            }

            .cwr-cropwise-card-wrapper .year-card-change.up { background: rgba(16,185,129,0.15); color: #34d399; }
            .cwr-cropwise-card-wrapper .year-card-change.down { background: rgba(239,68,68,0.15); color: #f87171; }
            .cwr-cropwise-card-wrapper .year-card-change.flat { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); }

            .cwr-cropwise-card-wrapper .view-section { display: none; }
            .cwr-cropwise-card-wrapper .view-section.active { display: block; }

            @media (max-width: 900px) {
                .cwr-cropwise-card-wrapper .crop-cards { grid-template-columns: repeat(3, 1fr); }
                .cwr-cropwise-card-wrapper .year-cards { grid-template-columns: repeat(3, 1fr); }
            }

            @media (max-width: 700px) {
                .cwr-cropwise-card-wrapper .card { padding: 28px 20px; }
                .cwr-cropwise-card-wrapper h1 { font-size: 1.8rem; }
                .cwr-cropwise-card-wrapper .total-number { font-size: 2.6rem; }
                .cwr-cropwise-card-wrapper .year-tag { font-size: 1rem; padding: 8px 14px; }
                .cwr-cropwise-card-wrapper .total-row { flex-wrap: wrap; gap: 10px; }
                .cwr-cropwise-card-wrapper .controls-row { flex-direction: column; }
                .cwr-cropwise-card-wrapper .chart-area { height: 340px; }
                .cwr-cropwise-card-wrapper .view-toggle { flex-wrap: wrap; }
                .cwr-cropwise-card-wrapper .crop-cards { grid-template-columns: repeat(2, 1fr); }
                .cwr-cropwise-card-wrapper .year-cards { grid-template-columns: repeat(2, 1fr); }
            }
        `;
        document.head.appendChild(styleEl);
    }

    displayContainer.innerHTML = `
        <div class="cwr-cropwise-card-wrapper">
            <div class="card">
                <div class="top-row">
                    <div class="badge">Live Projection</div>
                </div>

                <div class="title-section">
                    <h1 id="mainTitle">Crop Water Requirements</h1>
                    <p class="subtitle" id="mainSubtitle">Projected water demand across major crops in Million Acre Feet</p>
                </div>

                <div class="total-row">
                    <div class="year-tag" id="yearTag">2026</div>
                    <div class="total-number" id="totalNum">132.07</div>
                    <div class="total-unit" id="totalUnit">MAF Total</div>
                </div>

                <div class="view-toggle">
                    <button class="toggle-btn active" id="btnCrops">Crops</button>
                    <button class="toggle-btn" id="btnTrend">Yearly Trend</button>
                </div>

                <!-- CROP BREAKDOWN VIEW -->
                <div class="view-section active" id="viewCrops">
                    <div class="crop-cards" id="cropCards"></div>
                    <div class="chart-area">
                        <canvas id="cropChart"></canvas>
                    </div>
                    <div class="controls-row">
                        <button class="play-btn stopped" id="playBtn">Play Animation</button>
                        <div class="slider-wrap">
                            <div class="slider-label">Drag to select year</div>
                            <input type="range" id="slider" min="0" max="5" value="0" step="1">
                            <div class="year-markers">
                                <span>2026</span><span>2027</span><span>2028</span><span>2029</span><span>2030</span><span>2031</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- YEARLY TREND VIEW -->
                <div class="view-section" id="viewTrend">
                    <div class="year-cards" id="yearCards"></div>
                    <div class="chart-area">
                        <canvas id="trendChart"></canvas>
                    </div>
                    <div class="controls-row">
                        <button class="play-btn stopped" id="playBtnTrend">Play Animation</button>
                        <div class="slider-wrap">
                            <div class="slider-label">Drag to select year</div>
                            <input type="range" id="sliderTrend" min="0" max="5" value="0" step="1">
                            <div class="year-markers" id="trendMarkers"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // DATA
    const cropData = [
        { year: "2026", data: [37.83, 38.21, 14.87, 12.50, 8.59, 21.86], total: 132.07 },
        { year: "2027", data: [38.21, 38.97, 15.05, 12.70, 8.79, 22.04], total: 135.71 },
        { year: "2028", data: [38.59, 39.76, 15.23, 12.92, 8.99, 22.21], total: 137.05 },
        { year: "2029", data: [38.98, 40.56, 15.41, 13.12, 9.20, 22.39], total: 136.90 },
        { year: "2030", data: [39.07, 41.22, 15.60, 13.04, 9.21, 22.27], total: 137.68 },
        { year: "2031", data: [39.37, 41.37, 15.60, 13.34, 9.41, 22.57], total: 139.53 }
    ];
    const cropLabels = ['Wheat', 'Rice', 'Sugarcane', 'Cotton', 'Maize', 'Other'];

    const riceSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" style="width:3rem;height:3rem;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3))"><g><line x1="60" y1="110" x2="58" y2="75" stroke="#4a7a28" stroke-width="3" stroke-linecap="round"/><line x1="58" y1="75" x2="42" y2="38" stroke="#5a8c32" stroke-width="2.5" stroke-linecap="round"/><line x1="58" y1="75" x2="78" y2="35" stroke="#4a7828" stroke-width="2.5" stroke-linecap="round"/><line x1="42" y1="38" x2="30" y2="18" stroke="#5a8c32" stroke-width="2" stroke-linecap="round"/><line x1="42" y1="38" x2="28" y2="28" stroke="#4a7828" stroke-width="2" stroke-linecap="round"/><line x1="42" y1="38" x2="36" y2="16" stroke="#5a9c38" stroke-width="2" stroke-linecap="round"/><line x1="78" y1="35" x2="90" y2="15" stroke="#4a7828" stroke-width="2" stroke-linecap="round"/><line x1="78" y1="35" x2="92" y2="25" stroke="#5a8c32" stroke-width="2" stroke-linecap="round"/><line x1="78" y1="35" x2="84" y2="14" stroke="#5a9c38" stroke-width="2" stroke-linecap="round"/><ellipse cx="30" cy="16" rx="4" ry="7" fill="#e8b830" transform="rotate(-15 30 16)"/><ellipse cx="26" cy="22" rx="3.5" ry="6" fill="#d4a828" transform="rotate(-25 26 22)"/><ellipse cx="34" cy="14" rx="3.5" ry="6.5" fill="#f0c838" transform="rotate(-5 34 14)"/><ellipse cx="28" cy="30" rx="3" ry="5.5" fill="#e8b830" transform="rotate(-30 28 30)"/><ellipse cx="32" cy="22" rx="3" ry="5" fill="#d4a828" transform="rotate(-18 32 22)"/><ellipse cx="38" cy="20" rx="3" ry="5.5" fill="#f0c838" transform="rotate(-10 38 20)"/><ellipse cx="90" cy="13" rx="4" ry="7" fill="#e8b830" transform="rotate(15 90 13)"/><ellipse cx="94" cy="22" rx="3.5" ry="6" fill="#d4a828" transform="rotate(25 94 22)"/><ellipse cx="86" cy="12" rx="3.5" ry="6.5" fill="#f0c838" transform="rotate(5 86 12)"/><ellipse cx="92" cy="30" rx="3" ry="5.5" fill="#e8b830" transform="rotate(30 92 30)"/><ellipse cx="88" cy="20" rx="3" ry="5" fill="#d4a828" transform="rotate(18 88 20)"/><ellipse cx="82" cy="18" rx="3" ry="5.5" fill="#f0c838" transform="rotate(10 82 18)"/><path d="M58 95 Q50 88 40 85 Q34 83 30 86 Q28 88 32 90 Q36 92 44 90 Q52 89 58 95Z" fill="#2d6018"/><path d="M58 95 Q52 100 46 108 Q44 112 48 112 Q52 110 55 104 L60 96Z" fill="#3a7820"/><path d="M62 95 Q70 88 80 85 Q86 83 90 86 Q92 88 88 90 Q84 92 76 90 Q68 89 62 95Z" fill="#2d6018"/><path d="M62 95 Q68 100 74 108 Q76 112 72 112 Q68 110 65 104 L60 96Z" fill="#3a7820"/></g></svg>';

    const sugarcaneSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" style="width:3rem;height:3rem;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3))"><g><line x1="44" y1="110" x2="38" y2="42" stroke="#c8a848" stroke-width="5" stroke-linecap="round"/><line x1="60" y1="110" x2="60" y2="35" stroke="#d4b450" stroke-width="5.5" stroke-linecap="round"/><line x1="76" y1="110" x2="82" y2="42" stroke="#c8a848" stroke-width="5" stroke-linecap="round"/><rect x="41" y="48" width="6" height="62" rx="3" fill="#b89838"/><rect x="57" y="42" width="6" height="68" rx="3" fill="#c8a840"/><rect x="79" y="48" width="6" height="62" rx="3" fill="#b89838"/><rect x="42" y="60" width="3.5" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><rect x="42" y="75" width="3.5" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><rect x="42" y="90" width="3.5" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><rect x="58" y="55" width="4" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><rect x="58" y="72" width="4" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><rect x="58" y="88" width="4" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><rect x="80" y="60" width="3.5" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><rect x="80" y="75" width="3.5" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><rect x="80" y="90" width="3.5" height="2.5" rx="1" fill="#a08830" opacity="0.7"/><path d="M38 42 Q32 28 26 16 Q22 8 18 12 Q16 18 22 26 Q28 34 34 38 Q36 40 38 42Z" fill="#2a6016"/><path d="M38 42 Q36 30 30 20 Q26 14 22 18 Q20 24 26 30 Q32 36 36 40 Q38 41 38 42Z" fill="#3a7820"/><path d="M38 42 Q42 30 50 20 Q54 14 58 18 Q60 24 54 30 Q48 36 42 40 Q40 41 38 42Z" fill="#2a6016"/><path d="M60 35 Q54 18 48 6 Q44 0 40 4 Q38 10 44 18 Q50 26 56 32 Q59 34 60 35Z" fill="#2a6016"/><path d="M60 35 Q56 22 50 10 Q46 4 42 8 Q40 14 46 22 Q52 28 58 33 Q60 34 60 35Z" fill="#3a7820"/><path d="M60 35 Q66 18 72 6 Q76 0 80 4 Q82 10 76 18 Q70 26 64 32 Q61 34 60 35Z" fill="#2a6016"/><path d="M60 35 Q64 22 70 10 Q74 4 78 8 Q80 14 74 22 Q68 28 62 33 Q60 34 60 35Z" fill="#3a7820"/><path d="M82 42 Q88 28 94 16 Q98 8 102 12 Q104 18 98 26 Q92 34 86 38 Q84 40 82 42Z" fill="#2a6016"/><path d="M82 42 Q84 30 90 20 Q94 14 98 18 Q100 24 94 30 Q88 36 84 40 Q82 41 82 42Z" fill="#3a7820"/><path d="M82 42 Q78 30 70 20 Q66 14 62 18 Q60 24 66 30 Q72 36 78 40 Q80 41 82 42Z" fill="#2a6016"/></g></svg>';

    const cottonSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" style="width:3rem;height:3rem;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3))"><g><path d="M60 105 Q58 90 55 82 L50 75 Q46 70 42 72 L38 75 Q34 78 30 74 Q26 70 30 65 L35 60 Q38 56 42 58 L48 62 Q52 64 56 60 L58 55 Q60 50 62 55 L64 60 Q68 64 72 62 L78 58 Q82 56 85 60 L90 65 Q94 70 90 74 Q86 78 82 75 L78 72 Q74 70 70 75 L65 82 Q62 90 60 105Z" fill="#3d2b1f"/><path d="M30 68 Q25 60 28 52 L33 48 Q36 45 40 48 L44 52 Q46 55 48 52 L50 46 Q52 40 54 46 L56 52 Q58 55 60 52 L62 46 Q64 40 66 46 L68 52 Q70 55 72 52 L76 48 Q80 45 83 48 L88 52 Q91 60 86 68 Q82 72 78 70 L74 66 Q72 64 70 66 L68 70 Q66 72 64 70 L62 66 Q60 64 58 66 L56 70 Q54 72 52 70 L50 66 Q48 64 46 66 L42 70 Q38 72 30 68Z" fill="#5a3a28"/><circle cx="48" cy="38" r="16" fill="white"/><circle cx="72" cy="38" r="16" fill="#f8f8f8"/><circle cx="60" cy="30" r="14" fill="white"/><circle cx="44" cy="28" r="10" fill="#fafafa"/><circle cx="76" cy="28" r="10" fill="#fafafa"/><circle cx="60" cy="22" r="8" fill="white"/><circle cx="48" cy="38" r="14" fill="white" opacity="0.9"/><circle cx="72" cy="38" r="14" fill="#f5f5f5" opacity="0.9"/><circle cx="60" cy="30" r="12" fill="white" opacity="0.95"/><ellipse cx="60" cy="35" rx="28" ry="22" fill="white" opacity="0.3"/></g></svg>';

    const cropIcons = ['🌾', riceSvg, sugarcaneSvg, cottonSvg, '🌽', '🌱'];
    const cropColors = ['#f97316', '#3b82f6', '#10b981', '#ef4444', '#eab308', '#8b5cf6'];
    let cIdx = 0, cPlaying = false, cTimer = null;

    const trendYears = ['2026','2027','2028','2029','2030','2031'];
    const trendValues = [ 132.07, 135.71, 137.05, 136.90, 137.68, 139.53];
    let tIdx = 0, tPlaying = false, tTimer = null;

    const tMarkers = displayContainer.querySelector('#trendMarkers');
    if (tMarkers) {
        tMarkers.innerHTML = '';
        trendYears.forEach(y => { tMarkers.innerHTML += `<span>${y}</span>`; });
    }

    function buildCropCards() {
        const container = displayContainer.querySelector('#cropCards');
        if (!container) return;
        container.innerHTML = '';
        const data = cropData[cIdx].data;
        const maxVal = 45;
        cropLabels.forEach((label, i) => {
            const pct = (data[i] / maxVal) * 100;
            container.innerHTML += `
                <div class="crop-card">
                    <span class="crop-icon">${cropIcons[i]}</span>
                    <div class="crop-name">${label}</div>
                    <div class="crop-value">${data[i].toFixed(2)}</div>
                    <div class="crop-unit">MAF</div>
                    <div class="crop-bar">
                        <div class="crop-bar-fill" style="width:${pct}%; background:${cropColors[i]}"></div>
                    </div>
                </div>`;
        });
    }

    function buildYearCards() {
        const container = displayContainer.querySelector('#yearCards');
        if (!container) return;
        container.innerHTML = '';
        trendYears.forEach((year, i) => {
            const isActive = i === tIdx;
            const change = i > 0 ? trendValues[i] - trendValues[i - 1] : 0;
            const changePct = i > 0 ? ((change / trendValues[i - 1]) * 100).toFixed(1) : 0;
            let changeClass = 'flat', changeText = '—';
            if (i > 0) {
                if (change > 0) { changeClass = 'up'; changeText = '+' + changePct + '%'; }
                else if (change < 0) { changeClass = 'down'; changeText = changePct + '%'; }
                else { changeText = '0.0%'; }
            }
            const label = i > 0 ? changeText : 'Base';
            const cls = i > 0 ? changeClass : 'flat';
            
            const cardDiv = document.createElement('div');
            cardDiv.className = `year-card ${isActive ? 'active' : ''}`;
            cardDiv.innerHTML = `<span class="year-card-icon">💧</span><div class="year-card-year">${year}</div><div class="year-card-value">${trendValues[i].toFixed(2)}</div><div class="year-card-unit">MAF</div><div class="year-card-change ${cls}">${label}</div>`;
            cardDiv.addEventListener('click', () => slideTrend(i));
            container.appendChild(cardDiv);
        });
    }

    const cropCanvas = displayContainer.querySelector('#cropChart');
    if (cropCanvas && typeof Chart !== 'undefined' && Chart.getChart) {
        const existingCropChart = Chart.getChart(cropCanvas);
        if (existingCropChart) existingCropChart.destroy();
    }
    const cropCtx = cropCanvas ? cropCanvas.getContext('2d') : null;

    const cropChart = new Chart(cropCtx, {
        type: 'bar',
        data: {
            labels: cropLabels,
            datasets: [{
                data: cropData[0].data,
                backgroundColor: cropColors.map(c => c + 'cc'),
                borderColor: cropColors,
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
                barPercentage: 0.65,
                categoryPercentage: 0.85
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { right: 24 } },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 50,
                    grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                    ticks: {
                        color: '#ffffff',
                        font: { size: 16, weight: '700', family: 'Inter' },
                        callback: v => v + ' MAF'
                    },
                    border: { display: false }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: '#ffffff', font: { size: 20, weight: '900', family: 'Inter' }, padding: 16 },
                    border: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    titleFont: { size: 16, weight: '700', family: 'Inter' },
                    bodyFont: { size: 15, weight: '600', family: 'Inter' },
                    padding: 14,
                    cornerRadius: 10,
                    displayColors: true,
                    boxPadding: 6,
                    callbacks: { label: c => ` ${c.parsed.x} MAF` }
                }
            },
            animation: { duration: 800, easing: 'easeOutQuart' }
        },
        plugins: [{
            id: 'cropValues',
            afterDatasetsDraw(chart) {
                const { ctx: c, data } = chart;
                const meta = chart.getDatasetMeta(0);
                c.save();
                meta.data.forEach((bar, i) => {
                    c.fillStyle = '#ffffff';
                    c.font = '900 17px Inter, sans-serif';
                    c.textBaseline = 'middle';
                    c.fillText(data.datasets[0].data[i].toFixed(2), bar.x + 14, bar.y);
                });
                c.restore();
            }
        }]
    });
    displayContainer.cwrCropChartInstance = cropChart;

    const trendCanvas = displayContainer.querySelector('#trendChart');
    if (trendCanvas && typeof Chart !== 'undefined' && Chart.getChart) {
        const existingTrendChart = Chart.getChart(trendCanvas);
        if (existingTrendChart) existingTrendChart.destroy();
    }
    const trendCtx = trendCanvas ? trendCanvas.getContext('2d') : null;

    const trendChart = new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: trendYears,
            datasets: [{
                data: trendValues.slice(0, 1),
                borderColor: '#60a5fa',
                backgroundColor: 'rgba(96,165,250,0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#60a5fa',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 8,
                pointHoverRadius: 11,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { left: 10, right: 20, top: 40 } },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                    ticks: { color: '#ffffff', font: { size: 18, weight: '800', family: 'Inter' } },
                    border: { display: false }
                },
                y: {
                    min: 120,
                    max: 145,
                    grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                    ticks: {
                        color: '#ffffff',
                        font: { size: 18, weight: '800', family: 'Inter' },
                        callback: v => v + ' MAF'
                    },
                    border: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    titleFont: { size: 16, weight: '700', family: 'Inter' },
                    bodyFont: { size: 15, weight: '600', family: 'Inter' },
                    padding: 14,
                    cornerRadius: 10,
                    callbacks: { label: c => ` ${c.parsed.y} MAF` }
                }
            },
            animation: { duration: 800, easing: 'easeOutQuart' }
        },
        plugins: [{
            id: 'trendValues',
            afterDatasetsDraw(chart) {
                const { ctx: c, data } = chart;
                const meta = chart.getDatasetMeta(0);
                if (!meta.data.length) return;
                c.save();
                meta.data.forEach((point, i) => {
                    c.fillStyle = '#ffffff';
                    c.font = '900 18px Inter, sans-serif';
                    c.textAlign = 'center';
                    c.textBaseline = 'bottom';
                    c.fillText(data.datasets[0].data[i].toFixed(2), point.x, point.y - 12);
                });
                c.restore();
            }
        }]
    });
    displayContainer.cwrTrendChartInstance = trendChart;

    function switchView(view) {
        const viewCropsEl = displayContainer.querySelector('#viewCrops');
        const viewTrendEl = displayContainer.querySelector('#viewTrend');
        const btnCropsEl = displayContainer.querySelector('#btnCrops');
        const btnTrendEl = displayContainer.querySelector('#btnTrend');
        const mainTitleEl = displayContainer.querySelector('#mainTitle');
        const mainSubtitleEl = displayContainer.querySelector('#mainSubtitle');

        if (viewCropsEl) viewCropsEl.classList.toggle('active', view === 'crops');
        if (viewTrendEl) viewTrendEl.classList.toggle('active', view === 'trend');
        if (btnCropsEl) btnCropsEl.classList.toggle('active', view === 'crops');
        if (btnTrendEl) btnTrendEl.classList.toggle('active', view === 'trend');

        if (view === 'crops') {
            pauseTrend();
            updateCrop(cIdx);
            if (mainTitleEl) mainTitleEl.textContent = 'Crop Water Requirements';
            if (mainSubtitleEl) mainSubtitleEl.textContent = 'Projected water demand across major crops in Million Acre Feet';
        } else {
            pauseCrop();
            updateTrend(tIdx);
            if (mainTitleEl) mainTitleEl.textContent = 'Yearly Water Trend';
            if (mainSubtitleEl) mainSubtitleEl.textContent = 'Total required water from 2026 to 2031 (MAF)';
        }
    }

    function updateCrop(i) {
        cIdx = +i;
        cropChart.data.datasets[0].data = cropData[cIdx].data;
        cropChart.update();
        buildCropCards();
        const totalNumEl = displayContainer.querySelector('#totalNum');
        const yearTagEl = displayContainer.querySelector('#yearTag');
        const totalUnitEl = displayContainer.querySelector('#totalUnit');
        const sliderEl = displayContainer.querySelector('#slider');

        if (totalNumEl) totalNumEl.textContent = cropData[cIdx].total.toFixed(2);
        if (yearTagEl) yearTagEl.textContent = cropData[cIdx].year;
        if (totalUnitEl) totalUnitEl.textContent = 'MAF Total';
        if (sliderEl) sliderEl.value = cIdx;
    }

    function slideYear(v) { pauseCrop(); updateCrop(v); }

    function togglePlay() {
        if (cPlaying) { pauseCrop(); return; }
        cPlaying = true;
        const btn = displayContainer.querySelector('#playBtn');
        if (btn) {
            btn.textContent = 'Pause Animation';
            btn.className = 'play-btn playing';
        }
        cTimer = setInterval(() => {
            cIdx = (cIdx + 1) % cropData.length;
            updateCrop(cIdx);
        }, 1800);
        displayContainer._cwrCropTimer = cTimer;
    }

    function pauseCrop() {
        cPlaying = false;
        if (cTimer) {
            clearInterval(cTimer);
            cTimer = null;
            displayContainer._cwrCropTimer = null;
        }
        const btn = displayContainer.querySelector('#playBtn');
        if (btn) {
            btn.textContent = 'Play Animation';
            btn.className = 'play-btn stopped';
        }
    }

    function updateTrend(i) {
        tIdx = +i;
        trendChart.data.datasets[0].data = trendValues.slice(0, tIdx + 1);
        trendChart.update();
        buildYearCards();
        const totalNumEl = displayContainer.querySelector('#totalNum');
        const yearTagEl = displayContainer.querySelector('#yearTag');
        const totalUnitEl = displayContainer.querySelector('#totalUnit');
        const sliderTrendEl = displayContainer.querySelector('#sliderTrend');

        if (totalNumEl) totalNumEl.textContent = trendValues[tIdx].toFixed(2);
        if (yearTagEl) yearTagEl.textContent = trendYears[tIdx];
        if (totalUnitEl) totalUnitEl.textContent = 'MAF Total';
        if (sliderTrendEl) sliderTrendEl.value = tIdx;
    }

    function slideTrend(v) { pauseTrend(); updateTrend(v); }

    function toggleTrendPlay() {
        if (tPlaying) { pauseTrend(); return; }
        tPlaying = true;
        const btn = displayContainer.querySelector('#playBtnTrend');
        if (btn) {
            btn.textContent = 'Pause Animation';
            btn.className = 'play-btn playing';
        }

        if (tIdx >= trendValues.length - 1) {
            tIdx = 0;
            trendChart.data.datasets[0].data = [];
            trendChart.update();
        }

        tTimer = setInterval(() => {
            tIdx++;
            if (tIdx >= trendValues.length) { pauseTrend(); return; }
            updateTrend(tIdx);
        }, 1200);
        displayContainer._cwrTrendTimer = tTimer;
    }

    function pauseTrend() {
        tPlaying = false;
        if (tTimer) {
            clearInterval(tTimer);
            tTimer = null;
            displayContainer._cwrTrendTimer = null;
        }
        const btn = displayContainer.querySelector('#playBtnTrend');
        if (btn) {
            btn.textContent = 'Play Animation';
            btn.className = 'play-btn stopped';
        }
    }

    const btnCrops = displayContainer.querySelector('#btnCrops');
    if (btnCrops) btnCrops.addEventListener('click', () => switchView('crops'));

    const btnTrend = displayContainer.querySelector('#btnTrend');
    if (btnTrend) btnTrend.addEventListener('click', () => switchView('trend'));

    const playBtn = displayContainer.querySelector('#playBtn');
    if (playBtn) playBtn.addEventListener('click', togglePlay);

    const slider = displayContainer.querySelector('#slider');
    if (slider) slider.addEventListener('input', (e) => slideYear(e.target.value));

    const playBtnTrend = displayContainer.querySelector('#playBtnTrend');
    if (playBtnTrend) playBtnTrend.addEventListener('click', toggleTrendPlay);

    const sliderTrend = displayContainer.querySelector('#sliderTrend');
    if (sliderTrend) sliderTrend.addEventListener('input', (e) => slideTrend(e.target.value));

    updateCrop(0);
}

// --- Food Security Graph Handler & Excel Data Loader ---
let populationExcelData = [
    { year: 2026, population: 254.7, demand: 177.65, availability: 160.47, waterReq: 132.069, waterAvail: 109.0 },
    { year: 2027, population: 259.5, demand: 183.20, availability: 155.00, waterReq: 135.681191, waterAvail: 109.1 },
    { year: 2028, population: 264.3, demand: 190.56, availability: 153.00, waterReq: 137.021191, waterAvail: 111.1 },
    { year: 2029, population: 269.2, demand: 201.00, availability: 151.00, waterReq: 137.371191, waterAvail: 109.7 },
    { year: 2030, population: 274.0, demand: 211.02, availability: 149.00, waterReq: 137.651194, waterAvail: 110.3 }
];

let foodCategorizationExcelData = [
    { year: 2026, population: 254.7, demand: 92.79005, cashCrops: 7.83, foodCrops: 73.746, others: 1.279, waterShortage: 80.27425 },
    { year: 2027, population: 259.5, demand: 95.85292, cashCrops: 7.65, foodCrops: 70.98, others: 1.1766, waterShortage: 77.30585 },
    { year: 2028, population: 264.3, demand: 98.55722, cashCrops: 7.41, foodCrops: 69.70, others: 1.0742, waterShortage: 75.70345 },
    { year: 2029, population: 269.2, demand: 101.2329, cashCrops: 7.35, foodCrops: 68.05, others: 0.9718, waterShortage: 73.89105 },
    { year: 2030, population: 274.0, demand: 103.9801, cashCrops: 7.20, foodCrops: 66.37, others: 0.8694, waterShortage: 71.89865 }
];

function loadPopulationExcelData(callback) {
    if (window.XLSX) {
        fetch('./Data/crop Water Req.xlsx')
            .then(res => res.arrayBuffer())
            .then(ab => {
                const wb = XLSX.read(ab, { type: 'array' });
                if (wb.Sheets['Population']) {
                    const sheetData = XLSX.utils.sheet_to_json(wb.Sheets['Population']);
                    const parsed = [];
                    sheetData.forEach(row => {
                        const yr = parseInt(row['Year']);
                        const pop = parseFloat(row['Population (M)'] || row['Population']);
                        const dem = parseFloat(row['Food Demand (MMT)'] || row['Food Demand']);
                        const avail = parseFloat(row['Food Availability (MMT)'] || row['Food Availability']);
                        const wReq = parseFloat(row['Water Requirement (MAF)'] || row['Water Requirement']);
                        const wAvail = parseFloat(row['Water Availability (MAF)'] || row['Water Availability']);
                        if (!isNaN(yr) && !isNaN(pop)) {
                            parsed.push({
                                year: yr,
                                population: pop,
                                demand: dem,
                                availability: avail,
                                waterReq: isNaN(wReq) ? 132.069 : wReq,
                                waterAvail: isNaN(wAvail) ? 109.0 : wAvail
                            });
                        }
                    });
                    if (parsed.length > 0) populationExcelData = parsed;
                }
                if (wb.Sheets['Food Categorization']) {
                    const sheetData = XLSX.utils.sheet_to_json(wb.Sheets['Food Categorization']);
                    const parsedCat = [];
                    sheetData.forEach((row) => {
                        const yr = parseInt(row['Year']);
                        const pop = parseFloat(row['Population (M)'] || row['Population']);
                        const dem = parseFloat(row['Food Demand (MMT)'] || row['Food Demand']);
                        const cash = parseFloat(row['Cash Crops']);
                        const food = parseFloat(row['Food Crops']);
                        const oth = parseFloat(row['Others']);
                        const wShortage = parseFloat(row['Water Shortage']);
                        if (!isNaN(yr) && !isNaN(pop)) {
                            parsedCat.push({
                                year: yr,
                                population: pop,
                                demand: dem,
                                cashCrops: isNaN(cash) ? 7.83 : cash,
                                foodCrops: isNaN(food) ? 73.746 : food,
                                others: isNaN(oth) ? 1.279 : oth,
                                waterShortage: isNaN(wShortage) ? 80.27425 : wShortage
                            });
                        }
                    });
                    if (parsedCat.length > 0) foodCategorizationExcelData = parsedCat;
                }
                if (callback) callback();
            })
            .catch(err => {
                console.warn('Error loading Population excel data, using defaults:', err);
                if (callback) callback();
            });
    } else {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
        script.onload = () => loadPopulationExcelData(callback);
        script.onerror = () => { if (callback) callback(); };
        document.head.appendChild(script);
    }
}

function handleFoodSecurityGraphClick() {
    if (window.event) window.event.preventDefault();
    const clickedLink = document.getElementById('food-security-graph-btn');
    if (!clickedLink) return false;

    clickedLink.classList.toggle('active');
    const isActive = clickedLink.classList.contains('active');

    handleFoodSecurityGraphToggle(isActive);
    return false;
}

function handleFoodSecurityGraphToggle(isChecked) {
    const toggleSwitch = document.getElementById('food-security-graph-toggle');
    const clickedLink = document.getElementById('food-security-graph-btn');

    if (toggleSwitch) toggleSwitch.checked = isChecked;
    if (clickedLink) {
        if (isChecked) clickedLink.classList.add('active');
        else clickedLink.classList.remove('active');
    }

    if (isChecked) {
        loadFoodSecurityGraph();
        turnOffOtherPortals('food-security-graph-toggle');
        turnOffOtherGraphs(null);
        turnOffOtherNewGraphs(null);
    } else {
        restorePortalIframe();
    }
}

function loadFoodSecurityGraph() {
    let displayContainer = document.querySelector('.portal-iframe-container');

    if (!displayContainer) {
        const portalsContent = document.querySelector('.portals-content');
        displayContainer = document.createElement('div');
        displayContainer.className = 'portal-iframe-container';
        portalsContent.appendChild(displayContainer);
    }

    displayContainer.innerHTML = '';
    loadPopulationExcelData(() => {
        renderFoodSecurityGraph(displayContainer);
    });
}

let fsInlineState = { pop: true, foodDem: true, foodAvail: true, foodBar: true, waterReq: true, waterAvail: true, waterBar: true };
let fsModalState = { pop: true, foodDem: true, foodAvail: true, foodBar: true, waterReq: true, waterAvail: true, waterBar: true };

function calcFsYDomain(data, state) {
    let vals = [];
    data.forEach(d => {
        if (state.pop) vals.push(d.population);
        if (state.foodDem) vals.push(d.demand);
        if (state.foodAvail) vals.push(d.availability);
        if (state.waterReq) vals.push(d.waterReq);
        if (state.waterAvail) vals.push(d.waterAvail);
    });

    if (vals.length === 0) {
        return { minY: 0, maxY: 300, ticks: [0, 50, 100, 150, 200, 250, 300] };
    }

    let minVal = Math.min(...vals);
    let maxVal = Math.max(...vals);

    let pad = (maxVal - minVal) * 0.18;
    if (pad < 10) pad = 10;

    let minY = Math.floor((minVal - pad) / 10) * 10;
    let maxY = Math.ceil((maxVal + pad) / 10) * 10;

    if (minY < 0) minY = 0;
    if (maxY - minY < 30) maxY = minY + 30;

    const step = (maxY - minY) / 5;
    const ticks = [];
    for (let i = 0; i <= 5; i++) {
        ticks.push(Math.round(minY + i * step));
    }

    return { minY, maxY, ticks };
}

function toggleFsGroup(groupKey, btn) {
    if (!btn) return;
    const isModal = !!btn.closest('#food-security-modal');
    const state = isModal ? fsModalState : fsInlineState;

    state[groupKey] = !state[groupKey];
    btn.classList.toggle('is-off', !state[groupKey]);

    if (isModal) {
        updateFoodSecurityModalView();
    } else {
        const container = btn.closest('.food-security-container') || document.querySelector('.portal-iframe-container');
        if (container) updateFoodSecurityInlineView(container);
    }
}

let fsV2State = {
    pop: true,
    foodDem: true,
    foodAvail: true,
    waterShort: true,
    foodCrops: true,
    cashCrops: true,
    others: true,
    redBox: true,
    waterDeficitBar: false // Default OFF as requested
};

let fsV2LabelsState = {
    pop: true,
    foodDem: true,
    foodAvail: true,
    waterShort: true,
    foodCrops: true,
    cashCrops: true,
    others: true,
    redBox: true
};

function toggleFsV2Label(key, e) {
    if (e) e.stopPropagation();
    fsV2LabelsState[key] = !fsV2LabelsState[key];
    
    // Update label checkbox states
    document.querySelectorAll(`input[data-v2-label-key="${key}"]`).forEach(chk => {
        chk.checked = fsV2LabelsState[key];
    });

    // Re-render inline view if visible
    const inlineWrapper = document.getElementById('fs-chart-wrapper');
    if (inlineWrapper && inlineWrapper.parentElement) {
        const displayContainer = inlineWrapper.parentElement.parentElement;
        if (displayContainer) updateFoodSecurityInlineView(displayContainer);
    }

    // Re-render modal view if visible
    const modal = document.getElementById('food-security-modal');
    if (modal && modal.style.display !== 'none' && modal.style.opacity === '1') {
        updateFoodSecurityModalView();
    }
}
window.toggleFsV2Label = toggleFsV2Label;

function toggleFsGroupV2(key, btn) {
    fsV2State[key] = !fsV2State[key];
    const isVisible = fsV2State[key];

    document.querySelectorAll(`.fs-legend-btn[data-v2-key="${key}"]`).forEach(el => {
        if (isVisible) el.classList.remove('is-off');
        else el.classList.add('is-off');
    });

    // Re-render inline view if visible
    const inlineWrapper = document.getElementById('fs-chart-wrapper');
    if (inlineWrapper && inlineWrapper.parentElement) {
        const displayContainer = inlineWrapper.parentElement.parentElement;
        if (displayContainer) updateFoodSecurityInlineView(displayContainer);
    }

    // Re-render modal view if visible
    const modal = document.getElementById('food-security-modal');
    if (modal && modal.style.display !== 'none' && modal.style.opacity === '1') {
        updateFoodSecurityModalView();
    }
}

function renderFoodSecurityGraph(displayContainer) {
    const data = populationExcelData;

    const latestPop = data[data.length - 1].population;
    const firstPop = data[0].population;
    const popGrowth = (((latestPop - firstPop) / firstPop) * 100).toFixed(1);

    const latestDem = data[data.length - 1].demand;
    const latestAvail = data[data.length - 1].availability;
    const latestFoodDeficit = (latestDem - latestAvail).toFixed(2);

    const latestWReq = data[data.length - 1].waterReq;
    const latestWAvail = data[data.length - 1].waterAvail;
    const latestWaterDeficit = (latestWReq - latestWAvail).toFixed(2);

    const isView2 = currentFoodSecurityGraphView === 2;

    displayContainer.innerHTML = `
        <div class="food-security-container" style="background: linear-gradient(165deg, rgba(8, 12, 30, 0.98), rgba(15, 23, 42, 0.99)); border-radius: 20px; border: 1px solid rgba(0, 229, 255, 0.35); box-shadow: 0 25px 60px rgba(0,0,0,0.9); padding: 18px 24px; color: #f8fafc; font-family: 'Rajdhani', sans-serif; width: 100%; height: 100%; min-height: 520px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow-y: auto;">
            
            <style>
                .fs-line-pop, .fs-line-demand, .fs-line-avail, .fs-line-wreq, .fs-line-wavail {
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    clip-path: inset(0 100% 0 0);
                    animation: fsSnakeReveal 4.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .fs-line-pop { stroke: #00E5FF; stroke-width: 4.5px; animation-delay: 0.05s; filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.8)); }
                
                /* Food Series (Golden Amber) */
                .fs-line-demand { stroke: #FFB703; stroke-width: 4px; stroke-dasharray: 8 6; animation-delay: 0.15s; filter: drop-shadow(0 0 8px rgba(255, 183, 3, 0.8)); }
                .fs-line-avail { stroke: #FFB703; stroke-width: 4px; animation-delay: 0.1s; filter: drop-shadow(0 0 8px rgba(255, 183, 3, 0.8)); }

                /* Blinking Water Deficit Bar */
                .fs-water-deficit-blink {
                    animation: fsWaterBlink 1.4s ease-in-out infinite alternate !important;
                }
                @keyframes fsWaterBlink {
                    0% { opacity: 0.25; }
                    100% { opacity: 1.0; }
                }
                /* Water Shortage Line (Vivid Red) */
                .fs-line-wreq { stroke: #EF4444; stroke-width: 4px; stroke-dasharray: 8 6; animation-delay: 0.2s; filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.8)); }
                .fs-line-wavail { stroke: #EF4444; stroke-width: 4px; animation-delay: 0.25s; filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.8)); }

                .fs-pop-fill {
                    fill: #00E5FF;
                    opacity: 0;
                    clip-path: inset(0 100% 0 0);
                    animation: fsGapReveal 4.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    animation-delay: 0.1s;
                }

                .fs-hatch-bar {
                    opacity: 0;
                    transform-box: fill-box;
                    transform-origin: bottom;
                    animation: fsBarGrow 0.7s cubic-bezier(0.34, 1.25, 0.64, 1) forwards;
                }

                .fs-point {
                    opacity: 0;
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: fsPointPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                    transition: r 0.2s ease, filter 0.2s ease;
                }

                .fs-badge {
                    opacity: 0;
                    animation: fsBadgeFadeIn 0.6s ease-out forwards;
                }

                @keyframes fsSnakeReveal {
                    0% { clip-path: inset(0 100% 0 0); }
                    100% { clip-path: inset(0 0% 0 0); }
                }
                @keyframes fsGapReveal {
                    0% { clip-path: inset(0 100% 0 0); opacity: 0; }
                    100% { clip-path: inset(0 0% 0 0); opacity: 0.12; }
                }
                @keyframes fsBarGrow {
                    0% { opacity: 0; transform: scaleY(0); }
                    100% { opacity: 0.95; transform: scaleY(1); }
                }
                @keyframes fsBadgeFadeIn {
                    0% { opacity: 0; transform: translateY(4px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fsPointPop {
                    0% { opacity: 0; transform: scale(0); }
                    70% { opacity: 1; transform: scale(1.4); }
                    100% { opacity: 1; transform: scale(1); }
                }

                .fs-grid-line, .fs-vgrid-line, .fs-axis-label {
                    transition: cy 0.55s cubic-bezier(0.4, 0, 0.2, 1), y 0.55s cubic-bezier(0.4, 0, 0.2, 1), height 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
                }

                .fs-point:hover { r: 10; filter: drop-shadow(0 0 12px rgba(255,255,255,0.95)); cursor: pointer; }

                /* Interactive Legend Buttons */
                .fs-legend-btn {
                    cursor: pointer;
                    user-select: none;
                    transition: opacity 0.25s ease, transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
                    padding: 5px 12px;
                    border-radius: 20px;
                    background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.16);
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    font-size: 14px;
                    font-weight: 700;
                }
                .fs-legend-btn:hover {
                    background: rgba(255,255,255,0.15);
                    border-color: rgba(255,255,255,0.35);
                    transform: translateY(-2px);
                }
                .fs-legend-btn.is-off {
                    opacity: 0.35 !important;
                    text-decoration: line-through;
                    filter: grayscale(0.8);
                    background: rgba(0,0,0,0.3);
                }
                .food-security-container:fullscreen,
                #food-security-modal:fullscreen,
                #food-security-graph-card:fullscreen {
                    width: 100vw !important;
                    height: 100vh !important;
                    max-width: 100vw !important;
                    max-height: 100vh !important;
                    margin: 0 !important;
                    padding: 24px 32px !important;
                    background: #080C1E !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: space-between !important;
                    overflow: hidden !important;
                    box-sizing: border-box !important;
                    border-radius: 0 !important;
                    border: none !important;
                }
                #food-security-graph-card:fullscreen {
                    width: 100vw !important;
                    height: 100vh !important;
                    max-width: none !important;
                    max-height: none !important;
                    padding: 28px 36px !important;
                    background: #080C1E !important;
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: space-between !important;
                    overflow: hidden !important;
                    box-sizing: border-box !important;
                }
            </style>

            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.14); padding-bottom: 8px; margin-bottom: 10px; flex-shrink: 0; position: relative;">
                <div>
                    <h2 style="margin: 0; font-size: 26px; font-weight: 700; color: #00E5FF; letter-spacing: 0.8px; text-transform: uppercase;">
                        National Agriculture and Food Security Outlook (2026 - 2030)
                    </h2>
                    <p style="margin: 2px 0 0 0; font-size: 15px; color: #94A3B8;">
                        ${isView2 ? 'Crop Categorization & Deficit Loss Outlook (Food Crops, Cash Crops, & Others)' : 'Dynamic auto-rescaling 5-metric projection & red-loss hatch deficit analysis'}
                    </p>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; margin-right: 55px; flex-shrink: 0;">
                    <button id="fs-graph-switcher-btn" onclick="toggleFoodSecurityGraphView(event)" title="Switch Graph View" style="background: rgba(0, 229, 255, 0.14); border: 1px solid rgba(0, 229, 255, 0.4); color: #00E5FF; border-radius: 8px; padding: 5px 13px; cursor: pointer; display: flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 700; font-family: 'Rajdhani', sans-serif; transition: all 0.2s ease;">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="3" y1="9" x2="21" y2="9"/>
                            <line x1="9" y1="21" x2="9" y2="9"/>
                        </svg>
                        <span id="fs-graph-switcher-text">Chart View ${currentFoodSecurityGraphView}</span>
                    </button>
                    <button onclick="toggleFsCropInfoModal(event)" title="Crop Categorization Breakdown" style="background: rgba(0, 229, 255, 0.18); border: 1px solid rgba(0, 229, 255, 0.4); color: #00E5FF; font-family: 'Rajdhani', sans-serif; font-style: italic; font-weight: 800; font-size: 18px; border-radius: 8px; width: 34px; height: 34px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, transform 0.2s ease;">
                        i
                    </button>
                    <button onclick="openFoodSecurityModal(event)" title="Toggle Modal View" style="background: rgba(0, 229, 255, 0.18); border: 1px solid rgba(0, 229, 255, 0.4); border-radius: 8px; width: 34px; height: 34px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, transform 0.2s ease;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                        </svg>
                    </button>
                    <button id="fs-fullscreen-btn" onclick="toggleFoodSecurityFullscreen(event)" title="Toggle True Fullscreen (Full Extent)" style="background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.45); border-radius: 8px; width: 34px; height: 34px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s ease, transform 0.2s ease;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                        </svg>
                    </button>
                </div>
            </div>

            ${isView2 ? (() => {
                const dataV2 = foodCategorizationExcelData;
                const lastV2 = dataV2[dataV2.length - 1] || { year: 2030, population: 274.0, demand: 103.98, foodCrops: 66.37, cashCrops: 7.20, others: 0.8694 };
                const firstV2 = dataV2[0] || { population: 254.7 };
                const popGr = (((lastV2.population - firstV2.population) / firstV2.population) * 100).toFixed(1);
                const totAvail = (lastV2.foodCrops + lastV2.cashCrops + lastV2.others);
                const defGap = (lastV2.demand - totAvail);
                return `
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 10px; flex-shrink: 0;">
                    <div style="background: rgba(0, 229, 255, 0.12); border: 1px solid rgba(0, 229, 255, 0.35); border-radius: 12px; padding: 10px 14px;">
                        <div style="font-size: 13px; color: #94A3B8; font-weight: 600; text-transform: uppercase;">${lastV2.year} Population</div>
                        <div style="font-size: 24px; font-weight: 700; color: #00E5FF; margin-top: 2px;">${lastV2.population.toFixed(1)} <span style="font-size: 15px;">M</span></div>
                        <div style="font-size: 13px; color: #00E5FF; font-weight: 600;">+${popGr}% Growth</div>
                    </div>
                    <div style="background: rgba(255, 183, 3, 0.12); border: 1px solid rgba(255, 183, 3, 0.35); border-radius: 12px; padding: 10px 14px;">
                        <div style="font-size: 13px; color: #94A3B8; font-weight: 600; text-transform: uppercase;">${lastV2.year} Food Requirement</div>
                        <div style="font-size: 24px; font-weight: 700; color: #FFB703; margin-top: 2px;">${lastV2.demand.toFixed(2)} <span style="font-size: 15px;">MMT</span></div>
                        <div style="font-size: 13px; color: #FFB703; font-weight: 600;">Food Demand</div>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: 12px; padding: 10px 14px;">
                        <div style="font-size: 13px; color: #94A3B8; font-weight: 600; text-transform: uppercase;">${lastV2.year} Available Food</div>
                        <div style="font-size: 24px; font-weight: 700; color: #10B981; margin-top: 2px;">${totAvail.toFixed(2)} <span style="font-size: 15px;">MMT</span></div>
                        <div style="font-size: 13px; color: #10B981; font-weight: 600;">Food: ${lastV2.foodCrops.toFixed(1)} | Cash: ${lastV2.cashCrops.toFixed(1)} | Oth: ${lastV2.others.toFixed(1)}</div>
                    </div>
                    <div style="background: rgba(255, 183, 3, 0.16); border: 1px solid rgba(255, 183, 3, 0.45); border-radius: 12px; padding: 10px 14px;">
                        <div style="font-size: 13px; color: #94A3B8; font-weight: 600; text-transform: uppercase;">${lastV2.year} Deficit Gap</div>
                        <div style="font-size: 24px; font-weight: 700; color: #FFB703; margin-top: 2px;">${defGap.toFixed(2)} <span style="font-size: 15px;">MMT</span></div>
                        <div style="font-size: 13px; color: #FFB703;">┈ Yellow Deficit Box</div>
                    </div>
                </div>
            `;
})() : `
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 10px; flex-shrink: 0;">
                    <div style="background: rgba(0, 229, 255, 0.12); border: 1px solid rgba(0, 229, 255, 0.35); border-radius: 12px; padding: 10px 14px;">
                        <div style="font-size: 13px; color: #94A3B8; font-weight: 600; text-transform: uppercase;">2030 Population</div>
                        <div style="font-size: 24px; font-weight: 700; color: #00E5FF; margin-top: 2px;">${latestPop.toFixed(1)} <span style="font-size: 15px;">M</span></div>
                        <div style="font-size: 13px; color: #00E5FF; font-weight: 600;">+${popGrowth}% Growth</div>
                    </div>
                    <div style="background: rgba(255, 183, 3, 0.12); border: 1px solid rgba(255, 183, 3, 0.35); border-radius: 12px; padding: 10px 14px;">
                        <div style="font-size: 13px; color: #94A3B8; font-weight: 600; text-transform: uppercase;">2030 Food Deficit</div>
                        <div style="font-size: 24px; font-weight: 700; color: #FFB703; margin-top: 2px;">-${latestFoodDeficit} <span style="font-size: 15px;">MMT</span></div>
                        <div style="font-size: 13px; color: #FFB703; font-weight: 600;">Demand ${latestDem} vs Avail ${latestAvail}</div>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: 12px; padding: 10px 14px;">
                        <div style="font-size: 13px; color: #94A3B8; font-weight: 600; text-transform: uppercase;">2030 Water Shortfall</div>
                        <div style="font-size: 24px; font-weight: 700; color: #10B981; margin-top: 2px;">-${latestWaterDeficit} <span style="font-size: 15px;">MAF</span></div>
                        <div style="font-size: 13px; color: #10B981; font-weight: 600;">Req ${latestWReq.toFixed(1)} vs Avail ${latestWAvail.toFixed(1)}</div>
                    </div>
                    <div style="background: rgba(239, 68, 68, 0.16); border: 1px solid rgba(239, 68, 68, 0.45); border-radius: 12px; padding: 10px 14px;">
                        <div style="font-size: 13px; color: #94A3B8; font-weight: 600; text-transform: uppercase;">Deficit Fill</div>
                        <div style="font-size: 24px; font-weight: 700; color: #EF4444; margin-top: 2px;">Red Loss Fill</div>
                        <div style="font-size: 13px; color: #EF4444;">⚠️ Multi-Resource Shortfall</div>
                    </div>
                </div>
            `}

            <div id="fs-chart-wrapper" style="position: relative; width: 100%; flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 290px;">
                <svg id="food-security-svg" viewBox="0 0 1000 370" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; max-height: 52vh;">
                        <!-- Food Deficit Hatch Pattern (Gold border/lines with RED translucent loss fill) -->
                        <pattern id="food-hatch-pattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <rect width="10" height="10" fill="rgba(239, 68, 68, 0.38)" />
                            <line x1="0" y1="0" x2="0" y2="10" stroke="#FFB703" stroke-width="3" opacity="0.9" />
                        </pattern>
                        
                        <!-- Water Deficit Hatch Pattern (Emerald Green border/lines with RED translucent loss fill) -->
                        <pattern id="water-hatch-pattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                            <rect width="10" height="10" fill="rgba(239, 68, 68, 0.38)" />
                            <line x1="0" y1="0" x2="0" y2="10" stroke="#10B981" stroke-width="3" opacity="0.9" />
                        </pattern>
                    </defs>

                    <g id="fs-grid-group"></g>

                    <text x="24" y="175" transform="rotate(-90 24 175)" text-anchor="middle" style="fill: #94A3B8; font-size: 16px; font-weight: 700;">Food & Water Metrics (MMT / MAF)</text>
                    <text x="980" y="175" transform="rotate(90 980 175)" text-anchor="middle" style="fill: #00E5FF; font-size: 16px; font-weight: 700;">Population (Million)</text>

                    <path id="fs-pop-fill-path" class="fs-pop-fill group-pop" d="" />
                    <g id="fs-hatch-group"></g>

                    <path id="fs-line-pop-path" class="fs-line-pop group-pop" d="" />
                    <path id="fs-line-demand-path" class="fs-line-demand group-food" d="" />
                    <path id="fs-line-avail-path" class="fs-line-avail group-food" d="" />
                    <path id="fs-line-wreq-path" class="fs-line-wreq group-water" d="" />
                    <path id="fs-line-wavail-path" class="fs-line-wavail group-water" d="" />

                    <g id="fs-circles-group"></g>
                    <g id="fs-badges-group"></g>

                    <line id="fs-tracker-line" style="stroke: rgba(0, 229, 255, 0.6); stroke-width: 2px; stroke-dasharray: 4 4; display: none;" x1="0" y1="35" x2="0" y2="315" />
                    <circle id="fs-tracker-pop" class="point-actual-highlight" cx="0" cy="0" r="9" style="fill: #00E5FF; display: none;" />
                    <circle id="fs-tracker-demand" class="point-potential-highlight" cx="0" cy="0" r="9" style="fill: #FFB703; display: none;" />
                    <circle id="fs-tracker-avail" class="point-actual-highlight" cx="0" cy="0" r="9" style="fill: #FFB703; display: none;" />
                    <circle id="fs-tracker-wreq" class="point-potential-highlight" cx="0" cy="0" r="9" style="fill: #10B981; display: none;" />
                    <circle id="fs-tracker-wavail" class="point-actual-highlight" cx="0" cy="0" r="9" style="fill: #10B981; display: none;" />

                    <g id="fs-x-labels-group"></g>
                    <text x="500" y="366" text-anchor="middle" style="fill: #f8fafc; font-size: 19px; font-weight: 700;">Year</text>
                </svg>

                <div id="fs-chart-tooltip" class="wheat-chart-tooltip" style="position: absolute; opacity: 0; pointer-events: none; font-size: 16px; padding: 16px 20px; width: 380px; border: 1.5px solid rgba(0, 229, 255, 0.6); background: rgba(11, 16, 38, 0.96); z-index: 100; box-shadow: 0 12px 30px rgba(0,0,0,0.85); backdrop-filter: blur(10px); transition: opacity 0.2s ease, left 0.08s ease, top 0.08s ease;"></div>
            </div>

            ${isView2 ? `
                <div style="display: flex; justify-content: center; gap: 8px; margin-top: 10px; margin-bottom: 2px; flex-shrink: 0; z-index: 5; flex-wrap: wrap;">
                    <div class="fs-legend-btn ${!fsV2State.pop ? 'is-off' : ''}" data-v2-key="pop" onclick="toggleFsGroupV2('pop', this)" style="color:#00E5FF;"><input type="checkbox" data-v2-label-key="pop" ${fsV2LabelsState.pop ? 'checked' : ''} onclick="toggleFsV2Label('pop', event)" title="Toggle values/labels" style="cursor:pointer; accent-color:#00E5FF; margin-right:2px;"/><span style="display:inline-block; width:16px; height:0; border-top:2.5px solid #00E5FF; vertical-align:middle; margin-right:4px;"></span>Population (Million)</div>
                    <div class="fs-legend-btn ${!fsV2State.foodDem ? 'is-off' : ''}" data-v2-key="foodDem" onclick="toggleFsGroupV2('foodDem', this)" style="color:#FFB703;"><input type="checkbox" data-v2-label-key="foodDem" ${fsV2LabelsState.foodDem ? 'checked' : ''} onclick="toggleFsV2Label('foodDem', event)" title="Toggle values/labels" style="cursor:pointer; accent-color:#FFB703; margin-right:2px;"/><span style="display:inline-block; width:16px; height:0; border-top:2.5px dashed #FFB703; vertical-align:middle; margin-right:4px;"></span>Food Requirement (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.foodAvail ? 'is-off' : ''}" data-v2-key="foodAvail" onclick="toggleFsGroupV2('foodAvail', this)" style="color:#FFB703;"><input type="checkbox" data-v2-label-key="foodAvail" ${fsV2LabelsState.foodAvail ? 'checked' : ''} onclick="toggleFsV2Label('foodAvail', event)" title="Toggle values/labels" style="cursor:pointer; accent-color:#FFB703; margin-right:2px;"/><span style="display:inline-block; width:16px; height:0; border-top:2.5px solid #FFB703; vertical-align:middle; margin-right:4px;"></span>Food Availability (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.waterShort ? 'is-off' : ''}" data-v2-key="waterShort" onclick="toggleFsGroupV2('waterShort', this)" style="color:#EF4444;"><input type="checkbox" data-v2-label-key="waterShort" ${fsV2LabelsState.waterShort ? 'checked' : ''} onclick="toggleFsV2Label('waterShort', event)" title="Toggle values/labels" style="cursor:pointer; accent-color:#EF4444; margin-right:2px;"/><span style="display:inline-block; width:16px; height:0; border-top:2.5px dashed #EF4444; vertical-align:middle; margin-right:4px;"></span>Water Shortage (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.foodCrops ? 'is-off' : ''}" data-v2-key="foodCrops" onclick="toggleFsGroupV2('foodCrops', this)" style="color:#22C55E;"><input type="checkbox" data-v2-label-key="foodCrops" ${fsV2LabelsState.foodCrops ? 'checked' : ''} onclick="toggleFsV2Label('foodCrops', event)" title="Toggle labels/details" style="cursor:pointer; accent-color:#22C55E; margin-right:2px;"/><span style="display:inline-block; width:10px; height:10px; background:#22C55E; border-radius:2px; vertical-align:middle; margin-right:4px;"></span>Food Crops (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.cashCrops ? 'is-off' : ''}" data-v2-key="cashCrops" onclick="toggleFsGroupV2('cashCrops', this)" style="color:#00E5FF;"><input type="checkbox" data-v2-label-key="cashCrops" ${fsV2LabelsState.cashCrops ? 'checked' : ''} onclick="toggleFsV2Label('cashCrops', event)" title="Toggle labels/details" style="cursor:pointer; accent-color:#00E5FF; margin-right:2px;"/><span style="display:inline-block; width:10px; height:10px; background:#00E5FF; border-radius:2px; vertical-align:middle; margin-right:4px;"></span>Cash Crops (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.others ? 'is-off' : ''}" data-v2-key="others" onclick="toggleFsGroupV2('others', this)" style="color:#C084FC;"><input type="checkbox" data-v2-label-key="others" ${fsV2LabelsState.others ? 'checked' : ''} onclick="toggleFsV2Label('others', event)" title="Toggle labels/details" style="cursor:pointer; accent-color:#C084FC; margin-right:2px;"/><span style="display:inline-block; width:10px; height:10px; background:#C084FC; border-radius:2px; vertical-align:middle; margin-right:4px;"></span>Others (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.redBox ? 'is-off' : ''}" data-v2-key="redBox" onclick="toggleFsGroupV2('redBox', this)" style="color:#FFB703;"><input type="checkbox" data-v2-label-key="redBox" ${fsV2LabelsState.redBox ? 'checked' : ''} onclick="toggleFsV2Label('redBox', event)" title="Toggle deficit value" style="cursor:pointer; accent-color:#FFB703; margin-right:2px;"/><span style="display:inline-block; width:14px; height:10px; border:1.8px dotted #FFB703; background:url(#v2-yellow-hatch-pattern); vertical-align:middle; margin-right:4px;"></span>Food Deficit (MMT)</div>
                    <div class="fs-legend-btn ${!fsV2State.waterDeficitBar ? 'is-off' : ''}" data-v2-key="waterDeficitBar" onclick="toggleFsGroupV2('waterDeficitBar', this)" style="color:#EF4444;"><span style="display:inline-block; width:14px; height:10px; border:1.8px dotted #EF4444; background:url(#v2-red-hatch-pattern); vertical-align:middle; margin-right:4px;"></span>Water Deficit (MMT)</div>
                </div>
            ` : `
                <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px; margin-bottom: 2px; flex-shrink: 0; z-index: 5; flex-wrap: wrap;">
                    <div class="fs-legend-btn ${!fsInlineState.pop ? 'is-off' : ''}" onclick="toggleFsGroup('pop', this)">
                        <span style="width: 12px; height: 12px; border-radius: 50%; background: #00E5FF; display: inline-block; box-shadow: 0 0 6px #00E5FF;"></span>
                        Population (Million)
                    </div>
                    <div class="fs-legend-btn ${!fsInlineState.foodDem ? 'is-off' : ''}" onclick="toggleFsGroup('foodDem', this)">
                        <span style="width: 18px; height: 0; border-top: 2.5px dashed #FFB703; display: inline-block;"></span>
                        Food Demand
                    </div>
                    <div class="fs-legend-btn ${!fsInlineState.foodAvail ? 'is-off' : ''}" onclick="toggleFsGroup('foodAvail', this)">
                        <span style="width: 18px; height: 0; border-top: 2.5px solid #FFB703; display: inline-block;"></span>
                        Food Availability
                    </div>
                    <div class="fs-legend-btn ${!fsInlineState.foodBar ? 'is-off' : ''}" onclick="toggleFsGroup('foodBar', this)">
                        <span style="width: 13px; height: 13px; border: 1.5px solid #FFB703; background: url(#food-hatch-pattern); display: inline-block; border-radius: 3px;"></span>
                        Food Deficit Bar
                    </div>
                    <div class="fs-legend-btn ${!fsInlineState.waterReq ? 'is-off' : ''}" onclick="toggleFsGroup('waterReq', this)">
                        <span style="width: 18px; height: 0; border-top: 2.5px dashed #10B981; display: inline-block;"></span>
                        Water Requirement
                    </div>
                    <div class="fs-legend-btn ${!fsInlineState.waterAvail ? 'is-off' : ''}" onclick="toggleFsGroup('waterAvail', this)">
                        <span style="width: 18px; height: 0; border-top: 2.5px solid #10B981; display: inline-block;"></span>
                        Water Availability
                    </div>
                    <div class="fs-legend-btn ${!fsInlineState.waterBar ? 'is-off' : ''}" onclick="toggleFsGroup('waterBar', this)">
                        <span style="width: 13px; height: 13px; border: 1.5px solid #10B981; background: url(#water-hatch-pattern); display: inline-block; border-radius: 3px;"></span>
                        Water Deficit Bar
                    </div>
                </div>
            `}
        </div>
    `;

    updateFoodSecurityInlineView(displayContainer);
}

function updateFoodSecurityInlineView(displayContainer) {
    const svg = displayContainer.querySelector('#food-security-svg');
    if (!svg) return;

    if (currentFoodSecurityGraphView === 2) {
        drawFoodSecurityView2(svg, displayContainer, false);
        return;
    }

    const data = populationExcelData;
    const years = data.map(d => d.year);
    const state = fsInlineState;

    const domain = calcFsYDomain(data, state);
    const minY = domain.minY;
    const maxY = domain.maxY;
    const rangeY = maxY - minY;

    // Wide Margins: startX = 160, endX = 840 so 2026/2030 values NEVER overlap Y-axis labels
    const startX = 160;
    const endX = 840;
    const stepX = (endX - startX) / Math.max(1, years.length - 1);
    const xCoords = years.map((_, i) => startX + i * stepX);

    const getY = (val) => 315 - ((val - minY) / rangeY) * 280;

    const popY = data.map(d => getY(d.population));
    const demandY = data.map(d => getY(d.demand));
    const availY = data.map(d => getY(d.availability));
    const waterReqY = data.map(d => getY(d.waterReq));
    const waterAvailY = data.map(d => getY(d.waterAvail));

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

    const popPathD = createSmoothPath(xCoords, popY);
    const demandPathD = createSmoothPath(xCoords, demandY);
    const availPathD = createSmoothPath(xCoords, availY);
    const waterReqPathD = createSmoothPath(xCoords, waterReqY);
    const waterAvailPathD = createSmoothPath(xCoords, waterAvailY);

    const popAreaD = `${popPathD} L ${xCoords[xCoords.length - 1]},315 L ${xCoords[0]},315 Z`;

    const popLine = svg.querySelector('#fs-line-pop-path');
    const popFill = svg.querySelector('#fs-pop-fill-path');
    const demLine = svg.querySelector('#fs-line-demand-path');
    const avLine = svg.querySelector('#fs-line-avail-path');
    const wReqLine = svg.querySelector('#fs-line-wreq-path');
    const wAvLine = svg.querySelector('#fs-line-wavail-path');

    if (popLine) { popLine.setAttribute('d', popPathD); popLine.style.opacity = state.pop ? '1' : '0'; }
    if (popFill) { popFill.setAttribute('d', popAreaD); popFill.style.opacity = state.pop ? '0.12' : '0'; }
    if (demLine) { demLine.setAttribute('d', demandPathD); demLine.style.opacity = state.foodDem ? '1' : '0'; }
    if (avLine) { avLine.setAttribute('d', availPathD); avLine.style.opacity = state.foodAvail ? '1' : '0'; }
    if (wReqLine) { wReqLine.setAttribute('d', waterReqPathD); wReqLine.style.opacity = state.waterReq ? '1' : '0'; }
    if (wAvLine) { wAvLine.setAttribute('d', waterAvailPathD); wAvLine.style.opacity = state.waterAvail ? '1' : '0'; }

    // Render Full Background Grid (Horizontal Y Ticks & Vertical Year X Lines)
    const gridGroup = svg.querySelector('#fs-grid-group');
    if (gridGroup) {
        let gridHTML = '';
        domain.ticks.forEach(lbl => {
            const y = getY(lbl);
            gridHTML += `
                <line class="fs-grid-line" x1="${startX - 20}" y1="${y}" x2="${endX + 20}" y2="${y}" style="stroke: rgba(255,255,255,0.08); stroke-width: 1px;" />
                <text class="fs-axis-label" x="${startX - 60}" y="${y + 5}" text-anchor="end" style="fill: #94A3B8; font-size: 15px; font-weight: 600;">${lbl}</text>
                <text class="fs-axis-label" x="${endX + 60}" y="${y + 5}" text-anchor="start" style="fill: #00E5FF; font-size: 15px; font-weight: 600;">${lbl}</text>
            `;
        });
        xCoords.forEach(cx => {
            gridHTML += `<line class="fs-vgrid-line" x1="${cx}" y1="35" x2="${cx}" y2="315" style="stroke: rgba(255, 255, 255, 0.07); stroke-width: 1px; stroke-dasharray: 4 4;" />`;
        });
        gridGroup.innerHTML = gridHTML;
    }

    const hatchGroup = svg.querySelector('#fs-hatch-group');
    if (hatchGroup) {
        const showFoodBar = state.foodDem && state.foodAvail && state.foodBar;
        const showWaterBar = state.waterReq && state.waterAvail && state.waterBar;

        hatchGroup.innerHTML = years.map((_, idx) => {
            const cx = xCoords[idx];
            const demY = demandY[idx];
            const avY = availY[idx];
            const foodTopY = Math.min(demY, avY);
            const foodBarH = Math.max(4, Math.abs(avY - demY));

            const wReqY = waterReqY[idx];
            const wAvY = waterAvailY[idx];
            const waterTopY = Math.min(wReqY, wAvY);
            const waterBarH = Math.max(4, Math.abs(wAvY - wReqY));
            const delay = (0.35 + idx * 0.95).toFixed(2);

            let barsHTML = '';
            if (showFoodBar) {
                barsHTML += `<rect class="fs-hatch-bar group-food-bar" x="${cx - 20}" y="${foodTopY}" width="18" height="${foodBarH}" rx="4" fill="url(#food-hatch-pattern)" stroke="#FFB703" stroke-width="2" filter="url(#food-glow)" style="animation-delay: ${delay}s;" />`;
            }
            if (showWaterBar) {
                barsHTML += `<rect class="fs-hatch-bar group-water-bar" x="${cx + 2}" y="${waterTopY}" width="18" height="${waterBarH}" rx="4" fill="url(#water-hatch-pattern)" stroke="#10B981" stroke-width="2" filter="url(#water-glow)" style="animation-delay: ${delay}s;" />`;
            }
            return barsHTML;
        }).join('\n');
    }

    const circlesGroup = svg.querySelector('#fs-circles-group');
    if (circlesGroup) {
        let circlesHTML = '';
        if (state.pop) {
            popY.forEach((y, idx) => { circlesHTML += `<circle class="fs-point point-pop group-pop" cx="${xCoords[idx]}" cy="${y}" r="7" style="fill: #00E5FF; filter: url(#pop-glow); animation-delay: ${(0.20 + idx * 0.95).toFixed(2)}s;" />\n`; });
        }
        if (state.foodDem) {
            demandY.forEach((y, idx) => { circlesHTML += `<circle class="fs-point point-demand group-food" cx="${xCoords[idx]}" cy="${y}" r="7" style="fill: #FFB703; filter: url(#food-glow); animation-delay: ${(0.25 + idx * 0.95).toFixed(2)}s;" />\n`; });
        }
        if (state.foodAvail) {
            availY.forEach((y, idx) => { circlesHTML += `<circle class="fs-point point-avail group-food" cx="${xCoords[idx]}" cy="${y}" r="7" style="fill: #FFB703; filter: url(#food-glow); animation-delay: ${(0.20 + idx * 0.95).toFixed(2)}s;" />\n`; });
        }
        if (state.waterReq) {
            waterReqY.forEach((y, idx) => { circlesHTML += `<circle class="fs-point point-wreq group-water" cx="${xCoords[idx]}" cy="${y}" r="7" style="fill: #10B981; filter: url(#water-glow); animation-delay: ${(0.30 + idx * 0.95).toFixed(2)}s;" />\n`; });
        }
        if (state.waterAvail) {
            waterAvailY.forEach((y, idx) => { circlesHTML += `<circle class="fs-point point-wavail group-water" cx="${xCoords[idx]}" cy="${y}" r="7" style="fill: #10B981; filter: url(#water-glow); animation-delay: ${(0.35 + idx * 0.95).toFixed(2)}s;" />\n`; });
        }
        circlesGroup.innerHTML = circlesHTML;
    }

    // Smart Value Badges (Stagger Left/Right when Y values overlap)
    const badgesGroup = svg.querySelector('#fs-badges-group');
    if (badgesGroup) {
        let badgesHTML = '';
        data.forEach((item, idx) => {
            const cx = xCoords[idx];
            const delay = (0.45 + idx * 0.95).toFixed(2);

            if (state.pop) {
                const popYVal = popY[idx];
                badgesHTML += `
                    <g class="group-pop fs-badge" style="animation-delay: ${delay}s;">
                        <rect x="${cx - 36}" y="${popYVal - 28}" width="72" height="19" rx="4" fill="rgba(8, 12, 30, 0.92)" stroke="#00E5FF" stroke-width="1.4" filter="url(#pop-glow)"/>
                        <text x="${cx}" y="${popYVal - 14}" text-anchor="middle" fill="#00E5FF" font-size="12" font-weight="700">${item.population.toFixed(1)} M</text>
                    </g>
                `;
            }

            if (state.foodDem) {
                const demY = demandY[idx];
                badgesHTML += `
                    <g class="group-food fs-badge" style="animation-delay: ${delay}s;">
                        <rect x="${cx - 38}" y="${demY - 26}" width="76" height="19" rx="4" fill="rgba(8, 12, 30, 0.92)" stroke="#FFB703" stroke-width="1.4" filter="url(#food-glow)"/>
                        <text x="${cx}" y="${demY - 12}" text-anchor="middle" fill="#FFB703" font-size="11.5" font-weight="700">${item.demand.toFixed(1)} MMT</text>
                    </g>
                `;
            }

            const isOverlapping = state.foodAvail && state.waterReq;

            if (state.foodAvail) {
                const avY = availY[idx];
                if (isOverlapping) {
                    badgesHTML += `
                        <g class="group-food fs-badge" style="animation-delay: ${delay}s;">
                            <rect x="${cx - 72}" y="${avY - 8}" width="68" height="17" rx="4" fill="rgba(8, 12, 30, 0.92)" stroke="#FFB703" stroke-width="1.4" filter="url(#food-glow)"/>
                            <text x="${cx - 38}" y="${avY + 5}" text-anchor="middle" fill="#FFB703" font-size="11" font-weight="700">${item.availability.toFixed(1)} MMT</text>
                        </g>
                    `;
                } else {
                    badgesHTML += `
                        <g class="group-food fs-badge" style="animation-delay: ${delay}s;">
                            <rect x="${cx - 38}" y="${avY + 9}" width="76" height="19" rx="4" fill="rgba(8, 12, 30, 0.92)" stroke="#FFB703" stroke-width="1.4" filter="url(#food-glow)"/>
                            <text x="${cx}" y="${avY + 23}" text-anchor="middle" fill="#FFB703" font-size="11.5" font-weight="700">${item.availability.toFixed(1)} MMT</text>
                        </g>
                    `;
                }
            }

            if (state.waterReq) {
                const wRY = waterReqY[idx];
                if (isOverlapping) {
                    badgesHTML += `
                        <g class="group-water fs-badge" style="animation-delay: ${delay}s;">
                            <rect x="${cx + 4}" y="${wRY - 8}" width="68" height="17" rx="4" fill="rgba(8, 12, 30, 0.92)" stroke="#10B981" stroke-width="1.4" filter="url(#water-glow)"/>
                            <text x="${cx + 38}" y="${wRY + 5}" text-anchor="middle" fill="#10B981" font-size="11" font-weight="700">${item.waterReq.toFixed(1)} MAF</text>
                        </g>
                    `;
                } else {
                    badgesHTML += `
                        <g class="group-water fs-badge" style="animation-delay: ${delay}s;">
                            <rect x="${cx - 38}" y="${wRY - 28}" width="76" height="19" rx="4" fill="rgba(8, 12, 30, 0.92)" stroke="#10B981" stroke-width="1.4" filter="url(#water-glow)"/>
                            <text x="${cx}" y="${wRY - 14}" text-anchor="middle" fill="#10B981" font-size="11.5" font-weight="700">${item.waterReq.toFixed(1)} MAF</text>
                        </g>
                    `;
                }
            }

            if (state.waterAvail) {
                const wAY = waterAvailY[idx];
                badgesHTML += `
                    <g class="group-water fs-badge" style="animation-delay: ${delay}s;">
                        <rect x="${cx - 38}" y="${wAY + 9}" width="76" height="19" rx="4" fill="rgba(8, 12, 30, 0.92)" stroke="#10B981" stroke-width="1.4" filter="url(#water-glow)"/>
                        <text x="${cx}" y="${wAY + 23}" text-anchor="middle" fill="#10B981" font-size="11.5" font-weight="700">${item.waterAvail.toFixed(1)} MAF</text>
                    </g>
                `;
            }
        });
        badgesGroup.innerHTML = badgesHTML;
    }

    const xLabelsGroup = svg.querySelector('#fs-x-labels-group');
    if (xLabelsGroup) {
        xLabelsGroup.innerHTML = years.map((yr, idx) => {
            return `<text class="fs-axis-label" x="${xCoords[idx]}" y="342" text-anchor="middle" style="fill: #f8fafc; font-size: 19px; font-weight: 700;">${yr}</text>`;
        }).join('\n');
    }

    initFoodSecuritySvgInteractivity(displayContainer, data, xCoords, popY, demandY, availY, waterReqY, waterAvailY);
}

function initFoodSecuritySvgInteractivity(displayContainer, data, xCoords, popY, demandY, availY, waterReqY, waterAvailY) {
    const svg = displayContainer.querySelector('#food-security-svg');
    const tooltip = displayContainer.querySelector('#fs-chart-tooltip');
    const trackerLine = svg.querySelector('#fs-tracker-line');
    const trackerPop = svg.querySelector('#fs-tracker-pop');
    const trackerDemand = svg.querySelector('#fs-tracker-demand');
    const trackerAvail = svg.querySelector('#fs-tracker-avail');
    const trackerWReq = svg.querySelector('#fs-tracker-wreq');
    const trackerWAvail = svg.querySelector('#fs-tracker-wavail');

    if (!svg || !tooltip) return;
    const wrapper = displayContainer.querySelector('#fs-chart-wrapper') || svg.parentElement;

    svg.addEventListener('mousemove', (e) => {
        const rect = svg.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();

        const mouseX = ((e.clientX - rect.left) / rect.width) * 1000;
        const mouseY = ((e.clientY - rect.top) / rect.height) * 370;

        let closestIdx = 0;
        let minDist = Infinity;
        xCoords.forEach((cx, idx) => {
            const dist = Math.abs(mouseX - cx);
            if (dist < minDist) { minDist = dist; closestIdx = idx; }
        });

        if (mouseX >= 40 && mouseX <= 960 && mouseY >= 10 && mouseY <= 360) {
            const targetX = xCoords[closestIdx];
            const item = data[closestIdx];
            const state = fsInlineState;

            const foodDeficit = (item.demand - item.availability).toFixed(2);
            const foodDeficitPct = ((foodDeficit / item.demand) * 100).toFixed(1);

            const waterDeficit = (item.waterReq - item.waterAvail).toFixed(2);
            const waterDeficitPct = ((waterDeficit / item.waterReq) * 100).toFixed(1);

            trackerLine.setAttribute('x1', targetX);
            trackerLine.setAttribute('x2', targetX);
            trackerLine.style.display = 'block';

            if (state.pop) { trackerPop.setAttribute('cx', targetX); trackerPop.setAttribute('cy', popY[closestIdx]); trackerPop.style.display = 'block'; } else trackerPop.style.display = 'none';
            if (state.foodDem) { trackerDemand.setAttribute('cx', targetX); trackerDemand.setAttribute('cy', demandY[closestIdx]); trackerDemand.style.display = 'block'; } else trackerDemand.style.display = 'none';
            if (state.foodAvail) { trackerAvail.setAttribute('cx', targetX); trackerAvail.setAttribute('cy', availY[closestIdx]); trackerAvail.style.display = 'block'; } else trackerAvail.style.display = 'none';
            if (state.waterReq) { if (trackerWReq) { trackerWReq.setAttribute('cx', targetX); trackerWReq.setAttribute('cy', waterReqY[closestIdx]); trackerWReq.style.display = 'block'; } } else { if (trackerWReq) trackerWReq.style.display = 'none'; }
            if (state.waterAvail) { if (trackerWAvail) { trackerWAvail.setAttribute('cx', targetX); trackerWAvail.setAttribute('cy', waterAvailY[closestIdx]); trackerWAvail.style.display = 'block'; } } else { if (trackerWAvail) trackerWAvail.style.display = 'none'; }

            let tooltipHTML = `<div style="font-size:19px; font-weight:700; color:#00E5FF; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:5px; margin-bottom:6px;">${item.year} - National Agriculture & Food Security Outlook</div>`;
            
            if (state.pop) {
                tooltipHTML += `
                    <div class="wheat-tooltip-row" style="font-size:15px; margin-top:3px;">
                        <span class="wheat-tooltip-label">Population:</span>
                        <span class="wheat-tooltip-val" style="color:#00E5FF; font-weight:700;">${item.population.toFixed(1)} M</span>
                    </div>
                `;
            }
            if (state.foodDem || state.foodAvail) {
                tooltipHTML += `<div style="font-size:15px; font-weight:700; color:#FFB703; margin-top:6px; border-top:1px dashed rgba(255,183,3,0.3); padding-top:4px;">🌾 Food Requirement (MMT)</div>`;
                if (state.foodDem) {
                    tooltipHTML += `
                        <div class="wheat-tooltip-row" style="font-size:15px; margin-top:2px;">
                            <span class="wheat-tooltip-label">• Food Demand:</span>
                            <span class="wheat-tooltip-val" style="color:#FFB703; font-weight:700;">${item.demand.toFixed(2)} MMT</span>
                        </div>
                    `;
                }
                if (state.foodAvail) {
                    tooltipHTML += `
                        <div class="wheat-tooltip-row" style="font-size:15px; margin-top:2px;">
                            <span class="wheat-tooltip-label">• Food Availability:</span>
                            <span class="wheat-tooltip-val" style="color:#FFB703; font-weight:700;">${item.availability.toFixed(2)} MMT</span>
                        </div>
                    `;
                }
                if (state.foodDem && state.foodAvail && state.foodBar) {
                    tooltipHTML += `
                        <div class="wheat-tooltip-row" style="font-size:15px; margin-top:2px;">
                            <span class="wheat-tooltip-label">• Food Deficit Bar:</span>
                            <span class="wheat-tooltip-val" style="color:#EF4444; font-weight:700;">-${foodDeficit} MMT <span class="tooltip-loss-zoom">(${foodDeficitPct}%)</span></span>
                        </div>
                    `;
                }
            }
            if (state.waterReq || state.waterAvail) {
                tooltipHTML += `<div style="font-size:15px; font-weight:700; color:#10B981; margin-top:6px; border-top:1px dashed rgba(16,185,129,0.3); padding-top:4px;">💧 Water Requirement (MAF)</div>`;
                if (state.waterReq) {
                    tooltipHTML += `
                        <div class="wheat-tooltip-row" style="font-size:15px; margin-top:2px;">
                            <span class="wheat-tooltip-label">• Water Requirement:</span>
                            <span class="wheat-tooltip-val" style="color:#10B981; font-weight:700;">${item.waterReq.toFixed(2)} MAF</span>
                        </div>
                    `;
                }
                if (state.waterAvail) {
                    tooltipHTML += `
                        <div class="wheat-tooltip-row" style="font-size:15px; margin-top:2px;">
                            <span class="wheat-tooltip-label">• Water Availability:</span>
                            <span class="wheat-tooltip-val" style="color:#10B981; font-weight:700;">${item.waterAvail.toFixed(2)} MAF</span>
                        </div>
                    `;
                }
                if (state.waterReq && state.waterAvail && state.waterBar) {
                    tooltipHTML += `
                        <div class="wheat-tooltip-row" style="font-size:15px; margin-top:2px;">
                            <span class="wheat-tooltip-label">• Water Shortfall Bar:</span>
                            <span class="wheat-tooltip-val" style="color:#EF4444; font-weight:700;">-${waterDeficit} MAF <span class="tooltip-loss-zoom">(${waterDeficitPct}%)</span></span>
                        </div>
                    `;
                }
            }

            tooltip.innerHTML = tooltipHTML;

            const svgPixelX = ((targetX / 1000) * rect.width) + (rect.left - wrapperRect.left);
            const svgPixelY = ((mouseY / 370) * rect.height) + (rect.top - wrapperRect.top);

            const tooltipWidth = 380;
            const tooltipHeight = 270;

            let tooltipX = svgPixelX + 18;
            let tooltipY = svgPixelY - 30;

            if (tooltipX + tooltipWidth > wrapperRect.width - 15) tooltipX = svgPixelX - tooltipWidth - 18;
            if (tooltipX < 15) tooltipX = 15;

            if (tooltipY < 10) tooltipY = svgPixelY + 20;
            if (tooltipY + tooltipHeight > wrapperRect.height - 10) tooltipY = wrapperRect.height - tooltipHeight - 10;

            tooltip.style.left = `${tooltipX}px`;
            tooltip.style.top = `${tooltipY}px`;
            tooltip.style.opacity = '1';
        } else {
            hideFSTracker();
        }
    });

    svg.addEventListener('mouseleave', () => {
        hideFSTracker();
    });

    function hideFSTracker() {
        trackerLine.style.display = 'none';
        trackerPop.style.display = 'none';
        trackerDemand.style.display = 'none';
        trackerAvail.style.display = 'none';
        if (trackerWReq) trackerWReq.style.display = 'none';
        if (trackerWAvail) trackerWAvail.style.display = 'none';
        tooltip.style.opacity = '0';
    }
}

// Food Security Graph Switcher State & Handler
let currentFoodSecurityGraphView = 1;

function toggleFoodSecurityGraphView(e) {
    if (e) e.stopPropagation();
    const nextView = currentFoodSecurityGraphView === 1 ? 2 : 1;
    switchFoodSecurityChartView(nextView);
}

function toggleChartCardFullscreen(cardIdOrEl, e) {
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    const card = typeof cardIdOrEl === 'string' ? document.getElementById(cardIdOrEl) : cardIdOrEl;
    if (!card) return;

    const currentFs = document.fullscreenElement || 
                      document.webkitFullscreenElement || 
                      document.mozFullScreenElement || 
                      document.msFullscreenElement;

    if (!currentFs || currentFs !== card) {
        if (card.requestFullscreen) {
            card.requestFullscreen();
        } else if (card.webkitRequestFullscreen) {
            card.webkitRequestFullscreen();
        } else if (card.mozRequestFullScreen) {
            card.mozRequestFullScreen();
        } else if (card.msRequestFullscreen) {
            card.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    setTimeout(() => {
        if (window.map) window.map.resize();
        if (typeof resizeFoodSecurityCharts === 'function') {
            resizeFoodSecurityCharts();
        }
    }, 200);
}

window.toggleChartCardFullscreen = toggleChartCardFullscreen;
window.toggleFoodSecurityGraphView = toggleFoodSecurityGraphView;
window.toggleFoodSecurityCardFullscreen = function (e) {
    toggleChartCardFullscreen('food-security-graph-card', e);
};

function drawFoodSecurityView2(svg, displayContainer, isModal) {
    const data = foodCategorizationExcelData;
    const viewBoxW = isModal ? 1200 : 1000;
    const viewBoxH = isModal ? 520 : 410;
    svg.setAttribute('viewBox', `0 0 ${viewBoxW} ${viewBoxH}`);

    // 5. Extended Y-Axis: Reduced top and bottom padding to stretch graph vertically UPWARDS and DOWNWARDS
    const paddingLeft = isModal ? 190 : 150;
    const paddingRight = isModal ? 190 : 150;
    const paddingTop = isModal ? 28 : 24;
    const paddingBottom = isModal ? 48 : 40;

    const chartW = viewBoxW - paddingLeft - paddingRight;
    const chartH = viewBoxH - paddingTop - paddingBottom;

    const years = data.map(d => d.year);
    const numPoints = data.length;
    const xCoords = years.map((_, idx) => paddingLeft + (idx / (numPoints - 1)) * chartW);

    // 5. Left Y-Axis Scale (Crops/Foods MMT): Exactly 8 values from 0 to 140 with step 20
    const maxMMT = 140;
    const mmtTicks = [0, 20, 40, 60, 80, 100, 120, 140];

    function getMmtY(val) {
        return paddingTop + chartH - (val / 140) * chartH;
    }

    // 5. Right Y-Axis Scale (Population Million): Exactly 8 values from 0 to 280 with step 40
    const minPop = 0;
    const maxPop = 280;
    const popTicks = [0, 40, 80, 120, 160, 200, 240, 280];

    function getPopY(val) {
        return paddingTop + chartH - (val / 280) * chartH;
    }

    // Population Points & Path
    const popPts = data.map((d, i) => ({ x: xCoords[i], y: getPopY(d.population), val: d.population }));
    let popPathD = `M ${popPts[0].x} ${popPts[0].y}`;
    for (let i = 0; i < popPts.length - 1; i++) {
        const p0 = popPts[i], p1 = popPts[i + 1];
        const cpX = (p0.x + p1.x) / 2;
        popPathD += ` C ${cpX} ${p0.y}, ${cpX} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    // Food Requirement (Demand) Points & Path (Dashed Yellow #FFB703)
    const demPts = data.map((d, i) => ({ x: xCoords[i], y: getMmtY(d.demand), val: d.demand }));
    let demPathD = `M ${demPts[0].x} ${demPts[0].y}`;
    for (let i = 0; i < demPts.length - 1; i++) {
        const p0 = demPts[i], p1 = demPts[i + 1];
        const cpX = (p0.x + p1.x) / 2;
        demPathD += ` C ${cpX} ${p0.y}, ${cpX} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    // Food Availability Points & Path (Solid Yellow #FFB703)
    const availPts = data.map((d, i) => {
        const totalAvail = (d.foodCrops || 73.746) + (d.cashCrops || 7.83) + (d.others || 1.279);
        return { x: xCoords[i], y: getMmtY(totalAvail), val: totalAvail };
    });
    let availPathD = `M ${availPts[0].x} ${availPts[0].y}`;
    for (let i = 0; i < availPts.length - 1; i++) {
        const p0 = availPts[i], p1 = availPts[i + 1];
        const cpX = (p0.x + p1.x) / 2;
        availPathD += ` C ${cpX} ${p0.y}, ${cpX} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    // Water Shortage Points & Path
    const waterShortPts = data.map((d, i) => {
        const val = (d.waterShortage !== undefined && !isNaN(d.waterShortage)) ? d.waterShortage : [80.27425, 77.30585, 75.70345, 73.89105, 71.89865][i];
        return { x: xCoords[i], y: getMmtY(val), val: val };
    });
    let waterShortPathD = `M ${waterShortPts[0].x} ${waterShortPts[0].y}`;
    for (let i = 0; i < waterShortPts.length - 1; i++) {
        const p0 = waterShortPts[i], p1 = waterShortPts[i + 1];
        const cpX = (p0.x + p1.x) / 2;
        waterShortPathD += ` C ${cpX} ${p0.y}, ${cpX} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    const baseY = getMmtY(0);
    const totalBarWidth = isModal ? 140 : 105;

    // Tick X coordinates: far away from bars, near Y-axis titles
    const leftTickX = isModal ? 80 : 65;
    const rightTickX = viewBoxW - (isModal ? 80 : 65);
    const leftTitleX = isModal ? 30 : 25;
    const rightTitleX = viewBoxW - (isModal ? 30 : 25);

    let html = `
        <style>
            #food-security-svg text,
            #food-security-svg rect,
            #food-security-svg circle,
            #food-security-svg path,
            #food-security-svg line,
            #food-security-svg g {
                transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            d 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            cx 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            cy 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            x 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            y 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            width 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                            opacity 0.4s ease;
            }

            .fs-water-deficit-blink {
                animation: fsWaterBlink 0.6s ease-in-out infinite alternate !important;
            }
            @keyframes fsWaterBlink {
                0% { opacity: 0.25; }
                100% { opacity: 1.0; }
            }
        </style>

        <defs>
            <filter id="v2-pop-glow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#00E5FF" flood-opacity="0.9" /></filter>
            <filter id="v2-dem-glow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FFB703" flood-opacity="0.9" /></filter>
            <filter id="v2-water-glow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#EF4444" flood-opacity="0.9" /></filter>
            <filter id="v2-yellow-glow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#FFB703" flood-opacity="0.9" /></filter>
            <filter id="v2-green-glow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#22C55E" flood-opacity="0.9" /></filter>
            <filter id="v2-oth-glow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#C084FC" flood-opacity="0.9" /></filter>

            <!-- Yellow Hatch Pattern for Deficit Box -->
            <pattern id="v2-yellow-hatch-pattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="10" height="10" fill="rgba(255, 183, 3, 0.08)" />
                <line x1="0" y1="0" x2="0" y2="10" stroke="#FFB703" stroke-width="2" opacity="0.85" />
            </pattern>

            <!-- Red Hatch Pattern for Water Deficit Bar -->
            <pattern id="v2-red-hatch-pattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                <rect width="10" height="10" fill="rgba(239, 68, 68, 0.28)" />
                <line x1="0" y1="0" x2="0" y2="10" stroke="#EF4444" stroke-width="2" opacity="0.85" />
            </pattern>

            <linearGradient id="grad-food" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#22C55E" stop-opacity="0.95" />
                <stop offset="100%" stop-color="#15803D" stop-opacity="0.8" />
            </linearGradient>
            <linearGradient id="grad-cash" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.95" />
                <stop offset="100%" stop-color="#0284C7" stop-opacity="0.8" />
            </linearGradient>
            <linearGradient id="grad-oth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#C084FC" stop-opacity="0.95" />
                <stop offset="100%" stop-color="#7E22CE" stop-opacity="0.8" />
            </linearGradient>

            <marker id="v2-arrow-head" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFFFFF" />
            </marker>
        </defs>

        <g id="v2-grid-group">
            ${mmtTicks.map((v, i) => {
                const gy = getMmtY(v);
                const popVal = popTicks[i];
                return `
                    <line x1="${paddingLeft}" y1="${gy}" x2="${viewBoxW - paddingRight}" y2="${gy}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3 3" stroke-width="1"/>
                    
                    <!-- Left Y-Axis Scale Label (8 values: 0, 20, 40, 60, 80, 100, 120, 140) -->
                    <text x="${leftTickX}" y="${gy + 4}" text-anchor="end" fill="#94A3B8" font-size="${isModal ? 15 : 12.5}" font-weight="700">${v}</text>
                    
                    <!-- Right Y-Axis Scale Label (8 values: 0, 40, 80, 120, 160, 200, 240, 280) -->
                    <text x="${rightTickX}" y="${gy + 4}" text-anchor="start" fill="#00E5FF" font-size="${isModal ? 15 : 12.5}" font-weight="700">${popVal}</text>
                `;
            }).join('')}
            
            <!-- Left Y-Axis Title -->
            <text x="${leftTitleX}" y="${paddingTop + chartH / 2}" transform="rotate(-90 ${leftTitleX} ${paddingTop + chartH / 2})" text-anchor="middle" fill="#94A3B8" font-size="${isModal ? 16 : 13.5}" font-weight="700">CROPS / FOOD (MMT)</text>

            <!-- Right Y-Axis Title -->
            <text x="${rightTitleX}" y="${paddingTop + chartH / 2}" transform="rotate(90 ${rightTitleX} ${paddingTop + chartH / 2})" text-anchor="middle" fill="#00E5FF" font-size="${isModal ? 16 : 13.5}" font-weight="700">Population (Million)</text>
        </g>
    `;

    let barsHTML = '<g id="v2-bars-group">';
    let deficitBoxesHTML = '<g id="v2-deficit-boxes-group">';
    let waterDeficitBarsHTML = '<g id="v2-water-deficit-group">';
    let innerCirclesHTML = '<g id="v2-inner-circles-group">';

    data.forEach((d, idx) => {
        const cx = xCoords[idx];
        const barLeftX = cx - totalBarWidth / 2;

        const foodVal = d.foodCrops || 73.746;
        const cashVal = d.cashCrops || 7.83;
        const othVal = d.others || 1.279;
        const totalAvail = foodVal + cashVal + othVal;

        const yBarTop = getMmtY(totalAvail);
        const barH = baseY - yBarTop;

        const wFood = totalBarWidth * (foodVal / totalAvail);
        const wCash = totalBarWidth * (cashVal / totalAvail);
        const wOth = totalBarWidth * (othVal / totalAvail);

        const xFood = barLeftX;
        const xCash = xFood + wFood;
        const xOth = xCash + wCash;

        const demY = demPts[idx].y;

        // Food Deficit Box (Yellow dotted hatched) & Deficit Value
        if (demY < yBarTop) {
            const hatchH = yBarTop - demY;
            const deficitVal = d.demand - totalAvail;
            const lossPct = ((deficitVal / d.demand) * 100).toFixed(1);
            const circleR = isModal ? 22 : 18;

            deficitBoxesHTML += `
                <g class="fs-badge fs-deficit-group" style="animation-delay: ${0.2 + idx * 0.1}s; cursor: pointer; display: ${fsV2State.redBox ? '' : 'none'};">
                    <title>Deficit: ${deficitVal.toFixed(2)} MMT (${lossPct}% Loss from ${d.demand.toFixed(2)} MMT Demand)</title>
                    <rect class="fs-hatch-bar" x="${barLeftX}" y="${demY}" width="${totalBarWidth}" height="${hatchH}" fill="url(#v2-yellow-hatch-pattern)" stroke="#FFB703" stroke-width="2" stroke-dasharray="4 4" rx="5" filter="url(#v2-yellow-glow)" />
                    <g style="display: ${fsV2LabelsState.redBox ? '' : 'none'};">
                        <circle cx="${cx}" cy="${(demY + yBarTop) / 2}" r="${circleR}" fill="rgba(15, 23, 42, 0.96)" stroke="#FFB703" stroke-width="2.5" stroke-dasharray="3 3" filter="url(#v2-yellow-glow)"/>
                        <text x="${cx}" y="${(demY + yBarTop) / 2 + (isModal ? 4 : 3.5)}" text-anchor="middle" fill="#FFFFFF" stroke="#000000" stroke-width="${isModal ? 2.2 : 1.8}" paint-order="stroke fill" filter="url(#v2-yellow-glow)" font-size="${isModal ? 12 : 10}" font-weight="900">${lossPct}%</text>
                    </g>
                </g>
            `;
        }

        // Water Deficit Bar
        const wShortY = waterShortPts[idx].y;
        const wTopY = Math.min(wShortY, yBarTop);
        const wHatchH = Math.abs(wShortY - yBarTop);

        if (wHatchH > 2) {
            waterDeficitBarsHTML += `
                <g class="fs-badge fs-water-deficit-group" style="animation-delay: ${0.25 + idx * 0.1}s; display: ${fsV2State.waterDeficitBar ? '' : 'none'};">
                    <rect class="fs-hatch-bar fs-water-deficit-blink" x="${barLeftX}" y="${wTopY}" width="${totalBarWidth}" height="${wHatchH}" fill="url(#v2-red-hatch-pattern)" stroke="#EF4444" stroke-width="2" stroke-dasharray="3 3" rx="5" filter="url(#v2-water-glow)" />
                </g>
            `;
        }

        barsHTML += `
            <rect class="fs-hatch-bar" x="${xFood}" y="${yBarTop}" width="${wFood}" height="${barH}" fill="url(#grad-food)" stroke="rgba(34, 197, 94, 0.75)" stroke-width="1.2" rx="3" style="display: ${fsV2State.foodCrops ? '' : 'none'};"/>
            <rect class="fs-hatch-bar" x="${xCash}" y="${yBarTop}" width="${wCash}" height="${barH}" fill="url(#grad-cash)" stroke="rgba(0, 229, 255, 0.75)" stroke-width="1.2" rx="3" style="display: ${fsV2State.cashCrops ? '' : 'none'};"/>
            <rect class="fs-hatch-bar" x="${xOth}" y="${yBarTop}" width="${wOth}" height="${barH}" fill="url(#grad-oth)" stroke="rgba(168, 85, 247, 0.75)" stroke-width="1.2" rx="3" style="display: ${fsV2State.others ? '' : 'none'};"/>
        `;

        const foodCenterX = xFood + wFood / 2;
        const c1Y = yBarTop + barH * 0.22;
        const r1 = isModal ? 26 : 22;
        const c2Y = yBarTop + barH * 0.52;
        const r2 = isModal ? 22 : 18;
        const c3Y = yBarTop + barH * 0.82;
        const r3 = isModal ? 18 : 15;

        const targetCashX = xCash + wCash / 2;
        const targetOthX = xOth + wOth / 2;

        innerCirclesHTML += `
            <g class="fs-badge" style="animation-delay: ${0.3 + idx * 0.1}s;">
                <!-- Food Crops -->
                <g style="display: ${fsV2State.foodCrops ? '' : 'none'};">
                    <g style="display: ${fsV2LabelsState.foodCrops ? '' : 'none'};">
                        <circle cx="${foodCenterX}" cy="${c1Y}" r="${r1}" fill="rgba(8, 12, 30, 0.95)" stroke="#22C55E" stroke-width="2.5" filter="url(#v2-green-glow)"/>
                        <text x="${foodCenterX}" y="${c1Y + (isModal ? 5 : 4.5)}" text-anchor="middle" fill="#22C55E" stroke="#000000" stroke-width="3" paint-order="stroke fill" filter="url(#v2-green-glow)" font-size="${isModal ? 15 : 13}" font-weight="800">${foodVal.toFixed(1)}</text>
                        <g>
                            <rect x="${foodCenterX - (isModal ? 48 : 40)}" y="${c1Y + r1 + 6}" width="${isModal ? 96 : 80}" height="${isModal ? 22 : 18}" rx="5" fill="rgba(8, 12, 30, 0.94)" stroke="#22C55E" stroke-width="1.4" filter="url(#v2-green-glow)"/>
                            <text x="${foodCenterX}" y="${c1Y + r1 + (isModal ? 21 : 18.5)}" text-anchor="middle" fill="#A7F3D0" stroke="#000000" stroke-width="2.5" paint-order="stroke fill" filter="url(#v2-green-glow)" font-size="${isModal ? 12 : 10.5}" font-weight="800">Food Crops</text>
                        </g>
                    </g>
                </g>

                <!-- Cash Crops -->
                <g style="display: ${fsV2State.cashCrops ? '' : 'none'};">
                    <g style="display: ${fsV2LabelsState.cashCrops ? '' : 'none'};">
                        <circle cx="${foodCenterX}" cy="${c2Y}" r="${r2}" fill="rgba(8, 12, 30, 0.95)" stroke="#00E5FF" stroke-width="2.2" filter="url(#v2-pop-glow)"/>
                        <text x="${foodCenterX}" y="${c2Y + (isModal ? 4.5 : 4)}" text-anchor="middle" fill="#00E5FF" stroke="#000000" stroke-width="3" paint-order="stroke fill" filter="url(#v2-pop-glow)" font-size="${isModal ? 13.5 : 11.5}" font-weight="800">${cashVal.toFixed(1)}</text>
                        <g>
                            <rect x="${foodCenterX - (isModal ? 48 : 40)}" y="${c2Y + r2 + 6}" width="${isModal ? 96 : 80}" height="${isModal ? 22 : 18}" rx="5" fill="rgba(8, 12, 30, 0.94)" stroke="#00E5FF" stroke-width="1.4" filter="url(#v2-pop-glow)"/>
                            <text x="${foodCenterX}" y="${c2Y + r2 + (isModal ? 21 : 18.5)}" text-anchor="middle" fill="#67E8F9" stroke="#000000" stroke-width="2.5" paint-order="stroke fill" filter="url(#v2-pop-glow)" font-size="${isModal ? 12 : 10.5}" font-weight="800">Cash Crops</text>
                        </g>
                        <line x1="${foodCenterX + r2 + 2}" y1="${c2Y}" x2="${targetCashX}" y2="${c2Y}" stroke="#FFFFFF" stroke-width="1.8" marker-end="url(#v2-arrow-head)"/>
                    </g>
                </g>

                <!-- Others -->
                <g style="display: ${fsV2State.others ? '' : 'none'};">
                    <g style="display: ${fsV2LabelsState.others ? '' : 'none'};">
                        <circle cx="${foodCenterX}" cy="${c3Y}" r="${r3}" fill="rgba(8, 12, 30, 0.95)" stroke="#C084FC" stroke-width="2" filter="url(#v2-oth-glow)"/>
                        <text x="${foodCenterX}" y="${c3Y + (isModal ? 4.5 : 4)}" text-anchor="middle" fill="#C084FC" stroke="#000000" stroke-width="3" paint-order="stroke fill" filter="url(#v2-oth-glow)" font-size="${isModal ? 12.5 : 10.5}" font-weight="800">${othVal.toFixed(1)}</text>
                        <g>
                            <rect x="${foodCenterX - (isModal ? 40 : 33)}" y="${c3Y + r3 + 6}" width="${isModal ? 80 : 66}" height="${isModal ? 22 : 18}" rx="5" fill="rgba(8, 12, 30, 0.94)" stroke="#C084FC" stroke-width="1.4" filter="url(#v2-oth-glow)"/>
                            <text x="${foodCenterX}" y="${c3Y + r3 + (isModal ? 21 : 18.5)}" text-anchor="middle" fill="#E9D5FF" stroke="#000000" stroke-width="2.5" paint-order="stroke fill" filter="url(#v2-oth-glow)" font-size="${isModal ? 11.5 : 10}" font-weight="800">Others</text>
                        </g>
                        <line x1="${foodCenterX + r3 + 2}" y1="${c3Y}" x2="${targetOthX}" y2="${c3Y}" stroke="#FFFFFF" stroke-width="1.8" marker-end="url(#v2-arrow-head)"/>
                    </g>
                </g>
            </g>
        `;
    });

    barsHTML += '</g>';
    deficitBoxesHTML += '</g>';
    waterDeficitBarsHTML += '</g>';
    innerCirclesHTML += '</g>';

    // Population Line Values
    let popHTML = `
        <g style="display: ${fsV2State.pop ? '' : 'none'};">
            <path class="fs-line-pop" d="${popPathD}" stroke="#00E5FF" stroke-width="${isModal ? 5 : 4}" fill="none" filter="url(#v2-pop-glow)"/>
            <g id="v2-pop-nodes">
                ${popPts.map((pt, i) => `
                    <circle class="fs-point" cx="${pt.x}" cy="${pt.y}" r="${isModal ? 6 : 5}" fill="#00E5FF" stroke="#080C1E" stroke-width="2"/>
                    <g class="fs-badge" style="display: ${fsV2LabelsState.pop ? '' : 'none'};">
                        <rect x="${pt.x - (isModal ? 42 : 36)}" y="${pt.y - (isModal ? 34 : 28)}" width="${isModal ? 84 : 72}" height="${isModal ? 22 : 19}" rx="5" fill="rgba(8, 12, 30, 0.94)" stroke="#00E5FF" stroke-width="1.8" filter="url(#v2-pop-glow)"/>
                        <text x="${pt.x}" y="${pt.y - (isModal ? 19 : 14.5)}" text-anchor="middle" fill="#00E5FF" stroke="#000000" stroke-width="3" paint-order="stroke fill" filter="url(#v2-pop-glow)" font-size="${isModal ? 13.5 : 11.5}" font-weight="800">${pt.val.toFixed(1)} M</text>
                    </g>
                `).join('')}
            </g>
        </g>
    `;

    // Food Requirement Line Values
    let demHTML = `
        <g style="display: ${fsV2State.foodDem ? '' : 'none'};">
            <path class="fs-line-demand" d="${demPathD}" stroke="#FFB703" stroke-width="${isModal ? 4.5 : 3.5}" stroke-dasharray="7 5" fill="none" filter="url(#v2-dem-glow)"/>
            <g id="v2-dem-nodes">
                ${demPts.map((pt, i) => `
                    <circle class="fs-point" cx="${pt.x}" cy="${pt.y}" r="${isModal ? 5.5 : 4.5}" fill="#FFB703" stroke="#080C1E" stroke-width="2"/>
                    <g class="fs-badge" style="display: ${fsV2LabelsState.foodDem ? '' : 'none'};">
                        <rect x="${pt.x - (isModal ? 34 : 28)}" y="${pt.y - (isModal ? 34 : 28)}" width="${isModal ? 68 : 56}" height="${isModal ? 22 : 19}" rx="5" fill="rgba(8, 12, 30, 0.94)" stroke="#FFB703" stroke-width="1.8" filter="url(#v2-dem-glow)"/>
                        <text x="${pt.x}" y="${pt.y - (isModal ? 19 : 14.5)}" text-anchor="middle" fill="#FFB703" stroke="#000000" stroke-width="3" paint-order="stroke fill" filter="url(#v2-dem-glow)" font-size="${isModal ? 13.5 : 11.5}" font-weight="800">${pt.val.toFixed(1)}</text>
                    </g>
                `).join('')}
            </g>
        </g>
    `;

    // Food Availability Line Values
    let availLineHTML = `
        <g style="display: ${fsV2State.foodAvail ? '' : 'none'};">
            <path class="fs-line-avail" d="${availPathD}" stroke="#FFB703" stroke-width="${isModal ? 4 : 3}" fill="none" filter="url(#v2-dem-glow)"/>
            <g id="v2-avail-nodes">
                ${availPts.map((pt, i) => {
                    const boxW = isModal ? 68 : 56;
                    const boxH = isModal ? 22 : 19;
                    const boxX = pt.x + (isModal ? 14 : 10);
                    const boxY = pt.y - boxH / 2 - 2;
                    return `
                        <circle class="fs-point" cx="${pt.x}" cy="${pt.y}" r="${isModal ? 5.5 : 4.5}" fill="#FFB703" stroke="#080C1E" stroke-width="2"/>
                        <g class="fs-badge" style="display: ${fsV2LabelsState.foodAvail ? '' : 'none'};">
                            <rect x="${boxX}" y="${boxY}" width="${boxW}" height="${boxH}" rx="5" fill="rgba(8, 12, 30, 0.94)" stroke="#FFB703" stroke-width="1.8" filter="url(#v2-dem-glow)"/>
                            <text x="${boxX + boxW / 2}" y="${boxY + (isModal ? 15.5 : 13.5)}" text-anchor="middle" fill="#FFB703" stroke="#000000" stroke-width="3" paint-order="stroke fill" filter="url(#v2-dem-glow)" font-size="${isModal ? 13.5 : 11.5}" font-weight="800">${pt.val.toFixed(1)}</text>
                        </g>
                    `;
                }).join('')}
            </g>
        </g>
    `;

    // Water Shortage Line Values
    let waterShortHTML = `
        <g style="display: ${fsV2State.waterShort ? '' : 'none'};">
            <path class="fs-line-wreq" d="${waterShortPathD}" stroke="#EF4444" stroke-width="${isModal ? 4 : 3}" stroke-dasharray="6 4" fill="none" style="stroke: #EF4444 !important;" filter="url(#v2-water-glow)"/>
            <g id="v2-water-nodes">
                ${waterShortPts.map((pt, i) => {
                    const boxW = isModal ? 58 : 48;
                    const boxH = isModal ? 22 : 19;
                    const boxX = pt.x + (isModal ? 12 : 8);
                    const boxY = pt.y + 10;
                    return `
                        <circle class="fs-point" cx="${pt.x}" cy="${pt.y}" r="${isModal ? 5.5 : 4.5}" fill="#EF4444" stroke="#080C1E" stroke-width="2"/>
                        <g class="fs-badge" style="display: ${fsV2LabelsState.waterShort ? '' : 'none'};">
                            <rect x="${boxX}" y="${boxY}" width="${boxW}" height="${boxH}" rx="5" fill="rgba(8, 12, 30, 0.94)" stroke="#EF4444" stroke-width="1.8" filter="url(#v2-water-glow)"/>
                            <text x="${boxX + (isModal ? 29 : 24)}" y="${boxY + (isModal ? 15.5 : 13.5)}" text-anchor="middle" fill="#EF4444" stroke="#000000" stroke-width="3" paint-order="stroke fill" filter="url(#v2-water-glow)" font-size="${isModal ? 13 : 11}" font-weight="800">${pt.val.toFixed(1)}</text>
                        </g>
                    `;
                }).join('')}
            </g>
        </g>
    `;

    // X-Axis Labels
    let xAxisHTML = `
        <g id="v2-xaxis-group">
            ${years.map((yr, idx) => `
                <text x="${xCoords[idx]}" y="${baseY + 38}" text-anchor="middle" fill="#f8fafc" font-size="${isModal ? 20 : 17}" font-weight="800">${yr}</text>
            `).join('')}
        </g>
    `;

    let hoverTrackerHTML = `
        <line id="v2-tracker-line" style="stroke: rgba(0, 229, 255, 0.6); stroke-width: 2px; stroke-dasharray: 4 4; display: none; pointer-events: none;" x1="0" y1="${paddingTop}" x2="0" y2="${baseY}" />
    `;

    svg.innerHTML = html + barsHTML + deficitBoxesHTML + waterDeficitBarsHTML + innerCirclesHTML + popHTML + demHTML + availLineHTML + waterShortHTML + xAxisHTML + hoverTrackerHTML;

    initFoodSecurityView2Hover(displayContainer, data, xCoords, popPts, demPts, availPts, waterShortPts);
}
function initFoodSecurityView2Hover(displayContainer, data, xCoords, popPts, demPts, availPts, waterShortPts) {
    const svg = displayContainer.querySelector('#food-security-svg') || displayContainer.querySelector('#modal-fs-svg');
    const tooltip = displayContainer.querySelector('#fs-chart-tooltip') || displayContainer.querySelector('#modal-fs-tooltip');
    const trackerLine = svg ? svg.querySelector('#v2-tracker-line') : null;

    if (!svg || !tooltip) return;
    const wrapper = displayContainer.querySelector('#fs-chart-wrapper') || displayContainer.querySelector('#modal-fs-wrapper') || svg.parentElement;

    // Apply enhanced container padding & backdrop filter for tooltip with large fonts
    tooltip.style.padding = '22px 28px';
    tooltip.style.borderRadius = '14px';
    tooltip.style.background = 'rgba(6, 12, 28, 0.97)';
    tooltip.style.border = '2px solid rgba(0, 229, 255, 0.6)';
    tooltip.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 229, 255, 0.3)';
    tooltip.style.minWidth = '580px';
    tooltip.style.whiteSpace = 'nowrap';

    svg.addEventListener('mousemove', (e) => {
        const rect = svg.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();

        const viewBox = svg.getAttribute('viewBox').split(' ');
        const vbW = parseFloat(viewBox[2]);
        const vbH = parseFloat(viewBox[3]);

        const mouseX = ((e.clientX - rect.left) / rect.width) * vbW;
        const mouseY = ((e.clientY - rect.top) / rect.height) * vbH;

        let closestIdx = 0;
        let minDist = Infinity;
        xCoords.forEach((cx, idx) => {
            const dist = Math.abs(mouseX - cx);
            if (dist < minDist) { minDist = dist; closestIdx = idx; }
        });

        if (mouseX >= 50 && mouseX <= vbW - 50 && mouseY >= 10 && mouseY <= vbH - 20) {
            const targetX = xCoords[closestIdx];
            const item = data[closestIdx];

            if (trackerLine) {
                trackerLine.setAttribute('x1', targetX);
                trackerLine.setAttribute('x2', targetX);
                trackerLine.style.display = 'block';
            }

            const foodVal = item.foodCrops || 73.746;
            const cashVal = item.cashCrops || 7.83;
            const othVal = item.others || 1.279;
            const totalAvail = foodVal + cashVal + othVal;

            const foodPct = ((foodVal / totalAvail) * 100).toFixed(1);
            const cashPct = ((cashVal / totalAvail) * 100).toFixed(1);
            const othPct = ((othVal / totalAvail) * 100).toFixed(1);

            const foodDeficit = (item.demand - totalAvail).toFixed(2);
            const foodDeficitPct = ((foodDeficit / item.demand) * 100).toFixed(1);

            const waterShortage = (item.waterShortage !== undefined && !isNaN(item.waterShortage)) ? item.waterShortage : 80.27;
            const waterDeficitVal = Math.abs(waterShortage - totalAvail).toFixed(2);

            let tooltipHTML = `<div style="font-size:24px; font-weight:800; color:#00E5FF; border-bottom:2px solid rgba(0,229,255,0.4); padding-bottom:10px; margin-bottom:14px; font-family:'Rajdhani', sans-serif; letter-spacing:0.5px;">${item.year} - Food Security Outlook</div>`;

            if (fsV2State.pop) {
                tooltipHTML += `
                    <div style="font-size:19px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#94A3B8; font-weight:700;">• Population:</span>
                        <span style="color:#00E5FF; font-weight:800; font-size:21px;">${item.population.toFixed(1)} Million</span>
                    </div>
                `;
            }

            if (fsV2State.foodDem) {
                tooltipHTML += `
                    <div style="font-size:19px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#94A3B8; font-weight:700;">• Food Requirement:</span>
                        <span style="color:#FFB703; font-weight:800; font-size:21px;">${item.demand.toFixed(2)} MMT</span>
                    </div>
                `;
            }

            if (fsV2State.foodAvail) {
                tooltipHTML += `
                    <div style="font-size:19px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#94A3B8; font-weight:700;">• Food Availability:</span>
                        <span style="color:#FFB703; font-weight:800; font-size:21px;">${totalAvail.toFixed(2)} MMT</span>
                    </div>
                `;
            }

            if (fsV2State.foodCrops || fsV2State.cashCrops || fsV2State.others) {
                tooltipHTML += `<div style="font-size:20px; font-weight:800; color:#22C55E; margin-top:12px; border-top:1.5px solid rgba(255,255,255,0.2); padding-top:10px; font-family:'Rajdhani', sans-serif;">🌾 Crop Production Breakdown</div>`;
                if (fsV2State.foodCrops) {
                    tooltipHTML += `
                        <div style="font-size:18px; margin-top:5px; display:flex; justify-content:space-between; align-items:center;">
                            <span style="color:#A7F3D0; font-weight:700;">- Food Crops:</span>
                            <span style="color:#22C55E; font-weight:800; font-size:19.5px;">${foodVal.toFixed(2)} MMT (${foodPct}%)</span>
                        </div>
                    `;
                }
                if (fsV2State.cashCrops) {
                    tooltipHTML += `
                        <div style="font-size:18px; margin-top:5px; display:flex; justify-content:space-between; align-items:center;">
                            <span style="color:#67E8F9; font-weight:700;">- Cash Crops:</span>
                            <span style="color:#00E5FF; font-weight:800; font-size:19.5px;">${cashVal.toFixed(2)} MMT (${cashPct}%)</span>
                        </div>
                    `;
                }
                if (fsV2State.others) {
                    tooltipHTML += `
                        <div style="font-size:18px; margin-top:5px; display:flex; justify-content:space-between; align-items:center;">
                            <span style="color:#E9D5FF; font-weight:700;">- Others:</span>
                            <span style="color:#C084FC; font-weight:800; font-size:19.5px;">${othVal.toFixed(2)} MMT (${othPct}%)</span>
                        </div>
                    `;
                }
            }

            if (fsV2State.redBox && item.demand > totalAvail) {
                tooltipHTML += `
                    <div style="font-size:19px; margin-top:12px; border-top:1.5px dashed rgba(255,183,3,0.6); padding-top:10px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#FFB703; font-weight:800;">⚠️ Food Deficit:</span>
                        <span style="color:#FFB703; font-weight:800; font-size:21px;">-${foodDeficit} MMT (${foodDeficitPct}%)</span>
                    </div>
                `;
            }

            if (fsV2State.waterShort) {
                const wsAvailPct = ((waterShortage / totalAvail) * 100).toFixed(1);
                tooltipHTML += `
                    <div style="font-size:19px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#94A3B8; font-weight:700;">💧 Water Shortage:</span>
                        <span style="color:#EF4444; font-weight:800; font-size:21px;">${waterShortage.toFixed(2)} MMT (${wsAvailPct}%)</span>
                    </div>
                `;
            }

            if (fsV2State.waterDeficitBar) {
                tooltipHTML += `
                    <div style="font-size:19px; margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#EF4444; font-weight:700;">💧 Water Deficit:</span>
                        <span style="color:#EF4444; font-weight:800; font-size:21px;">-${waterDeficitVal} MMT</span>
                    </div>
                `;
            }

            tooltip.innerHTML = tooltipHTML;

            const svgPixelX = ((targetX / vbW) * rect.width) + (rect.left - wrapperRect.left);
            const svgPixelY = ((mouseY / vbH) * rect.height) + (rect.top - wrapperRect.top);

            const tooltipWidth = 600;
            const tooltipHeight = 420;

            let tooltipX = svgPixelX + 25;
            let tooltipY = svgPixelY - 40;

            if (tooltipX + tooltipWidth > wrapperRect.width - 15) tooltipX = svgPixelX - tooltipWidth - 25;
            if (tooltipX < 15) tooltipX = 15;

            if (tooltipY < 10) tooltipY = svgPixelY + 20;
            if (tooltipY + tooltipHeight > wrapperRect.height - 10) tooltipY = wrapperRect.height - tooltipHeight - 10;

            tooltip.style.left = `${tooltipX}px`;
            tooltip.style.top = `${tooltipY}px`;
            tooltip.style.opacity = '1';
        } else {
            if (trackerLine) trackerLine.style.display = 'none';
            tooltip.style.opacity = '0';
        }
    });

    svg.addEventListener('mouseleave', () => {
        if (trackerLine) trackerLine.style.display = 'none';
        tooltip.style.opacity = '0';
    });
}

function toggleFsCropInfoModal(e) {
    if (e) e.stopPropagation();
    
    // Find parent container (either modal content box or inline card)
    const activeModal = document.getElementById('food-security-modal');
    const isModalVisible = activeModal && activeModal.style.display !== 'none' && activeModal.style.opacity === '1';
    
    const parentContainer = isModalVisible 
        ? document.getElementById('food-security-modal-content') || activeModal
        : document.querySelector('.food-security-container') || document.querySelector('.portal-iframe-container');

    if (!parentContainer) return;

    // Ensure parent container has relative positioning
    if (getComputedStyle(parentContainer).position === 'static') {
        parentContainer.style.position = 'relative';
    }

    let popover = document.getElementById('fs-crop-info-popover');
    
    if (!popover) {
        popover = document.createElement('div');
        popover.id = 'fs-crop-info-popover';
        popover.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 1.5px solid rgba(0,229,255,0.35); padding-bottom: 8px; margin-bottom: 12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                    <span style="display:inline-flex; width:24px; height:24px; border-radius:50%; background:rgba(0,229,255,0.2); border:1px solid #00E5FF; color:#00E5FF; font-style:italic; font-weight:800; font-size:15px; align-items:center; justify-content:center;">i</span>
                    <h4 style="margin:0; font-size:17px; font-weight:800; color:#00E5FF; letter-spacing:0.5px; text-transform:uppercase;">Crop Categorization List</h4>
                </div>
                <button onclick="closeFsCropInfoModal(event)" style="background:rgba(255,255,255,0.12); border:none; color:#fff; font-size:18px; font-weight:bold; width:28px; height:28px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s;">✕</button>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px; font-size:14px;">
                <div style="background:rgba(34,197,94,0.12); border:1px solid rgba(34,197,94,0.35); border-radius:8px; padding:9px 12px;">
                    <div style="color:#22C55E; font-weight:800; font-size:15px; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                        <span style="display:inline-block; width:10px; height:10px; background:#22C55E; border-radius:2px;"></span>
                        Food Crops
                    </div>
                    <div style="color:#e2e8f0; font-weight:600; line-height:1.4;">Wheat, Rice, Maize, Pulses, Fruits and Vegetables</div>
                </div>
                <div style="background:rgba(0,229,255,0.12); border:1px solid rgba(0,229,255,0.35); border-radius:8px; padding:9px 12px;">
                    <div style="color:#00E5FF; font-weight:800; font-size:15px; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                        <span style="display:inline-block; width:10px; height:10px; background:#00E5FF; border-radius:2px;"></span>
                        Cash Crops
                    </div>
                    <div style="color:#e2e8f0; font-weight:600; line-height:1.4;">Cotton, Tobacco, Sugarcane</div>
                </div>
                <div style="background:rgba(192,132,252,0.12); border:1px solid rgba(192,132,252,0.35); border-radius:8px; padding:9px 12px;">
                    <div style="color:#C084FC; font-weight:800; font-size:15px; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                        <span style="display:inline-block; width:10px; height:10px; background:#C084FC; border-radius:2px;"></span>
                        Others
                    </div>
                    <div style="color:#e2e8f0; font-weight:600; line-height:1.4;">Bajra, Jowar, Barley, Fodder, Rapeseed & Mustard, Sesamum</div>
                </div>
            </div>
        `;
    }

    popover.style.cssText = 'position:absolute; top: 58px; right: 24px; z-index: 99999; width: 340px; background: rgba(8, 14, 32, 0.98); border: 1.5px solid rgba(0, 229, 255, 0.6); border-radius: 12px; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.95), 0 0 25px rgba(0, 229, 255, 0.25); backdrop-filter: blur(12px); padding: 14px 16px; color: #f8fafc; font-family: "Rajdhani", sans-serif; opacity: 0; transition: opacity 0.25s ease, transform 0.25s ease; transform: translateY(-8px); pointer-events: auto;';

    if (popover.parentElement !== parentContainer) {
        parentContainer.appendChild(popover);
    }

    const isHidden = popover.style.display === 'none' || popover.style.opacity === '0';
    if (isHidden) {
        popover.style.display = 'block';
        requestAnimationFrame(() => {
            popover.style.opacity = '1';
            popover.style.transform = 'translateY(0)';
        });
    } else {
        closeFsCropInfoModal(e);
    }
}

function closeFsCropInfoModal(e) {
    if (e) e.stopPropagation();
    const popover = document.getElementById('fs-crop-info-popover');
    if (popover) {
        popover.style.opacity = '0';
        popover.style.transform = 'translateY(-8px)';
        setTimeout(() => { 
            popover.style.display = 'none'; 
        }, 250);
    }
}
window.toggleFsCropInfoModal = toggleFsCropInfoModal;
window.closeFsCropInfoModal = closeFsCropInfoModal;
