// Chart Container JavaScript (Gantt Chart)

let CROP_DATA = [];
let currentZone = 'all';
let isZonePlaying = false;
let zonePlayTimer = null;

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function injectGanttStyles() {
    if (document.getElementById('gantt-chart-styles')) return;

    const style = document.createElement('style');
    style.id = 'gantt-chart-styles';
    style.textContent = `
        .gantt-shell {
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            background: transparent;
        }

        .gantt-container {
            height: 100%;
            margin: 0;
            background: white;
            border-radius: 0;
            box-shadow: none;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .gantt-header {
            background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
            color: white;
            padding: 10px;
            padding-right: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 14px;
        }

        .gantt-header h1 {
            font-size: 22px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 0;
        }

        .gantt-header-logo {
            width: 40px;
            height: 40px;
            object-fit: contain;
        }

        .gantt-filter {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .gantt-filter-label {
            font-size: 12px;
            font-weight: 500;
            opacity: 0.9;
        }

        .gantt-filter select {
            padding: 8px 12px;
            font-size: 12px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.95);
            color: #2e7d32;
            font-weight: 500;
            cursor: pointer;
            outline: none;
            min-width: 200px;
            transition: all 0.3s ease;
        }

        .gantt-play-btn {
            width: 34px;
            height: 34px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.35);
            background: rgba(255, 255, 255, 0.95);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #2e7d32;
            transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        }

        .gantt-play-btn:hover {
            transform: translateY(-1px);
            background: #ffffff;
        }

        .gantt-play-btn svg {
            width: 16px;
            height: 16px;
        }

        .gantt-play-btn .icon-pause {
            display: none;
        }

        .gantt-play-btn[aria-pressed="true"] .icon-play {
            display: none;
        }

        .gantt-play-btn[aria-pressed="true"] .icon-pause {
            display: block;
        }

        .gantt-filter select:hover,
        .gantt-filter select:focus {
            border-color: rgba(255, 255, 255, 0.8);
            background: white;
        }

        .gantt-chart-container {
            overflow: auto;
            flex: 1 1 auto;
        }

        .gantt-legend {
            display: flex;
            gap: 14px;
            margin: 0;
            padding: 6px 10px;
            background: rgba(255, 255, 255);
            border-radius: 999px;
            flex-wrap: wrap;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
        }

        .gantt-legend-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: #f4fff4;
        }

        .gantt-legend-color {
            width: 28px;
            height: 14px;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        .gantt-sowing-color {
            background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
        }

        .gantt-harvest-color {
            background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%);
        }

        .gantt-window-hilly-color {
            background: rgba(255, 193, 7, 0.35);
            border: 1px solid rgba(184, 134, 11, 0.55);
        }

        .gantt-window-riverine-color {
            background: rgba(156, 39, 176, 0.2);
            border: 1px solid rgba(106, 27, 154, 0.5);
        }

        .gantt-chart {
            display: grid;
            grid-template-columns: 220px repeat(12, 1fr);
            gap: 0;
            width: 100%;
            min-width: 1200px;
        }

        .gantt-header-cell {
            padding: 12px 6px;
            text-align: center;
            font-weight: 600;
            font-size: 12px;
            color: #424242;
            border-bottom: 3px solid #4caf50;
            position: sticky;
            top: 0;
            background: #f5f5f5;
            z-index: 10;
        }

        .gantt-header-cell:first-child {
            text-align: left;
            padding-left: 16px;
            min-width: 200px;
            border-right: 2px solid #e0e0e0;
        }

        .gantt-row {
            display: contents;
        }

        .gantt-row .gantt-cell {
            transition: background-color 0.2s ease;
        }

        .gantt-row .gantt-cell:hover {
            background: #f9fdf9;
        }

        .gantt-row:nth-of-type(even) .gantt-cell { background: #fafafa; }
        .gantt-row:nth-of-type(even) .gantt-cell:hover { background: #f9fdf9; }

        .gantt-cell {
            display: table-cell;
            padding: 10px 0;
            border-bottom: 1px solid #e0e0e0;
            vertical-align: middle;
        }

        .gantt-crop-name {
            padding: 10px 12px;
            font-weight: 500;
            color: #2e7d32;
            font-size: 14px;
            border-right: 2px solid #e0e0e0;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .gantt-crop-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 13px;
            flex-shrink: 0;
            border: none;
            cursor: pointer;
        }

        .gantt-modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(10, 24, 32, 0.55);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            z-index: 20000;
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: opacity 0.25s ease, visibility 0.25s ease;
        }

        .gantt-modal-backdrop.show {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .gantt-modal {
            width: min(640px, 96vw);
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            border: 1px solid rgba(46, 100, 99, 0.25);
            opacity: 0;
            transform: translateY(10px) scale(0.98);
            transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .gantt-modal-backdrop.show .gantt-modal {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        .gantt-modal-header {
            background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
            color: #ffffff;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .gantt-modal-title {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .gantt-modal-title h2 {
            margin: 0;
            font-size: 20px;
            font-weight: 700;
        }

        .gantt-modal-subtitle {
            font-size: 12px;
            opacity: 0.9;
        }

        .gantt-modal-close {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: #ffffff;
            width: 32px;
            height: 32px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s ease;
        }

        .gantt-modal-close:hover {
            background: rgba(255, 255, 255, 0.35);
        }

        .gantt-modal-body {
            padding: 20px;
            display: grid;
            gap: 14px;
        }

        .gantt-modal-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px 24px;
        }

        .gantt-modal-label {
            font-size: 12px;
            font-weight: 600;
            color: #3b4a4a;
            text-transform: uppercase;
            letter-spacing: 0.4px;
            margin-bottom: 6px;
        }

        .gantt-modal-value {
            font-size: 14px;
            color: #1d2b2b;
        }

        .gantt-modal-section {
            border-top: 1px solid rgba(46, 100, 99, 0.15);
            padding-top: 12px;
        }

        .gantt-modal-section-title {
            font-size: 12px;
            font-weight: 700;
            color: #2e7d32;
            text-transform: uppercase;
            letter-spacing: 0.4px;
            margin-bottom: 6px;
        }

        .gantt-modal-section-body {
            font-size: 13px;
            color: #2b3a3a;
            line-height: 1.5;
            white-space: pre-wrap;
        }

        @media (max-width: 600px) {
            .gantt-modal-grid {
                grid-template-columns: 1fr;
            }
        }

        .gantt-months-wrapper {
            position: relative;
            padding: 4px;
            width: 100%;
        }

        .gantt-months {
            display: flex;
            width: 100%;
            height: 28px;
        }

        .gantt-month-grid {
            flex: 1 1 0;
            border-right: 1px solid rgba(224, 224, 224, 0.9);
            box-sizing: border-box;
            background: linear-gradient(180deg, rgba(76,175,80,0.02), transparent);
        }

        .gantt-month-grid:last-child {
            border-right: none;
        }

        .gantt-overlay {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            pointer-events: none;
        }

        .gantt-window-band {
            position: absolute;
            top: 0;
            bottom: 0;
            border-radius: 4px;
            z-index: 1;
        }

        .gantt-window-hilly {
            background: rgba(255, 193, 7, 0.2);
            border-left: 1px solid rgba(184, 134, 11, 0.45);
            border-right: 1px solid rgba(184, 134, 11, 0.45);
        }

        .gantt-window-riverine {
            background: rgba(156, 39, 176, 0.14);
            border-left: 1px solid rgba(106, 27, 154, 0.42);
            border-right: 1px solid rgba(106, 27, 154, 0.42);
        }

        .gantt-overlay .gantt-bar {
            pointer-events: auto;
        }

        .gantt-bar {
            position: absolute;
            min-width: 6px;
            height: 42.5%;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        .gantt-bar:hover {
            transform: scaleY(1.3);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
            z-index: 5;
        }

        .gantt-sowing-bar {
            background: linear-gradient(135deg, #4caf50 0%, #66bb6a 100%);
            top: 5%;
        }

        .gantt-harvest-bar {
            background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%);
            top: 52.5%;
        }

        .gantt-tooltip {
            position: fixed;
            background: rgba(33, 33, 33, 0.95);
            color: white;
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 12px;
            pointer-events: none;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.2s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            max-width: 240px;
        }

        .gantt-tooltip.show {
            opacity: 1;
        }

        .gantt-tooltip-title {
            font-weight: 600;
            margin-bottom: 4px;
            color: #4caf50;
        }

        .gantt-tooltip-dates {
            font-size: 11px;
            opacity: 0.9;
        }

        .gantt-state {
            padding: 40px 20px;
            text-align: center;
            color: #757575;
            font-size: 14px;
        }

        .gantt-state.loading {
            color: #4caf50;
            font-size: 16px;
        }

        .gantt-state.error {
            color: #d32f2f;
        }

        @media (max-width: 768px) {
            .gantt-header {
                padding: 16px;
            }

            .gantt-header h1 {
                font-size: 18px;
            }

            .gantt-chart-container {
                padding: 12px;
            }

            .gantt-filter select {
                min-width: 180px;
            }
        }
    `;
    document.head.appendChild(style);
}

