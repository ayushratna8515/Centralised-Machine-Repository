(function () {
  'use strict';

  /* ============ ICONS ============ */
  var SUN_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>';
  var MOON_ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.5A9 9 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5Z"></path></svg>';
  var MAIL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 6l10 7 10-7"></path></svg>';
  var PHONE_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2Z"></path></svg>';

  var ICON_SHAPES = {
    robot: '<rect x="20" y="78" width="24" height="10" rx="2"/><line x1="32" y1="78" x2="32" y2="58"/><circle cx="32" cy="55" r="4"/><line x1="32" y1="55" x2="58" y2="38"/><circle cx="60" cy="35" r="4"/><line x1="60" y1="35" x2="72" y2="55"/><circle cx="72" cy="60" r="3"/><path d="M67 60 l5 5 M72 55 l0 10 M77 60 l-5 5" stroke-width="2.5"/>',
    tester: '<rect x="16" y="30" width="42" height="30" rx="2"/><circle cx="24" cy="38" r="2" fill="currentColor" stroke="none"/><circle cx="32" cy="38" r="2" fill="currentColor" stroke="none"/><circle cx="40" cy="38" r="2" fill="currentColor" stroke="none"/><circle cx="48" cy="38" r="2" fill="currentColor" stroke="none"/><line x1="24" y1="48" x2="48" y2="48"/><circle cx="74" cy="45" r="16"/><path d="M66 45 l6 7 l12 -14" stroke-width="4"/>',
    aoi: '<line x1="10" y1="75" x2="90" y2="75"/><circle cx="28" cy="75" r="3.5" fill="currentColor" stroke="none"/><circle cx="50" cy="75" r="3.5" fill="currentColor" stroke="none"/><circle cx="72" cy="75" r="3.5" fill="currentColor" stroke="none"/><path d="M22 42 Q50 18 78 42 Q50 58 22 42 Z"/><circle cx="50" cy="42" r="7"/>',
    xray: '<rect x="25" y="18" width="50" height="15" rx="2"/><line x1="50" y1="33" x2="50" y2="56"/><circle cx="50" cy="70" r="15"/><line x1="50" y1="58" x2="50" y2="82"/><line x1="38" y1="70" x2="62" y2="70"/>',
    laser: '<rect x="40" y="18" width="20" height="14" rx="2"/><line x1="50" y1="32" x2="34" y2="80" stroke-dasharray="3 4"/><line x1="50" y1="32" x2="50" y2="80" stroke-dasharray="3 4"/><line x1="50" y1="32" x2="66" y2="80" stroke-dasharray="3 4"/><path d="M43 80 h14" stroke-width="4"/>',
    packer: '<path d="M20 40 L50 25 L80 40 L80 75 L50 90 L20 75 Z"/><path d="M20 40 L50 55 L80 40"/><line x1="50" y1="55" x2="50" y2="90"/><line x1="30" y1="12" x2="30" y2="28" stroke-width="3"/><path d="M24 12 h12" stroke-width="3"/>',
    rework: '<line x1="24" y1="82" x2="55" y2="51"/><rect x="49" y="41" width="15" height="10" rx="2" transform="rotate(45 56.5 46)"/><path d="M62 38 q4 -7 0 -14 q-4 7 0 14" stroke-width="2.5"/><circle cx="27" cy="80" r="3" fill="currentColor" stroke="none"/>',
    dispenser: '<rect x="42" y="14" width="16" height="36" rx="3"/><line x1="50" y1="50" x2="50" y2="63"/><path d="M50 63 q-9 13 0 22 q9 -9 0 -22 Z"/><line x1="18" y1="90" x2="82" y2="90"/>',
    mounter: '<line x1="8" y1="72" x2="92" y2="72"/><rect x="40" y="57" width="20" height="12" rx="1"/><line x1="50" y1="57" x2="50" y2="28"/><circle cx="50" cy="24" r="5"/><line x1="50" y1="19" x2="74" y2="12"/>',
    printer: '<rect x="18" y="30" width="64" height="36" rx="2"/><line x1="30" y1="30" x2="30" y2="66"/><line x1="46" y1="30" x2="46" y2="66"/><line x1="62" y1="30" x2="62" y2="66"/><line x1="74" y1="30" x2="74" y2="66"/><line x1="18" y1="42" x2="82" y2="42"/><line x1="18" y1="54" x2="82" y2="54"/><rect x="13" y="19" width="74" height="7" rx="2"/>',
    oven: '<path d="M18 55 a32 32 0 0 1 64 0" fill="none"/><line x1="8" y1="55" x2="92" y2="55"/><path d="M30 45 q3 -7 6 0 q3 -7 6 0" stroke-width="2.5"/><path d="M52 45 q3 -7 6 0 q3 -7 6 0" stroke-width="2.5"/><circle cx="24" cy="62" r="3" fill="currentColor" stroke="none"/><circle cx="50" cy="62" r="3" fill="currentColor" stroke="none"/><circle cx="76" cy="62" r="3" fill="currentColor" stroke="none"/>',
    chamber: '<rect x="25" y="18" width="50" height="58" rx="4"/><circle cx="50" cy="45" r="15"/><line x1="50" y1="45" x2="59" y2="35"/><line x1="50" y1="45" x2="50" y2="32"/>',
    generic: '<circle cx="50" cy="50" r="19"/><circle cx="50" cy="50" r="6" fill="currentColor" stroke="none"/><line x1="50" y1="22" x2="50" y2="12"/><line x1="50" y1="78" x2="50" y2="88"/><line x1="22" y1="50" x2="12" y2="50"/><line x1="78" y1="50" x2="88" y2="50"/><line x1="31" y1="31" x2="23" y2="23"/><line x1="69" y1="69" x2="77" y2="77"/><line x1="69" y1="31" x2="77" y2="23"/><line x1="31" y1="69" x2="23" y2="77"/>',
    scanner: '<rect x="18" y="22" width="5" height="56" fill="currentColor" stroke="none"/><rect x="27" y="22" width="9" height="56" fill="currentColor" stroke="none"/><rect x="40" y="22" width="4" height="56" fill="currentColor" stroke="none"/><rect x="48" y="22" width="11" height="56" fill="currentColor" stroke="none"/><rect x="63" y="22" width="5" height="56" fill="currentColor" stroke="none"/><rect x="72" y="22" width="8" height="56" fill="currentColor" stroke="none"/><line x1="10" y1="50" x2="90" y2="50" stroke-width="2"/>'
  };
  function equipIconSvg(type) {
    var shape = ICON_SHAPES[type] || ICON_SHAPES.generic;
    return '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">' + shape + '</svg>';
  }

  /* ============ THEME (Day / Night) ============ */
  function applyTheme(mode) { document.documentElement.setAttribute('data-theme', mode); updateThemeButton(mode); }
  function updateThemeButton(mode) {
    var btn = document.getElementById('theme-toggle');
    if (mode === 'dark') { btn.innerHTML = SUN_ICON; btn.title = 'Switch to day mode'; }
    else { btn.innerHTML = MOON_ICON; btn.title = 'Switch to night mode'; }
  }
  (function initTheme() {
    var saved = 'light';
    try { saved = localStorage.getItem('mr_theme') || 'light'; } catch (e) {}
    applyTheme(saved);
  })();
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('mr_theme', next); } catch (e) {}
  });

  /* ============ CONSTANTS ============ */
  var MAJOR_LINES = ['FATP Main Line', 'FATP RE', 'MLB Main Line', 'MLB RE'];
  var MAIN_LINES = ['FATP Main Line', 'MLB Main Line'];
  var SUB_LINES = ['L1', 'L2', 'L3', 'L4', 'L5'];
  var SITES = ['Chennai', 'Hosur', 'Narsapura'];
  var DEFAULT_ENGG_PASSPHRASE = 'Engineering@2026';

  /* ============ SEED DATA ============ */
  /* Chennai carries the original 20-machine FATP/MLB set. The Hosur and Narsapura
     entries are illustrative — assumed to mirror the same FATP/MLB line structure —
     and should be replaced with the real per-site inventory when available. */
  var SEED_ORIGIN = 'Chennai (existing) + assumed Hosur/Narsapura sample data';
  var SEED = [
    { machineId: "MC-101", name: "Screw Fastening Robot", site: "Chennai", majorLine: "FATP Main Line", subLine: "L1", vendor: "Kawasaki Robotics", maintenanceOwner: "FATP Maintenance Team A", machineType: "robot", driName: "Arjun Mehta", driDepartment: "Manufacturing Engineering", driEmail: "arjun.mehta@company.com", driPhone: "+91 98450 11223", cost: 1800000, purchaseDate: "2021-05-10", eolDate: "2029-05-10", cycleDays: 60, lastService: "2026-07-20", nextService: "2026-09-18", status: "Operational", criticality: "High", condition: "Good", purpose: "Automated screw fastening for rear housing assembly.", consumables: ["Screw bits", "Torque calibration kit"], repurpose: "None — fully utilized.", photoId: null, repairLog: [{ id: "r1", date: "2026-05-02", comment: "Screw bit jam cleared, calibration reset.", downtime: true, downtimeHours: 2 }, { id: "r2", date: "2026-07-20", comment: "Routine PM completed, no issues found.", downtime: false, downtimeHours: 0 }] },
    { machineId: "MC-102", name: "ICT / FCT Functional Tester", site: "Chennai", majorLine: "FATP Main Line", subLine: "L2", vendor: "National Instruments", maintenanceOwner: "FATP Maintenance Team A", machineType: "tester", driName: "Priya Raman", driDepartment: "Manufacturing Engineering", driEmail: "priya.raman@company.com", driPhone: "+91 98765 43210", cost: 5200000, purchaseDate: "2020-02-15", eolDate: "2028-02-15", cycleDays: 90, lastService: "2026-06-25", nextService: "2026-11-15", status: "Operational", criticality: "High", condition: "Good", purpose: "Functional and in-circuit test of assembled smartphones prior to packing.", consumables: ["Test probes", "Contact pins"], repurpose: "None.", photoId: null, repairLog: [{ id: "r1", date: "2026-04-11", comment: "Test socket contacts replaced after high failure rate on Line 2.", downtime: true, downtimeHours: 5 }] },
    { machineId: "MC-103", name: "Cosmetic AOI System", site: "Chennai", majorLine: "FATP Main Line", subLine: "L3", vendor: "Koh Young", maintenanceOwner: "FATP Maintenance Team A", machineType: "aoi", driName: "", driDepartment: "", driEmail: "", driPhone: "", cost: 2900000, purchaseDate: "2022-08-01", eolDate: "2032-08-01", cycleDays: 90, lastService: "2026-07-01", nextService: "2026-12-01", status: "Operational", criticality: "Medium", condition: "Good", purpose: "Cosmetic surface defect inspection of finished device housings.", consumables: ["Calibration targets", "Lighting panels"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "MC-104", name: "Laser Marking Station", site: "Chennai", majorLine: "FATP Main Line", subLine: "L4", vendor: "Panasonic", maintenanceOwner: "FATP Maintenance Team B", machineType: "laser", driName: "Karthik Subramaniam", driDepartment: "Maintenance & Reliability", driEmail: "karthik.subramaniam@company.com", driPhone: "+91 99000 22110", cost: 2100000, purchaseDate: "2019-11-20", eolDate: "2025-11-20", cycleDays: 120, lastService: "2026-05-15", nextService: "2026-09-12", status: "Under Maintenance", criticality: "Medium", condition: "Fair", purpose: "Laser etching of IMEI and serial numbers on device housing.", consumables: ["Laser lens cleaning kit"], repurpose: "Past end of life — evaluate replacement vs. refurbishment in the next CapEx cycle.", photoId: null, repairLog: [{ id: "r1", date: "2026-03-10", comment: "Laser head recalibrated after drift detected in etch depth.", downtime: true, downtimeHours: 3 }, { id: "r2", date: "2026-08-30", comment: "Cooling fan replaced.", downtime: false, downtimeHours: 0 }] },
    { machineId: "MC-105", name: "Carton Packing & Sealing Machine", site: "Chennai", majorLine: "FATP Main Line", subLine: "L5", vendor: "Panasonic", maintenanceOwner: "FATP Maintenance Team B", machineType: "packer", driName: "Divya Nair", driDepartment: "Quality Engineering", driEmail: "divya.nair@company.com", driPhone: "+91 90080 33445", cost: 1500000, purchaseDate: "2020-09-05", eolDate: "2028-09-05", cycleDays: 60, lastService: "2026-08-05", nextService: "2026-11-20", status: "Operational", criticality: "Low", condition: "Good", purpose: "Final packaging and carton sealing of finished smartphones.", consumables: ["Sealing tape", "Packing foam"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "MC-201", name: "Rework / Repair Station", site: "Chennai", majorLine: "FATP RE", subLine: "", vendor: "Metcal", maintenanceOwner: "FATP Maintenance Team B", machineType: "rework", driName: "Rohit Sharma", driDepartment: "MLB Process Engineering", driEmail: "rohit.sharma@company.com", driPhone: "+91 98220 55667", cost: 950000, purchaseDate: "2018-01-10", eolDate: "2026-01-10", cycleDays: 45, lastService: "2026-08-15", nextService: "2026-09-05", status: "Operational", criticality: "Medium", condition: "Fair", purpose: "Rework of units flagged as failed during FATP functional testing.", consumables: ["Soldering tips", "Flux", "ESD wrist straps"], repurpose: "Low residual value — consider consolidating with the MLB RE station if utilization allows.", photoId: null, repairLog: [{ id: "r1", date: "2026-06-01", comment: "Heating element replaced on rework tip.", downtime: true, downtimeHours: 1.5 }] },
    { machineId: "MC-301", name: "ASYMTEK Dispensing System", site: "Chennai", majorLine: "MLB Main Line", subLine: "L4", vendor: "Nordson ASYMTEK", maintenanceOwner: "MLB Maintenance Team A", machineType: "dispenser", driName: "Lakshmi Iyer", driDepartment: "FATP Process Engineering", driEmail: "lakshmi.iyer@company.com", driPhone: "+91 93810 77889", cost: 3600000, purchaseDate: "2021-03-22", eolDate: "2029-03-22", cycleDays: 75, lastService: "2026-07-10", nextService: "2026-10-20", status: "Operational", criticality: "High", condition: "Good", purpose: "Precision underfill and conformal coating dispensing on PCBA.", consumables: ["Dispensing needles", "Underfill material", "Syringe barrels"], repurpose: "None.", photoId: null, repairLog: [{ id: "r1", date: "2026-05-18", comment: "Needle clog cleared, nozzle replaced.", downtime: true, downtimeHours: 1 }] },
    { machineId: "MC-302", name: "Fuji NXT Pick-and-Place Mounter", site: "Chennai", majorLine: "MLB Main Line", subLine: "L2", vendor: "Fuji Corporation", maintenanceOwner: "MLB Maintenance Team A", machineType: "mounter", driName: "Vikram Desai", driDepartment: "Facilities & CapEx", driEmail: "vikram.desai@company.com", driPhone: "+91 97400 99001", cost: 8200000, purchaseDate: "2022-04-01", eolDate: "2034-04-01", cycleDays: 60, lastService: "2026-08-01", nextService: "2026-12-10", status: "Operational", criticality: "High", condition: "Good", purpose: "High-speed SMT component placement on PCBA.", consumables: ["Feeder tape splices", "Nozzle sets", "Vacuum filters"], repurpose: "None — high-utilization asset.", photoId: null, repairLog: [] },
    { machineId: "MC-303", name: "Reflow Soldering Oven", site: "Chennai", majorLine: "MLB Main Line", subLine: "L3", vendor: "Rehm Thermal Systems", maintenanceOwner: "MLB Maintenance Team B", machineType: "oven", driName: "Sneha Pillai", driDepartment: "Maintenance & Reliability", driEmail: "sneha.pillai@company.com", driPhone: "+91 96290 44556", cost: 4100000, purchaseDate: "2017-06-01", eolDate: "2025-06-01", cycleDays: 60, lastService: "2026-08-10", nextService: "2026-09-25", status: "Under Maintenance", criticality: "High", condition: "Fair", purpose: "Lead-free reflow soldering of PCBA.", consumables: ["Nitrogen gas", "Flux cleaning solvent"], repurpose: "Past end of life — replacement already under CapEx review this quarter.", photoId: null, repairLog: [{ id: "r1", date: "2026-02-14", comment: "Conveyor belt motor replaced.", downtime: true, downtimeHours: 6 }, { id: "r2", date: "2026-08-10", comment: "Thermal profile recalibrated.", downtime: false, downtimeHours: 0 }] },
    { machineId: "MC-304", name: "Nordson Dage X-ray Inspection", site: "Chennai", majorLine: "MLB Main Line", subLine: "L5", vendor: "Nordson Dage", maintenanceOwner: "MLB Maintenance Team A", machineType: "xray", driName: "Aditya Kulkarni", driDepartment: "MLB Process Engineering", driEmail: "aditya.kulkarni@company.com", driPhone: "+91 95660 88992", cost: 5400000, purchaseDate: "2023-01-15", eolDate: "2033-01-15", cycleDays: 120, lastService: "2026-05-20", nextService: "2026-09-17", status: "Operational", criticality: "High", condition: "Good", purpose: "BGA and solder joint x-ray inspection of PCBA.", consumables: ["X-ray tube calibration kit"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "MC-305", name: "DEK Screen Printer", site: "Chennai", majorLine: "MLB Main Line", subLine: "L1", vendor: "DEK (ASM)", maintenanceOwner: "MLB Maintenance Team A", machineType: "printer", driName: "Meera Krishnan", driDepartment: "FATP Process Engineering", driEmail: "meera.krishnan@company.com", driPhone: "+91 94440 66778", cost: 2700000, purchaseDate: "2019-10-10", eolDate: "2027-08-15", cycleDays: 45, lastService: "2026-08-20", nextService: "2026-11-01", status: "Operational", criticality: "High", condition: "Good", purpose: "Solder paste printing on PCB prior to component placement.", consumables: ["Stencils", "Squeegee blades", "Solder paste"], repurpose: "None.", photoId: null, repairLog: [{ id: "r1", date: "2026-07-05", comment: "Stencil cleaning cycle failure resolved; replaced wiper roll.", downtime: true, downtimeHours: 2 }] },
    { machineId: "MC-401", name: "PCBA Rework Station", site: "Chennai", majorLine: "MLB RE", subLine: "", vendor: "Metcal", maintenanceOwner: "MLB Maintenance Team B", machineType: "rework", driName: "Arjun Mehta", driDepartment: "Manufacturing Engineering", driEmail: "arjun.mehta@company.com", driPhone: "+91 98450 11223", cost: 1100000, purchaseDate: "2019-07-01", eolDate: "2027-07-01", cycleDays: 45, lastService: "2026-08-05", nextService: "2026-09-19", status: "Operational", criticality: "Medium", condition: "Good", purpose: "Component-level rework of defective PCBAs flagged during MLB inline test.", consumables: ["Soldering tips", "Flux", "Hot air nozzles"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "MC-106", name: "Screw Fastening Robot (Backup)", site: "Chennai", majorLine: "FATP Main Line", subLine: "L1", vendor: "Kawasaki Robotics", maintenanceOwner: "FATP Maintenance Team A", machineType: "robot", driName: "Priya Raman", driDepartment: "Manufacturing Engineering", driEmail: "priya.raman@company.com", driPhone: "+91 98765 43210", cost: 1750000, purchaseDate: "2022-02-14", eolDate: "2030-02-14", cycleDays: 60, lastService: "2026-08-01", nextService: "2026-12-15", status: "Idle", criticality: "Medium", condition: "Good", purpose: "Standby unit for L1 screw fastening — activated during peak volume.", consumables: ["Screw bits"], repurpose: "Under-utilized — evaluate redeploying to L4 if the laser station needs extended downtime.", photoId: null, repairLog: [] },
    { machineId: "MC-107", name: "Barcode & Label Verification Station", site: "Chennai", majorLine: "FATP Main Line", subLine: "L2", vendor: "Cognex", maintenanceOwner: "FATP Maintenance Team A", machineType: "scanner", driName: "Karthik Subramaniam", driDepartment: "Maintenance & Reliability", driEmail: "karthik.subramaniam@company.com", driPhone: "+91 99000 22110", cost: 620000, purchaseDate: "2021-09-01", eolDate: "2028-09-01", cycleDays: 90, lastService: "2026-07-15", nextService: "2026-10-13", status: "Operational", criticality: "Medium", condition: "Good", purpose: "Verifies IMEI / serial barcode and label placement before functional test.", consumables: ["Scanner lens wipes"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "MC-108", name: "Cosmetic AOI System (L3B)", site: "Chennai", majorLine: "FATP Main Line", subLine: "L3", vendor: "Koh Young", maintenanceOwner: "FATP Maintenance Team A", machineType: "aoi", driName: "", driDepartment: "", driEmail: "", driPhone: "", cost: 2850000, purchaseDate: "2023-03-10", eolDate: "2033-03-10", cycleDays: 90, lastService: "2026-08-05", nextService: "2026-11-03", status: "Operational", criticality: "Medium", condition: "Good", purpose: "Secondary cosmetic inspection unit added for L3 capacity expansion.", consumables: ["Calibration targets"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "MC-202", name: "Retest & Triage Station", site: "Chennai", majorLine: "FATP RE", subLine: "", vendor: "Chroma ATE", maintenanceOwner: "FATP Maintenance Team B", machineType: "tester", driName: "Divya Nair", driDepartment: "Quality Engineering", driEmail: "divya.nair@company.com", driPhone: "+91 90080 33445", cost: 1400000, purchaseDate: "2020-06-01", eolDate: "2027-06-01", cycleDays: 60, lastService: "2026-07-28", nextService: "2026-09-26", status: "Operational", criticality: "Medium", condition: "Fair", purpose: "Retests reworked units before returning them to the main FATP line.", consumables: ["Test probes"], repurpose: "None.", photoId: null, repairLog: [{ id: "r1", date: "2026-04-20", comment: "Power supply unit replaced after intermittent faults.", downtime: true, downtimeHours: 4 }] },
    { machineId: "MC-306", name: "DEK Screen Printer (Backup)", site: "Chennai", majorLine: "MLB Main Line", subLine: "L1", vendor: "DEK (ASM)", maintenanceOwner: "MLB Maintenance Team A", machineType: "printer", driName: "Rohit Sharma", driDepartment: "MLB Process Engineering", driEmail: "rohit.sharma@company.com", driPhone: "+91 98220 55667", cost: 2600000, purchaseDate: "2020-01-15", eolDate: "2028-01-15", cycleDays: 45, lastService: "2026-08-18", nextService: "2026-10-02", status: "Idle", criticality: "Medium", condition: "Good", purpose: "Backup printer for L1 — brought online during high-mix changeovers.", consumables: ["Stencils", "Solder paste"], repurpose: "Low utilization — consider reallocating to a new line if volume doesn't increase.", photoId: null, repairLog: [] },
    { machineId: "MC-307", name: "Fuji NXT Mounter (Fine Pitch)", site: "Chennai", majorLine: "MLB Main Line", subLine: "L2", vendor: "Fuji Corporation", maintenanceOwner: "MLB Maintenance Team A", machineType: "mounter", driName: "Lakshmi Iyer", driDepartment: "FATP Process Engineering", driEmail: "lakshmi.iyer@company.com", driPhone: "+91 93810 77889", cost: 8600000, purchaseDate: "2023-06-01", eolDate: "2035-06-01", cycleDays: 60, lastService: "2026-08-12", nextService: "2026-12-20", status: "Operational", criticality: "High", condition: "Good", purpose: "Fine-pitch component placement (CSP / BGA) following the main chip-shooter pass.", consumables: ["Nozzle sets", "Vacuum filters"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "MC-308", name: "Conformal Coating Machine", site: "Chennai", majorLine: "MLB Main Line", subLine: "L4", vendor: "PVA (Precision Valve & Automation)", maintenanceOwner: "MLB Maintenance Team B", machineType: "dispenser", driName: "Vikram Desai", driDepartment: "Facilities & CapEx", driEmail: "vikram.desai@company.com", driPhone: "+91 97400 99001", cost: 3100000, purchaseDate: "2019-04-18", eolDate: "2026-04-18", cycleDays: 75, lastService: "2026-07-22", nextService: "2026-10-05", status: "Operational", criticality: "Medium", condition: "Fair", purpose: "Applies protective conformal coating to PCBA after inspection.", consumables: ["Coating fluid", "Masking tape"], repurpose: "Past end of life — assess coating quality risk before deciding on replacement timing.", photoId: null, repairLog: [{ id: "r1", date: "2026-05-30", comment: "Spray nozzle replaced after inconsistent coating thickness reported.", downtime: true, downtimeHours: 2.5 }] },
    { machineId: "MC-402", name: "PCBA Rework Station (X-ray Review)", site: "Chennai", majorLine: "MLB RE", subLine: "", vendor: "Metcal", maintenanceOwner: "MLB Maintenance Team B", machineType: "rework", driName: "Sneha Pillai", driDepartment: "Maintenance & Reliability", driEmail: "sneha.pillai@company.com", driPhone: "+91 96290 44556", cost: 1300000, purchaseDate: "2021-11-01", eolDate: "2029-11-01", cycleDays: 45, lastService: "2026-08-22", nextService: "2026-10-06", status: "Decommissioned", criticality: "Low", condition: "Poor", purpose: "Previously used for BGA rework with inline x-ray review; replaced by the MC-401 workflow.", consumables: [], repurpose: "Decommissioned — pending disposal or parts harvest for MC-401 spares.", photoId: null, repairLog: [{ id: "r1", date: "2026-01-15", comment: "Recurring alignment fault; decision made to decommission rather than repair.", downtime: true, downtimeHours: 8 }] },
    { machineId: "HS-101", name: "Screw Fastening Robot", site: "Hosur", majorLine: "FATP Main Line", subLine: "L1", vendor: "Kawasaki Robotics", maintenanceOwner: "FATP Maintenance Team A", machineType: "robot", driName: "Aditya Kulkarni", driDepartment: "MLB Process Engineering", driEmail: "aditya.kulkarni@company.com", driPhone: "+91 95660 88992", cost: 1850000, purchaseDate: "2022-06-12", eolDate: "2030-06-12", cycleDays: 60, lastService: "2026-07-28", nextService: "2026-09-26", status: "Operational", criticality: "High", condition: "Good", purpose: "Automated screw fastening for rear housing assembly.", consumables: ["Screw bits", "Torque calibration kit"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "HS-103", name: "Cosmetic AOI System", site: "Hosur", majorLine: "FATP Main Line", subLine: "L3", vendor: "Koh Young", maintenanceOwner: "FATP Maintenance Team A", machineType: "aoi", driName: "Meera Krishnan", driDepartment: "FATP Process Engineering", driEmail: "meera.krishnan@company.com", driPhone: "+91 94440 66778", cost: 2950000, purchaseDate: "2021-10-05", eolDate: "2031-10-05", cycleDays: 90, lastService: "2026-06-30", nextService: "2026-09-28", status: "Operational", criticality: "Medium", condition: "Good", purpose: "Cosmetic surface defect inspection of finished device housings.", consumables: ["Calibration targets", "Lighting panels"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "HS-201", name: "Rework / Repair Station", site: "Hosur", majorLine: "FATP RE", subLine: "", vendor: "Metcal", maintenanceOwner: "FATP Maintenance Team B", machineType: "rework", driName: "Arjun Mehta", driDepartment: "Manufacturing Engineering", driEmail: "arjun.mehta@company.com", driPhone: "+91 98450 11223", cost: 900000, purchaseDate: "2019-03-20", eolDate: "2027-03-20", cycleDays: 45, lastService: "2026-08-02", nextService: "2026-09-16", status: "Operational", criticality: "Medium", condition: "Fair", purpose: "Rework of units flagged as failed during FATP functional testing.", consumables: ["Soldering tips", "Flux"], repurpose: "None.", photoId: null, repairLog: [{ id: "r1", date: "2026-04-05", comment: "Tip replaced after wear, recalibrated.", downtime: true, downtimeHours: 1 }] },
    { machineId: "HS-302", name: "Fuji NXT Pick-and-Place Mounter", site: "Hosur", majorLine: "MLB Main Line", subLine: "L2", vendor: "Fuji Corporation", maintenanceOwner: "MLB Maintenance Team A", machineType: "mounter", driName: "Priya Raman", driDepartment: "Manufacturing Engineering", driEmail: "priya.raman@company.com", driPhone: "+91 98765 43210", cost: 8300000, purchaseDate: "2023-01-18", eolDate: "2035-01-18", cycleDays: 60, lastService: "2026-08-05", nextService: "2026-12-04", status: "Operational", criticality: "High", condition: "Good", purpose: "High-speed SMT component placement on PCBA.", consumables: ["Feeder tape splices", "Nozzle sets"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "HS-303", name: "Reflow Soldering Oven", site: "Hosur", majorLine: "MLB Main Line", subLine: "L3", vendor: "Rehm Thermal Systems", maintenanceOwner: "MLB Maintenance Team B", machineType: "oven", driName: "Karthik Subramaniam", driDepartment: "Maintenance & Reliability", driEmail: "karthik.subramaniam@company.com", driPhone: "+91 99000 22110", cost: 4200000, purchaseDate: "2018-09-14", eolDate: "2026-09-14", cycleDays: 60, lastService: "2026-07-18", nextService: "2026-09-16", status: "Under Maintenance", criticality: "High", condition: "Fair", purpose: "Lead-free reflow soldering of PCBA.", consumables: ["Nitrogen gas", "Flux cleaning solvent"], repurpose: "Approaching end of life — flagged for CapEx review this cycle.", photoId: null, repairLog: [{ id: "r1", date: "2026-03-01", comment: "Zone 3 heater element replaced.", downtime: true, downtimeHours: 4 }] },
    { machineId: "HS-401", name: "PCBA Rework Station", site: "Hosur", majorLine: "MLB RE", subLine: "", vendor: "Metcal", maintenanceOwner: "MLB Maintenance Team B", machineType: "rework", driName: "", driDepartment: "", driEmail: "", driPhone: "", cost: 1150000, purchaseDate: "2020-05-11", eolDate: "2028-05-11", cycleDays: 45, lastService: "2026-08-10", nextService: "2026-09-24", status: "Operational", criticality: "Medium", condition: "Good", purpose: "Component-level rework of defective PCBAs flagged during MLB inline test.", consumables: ["Soldering tips", "Flux"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "NS-102", name: "ICT / FCT Functional Tester", site: "Narsapura", majorLine: "FATP Main Line", subLine: "L2", vendor: "National Instruments", maintenanceOwner: "FATP Maintenance Team A", machineType: "tester", driName: "Divya Nair", driDepartment: "Quality Engineering", driEmail: "divya.nair@company.com", driPhone: "+91 90080 33445", cost: 5300000, purchaseDate: "2021-08-09", eolDate: "2029-08-09", cycleDays: 90, lastService: "2026-06-15", nextService: "2026-09-13", status: "Operational", criticality: "High", condition: "Good", purpose: "Functional and in-circuit test of assembled smartphones prior to packing.", consumables: ["Test probes", "Contact pins"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "NS-104", name: "Laser Marking Station", site: "Narsapura", majorLine: "FATP Main Line", subLine: "L4", vendor: "Panasonic", maintenanceOwner: "FATP Maintenance Team B", machineType: "laser", driName: "Rohit Sharma", driDepartment: "MLB Process Engineering", driEmail: "rohit.sharma@company.com", driPhone: "+91 98220 55667", cost: 2150000, purchaseDate: "2022-01-25", eolDate: "2030-01-25", cycleDays: 120, lastService: "2026-05-28", nextService: "2026-09-25", status: "Operational", criticality: "Medium", condition: "Good", purpose: "Laser etching of IMEI and serial numbers on device housing.", consumables: ["Laser lens cleaning kit"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "NS-105", name: "Carton Packing & Sealing Machine", site: "Narsapura", majorLine: "FATP Main Line", subLine: "L5", vendor: "Panasonic", maintenanceOwner: "FATP Maintenance Team B", machineType: "packer", driName: "Lakshmi Iyer", driDepartment: "FATP Process Engineering", driEmail: "lakshmi.iyer@company.com", driPhone: "+91 93810 77889", cost: 1550000, purchaseDate: "2021-12-01", eolDate: "2029-12-01", cycleDays: 60, lastService: "2026-08-01", nextService: "2026-11-16", status: "Operational", criticality: "Low", condition: "Good", purpose: "Final packaging and carton sealing of finished smartphones.", consumables: ["Sealing tape", "Packing foam"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "NS-301", name: "ASYMTEK Dispensing System", site: "Narsapura", majorLine: "MLB Main Line", subLine: "L4", vendor: "Nordson ASYMTEK", maintenanceOwner: "MLB Maintenance Team A", machineType: "dispenser", driName: "Vikram Desai", driDepartment: "Facilities & CapEx", driEmail: "vikram.desai@company.com", driPhone: "+91 97400 99001", cost: 3650000, purchaseDate: "2022-07-19", eolDate: "2030-07-19", cycleDays: 75, lastService: "2026-07-01", nextService: "2026-10-11", status: "Operational", criticality: "High", condition: "Good", purpose: "Precision underfill and conformal coating dispensing on PCBA.", consumables: ["Dispensing needles", "Underfill material"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "NS-304", name: "Nordson Dage X-ray Inspection", site: "Narsapura", majorLine: "MLB Main Line", subLine: "L5", vendor: "Nordson Dage", maintenanceOwner: "MLB Maintenance Team A", machineType: "xray", driName: "Sneha Pillai", driDepartment: "Maintenance & Reliability", driEmail: "sneha.pillai@company.com", driPhone: "+91 96290 44556", cost: 5450000, purchaseDate: "2022-11-30", eolDate: "2032-11-30", cycleDays: 120, lastService: "2026-05-25", nextService: "2026-09-22", status: "Operational", criticality: "High", condition: "Good", purpose: "BGA and solder joint x-ray inspection of PCBA.", consumables: ["X-ray tube calibration kit"], repurpose: "None.", photoId: null, repairLog: [] },
    { machineId: "NS-305", name: "DEK Screen Printer", site: "Narsapura", majorLine: "MLB Main Line", subLine: "L1", vendor: "DEK (ASM)", maintenanceOwner: "MLB Maintenance Team A", machineType: "printer", driName: "Aditya Kulkarni", driDepartment: "MLB Process Engineering", driEmail: "aditya.kulkarni@company.com", driPhone: "+91 95660 88992", cost: 2750000, purchaseDate: "2020-04-17", eolDate: "2028-04-17", cycleDays: 45, lastService: "2026-08-15", nextService: "2026-09-29", status: "Operational", criticality: "High", condition: "Good", purpose: "Solder paste printing on PCB prior to component placement.", consumables: ["Stencils", "Squeegee blades"], repurpose: "None.", photoId: null, repairLog: [{ id: "r1", date: "2026-06-20", comment: "Squeegee blade replaced after wear.", downtime: true, downtimeHours: 1 }] }
  ];


  /* ============ DATA STORE ============ */
  var Store = (function () {
    var backend = null, db = null, cache = [], listeners = [];
    function notify() { listeners.forEach(function (fn) { fn(cache); }); }
    function localLoad() { try { var raw = localStorage.getItem('mr_machines_demo_v2'); cache = raw ? JSON.parse(raw) : []; } catch (e) { cache = []; } }
    function localSave() { try { localStorage.setItem('mr_machines_demo_v2', JSON.stringify(cache)); } catch (e) {} }
    return {
      init: function () {
        var hasFirebase = typeof FIREBASE_CONFIG !== 'undefined'
          && FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey.indexOf('REPLACE_WITH') !== 0
          && typeof firebase !== 'undefined';
        if (hasFirebase) {
          try {
            var app = firebase.apps && firebase.apps.length ? firebase.apps[0] : firebase.initializeApp(FIREBASE_CONFIG);
            db = firebase.firestore(app);
          } catch (e) { console.error('Firebase init failed, falling back to local storage', e); db = null; }
        }
        if (db) {
          backend = 'db';
          db.collection('machines').onSnapshot(
            function (snap) { cache = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); }); notify(); },
            function (err) { console.error('db subscription error', err); showToast('Live sync hit a snag — showing the last data received.', 'error'); }
          );
        } else { backend = 'local'; localLoad(); notify(); }
        return Promise.resolve(backend);
      },
      getBackend: function () { return backend; },
      onChange: function (fn) { listeners.push(fn); },
      add: function (data) {
        if (backend === 'db') return db.collection('machines').add(data);
        var id = 'm_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
        cache.push(Object.assign({ id: id }, data)); localSave(); notify();
        return Promise.resolve({ id: id });
      },
      update: function (id, data) {
        if (backend === 'db') return db.collection('machines').doc(id).update(data);
        var idx = cache.findIndex(function (m) { return m.id === id; });
        if (idx >= 0) { cache[idx] = Object.assign({}, cache[idx], data); localSave(); notify(); }
        return Promise.resolve();
      },
      remove: function (id) {
        if (backend === 'db') return db.collection('machines').doc(id).delete();
        cache = cache.filter(function (m) { return m.id !== id; }); localSave(); notify();
        return Promise.resolve();
      },
      cleanupLegacy: function () {
        if (backend !== 'db') return Promise.resolve();
        return db.collection('machines').get().then(function (snap) {
          var legacy = snap.docs.filter(function (d) { var data = d.data(); return !data.majorLine || !data.site; });
          if (legacy.length === 0) return;
          var chain = Promise.resolve();
          legacy.forEach(function (doc) { chain = chain.then(function () { return db.collection('machines').doc(doc.id).delete(); }); });
          return chain;
        }).catch(function () {});
      },
      getConfigHash: function (key) {
        if (backend === 'db') {
          return db.collection('config').doc(key).get().then(function (snap) { return snap.exists ? (snap.data().hash || null) : null; });
        }
        try { return Promise.resolve(localStorage.getItem('mr_hash_' + key + '_local')); } catch (e) { return Promise.resolve(null); }
      },
      setConfigHash: function (key, hash) {
        if (backend === 'db') return db.collection('config').doc(key).set({ hash: hash, updatedAt: Date.now() });
        try { localStorage.setItem('mr_hash_' + key + '_local', hash); } catch (e) {}
        return Promise.resolve();
      },
      seedConfigHashIfEmpty: function (key, defaultHash) {
        if (backend === 'db') {
          return db.collection('config').doc(key).get().then(function (snap) {
            if (snap.exists) return;
            return db.collection('config').doc(key).set({ hash: defaultHash, updatedAt: Date.now() }).catch(function () {});
          }).catch(function () {});
        }
        try { if (!localStorage.getItem('mr_hash_' + key + '_local')) localStorage.setItem('mr_hash_' + key + '_local', defaultHash); } catch (e) {}
        return Promise.resolve();
      },
      seedIfEmpty: function (rows) {
        if (backend === 'db') {
          return db.collection('machines').limit(1).get().then(function (snap) {
            if (!snap.empty) return;
            var chain = Promise.resolve();
            rows.forEach(function (row) { chain = chain.then(function () { return db.collection('machines').add(row); }); });
            return chain;
          }).catch(function () {});
        }
        if (cache.length === 0) { cache = rows.map(function (row, i) { return Object.assign({ id: 'm_seed_' + i }, row); }); localSave(); notify(); }
        return Promise.resolve();
      }
    };
  })();

  /* ============ STATE ============ */
  var machines = [];
  var filters = { site: '', majorLine: '', subLine: '', status: '', criticality: '', vendor: '', q: '', quickFilter: '' };
  var editingId = null, pendingDelete = false;
  var canEdit = false;
  var draftRepairLog = [], currentPhotoId = null;
  var TODAY = new Date();

  function siteScopedMachines() {
    if (!filters.site) return machines;
    return machines.filter(function (m) { return m.site === filters.site; });
  }

  function daysBetween(dateStr) {
    if (!dateStr) return null;
    var d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) return null;
    return Math.round((d.getTime() - TODAY.getTime()) / 86400000);
  }
  function money(n) {
    if (n === undefined || n === null || n === '') return '—';
    var num = Number(n); if (isNaN(num)) return '—';
    return '₹' + num.toLocaleString('en-IN');
  }
  function fmtDate(dateStr) {
    if (!dateStr) return '—';
    var d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }
  function daysLabel(days) {
    if (days === null) return '—';
    if (days < 0) return 'Overdue ' + Math.abs(days) + 'd';
    if (days === 0) return 'Due today';
    return 'Due in ' + days + 'd';
  }
  function statusClass(status) {
    if (status === 'Operational') return 'operational';
    if (status === 'Under Maintenance') return 'maintenance';
    if (status === 'Idle') return 'idle';
    return 'decommissioned';
  }
  function lineLabel(m) { return m.subLine ? (m.majorLine + ' · ' + m.subLine) : m.majorLine; }
  function hasDowntimeHistory(m) { return Array.isArray(m.repairLog) && m.repairLog.some(function (r) { return r.downtime; }); }
  function escapeHtml(str) { return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function showToast(msg, type) {
    var container = document.getElementById('toast-container');
    var el = document.createElement('div');
    el.className = 'toast ' + (type || 'success');
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(function () {
      el.style.opacity = '0'; el.style.transition = 'opacity 0.2s ease';
      setTimeout(function () { el.remove(); }, 220);
    }, 4200);
  }

  function renderSyncBadge() {
    var dot = document.getElementById('sync-dot'), text = document.getElementById('sync-text');
    if (Store.getBackend() === 'db') { dot.className = 'sync-dot'; text.textContent = 'Live · synced with your team'; }
    else { dot.className = 'sync-dot local'; text.textContent = 'Local demo (not shared)'; }
    document.getElementById('view-only-tag').style.display = (Store.getBackend() === 'db' && !canEdit) ? 'inline-block' : 'none';
  }

  function applyPermissionUI() {
    document.getElementById('add-btn').disabled = !canEdit;
    document.getElementById('add-btn').title = canEdit ? '' : 'View-only access — ask the owner to grant edit access';
    var qlSite = document.getElementById('dt-ql-site');
    if (qlSite) {
      document.getElementById('dt-ql-start-btn').title = canEdit ? '' : 'View-only access — ask the owner to grant edit access';
      updateQuickLogSiteStatus();
      populateQuickLogMachineOptions();
    }
  }

  /* ============ FILTER OPTIONS ============ */
  function uniqueSorted(arr) { return Array.from(new Set(arr.filter(Boolean))).sort(); }
  function populateVendorSelect() {
    var sel = document.getElementById('f-vendor');
    var current = filters.vendor;
    var placeholder = sel.options[0];
    sel.innerHTML = ''; sel.appendChild(placeholder);
    uniqueSorted(machines.map(function (m) { return m.vendor; })).forEach(function (v) {
      var opt = document.createElement('option'); opt.value = v; opt.textContent = v; sel.appendChild(opt);
    });
    sel.value = current || '';
  }
  document.getElementById('f-majorLine').addEventListener('change', function (e) {
    filters.majorLine = e.target.value; filters.subLine = '';
    document.getElementById('f-subLine').value = '';
    updateSubLineEnabled();
    renderAll();
  });
  function updateSubLineEnabled() {
    var enabled = MAIN_LINES.indexOf(filters.majorLine) !== -1;
    document.getElementById('f-subLine').disabled = !enabled;
  }
  document.getElementById('f-subLine').addEventListener('change', function (e) { filters.subLine = e.target.value; renderTable(); });
  ['status', 'criticality', 'vendor'].forEach(function (key) {
    document.getElementById('f-' + key).addEventListener('change', function (e) { filters[key] = e.target.value; renderTable(); });
  });
  document.getElementById('search-input').addEventListener('input', function (e) { filters.q = e.target.value; renderTable(); });
  document.getElementById('reset-filters').addEventListener('click', function () {
    var keepSite = filters.site;
    filters = { site: keepSite, majorLine: '', subLine: '', status: '', criticality: '', vendor: '', q: '', quickFilter: '' };
    document.getElementById('search-input').value = '';
    document.getElementById('f-majorLine').value = '';
    document.getElementById('f-subLine').value = '';
    ['status', 'criticality', 'vendor'].forEach(function (key) { document.getElementById('f-' + key).value = ''; });
    updateSubLineEnabled();
    renderAll();
  });

  /* ============ SITE TABS ============ */
  function renderSiteTabs() {
    var container = document.getElementById('site-tabs');
    var tabs = [''].concat(SITES);
    container.innerHTML = tabs.map(function (s) {
      var label = s === '' ? 'All Sites' : s;
      var count = s === '' ? machines.length : machines.filter(function (m) { return m.site === s; }).length;
      var active = filters.site === s;
      return '<button type="button" class="site-tab' + (active ? ' active' : '') + '" data-site="' + s + '">' + escapeHtml(label) + '<span class="site-tab-count">' + count + '</span></button>';
    }).join('');
    container.querySelectorAll('.site-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.site = btn.getAttribute('data-site');
        filters.majorLine = ''; filters.subLine = ''; filters.quickFilter = '';
        syncFilterInputs(); renderAll();
        resetDtQuickLog();
      });
    });
  }

  /* ============ ATTENTION PANEL ============ */
  var attentionExpanded = false;
  function renderAttentionPanel() {
    var list = siteScopedMachines()
      .map(function (m) { return { m: m, days: daysBetween(m.nextService) }; })
      .filter(function (x) { return x.days !== null && x.days <= 30; })
      .sort(function (a, b) { return a.days - b.days; });

    var container = document.getElementById('attention-panel');
    if (list.length === 0) { container.innerHTML = ''; attentionExpanded = false; return; }
    var overdueCount = list.filter(function (x) { return x.days < 0; }).length;
    var shown = list.slice(0, 8);
    var summary = overdueCount > 0
      ? overdueCount + ' overdue, ' + (list.length - overdueCount) + ' due within 30 days'
      : list.length + ' due within 30 days';

    var html = '<div class="attention-panel' + (overdueCount > 0 ? ' critical' : '') + (attentionExpanded ? ' expanded' : '') + '">' +
      '<div class="attention-head" id="attention-toggle">⚠ Maintenance attention — ' + summary + '<span class="attention-chevron">▾</span></div>' +
      '<div class="attention-list">';
    shown.forEach(function (x) {
      html += '<div class="attention-item" data-id="' + x.m.id + '">' +
        '<div><div class="name">' + escapeHtml(x.m.name) + '</div><div class="meta">' + escapeHtml(lineLabel(x.m)) + ' · ' + escapeHtml(x.m.maintenanceOwner || 'Unassigned') + '</div></div>' +
        '<div class="days ' + (x.days < 0 ? 'overdue' : 'soon') + '">' + daysLabel(x.days) + '</div>' +
        '</div>';
    });
    if (list.length > shown.length) {
      html += '<button class="attention-more" id="attention-view-all">+' + (list.length - shown.length) + ' more — view all in table</button>';
    }
    html += '</div></div>';
    container.innerHTML = html;

    document.getElementById('attention-toggle').addEventListener('click', function () {
      attentionExpanded = !attentionExpanded;
      container.querySelector('.attention-panel').classList.toggle('expanded', attentionExpanded);
    });
    container.querySelectorAll('.attention-item').forEach(function (el) {
      el.addEventListener('click', function (e) { e.stopPropagation(); openDrawer('edit', el.getAttribute('data-id')); });
    });
    var viewAll = document.getElementById('attention-view-all');
    if (viewAll) viewAll.addEventListener('click', function (e) {
      e.stopPropagation();
      filters.quickFilter = 'dueSoon'; renderAll();
      document.getElementById('table-scroll').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ============ LINES OVERVIEW ============ */
  function renderLinesOverview() {
    var container = document.getElementById('lines-overview');
    container.innerHTML = '';
    var scoped = siteScopedMachines();
    MAJOR_LINES.forEach(function (line) {
      var lineMachines = scoped.filter(function (m) { return m.majorLine === line; });
      var attentionCount = lineMachines.filter(function (m) { var d = daysBetween(m.nextService); return d !== null && d <= 30; }).length;
      var isMain = MAIN_LINES.indexOf(line) !== -1;

      var card = document.createElement('div');
      card.className = 'line-card' + (filters.majorLine === line ? ' active' : '');
      var html = '<div class="line-card-top"><div class="line-card-name">' + line + '</div>' +
        (attentionCount > 0 ? '<span class="line-card-alert">' + attentionCount + ' due</span>' : '') + '</div>' +
        '<div class="line-card-count">' + lineMachines.length + '</div>';
      if (isMain) {
        html += '<div class="subline-row">';
        SUB_LINES.forEach(function (sl) {
          var count = lineMachines.filter(function (m) { return m.subLine === sl; }).length;
          var active = filters.majorLine === line && filters.subLine === sl;
          html += '<span class="subline-chip' + (active ? ' active' : '') + '" data-line="' + line + '" data-sub="' + sl + '">' + sl + ' · ' + count + '</span>';
        });
        html += '</div>';
      }
      card.innerHTML = html;
      card.addEventListener('click', function (e) {
        if (e.target.classList.contains('subline-chip')) return;
        filters.majorLine = filters.majorLine === line ? '' : line;
        filters.subLine = '';
        syncFilterInputs(); renderAll();
      });
      container.appendChild(card);
    });
    container.querySelectorAll('.subline-chip').forEach(function (chip) {
      chip.addEventListener('click', function (e) {
        e.stopPropagation();
        filters.majorLine = chip.getAttribute('data-line');
        filters.subLine = chip.getAttribute('data-sub');
        syncFilterInputs(); renderAll();
      });
    });
  }
  function syncFilterInputs() {
    document.getElementById('f-majorLine').value = filters.majorLine;
    document.getElementById('f-subLine').value = filters.subLine;
    updateSubLineEnabled();
  }

  /* ============ STATS ============ */
  function renderStats() {
    var scoped = siteScopedMachines();
    var total = scoped.length;
    var nearEol = scoped.filter(function (m) { var d = daysBetween(m.eolDate); return d !== null && d <= 365; }).length;
    var pastEol = scoped.filter(function (m) { var d = daysBetween(m.eolDate); return d !== null && d < 0; }).length;
    var highCrit = scoped.filter(function (m) { return m.criticality === 'High'; }).length;
    var noDri = scoped.filter(function (m) { return !m.driName; }).length;
    var downtimeIncidents = 0, downtimeHours = 0;
    scoped.forEach(function (m) { (m.repairLog || []).forEach(function (r) { if (r.downtime) { downtimeIncidents++; downtimeHours += Number(r.downtimeHours) || 0; } }); });

    var stats = [
      { key: '', label: 'Total machines', value: String(total), title: 'Every machine currently logged in the repository' + (filters.site ? ' for ' + filters.site : '') + '.' },
      { key: 'noDri', label: 'Missing DRI', value: String(noDri), warn: noDri > 0, title: 'Machines with no Direct Responsible Individual assigned yet.' },
      { key: 'nearEol', label: 'Near / past end of life', value: String(nearEol), warn: nearEol > 0, sub: pastEol > 0 ? (pastEol + ' already past') : null, title: 'Machines reaching their expected end of life within 12 months, or already past it.' },
      { key: 'critical', label: 'High criticality', value: String(highCrit), title: 'Machines marked High criticality — line-stopping if they go down.' },
      { key: 'downtime', label: 'Downtime incidents', value: String(downtimeIncidents), warn: downtimeIncidents > 0, sub: downtimeIncidents > 0 ? (downtimeHours + ' hrs total') : null, title: 'Repair-log entries flagged as causing downtime, across all machines.' }
    ];
    var strip = document.getElementById('stat-strip');
    strip.innerHTML = '';
    stats.forEach(function (s) {
      var div = document.createElement('div');
      div.className = 'stat' + (filters.quickFilter === s.key && s.key ? ' active' : '');
      div.title = s.title || '';
      div.innerHTML = '<div class="stat-label">' + s.label + '</div><div class="stat-value' + (s.warn ? ' warn' : '') + '">' + s.value + '</div>' + (s.sub ? '<div class="stat-sub">' + s.sub + '</div>' : '');
      if (s.key) div.addEventListener('click', function () { filters.quickFilter = filters.quickFilter === s.key ? '' : s.key; renderAll(); });
      strip.appendChild(div);
    });
  }

  /* ============ FILTERING & TABLE ============ */
  function applyFilters() {
    var q = filters.q.trim().toLowerCase();
    return siteScopedMachines().filter(function (m) {
      if (filters.majorLine && m.majorLine !== filters.majorLine) return false;
      if (filters.subLine && m.subLine !== filters.subLine) return false;
      if (filters.status && m.status !== filters.status) return false;
      if (filters.criticality && m.criticality !== filters.criticality) return false;
      if (filters.vendor && m.vendor !== filters.vendor) return false;
      if (filters.quickFilter === 'nearEol') { var d1 = daysBetween(m.eolDate); if (!(d1 !== null && d1 <= 365)) return false; }
      if (filters.quickFilter === 'dueSoon') { var d2 = daysBetween(m.nextService); if (!(d2 !== null && d2 <= 30)) return false; }
      if (filters.quickFilter === 'critical' && m.criticality !== 'High') return false;
      if (filters.quickFilter === 'downtime' && !hasDowntimeHistory(m)) return false;
      if (filters.quickFilter === 'noDri' && m.driName) return false;
      if (q) {
        var hay = [m.machineId, m.name, m.vendor, m.majorLine, m.subLine, m.driName].join(' ').toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  function thumbMarkup(m) {
    if (m.photoId) return '<div class="thumb"><img src="' + m.photoId + '" alt=""></div>';
    return '<div class="thumb">' + equipIconSvg(m.machineType) + '</div>';
  }

  /* ---- DRI contact card ---- */
  var AVATAR_PALETTE = ['#2A7B69', '#B8730F', '#5B6B78', '#8A5FB0', '#3A6EA5', '#A5473A'];
  function initials(name) {
    if (!name) return '?';
    var parts = name.trim().split(/\s+/);
    return (parts[0].charAt(0) + (parts[1] ? parts[1].charAt(0) : '')).toUpperCase();
  }
  function avatarColor(name) {
    var hash = 0;
    var str = name || '';
    for (var i = 0; i < str.length; i++) hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    return AVATAR_PALETTE[hash % AVATAR_PALETTE.length];
  }
  function positionPopover(pop, anchor) {
    var r = anchor.getBoundingClientRect();
    pop.style.top = '-9999px'; pop.style.left = '-9999px'; pop.style.display = 'block';
    var pw = pop.offsetWidth, ph = pop.offsetHeight;
    var top = r.bottom + 6, left = r.left;
    if (left + pw > window.innerWidth - 12) left = Math.max(12, window.innerWidth - pw - 12);
    if (top + ph > window.innerHeight - 12) top = Math.max(12, r.top - ph - 6);
    pop.style.top = top + 'px'; pop.style.left = left + 'px';
  }
  function hideDriCard() { document.getElementById('dri-popover').style.display = 'none'; }
  function showDriCard(anchorEl, m) {
    var pop = document.getElementById('dri-popover');
    var color = avatarColor(m.driName);
    pop.innerHTML =
      '<div class="dri-card-head">' +
        '<div class="dri-avatar" style="background:' + color + '">' + escapeHtml(initials(m.driName)) + '</div>' +
        '<div><div class="dri-name">' + escapeHtml(m.driName) + '</div><div class="dri-dept">' + escapeHtml(m.driDepartment || 'Department not set') + '</div></div>' +
      '</div>' +
      '<div class="dri-card-body">' +
        (m.driEmail ? '<a class="dri-row" href="mailto:' + escapeHtml(m.driEmail) + '">' + MAIL_ICON + '<span>' + escapeHtml(m.driEmail) + '</span></a>' : '<div class="dri-row dri-row-muted">' + MAIL_ICON + '<span>No email on file</span></div>') +
        (m.driPhone ? '<a class="dri-row" href="tel:' + escapeHtml(m.driPhone) + '">' + PHONE_ICON + '<span>' + escapeHtml(m.driPhone) + '</span></a>' : '<div class="dri-row dri-row-muted">' + PHONE_ICON + '<span>No phone on file</span></div>') +
      '</div>';
    positionPopover(pop, anchorEl);
  }
  document.addEventListener('click', function (e) {
    var pop = document.getElementById('dri-popover');
    if (pop.style.display === 'block' && !pop.contains(e.target) && !e.target.classList.contains('dri-link')) hideDriCard();
  });
  window.addEventListener('scroll', hideDriCard, true);
  window.addEventListener('resize', hideDriCard);

  function driCellMarkup(m) {
    if (!m.driName) return '<span class="cell-sub">Unassigned</span>';
    return '<button type="button" class="dri-link">' + escapeHtml(m.driName) + '</button>';
  }

  function renderTableHead() {
    var showSite = !filters.site;
    var cols = ['Machine', 'Purpose', 'DRI'];
    if (showSite) cols.push('Site');
    cols = cols.concat(['Line', 'Vendor', 'Status', 'End of life', 'Next service']);
    document.getElementById('table-head-row').innerHTML = cols.map(function (c) { return '<th>' + c + '</th>'; }).join('');
  }

  function renderTable() {
    renderTableHead();
    var showSite = !filters.site;
    var rows = applyFilters();
    var body = document.getElementById('table-body');
    var empty = document.getElementById('empty-state');
    body.innerHTML = '';

    if (rows.length === 0) {
      empty.style.display = 'block';
      document.getElementById('machines-table').style.display = machines.length === 0 ? 'none' : 'table';
      empty.querySelector('h3').textContent = machines.length === 0 ? 'No machines logged yet' : 'No machines match here';
      empty.querySelector('p').textContent = machines.length === 0 ? 'Add the first machine to start building the repository.' : 'Try resetting filters, or add a new machine.';
      return;
    }
    empty.style.display = 'none';
    document.getElementById('machines-table').style.display = 'table';

    rows.forEach(function (m) {
      var tr = document.createElement('tr');
      tr.addEventListener('click', function () { openDrawer('edit', m.id); });

      var eolDays = daysBetween(m.eolDate);
      var eolClass = eolDays !== null && eolDays < 0 ? 'tag-bad' : (eolDays !== null && eolDays <= 365 ? 'tag-warn' : '');
      var svcDays = daysBetween(m.nextService);
      var svcClass = svcDays !== null && svcDays < 0 ? 'tag-bad' : (svcDays !== null && svcDays <= 30 ? 'tag-warn' : '');

      tr.innerHTML =
        '<td><div class="machine-cell">' + thumbMarkup(m) + '<div><div class="cell-name">' + escapeHtml(m.name || '') + '</div><div class="cell-sub cell-id">' + escapeHtml(m.machineId || '') + '</div></div></div></td>' +
        '<td class="cell-purpose" title="' + escapeHtml(m.purpose || '') + '">' + escapeHtml(m.purpose || '—') + '</td>' +
        '<td>' + driCellMarkup(m) + '</td>' +
        (showSite ? '<td>' + escapeHtml(m.site || '—') + '</td>' : '') +
        '<td><div>' + escapeHtml(m.majorLine || '—') + '</div><div class="cell-sub">' + escapeHtml(m.subLine || '') + '</div></td>' +
        '<td>' + escapeHtml(m.vendor || '—') + '</td>' +
        '<td><div class="flag-row"><span class="flag-dot ' + statusClass(m.status) + '"></span>' + escapeHtml(m.status || '—') + (hasDowntimeHistory(m) ? '<span class="downtime-flag" title="Has downtime history">downtime</span>' : '') + '</div></td>' +
        '<td class="cell-money ' + eolClass + '">' + fmtDate(m.eolDate) + '</td>' +
        '<td class="cell-money ' + svcClass + '">' + fmtDate(m.nextService) + '</td>';
      var driBtn = tr.querySelector('.dri-link');
      if (driBtn) driBtn.addEventListener('click', function (e) { e.stopPropagation(); showDriCard(driBtn, m); });
      body.appendChild(tr);
    });
  }

  function renderAll() {
    populateVendorSelect();
    syncFilterInputs();
    renderSiteTabs();
    renderAttentionPanel();
    renderLinesOverview();
    renderStats();
    renderTable();
    renderDowntimeAll();
  }
  Store.onChange(function (data) { machines = data; renderAll(); });

  /* ============ DRAWER ============ */
  var drawer = document.getElementById('drawer'), overlay = document.getElementById('overlay');

  function setField(name, value) { document.getElementById('in-' + name).value = value === undefined || value === null ? '' : value; }
  function getField(name) { return document.getElementById('in-' + name).value; }

  function renderPhotoFrame() {
    var frame = document.getElementById('photo-frame');
    if (currentPhotoId) frame.innerHTML = '<img src="' + currentPhotoId + '" alt="">';
    else frame.innerHTML = equipIconSvg(getField('machineType') || 'generic');
    document.getElementById('remove-photo-btn').style.display = currentPhotoId ? 'inline-flex' : 'none';
  }

  function renderRepairLog() {
    var list = document.getElementById('repair-log-list');
    var sorted = draftRepairLog.slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
    if (sorted.length === 0) { list.innerHTML = '<div class="repair-empty">No repair history logged yet.</div>'; return; }
    list.innerHTML = sorted.map(function (r) {
      return '<div class="repair-entry"><div class="repair-entry-top"><span class="repair-entry-date">' + fmtDate(r.date) + '</span>' +
        (r.downtime ? '<span class="repair-entry-downtime">Downtime · ' + (r.downtimeHours || 0) + 'h</span>' : '') + '</div>' +
        '<div>' + escapeHtml(r.comment || '') + '</div></div>';
    }).join('');
  }

  function renderMachineDowntimeHistory(machineCode) {
    var container = document.getElementById('machine-downtime-history-list');
    if (!container) return;
    var entries = (typeof downtimeEntries !== 'undefined' ? downtimeEntries : [])
      .filter(function (e) { return machineCode && e.machineCode === machineCode; })
      .sort(function (a, b) {
        var aOngoing = !a.endTime, bOngoing = !b.endTime;
        if (aOngoing !== bOngoing) return aOngoing ? -1 : 1;
        return (b.startTime || 0) - (a.startTime || 0);
      });
    if (entries.length === 0) { container.innerHTML = '<div class="repair-empty">No downtime logged for this machine yet.</div>'; return; }
    var completed = entries.filter(function (e) { return e.endTime; });
    var totalMinutes = completed.reduce(function (s, e) { return s + (Number(e.downtimeMinutes) || 0); }, 0);
    var summary = entries.length + ' incident' + (entries.length > 1 ? 's' : '') + (totalMinutes > 0 ? ' · ' + fmtDuration(totalMinutes * 60000) + ' total' : '');
    container.innerHTML = '<div class="dt-history-summary">' + summary + '</div>' + entries.map(function (e) {
      var ongoing = !e.endTime;
      var durationLabel = ongoing ? 'Ongoing — started ' + fmtClockFull(e.startTime) : fmtDuration((e.downtimeMinutes || 0) * 60000);
      return '<div class="repair-entry dt-history-entry" data-dt-id="' + e.id + '">' +
        '<div class="repair-entry-top"><span class="repair-entry-date">' + fmtDate(e.date) + ' · Shift ' + escapeHtml(e.shift || '—') + '</span>' +
        '<span class="repair-entry-downtime">' + (ongoing ? '<span class="downtime-flag" style="margin:0 4px 0 0;">live</span>' : '') + durationLabel + '</span></div>' +
        '<div>' + escapeHtml(e.issueDescription || 'No issue description logged.') + '</div>' +
        (e.dri ? '<div class="cell-sub" style="margin-top:2px;">DRI: ' + escapeHtml(e.dri) + '</div>' : '') +
        '</div>';
    }).join('');
  }
  document.getElementById('machine-downtime-history-list').addEventListener('click', function (e) {
    var item = e.target.closest('[data-dt-id]');
    if (!item) return;
    var id = item.getAttribute('data-dt-id');
    closeDrawer();
    switchView('downtime');
    openDowntimeDrawer(id);
  });

  function openDrawer(mode, id) {
    editingId = mode === 'edit' ? id : null;
    pendingDelete = false;
    document.getElementById('drawer-title').textContent = mode === 'edit' ? 'Edit machine' : 'Add machine';
    document.getElementById('danger-zone').style.display = mode === 'edit' && canEdit ? 'block' : 'none';
    document.getElementById('drawer-view-only-tag').style.display = canEdit ? 'none' : 'inline-block';
    resetDeleteButton();

    var record = mode === 'edit' ? machines.find(function (m) { return m.id === id; }) : null;
    setField('site', record ? record.site : (filters.site || 'Chennai'));
    setField('machineId', record ? record.machineId : '');
    setField('name', record ? record.name : '');
    setField('majorLine', record ? record.majorLine : 'FATP Main Line');
    setField('subLine', record ? record.subLine : 'L1');
    setField('vendor', record ? record.vendor : '');
    setField('maintenanceOwner', record ? record.maintenanceOwner : '');
    setField('driName', record ? record.driName : '');
    setField('driDepartment', record ? record.driDepartment : '');
    setField('driEmail', record ? record.driEmail : '');
    setField('driPhone', record ? record.driPhone : '');
    setField('cost', record ? record.cost : '');
    setField('purchaseDate', record ? record.purchaseDate : '');
    setField('eolDate', record ? record.eolDate : '');
    setField('cycle', record ? record.cycleDays : '');
    setField('lastService', record ? record.lastService : '');
    setField('nextService', record ? record.nextService : '');
    setField('status', record ? record.status : 'Operational');
    setField('criticality', record ? record.criticality : 'High');
    setField('condition', record ? record.condition : 'Good');
    setField('purpose', record ? record.purpose : '');
    setField('consumables', record && record.consumables ? record.consumables.join(', ') : '');
    setField('repurpose', record ? record.repurpose : '');
    setField('machineType', record ? record.machineType : 'generic');
    setField('repair-date', new Date().toISOString().slice(0, 10));
    setField('repair-comment', '');
    document.getElementById('in-repair-downtime').checked = false;
    document.getElementById('in-repair-hours').style.display = 'none';
    document.getElementById('in-repair-hours').value = '';

    currentPhotoId = record ? (record.photoId || null) : null;
    draftRepairLog = record && Array.isArray(record.repairLog) ? record.repairLog.slice() : [];
    renderPhotoFrame();
    renderRepairLog();
    renderMachineDowntimeHistory(record ? record.machineId : '');
    toggleFormDisabled(!canEdit);

    overlay.classList.add('open'); drawer.classList.add('open');
    document.getElementById('in-machineId').focus();
  }

  function toggleFormDisabled(disabled) {
    document.querySelectorAll('#machine-form input, #machine-form select, #machine-form textarea').forEach(function (el) { el.disabled = disabled; });
    document.getElementById('save-btn').style.display = disabled ? 'none' : 'inline-flex';
    document.getElementById('upload-photo-btn').style.display = disabled ? 'none' : 'inline-flex';
    document.getElementById('remove-photo-btn').style.display = (disabled || !currentPhotoId) ? 'none' : 'inline-flex';
    document.getElementById('add-repair-entry-btn').style.display = disabled ? 'none' : 'inline-flex';
  }

  function closeDrawer() { overlay.classList.remove('open'); drawer.classList.remove('open'); editingId = null; }
  document.getElementById('add-btn').addEventListener('click', function () {
    if (!canEdit) return;
    if (isUnlocked('addMachineAuth')) { openDrawer('add'); return; }
    openAuthModal({
      key: 'addMachineAuth',
      title: 'Engineering access required',
      copy: 'Adding a new machine record is restricted to the Engineering team. Enter the Engineering passphrase to continue — everyone with edit access can still update existing records and log repairs without it.',
      wrongMsg: 'Add Machine is restricted to Engineering — contact your Engineering lead.',
      onSuccess: function () { openDrawer('add'); }
    });
  });
  document.getElementById('drawer-close').addEventListener('click', closeDrawer);
  document.getElementById('cancel-btn').addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', function () { if (typeof closeDowntimeDrawer === 'function') closeDowntimeDrawer(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (drawer.classList.contains('open')) closeDrawer();
      var dtDrawerEl = document.getElementById('downtime-drawer');
      if (dtDrawerEl && dtDrawerEl.classList.contains('open')) closeDowntimeDrawer();
      if (document.getElementById('auth-modal').classList.contains('open')) closeAuthModal(true);
    }
  });
  document.getElementById('in-majorLine').addEventListener('change', function () {
    if (MAIN_LINES.indexOf(getField('majorLine')) === -1) setField('subLine', '');
  });
  document.getElementById('in-machineType').addEventListener('change', function () { if (!currentPhotoId) renderPhotoFrame(); });

  /* ---- photo upload ----
     Photos are stored as base64 data URIs directly on the machine record
     (no separate file storage needed — keeps hosting to just Firestore).
     Capped at ~700KB so a single machine document stays well under
     Firestore's 1MB per-document limit. */
  var MAX_PHOTO_BYTES = 700 * 1024;
  var ALLOWED_PHOTO_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
  document.getElementById('upload-photo-btn').addEventListener('click', function () { document.getElementById('photo-input').click(); });
  document.getElementById('photo-input').addEventListener('change', function (e) {
    var file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file) return;
    if (ALLOWED_PHOTO_TYPES.indexOf(file.type) === -1) { showToast("That file type isn't supported — use PNG, JPEG, WEBP or GIF.", 'error'); return; }
    if (file.size > MAX_PHOTO_BYTES) { showToast('That photo is too large (max ~700KB) — try a smaller file.', 'error'); return; }
    var reader = new FileReader();
    reader.onload = function () {
      currentPhotoId = reader.result; renderPhotoFrame();
      showToast('Photo attached — click Save to keep it.', 'success');
    };
    reader.onerror = function () { showToast("Couldn't read that photo.", 'error'); };
    reader.readAsDataURL(file);
  });
  document.getElementById('remove-photo-btn').addEventListener('click', function () {
    currentPhotoId = null; renderPhotoFrame();
  });

  /* ---- repair log add ---- */
  document.getElementById('in-repair-downtime').addEventListener('change', function (e) {
    document.getElementById('in-repair-hours').style.display = e.target.checked ? 'inline-block' : 'none';
  });
  document.getElementById('add-repair-entry-btn').addEventListener('click', function () {
    var comment = getField('repair-comment').trim();
    if (!comment) { showToast('Add a comment describing the repair.', 'error'); return; }
    draftRepairLog.push({
      id: 'r_' + Date.now(),
      date: getField('repair-date') || new Date().toISOString().slice(0, 10),
      comment: comment,
      downtime: document.getElementById('in-repair-downtime').checked,
      downtimeHours: document.getElementById('in-repair-downtime').checked ? (Number(getField('repair-hours')) || 0) : 0
    });
    setField('repair-comment', '');
    document.getElementById('in-repair-downtime').checked = false;
    document.getElementById('in-repair-hours').style.display = 'none';
    document.getElementById('in-repair-hours').value = '';
    renderRepairLog();
    showToast('Entry added — click Save machine to keep it.', 'success');
  });

  /* ============ ENGINEERING ACCESS GATE (Add Machine) ============ */
  /* Note on what this actually protects: Claude's own Share permission ("Can view" vs
     "Can edit") is the real, server-enforced boundary in this app — it decides who can
     write to the repository at all. This passphrase is a second-stage gate layered on
     top of that, specific to creating NEW machine records, so a team with edit access
     (e.g. Operations) can update existing records and log repairs without knowing it,
     while only Engineering — who holds the passphrase — can add machines. Like any
     check running in a page the browser can inspect, a technically determined person
     with edit access could still work around it; it is a deliberate, honest speed bump
     for the normal app flow, not a cryptographic guarantee. */
  /* ============ PASSPHRASE GATE (generic — Add Machine, per-site downtime logging) ============ */
  function isUnlocked(key) { try { return sessionStorage.getItem('mr_unlocked_' + key) === '1'; } catch (e) { return false; } }
  function setUnlocked(key) { try { sessionStorage.setItem('mr_unlocked_' + key, '1'); } catch (e) {} }
  function clearUnlocked(key) { try { sessionStorage.removeItem('mr_unlocked_' + key); } catch (e) {} }

  function sha256Hex(str) {
    if (!window.crypto || !window.crypto.subtle) return Promise.resolve(null);
    var enc = new TextEncoder().encode(str);
    return window.crypto.subtle.digest('SHA-256', enc).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    });
  }

  var authOverlay = document.getElementById('auth-overlay'), authModal = document.getElementById('auth-modal');
  var authContext = null; /* { key, title, copy, wrongMsg, onSuccess, onCancel } */
  function openAuthModal(context) {
    authContext = context;
    document.getElementById('auth-modal-title').textContent = context.title;
    document.getElementById('auth-modal-copy').textContent = context.copy;
    document.getElementById('in-auth-passphrase').value = '';
    document.getElementById('auth-modal-error').style.display = 'none';
    document.getElementById('auth-change-form').style.display = 'none';
    document.getElementById('in-auth-new1').value = '';
    document.getElementById('in-auth-new2').value = '';
    authOverlay.classList.add('open'); authModal.classList.add('open');
    document.getElementById('in-auth-passphrase').focus();
  }
  function closeAuthModal(cancelled) {
    authOverlay.classList.remove('open'); authModal.classList.remove('open');
    var ctx = authContext; authContext = null;
    if (cancelled && ctx && ctx.onCancel) ctx.onCancel();
  }
  function showAuthError(msg) {
    var el = document.getElementById('auth-modal-error');
    el.textContent = msg; el.style.display = 'block';
  }
  document.getElementById('auth-cancel-btn').addEventListener('click', function () { closeAuthModal(true); });
  authOverlay.addEventListener('click', function () { closeAuthModal(true); });
  document.getElementById('in-auth-passphrase').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') document.getElementById('auth-unlock-btn').click();
  });
  document.getElementById('auth-unlock-btn').addEventListener('click', function () {
    if (!authContext) return;
    var ctx = authContext;
    var entered = document.getElementById('in-auth-passphrase').value;
    if (!entered) { showAuthError('Enter the passphrase.'); return; }
    Store.getConfigHash(ctx.key).then(function (storedHash) {
      if (!storedHash) {
        showAuthError("Access isn't set up yet for this on this repository. Ask the owner to open the site once to finish setup.");
        return null;
      }
      return sha256Hex(entered).then(function (enteredHash) {
        if (enteredHash && enteredHash === storedHash) {
          setUnlocked(ctx.key);
          closeAuthModal(false);
          if (ctx.onSuccess) ctx.onSuccess();
        } else {
          showAuthError('Incorrect passphrase.' + (ctx.wrongMsg ? ' ' + ctx.wrongMsg : ''));
        }
      });
    }).catch(function () { showAuthError('Could not verify access right now. Please try again.'); });
  });
  document.getElementById('auth-change-toggle').addEventListener('click', function () {
    var form = document.getElementById('auth-change-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });
  document.getElementById('auth-change-save-btn').addEventListener('click', function () {
    if (!authContext) return;
    var ctx = authContext;
    var p1 = document.getElementById('in-auth-new1').value;
    var p2 = document.getElementById('in-auth-new2').value;
    if (!p1 || p1.length < 6) { showAuthError('New passphrase should be at least 6 characters.'); return; }
    if (p1 !== p2) { showAuthError("New passphrases don't match."); return; }
    sha256Hex(p1).then(function (hash) { return Store.setConfigHash(ctx.key, hash); }).then(function () {
      document.getElementById('in-auth-new1').value = '';
      document.getElementById('in-auth-new2').value = '';
      document.getElementById('auth-change-form').style.display = 'none';
      showToast('Passphrase updated.', 'success');
    }).catch(function () {
      showAuthError('Only the repository owner can change this passphrase.');
    });
  });

  function collectPayload() {
    var majorLine = getField('majorLine');
    return {
      site: getField('site'),
      machineId: getField('machineId').trim(), name: getField('name').trim(),
      majorLine: majorLine, subLine: MAIN_LINES.indexOf(majorLine) !== -1 ? getField('subLine') : '',
      vendor: getField('vendor').trim(), maintenanceOwner: getField('maintenanceOwner').trim(),
      driName: getField('driName').trim(), driDepartment: getField('driDepartment').trim(),
      driEmail: getField('driEmail').trim(), driPhone: getField('driPhone').trim(),
      machineType: getField('machineType'), photoId: currentPhotoId,
      cost: getField('cost') ? Number(getField('cost')) : null, purchaseDate: getField('purchaseDate') || null,
      eolDate: getField('eolDate') || null,
      cycleDays: getField('cycle') ? Number(getField('cycle')) : null,
      lastService: getField('lastService') || null, nextService: getField('nextService') || null,
      status: getField('status'), criticality: getField('criticality'), condition: getField('condition'),
      purpose: getField('purpose').trim(),
      consumables: getField('consumables').split(',').map(function (s) { return s.trim(); }).filter(Boolean),
      repurpose: getField('repurpose').trim(), repairLog: draftRepairLog,
      updatedAt: Date.now()
    };
  }

  document.getElementById('save-btn').addEventListener('click', function () {
    var payload = collectPayload();
    if (!payload.machineId || !payload.name) { showToast('Machine ID and name are required.', 'error'); return; }
    var action;
    if (editingId) action = Store.update(editingId, payload);
    else { payload.createdAt = Date.now(); action = Store.add(payload); }
    action.then(function () {
      showToast(editingId ? 'Machine record updated.' : 'Machine added to the repository.', 'success');
      closeDrawer();
    }).catch(function (err) {
      console.error(err);
      showToast("Couldn't save — check your connection, or Firestore security rules if this keeps happening.", 'error');
    });
  });

  function resetDeleteButton() { var btn = document.getElementById('delete-btn'); btn.textContent = 'Delete record'; }
  document.getElementById('delete-btn').addEventListener('click', function () {
    if (!editingId) return;
    if (!pendingDelete) {
      pendingDelete = true; this.textContent = 'Click again to confirm';
      setTimeout(function () { pendingDelete = false; resetDeleteButton(); }, 3000);
      return;
    }
    Store.remove(editingId).then(function () { showToast('Machine removed from the repository.', 'success'); closeDrawer(); })
      .catch(function (err) { console.error(err); showToast("Couldn't delete — check your connection.", 'error'); });
  });

  /* ============ CSV EXPORT ============ */
  function toCsvValue(v) {
    if (v === undefined || v === null) return '';
    var s = Array.isArray(v) ? v.join('; ') : String(v);
    if (/[",\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"';
    return s;
  }
  document.getElementById('export-btn').addEventListener('click', function () {
    var rows = applyFilters();
    var headers = ['Machine ID', 'Name', 'Site', 'Line', 'Sub-line', 'Vendor', 'Maintenance Owner', 'DRI Name', 'DRI Department', 'DRI Email', 'DRI Phone', 'Purchase Cost', 'Purchase Date', 'End of Life', 'Maintenance Cycle (days)', 'Last Service', 'Next Service', 'Status', 'Criticality', 'Condition', 'Purpose', 'Consumables', 'Downtime Incidents', 'Downtime Hours', 'Repurpose / CapEx Notes'];
    var lines = [headers.join(',')];
    rows.forEach(function (m) {
      var incidents = (m.repairLog || []).filter(function (r) { return r.downtime; });
      var hours = incidents.reduce(function (s, r) { return s + (Number(r.downtimeHours) || 0); }, 0);
      lines.push([m.machineId, m.name, m.site, m.majorLine, m.subLine, m.vendor, m.maintenanceOwner, m.driName, m.driDepartment, m.driEmail, m.driPhone, m.cost, m.purchaseDate, m.eolDate, m.cycleDays, m.lastService, m.nextService, m.status, m.criticality, m.condition, m.purpose, m.consumables, incidents.length, hours, m.repurpose].map(toCsvValue).join(','));
    });
    var csv = lines.join('\n');
    fallbackDownload(csv);
  });
  function fallbackDownload(csv) {
    try {
      var blob = new Blob([csv], { type: 'text/csv' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a'); a.href = url; a.download = 'machine-repository-export.csv';
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
      showToast('CSV exported.', 'success');
    } catch (e) { showToast("Couldn't export CSV in this view.", 'error'); }
  }

  /* ============ DOWNTIME LOG ============ */

  var SHIFTS = ['A', 'B', 'C'];
  function currentShiftGuess() {
    var h = new Date().getHours();
    if (h >= 6 && h < 14) return 'A';
    if (h >= 14 && h < 22) return 'B';
    return 'C';
  }

  /* ---- data store (mirrors Store above; separate collection / localStorage key) ---- */
  var DowntimeStore = (function () {
    var backend = null, db = null, cache = [], listeners = [];
    function notify() { listeners.forEach(function (fn) { fn(cache); }); }
    function localLoad() { try { var raw = localStorage.getItem('mr_downtime_demo_v1'); cache = raw ? JSON.parse(raw) : []; } catch (e) { cache = []; } }
    function localSave() { try { localStorage.setItem('mr_downtime_demo_v1', JSON.stringify(cache)); } catch (e) {} }
    return {
      init: function () {
        var hasFirebase = typeof FIREBASE_CONFIG !== 'undefined'
          && FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey.indexOf('REPLACE_WITH') !== 0
          && typeof firebase !== 'undefined';
        if (hasFirebase) {
          try {
            var app = firebase.apps && firebase.apps.length ? firebase.apps[0] : firebase.initializeApp(FIREBASE_CONFIG);
            db = firebase.firestore(app);
          } catch (e) { console.error('Firebase init failed, falling back to local storage', e); db = null; }
        }
        if (db) {
          backend = 'db';
          db.collection('downtimeLogs').onSnapshot(
            function (snap) { cache = snap.docs.map(function (d) { return Object.assign({ id: d.id }, d.data()); }); notify(); },
            function (err) { console.error('downtime db subscription error', err); showToast('Downtime sync hit a snag — showing the last data received.', 'error'); }
          );
        } else { backend = 'local'; localLoad(); notify(); }
        return Promise.resolve(backend);
      },
      getBackend: function () { return backend; },
      onChange: function (fn) { listeners.push(fn); },
      add: function (data) {
        if (backend === 'db') return db.collection('downtimeLogs').add(data);
        var id = 'dt_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
        cache.push(Object.assign({ id: id }, data)); localSave(); notify();
        return Promise.resolve({ id: id });
      },
      update: function (id, data) {
        if (backend === 'db') return db.collection('downtimeLogs').doc(id).update(data);
        var idx = cache.findIndex(function (e) { return e.id === id; });
        if (idx >= 0) { cache[idx] = Object.assign({}, cache[idx], data); localSave(); notify(); }
        return Promise.resolve();
      },
      remove: function (id) {
        if (backend === 'db') return db.collection('downtimeLogs').doc(id).delete();
        cache = cache.filter(function (e) { return e.id !== id; }); localSave(); notify();
        return Promise.resolve();
      }
    };
  })();

  /* ---- state ---- */
  var downtimeEntries = [];
  var activeView = 'machines';
  var dtFilters = { q: '' };
  var dtEditingId = null, dtPendingDelete = false;
  var dtTickerInterval = null;
  var downtimeDrawer = document.getElementById('downtime-drawer');
  DowntimeStore.onChange(function (data) {
    downtimeEntries = data;
    renderDowntimeAll();
    if (drawer.classList.contains('open') && editingId) {
      var openRecord = machines.find(function (m) { return m.id === editingId; });
      if (openRecord) renderMachineDowntimeHistory(openRecord.machineId);
    }
  });

  /* ---- helpers ---- */
  function fmtDuration(ms) {
    if (ms == null || isNaN(ms)) return '—';
    if (ms < 0) ms = 0;
    var totalMin = Math.floor(ms / 60000);
    if (totalMin < 1) return '<1m';
    var h = Math.floor(totalMin / 60), m = totalMin % 60;
    return h > 0 ? (h + 'h ' + m + 'm') : (m + 'm');
  }
  function fmtTime(ts) {
    if (!ts) return '—';
    return new Date(ts).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  }
  function fmtClockFull(ts) {
    if (!ts) return '—';
    return new Date(ts).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true });
  }
  function toLocalInputValue(ts) {
    if (!ts) return '';
    var d = new Date(ts), pad = function (n) { return String(n).padStart(2, '0'); };
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }
  function fromLocalInputValue(v) {
    if (!v) return null;
    var d = new Date(v);
    return isNaN(d.getTime()) ? null : d.getTime();
  }
  function downtimeSiteScoped() {
    if (!filters.site) return downtimeEntries;
    return downtimeEntries.filter(function (e) { return e.site === filters.site; });
  }
  function isMachineOngoing(machineCode) {
    return downtimeEntries.some(function (e) { return !e.endTime && e.machineCode === machineCode; });
  }

  /* ---- view switching ---- */
  function switchView(view) {
    activeView = view;
    document.getElementById('view-tab-machines').classList.toggle('active', view === 'machines');
    document.getElementById('view-tab-downtime').classList.toggle('active', view === 'downtime');
    document.getElementById('machines-view').style.display = view === 'machines' ? '' : 'none';
    document.getElementById('downtime-view').style.display = view === 'downtime' ? '' : 'none';
    document.getElementById('machines-banner').style.display = view === 'machines' ? '' : 'none';
    document.getElementById('downtime-banner').style.display = view === 'downtime' ? '' : 'none';
    if (view === 'downtime') { renderDowntimeAll(); startDowntimeTicker(); }
    else { stopDowntimeTicker(); }
  }
  document.getElementById('view-tab-machines').addEventListener('click', function () { switchView('machines'); });
  document.getElementById('view-tab-downtime').addEventListener('click', function () { switchView('downtime'); });

  /* ---- live ticker for ongoing entries ---- */
  function startDowntimeTicker() {
    stopDowntimeTicker();
    dtTickerInterval = setInterval(updateLiveElapsedDisplays, 1000);
    updateLiveElapsedDisplays();
  }
  function stopDowntimeTicker() { if (dtTickerInterval) { clearInterval(dtTickerInterval); dtTickerInterval = null; } }
  function updateLiveElapsedDisplays() {
    var now = Date.now();
    downtimeEntries.forEach(function (e) {
      if (e.endTime) return;
      var elapsed = fmtDuration(now - e.startTime);
      var bannerEl = document.getElementById('dt-ongoing-elapsed-' + e.id);
      if (bannerEl) bannerEl.textContent = elapsed;
      var rowEl = document.getElementById('dt-row-elapsed-' + e.id);
      if (rowEl) rowEl.textContent = elapsed;
    });
    var drawerEl = document.getElementById('dt-drawer-elapsed');
    if (drawerEl && dtEditingId) {
      var entry = downtimeEntries.find(function (e) { return e.id === dtEditingId; });
      if (entry && !entry.endTime) drawerEl.textContent = fmtDuration(now - entry.startTime);
    }
  }

  /* ---- quick log bar (site-gated) ---- */
  var DEFAULT_SITE_PASSPHRASES = { Chennai: 'Chennai@2026', Hosur: 'Hosur@2026', Narsapura: 'Narsapura@2026' };
  function siteAuthKey(site) { return 'siteAuth_' + site; }

  function updateQuickLogSiteStatus() {
    var siteSel = document.getElementById('dt-ql-site');
    var statusEl = document.getElementById('dt-ql-site-status');
    if (!siteSel || !statusEl) return;
    var site = siteSel.value;
    var unlocked = site && isUnlocked(siteAuthKey(site));
    if (!unlocked) { statusEl.innerHTML = ''; return; }
    statusEl.innerHTML = 'Logged in for <strong>' + escapeHtml(site) + '</strong> downtime logging · <button type="button" class="ql-logout-link" id="dt-ql-logout-btn">Log out</button>';
    document.getElementById('dt-ql-logout-btn').addEventListener('click', function () {
      clearUnlocked(siteAuthKey(site));
      siteSel.value = '';
      updateQuickLogSiteStatus();
      populateQuickLogMachineOptions();
      showToast('Logged out of ' + site + ' downtime logging.', 'success');
    });
  }

  function promptSiteUnlock(site, selectEl) {
    openAuthModal({
      key: siteAuthKey(site),
      title: site + ' access required',
      copy: "Logging downtime for " + site + " is restricted to that site's team. Enter the " + site + " passphrase to continue — anyone can still browse the downtime log for any site without it.",
      wrongMsg: 'Ask your site lead for the ' + site + ' downtime passphrase.',
      onSuccess: function () {
        updateQuickLogSiteStatus();
        populateQuickLogMachineOptions();
        showToast('Logged in for ' + site + ' downtime logging.', 'success');
      },
      onCancel: function () {
        selectEl.value = '';
        updateQuickLogSiteStatus();
        populateQuickLogMachineOptions();
      }
    });
  }

  document.getElementById('dt-ql-site').addEventListener('change', function () {
    var selectEl = this;
    var site = selectEl.value;
    document.getElementById('dt-ql-line').value = '';
    document.getElementById('dt-ql-machine').value = '';
    if (!site) { updateQuickLogSiteStatus(); populateQuickLogMachineOptions(); return; }
    if (isUnlocked(siteAuthKey(site))) { updateQuickLogSiteStatus(); populateQuickLogMachineOptions(); return; }
    promptSiteUnlock(site, selectEl);
  });

  function populateQuickLogMachineOptions() {
    var siteSel = document.getElementById('dt-ql-site');
    var lineSel = document.getElementById('dt-ql-line');
    var shiftSel = document.getElementById('dt-ql-shift');
    var machineSel = document.getElementById('dt-ql-machine');
    var startBtn = document.getElementById('dt-ql-start-btn');
    var hint = document.getElementById('dt-ql-hint');
    if (!siteSel) return;
    var site = siteSel.value;
    var unlocked = site && isUnlocked(siteAuthKey(site));
    lineSel.disabled = !unlocked || !canEdit;
    shiftSel.disabled = !unlocked || !canEdit;
    if (!unlocked) {
      machineSel.innerHTML = '<option value="">' + (site ? 'Enter the site password to continue' : 'Select a site first') + '</option>';
      machineSel.disabled = true;
      startBtn.disabled = true;
      hint.textContent = '';
      return;
    }
    var line = lineSel.value;
    var currentMachineVal = machineSel.value;
    if (!line) {
      machineSel.innerHTML = '<option value="">Select a line first</option>';
      machineSel.disabled = true;
      startBtn.disabled = true;
      hint.textContent = '';
      return;
    }
    var candidates = machines.filter(function (m) { return m.site === site && m.majorLine === line; });
    var available = candidates.filter(function (m) { return !isMachineOngoing(m.machineId); });
    var downCount = candidates.length - available.length;
    if (available.length === 0) {
      machineSel.innerHTML = '<option value="">' + (candidates.length === 0 ? 'No machines on this line' : 'All machines on this line are already down') + '</option>';
      machineSel.disabled = true;
      startBtn.disabled = true;
    } else {
      machineSel.innerHTML = '<option value="">Select machine</option>' + available.map(function (m) {
        return '<option value="' + m.id + '">' + escapeHtml(m.machineId) + ' — ' + escapeHtml(m.name) + '</option>';
      }).join('');
      machineSel.disabled = !canEdit;
      if (currentMachineVal && available.some(function (m) { return m.id === currentMachineVal; })) machineSel.value = currentMachineVal;
      startBtn.disabled = !canEdit || !machineSel.value;
    }
    hint.textContent = downCount > 0
      ? (downCount + ' machine' + (downCount > 1 ? 's' : '') + ' on this line already has ongoing downtime — see the list below.')
      : '';
  }
  document.getElementById('dt-ql-line').addEventListener('change', function () {
    document.getElementById('dt-ql-machine').value = '';
    populateQuickLogMachineOptions();
  });
  document.getElementById('dt-ql-machine').addEventListener('change', function () {
    document.getElementById('dt-ql-start-btn').disabled = !canEdit || !this.value;
  });
  function resetDtQuickLog() {
    document.getElementById('dt-ql-line').value = '';
    document.getElementById('dt-ql-shift').value = currentShiftGuess();
    populateQuickLogMachineOptions();
  }
  document.getElementById('dt-ql-start-btn').addEventListener('click', function () {
    if (!canEdit) { showToast('View-only access — ask the owner to grant edit access to log downtime.', 'error'); return; }
    var site = document.getElementById('dt-ql-site').value;
    var line = document.getElementById('dt-ql-line').value;
    var machineInternalId = document.getElementById('dt-ql-machine').value;
    var shift = document.getElementById('dt-ql-shift').value || currentShiftGuess();
    if (!site || !isUnlocked(siteAuthKey(site))) { showToast('Select your site and enter its passphrase first.', 'error'); populateQuickLogMachineOptions(); return; }
    if (!line || !machineInternalId) { showToast('Pick a line and a machine.', 'error'); return; }
    var m = machines.find(function (x) { return x.id === machineInternalId; });
    if (!m) { showToast('That machine could not be found — refresh and try again.', 'error'); populateQuickLogMachineOptions(); return; }
    if (isMachineOngoing(m.machineId)) {
      showToast(m.machineId + ' already has an ongoing downtime entry — stop it before starting a new one.', 'error');
      populateQuickLogMachineOptions();
      return;
    }
    var now = Date.now();
    var payload = {
      machineCode: m.machineId,
      machineName: m.name,
      site: m.site || site,
      date: new Date().toISOString().slice(0, 10),
      shift: shift,
      line: m.majorLine || line,
      topBot: '',
      station: '',
      lane: m.subLine || '',
      startTime: now,
      endTime: null,
      downtimeMinutes: null,
      issueDescription: '',
      dri: m.driName || '',
      remarks: '',
      createdAt: now
    };
    document.getElementById('dt-ql-start-btn').disabled = true;
    DowntimeStore.add(payload).then(function (res) {
      showToast('Downtime started for ' + m.machineId + ' — timer is running.', 'success');
      resetDtQuickLog();
      openDowntimeDrawerWithEntry(Object.assign({ id: res.id }, payload));
    }).catch(function (err) {
      console.error(err);
      showToast("Couldn't start downtime — you may have view-only access.", 'error');
      populateQuickLogMachineOptions();
    });
  });

  /* ---- rendering ---- */
  function renderDowntimeAll() {
    renderDowntimeOngoingBanner();
    renderDowntimeStats();
    renderDowntimeTable();
    populateQuickLogMachineOptions();
  }

  function renderDowntimeStats() {
    var scoped = downtimeSiteScoped();
    var ongoing = scoped.filter(function (e) { return !e.endTime; });
    var todayStr = new Date().toISOString().slice(0, 10);
    var loggedToday = scoped.filter(function (e) { return e.date === todayStr; });
    var completed = scoped.filter(function (e) { return e.endTime; });
    var totalMinutes = completed.reduce(function (s, e) { return s + (Number(e.downtimeMinutes) || 0); }, 0);
    var avgMinutes = completed.length ? Math.round(totalMinutes / completed.length) : 0;
    var stats = [
      { label: 'Currently down', value: String(ongoing.length), warn: ongoing.length > 0 },
      { label: 'Logged today', value: String(loggedToday.length) },
      { label: 'Total entries', value: String(scoped.length) },
      { label: 'Total downtime', value: fmtDuration(totalMinutes * 60000) },
      { label: 'Avg per incident', value: completed.length ? fmtDuration(avgMinutes * 60000) : '—' }
    ];
    var strip = document.getElementById('downtime-stat-strip');
    if (!strip) return;
    strip.innerHTML = stats.map(function (s) {
      return '<div class="stat"><div class="stat-label">' + s.label + '</div><div class="stat-value' + (s.warn ? ' warn' : '') + '">' + s.value + '</div></div>';
    }).join('');
  }

  function renderDowntimeOngoingBanner() {
    var container = document.getElementById('downtime-ongoing-banner');
    if (!container) return;
    var ongoing = downtimeSiteScoped().filter(function (e) { return !e.endTime; }).sort(function (a, b) { return (a.startTime || 0) - (b.startTime || 0); });
    if (ongoing.length === 0) { container.innerHTML = ''; return; }
    var html = '<div class="dt-ongoing-banner"><div class="dt-ongoing-title"><span class="dt-ongoing-dot"></span>' +
      ongoing.length + ' machine' + (ongoing.length > 1 ? 's' : '') + ' currently down</div><div class="dt-ongoing-list">';
    ongoing.forEach(function (e) {
      html += '<div class="dt-ongoing-item" data-id="' + e.id + '">' +
        '<div class="dt-ongoing-item-main"><strong>' + escapeHtml(e.machineName || e.machineCode || '') + '</strong> <span class="cell-id">(' + escapeHtml(e.machineCode || '') + ')</span>' +
        (e.line ? ' · ' + escapeHtml(e.line) : '') + ' · started ' + fmtTime(e.startTime) + '</div>' +
        '<div class="dt-elapsed" id="dt-ongoing-elapsed-' + e.id + '">' + fmtDuration(Date.now() - e.startTime) + '</div>' +
        '<button type="button" class="btn btn-sm btn-danger" data-stop-id="' + e.id + '"' + (canEdit ? '' : ' disabled') + '>Stop</button>' +
        '</div>';
    });
    html += '</div></div>';
    container.innerHTML = html;
  }
  document.getElementById('downtime-ongoing-banner').addEventListener('click', function (e) {
    var stopBtn = e.target.closest('[data-stop-id]');
    if (stopBtn) { e.stopPropagation(); if (canEdit) quickStopDowntime(stopBtn.getAttribute('data-stop-id')); return; }
    var item = e.target.closest('.dt-ongoing-item');
    if (item) openDowntimeDrawer(item.getAttribute('data-id'));
  });

  var DT_COLS = ['Machine', 'Date', 'Shift', 'Line', 'TOP/BOT', 'Station', 'Lane', 'Start Time', 'End Time', 'Downtime', 'Issue Description', 'DRI', 'Remarks'];
  function applyDowntimeFilters() {
    var q = dtFilters.q.trim().toLowerCase();
    return downtimeSiteScoped().filter(function (e) {
      if (q) {
        var hay = [e.machineCode, e.machineName, e.issueDescription, e.dri, e.remarks, e.station, e.lane, e.line].join(' ').toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    }).sort(function (a, b) {
      var aOngoing = !a.endTime, bOngoing = !b.endTime;
      if (aOngoing !== bOngoing) return aOngoing ? -1 : 1;
      return (b.startTime || 0) - (a.startTime || 0);
    });
  }

  function renderDowntimeTable() {
    var headRow = document.getElementById('downtime-table-head-row');
    if (!headRow) return;
    headRow.innerHTML = DT_COLS.map(function (c) { return '<th>' + c + '</th>'; }).join('');
    var rows = applyDowntimeFilters();
    var body = document.getElementById('downtime-table-body');
    var empty = document.getElementById('downtime-empty-state');
    if (rows.length === 0) {
      body.innerHTML = '';
      empty.style.display = 'block';
      document.getElementById('downtime-table').style.display = downtimeEntries.length === 0 ? 'none' : 'table';
      empty.querySelector('h3').textContent = downtimeEntries.length === 0 ? 'No downtime logged yet' : 'No entries match here';
      empty.querySelector('p').textContent = downtimeEntries.length === 0
        ? 'Pick a line and machine above and click "Log Downtime" the moment a machine goes down — it records the start time for you.'
        : 'Try clearing your search.';
      return;
    }
    empty.style.display = 'none';
    document.getElementById('downtime-table').style.display = 'table';
    body.innerHTML = rows.map(function (e) {
      var ongoing = !e.endTime;
      var downtimeCell = ongoing
        ? '<span id="dt-row-elapsed-' + e.id + '" class="dt-elapsed">' + fmtDuration(Date.now() - e.startTime) + '</span> <span class="downtime-flag" style="margin-left:4px;">live</span>'
        : fmtDuration((e.downtimeMinutes || 0) * 60000);
      var endCell = ongoing
        ? '<button type="button" class="btn btn-sm btn-danger" data-stop-id="' + e.id + '"' + (canEdit ? '' : ' disabled') + '>Stop</button>'
        : fmtTime(e.endTime);
      return '<tr class="' + (ongoing ? 'dt-row-ongoing' : '') + '" data-id="' + e.id + '">' +
        '<td><div class="cell-name">' + escapeHtml(e.machineName || '—') + '</div><div class="cell-sub cell-id">' + escapeHtml(e.machineCode || '') + '</div></td>' +
        '<td>' + fmtDate(e.date) + '</td>' +
        '<td>' + escapeHtml(e.shift || '—') + '</td>' +
        '<td>' + escapeHtml(e.line || '—') + '</td>' +
        '<td>' + escapeHtml(e.topBot || '—') + '</td>' +
        '<td>' + escapeHtml(e.station || '—') + '</td>' +
        '<td>' + escapeHtml(e.lane || '—') + '</td>' +
        '<td class="cell-money">' + fmtTime(e.startTime) + '</td>' +
        '<td class="cell-money">' + endCell + '</td>' +
        '<td class="cell-money">' + downtimeCell + '</td>' +
        '<td class="cell-purpose" title="' + escapeHtml(e.issueDescription || '') + '">' + escapeHtml(e.issueDescription || '—') + '</td>' +
        '<td>' + escapeHtml(e.dri || '—') + '</td>' +
        '<td class="cell-purpose" title="' + escapeHtml(e.remarks || '') + '">' + escapeHtml(e.remarks || '—') + '</td>' +
        '</tr>';
    }).join('');
  }
  document.getElementById('downtime-table-body').addEventListener('click', function (e) {
    var stopBtn = e.target.closest('[data-stop-id]');
    if (stopBtn) { e.stopPropagation(); if (canEdit) quickStopDowntime(stopBtn.getAttribute('data-stop-id')); return; }
    var tr = e.target.closest('tr[data-id]');
    if (tr) openDowntimeDrawer(tr.getAttribute('data-id'));
  });

  /* ---- filter toolbar wiring ---- */
  document.getElementById('dt-search-input').addEventListener('input', function (e) { dtFilters.q = e.target.value; renderDowntimeTable(); });
  document.getElementById('dt-reset-filters').addEventListener('click', function () {
    dtFilters = { q: '' };
    document.getElementById('dt-search-input').value = '';
    renderDowntimeTable();
  });

  /* ---- quick stop (from banner or table, no drawer) ---- */
  function quickStopDowntime(id) {
    var entry = downtimeEntries.find(function (e) { return e.id === id; });
    if (!entry || entry.endTime) return;
    var endNow = Date.now();
    var minutes = Math.max(0, Math.round((endNow - entry.startTime) / 60000));
    DowntimeStore.update(id, { endTime: endNow, downtimeMinutes: minutes }).then(function () {
      showToast('Downtime stopped — ' + fmtDuration(minutes * 60000) + ' recorded.', 'success');
    }).catch(function (err) {
      console.error(err);
      showToast("Couldn't stop downtime — you may have view-only access.", 'error');
    });
  }

  /* ---- drawer ----
     Machine, Line, Lane and Shift are fixed the moment a downtime entry is created via
     the quick-log bar above, so the drawer only ever fills in the remaining details
     (and, for a completed entry, allows a start/end time correction). There is no
     "new entry" mode here any more — that flow lives entirely in the quick-log bar. */
  function dtSetField(name, value) { var el = document.getElementById('dt-in-' + name); if (el) el.value = value === undefined || value === null ? '' : value; }
  function dtGetField(name) { var el = document.getElementById('dt-in-' + name); return el ? el.value : ''; }

  function updateComputedDowntimeDisplay() {
    var startVal = fromLocalInputValue(document.getElementById('dt-in-startTime').value);
    var endVal = fromLocalInputValue(document.getElementById('dt-in-endTime').value);
    var el = document.getElementById('dt-computed-downtime');
    if (startVal == null || endVal == null) { el.textContent = ''; return; }
    if (endVal < startVal) { el.textContent = 'End time is before start time — check the values above.'; el.style.color = 'var(--accent-red)'; return; }
    el.style.color = '';
    el.textContent = 'Downtime: ' + fmtDuration(endVal - startVal);
  }
  document.getElementById('dt-in-startTime').addEventListener('input', updateComputedDowntimeDisplay);
  document.getElementById('dt-in-endTime').addEventListener('input', updateComputedDowntimeDisplay);

  function toggleDowntimeFormDisabled(disabled) {
    document.querySelectorAll('#downtime-form input, #downtime-form select, #downtime-form textarea').forEach(function (el) { el.disabled = disabled; });
    document.getElementById('dt-save-btn').style.display = disabled ? 'none' : 'inline-flex';
    document.getElementById('dt-save-details-btn').style.display = disabled ? 'none' : 'inline-flex';
  }
  function resetDtDeleteButton() { var btn = document.getElementById('dt-delete-btn'); if (btn) btn.textContent = 'Delete entry'; }
  function lockDowntimeIdentityFields() {
    ['machine', 'date', 'shift', 'line', 'lane'].forEach(function (name) {
      var el = document.getElementById('dt-in-' + name);
      if (el) el.disabled = true;
    });
  }

  /* Open by id — looks the entry up in the synced list (used for row/banner clicks). */
  function openDowntimeDrawer(id) {
    var entry = downtimeEntries.find(function (e) { return e.id === id; });
    if (!entry) { showToast("Couldn't find that entry — it may have just changed.", 'error'); return; }
    openDowntimeDrawerWithEntry(entry);
  }

  /* Open with an entry object directly — used right after the quick-log bar creates a
     new entry, so the drawer doesn't have to wait for the synced list to catch up. */
  function openDowntimeDrawerWithEntry(entry) {
    dtPendingDelete = false;
    resetDtDeleteButton();
    toggleDowntimeFormDisabled(!canEdit);
    dtEditingId = entry.id;
    dtSetField('machine', (entry.machineCode || '') + (entry.machineName ? ' — ' + entry.machineName : ''));
    dtSetField('date', entry.date || '');
    dtSetField('shift', entry.shift || 'A');
    dtSetField('line', entry.line || '');
    dtSetField('topbot', entry.topBot || '');
    dtSetField('station', entry.station || '');
    dtSetField('lane', entry.lane || '');
    dtSetField('issue', entry.issueDescription || '');
    dtSetField('dri', entry.dri || '');
    dtSetField('remarks', entry.remarks || '');
    lockDowntimeIdentityFields();
    document.getElementById('dt-danger-zone').style.display = canEdit ? 'block' : 'none';
    var saveDetailsBtn = document.getElementById('dt-save-details-btn');
    if (!entry.endTime) {
      document.getElementById('downtime-drawer-title').textContent = 'Downtime in progress';
      document.getElementById('dt-timing-editable').style.display = 'none';
      document.getElementById('dt-timing-static').innerHTML = 'Started ' + fmtClockFull(entry.startTime) + ' · running <strong id="dt-drawer-elapsed">' + fmtDuration(Date.now() - entry.startTime) + '</strong>';
      document.getElementById('dt-computed-downtime').textContent = '';
      document.getElementById('dt-save-btn').textContent = 'Stop Downtime';
      if (canEdit) saveDetailsBtn.style.display = 'inline-flex';
    } else {
      document.getElementById('downtime-drawer-title').textContent = 'Edit downtime entry';
      document.getElementById('dt-timing-static').textContent = '';
      document.getElementById('dt-timing-editable').style.display = '';
      document.getElementById('dt-in-startTime').value = toLocalInputValue(entry.startTime);
      document.getElementById('dt-in-endTime').value = toLocalInputValue(entry.endTime);
      updateComputedDowntimeDisplay();
      document.getElementById('dt-save-btn').textContent = 'Save changes';
      saveDetailsBtn.style.display = 'none';
    }
    overlay.classList.add('open'); downtimeDrawer.classList.add('open');
    document.getElementById('dt-in-issue').focus();
  }
  function closeDowntimeDrawer() { overlay.classList.remove('open'); downtimeDrawer.classList.remove('open'); dtEditingId = null; }

  document.getElementById('dt-drawer-close').addEventListener('click', closeDowntimeDrawer);
  document.getElementById('dt-cancel-btn').addEventListener('click', closeDowntimeDrawer);

  function collectDowntimeDetailsPayload() {
    return {
      topBot: dtGetField('topbot'),
      station: dtGetField('station').trim(),
      issueDescription: dtGetField('issue').trim(),
      dri: dtGetField('dri').trim(),
      remarks: dtGetField('remarks').trim()
    };
  }

  /* Save the fillable details without stopping the timer (ongoing entries only). */
  document.getElementById('dt-save-details-btn').addEventListener('click', function () {
    if (!canEdit || !dtEditingId) return;
    DowntimeStore.update(dtEditingId, collectDowntimeDetailsPayload()).then(function () {
      showToast('Details saved — timer keeps running.', 'success');
      closeDowntimeDrawer();
    }).catch(function (err) {
      console.error(err);
      showToast("Couldn't save — you may have view-only access.", 'error');
    });
  });

  document.getElementById('dt-save-btn').addEventListener('click', function () {
    if (!canEdit || !dtEditingId) return;
    var entry = downtimeEntries.find(function (e) { return e.id === dtEditingId; });
    if (!entry) { closeDowntimeDrawer(); return; }

    if (!entry.endTime) {
      var endNow = Date.now();
      var minutes = Math.max(0, Math.round((endNow - entry.startTime) / 60000));
      var payload = collectDowntimeDetailsPayload();
      payload.endTime = endNow;
      payload.downtimeMinutes = minutes;
      DowntimeStore.update(dtEditingId, payload).then(function () {
        showToast('Downtime stopped — ' + fmtDuration(minutes * 60000) + ' recorded.', 'success');
        closeDowntimeDrawer();
      }).catch(function (err) {
        console.error(err);
        showToast("Couldn't stop downtime — you may have view-only access.", 'error');
      });
      return;
    }

    var startVal = fromLocalInputValue(document.getElementById('dt-in-startTime').value);
    var endVal = fromLocalInputValue(document.getElementById('dt-in-endTime').value);
    if (startVal == null || endVal == null) { showToast('Start and end time are both required.', 'error'); return; }
    if (endVal < startVal) { showToast('End time must be after start time.', 'error'); return; }
    var minutes2 = Math.max(0, Math.round((endVal - startVal) / 60000));
    var payload2 = collectDowntimeDetailsPayload();
    payload2.startTime = startVal;
    payload2.endTime = endVal;
    payload2.downtimeMinutes = minutes2;
    DowntimeStore.update(dtEditingId, payload2).then(function () {
      showToast('Downtime entry updated.', 'success');
      closeDowntimeDrawer();
    }).catch(function (err) {
      console.error(err);
      showToast("Couldn't save — you may have view-only access.", 'error');
    });
  });

  document.getElementById('dt-delete-btn').addEventListener('click', function () {
    if (!dtEditingId) return;
    if (!dtPendingDelete) {
      dtPendingDelete = true; this.textContent = 'Click again to confirm';
      setTimeout(function () { dtPendingDelete = false; resetDtDeleteButton(); }, 3000);
      return;
    }
    DowntimeStore.remove(dtEditingId).then(function () {
      showToast('Downtime entry removed.', 'success');
      closeDowntimeDrawer();
    }).catch(function (err) {
      console.error(err);
      showToast("Couldn't delete — you may have view-only access.", 'error');
    });
  });

  /* ============ INIT ============ */
  updateSubLineEnabled();
  Store.init().then(function (backend) {
    canEdit = true; /* Everyone with the link can edit in this standalone build — see README for adding real auth. */
    renderSyncBadge(); applyPermissionUI();
    return DowntimeStore.init()
      .then(function () { return Store.cleanupLegacy(); })
      .then(function () { return Store.seedIfEmpty(SEED); })
      .then(function () { return sha256Hex(DEFAULT_ENGG_PASSPHRASE); })
      .then(function (hash) { if (hash) return Store.seedConfigHashIfEmpty('addMachineAuth', hash); })
      .then(function () {
        var chain = Promise.resolve();
        SITES.forEach(function (site) {
          chain = chain.then(function () { return sha256Hex(DEFAULT_SITE_PASSPHRASES[site]); })
            .then(function (hash) { if (hash) return Store.seedConfigHashIfEmpty(siteAuthKey(site), hash); });
        });
        return chain;
      });
  });
})();
