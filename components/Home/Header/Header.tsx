"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import { productData } from "@/data/products";
import {
  Menu,
  X,
  Search,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  ChevronDown,
} from "lucide-react";

const getProductSlugByTitle = (title: string) => {
  const normalized = slugify(title);

  const product = productData.find((p) => slugify(p.title) === normalized);

  return product?.slug;
};
/* ================= TYPES ================= */

type NavLink = {
  label: string;
  href: string;
};

type DropdownSection = {
  title: string;
  links: NavLink[];
};

type NavItem = {
  label: string;
  href?: string;
  hasDropDown?: boolean;
  dropdownContent?: DropdownSection[];
};

type ApplicationDetails = {
  title: string;
  header: string;
  pipeProducts: string[];
  fittingProducts: string[];
  serviceProducts: string[];
};

type ProductFamilyDetails = {
  title: string;
  pipeProducts: string[];
  fittingProducts: string[];
  serviceProducts: string[];
};

/* ================= NAV DATA ================= */

const categoryMenuData: Record<
  string,
  {
    title: string;
    browseByLinks: NavLink[];
    applicationsLinks: NavLink[];
    productFamiliesLinks: NavLink[];
  }
> = {
  "Municipal Systems": {
    title: "Municipal Overview",
    browseByLinks: [
      { label: "Applications", href: "/products/municipal/applications" },
      { label: "Product Families", href: "/products/municipal/families" },
    ],
    applicationsLinks: [
      {
        label: "Specialty Municipal Systems",
        href: "/products/municipal/specialty",
      },
      {
        label: "Pressurized Potable Water Systems",
        href: "/products/municipal/potable",
      },
      {
        label: "Sewer Force Main Systems",
        href: "/products/municipal/sewer-force",
      },
      {
        label: "Gravity Sewer Systems",
        href: "/products/municipal/gravity-sewer",
      },
    ],
    productFamiliesLinks: [
      { label: "Certa-Lok*", href: "/products/municipal/certa-lok" },
      { label: "Aqua (CIOD)", href: "/products/municipal/aqua-ciod" },
      { label: "Yelomine (D2241)", href: "/products/municipal/yelomine" },
      { label: "IPS", href: "/products/municipal/ips" },
      { label: "ASTM D3034", href: "/products/municipal/astm-d3034" },
    ],
  },
  "Plumbing & Industrial": {
    title: "Plumbing & Industrial Overview",
    browseByLinks: [
      { label: "Applications", href: "/products/plumbing/applications" },
      { label: "Product Families", href: "/products/plumbing/families" },
    ],
    applicationsLinks: [
      {
        label: "Residential Plumbing Systems",
        href: "/products/plumbing/residential",
      },
      {
        label: "Commercial Plumbing Systems",
        href: "/products/plumbing/commercial",
      },
      {
        label: "Industrial Process Systems",
        href: "/products/plumbing/industrial",
      },
      {
        label: "Fire Suppression Systems",
        href: "/products/plumbing/fire-suppression",
      },
    ],
    productFamiliesLinks: [
      { label: "PVC-DWV", href: "/products/plumbing/pvc-dwv" },
      { label: "CPVC", href: "/products/plumbing/cpvc" },
      { label: "PP (Polypropylene)", href: "/products/plumbing/pp" },
      {
        label: "ABS (Acrylonitrile Butadiene Styrene)",
        href: "/products/plumbing/abs",
      },
      { label: "Specialty Systems", href: "/products/plumbing/specialty" },
    ],
  },
  "Water Well": {
    title: "Water Well Overview",
    browseByLinks: [
      { label: "Applications", href: "/products/waterwell/applications" },
      { label: "Product Families", href: "/products/waterwell/families" },
    ],
    applicationsLinks: [
      { label: "Domestic Well Systems", href: "/products/waterwell/domestic" },
      {
        label: "Agricultural Well Systems",
        href: "/products/waterwell/agricultural",
      },
      {
        label: "High-Capacity Well Systems",
        href: "/products/waterwell/high-capacity",
      },
      {
        label: "Well Rehabilitation Systems",
        href: "/products/waterwell/rehabilitation",
      },
    ],
    productFamiliesLinks: [
      { label: "Well Casing Pipe", href: "/products/waterwell/casing" },
      { label: "Geothermal Pipe", href: "/products/waterwell/geothermal" },
      { label: "Dewatering Pipe", href: "/products/waterwell/dewatering" },
      { label: "Well Screen Pipe", href: "/products/waterwell/screen" },
      { label: "Specialty Well Pipe", href: "/products/waterwell/specialty" },
    ],
  },
  "Agriculture & Irrigation": {
    title: "Agriculture & Irrigation Overview",
    browseByLinks: [
      { label: "Applications", href: "/products/agriculture/applications" },
      { label: "Product Families", href: "/products/agriculture/families" },
    ],
    applicationsLinks: [
      { label: "Drip Irrigation Systems", href: "/products/agriculture/drip" },
      {
        label: "Pivot Irrigation Systems",
        href: "/products/agriculture/pivot",
      },
      { label: "Lateral Move Systems", href: "/products/agriculture/lateral" },
      { label: "Microirrigation Systems", href: "/products/agriculture/micro" },
    ],
    productFamiliesLinks: [
      { label: "Mainline Pipe", href: "/products/agriculture/mainline" },
      { label: "Lateral Pipe", href: "/products/agriculture/lateral-pipe" },
      { label: "Drip Tape", href: "/products/agriculture/drip-tape" },
      { label: "High-Density PE Pipe", href: "/products/agriculture/hdpe" },
      {
        label: "Specialty Irrigation Pipe",
        href: "/products/agriculture/specialty",
      },
    ],
  },
  Electrical: {
    title: "Electrical Overview",
    browseByLinks: [
      { label: "Applications", href: "/products/electrical/applications" },
      { label: "Product Families", href: "/products/electrical/families" },
    ],
    applicationsLinks: [
      { label: "Conduit Systems", href: "/products/electrical/conduit" },
      { label: "Raceway Systems", href: "/products/electrical/raceway" },
      { label: "Protective Duct Systems", href: "/products/electrical/duct" },
      { label: "Cable Management Systems", href: "/products/electrical/cable" },
    ],
    productFamiliesLinks: [
      { label: "Rigid Electrical Conduit", href: "/products/electrical/rigid" },
      { label: "Intermediate Metal Conduit", href: "/products/electrical/imc" },
      { label: "Flexible Conduit", href: "/products/electrical/flexible" },
      { label: "Buried PE Conduit", href: "/products/electrical/pe-conduit" },
      { label: "Specialty Conduit", href: "/products/electrical/specialty" },
    ],
  },
  "Pool & Spa": {
    title: "Pool & Spa Overview",
    browseByLinks: [
      { label: "Applications", href: "/products/poolspa/applications" },
      { label: "Product Families", href: "/products/poolspa/families" },
    ],
    applicationsLinks: [
      {
        label: "Pool Circulation Systems",
        href: "/products/poolspa/circulation",
      },
      { label: "Spa Heating Systems", href: "/products/poolspa/heating" },
      {
        label: "Pool Filtration Systems",
        href: "/products/poolspa/filtration",
      },
      { label: "Backwash & Drain Systems", href: "/products/poolspa/backwash" },
    ],
    productFamiliesLinks: [
      { label: "Schedule 40 PVC", href: "/products/poolspa/schedule-40" },
      { label: "Schedule 80 PVC", href: "/products/poolspa/schedule-80" },
      { label: "Commercial Grade Pipe", href: "/products/poolspa/commercial" },
      {
        label: "Salt-Chlorine Resistant Pipe",
        href: "/products/poolspa/salt-resistant",
      },
      { label: "Specialty Pool Pipe", href: "/products/poolspa/specialty" },
    ],
  },
};