function ensureXlsxLoaded() {
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

function buildGanttMarkup() {
    const chartsSection = document.getElementById('charts-section');
    if (!chartsSection) {
        console.error('Charts section not found');
        return;
    }

    chartsSection.innerHTML = `
        <div class="gantt-shell">
            <button class="charts-fullscreen-btn" onclick="toggleChartsFullscreen()" title="Toggle Fullscreen">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
            </button>
            <div class="gantt-container">
                <div class="gantt-header">
                    <h1>
                        <img class="gantt-header-logo" src="./Data/ndma_logo.png" alt="NDMA Logo" />
                        Crop Calendar - Pakistan
                    </h1>
                    <div class="gantt-filter">
                        <label class="gantt-filter-label" for="ganttZoneFilter">AgroEcological Zone:</label>
                        <select id="ganttZoneFilter">
                            <option value="all">All Zones</option>
                        </select>
                        <button class="gantt-play-btn" id="ganttZonePlay" type="button" aria-pressed="false" title="Play zones">
                            <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M8 5v14l11-7z"></path>
                            </svg>
                            <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M6 5h4v14H6zm8 0h4v14h-4z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="gantt-legend">
                        <div class="gantt-legend-item">
                            <div class="gantt-legend-color gantt-sowing-color"></div>
                            <span style="color: #4caf50;"><strong>Sowing Period</strong></span>

                        </div>
                        <div class="gantt-legend-item">
                            <div class="gantt-legend-color gantt-harvest-color"></div>
                            <span style="color: #2a4c6e;"><strong>Harvesting Period</strong></span>
                        </div>
                        <div class="gantt-legend-item">
                            <div class="gantt-legend-color gantt-window-hilly-color"></div>
                            <span style="color: #7a5a00;"><strong>Hilly Area Rain Floods</strong></span>
                        </div>
                        <div class="gantt-legend-item">
                            <div class="gantt-legend-color gantt-window-riverine-color"></div>
                            <span style="color: #5b2a72;"><strong>Riverine Flood</strong></span>
                        </div>
                    </div>
                </div>

                <div class="gantt-chart-container" id="ganttChartContainer">
                    <div id="ganttChart" class="gantt-state loading">Loading crop data...</div>
                </div>
            </div>
        </div>
        <div class="gantt-tooltip" id="ganttTooltip">
            <div class="gantt-tooltip-title"></div>
            <div class="gantt-tooltip-dates"></div>
        </div>
        <div class="gantt-modal-backdrop" id="ganttCropModal" aria-hidden="true">
            <div class="gantt-modal" role="dialog" aria-modal="true" aria-labelledby="ganttModalTitle">
                <div class="gantt-modal-header">
                    <div class="gantt-modal-title">
                        <h2 id="ganttModalTitle">Crop Details</h2>
                        <div class="gantt-modal-subtitle" id="ganttModalRegion">Region:</div>
                    </div>
                    <button class="gantt-modal-close" type="button" aria-label="Close modal">&times;</button>
                </div>
                <div class="gantt-modal-body">
                    <div class="gantt-modal-grid">
                        <div>
                            <div class="gantt-modal-label">Sowing Rate</div>
                            <div class="gantt-modal-value" id="ganttModalSowingRate">-</div>
                        </div>
                        <div>
                            <div class="gantt-modal-label">Period</div>
                            <div class="gantt-modal-value" id="ganttModalPeriod">-</div>
                        </div>
                    </div>
                    <div id="ganttModalExtra"></div>
                </div>
            </div>
        </div>
    `;
}

async function loadLocalExcel() {
    const chartDiv = document.getElementById('ganttChart');
    try {
        const response = await fetch('Data/Crop_Calendar_Data_All.xlsx');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        processExcelData(jsonData);

        initGantt();
    } catch (error) {
        if (chartDiv) {
            chartDiv.className = 'gantt-state error';
            chartDiv.innerHTML = `⚠️ Could not load Data/Crop_Calendar_Data_All.xlsx: ${error.message}`;
        }
    }
}

function processExcelData(data) {
    CROP_DATA = [];

    for (let i = 2; i < data.length; i++) {
        const row = data[i];

        const crop = row[0];
        const zone = row[1];

        if (!crop || !zone) continue;

        const earlySowDay = row[3];
        const earlySowMonth = row[4];
        const lateSowDay = row[5];
        const lateSowMonth = row[6];

        const additionalInfo = row[2];
        const sowingRateValue = row[7];
        const sowingRateUnit = row[8];
        const periodValue = row[9];
        const periodUnit = row[10];
        const agroZoneDescription = row[15];
        const agroZonePractices = row[16];
        const agroZoneUnits = row[17];
        const comments = row[18];

        const earlyHarvDay = row[11];
        const earlyHarvMonth = row[12];
        const lateHarvDay = row[13];
        const lateHarvMonth = row[14];

        if (!earlySowDay || !earlySowMonth || !lateSowDay || !lateSowMonth ||
            !earlyHarvDay || !earlyHarvMonth || !lateHarvDay || !lateHarvMonth) {
            continue;
        }

        CROP_DATA.push({
            crop: String(crop),
            zone: String(zone),
            additionalInfo: additionalInfo ?? '',
            sowingRateValue: sowingRateValue ?? '',
            sowingRateUnit: sowingRateUnit ?? '',
            periodValue: periodValue ?? '',
            periodUnit: periodUnit ?? '',
            agroZoneDescription: agroZoneDescription ?? '',
            agroZonePractices: agroZonePractices ?? '',
            agroZoneUnits: agroZoneUnits ?? '',
            comments: comments ?? '',
            sowing: {
                early: {
                    day: Number(earlySowDay),
                    month: Number(earlySowMonth)
                },
                late: {
                    day: Number(lateSowDay),
                    month: Number(lateSowMonth)
                }
            },
            harvest: {
                early: {
                    day: Number(earlyHarvDay),
                    month: Number(earlyHarvMonth)
                },
                late: {
                    day: Number(lateHarvDay),
                    month: Number(lateHarvMonth)
                }
            }
        });
    }
}

function initGantt() {
    populateZoneFilter();
    renderChart();
    setupEventListeners();
}

function populateZoneFilter() {
    const zones = [...new Set(CROP_DATA.map(d => d.zone))].sort();
    const select = document.getElementById('ganttZoneFilter');

    if (!select) return;
    select.innerHTML = '<option value="all">All Zones</option>';

    zones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone;
        option.textContent = zone;
        select.appendChild(option);
    });
}

