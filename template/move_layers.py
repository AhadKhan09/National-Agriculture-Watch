import re

def find_block_with_id(content, target_id):
    """
    Finds a div with class 'map-menu-section' that contains the given target_id.
    Returns (start_index, end_index, block_content).
    """
    # Find all occurrences of the class
    starts = [m.start() for m in re.finditer(r'<div class="map-menu-section">', content)]
    
    for start in starts:
        # Simple nested div parser
        balance = 0
        idx = start
        end = -1
        
        while idx < len(content):
            # Check for div open
            if content[idx:].startswith('<div'):
                balance += 1
                idx += 4
            # Check for div close
            elif content[idx:].startswith('</div>'):
                balance -= 1
                idx += 6
                if balance == 0:
                    end = idx
                    break
            else:
                idx += 1
        
        if end != -1:
            block = content[start:end]
            if f'id="{target_id}"' in block:
                return start, end, block
                
    return None

def find_element_bounds_by_id(content, tag, element_id):
    """
    Finds the start and end of an element e.g. <div id="foo">...</div>
    """
    pattern = f'<{tag} id="{element_id}"'
    match = re.search(pattern, content)
    if not match:
        return None
    
    start = match.start()
    balance = 0
    idx = start
    end = -1
    
    while idx < len(content):
        if content[idx:].startswith('<div'):
            balance += 1
            idx += 4
        elif content[idx:].startswith('</div>'):
            balance -= 1
            idx += 6
            if balance == 0:
                end = idx
                break
        else:
            idx += 1
            
    if end != -1:
        return start, end
    return None

def transform_block(block):
    # 1. Class replacements
    block = block.replace('map-menu-section', 'simex-menu-section')
    block = block.replace('map-accordion-content', 'simex-accordion-content')
    block = block.replace('map-toggle-container', 'simex-toggle-container')
    block = block.replace('map-toggle-switch', 'simex-toggle-switch')
    block = block.replace('map-toggle-slider', 'simex-toggle-slider')
    
    # 2. Function replacements
    replacements = {
        'handleFloodToggle': 'handleSimexFloodToggle',
        'handleGodownsToggle': 'handleSimexGodownsToggle',
        'handleCropStressToggle': 'handleSimexCropStressToggle',
        'handleCroppingZoneToggle': 'handleSimexCroppingZoneToggle'
    }
    for old, new in replacements.items():
        block = block.replace(old, new)
        
    # 3. Header transformation (Button -> Div, Icon + -> ▼)
    # Pattern to match the map accordion button
    # captures: 1=onclick content, 2=title text
    pattern = r'<button class="map-accordion-btn" onclick="([^"]+)">\s*(.*?)\s*<span class="accordion-icon">\+</span>\s*</button>'
    
    def header_replacer(match):
        onclick_original = match.group(1)
        title = match.group(2).strip()
        
        # Replace toggleAccordion with toggleSimexAccordion in the onclick attribute
        onclick_new = onclick_original.replace('toggleAccordion', 'toggleSimexAccordion')
        
        # Construct new header with Simex classes and icon
        # Try to maintain some indentation
        return f'''<div class="simex-accordion-header" onclick="{onclick_new}">
                                    <span>{title}</span>
                                    <span class="simex-accordion-icon">▼</span>
                                </div>'''

    block = re.sub(pattern, header_replacer, block, flags=re.DOTALL)
    
    return block

def main():
    file_path = 'index.html'
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: {file_path} not found.")
        return

    ids_to_move = ['flood-acc', 'godowns-acc', 'crop-stress-acc', 'cropping-zones-acc']
    extracted_blocks = []

    # 1. Extract and Remove Blocks
    # We iterate and update 'content' immediately. This is safe if we don't rely on cached indices.
    # However, find_block_with_id scans from top, so it should be fine.
    
    for target_id in ids_to_move:
        print(f"Processing {target_id}...")
        result = find_block_with_id(content, target_id)
        if result:
            start, end, block = result
            print(f"  Found block for {target_id}. Extracting...")
            
            # Transform
            transformed_block = transform_block(block)
            extracted_blocks.append(transformed_block)
            
            # Remove from content (including any trailing newline/whitespace might be nice, 
            # but regex matching makes it exact. We might leave empty lines.)
            content = content[:start] + content[end:]
        else:
            print(f"  Warning: Block for {target_id} not found.")

    if not extracted_blocks:
        print("No blocks extracted. Exiting.")
        return

    # 2. Insert into Simex Sidebar
    # Find Simex Sidebar
    print("Locating Simex Sidebar...")
    simex_bounds = find_element_bounds_by_id(content, 'div', 'simexSidebar')
    
    if simex_bounds:
        start, end = simex_bounds
        # We want to insert before the closing </div> of the sidebar
        # end points to the character AFTER </div>. So end-6 is the start of </div>.
        
        insertion_point = end - 6
        
        # Prepare content to insert
        # Add some newlines for cleanliness
        to_insert = "\n                            <!-- Moved Layers -->\n" + "\n".join(["                            " + b for b in extracted_blocks]) + "\n"
        
        # It's cleaner to indent. But logic above just joins them.
        # Let's just insert.
        
        new_content = content[:insertion_point] + "\n".join(extracted_blocks) + content[insertion_point:]
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print("Successfully modified index.html")
    else:
        print("Error: simexSidebar not found.")

if __name__ == '__main__':
    main()
