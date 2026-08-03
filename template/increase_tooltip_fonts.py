import sys
import os

filepath = 'template/portals_container.js'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Old tooltip HTML building block in initFoodSecurityView2Hover
old_tooltip_block = '''let tooltipHTML = `<div style="font-size:18px; font-weight:700; color:#00E5FF; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:5px; margin-bottom:6px;">${item.year} - Agriculture & Food Security Outlook</div>`;

            if (fsV2State.pop) {
                tooltipHTML += `
                    <div style="font-size:14px; margin-top:3px; display:flex; justify-content:space-between;">
                        <span style="color:#94A3B8; font-weight:600;">• Population:</span>
                        <span style="color:#00E5FF; font-weight:700;">${item.population.toFixed(1)} Million</span>
                    </div>
                `;
            }

            if (fsV2State.foodDem) {
                tooltipHTML += `
                    <div style="font-size:14px; margin-top:3px; display:flex; justify-content:space-between;">
                        <span style="color:#94A3B8; font-weight:600;">• Food Requirement:</span>
                        <span style="color:#FFB703; font-weight:700;">${item.demand.toFixed(2)} MMT</span>
                    </div>
                `;
            }

            if (fsV2State.foodAvail) {
                tooltipHTML += `
                    <div style="font-size:14px; margin-top:3px; display:flex; justify-content:space-between;">
                        <span style="color:#94A3B8; font-weight:600;">• Food Availability:</span>
                        <span style="color:#FFB703; font-weight:700;">${totalAvail.toFixed(2)} MMT</span>
                    </div>
                `;
            }

            if (fsV2State.foodCrops || fsV2State.cashCrops || fsV2State.others) {
                tooltipHTML += `<div style="font-size:13.5px; font-weight:700; color:#22C55E; margin-top:6px; border-top:1px stroke rgba(255,255,255,0.1); padding-top:4px;">📊 Crop Production Breakdown</div>`;
                if (fsV2State.foodCrops) {
                    tooltipHTML += `
                        <div style="font-size:13.5px; margin-top:2px; display:flex; justify-content:space-between;">
                            <span style="color:#A7F3D0;">- Food Crops:</span>
                            <span style="color:#22C55E; font-weight:700;">${foodVal.toFixed(2)} MMT (${foodPct}%)</span>
                        </div>
                    `;
                }
                if (fsV2State.cashCrops) {
                    tooltipHTML += `
                        <div style="font-size:13.5px; margin-top:2px; display:flex; justify-content:space-between;">
                            <span style="color:#67E8F9;">- Cash Crops:</span>
                            <span style="color:#00E5FF; font-weight:700;">${cashVal.toFixed(2)} MMT (${cashPct}%)</span>
                        </div>
                    `;
                }
                if (fsV2State.others) {
                    tooltipHTML += `
                        <div style="font-size:13.5px; margin-top:2px; display:flex; justify-content:space-between;">
                            <span style="color:#E9D5FF;">- Others:</span>
                            <span style="color:#C084FC; font-weight:700;">${othVal.toFixed(2)} MMT (${othPct}%)</span>
                        </div>
                    `;
                }
            }

            if (fsV2State.redBox && item.demand > totalAvail) {
                tooltipHTML += `
                    <div style="font-size:14px; margin-top:6px; border-top:1px dashed rgba(255,183,3,0.4); padding-top:4px; display:flex; justify-content:space-between;">
                        <span style="color:#FFB703; font-weight:600;">⚠️ Food Deficit:</span>
                        <span style="color:#FFB703; font-weight:700;">-${foodDeficit} MMT (${foodDeficitPct}%)</span>
                    </div>
                `;
            }

            if (fsV2State.waterShort) {
                tooltipHTML += `
                    <div style="font-size:14px; margin-top:4px; display:flex; justify-content:space-between;">
                        <span style="color:#94A3B8; font-weight:600;">💧 Water Shortage:</span>
                        <span style="color:#EF4444; font-weight:700;">${waterShortage.toFixed(2)} MMT</span>
                    </div>
                `;
            }

            if (fsV2State.waterDeficitBar) {
                tooltipHTML += `
                    <div style="font-size:14px; margin-top:3px; display:flex; justify-content:space-between;">
                        <span style="color:#EF4444; font-weight:600;">💧 Water Deficit:</span>
                        <span style="color:#EF4444; font-weight:700;">-${waterDeficitVal} MMT</span>
                    </div>
                `;
            }'''

