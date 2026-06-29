// ─── GUPTA ENTERPRISES — PRODUCT DATA ───────────────────────────────────────
// To add a product: copy one object, change the values, save the file.
// Fields: id, name, cat (category), filter, desc, icon (emoji), status
// Status values: "Available" | "Custom order" | "Out of stock"
// Filter values: "rack" | "auto" | "custom" (used by filter buttons)
// ─────────────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1,
    name: "Heavy-Duty Shelving Rack",
    cat: "Shelving Racks",
    filter: "rack",
    desc: "MS angle iron construction, powder-coated finish. Adjustable shelf heights, load capacity up to 500 kg per shelf. Available in 4-tier and 5-tier configurations.",
    icon: "🗄️",
    status: "Available"
  },
  {
    id: 2,
    name: "Slotted Angle Shelving",
    cat: "Shelving Racks",
    filter: "rack",
    desc: "Versatile slotted angle rack system. Easy assembly and reconfiguration. Ideal for warehouses, workshops and storage areas. Multiple width and height options.",
    icon: "📦",
    status: "Available"
  },
  {
    id: 3,
    name: "Cable Management Tray",
    cat: "Cable Racks",
    filter: "rack",
    desc: "Perforated tray design for neat cable routing in data centres and electrical installations. GI / MS construction, available in 100mm to 600mm widths.",
    icon: "🔌",
    status: "Available"
  },
  {
    id: 4,
    name: "Cable Ladder Rack",
    cat: "Cable Racks",
    filter: "rack",
    desc: "Heavy-duty ladder-type cable support system for large cable bundles. Hot-dip galvanised finish for corrosion resistance. Custom spans available.",
    icon: "🪜",
    status: "Available"
  },
  {
    id: 5,
    name: "19\" Server Rack Enclosure",
    cat: "Server Racks",
    filter: "rack",
    desc: "EIA standard 19-inch, 42U closed rack with lockable front/rear doors, vented side panels, cable management, and 4-point levelling feet.",
    icon: "🖥️",
    status: "Custom order"
  },
  {
    id: 6,
    name: "Open Frame Server Rack",
    cat: "Server Racks",
    filter: "rack",
    desc: "2-post and 4-post open frame racks in 12U to 42U. Easy access for high-density installations. Bolt-together construction, powder-coated mild steel.",
    icon: "🏗️",
    status: "Custom order"
  },
  {
    id: 7,
    name: "Auto Body Bracket",
    cat: "Automobile Parts",
    filter: "auto",
    desc: "Precision-stamped structural brackets for automotive body assemblies. OEM-grade tolerances. Manufactured via Power Press with tool-grade dies. Bulk orders welcome.",
    icon: "🚗",
    status: "Available"
  },
  {
    id: 8,
    name: "Chassis Sub-Frame Panel",
    cat: "Automobile Parts",
    filter: "auto",
    desc: "High-strength stamped panels for vehicle chassis and sub-frame applications. Custom profiles from customer drawings. Material: HR/CR steel as specified.",
    icon: "⚙️",
    status: "Available"
  },
  {
    id: 9,
    name: "Engine Mounting Bracket",
    cat: "Automobile Parts",
    filter: "auto",
    desc: "Vibration-isolating engine mount brackets. CNC-machined for precise hole placement and fitment. Compatible with passenger and commercial vehicle applications.",
    icon: "🔩",
    status: "Available"
  },
  {
    id: 10,
    name: "Custom Sheet Metal Part",
    cat: "Custom Fabrication",
    filter: "custom",
    desc: "Send us your drawing, sample, or describe your requirement. We assess and fabricate using the best process — CNC, VMC, Laser, or Press. Min order quantity applicable.",
    icon: "📐",
    status: "Custom order"
  },
  {
    id: 11,
    name: "Laser-Cut Profile",
    cat: "Custom Fabrication",
    filter: "custom",
    desc: "Precise laser cutting from DXF / DWG files. Materials: MS, SS, Aluminium up to 12mm thickness. Burr-free edges, tight tolerances, bulk pricing available.",
    icon: "⚡",
    status: "Custom order"
  },
  {
    id: 12,
    name: "Wall-Mount Equipment Rack",
    cat: "Server Racks",
    filter: "rack",
    desc: "Space-saving wall-mounted enclosures for networking equipment. 6U, 9U, 12U options. Swing-out design for rear access. Powder-coated steel construction.",
    icon: "📡",
    status: "Available"
  }
];

// ─── RENDER PRODUCTS ─────────────────────────────────────────────────────────
function statusClass(s) {
  if (s === "Available")    return "avail";
  if (s === "Custom order") return "custom";
  return "oos";
}

function renderProducts(filter) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  // Load from localStorage (admin-added) or use defaults
  let all = PRODUCTS;
  try {
    const stored = localStorage.getItem("ge_products_v2");
    if (stored) all = JSON.parse(stored);
  } catch(e) {}

  const filtered = filter === "all" ? all : all.filter(p => p.filter === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="prod-card" style="animation-delay:${i * 0.06}s">
      <div class="prod-card-img">${p.icon}</div>
      <div class="prod-card-body">
        <div class="prod-card-cat">${p.cat}</div>
        <div class="prod-card-name">${p.name}</div>
        <div class="prod-card-desc">${p.desc}</div>
        <div class="prod-card-footer">
          <span class="prod-status ${statusClass(p.status)}">${p.status}</span>
          <a href="#contact" class="prod-card-link">Enquire →</a>
        </div>
      </div>
    </div>
  `).join("");
}
