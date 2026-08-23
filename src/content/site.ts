/**
 * Genbytez site content.
 * All copy, metrics, case studies, testimonials and jobs below are editable
 * placeholders — replace with real Genbytez information when available.
 */

export const brand = {
  name: "Genbytez",
  tagline: "Connecting Technology. Powering Possibilities.",
  positioning: "IoT & Digital Solutions for a Connected World",
  location: "Chennai, India",
  email: "hello@genbytez.com",
  phone: "+91 00000 00000",
  address: "Chennai, Tamil Nadu, India",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
] as const;

export type IconName =
  | "factory"
  | "radar"
  | "gauge"
  | "wrench"
  | "zap"
  | "truck"
  | "leaf"
  | "building"
  | "layers"
  | "cloud"
  | "monitor"
  | "smartphone"
  | "barchart"
  | "brain"
  | "shield"
  | "activity"
  | "network"
  | "database"
  | "cpu"
  | "handshake"
  | "heart"
  | "shoppingbag"
  | "car"
  | "graduation"
  | "hardhat"
  | "sprout";

export type Solution = {
  slug: string;
  title: string;
  short: string;
  description: string;
  useCases: string[];
  icon: IconName;
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "industrial-iot",
    title: "Industrial IoT",
    short: "Monitor machines, production lines and industrial environments in real time.",
    description:
      "Connect machines, PLCs, sensors and production lines into a single monitoring layer so operations teams see what is happening on the shop floor as it happens.",
    useCases: [
      "Machine monitoring",
      "Production monitoring",
      "Equipment health",
      "Predictive maintenance",
      "Operational analytics",
    ],
    icon: "factory",
    outcomes: ["Live shop-floor visibility", "Fewer unplanned stoppages", "Data-backed OEE reporting"],
  },
  {
    slug: "smart-monitoring",
    title: "Remote & Smart Monitoring",
    short: "Monitor physical environments and equipment from anywhere.",
    description:
      "Sensor networks, gateways and cloud dashboards that let teams observe distributed sites, equipment status and environmental conditions without being on site.",
    useCases: ["Temperature", "Humidity", "Equipment status", "Environmental conditions", "Remote alerts"],
    icon: "radar",
    outcomes: ["Single view across sites", "Threshold-based alerting", "Audit-ready history"],
  },
  {
    slug: "asset-tracking",
    title: "Smart Asset Monitoring",
    short: "Track and monitor valuable assets across locations.",
    description:
      "Know where assets are, how they are used and what condition they are in — across plants, warehouses, campuses and field operations.",
    useCases: ["Asset tracking", "Asset health", "Location monitoring", "Utilization tracking", "Alerts"],
    icon: "gauge",
    outcomes: ["Reduced asset loss", "Higher utilization", "Faster asset audits"],
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance",
    short: "Identify potential failures before they happen.",
    description:
      "Vibration, temperature, current and runtime signals combined with analytics and machine learning models to surface early warning signs of equipment failure.",
    useCases: ["Condition monitoring", "Anomaly detection", "Failure prediction", "Maintenance scheduling", "Alerting"],
    icon: "wrench",
    outcomes: ["Early failure signals", "Planned interventions", "Longer asset life"],
  },
  {
    slug: "smart-energy",
    title: "Smart Energy",
    short: "Monitor energy consumption and identify inefficiencies.",
    description:
      "Meter-level and machine-level energy monitoring with analytics that make consumption patterns, peaks and inefficiencies visible.",
    useCases: ["Energy monitoring", "Smart metering", "Load analytics", "Cost allocation", "Efficiency reporting"],
    icon: "zap",
    outcomes: ["Consumption transparency", "Efficiency opportunities", "Per-line cost insight"],
  },
  {
    slug: "fleet-intelligence",
    title: "Fleet & Vehicle Intelligence",
    short: "Track vehicles, movement, utilization and performance.",
    description:
      "Telematics and tracking data unified into dashboards for movement, route behaviour, utilization and operational performance of vehicle fleets.",
    useCases: ["Vehicle tracking", "Route intelligence", "Utilization", "Driver behaviour", "Cold-chain monitoring"],
    icon: "truck",
    outcomes: ["Live fleet visibility", "Utilization insight", "Exception alerts"],
  },
  {
    slug: "environmental-monitoring",
    title: "Environmental Monitoring",
    short: "Monitor air, water and environmental conditions continuously.",
    description:
      "Continuous environmental sensing with calibration-aware data pipelines, thresholds and reporting for compliance and operational safety.",
    useCases: ["Temperature", "Humidity", "Air quality", "Water quality", "Environmental conditions"],
    icon: "leaf",
    outcomes: ["Continuous compliance data", "Early deviation alerts", "Trend reporting"],
  },
  {
    slug: "smart-infrastructure",
    title: "Smart Infrastructure",
    short: "Connected technology for buildings, campuses and facilities.",
    description:
      "Bring building systems, meters, occupancy sensors and safety devices into one connected platform for facilities and infrastructure teams.",
    useCases: ["Buildings", "Campuses", "Facilities", "Infrastructure", "Smart environments"],
    icon: "building",
    outcomes: ["Unified facility data", "Comfort and energy balance", "Operational automation"],
  },
  {
    slug: "iot-platforms",
    title: "IoT Platforms",
    short: "Custom platforms for device management, monitoring, analytics and control.",
    description:
      "Purpose-built IoT platforms covering device onboarding, telemetry ingestion, rules, analytics, role-based access and control — designed to scale from pilot to fleet.",
    useCases: ["Device management", "Telemetry ingestion", "Rules & automation", "Analytics", "Multi-tenant access"],
    icon: "layers",
    outcomes: ["One platform for all devices", "Scalable ingestion", "Extensible via APIs"],
  },
];

