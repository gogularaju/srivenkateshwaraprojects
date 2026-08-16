export interface Service {
  id: string;
  title: string;
  description: string;
  baseRate?: string;
}

export const services: Service[] = [
  {
    id: "soil-excavation",
    title: "Soil Excavation & Earthworks",
    description: "Standard soil excavation and removal for foundations and site clearing.",
    baseRate: "₹120 - ₹135 per cubic meter" //[cite: 3]
  },
  {
    id: "hard-soil",
    title: "Hard Soil Cutting",
    description: "Specialized cutting for dense, hard soil conditions up to 3.5 meters deep.",
    baseRate: "₹130 - ₹140 per cubic meter" //[cite: 3]
  },
  {
    id: "rock-boulder",
    title: "Rock Boulder Cutting",
    description: "Heavy-duty machinery operation for clearing rock terrains and boulders.",
    baseRate: "₹450 per cubic meter" //[cite: 3]
  },
  {
    id: "hard-rock",
    title: "Hard Rock / Chemical Cutting",
    description: "Advanced hard rock cutting including chemical splitting and manual sezzeling for leveled land surfaces.", //[cite: 3, 4]
    baseRate: "₹950 per cubic meter" //[cite: 3]
  },
  {
    id: "site-refilling",
    title: "Site Refilling",
    description: "Professional grade refilling and leveling of construction sites.",
    baseRate: "₹90 per cubic meter" //[cite: 3]
  }
];