const applicationDetailsData: Record<
  string,
  Record<string, ApplicationDetails>
> = {
  "Municipal Systems": {
    "Specialty Municipal Systems": {
      title: "About Specialty Municipal Systems",
      header: "Specialty Municipal Systems",
      pipeProducts: [
        "C909 PVCO IB Pipe",
        "C900 Certa-Lok® RIIB Pipe",
        "C900 Certa-Lok® RJ Pipe",
        "Certa-Flo® Gravity Pipe",
        "Yelomine® Certa-Lok® RJ Pipe",
        "Yelomine® Certa-Lok® RIIB Pipe",
      ],
      fittingProducts: [
        "D2241 Certa-Lok® Fittings",
        "C907 Molded Fittings",
        "C900 Fabricated Fittings",
        "C900 Certa-Lok® Fittings",
      ],
      serviceProducts: ["C900 Certa-Lok® Adapters"],
    },
    "Pressurized Potable Water Systems": {
      title: "About Pressurized Potable Water Systems",
      header: "Pressurized Potable Water Systems",
      pipeProducts: [
        "C909 PVCO IB Pipe",
        "C900 Certa-Lok® Pipe",
        "CTS Pressure Pipe",
        "DIPS (Dual IPS) Pipe",
      ],
      fittingProducts: [
        "Pressure-Rated Fittings",
        "Certa-Lok® Pressure Fittings",
        "CTS Pressure Fittings",
      ],
      serviceProducts: ["Pressure System Adapters", "Pressure Valves"],
    },
    "Sewer Force Main Systems": {
      title: "About Sewer Force Main Systems",
      header: "Sewer Force Main Systems",
      pipeProducts: [
        "C900 Certa-Lok® Pressure Pipe",
        "HDPE Force Main Pipe",
        "PVC IPS Pressure Pipe",
      ],
      fittingProducts: [
        "Pressure-Rated Fittings",
        "Force Main Fittings",
        "Transition Fittings",
      ],
      serviceProducts: ["Force Main Adapters", "Thrust Blocks"],
    },
    "Gravity Sewer Systems": {
      title: "About Gravity Sewer Systems",
      header: "Gravity Sewer Systems",
      pipeProducts: [
        "C900 Certa-Flo® Gravity Pipe",
        "Standard IPS Gravity Pipe",
        "Ring-Tite® Gravity Pipe",
      ],
      fittingProducts: [
        "Gravity Sewer Fittings",
        "Slip Repair Couplings",
        "Gravity Elbows & Tees",
      ],
      serviceProducts: ["Gravity System Adapters", "Repair Clamps"],
    },
  },
  "Plumbing & Industrial": {
    "Residential Plumbing Systems": {
      title: "About Residential Plumbing Systems",
      header: "Residential Plumbing Systems",
      pipeProducts: ["PVC-DWV Pipe", "CPVC Hot Water Pipe", "Schedule 40 Pipe"],
      fittingProducts: ["DWV Fittings", "CPVC Fittings", "Slip Fittings"],
      serviceProducts: ["Adapters", "Coupling Repair"],
    },
    "Commercial Plumbing Systems": {
      title: "About Commercial Plumbing Systems",
      header: "Commercial Plumbing Systems",
      pipeProducts: [
        "Schedule 40 PVC-DWV",
        "Schedule 80 PVC",
        "CPVC Commercial Grade",
      ],
      fittingProducts: [
        "Commercial DWV Fittings",
        "Heavy Duty Couplings",
        "Transition Fittings",
      ],
      serviceProducts: ["Commercial Adapters", "Seismic Support Fittings"],
    },
    "Industrial Process Systems": {
      title: "About Industrial Process Systems",
      header: "Industrial Process Systems",
      pipeProducts: [
        "Chemical Resistant Pipe",
        "Schedule 80 Industrial Pipe",
        "PVDF Industrial Pipe",
      ],
      fittingProducts: [
        "Industrial Grade Fittings",
        "Chemical Resistant Fittings",
        "Thread Adapters",
      ],
      serviceProducts: ["Industrial Valves", "Process Connections"],
    },
    "Fire Suppression Systems": {
      title: "About Fire Suppression Systems",
      header: "Fire Suppression Systems",
      pipeProducts: [
        "Fire Sprinkler Pipe",
        "Schedule 40 Fire Rated",
        "Pressure-Rated Fire Pipe",
      ],
      fittingProducts: [
        "Fire Sprinkler Fittings",
        "Fire Rated Elbows",
        "Pressure Rated Tees",
      ],
      serviceProducts: ["Fire System Adapters", "Sprinkler Heads"],
    },
  },
  "Water Well": {
    "Domestic Well Systems": {
      title: "About Domestic Well Systems",
      header: "Domestic Well Systems",
      pipeProducts: [
        "Well Casing Pipe",
        '1" Schedule 40 Domestic',
        '1.25" Schedule 40 Domestic',
      ],
      fittingProducts: [
        "Well Casing Couplings",
        "Well Head Adapters",
        "Sand Point Fittings",
      ],
      serviceProducts: ["Well Seals", "Pitless Adapters"],
    },
    "Agricultural Well Systems": {
      title: "About Agricultural Well Systems",
      header: "Agricultural Well Systems",
      pipeProducts: [
        "Agricultural Well Casing",
        "High Capacity Well Pipe",
        "Schedule 40 Agricultural",
      ],
      fittingProducts: [
        "Agricultural Couplings",
        "Pump Head Adapters",
        "Transition Fittings",
      ],
      serviceProducts: ["Pump Adapters", "Pressure Switches"],
    },
    "High-Capacity Well Systems": {
      title: "About High-Capacity Well Systems",
      header: "High-Capacity Well Systems",
      pipeProducts: [
        "Large Diameter Well Casing",
        "Schedule 40 High Capacity",
        '6" Casing Pipe',
      ],
      fittingProducts: [
        "Large Diameter Couplings",
        "High Capacity Adapters",
        "Transition Fittings",
      ],
      serviceProducts: ["Large Pump Adapters", "Pressure Relief Valves"],
    },
    "Well Rehabilitation Systems": {
      title: "About Well Rehabilitation Systems",
      header: "Well Rehabilitation Systems",
      pipeProducts: [
        "Rehabilitation Casing",
        "Smaller Diameter Casing",
        "Flexible Repair Pipe",
      ],
      fittingProducts: [
        "Rehabilitation Adapters",
        "Telescoping Couplings",
        "Transition Fittings",
      ],
      serviceProducts: ["Repair Sleeves", "Rehabilitation Sealants"],
    },
  },
  "Agriculture & Irrigation": {
    "Sprinkler Irrigation Systems": {
      title: "About Sprinkler Irrigation Systems",
      header: "Sprinkler Irrigation Systems",
      pipeProducts: [
        '1" Schedule 40 Irrigation',
        '1.5" CTS Irrigation',
        '2" Mainline Irrigation',
      ],
      fittingProducts: [
        "Sprinkler Elbows",
        "Irrigation Tees",
        "Pressure Rated Fittings",
      ],
      serviceProducts: ["Sprinkler Heads", "Pressure Regulators"],
    },
    "Drip Irrigation Systems": {
      title: "About Drip Irrigation Systems",
      header: "Drip Irrigation Systems",
      pipeProducts: [
        '0.5" Drip Tubing',
        '0.75" Drip Mainline',
        '1" Drip Distribution',
      ],
      fittingProducts: ["Drip Emitters", "Drip Connectors", "Barbed Adapters"],
      serviceProducts: ["Drip Filters", "Pressure Regulators"],
    },
    "Agriculture Mainline Systems": {
      title: "About Agriculture Mainline Systems",
      header: "Agriculture Mainline Systems",
      pipeProducts: [
        '2" Schedule 40 Mainline',
        '3" Schedule 40 Mainline',
        '4" Irrigation Mainline',
      ],
      fittingProducts: [
        "Large Diameter Elbows",
        "Mainline Tees",
        "Gate Valve Fittings",
      ],
      serviceProducts: ["Gate Valves", "Check Valves"],
    },
    "Frost-Protected Irrigation": {
      title: "About Frost-Protected Irrigation",
      header: "Frost-Protected Irrigation",
      pipeProducts: [
        "Buried Frost-Protected Pipe",
        "Insulated Irrigation Pipe",
        "Below-Grade Mainline",
      ],
      fittingProducts: [
        "Insulated Fittings",
        "Underground Adapters",
        "Frost-Rated Couplings",
      ],
      serviceProducts: ["Insulation Wraps", "Underground Seals"],
    },
  },
  Electrical: {
    "Electrical Conduit Systems": {
      title: "About Electrical Conduit Systems",
      header: "Electrical Conduit Systems",
      pipeProducts: [
        "Schedule 40 Conduit",
        "Schedule 80 Conduit",
        "PVC-DWV for Conduit",
      ],
      fittingProducts: [
        "Electrical Elbows",
        "Conduit Couplings",
        "Outlet Boxes",
      ],
      serviceProducts: ["Pull Boxes", "Cable Supports"],
    },
    "Underground Duct Systems": {
      title: "About Underground Duct Systems",
      header: "Underground Duct Systems",
      pipeProducts: [
        '2" Underground Duct',
        '3" Underground Duct',
        '4" Underground Duct',
      ],
      fittingProducts: [
        "Underground Elbows",
        "Underground Tees",
        "Expansion Couplings",
      ],
      serviceProducts: ["Pull Points", "Duct Seals"],
    },
    "Communication Systems": {
      title: "About Communication Systems",
      header: "Communication Systems",
      pipeProducts: ["Telecom Duct", "Fiber Optic Conduit", "Data Duct"],
      fittingProducts: [
        "Telecom Elbows",
        "Fiber Duct Couplings",
        "Data Line Adapters",
      ],
      serviceProducts: ["Pull Boxes", "Duct Seals"],
    },
    "Solar Installation Systems": {
      title: "About Solar Installation Systems",
      header: "Solar Installation Systems",
      pipeProducts: [
        "Solar Thermal Pipe",
        "PEX-AL-PEX Composite",
        "Insulated Solar Pipe",
      ],
      fittingProducts: [
        "Solar Fittings",
        "Thermal Adapters",
        "Pressure Rated Couplings",
      ],
      serviceProducts: ["Thermal Insulation", "Expansion Tanks"],
    },
  },
  "Pool & Spa": {
    "Swimming Pool Systems": {
      title: "About Swimming Pool Systems",
      header: "Swimming Pool Systems",
      pipeProducts: [
        "Schedule 40 Pool Pipe",
        "Slip Fitting Pool Pipe",
        "Class 125 Pool Pipe",
      ],
      fittingProducts: ["Pool Elbows", "Pool Tees", "Pool Couplings"],
      serviceProducts: ["Skimmer Adapters", "Return Fittings"],
    },
    "Spa and Hot Tub Systems": {
      title: "About Spa and Hot Tub Systems",
      header: "Spa and Hot Tub Systems",
      pipeProducts: [
        "CPVC Hot Water Pipe",
        "Schedule 40 Thermal Pipe",
        "Insulated Spa Pipe",
      ],
      fittingProducts: [
        "Hot Water Fittings",
        "Pressure Rated Adapters",
        "Thermal Couplings",
      ],
      serviceProducts: ["Heat Exchanger Adapters", "Insulation Wraps"],
    },
    "Fountain and Feature Systems": {
      title: "About Fountain and Feature Systems",
      header: "Fountain and Feature Systems",
      pipeProducts: [
        "Decorative Fountain Pipe",
        "Schedule 40 Feature Pipe",
        "Flexible Feature Tubing",
      ],
      fittingProducts: [
        "Decorative Fittings",
        "Feature Elbows",
        "Fountain Adapters",
      ],
      serviceProducts: ["Fountain Nozzles", "Recirculation Adapters"],
    },
    "Drainage and Circulation": {
      title: "About Drainage and Circulation",
      header: "Drainage and Circulation",
      pipeProducts: ["Drain Pipe", "Circulation Return Pipe", "Backwash Pipe"],
      fittingProducts: [
        "Drain Fittings",
        "Circulation Couplings",
        "Return Adapters",
      ],
      serviceProducts: ["Backwash Valves", "Drain Adapters"],
    },
  },
};