export const digitalSolutions: { title: string; description: string; icon: IconName }[] = [
  {
    title: "IoT Platforms",
    description: "Custom platforms for device management, monitoring, analytics and control.",
    icon: "layers",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for connected applications.",
    icon: "cloud",
  },
  {
    title: "Web Applications",
    description: "Custom dashboards, portals, admin platforms and enterprise applications.",
    icon: "monitor",
  },
  {
    title: "Mobile Applications",
    description: "Mobile applications for monitoring, field teams, customers and operations.",
    icon: "smartphone",
  },
  {
    title: "Data & Analytics",
    description: "Turn operational data into dashboards, reports, KPIs and insights.",
    icon: "barchart",
  },
  {
    title: "AI & Machine Learning",
    description: "Prediction, optimization, anomaly detection and intelligent decision-making on IoT data.",
    icon: "brain",
  },
];

export const stack = [
  {
    layer: "Experience",
    number: "06",
    items: ["Web Dashboards", "Mobile Apps", "Alerts", "Reports", "Automation"],
  },
  {
    layer: "Intelligence",
    number: "05",
    items: ["Analytics", "AI", "Machine Learning", "Anomaly Detection", "Predictive Models"],
  },
  {
    layer: "Cloud",
    number: "04",
    items: ["Device Management", "APIs", "Data Storage", "Event Processing", "Security"],
  },
  {
    layer: "Edge & Gateway",
    number: "03",
    items: ["Gateways", "Edge Processing", "Protocol Conversion", "Local Intelligence"],
  },
  {
    layer: "Connectivity",
    number: "02",
    items: ["Wi-Fi", "BLE", "LoRaWAN", "4G", "5G", "MQTT", "Modbus", "CAN", "OPC-UA"],
  },
  {
    layer: "Physical",
    number: "01",
    items: ["Sensors", "Machines", "Vehicles", "Devices", "Equipment"],
  },
];

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  capabilities: string[];
  icon: IconName;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary: "Connected production lines, machine data and maintenance intelligence.",
    capabilities: ["Machine monitoring", "Predictive maintenance", "Production analytics", "Energy monitoring"],
    icon: "factory",
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    summary: "Field-level sensing for water, soil and crop conditions.",
    capabilities: ["Soil monitoring", "Smart irrigation", "Weather monitoring", "Crop monitoring"],
    icon: "sprout",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    summary: "Connected equipment and environment monitoring for care facilities.",
    capabilities: ["Asset monitoring", "Environmental monitoring", "Connected medical equipment"],
    icon: "heart",
  },
  {
    slug: "logistics",
    title: "Logistics & Transportation",
    summary: "Visibility across vehicles, shipments and cold chains.",
    capabilities: ["Fleet tracking", "Asset tracking", "Route intelligence", "Cold-chain monitoring"],
    icon: "truck",
  },
  {
    slug: "energy",
    title: "Energy & Utilities",
    summary: "Metering and infrastructure monitoring at distributed scale.",
    capabilities: ["Energy monitoring", "Smart metering", "Infrastructure monitoring"],
    icon: "zap",
  },
  {
    slug: "smart-buildings",
    title: "Smart Buildings",
    summary: "Occupancy, comfort, energy and safety in one connected layer.",
    capabilities: ["Occupancy", "Energy", "Environment", "Security monitoring"],
    icon: "building",
  },
  {
    slug: "retail",
    title: "Retail",
    summary: "Inventory intelligence and store environment monitoring.",
    capabilities: ["Inventory intelligence", "Environment monitoring", "Asset tracking"],
    icon: "shoppingbag",
  },
  {
    slug: "automotive",
    title: "Automotive",
    summary: "Vehicle data, connected systems and fleet intelligence.",
    capabilities: ["Vehicle monitoring", "Fleet intelligence", "Connected systems"],
    icon: "car",
  },
  {
    slug: "education",
    title: "Education",
    summary: "Smart campuses with connected assets and environments.",
    capabilities: ["Smart campuses", "Asset monitoring", "Environmental monitoring"],
    icon: "graduation",
  },
  {
    slug: "construction",
    title: "Construction",
    summary: "Equipment, site and safety monitoring for active projects.",
    capabilities: ["Equipment tracking", "Site monitoring", "Worker & environment safety"],
    icon: "hardhat",
  },
];