function setupEventListeners() {
    const select = document.getElementById('ganttZoneFilter');
    if (select) {
        select.addEventListener('change', (e) => {
            currentZone = e.target.value;
            renderChart();
        });
    }

    const playBtn = document.getElementById('ganttZonePlay');
    if (playBtn) {
        playBtn.addEventListener('click', toggleZonePlayback);
    }
}

function getZoneOptions(select) {
    return Array.from(select.options)
        .map(option => option.value)
        .filter(value => value && value !== 'all');
}

function updateZonePlayButton(isPlaying) {
    const playBtn = document.getElementById('ganttZonePlay');
    if (!playBtn) return;
    playBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
    playBtn.title = isPlaying ? 'Pause zones' : 'Play zones';
}

function startZonePlayback() {
    const select = document.getElementById('ganttZoneFilter');
    if (!select) return;
    const zones = getZoneOptions(select);
    if (!zones.length) return;

    isZonePlaying = true;
    updateZonePlayButton(true);

    if (!zones.includes(select.value)) {
        select.value = zones[0];
        currentZone = select.value;
        renderChart();
    }

    zonePlayTimer = setInterval(() => {
        const currentZones = getZoneOptions(select);
        if (!currentZones.length) return;
        let currentIndex = currentZones.indexOf(select.value);
        if (currentIndex === -1) currentIndex = 0;
        const nextIndex = (currentIndex + 1) % currentZones.length;
        select.value = currentZones[nextIndex];
        currentZone = select.value;
        renderChart();
    }, 2000);
}