const productFamilyDetailsData: Record<
  string,
  Record<string, ProductFamilyDetails>
> = {
  "Municipal Systems": {
    "Certa-Lok®": {
      title: "About Certa-Lok®",
      pipeProducts: [
        "C900 Certa-Lok® RIIB Pipe",
        "C900 Certa-Lok® RJ Pipe",
        "Certa-Flo® Gravity Pipe",
        "Yelomine® Certa-Lok® RJ Pipe",
        "Yelomine® Certa-Lok® RIIB Pipe",
      ],
      fittingProducts: [
        "D2241 Certa-Lok® Fittings",
        "C900 Certa-Lok® Fittings",
      ],
      serviceProducts: ["C900 Certa-Lok® Adapters"],
    },
    "Aqua (CIOD)": {
      title: "About Aqua (CIOD)",
      pipeProducts: ["C909 PVCO IB Pipe", "Aqua™ CIOD Pipe", "CTS CIOD Pipe"],
      fittingProducts: ["Aqua™ CIOD Fittings", "CTS CIOD Fittings"],
      serviceProducts: ["CIOD Adapters"],
    },
    "Yelomine (D2241)": {
      title: "About Yelomine (D2241)",
      pipeProducts: ["Yelomine® D2241 Pipe", "Yelomine® Pressure Pipe"],
      fittingProducts: [
        "D2241 Yelomine® Fittings",
        "Yelomine® Pressure Fittings",
      ],
      serviceProducts: ["Yelomine® Adapters"],
    },
    IPS: {
      title: "About IPS",
      pipeProducts: ["Standard IPS Pipe", "IPS Pressure Pipe"],
      fittingProducts: ["IPS Fittings", "IPS Pressure Fittings"],
      serviceProducts: ["IPS Adapters"],
    },
    "ASTM D3034": {
      title: "About ASTM D3034",
      pipeProducts: ["ASTM D3034 Gravity Pipe", "ASTM D3034 DWV Pipe"],
      fittingProducts: ["ASTM D3034 Fittings", "ASTM D3034 DWV Fittings"],
      serviceProducts: ["ASTM D3034 Adapters"],
    },
  },
  "Plumbing & Industrial": {
    CPVC: {
      title: "About CPVC",
      pipeProducts: ["CPVC Hot Water Pipe", "CPVC Schedule 40 Pipe"],
      fittingProducts: ["CPVC Pressure Fittings", "CPVC Hot Water Fittings"],
      serviceProducts: ["CPVC Adapters"],
    },
  },
  "Water Well": {
    "CTS Pressure": {
      title: "About CTS Pressure",
      pipeProducts: ["CTS Pressure Pipe", "CTS Pressure Well Pipe"],
      fittingProducts: ["CTS Pressure Fittings", "CTS Compression Fittings"],
      serviceProducts: ["CTS Pressure Adapters"],
    },
  },
  "Agriculture & Irrigation": {
    "Drip Irrigation": {
      title: "About Drip Irrigation",
      pipeProducts: ["Drip Irrigation Tubing", "Drip Flex Pipe"],
      fittingProducts: ["Drip Emitters", "Drip Connectors"],
      serviceProducts: ["Drip Adapters"],
    },
  },
  Electrical: {
    "Schedule 80 PVC": {
      title: "About Schedule 80 PVC",
      pipeProducts: ["Schedule 80 Electrical Conduit", "Schedule 80 PVC Pipe"],
      fittingProducts: ["Schedule 80 Conduit Fittings", "Schedule 80 Elbows"],
      serviceProducts: ["Schedule 80 Adapters"],
    },
  },
  "Pool & Spa": {
    "Pool Schedule 40": {
      title: "About Pool Schedule 40",
      pipeProducts: ["Pool Schedule 40 PVC Pipe", "Pool Pressure Pipe"],
      fittingProducts: ["Pool Fittings", "Pool Union Fittings"],
      serviceProducts: ["Pool Adapters"],
    },
  },
};

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "PRODUCTS",
    hasDropDown: true,
    href: "/products",
    dropdownContent: [
      {
        title: "Categories",
        links: [
          { label: "Municipal Systems", href: "/products#municipal" },
          { label: "Plumbing & Industrial", href: "/products#plumbing" },
          { label: "Water Well", href: "/products#waterwell" },
          { label: "Agriculture & Irrigation", href: "/products#agriculture" },
          { label: "Electrical", href: "/products#electrical" },
          { label: "Pool & Spa", href: "/products#poolspa" },
        ],
      },
    ],
  },
  {
    label: "COMPANY",
    hasDropDown: true,
    dropdownContent: [
      {
        title: "About",
        links: [
          { label: "Why JM Eagle Pipe & Fittings", href: "/why-jpf" },
          { label: "Why JME", href: "/why-pvc-pipe-fittings" },
          { label: "Events", href: "/events" },
        ],
      },
    ],
  },
  { label: "LOCATIONS", href: "/distributor" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT US", href: "/contact" },
  { label: "QUICK LINKS", href: "/quick" },
  { label: "NEWS", href: "/news" },
];