export const whyGenbytez: { title: string; description: string; icon: IconName }[] = [
  {
    title: "End-to-End Capability",
    description: "From sensors and connectivity to cloud platforms and applications.",
    icon: "network",
  },
  {
    title: "Business-First Engineering",
    description: "Technology designed around real business problems and measurable outcomes.",
    icon: "barchart",
  },
  {
    title: "Scalable Architecture",
    description: "Solutions that grow from prototype to enterprise deployment.",
    icon: "layers",
  },
  {
    title: "Secure by Design",
    description: "Security across devices, communication, APIs, applications and infrastructure.",
    icon: "shield",
  },
  {
    title: "Real-Time Visibility",
    description: "Give teams the information they need to act quickly.",
    icon: "activity",
  },
  {
    title: "Long-Term Partnership",
    description: "Support, optimization, maintenance and continuous improvement after deployment.",
    icon: "handshake",
  },
];

/** Placeholder metrics — replace with verified Genbytez numbers. */
export const metrics = [
  { value: 100, suffix: "+", label: "Connected Devices" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 99.9, suffix: "%", label: "Platform Availability" },
  { value: 24, suffix: "/7", label: "Monitoring Capability" },
];

/** Sample case studies — illustrative scenarios, not client engagements. */
export const caseStudies = [
  {
    slug: "smart-factory-monitoring",
    title: "Smart Factory Monitoring",
    category: "Industrial IoT",
    challenge: "Limited visibility into machine performance.",
    solution: "Connected machines and sensors to a centralized monitoring platform.",
    result: "Real-time operational visibility.",
  },
  {
    slug: "fleet-intelligence",
    title: "Fleet Intelligence",
    category: "Fleet & Mobility",
    challenge: "Limited visibility into vehicle movement and utilization.",
    solution: "Connected tracking and analytics platform.",
    result: "Improved fleet visibility and operational decision-making.",
  },
  {
    slug: "smart-agriculture",
    title: "Smart Agriculture",
    category: "Agriculture",
    challenge: "Manual monitoring of environmental conditions.",
    solution: "IoT sensors, cloud platform and dashboard.",
    result: "Real-time field intelligence.",
  },
  {
    slug: "energy-monitoring",
    title: "Energy Monitoring",
    category: "Energy",
    challenge: "No centralized visibility into energy consumption.",
    solution: "Connected energy monitoring platform.",
    result: "Detailed consumption analytics.",
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance",
    category: "Reliability",
    challenge: "Unexpected equipment failures.",
    solution: "Sensor-based monitoring with analytics.",
    result: "Early identification of potential equipment problems.",
  },
];

export const process = [
  { step: "01", title: "Discover", description: "Understand the business problem, environment and objectives." },
  { step: "02", title: "Design", description: "Design the IoT architecture, user experience and technology stack." },
  { step: "03", title: "Prototype", description: "Build and validate the concept." },
  {
    step: "04",
    title: "Develop",
    description: "Build devices, integrations, cloud systems, applications, analytics and automation.",
  },
  { step: "05", title: "Deploy", description: "Deploy into the real-world environment." },
  { step: "06", title: "Optimize", description: "Monitor performance and continuously improve the solution." },
];