function stopZonePlayback() {
    isZonePlaying = false;
    updateZonePlayButton(false);
    if (zonePlayTimer) {
        clearInterval(zonePlayTimer);
        zonePlayTimer = null;
    }
}

function toggleZonePlayback() {
    if (isZonePlaying) {
        stopZonePlayback();
    } else {
        startZonePlayback();
    }
}

function getFilteredData() {
    if (currentZone === 'all') return CROP_DATA;
    return CROP_DATA.filter(d => d.zone === currentZone);
}

function formatDate(day, month) {
    return `${day} ${MONTHS[month - 1]}`;
}

function getDayOfYear(day, month) {
    let doy = 0;
    for (let i = 0; i < month - 1; i++) {
        doy += MONTH_DAYS[i];
    }
    doy += Number(day);
    return doy;
}

function getCropInitial(cropName) {
    return cropName.charAt(0).toUpperCase();
}

function normalizeText(value) {
    if (value === null || value === undefined) return '';
    const cleaned = String(value).trim();
    return cleaned === '-' ? '' : cleaned;
}

function formatValueWithUnit(value, unit) {
    const trimmedValue = normalizeText(value);
    const trimmedUnit = normalizeText(unit);
    if (!trimmedValue) return '-';
    return trimmedUnit ? `${trimmedValue} ${trimmedUnit}` : trimmedValue;
}

