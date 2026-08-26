export const kiplProfile = {
  companyName: "Kishore Infrastructures Private Limited",
  shortName: "KIPL",
  managingDirector: "Shri G. Venkata Satya Kishore Raju",
  inceptionYear: 2010,
  cin: "U70109TG2010PTC068342",
  headquarters: "Hyderabad, Telangana (Kavuri Hills, Madhapur)",
  
  // Financial Baselines (FY 2025-26)
  turnoverFY26: 208.13, // In Cr (Rs 20,813.17 Lacs)
  turnoverFY25: 189.33, // In Cr
  pbtFY26: 12.92, // In Cr (Rs 129.21 Million)
  patFY26: 9.67, // In Cr (Rs 96.68 Million)
  
  // Cumulative Executed Portfolio
  totalExecutedOrderBook: 1385.62, // In Cr (Civil + Electrical)
  electricalExecuted: 783.75, // In Cr completed + 341.65 Cr ongoing
  civilExecuted: 316.95, // In Cr completed + 126.24 Cr ongoing
  
  // Banking & Credit Limits
  bankers: ["Canara Bank", "Union Bank"],
  fundBasedLimit: 26.00, // In Cr (Canara 16 Cr, Union 10 Cr)
  nonFundBasedLimit: 115.00, // In Cr Bank Guarantee (Canara 80 Cr, Union 35 Cr)
  creditRatingLT: "INFOMERICS BBB- (Long Term)",
  creditRatingST: "INFOMERICS A3 (Short Term)",

  // Licenses & Registrations
  licensedStatesCount: 9,
  electricalLicenses: [
    "Grade 'A' Electrical License in Telangana",
    "Grade 'A' Electrical License in Andhra Pradesh",
    "Grade 'A' Electrical License in Maharashtra",
    "Grade 'A' Electrical License in Madhya Pradesh",
    "Grade 'A' Electrical License in Rajasthan",
    "Grade 'A' Electrical License in Goa",
    "Super Grade Electrical Contractor License in Karnataka",
    "Class-A1 Licensed Contractor for Military Engineering Services (MES)"
  ],
  civilLicenses: [
    "Karnataka PWD Civil Contractor License",
    "Category A to III License - Karnataka Housing Board",
    "Class-A1 MES Contractor Registration"
  ],

  // Core Capabilities Baseline
  coreCapabilities: [
    { title: "Distribution & RDSS Feeder Separation", experience: "Feeder separation works up to ₹220 Cr order value in MH, MP, RJ" },
    { title: "High Voltage Transmission Lines", experience: "220kV DC Lines, 110kV Lines, 132kV Lines across KA, AP, MH" },
    { title: "Substation EPC", experience: "33/11kV, 110/11kV, 132/11kV Substation & Bay works" },
    { title: "Underground Cabling (HDD Method)", experience: "22kV & LT OH lines conversion to UG Cable in TN & KA" },
    { title: "Railway Electrification (OHE)", experience: "East Coast Railway OHE work in Visakhapatnam" },
    { title: "Civil Commercial & Residential", experience: "Commercial complexes, D-Mart buildings, Warehouses, Colleges up to 9,00,000 SFT" }
  ],

  // Maximum Recommended Tender Thresholds
  maxStandaloneTenderValue: 180.00, // In Cr (approx 80-85% of Turnover)
  jvAlliancePartner: "NCC Limited", // Strategic partner for large tenders > Rs 200 Cr
};