/* ================= COMPONENT ================= */

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeBrowseByLink, setActiveBrowseByLink] = useState<string | null>(
    null
  );
  const [activeApplication, setActiveApplication] = useState<string | null>(
    null
  );
  const [activeProductFamily, setActiveProductFamily] = useState<string | null>(
    null
  );
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  /* ================= REFS ================= */

  const desktopSearchRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);
  const desktopSearchButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileSearchButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const companyRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  /* ================= HELPERS ================= */

  const isActive = (href?: string) => {
    if (!href) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  const getRightColumnContent = (
    category: string,
    browseByLabel: string | null
  ) => {
    if (browseByLabel === "Product Families") {
      return categoryMenuData[category].productFamiliesLinks;
    }
    return categoryMenuData[category].applicationsLinks;
  };

  const shouldShowApplicationDetails = (browseByLabel: string | null) => {
    return (
      browseByLabel === null ||
      (browseByLabel === "Applications" && !activeProductFamily)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ================= OUTSIDE CLICK ================= */

  useEffect(() => {
    function handleClickOutside(e: PointerEvent) {
      const target = e.target as Node;

      const clickedDesktopSearch = desktopSearchRef.current?.contains(target);
      const clickedMobileSearch = mobileSearchRef.current?.contains(target);

      const clickedSearchButton =
        desktopSearchButtonRef.current?.contains(target) ||
        mobileSearchButtonRef.current?.contains(target);

      const clickedMobileMenuButton =
        mobileMenuButtonRef.current?.contains(target);

      if (
        searchOpen &&
        !clickedDesktopSearch &&
        !clickedMobileSearch &&
        !clickedSearchButton
      ) {
        setSearchOpen(false);
      }

      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !clickedMobileMenuButton
      ) {
        setIsOpen(false);
      }

      // DESKTOP company dropdown close
      if (
        desktopCompanyOpen &&
        companyRef.current &&
        !companyRef.current.contains(target)
      ) {
        setDesktopCompanyOpen(false);
      }

      // DESKTOP products dropdown close
      if (
        desktopProductsOpen &&
        productsRef.current &&
        !productsRef.current.contains(target)
      ) {
        setDesktopProductsOpen(false);
      }

      // MOBILE company dropdown close
      if (
        mobileCompanyOpen &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setMobileCompanyOpen(false);
      }

      // MOBILE products dropdown close
      if (
        mobileProductsOpen &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setMobileProductsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [
    searchOpen,
    isOpen,
    desktopCompanyOpen,
    mobileCompanyOpen,
    desktopProductsOpen,
    mobileProductsOpen,
  ]);

  useEffect(() => {
    if (!isOpen) {
      setMobileCompanyOpen(false);
      setMobileProductsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveBrowseByLink(null);
    setActiveApplication(null);
    setActiveProductFamily(null); // Reset activeProductFamily when category changes
  }, [activeCategory]);

  /* ================= JSX ================= */

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white border-t-[1.5mm] border-t-[rgb(0,150,77)] transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* TOP BAR */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-end items-center gap-4 py-2">
          <div className="flex items-center gap-3">
            <Facebook className="w-4 h-4 cursor-pointer text-gray-600 hover:text-[#00964d]" />
            <Linkedin className="w-4 h-4 cursor-pointer text-gray-600 hover:text-[#00964d]" />
            <Twitter className="w-4 h-4 cursor-pointer text-gray-600 hover:text-[#00964d]" />
            <Youtube className="w-4 h-4 cursor-pointer text-gray-600 hover:text-[#00964d]" />
          </div>

          {/* DESKTOP SEARCH */}
          <div
            ref={desktopSearchRef}
            onPointerDown={(e) => e.stopPropagation()}
            className="hidden lg:flex relative items-center"
          >
            <button
              ref={desktopSearchButtonRef}
              onClick={() => setSearchOpen((p) => !p)}
              className="p-2"
            >
              <Search className="w-5 h-5" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 z-50">
                <div className="flex items-center gap-2 w-[600px] border bg-white px-3 py-2">
                  <Search className="w-5 h-5" />
                  <input
                    autoFocus
                    placeholder="Search..."
                    className="flex-1 outline-none text-sm"
                  />
                  <X
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => setSearchOpen(false)}
                  />
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => router.push("/contact")}
            className="px-4 py-2 bg-[#00964d] hover:bg-[#007a3c] text-white rounded-md font-medium transition-colors"
          >
            Request a Quote
          </button>
        </div>
      </div>

      {/* NAV */}
      <nav className="relative border-b shadow-sm bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-3">
          <Link href="/">
            <Image
              src="/jm-eagle-logo.png"
              alt="JM Eagle"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-2">
            {navItems.map((item) =>
              item.hasDropDown ? (
                <div
                  key={item.label}
                  ref={item.label === "COMPANY" ? companyRef : productsRef}
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => {
                      if (item.label === "COMPANY") {
                        setDesktopCompanyOpen((p) => !p);
                        setActiveCategory(null);
                      } else if (item.label === "PRODUCTS") {
                        setDesktopProductsOpen((p) => !p);
                        if (!desktopProductsOpen) setActiveCategory(null);
                      }
                    }}
                    className="flex items-center gap-1 px-3 py-2 font-medium text-green-800"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        item.label === "COMPANY"
                          ? desktopCompanyOpen
                            ? "rotate-180"
                            : ""
                          : item.label === "PRODUCTS"
                          ? desktopProductsOpen
                            ? "rotate-180"
                            : ""
                          : ""
                      }`}
                    />
                  </button>

                  {item.label === "PRODUCTS" && desktopProductsOpen ? (
                    <div className="absolute left-0 top-full w-full bg-white border-t shadow-2xl z-50">
                      <div className="container mx-auto px-4">
                        <div className="grid grid-cols-6 gap-4 py-4 border-b">
                          {item.dropdownContent?.[0]?.links?.map((link) => {
                            const categoryLabel = link.label;
                            const isActive = activeCategory === categoryLabel;

                            return (
                              <button
                                key={link.href}
                                onClick={() => {
                                  setActiveCategory(
                                    isActive ? null : categoryLabel
                                  );
                                  setActiveBrowseByLink(null); // Reset browse by link when category changes
                                  setActiveApplication(null); // Reset application when category changes
                                  setActiveProductFamily(null); // Reset product family when category changes
                                }}
                                className={`px-4 py-2 rounded-full font-medium border-2 transition-all ${
                                  isActive
                                    ? "border-blue-500 text-blue-600 bg-blue-50"
                                    : "border-gray-300 text-gray-700 hover:border-blue-500"
                                }`}
                              >
                                {categoryLabel}
                              </button>
                            );
                          })}
                        </div>

                        {activeCategory && categoryMenuData[activeCategory] ? (
                          <div className="py-8">
                            <div className="mb-8 grid grid-cols-2 gap-[2.4rem]">
                              <Link
                                href={`/products/${activeCategory
                                  .toLowerCase()
                                  .replace(/ & /g, "-")
                                  .replace(/ /g, "")}`}
                                className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-center gap-2"
                              >
                                {categoryMenuData[activeCategory].title}
                                <span className="text-xl">→</span>
                              </Link>
                              {/* RIGHT — About Specialty Municipal Systems */}
                              {activeApplication &&
                                applicationDetailsData[activeCategory]?.[
                                  activeApplication
                                ] && (
                                  <Link
                                    href={`/products/${activeApplication
                                      .toLowerCase()
                                      .replace(/ & /g, "-")
                                      .replace(/ /g, "-")}`}
                                    className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-center gap-2"
                                  >
                                    {
                                      applicationDetailsData[activeCategory][
                                        activeApplication
                                      ].title
                                    }
                                    <span className="text-xl">→</span>
                                  </Link>
                                )}
                            </div>

                            <div
                              className={`${
                                activeProductFamily &&
                                activeCategory &&
                                productFamilyDetailsData[activeCategory]?.[
                                  activeProductFamily
                                ]
                              } flex flex-col xl:flex-row xl:flex-wrap  pb-8`}
                            >
                              <div className="w-full xl:w-1/4 px-3 mb-6">
                                <h3 className="font-bold text-gray-900 mb-4">
                                  Browse By
                                </h3>
                                <ul className="space-y-3">
                                  {categoryMenuData[
                                    activeCategory
                                  ].browseByLinks.map((link) => {
                                    const isBrowseByActive =
                                      activeBrowseByLink === link.label;
                                    return (
                                      <li key={link.href}>
                                        <button
                                          onClick={() => {
                                            setActiveBrowseByLink(
                                              isBrowseByActive
                                                ? null
                                                : link.label
                                            );
                                            setActiveApplication(null);
                                            setActiveProductFamily(null);
                                          }}
                                          className={`text-left font-medium flex items-center gap-2 group transition-colors ${
                                            isBrowseByActive
                                              ? "text-blue-600"
                                              : "text-blue-600 hover:text-blue-800"
                                          }`}
                                        >
                                          {link.label}
                                          <span className="text-lg group-hover:translate-x-1 transition-transform">
                                            →
                                          </span>
                                        </button>
                                      </li>
                                    );
                                  })}
                                </ul>

                                <div className="mt-8 border border-gray-200 rounded-lg p-4 bg-gray-50">
                                  <Link
                                    href="/parts-catalog"
                                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 mb-2"
                                  >
                                    Parts Catalog <span>→</span>
                                  </Link>
                                  <p className="text-sm text-gray-700">
                                    Find detailed information and specifications
                                    for our PVC pipe & fittings products.
                                  </p>
                                </div>
                              </div>

                              <div className="w-full xl:w-1/4 px-3 mb-6">
                                <h3 className="font-bold text-gray-900 mb-4">
                                  {activeBrowseByLink || "Applications"}
                                </h3>
                                <ul className="space-y-3">
                                  {getRightColumnContent(
                                    activeCategory,
                                    activeBrowseByLink
                                  ).map((link) => (
                                    <li key={link.href}>
                                      {activeBrowseByLink ===
                                      "Product Families" ? (
                                        <button
                                          onClick={() =>
                                            setActiveProductFamily(
                                              activeProductFamily === link.label
                                                ? null
                                                : link.label
                                            )
                                          }
                                          className={`text-left w-full font-medium flex items-center gap-2 group transition-colors ${
                                            activeProductFamily === link.label
                                              ? "text-blue-600"
                                              : "text-gray-700 hover:text-blue-600"
                                          }`}
                                        >
                                          {link.label}
                                          <span className="text-lg group-hover:translate-x-1 transition-transform">
                                            →
                                          </span>
                                        </button>
                                      ) : shouldShowApplicationDetails(
                                          activeBrowseByLink
                                        ) ? (
                                        <button
                                          onClick={() =>
                                            setActiveApplication(
                                              activeApplication === link.label
                                                ? null
                                                : link.label
                                            )
                                          }
                                          className={`text-left w-full font-medium flex items-center gap-2 group transition-colors ${
                                            activeApplication === link.label
                                              ? "text-blue-600"
                                              : "text-gray-700 hover:text-blue-600"
                                          }`}
                                        >
                                          {link.label}
                                          <span className="text-lg group-hover:translate-x-1 transition-transform">
                                            →
                                          </span>
                                        </button>
                                      ) : (
                                        <Link
                                          href={link.href}
                                          onClick={() =>
                                            setDesktopProductsOpen(false)
                                          }
                                          className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2 group"
                                        >
                                          {link.label}
                                          <span className="text-lg group-hover:translate-x-1 transition-transform">
                                            →
                                          </span>
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {activeProductFamily &&
                                activeCategory &&
                                productFamilyDetailsData[activeCategory]?.[
                                  activeProductFamily
                                ] && (
                                  <div className="col-span-2">
                                    <div className="mb-8">
                                      <Link
                                        href={`/products/${activeProductFamily
                                          .toLowerCase()
                                          .replace(/®/g, "")
                                          .replace(/ /g, "-")}`}
                                        className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-center gap-2"
                                      >
                                        {
                                          productFamilyDetailsData[
                                            activeCategory
                                          ][activeProductFamily].title
                                        }
                                        <span className="text-xl">→</span>
                                      </Link>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8">
                                      <div>
                                        <div className="mb-8">
                                          <h4 className="font-bold text-gray-900 mb-4">
                                            Pipe
                                          </h4>
                                          <ul className="space-y-2">
                                            {productFamilyDetailsData[
                                              activeCategory
                                            ][
                                              activeProductFamily
                                            ].pipeProducts.map((product) => (
                                              <li key={product}>
                                                {(() => {
                                                  const slug =
                                                    getProductSlugByTitle(
                                                      product
                                                    );

                                                  return slug ? (
                                                    <Link
                                                      href={`/products/${slug}`}
                                                      onClick={() =>
                                                        setDesktopProductsOpen(
                                                          false
                                                        )
                                                      }
                                                      className="text-gray-700 hover:text-blue-600 transition-colors"
                                                    >
                                                      {product}
                                                    </Link>
                                                  ) : (
                                                    <span className="text-gray-400 cursor-not-allowed">
                                                      {product}
                                                    </span>
                                                  );
                                                })()}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>

                                        <div>
                                          <h4 className="font-bold text-gray-900 mb-4">
                                            Service Parts & Accessories
                                          </h4>
                                          <ul className="space-y-2">
                                            {productFamilyDetailsData[
                                              activeCategory
                                            ][
                                              activeProductFamily
                                            ].serviceProducts.map((product) => (
                                              <li key={product}>
                                                <span className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                                                  {product}
                                                </span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="font-bold text-gray-900 mb-4">
                                          Fittings
                                        </h4>
                                        <ul className="space-y-2">
                                          {productFamilyDetailsData[
                                            activeCategory
                                          ][
                                            activeProductFamily
                                          ].fittingProducts.map((product) => (
                                            <li key={product}>
                                              <span className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                                                {product}
                                              </span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              {activeApplication &&
                                activeCategory &&
                                applicationDetailsData[activeCategory]?.[
                                  activeApplication
                                ] && (
                                  <div className="w-full xl:w-1/4 px-3 mb-6 flex flex-col flex-1">
                                    <div className="grid grid-cols-2 gap-8 pb-8">
                                      <div>
                                        <h4 className="font-bold text-gray-900 mb-8">
                                          Pipe
                                        </h4>
                                        <ul className="space-y-8">
                                          {applicationDetailsData[
                                            activeCategory
                                          ][activeApplication].pipeProducts.map(
                                            (product) => (
                                              <li key={product}>
                                                {(() => {
                                                  const slug =
                                                    getProductSlugByTitle(
                                                      product
                                                    );

                                                  return slug ? (
                                                    <Link
                                                      href={`/products/${slug}`}
                                                      onClick={() =>
                                                        setDesktopProductsOpen(
                                                          false
                                                        )
                                                      }
                                                      className="text-gray-700 hover:text-blue-600 transition-colors"
                                                    >
                                                      {product}
                                                    </Link>
                                                  ) : (
                                                    <span className="text-gray-400 cursor-not-allowed">
                                                      {product}
                                                    </span>
                                                  );
                                                })()}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>

                                      <div>
                                        <h4 className="font-bold text-gray-900 mb-8">
                                          Fittings
                                        </h4>
                                        <ul className="space-y-8">
                                          {applicationDetailsData[
                                            activeCategory
                                          ][
                                            activeApplication
                                          ].fittingProducts.map((product) => (
                                            <li key={product}>
                                              {(() => {
                                                const slug =
                                                  getProductSlugByTitle(
                                                    product
                                                  );

                                                return slug ? (
                                                  <Link
                                                    href={`/products/${slug}`}
                                                    onClick={() =>
                                                      setDesktopProductsOpen(
                                                        false
                                                      )
                                                    }
                                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                                  >
                                                    {product}
                                                  </Link>
                                                ) : (
                                                  <span className="text-gray-400 cursor-not-allowed">
                                                    {product}
                                                  </span>
                                                );
                                              })()}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h4 className="font-bold text-gray-900 mb-8">
                                          Service Parts & Accessories
                                        </h4>
                                        <ul className="space-y-8">
                                          {applicationDetailsData[
                                            activeCategory
                                          ][
                                            activeApplication
                                          ].serviceProducts.map((product) => (
                                            <li key={product}>
                                              {(() => {
                                                const slug =
                                                  getProductSlugByTitle(
                                                    product
                                                  );

                                                return slug ? (
                                                  <Link
                                                    href={`/products/${slug}`}
                                                    onClick={() =>
                                                      setDesktopProductsOpen(
                                                        false
                                                      )
                                                    }
                                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                                  >
                                                    {product}
                                                  </Link>
                                                ) : (
                                                  <span className="text-gray-400 cursor-not-allowed">
                                                    {product}
                                                  </span>
                                                );
                                              })()}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                )}
                            </div>
                          </div>
                        ) : (
                          <div className="py-12 text-center text-gray-500">
                            <p>Select a category to view details</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : null}

                  {item.label === "COMPANY" && desktopCompanyOpen ? (
                    <div className="absolute left-0 top-full w-full bg-white border-t shadow-xl z-50">
                      <div className="container mx-auto px-16 py-8">
                        <div className="grid grid-cols-2 gap-20">
                          {item.dropdownContent?.map((section) => (
                            <div key={section.title}>
                              <h4 className="text-sm font-semibold border-b pb-2 mb-4">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.links.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      onClick={() => {
                                        setDesktopCompanyOpen(false);
                                        setDesktopProductsOpen(false);
                                      }}
                                      className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  className={`px-3 py-2 font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600"
                      : "text-green-800 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* MOBILE BUTTONS */}
          <div className="lg:hidden flex gap-2">
            <button
              ref={mobileSearchButtonRef}
              onClick={() => setSearchOpen((p) => !p)}
            >
              <Search />
            </button>
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setIsOpen((p) => !p)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        {searchOpen && (
          <div ref={mobileSearchRef} className="lg:hidden px-4 pb-3">
            <input
              autoFocus
              placeholder="Search..."
              className="w-full border px-3 py-2 outline-none"
            />
          </div>
        )}

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            ref={menuRef}
            className="lg:hidden absolute w-full bg-white shadow-lg z-50"
          >
            {navItems.map((item) =>
              item.hasDropDown ? (
                <div key={item.label} className="border-b">
                  <button
                    onClick={() => {
                      if (item.label === "COMPANY") {
                        setMobileCompanyOpen((p) => !p);
                      } else if (item.label === "PRODUCTS") {
                        setMobileProductsOpen((p) => !p);
                      }
                    }}
                    className="flex w-full justify-between px-4 py-3 font-medium"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        item.label === "COMPANY"
                          ? mobileCompanyOpen
                            ? "rotate-180"
                            : ""
                          : item.label === "PRODUCTS"
                          ? mobileProductsOpen
                            ? "rotate-180"
                            : ""
                          : ""
                      }`}
                    />
                  </button>

                  {(item.label === "COMPANY" && mobileCompanyOpen) ||
                  (item.label === "PRODUCTS" && mobileProductsOpen)
                    ? item.dropdownContent?.map((section) => (
                        <div key={section.title} className="px-6 pb-3">
                          <h4 className="text-sm font-semibold mb-2">
                            {section.title}
                          </h4>
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => {
                                setMobileCompanyOpen(false);
                                setMobileProductsOpen(false);
                                setIsOpen(false);
                              }}
                              className="block py-1 text-sm"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))
                    : null}
                </div>
              ) : (
                item.href && (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 border-b"
                  >
                    {item.label}
                  </Link>
                )
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