new_tooltip_block = '''let tooltipHTML = `<div style="font-size:21px; font-weight:800; color:#00E5FF; border-bottom:1px solid rgba(255,255,255,0.25); padding-bottom:6px; margin-bottom:8px;">${item.year} - Agriculture & Food Security Outlook</div>`;

            if (fsV2State.pop) {
                tooltipHTML += `
                    <div style="font-size:16px; margin-top:4px; display:flex; justify-content:space-between;">
                        <span style="color:#94A3B8; font-weight:600;">• Population:</span>
                        <span style="color:#00E5FF; font-weight:800;">${item.population.toFixed(1)} Million</span>
                    </div>
                `;
            }

            if (fsV2State.foodDem) {
                tooltipHTML += `
                    <div style="font-size:16px; margin-top:4px; display:flex; justify-content:space-between;">
                        <span style="color:#94A3B8; font-weight:600;">• Food Requirement:</span>
                        <span style="color:#FFB703; font-weight:800;">${item.demand.toFixed(2)} MMT</span>
                    </div>
                `;
            }

            if (fsV2State.foodAvail) {
                tooltipHTML += `
                    <div style="font-size:16px; margin-top:4px; display:flex; justify-content:space-between;">
                        <span style="color:#94A3B8; font-weight:600;">• Food Availability:</span>
                        <span style="color:#FFB703; font-weight:800;">${totalAvail.toFixed(2)} MMT</span>
                    </div>
                `;
            }

            if (fsV2State.foodCrops || fsV2State.cashCrops || fsV2State.others) {
                tooltipHTML += `<div style="font-size:16px; font-weight:800; color:#22C55E; margin-top:8px; border-top:1px solid rgba(255,255,255,0.15); padding-top:6px;">📊 Crop Production Breakdown</div>`;
                if (fsV2State.foodCrops) {
                    tooltipHTML += `
                        <div style="font-size:15px; margin-top:3px; display:flex; justify-content:space-between;">
                            <span style="color:#A7F3D0; font-weight:600;">- Food Crops:</span>
                            <span style="color:#22C55E; font-weight:800;">${foodVal.toFixed(2)} MMT (${foodPct}%)</span>
                        </div>
                    `;
                }
                if (fsV2State.cashCrops) {
                    tooltipHTML += `
                        <div style="font-size:15px; margin-top:3px; display:flex; justify-content:space-between;">
                            <span style="color:#67E8F9; font-weight:600;">- Cash Crops:</span>
                            <span style="color:#00E5FF; font-weight:800;">${cashVal.toFixed(2)} MMT (${cashPct}%)</span>
                        </div>
                    `;
                }
                if (fsV2State.others) {
                    tooltipHTML += `
                        <div style="font-size:15px; margin-top:3px; display:flex; justify-content:space-between;">
                            <span style="color:#E9D5FF; font-weight:600;">- Others:</span>
                            <span style="color:#C084FC; font-weight:800;">${othVal.toFixed(2)} MMT (${othPct}%)</span>
                        </div>
                    `;
                }
            }

            if (fsV2State.redBox && item.demand > totalAvail) {
                tooltipHTML += `
                    <div style="font-size:16px; margin-top:8px; border-top:1px dashed rgba(255,183,3,0.5); padding-top:6px; display:flex; justify-content:space-between;">
                        <span style="color:#FFB703; font-weight:700;">⚠️ Food Deficit:</span>
                        <span style="color:#FFB703; font-weight:800;">-${foodDeficit} MMT (${foodDeficitPct}%)</span>
                    </div>
                `;
            }

            if (fsV2State.waterShort) {
                tooltipHTML += `
                    <div style="font-size:16px; margin-top:5px; display:flex; justify-content:space-between;">
                        <span style="color:#94A3B8; font-weight:600;">💧 Water Shortage:</span>
                        <span style="color:#EF4444; font-weight:800;">${waterShortage.toFixed(2)} MMT</span>
                    </div>
                `;
            }

            if (fsV2State.waterDeficitBar) {
                tooltipHTML += `
                    <div style="font-size:16px; margin-top:4px; display:flex; justify-content:space-between;">
                        <span style="color:#EF4444; font-weight:600;">💧 Water Deficit:</span>
                        <span style="color:#EF4444; font-weight:800;">-${waterDeficitVal} MMT</span>
                    </div>
                `;
            }'''

if old_tooltip_block in content:
    content = content.replace(old_tooltip_block, new_tooltip_block)
    print('Successfully updated tooltip font sizes!')
else:
    print('ERROR: old_tooltip_block not found!')

# Also update tooltip sizing constants
old_size_calc = '''const tooltipWidth = 340;
            const tooltipHeight = 240;'''

new_size_calc = '''const tooltipWidth = 420;
            const tooltipHeight = 310;'''

if old_size_calc in content:
    content = content.replace(old_size_calc, new_size_calc)
    print('Successfully updated tooltip sizing bounds!')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done increase_tooltip_fonts.py!')