function getCropDetails(cropName) {
    const cleaned = String(cropName).trim();
    if (currentZone === 'all') {
        return CROP_DATA.find(item => String(item.crop).trim() === cleaned) || null;
    }
    return CROP_DATA.find(item => String(item.crop).trim() === cleaned && item.zone === currentZone) || null;
}

function getCalendarWindowStyle(startDay, startMonth, endDay, endMonth) {
    const start = getDayOfYear(startDay, startMonth);
    const end = getDayOfYear(endDay, endMonth);
    const left = ((start - 1) / 365) * 100;
    const width = ((end - start + 1) / 365) * 100;
    return { left, width };
}

function renderChart() {
    const data = getFilteredData();
    const chartDiv = document.getElementById('ganttChart');

    if (!chartDiv) return;

    if (data.length === 0) {
        chartDiv.className = 'gantt-state';
        chartDiv.innerHTML = '📊 No crop data available for the selected zone.';
        return;
    }

    let html = '<div class="gantt-chart">';
    html += '<div class="gantt-header-cell">Crop</div>';
    MONTHS.forEach(month => {
        html += `<div class="gantt-header-cell">${month}</div>`;
    });

    const groups = {};
    data.forEach(item => {
        const key = String(item.crop).trim();
        if (!groups[key]) {
            groups[key] = { crop: key, sowRanges: [], harvRanges: [] };
        }

        let sowStart = getDayOfYear(item.sowing.early.day, item.sowing.early.month);
        let sowEnd = getDayOfYear(item.sowing.late.day, item.sowing.late.month);
        if (sowEnd < sowStart) sowEnd += 365;
        groups[key].sowRanges.push({ start: sowStart, end: sowEnd });

        let harvStart = getDayOfYear(item.harvest.early.day, item.harvest.early.month);
        let harvEnd = getDayOfYear(item.harvest.late.day, item.harvest.late.month);
        if (harvEnd < harvStart) harvEnd += 365;
        groups[key].harvRanges.push({ start: harvStart, end: harvEnd });
    });

    function mergeRanges(ranges) {
        if (!ranges || ranges.length === 0) return [];
        ranges.sort((a, b) => a.start - b.start);
        const merged = [];
        let cur = { start: ranges[0].start, end: ranges[0].end };
        for (let i = 1; i < ranges.length; i++) {
            const range = ranges[i];
            if (range.start <= cur.end + 1) {
                cur.end = Math.max(cur.end, range.end);
            } else {
                merged.push(cur);
                cur = { start: range.start, end: range.end };
            }
        }
        merged.push(cur);
        return merged;
    }

    function normalizeAndSplit(merged) {
        const parts = [];
        merged.forEach(range => {
            if (range.end <= 365) {
                parts.push({ start: range.start, end: range.end });
            } else {
                parts.push({ start: range.start, end: 365 });
                parts.push({ start: 1, end: range.end - 365 });
            }
        });
        return mergeRanges(parts);
    }

    function doyToDate(doy) {
        let monthIndex = 0;
        let day = doy;
        while (monthIndex < MONTH_DAYS.length && day > MONTH_DAYS[monthIndex]) {
            day -= MONTH_DAYS[monthIndex];
            monthIndex++;
        }
        return { day: day, month: monthIndex + 1 };
    }

    const floodWindows = [
        {
            className: 'gantt-window-hilly',
            ...getCalendarWindowStyle(1, 7, 10, 8)
        },
        {
            className: 'gantt-window-riverine',
            ...getCalendarWindowStyle(15, 8, 20, 9)
        }
    ];

    Object.values(groups).forEach(group => {
        const mergedSow = normalizeAndSplit(mergeRanges(group.sowRanges));
        const mergedHarv = normalizeAndSplit(mergeRanges(group.harvRanges));

        html += '<div class="gantt-row">';
        html += `
            <div class="gantt-cell gantt-crop-name">
                <button class="gantt-crop-icon" type="button" data-crop="${group.crop}" aria-label="Open ${group.crop} details">
                    ${getCropInitial(group.crop)}
                </button>
                <span>${group.crop}</span>
            </div>
        `;

        html += '<div class="gantt-cell gantt-months-wrapper" style="grid-column: 2 / span 12;">';
        html += '<div class="gantt-months" aria-hidden="true">';
        MONTHS.forEach(() => {
            html += '<div class="gantt-month-grid"></div>';
        });
        html += '</div>';

        html += '<div class="gantt-overlay">';

        floodWindows.forEach(window => {
            html += `
                <div class="gantt-window-band ${window.className}"
                     style="left: ${window.left}%; width: ${window.width}%"
                     aria-hidden="true"></div>
            `;
        });

        mergedSow.forEach(seg => {
            const left = ((seg.start - 1) / 365) * 100;
            const width = ((seg.end - seg.start + 1) / 365) * 100;
            const startDate = doyToDate(seg.start);
            const endDate = doyToDate(seg.end);
            html += `
                <div class="gantt-bar gantt-sowing-bar"
                     style="left: ${left}%; width: ${width}%"
                     data-type="Sowing"
                     data-start="${formatDate(startDate.day, startDate.month)}"
                     data-end="${formatDate(endDate.day, endDate.month)}"
                     data-crop="${group.crop}"></div>
            `;
        });

        mergedHarv.forEach(seg => {
            const left = ((seg.start - 1) / 365) * 100;
            const width = ((seg.end - seg.start + 1) / 365) * 100;
            const startDate = doyToDate(seg.start);
            const endDate = doyToDate(seg.end);
            html += `
                <div class="gantt-bar gantt-harvest-bar"
                     style="left: ${left}%; width: ${width}%"
                     data-type="Harvesting"
                     data-start="${formatDate(startDate.day, startDate.month)}"
                     data-end="${formatDate(endDate.day, endDate.month)}"
                     data-crop="${group.crop}"></div>
            `;
        });

        html += '</div>';
        html += '</div>';
        html += '</div>';
    });

    html += '</div>';
    chartDiv.className = '';
    chartDiv.innerHTML = html;

    addBarHoverEffects();
    addCropIconClickHandlers();
}

