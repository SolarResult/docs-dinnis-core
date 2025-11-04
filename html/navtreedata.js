/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "SolarResult Dinnis Core", "index.html", [
    [ "SolarResult Dinnis Core - Firmware Documentatie", "index.html", "index" ],
    [ "App Module - Documentatie", "app_doc.html", [
      [ "🔗 Navigatie", "app_doc.html#autotoc_md1", null ],
      [ "Waarom", "app_doc.html#autotoc_md3", [
        [ "Hardware Watchdog als Safety Mechanism", "app_doc.html#autotoc_md4", null ],
        [ "TRIGGER_CHAN als Coördinatie Mechanisme", "app_doc.html#autotoc_md5", null ]
      ] ],
      [ "Wat", "app_doc.html#autotoc_md6", [
        [ "Functionaliteit", "app_doc.html#autotoc_md7", null ],
        [ "ZBUS Interface", "app_doc.html#autotoc_md8", null ]
      ] ],
      [ "Hoe", "app_doc.html#autotoc_md9", [
        [ "Architectuur", "app_doc.html#autotoc_md10", [
          [ "Thread Model", "app_doc.html#autotoc_md11", null ],
          [ "Initialisatie Volgorde", "app_doc.html#autotoc_md12", null ]
        ] ],
        [ "Configuratie", "app_doc.html#autotoc_md13", null ],
        [ "Watchdog Callback Behavior", "app_doc.html#autotoc_md14", null ],
        [ "Native Sim Handling", "app_doc.html#autotoc_md15", null ]
      ] ]
    ] ],
    [ "Cloud Module - Documentatie", "cloud_doc.html", [
      [ "🔗 Navigatie", "cloud_doc.html#autotoc_md17", null ],
      [ "Overzicht", "cloud_doc.html#autotoc_md19", [
        [ "ZBUS Channels", "cloud_doc.html#autotoc_md20", null ]
      ] ],
      [ "Waarom? (Motivatie)", "cloud_doc.html#autotoc_md22", [
        [ "Cloud Connectiviteit", "cloud_doc.html#autotoc_md23", null ],
        [ "FOTA Orchestratie", "cloud_doc.html#autotoc_md24", null ]
      ] ],
      [ "Wat? (Functionaliteit)", "cloud_doc.html#autotoc_md26", [
        [ "Cloud Connectie State Machine", "cloud_doc.html#autotoc_md27", null ],
        [ "FOTA Event Flow", "cloud_doc.html#autotoc_md28", null ],
        [ "LED Integration", "cloud_doc.html#autotoc_md29", null ]
      ] ],
      [ "How? (Implementatie)", "cloud_doc.html#autotoc_md31", [
        [ "Boot Confirmation", "cloud_doc.html#autotoc_md32", null ],
        [ "FOTA Channel Publishing", "cloud_doc.html#autotoc_md33", null ]
      ] ],
      [ "Edge Cases", "cloud_doc.html#autotoc_md35", [
        [ "Netwerk Loss During FOTA", "cloud_doc.html#autotoc_md36", null ],
        [ "Corrupte Firmware Image", "cloud_doc.html#autotoc_md37", null ],
        [ "Flash Capacity", "cloud_doc.html#autotoc_md38", null ],
        [ "Boot Loop Protection", "cloud_doc.html#autotoc_md39", null ]
      ] ],
      [ "Dependencies", "cloud_doc.html#autotoc_md41", [
        [ "Inbound (FOTA Requires)", "cloud_doc.html#autotoc_md42", null ],
        [ "Outbound (Using FOTA)", "cloud_doc.html#autotoc_md43", null ]
      ] ],
      [ "Configuratie", "cloud_doc.html#autotoc_md45", [
        [ "Kconfig (prj.conf)", "cloud_doc.html#autotoc_md46", null ],
        [ "Sysbuild (sysbuild.conf)", "cloud_doc.html#autotoc_md47", null ],
        [ "Partition Layout (pm_static.yml)", "cloud_doc.html#autotoc_md48", null ]
      ] ],
      [ "Testing", "cloud_doc.html#autotoc_md50", [
        [ "Build Validation", "cloud_doc.html#autotoc_md51", null ],
        [ "FOTA End-to-End Test", "cloud_doc.html#autotoc_md52", null ],
        [ "Rollback Test (Warning: Intentional Crash)", "cloud_doc.html#autotoc_md53", null ]
      ] ],
      [ "Timing &amp; Performance", "cloud_doc.html#autotoc_md55", [
        [ "Download Duration", "cloud_doc.html#autotoc_md56", null ],
        [ "MCUboot Swap Duration", "cloud_doc.html#autotoc_md57", null ],
        [ "Boot Confirmation Window", "cloud_doc.html#autotoc_md58", null ]
      ] ],
      [ "Toekomstige Uitbreidingen", "cloud_doc.html#autotoc_md60", [
        [ "Priority 1: External Flash Support", "cloud_doc.html#autotoc_md61", null ],
        [ "Priority 2: Scheduled FOTA Windows", "cloud_doc.html#autotoc_md62", null ],
        [ "Priority 3: Delta Updates", "cloud_doc.html#autotoc_md63", null ]
      ] ],
      [ "Zie Ook", "cloud_doc.html#autotoc_md65", null ],
      [ "Zie Ook", "cloud_doc.html#autotoc_md67", null ]
    ] ],
    [ "Energy Pulse Module - Documentatie", "energy_pulse_doc.html", [
      [ "🔗 Navigatie", "energy_pulse_doc.html#autotoc_md69", null ],
      [ "Overzicht", "energy_pulse_doc.html#autotoc_md71", null ],
      [ "Waarom? (Probleem &amp; Motivatie)", "energy_pulse_doc.html#autotoc_md73", [
        [ "Persistente Energietellers", "energy_pulse_doc.html#autotoc_md74", null ],
        [ "GPIO Interrupt Gedreven", "energy_pulse_doc.html#autotoc_md75", null ]
      ] ],
      [ "Wat? (Functionaliteit &amp; Data Flow)", "energy_pulse_doc.html#autotoc_md77", [
        [ "Kanaal Configuratie", "energy_pulse_doc.html#autotoc_md78", null ],
        [ "Data Flow", "energy_pulse_doc.html#autotoc_md79", null ],
        [ "ZBUS Interfaces", "energy_pulse_doc.html#autotoc_md80", null ]
      ] ],
      [ "Hoe? (Architectuur &amp; Gedrag)", "energy_pulse_doc.html#autotoc_md82", [
        [ "Initialisatie Sequence", "energy_pulse_doc.html#autotoc_md83", null ],
        [ "Runtime Gedrag", "energy_pulse_doc.html#autotoc_md84", null ],
        [ "Error Handling", "energy_pulse_doc.html#autotoc_md85", null ],
        [ "Configuratie (Kconfig)", "energy_pulse_doc.html#autotoc_md86", null ]
      ] ],
      [ "Resultaten &amp; Impact", "energy_pulse_doc.html#autotoc_md88", [
        [ "Geheugen &amp; Performance", "energy_pulse_doc.html#autotoc_md89", null ],
        [ "Betrouwbaarheid", "energy_pulse_doc.html#autotoc_md90", null ],
        [ "Design Trade-offs", "energy_pulse_doc.html#autotoc_md91", null ],
        [ "Toekomstige Uitbreidingen", "energy_pulse_doc.html#autotoc_md92", null ]
      ] ],
      [ "Zie Ook", "energy_pulse_doc.html#autotoc_md94", null ]
    ] ],
    [ "LED Module - Documentatie", "led_doc.html", [
      [ "🔗 Navigatie", "led_doc.html#autotoc_md96", null ],
      [ "Overzicht", "led_doc.html#autotoc_md98", null ],
      [ "Waarom? (Probleem &amp; Motivatie)", "led_doc.html#autotoc_md100", [
        [ "Visuele Feedback voor IoT Device", "led_doc.html#autotoc_md101", null ],
        [ "Non-Blocking LED Control", "led_doc.html#autotoc_md102", null ]
      ] ],
      [ "Wat? (Functionaliteit &amp; Data Flow)", "led_doc.html#autotoc_md104", [
        [ "LED Status Patronen", "led_doc.html#autotoc_md105", null ],
        [ "ZBUS Interfaces", "led_doc.html#autotoc_md106", null ],
        [ "Typische Scenario's", "led_doc.html#autotoc_md107", null ]
      ] ],
      [ "Hoe? (Architectuur &amp; Gedrag)", "led_doc.html#autotoc_md109", [
        [ "Hardware Interface", "led_doc.html#autotoc_md110", null ],
        [ "Pattern Implementation", "led_doc.html#autotoc_md111", null ],
        [ "State Management", "led_doc.html#autotoc_md112", null ]
      ] ],
      [ "LED Feedback Waarde", "led_doc.html#autotoc_md114", [
        [ "User Experience Benefits", "led_doc.html#autotoc_md115", null ],
        [ "Remote Support Voordelen", "led_doc.html#autotoc_md116", null ],
        [ "Future Uitbreidingen", "led_doc.html#autotoc_md117", null ]
      ] ],
      [ "Zie Ook", "led_doc.html#autotoc_md120", null ]
    ] ],
    [ "Message Queue Module - Documentatie", "message_queue_doc.html", [
      [ "🔗 Navigatie", "message_queue_doc.html#autotoc_md122", null ],
      [ "Overzicht", "message_queue_doc.html#autotoc_md124", null ],
      [ "Waarom? (Design Rationale)", "message_queue_doc.html#autotoc_md126", [
        [ "Gecoördineerde Data Collectie", "message_queue_doc.html#autotoc_md127", null ],
        [ "Delivery Garanties via Buffering", "message_queue_doc.html#autotoc_md128", null ]
      ] ],
      [ "Wat? (Functionaliteit &amp; Data Flow)", "message_queue_doc.html#autotoc_md130", [
        [ "Gecoördineerde Data Collectie Flow", "message_queue_doc.html#autotoc_md131", null ],
        [ "ZBUS Interfaces", "message_queue_doc.html#autotoc_md132", null ],
        [ "Message Format", "message_queue_doc.html#autotoc_md133", null ]
      ] ],
      [ "Hoe? (Architectuur &amp; Gedrag)", "message_queue_doc.html#autotoc_md135", [
        [ "State Machine", "message_queue_doc.html#autotoc_md136", null ],
        [ "Queue Management", "message_queue_doc.html#autotoc_md137", null ],
        [ "Verzend Logica", "message_queue_doc.html#autotoc_md138", null ]
      ] ],
      [ "Cloud Message Format", "message_queue_doc.html#autotoc_md140", [
        [ "External Interface Contract", "message_queue_doc.html#autotoc_md141", null ],
        [ "Message Structure", "message_queue_doc.html#autotoc_md142", null ],
        [ "Field Definitions", "message_queue_doc.html#autotoc_md143", null ],
        [ "Design Rationale: Short Key Names", "message_queue_doc.html#autotoc_md144", null ],
        [ "Message Presence Scenarios", "message_queue_doc.html#autotoc_md145", null ],
        [ "Transport Details", "message_queue_doc.html#autotoc_md146", null ],
        [ "Gas Unit Clarification", "message_queue_doc.html#autotoc_md147", null ]
      ] ],
      [ "Queue Overflow Gedrag", "message_queue_doc.html#autotoc_md149", null ],
      [ "Configuratie", "message_queue_doc.html#autotoc_md151", null ],
      [ "Toekomstige Uitbreidingen", "message_queue_doc.html#autotoc_md153", null ],
      [ "Zie Ook", "message_queue_doc.html#autotoc_md155", null ]
    ] ],
    [ "Network Module - Documentatie", "network_doc.html", [
      [ "🔗 Navigatie", "network_doc.html#autotoc_md157", null ],
      [ "Overzicht", "network_doc.html#autotoc_md159", null ],
      [ "Waarom? (Design Rationale)", "network_doc.html#autotoc_md161", [
        [ "Event-Driven Network Management", "network_doc.html#autotoc_md162", null ],
        [ "Modem Initialization Hook", "network_doc.html#autotoc_md163", null ]
      ] ],
      [ "Wat? (Functionaliteit &amp; Data Flow)", "network_doc.html#autotoc_md165", [
        [ "Network Status Flow", "network_doc.html#autotoc_md166", null ],
        [ "ZBUS Interfaces", "network_doc.html#autotoc_md167", null ],
        [ "Network Status Enums", "network_doc.html#autotoc_md168", null ]
      ] ],
      [ "Hoe? (Architectuur &amp; Gedrag)", "network_doc.html#autotoc_md170", [
        [ "State Machine", "network_doc.html#autotoc_md171", null ],
        [ "Zephyr Connection Manager Integration", "network_doc.html#autotoc_md172", null ],
        [ "Modem Initialization Details", "network_doc.html#autotoc_md173", null ]
      ] ],
      [ "Configuratie", "network_doc.html#autotoc_md175", null ],
      [ "Toekomstige Uitbreidingen", "network_doc.html#autotoc_md177", null ],
      [ "Zie Ook", "network_doc.html#autotoc_md179", null ]
    ] ],
    [ "P1 DSMR Module - Documentatie", "p_one_doc.html", [
      [ "🔗 Navigatie", "p_one_doc.html#autotoc_md181", null ],
      [ "Overzicht", "p_one_doc.html#autotoc_md183", null ],
      [ "Functionaliteit", "p_one_doc.html#autotoc_md184", [
        [ "Data Acquisitie van DSMR Meters", "p_one_doc.html#autotoc_md185", null ],
        [ "UART Async API &amp; Timing", "p_one_doc.html#autotoc_md186", null ],
        [ "UART Timing Calculations - Fundamentals", "p_one_doc.html#autotoc_md187", null ],
        [ "OBIS Parsing &amp; Data Conversie", "p_one_doc.html#autotoc_md188", null ],
        [ "Rolling Statistics &amp; Sampling", "p_one_doc.html#autotoc_md189", null ],
        [ "Gas Meting Acquisitie", "p_one_doc.html#autotoc_md190", null ]
      ] ],
      [ "ZBUS Integratie", "p_one_doc.html#autotoc_md191", [
        [ "ACQ_TRIGGER Flow", "p_one_doc.html#autotoc_md192", null ],
        [ "PUBLISH Flow", "p_one_doc.html#autotoc_md193", null ]
      ] ],
      [ "Architectuur", "p_one_doc.html#autotoc_md194", [
        [ "1. UART Callbacks (Asynchrone Data Ontvangst)", "p_one_doc.html#autotoc_md195", null ],
        [ "2. ZBUS Message Handling (Periodieke Triggers)", "p_one_doc.html#autotoc_md196", null ],
        [ "Thread Loop Structuur", "p_one_doc.html#autotoc_md197", null ]
      ] ],
      [ "Technische Diepgang", "p_one_doc.html#autotoc_md198", [
        [ "Waarom Integer Fixed-Point?", "p_one_doc.html#autotoc_md199", null ],
        [ "CRC16 Validatie", "p_one_doc.html#autotoc_md200", null ],
        [ "Edge Cases &amp; Robuustheid", "p_one_doc.html#autotoc_md201", null ],
        [ "Timing &amp; Watchdog", "p_one_doc.html#autotoc_md202", null ]
      ] ],
      [ "Configuratie", "p_one_doc.html#autotoc_md203", null ],
      [ "Data Output", "p_one_doc.html#autotoc_md204", null ],
      [ "📐 Appendix A: UART Timing Analyse", "p_one_doc.html#autotoc_md206", [
        [ "Overzicht", "p_one_doc.html#autotoc_md207", null ],
        [ "UART Frame Timing Fundamentals", "p_one_doc.html#autotoc_md208", null ],
        [ "Critical Timing Calculations", "p_one_doc.html#autotoc_md209", [
          [ "1. Maximum Telegram Transmission Time", "p_one_doc.html#autotoc_md210", null ],
          [ "2. UART RX Timeout (Inter-byte timeout)", "p_one_doc.html#autotoc_md211", null ],
          [ "3. Total Response Timeout", "p_one_doc.html#autotoc_md212", null ]
        ] ],
        [ "Why These Specific Timeouts Matter", "p_one_doc.html#autotoc_md213", [
          [ "Frame-Level Timing (87 µs)", "p_one_doc.html#autotoc_md214", null ],
          [ "Inter-byte Timeout (392 ms)", "p_one_doc.html#autotoc_md215", null ],
          [ "Telegram Timeout (784 ms)", "p_one_doc.html#autotoc_md216", null ],
          [ "Response Timeout (10.8s)", "p_one_doc.html#autotoc_md217", null ]
        ] ],
        [ "Edge Case Scenarios", "p_one_doc.html#autotoc_md218", [
          [ "Scenario 1: Slow P1 Device Response", "p_one_doc.html#autotoc_md219", null ],
          [ "Scenario 2: Maximum Length Telegram", "p_one_doc.html#autotoc_md220", null ],
          [ "Scenario 3: Inter-byte Timeout Trigger", "p_one_doc.html#autotoc_md221", null ]
        ] ],
        [ "Critical Dependencies", "p_one_doc.html#autotoc_md222", [
          [ "Watchdog Relationship", "p_one_doc.html#autotoc_md223", null ],
          [ "Buffer Size Constraint", "p_one_doc.html#autotoc_md224", null ]
        ] ],
        [ "Key Timing Parameters Summary", "p_one_doc.html#autotoc_md225", null ],
        [ "Multi-Layer Timeout Strategy", "p_one_doc.html#autotoc_md226", null ]
      ] ]
    ] ],
    [ "Reboot Module - Documentatie", "reboot_doc.html", [
      [ "🔗 Navigatie", "reboot_doc.html#autotoc_md228", null ],
      [ "Overzicht", "reboot_doc.html#autotoc_md230", null ],
      [ "Waarom? (Probleem &amp; Motivatie)", "reboot_doc.html#autotoc_md232", [
        [ "Graceful Shutdown", "reboot_doc.html#autotoc_md233", null ],
        [ "Reboot Reason Tracking", "reboot_doc.html#autotoc_md234", null ]
      ] ],
      [ "Wat? (Functionaliteit &amp; Data Flow)", "reboot_doc.html#autotoc_md236", [
        [ "Reboot Types", "reboot_doc.html#autotoc_md237", null ],
        [ "Reboot Redenen", "reboot_doc.html#autotoc_md238", null ],
        [ "ZBUS Protocol", "reboot_doc.html#autotoc_md239", null ],
        [ "Shutdown Sequence", "reboot_doc.html#autotoc_md240", null ]
      ] ],
      [ "Hoe? (Architectuur &amp; Gedrag)", "reboot_doc.html#autotoc_md242", [
        [ "State Machine", "reboot_doc.html#autotoc_md243", null ],
        [ "Acknowledgement Tracking", "reboot_doc.html#autotoc_md244", null ],
        [ "Timeout Mechanisme", "reboot_doc.html#autotoc_md245", null ],
        [ "Work Queue Pattern", "reboot_doc.html#autotoc_md246", null ]
      ] ],
      [ "Shutdown Betrouwbaarheid", "reboot_doc.html#autotoc_md248", [
        [ "Graceful Shutdown Gedrag", "reboot_doc.html#autotoc_md249", null ],
        [ "Toekomstige Uitbreidingen", "reboot_doc.html#autotoc_md251", null ]
      ] ],
      [ "Module Shutdown Implementatie Vereisten", "reboot_doc.html#autotoc_md253", null ],
      [ "Zie Ook", "reboot_doc.html#autotoc_md256", null ]
    ] ],
    [ "Timing Module - Documentatie", "timing_doc.html", [
      [ "🔗 Navigatie", "timing_doc.html#autotoc_md258", null ],
      [ "Overzicht", "timing_doc.html#autotoc_md260", null ],
      [ "Waarom? (Probleem &amp; Motivatie)", "timing_doc.html#autotoc_md262", [
        [ "Gecoördineerde Timing", "timing_doc.html#autotoc_md263", null ],
        [ "Offset Mechanisme", "timing_doc.html#autotoc_md264", null ]
      ] ],
      [ "Wat? (Functionaliteit &amp; Data Flow)", "timing_doc.html#autotoc_md266", [
        [ "ZBUS Channels (Published)", "timing_doc.html#autotoc_md267", null ],
        [ "Complete System Timeline", "timing_doc.html#autotoc_md268", null ],
        [ "Use Case: Typische Dag", "timing_doc.html#autotoc_md269", null ]
      ] ],
      [ "Hoe? (Architectuur &amp; Gedrag)", "timing_doc.html#autotoc_md271", [
        [ "Architectuur", "timing_doc.html#autotoc_md272", null ],
        [ "Timer Configuratie", "timing_doc.html#autotoc_md273", null ],
        [ "State Machine", "timing_doc.html#autotoc_md274", null ],
        [ "Configuratie (Kconfig)", "timing_doc.html#autotoc_md275", null ]
      ] ],
      [ "Resultaten &amp; Impact", "timing_doc.html#autotoc_md277", [
        [ "Geheugen &amp; Performance", "timing_doc.html#autotoc_md278", null ],
        [ "Timing Accuracy", "timing_doc.html#autotoc_md279", null ],
        [ "Betrouwbaarheid", "timing_doc.html#autotoc_md280", null ],
        [ "Toekomstige Uitbreidingen", "timing_doc.html#autotoc_md281", null ]
      ] ],
      [ "Zie Ook", "timing_doc.html#autotoc_md283", null ]
    ] ],
    [ "Development Guide", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html", [
      [ "📋 Overzicht", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md325", null ],
      [ "🛠️ Environment Setup", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md327", [
        [ "Prerequisites", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md328", null ],
        [ "Toolchain Verificatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md329", null ]
      ] ],
      [ "⚙️ West Configuratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md331", [
        [ "Eerste Keer Setup", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md332", null ],
        [ "Verificatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md333", null ]
      ] ],
      [ "🏗️ Build Instructies", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md335", [
        [ "Standard Build", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md336", null ],
        [ "Clean Build", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md337", null ],
        [ "Debug Build", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md338", null ],
        [ "Build voor Specifiek Board", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md339", null ]
      ] ],
      [ "📦 Flash Instructies", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md341", [
        [ "Via West", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md342", null ],
        [ "Via nrfjprog (Direct)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md343", null ],
        [ "Flash met Custom Runner", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md344", null ]
      ] ],
      [ "🐛 Debug Procedures", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md346", [
        [ "Serial Console", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md347", null ],
        [ "GDB Debugging", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md348", null ],
        [ "RTT (Real-Time Transfer) Logging", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md349", null ]
      ] ],
      [ "📊 Build Targets", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md351", [
        [ "Beschikbare Targets", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md352", null ],
        [ "Size Analysis", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md353", null ]
      ] ],
      [ "🔧 Custom Board Definitie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md355", null ],
      [ "🧪 Testing", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md357", [
        [ "Unit Tests", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md358", null ],
        [ "Integration Tests", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md359", null ]
      ] ],
      [ "📝 Build Troubleshooting", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md361", [
        [ "\"West command not found\"", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md362", null ],
        [ "\"Board not found\"", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md363", null ],
        [ "\"Build cache corrupt\"", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md364", null ],
        [ "\"Out of Flash/RAM\"", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md365", null ]
      ] ],
      [ "🚀 Advanced Topics", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md367", [
        [ "Multi-Image Builds (MCUboot + App)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md368", null ],
        [ "FOTA Image Generatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md369", null ],
        [ "Custom Overlays", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md370", null ]
      ] ],
      [ "📚 Zie Ook", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2docs_2development-guide.html#autotoc_md372", null ]
    ] ],
    [ "Provisioning and Onboarding", "provisioning.html", [
      [ "📋 Overzicht", "provisioning.html#autotoc_md375", null ],
      [ "🛠️ Fase 1: Eenmalige Setup", "provisioning.html#autotoc_md377", [
        [ "1.1 Development Environment", "provisioning.html#autotoc_md378", null ],
        [ "1.2 nRF Connect Environment Activeren", "provisioning.html#autotoc_md379", null ],
        [ "1.3 Modem Firmware Downloaden", "provisioning.html#autotoc_md381", [
          [ "Download Modem Firmware v2.0.3", "provisioning.html#autotoc_md382", null ],
          [ "Download PTI Modem Firmware v2.3.8", "provisioning.html#autotoc_md383", null ]
        ] ],
        [ "1.4 Modem Shell (MoSh) Bouwen", "provisioning.html#autotoc_md385", null ],
        [ "1.5 Certificaten Genereren", "provisioning.html#autotoc_md387", null ],
        [ "1.6 IMEI Lijst Verkrijgen", "provisioning.html#autotoc_md389", null ]
      ] ],
      [ "🔧 Fase 2: Per Device Provisioneren", "provisioning.html#autotoc_md391", [
        [ "2.1 IMEI Programmeren", "provisioning.html#autotoc_md392", [
          [ "Stap 1: Flash PTI Modem Firmware", "provisioning.html#autotoc_md393", null ],
          [ "Stap 2: Device Recoveren", "provisioning.html#autotoc_md394", null ],
          [ "Stap 3: Flash Modem Shell", "provisioning.html#autotoc_md395", null ],
          [ "Stap 4: IMEI Schrijven via RTT", "provisioning.html#autotoc_md396", null ]
        ] ],
        [ "2.2 Certificaten Installeren", "provisioning.html#autotoc_md398", [
          [ "Stap 1: Flash Productie Modem Firmware", "provisioning.html#autotoc_md399", null ],
          [ "Stap 2: Certificaten Programmeren", "provisioning.html#autotoc_md400", null ]
        ] ],
        [ "2.3 User Applicatie Flashen", "provisioning.html#autotoc_md402", [
          [ "Build de Dinnis Application", "provisioning.html#autotoc_md403", null ],
          [ "Flash naar Device", "provisioning.html#autotoc_md404", null ]
        ] ]
      ] ],
      [ "☁️ Fase 3: Bulk Onboarding naar nRF Cloud", "provisioning.html#autotoc_md406", [
        [ "3.1 Alle Devices Onboarden", "provisioning.html#autotoc_md407", [
          [ "nRF Cloud API Key", "provisioning.html#autotoc_md408", null ],
          [ "Voer Onboarding Uit", "provisioning.html#autotoc_md409", null ]
        ] ]
      ] ],
      [ "📚 Referenties", "provisioning.html#autotoc_md411", null ],
      [ "✅ Checklist", "provisioning.html#autotoc_md413", [
        [ "Eenmalige Setup", "provisioning.html#autotoc_md414", null ],
        [ "Per Device", "provisioning.html#autotoc_md415", null ],
        [ "Bulk Onboarding", "provisioning.html#autotoc_md416", null ]
      ] ]
    ] ],
    [ "Best Practices - Praktische Richtlijnen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html", [
      [ "Error Handling en Return Values", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md419", [
        [ "Error Variable Declaratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md420", null ],
        [ "Return Patterns", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md421", null ],
        [ "Return Value Conventies", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md422", null ],
        [ "Logging Bij Errors", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md423", null ],
        [ "Void vs Int Return", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md424", null ],
        [ "Assertions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md425", null ]
      ] ],
      [ "ZBUS Patterns", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md427", [
        [ "MSG_SUBSCRIBER Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md428", null ],
        [ "LISTENER Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md429", null ],
        [ "Publishing Messages", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md430", null ],
        [ "Message Processing in Thread", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md431", null ]
      ] ],
      [ "State Machine Patterns (SMF)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md433", [
        [ "State Machine Setup", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md434", null ],
        [ "State Handler Functions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md435", null ],
        [ "State Transitions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md436", null ]
      ] ],
      [ "Resource Management", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md438", [
        [ "K_NO_WAIT voor Immediate Scheduling", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md439", null ],
        [ "Mutex Usage", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md440", null ],
        [ "Work Queue Handlers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md441", null ]
      ] ],
      [ "Task Watchdog", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md443", [
        [ "Configuratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md444", null ],
        [ "Module Setup Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md445", null ],
        [ "Timing Berekening", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md446", null ],
        [ "Checklist voor Nieuwe Module", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md447", null ]
      ] ],
      [ "Hardware Interaction", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md449", [
        [ "Device Readiness Checks", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md450", null ],
        [ "GPIO Callbacks", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md451", null ],
        [ "LED Control Patterns", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md452", null ]
      ] ],
      [ "Undefined Behavior en Portability", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md454", [
        [ "Evaluatievolgorde", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md455", null ],
        [ "Type Aannames", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md456", null ],
        [ "Pointer Arithmetic", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md457", null ]
      ] ],
      [ "Common Patterns", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md459", [
        [ "Thread Loop met ZBUS + SMF", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md460", null ],
        [ "Periodic Work Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md461", null ],
        [ "Callback Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md462", null ]
      ] ],
      [ "Performance en Optimization", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md464", [
        [ "Memory Usage", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md465", null ],
        [ "Logging Levels", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md466", null ]
      ] ],
      [ "Security en Safety", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md468", [
        [ "Input Validation", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md469", null ],
        [ "Buffer Overflow Prevention", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md470", null ]
      ] ]
    ] ],
    [ "Code Structure - Organisatie en Volgorde", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html", [
      [ "Toelichting", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md474", null ],
      [ "Include Guards en Headers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md475", [
        [ "Header Files (.h)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md476", null ],
        [ "Include Order (in .c files)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md477", null ]
      ] ],
      [ "Forward Declarations", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md479", [
        [ "Wanneer Gebruiken", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md480", null ],
        [ "State Machine Forward Declarations", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md481", null ],
        [ "Volgorde", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md482", null ]
      ] ],
      [ "Sectie Headers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md484", [
        [ "Standaard Secties (in volgorde)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md485", null ]
      ] ],
      [ "File Structuur", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md487", [
        [ "Source File (.c) Template", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md488", null ],
        [ "Header File (.h) Template", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md489", null ]
      ] ],
      [ "ZBUS Conventies", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md491", [
        [ "Channel Naming", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md492", null ],
        [ "Message Structs", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md493", null ],
        [ "Channel Declarations vs Definitions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md494", null ]
      ] ],
      [ "Module Initialisatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md496", [
        [ "SYS_INIT Gebruik", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md497", null ],
        [ "Kconfig Integratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md498", null ]
      ] ],
      [ "CMakeLists.txt voor Modules", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md500", [
        [ "Standaard Pattern (Altijd Compileren)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md501", null ],
        [ "Conditionele Compilatie Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md502", null ],
        [ "Multiple Source Files", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md503", null ],
        [ "Header Visibility", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md504", null ],
        [ "Integration in Parent CMakeLists", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md505", null ]
      ] ],
      [ "Module Checklist", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md507", [
        [ "Bestanden Structuur", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md508", null ],
        [ "Code Structuur", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md509", null ],
        [ "ZBUS Integratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md510", null ],
        [ "Module Initialisatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md511", null ],
        [ "CMakeLists.txt", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md512", null ],
        [ "Kconfig", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md513", null ],
        [ "Task Watchdog (indien module eigen thread heeft)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md514", null ],
        [ "Testing", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md515", null ],
        [ "Documentatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md516", null ]
      ] ],
      [ "Referentie Modules", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2structure.html#autotoc_md518", null ]
    ] ],
    [ "Code Style - Formattering Regels", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html", [
      [ "Indentatie en Formattering", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md522", [
        [ "Spaties (GEEN Tabs)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md523", null ],
        [ "Lege Regels", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md524", null ],
        [ "Brace Style", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md525", null ],
        [ "Line Length", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md526", null ]
      ] ],
      [ "Naming Conventions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md528", [
        [ "Functies", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md529", null ],
        [ "Variabelen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md530", null ],
        [ "Constanten en Defines", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md531", null ],
        [ "Macro's", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md532", null ],
        [ "Enums", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md533", null ],
        [ "Structs", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md534", null ],
        [ "Pointers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md535", null ]
      ] ],
      [ "Comments en Documentatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md537", [
        [ "Comment Style", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md538", null ],
        [ "Doxygen Documentatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md539", null ]
      ] ],
      [ "Variable Declarations", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md541", [
        [ "Initialization", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md542", null ],
        [ "Scope en Static", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md543", null ],
        [ "Arrays en Buffers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md544", null ],
        [ "sizeof Operator", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md545", null ]
      ] ],
      [ "Magic Numbers en Constants", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md547", [
        [ "enum vs define", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md548", null ],
        [ "Gebruik Named Constants", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md549", null ],
        [ "Uitzonderingen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md550", null ]
      ] ],
      [ "NULL Checks en Validatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md552", [
        [ "Pointer Validatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md553", null ],
        [ "Bool Checks", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md554", null ]
      ] ],
      [ "ARG_UNUSED Macro", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2style.html#autotoc_md556", null ]
    ] ],
    [ "Module Documentatie Richtlijnen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html", [
      [ "Bestandsnaam Conventie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md559", null ],
      [ "Documentatie Niveau", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md561", null ],
      [ "✅ Wat ER WEL in moet", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md563", [
        [ "1. Specificaties", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md564", null ],
        [ "2. Implementatie Design Rationale", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md565", null ],
        [ "3. Edge Cases", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md566", null ],
        [ "4. Argumentaties", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md567", null ],
        [ "5. Afwegingen (Trade-offs)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md568", null ],
        [ "6. Intended Behaviour", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md569", null ],
        [ "7. Timing Uitleg", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md570", null ],
        [ "8. Timing Diagrammen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md571", null ],
        [ "9. State Machine Transities", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md572", null ],
        [ "10. Afhankelijkheden van Andere Modules", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md573", null ],
        [ "11. ZBUS Kanalen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md574", null ]
      ] ],
      [ "❗ Wat ER NIET in moet", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md576", [
        [ "1. Code Implementatie Voorbeelden", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md577", null ],
        [ "2. Herhalingen van Blokken Code", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md578", null ],
        [ "3. Historische Referenties en Voor/Na Vergelijkingen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md579", null ]
      ] ],
      [ "4. Code Verificatie en Synchronisatie (KRITIEK! ⚠️)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md581", [
        [ "Principe: NOOIT iets verzinnen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md582", null ],
        [ "Bij het schrijven of bewerken van documentatie:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md583", [
          [ "✅ VERPLICHTE STAPPEN:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md584", null ],
          [ "❗ VERBODEN:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md585", null ]
        ] ],
        [ "Voorbeelden van FOUTEN door niet te verifiëren:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md586", [
          [ "❗ FOUT (verzonnen content):", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md587", null ],
          [ "✅ CORRECT (geverifieerd):", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md588", null ]
        ] ],
        [ "Checklist voor elke documentatie wijziging:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md589", null ],
        [ "Waarom is dit zo belangrijk?", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md590", null ]
      ] ],
      [ "Samenvatting", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md592", null ],
      [ "5. AI Agent Documentatie Verificatie Protocol", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md594", [
        [ "5.1 Waarom dit Protocol?", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md595", null ],
        [ "5.2 Fundamenteel Principe: Code-First Investigation", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md597", null ],
        [ "5.3 Systematische Verificatie Strategie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md599", [
          [ "Fase 1: Build Code Inventory (Objectieve Waarheid)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md600", null ],
          [ "Fase 2: Documentation Claims Extraction", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md602", null ],
          [ "Fase 3: Systematische Verificatie Per Claim Type", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md604", [
            [ "3.1 Architectuur Pattern Claims", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md605", null ],
            [ "3.2 Communication Pattern Claims", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md607", null ],
            [ "3.3 Configuration &amp; Constants Claims", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md609", null ],
            [ "3.4 Timing &amp; Behavior Claims", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md611", null ]
          ] ],
          [ "Fase 4: Documentatie Anti-Patterns (Red Flags)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md613", [
            [ "4.1 Taalgebruik Red Flags", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md614", null ],
            [ "4.2 Structurele Red Flags", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md615", null ],
            [ "4.3 Feature Consistency Red Flags", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md616", null ]
          ] ]
        ] ],
        [ "5.4 Verification Workflow (5 Fasen)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md618", null ],
        [ "5.5 Practical Tools &amp; Commands", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md620", [
          [ "Code Analysis Commands (Voorbeelden)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md621", null ],
          [ "Git History Commands (Context)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md622", null ],
          [ "Verification Shortcuts", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md623", null ]
        ] ],
        [ "5.6 Checklist: Voor Documentatie Review Sessie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md625", null ],
        [ "5.7 Key Insights &amp; Lessons Learned", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md627", null ],
        [ "5.8 Samenvatting Protocol", "md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2documentation.html#autotoc_md629", null ]
      ] ]
    ] ],
    [ "Doxygen Documentatie Guidelines", "doxygen_guidelines.html", [
      [ "📋 Filosofie", "doxygen_guidelines.html#autotoc_md631", null ],
      [ "📚 Documentatie Types", "doxygen_guidelines.html#autotoc_md633", null ],
      [ "🏗️ Project Layout", "doxygen_guidelines.html#autotoc_md635", null ],
      [ "⚙️ Doxyfile Configuratie", "doxygen_guidelines.html#autotoc_md637", null ],
      [ "🎨 Styling &amp; Branding", "doxygen_guidelines.html#autotoc_md639", [
        [ "Custom CSS (<span class=\"tt\">docs/doxygen-custom.css</span>)", "doxygen_guidelines.html#autotoc_md640", null ],
        [ "Header HTML (<span class=\"tt\">docs/header.html</span>)", "doxygen_guidelines.html#autotoc_md641", null ]
      ] ],
      [ "📝 Module Documentatie", "doxygen_guidelines.html#autotoc_md643", [
        [ "Structuur van <span class=\"tt\">&lt;module&gt;_doc.md</span>", "doxygen_guidelines.html#autotoc_md644", null ]
      ] ],
      [ "🔗 Cross-Referencing", "doxygen_guidelines.html#autotoc_md646", [
        [ "Module Groepen Definiëren", "doxygen_guidelines.html#autotoc_md647", null ]
      ] ]
    ] ],
    [ "Topics", "topics.html", "topics" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"globals_func_q.html",
"md__2home_2ruben_2Documents_2solarresult_2firmware_2dinnis-core_2guidelines_2best-practices.html#autotoc_md459",
"network_8c.html#aed12310685a6ef6ae9b8b0cb24227fd9",
"reboot_8c.html#a97a701546dbe400b8a6683136d04c93a"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';