export const technologies = [
  {
    category: "Connectivity",
    items: ["MQTT", "LoRaWAN", "BLE", "Wi-Fi", "4G", "5G", "Modbus", "CAN", "OPC-UA"],
  },
  { category: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { category: "Backend", items: ["Node.js", "Python", "FastAPI", "REST APIs"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
  { category: "Data", items: ["PostgreSQL", "TimescaleDB", "Redis", "Data Analytics"] },
  { category: "AI", items: ["Machine Learning", "Predictive Analytics", "Computer Vision", "Anomaly Detection"] },
];

/** Sample testimonials — replace each entry with a real, approved quote. */
export const testimonials = [
  {
    quote:
      "Sample testimonial placeholder. Describe how the connected solution changed day-to-day visibility for the team.",
    name: "Client Name",
    position: "Operations Head",
    company: "Company Name",
  },
  {
    quote:
      "Sample testimonial placeholder. Describe the collaboration during discovery, prototyping and deployment phases.",
    name: "Client Name",
    position: "Plant Manager",
    company: "Company Name",
  },
  {
    quote: "Sample testimonial placeholder. Describe the measurable outcome once the platform went live.",
    name: "Client Name",
    position: "CTO",
    company: "Company Name",
  },
];

export const insights = [
  {
    slug: "what-is-industrial-iot",
    category: "Industrial IoT",
    title: "What Is Industrial IoT and Why Does It Matter?",
    description:
      "A practical look at how connected machines change the way production teams see and run their operations.",
    readTime: "6 min read",
  },
  {
    slug: "sensor-data-to-business-intelligence",
    category: "Analytics",
    title: "From Sensor Data to Business Intelligence",
    description: "The pipeline between a raw sensor reading and a decision someone actually acts on.",
    readTime: "7 min read",
  },
  {
    slug: "predictive-maintenance-manufacturing",
    category: "Smart Manufacturing",
    title: "How Predictive Maintenance Can Transform Manufacturing",
    description: "Condition monitoring, models and the operational discipline needed to make prediction useful.",
    readTime: "8 min read",
  },
  {
    slug: "choosing-iot-connectivity",
    category: "IoT",
    title: "Choosing the Right IoT Connectivity for Your Deployment",
    description: "LoRaWAN, BLE, Wi-Fi or cellular — how site conditions and data needs decide the answer.",
    readTime: "5 min read",
  },
  {
    slug: "iot-security-by-design",
    category: "Cloud",
    title: "Designing IoT Security From the Device Up",
    description: "Identity, transport, storage and access — where connected deployments usually get exposed.",
    readTime: "6 min read",
  },
  {
    slug: "digital-transformation-operations",
    category: "Digital Transformation",
    title: "Digital Transformation Starts on the Operations Floor",
    description: "Why the highest-return digital projects usually begin with physical processes.",
    readTime: "5 min read",
  },
];

export const solutionOptions = [
  "Industrial IoT",
  "Smart Monitoring",
  "Asset Tracking",
  "Predictive Maintenance",
  "Smart Energy",
  "Fleet Intelligence",
  "IoT Platform",
  "Cloud Solutions",
  "Web Application",
  "Mobile Application",
  "Data Analytics",
  "AI / ML",
  "Automation",
  "Digital Transformation",
  "Other",
];

export const industryOptions = [
  "Manufacturing",
  "Agriculture",
  "Healthcare",
  "Logistics & Transportation",
  "Energy & Utilities",
  "Smart Buildings",
  "Retail",
  "Automotive",
  "Education",
  "Construction",
  "Other",
];

/** Placeholder openings — replace with live roles. */
export const jobs = [
  { title: "Embedded Firmware Engineer", location: "Chennai, India", type: "Full-time", team: "Devices" },
  { title: "IoT Platform Engineer", location: "Chennai, India", type: "Full-time", team: "Cloud" },
  { title: "Frontend Engineer (React / TypeScript)", location: "Chennai / Remote", type: "Full-time", team: "Product" },
  { title: "Data Engineer", location: "Chennai, India", type: "Full-time", team: "Data" },
  { title: "Machine Learning Engineer", location: "Chennai / Remote", type: "Full-time", team: "Intelligence" },
  { title: "Solutions Consultant — IoT", location: "Chennai, India", type: "Full-time", team: "Solutions" },
];

/** Placeholder milestones — replace with actual company history. */
export const timeline = [
  { year: "Placeholder", title: "Founded in Chennai", description: "Genbytez starts with a focus on connected systems engineering." },
  { year: "Placeholder", title: "First IoT platform", description: "End-to-end device-to-dashboard platform delivered." },
  { year: "Placeholder", title: "Industrial expansion", description: "Solutions extended to manufacturing and energy environments." },
  { year: "Placeholder", title: "Intelligence layer", description: "Analytics and machine learning added across deployments." },
  { year: "Placeholder", title: "Today", description: "Building connected ecosystems across multiple industries." },
];