function addBarHoverEffects() {
    const bars = document.querySelectorAll('.gantt-bar');
    const tooltip = document.getElementById('ganttTooltip');

    if (!tooltip) return;

    bars.forEach(bar => {
        bar.addEventListener('mouseenter', (e) => {
            const target = e.target;
            tooltip.querySelector('.gantt-tooltip-title').textContent = `${target.dataset.crop} - ${target.dataset.type}`;
            tooltip.querySelector('.gantt-tooltip-dates').textContent = `${target.dataset.start} to ${target.dataset.end}`;
            tooltip.classList.add('show');
        });

        bar.addEventListener('mousemove', (e) => {
            tooltip.style.left = (e.clientX + 15) + 'px';
            tooltip.style.top = (e.clientY + 15) + 'px';
        });

        bar.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });
    });
}

function addCropIconClickHandlers() {
    const icons = document.querySelectorAll('.gantt-crop-icon');
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const cropName = icon.dataset.crop;
            openCropModal(cropName);
        });
    });
}

function openCropModal(cropName) {
    const modal = document.getElementById('ganttCropModal');
    if (!modal) return;

    const details = getCropDetails(cropName);
    const region = currentZone === 'all' ? 'All Zones' : currentZone;
    const resolvedRegion = details?.zone ? details.zone : region;

    const titleEl = document.getElementById('ganttModalTitle');
    const regionEl = document.getElementById('ganttModalRegion');
    const sowingEl = document.getElementById('ganttModalSowingRate');
    const periodEl = document.getElementById('ganttModalPeriod');
    const extraEl = document.getElementById('ganttModalExtra');

    if (titleEl) titleEl.textContent = details?.crop || cropName;
    if (regionEl) regionEl.textContent = `Region: ${resolvedRegion}`;
    if (sowingEl) sowingEl.textContent = formatValueWithUnit(details?.sowingRateValue, details?.sowingRateUnit);
    if (periodEl) periodEl.textContent = formatValueWithUnit(details?.periodValue, details?.periodUnit);

    if (extraEl) {
        extraEl.innerHTML = '';
        const sections = [
            { label: 'Additional Information', value: details?.additionalInfo },
            { label: 'AgroEcological Zone Description', value: details?.agroZoneDescription },
            { label: 'AgroEcological Zone Practices', value: details?.agroZonePractices },
            { label: 'AgroEcological Zone Units', value: details?.agroZoneUnits },
            { label: 'Comments', value: details?.comments }
        ];

        sections.forEach(section => {
            const text = normalizeText(section.value);
            if (!text) return;
            const wrapper = document.createElement('div');
            wrapper.className = 'gantt-modal-section';

            const title = document.createElement('div');
            title.className = 'gantt-modal-section-title';
            title.textContent = section.label;

            const body = document.createElement('div');
            body.className = 'gantt-modal-section-body';
            body.textContent = text;

            wrapper.appendChild(title);
            wrapper.appendChild(body);
            extraEl.appendChild(wrapper);
        });
    }

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
}

function closeCropModal() {
    const modal = document.getElementById('ganttCropModal');
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
}

function setupModalEvents() {
    const modal = document.getElementById('ganttCropModal');
    if (!modal) return;

    const closeButton = modal.querySelector('.gantt-modal-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeCropModal);
    }

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeCropModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeCropModal();
        }
    });
}

async function initChart() {
    injectGanttStyles();
    buildGanttMarkup();
    setupModalEvents();

    try {
        await ensureXlsxLoaded();
    } catch (error) {
        const chartDiv = document.getElementById('ganttChart');
        if (chartDiv) {
            chartDiv.className = 'gantt-state error';
            chartDiv.textContent = error.message;
        }
        return;
    }

    setupEventListeners();
    loadLocalExcel();
}

// Make functions available globally
window.initChart = initChart;