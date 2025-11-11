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
    [ "SolarResult Energy Core - Firmware Documentatie", "index.html", "index" ],
    [ "App Module - Documentatie", "app_doc.html", [
      [ "1. Navigatie", "app_doc.html#autotoc_md1", null ],
      [ "2. Doel en Verantwoordelijkheden", "app_doc.html#autotoc_md3", null ],
      [ "3. Functionaliteit", "app_doc.html#autotoc_md5", [
        [ "3.1 Hardware Watchdog", "app_doc.html#autotoc_md6", null ],
        [ "3.2 ZBUS Monitor", "app_doc.html#autotoc_md7", null ]
      ] ],
      [ "4. ZBUS Interface", "app_doc.html#autotoc_md9", [
        [ "4.1 Gepubliceerde Kanalen", "app_doc.html#autotoc_md10", null ],
        [ "4.2 Geobserveerde Kanalen", "app_doc.html#autotoc_md11", null ],
        [ "4.3 Legacy Kanalen", "app_doc.html#autotoc_md12", null ]
      ] ],
      [ "5. Architectuur", "app_doc.html#autotoc_md14", [
        [ "5.1 Thread Model", "app_doc.html#autotoc_md15", null ],
        [ "5.2 Configuratie", "app_doc.html#autotoc_md16", null ],
        [ "Watchdog Callback Behavior", "app_doc.html#autotoc_md17", null ],
        [ "Native Sim Handling", "app_doc.html#autotoc_md18", null ]
      ] ]
    ] ],
    [ "Cloud Module - Documentatie", "cloud_doc.html", [
      [ "1. Navigatie", "cloud_doc.html#autotoc_md20", null ],
      [ "2. Overzicht", "cloud_doc.html#autotoc_md22", null ],
      [ "3. Architectuur en Functionaliteit", "cloud_doc.html#autotoc_md24", [
        [ "3.1 Cloud Connectie State Machine", "cloud_doc.html#autotoc_md25", null ],
        [ "3.2 Data Acquisitie en Buffering", "cloud_doc.html#autotoc_md26", null ],
        [ "3.3 FOTA (Firmware-Over-The-Air)", "cloud_doc.html#autotoc_md27", null ]
      ] ],
      [ "4. ZBUS Interface", "cloud_doc.html#autotoc_md29", [
        [ "4.1 Geobserveerde Kanalen", "cloud_doc.html#autotoc_md30", null ],
        [ "4.2 Gepubliceerde Kanalen", "cloud_doc.html#autotoc_md31", null ]
      ] ],
      [ "5. Configuratie", "cloud_doc.html#autotoc_md33", null ]
    ] ],
    [ "Energy Pulse Module - Documentatie", "energy_pulse_doc.html", [
      [ "🔗 Navigatie", "energy_pulse_doc.html#autotoc_md35", null ],
      [ "Overzicht", "energy_pulse_doc.html#autotoc_md37", null ],
      [ "Wat? (Functionaliteit &amp; Data Flow)", "energy_pulse_doc.html#autotoc_md39", [
        [ "Kanaal Configuratie", "energy_pulse_doc.html#autotoc_md40", null ],
        [ "Data Flow", "energy_pulse_doc.html#autotoc_md41", null ],
        [ "ZBUS Interfaces", "energy_pulse_doc.html#autotoc_md42", null ]
      ] ],
      [ "Hoe? (Architectuur &amp; Gedrag)", "energy_pulse_doc.html#autotoc_md44", [
        [ "Initialisatie Sequence", "energy_pulse_doc.html#autotoc_md45", null ],
        [ "Runtime Gedrag", "energy_pulse_doc.html#autotoc_md46", null ],
        [ "Error Handling", "energy_pulse_doc.html#autotoc_md47", null ],
        [ "Configuratie (Kconfig)", "energy_pulse_doc.html#autotoc_md48", null ]
      ] ],
      [ "Resultaten &amp; Impact", "energy_pulse_doc.html#autotoc_md50", [
        [ "Geheugen &amp; Performance", "energy_pulse_doc.html#autotoc_md51", null ],
        [ "Betrouwbaarheid", "energy_pulse_doc.html#autotoc_md52", null ],
        [ "Design Trade-offs", "energy_pulse_doc.html#autotoc_md53", null ],
        [ "Toekomstige Uitbreidingen", "energy_pulse_doc.html#autotoc_md54", null ]
      ] ],
      [ "Zie Ook", "energy_pulse_doc.html#autotoc_md56", null ]
    ] ],
    [ "LED Module - Documentatie", "led_doc.html", [
      [ "🔗 Navigatie", "led_doc.html#autotoc_md58", null ],
      [ "Overzicht", "led_doc.html#autotoc_md60", null ],
      [ "Waarom? (Probleem &amp; Motivatie)", "led_doc.html#autotoc_md62", [
        [ "Visuele Feedback voor IoT Device", "led_doc.html#autotoc_md63", null ],
        [ "Non-Blocking LED Control", "led_doc.html#autotoc_md64", null ]
      ] ],
      [ "Wat? (Functionaliteit &amp; Data Flow)", "led_doc.html#autotoc_md66", [
        [ "LED Status Patronen", "led_doc.html#autotoc_md67", null ],
        [ "ZBUS Interfaces", "led_doc.html#autotoc_md68", null ],
        [ "Typische Scenario's", "led_doc.html#autotoc_md69", null ]
      ] ],
      [ "Hoe? (Architectuur &amp; Gedrag)", "led_doc.html#autotoc_md71", [
        [ "Network State Machine", "led_doc.html#autotoc_md72", null ]
      ] ],
      [ "LED Feedback Waarde", "led_doc.html#autotoc_md74", [
        [ "User Experience Benefits", "led_doc.html#autotoc_md75", null ],
        [ "Remote Support Voordelen", "led_doc.html#autotoc_md76", null ],
        [ "Future Uitbreidingen", "led_doc.html#autotoc_md77", null ]
      ] ],
      [ "Zie Ook", "led_doc.html#autotoc_md80", null ]
    ] ],
    [ "Message Queue Module", "message_queue_module.html", [
      [ "Overzicht", "message_queue_module.html#mq_overview", null ],
      [ "Data Flow &amp; State Machine", "message_queue_module.html#mq_dataflow", null ],
      [ "ZBUS Interface", "message_queue_module.html#mq_zbus", null ],
      [ "Timestamp Strategie", "message_queue_module.html#mq_timestamp", null ],
      [ "Cloud Message Format", "message_queue_module.html#mq_cloudformat", null ],
      [ "Buffering en Wachtrij", "message_queue_module.html#mq_buffering", null ]
    ] ],
    [ "", "md_modules_2network_2network__doc.html", [
      [ "grand_parent: Design", "md_modules_2network_2network__doc.html#autotoc_md81", null ],
      [ "Network Module", "md_modules_2network_2network__doc.html#autotoc_md82", [
        [ "Inhoudsopgave", "md_modules_2network_2network__doc.html#autotoc_md83", null ],
        [ "Overzicht", "md_modules_2network_2network__doc.html#autotoc_md84", null ],
        [ "Componenten Diagram", "md_modules_2network_2network__doc.html#autotoc_md85", null ],
        [ "State Machine", "md_modules_2network_2network__doc.html#autotoc_md86", null ],
        [ "ZBUS Kanalen", "md_modules_2network_2network__doc.html#autotoc_md87", [
          [ "Publicaties", "md_modules_2network_2network__doc.html#autotoc_md88", null ],
          [ "Abonnementen", "md_modules_2network_2network__doc.html#autotoc_md89", null ]
        ] ],
        [ "Foutafhandeling en Robuustheid", "md_modules_2network_2network__doc.html#autotoc_md90", null ],
        [ "Initialisatie Flow", "md_modules_2network_2network__doc.html#autotoc_md91", null ],
        [ "Afhankelijkheden", "md_modules_2network_2network__doc.html#autotoc_md92", null ]
      ] ]
    ] ],
    [ "P1 DSMR Module - Documentatie", "p_one_doc.html", [
      [ "🔗 Navigatie", "p_one_doc.html#autotoc_md94", null ],
      [ "Overzicht", "p_one_doc.html#autotoc_md96", null ],
      [ "Functionaliteit", "p_one_doc.html#autotoc_md97", [
        [ "Data Acquisitie van DSMR Meters", "p_one_doc.html#autotoc_md98", null ],
        [ "UART Async API &amp; Timing", "p_one_doc.html#autotoc_md99", null ],
        [ "UART Timing Calculations - Fundamentals", "p_one_doc.html#autotoc_md100", null ],
        [ "GPIO Data Request Pin &amp; Inverterende Buffer", "p_one_doc.html#autotoc_md101", null ],
        [ "OBIS Parsing &amp; Data Conversie", "p_one_doc.html#autotoc_md102", null ],
        [ "Rolling Statistics &amp; Sampling", "p_one_doc.html#autotoc_md103", null ],
        [ "Gas Meting Acquisitie", "p_one_doc.html#autotoc_md104", null ]
      ] ],
      [ "ZBUS Integratie", "p_one_doc.html#autotoc_md105", [
        [ "ACQ_TRIGGER Flow", "p_one_doc.html#autotoc_md106", null ],
        [ "PUBLISH Flow", "p_one_doc.html#autotoc_md107", null ]
      ] ],
      [ "Architectuur", "p_one_doc.html#autotoc_md108", [
        [ "1. UART Callbacks (Asynchrone Data Ontvangst)", "p_one_doc.html#autotoc_md109", null ],
        [ "2. ZBUS Message Handling (Periodieke Triggers)", "p_one_doc.html#autotoc_md110", null ],
        [ "Thread Loop Structuur", "p_one_doc.html#autotoc_md111", null ]
      ] ],
      [ "Technische Diepgang", "p_one_doc.html#autotoc_md112", [
        [ "Waarom Integer Fixed-Point?", "p_one_doc.html#autotoc_md113", null ],
        [ "CRC16 Validatie", "p_one_doc.html#autotoc_md114", null ],
        [ "Edge Cases &amp; Robuustheid", "p_one_doc.html#autotoc_md115", null ],
        [ "Timing &amp; Watchdog", "p_one_doc.html#autotoc_md116", null ]
      ] ],
      [ "Configuratie", "p_one_doc.html#autotoc_md117", null ],
      [ "Data Output", "p_one_doc.html#autotoc_md118", null ],
      [ "📐 Appendix A: UART Timing Analyse", "p_one_doc.html#autotoc_md120", [
        [ "Overzicht", "p_one_doc.html#autotoc_md121", null ],
        [ "UART Frame Timing Fundamentals", "p_one_doc.html#autotoc_md122", null ],
        [ "Critical Timing Calculations", "p_one_doc.html#autotoc_md123", [
          [ "1. Maximum Telegram Transmission Time", "p_one_doc.html#autotoc_md124", null ],
          [ "2. UART RX Timeout (Inter-byte timeout)", "p_one_doc.html#autotoc_md125", null ],
          [ "3. Total Response Timeout", "p_one_doc.html#autotoc_md126", null ]
        ] ],
        [ "Why These Specific Timeouts Matter", "p_one_doc.html#autotoc_md127", [
          [ "Frame-Level Timing (87 µs)", "p_one_doc.html#autotoc_md128", null ],
          [ "Inter-byte Timeout (392 ms)", "p_one_doc.html#autotoc_md129", null ],
          [ "Telegram Timeout (784 ms)", "p_one_doc.html#autotoc_md130", null ],
          [ "Response Timeout (10.8s)", "p_one_doc.html#autotoc_md131", null ]
        ] ],
        [ "Edge Case Scenarios", "p_one_doc.html#autotoc_md132", [
          [ "Scenario 1: Slow P1 Device Response", "p_one_doc.html#autotoc_md133", null ],
          [ "Scenario 2: Maximum Length Telegram", "p_one_doc.html#autotoc_md134", null ],
          [ "Scenario 3: Inter-byte Timeout Trigger", "p_one_doc.html#autotoc_md135", null ]
        ] ],
        [ "Critical Dependencies", "p_one_doc.html#autotoc_md136", [
          [ "Watchdog Relationship", "p_one_doc.html#autotoc_md137", null ],
          [ "Buffer Size Constraint", "p_one_doc.html#autotoc_md138", null ]
        ] ],
        [ "Key Timing Parameters Summary", "p_one_doc.html#autotoc_md139", null ],
        [ "Multi-Layer Timeout Strategy", "p_one_doc.html#autotoc_md140", null ]
      ] ]
    ] ],
    [ "", "md_modules_2reboot_2reboot__doc.html", [
      [ "grand_parent: Design", "md_modules_2reboot_2reboot__doc.html#autotoc_md141", null ],
      [ "Reboot Module", "md_modules_2reboot_2reboot__doc.html#autotoc_md142", [
        [ "Inhoudsopgave", "md_modules_2reboot_2reboot__doc.html#autotoc_md143", null ],
        [ "Overzicht", "md_modules_2reboot_2reboot__doc.html#autotoc_md144", null ],
        [ "Waarom een Reboot Module?", "md_modules_2reboot_2reboot__doc.html#autotoc_md145", null ],
        [ "Functionaliteit", "md_modules_2reboot_2reboot__doc.html#autotoc_md146", [
          [ "Reboot Types", "md_modules_2reboot_2reboot__doc.html#autotoc_md147", null ],
          [ "ZBUS Protocol", "md_modules_2reboot_2reboot__doc.html#autotoc_md148", null ]
        ] ],
        [ "Shutdown Protocol", "md_modules_2reboot_2reboot__doc.html#autotoc_md149", null ],
        [ "Architectuur en Gedrag", "md_modules_2reboot_2reboot__doc.html#autotoc_md150", [
          [ "State Machine", "md_modules_2reboot_2reboot__doc.html#autotoc_md151", null ],
          [ "Acknowledgement (ACK) Tracking", "md_modules_2reboot_2reboot__doc.html#autotoc_md152", null ],
          [ "Work Queue en Timeout Mechanisme", "md_modules_2reboot_2reboot__doc.html#autotoc_md153", null ]
        ] ],
        [ "Betrouwbaarheid", "md_modules_2reboot_2reboot__doc.html#autotoc_md154", [
          [ "Fatale Foutafhandeling", "md_modules_2reboot_2reboot__doc.html#autotoc_md155", null ],
          [ "Graceful vs. Geforceerde Shutdown", "md_modules_2reboot_2reboot__doc.html#autotoc_md156", null ]
        ] ],
        [ "Implementatie Vereisten voor Modules", "md_modules_2reboot_2reboot__doc.html#autotoc_md157", null ]
      ] ]
    ] ],
    [ "", "md_modules_2timing_2timing__doc.html", [
      [ "grand_parent: Design", "md_modules_2timing_2timing__doc.html#autotoc_md158", null ],
      [ "Timing Module", "md_modules_2timing_2timing__doc.html#autotoc_md159", [
        [ "Inhoudsopgave", "md_modules_2timing_2timing__doc.html#autotoc_md160", null ],
        [ "Overzicht", "md_modules_2timing_2timing__doc.html#autotoc_md161", null ],
        [ "Waarom een Timing Module?", "md_modules_2timing_2timing__doc.html#autotoc_md162", [
          [ "Gecoördineerde Timing", "md_modules_2timing_2timing__doc.html#autotoc_md163", null ],
          [ "Het Offset Mechanisme", "md_modules_2timing_2timing__doc.html#autotoc_md164", null ]
        ] ],
        [ "Functionaliteit en Data Flow", "md_modules_2timing_2timing__doc.html#autotoc_md165", [
          [ "ZBUS Kanalen (Publicaties)", "md_modules_2timing_2timing__doc.html#autotoc_md166", null ],
          [ "Complete Systeem Tijdlijn", "md_modules_2timing_2timing__doc.html#autotoc_md167", null ]
        ] ],
        [ "Architectuur en Gedrag", "md_modules_2timing_2timing__doc.html#autotoc_md168", [
          [ "Architectuur: Interrupt/Thread Scheiding", "md_modules_2timing_2timing__doc.html#autotoc_md169", null ],
          [ "Timer Configuratie", "md_modules_2timing_2timing__doc.html#autotoc_md170", null ],
          [ "State Machine", "md_modules_2timing_2timing__doc.html#autotoc_md171", null ],
          [ "Configuratie (Kconfig)", "md_modules_2timing_2timing__doc.html#autotoc_md172", null ]
        ] ],
        [ "Resultaten en Impact", "md_modules_2timing_2timing__doc.html#autotoc_md173", [
          [ "Geheugen en Performance", "md_modules_2timing_2timing__doc.html#autotoc_md174", null ],
          [ "Timingnauwkeurigheid", "md_modules_2timing_2timing__doc.html#autotoc_md175", null ]
        ] ],
        [ "Gerelateerde Modules", "md_modules_2timing_2timing__doc.html#autotoc_md176", null ]
      ] ]
    ] ],
    [ "Best Practices - Praktische Richtlijnen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html", [
      [ "Error Handling en Return Values", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md219", [
        [ "Error Variable Declaratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md220", null ],
        [ "Return Patterns", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md221", null ],
        [ "Return Value Conventies", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md222", null ],
        [ "Logging Bij Errors", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md223", null ],
        [ "Void vs Int Return", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md224", null ],
        [ "Assertions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md225", null ]
      ] ],
      [ "ZBUS Patterns", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md227", [
        [ "MSG_SUBSCRIBER Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md228", null ],
        [ "LISTENER Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md229", null ],
        [ "Publishing Messages", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md230", null ],
        [ "Message Processing in Thread", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md231", null ]
      ] ],
      [ "State Machine Patterns (SMF)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md233", [
        [ "State Machine Setup", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md234", null ],
        [ "State Handler Functions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md235", null ],
        [ "State Transitions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md236", null ]
      ] ],
      [ "Resource Management", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md238", [
        [ "K_NO_WAIT voor Immediate Scheduling", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md239", null ],
        [ "Mutex Usage", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md240", null ],
        [ "Work Queue Handlers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md241", null ]
      ] ],
      [ "Task Watchdog", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md243", [
        [ "Configuratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md244", null ],
        [ "Module Setup Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md245", null ],
        [ "Timing Berekening", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md246", null ],
        [ "Checklist voor Nieuwe Module", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md247", null ]
      ] ],
      [ "Hardware Interaction", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md249", [
        [ "Device Readiness Checks", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md250", null ],
        [ "GPIO Callbacks", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md251", null ],
        [ "LED Control Patterns", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md252", null ]
      ] ],
      [ "Undefined Behavior en Portability", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md254", [
        [ "Evaluatievolgorde", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md255", null ],
        [ "Type Aannames", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md256", null ],
        [ "Pointer Arithmetic", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md257", null ]
      ] ],
      [ "Common Patterns", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md259", [
        [ "Thread Loop met ZBUS + SMF", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md260", null ],
        [ "Periodic Work Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md261", null ],
        [ "Callback Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md262", null ]
      ] ],
      [ "Performance en Optimization", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md264", [
        [ "Memory Usage", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md265", null ],
        [ "Logging Levels", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md266", null ]
      ] ],
      [ "Security en Safety", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md268", [
        [ "Input Validation", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md269", null ],
        [ "Buffer Overflow Prevention", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2best-practices.html#autotoc_md270", null ]
      ] ]
    ] ],
    [ "Code Structure - Organisatie en Volgorde", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html", [
      [ "Toelichting", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md274", null ],
      [ "Include Guards en Headers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md275", [
        [ "Header Files (.h)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md276", null ],
        [ "Include Order (in .c files)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md277", null ]
      ] ],
      [ "Forward Declarations", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md279", [
        [ "Wanneer Gebruiken", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md280", null ],
        [ "State Machine Forward Declarations", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md281", null ],
        [ "Volgorde", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md282", null ]
      ] ],
      [ "Sectie Headers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md284", [
        [ "Standaard Secties (in volgorde)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md285", null ]
      ] ],
      [ "File Structuur", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md287", [
        [ "Source File (.c) Template", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md288", null ],
        [ "Header File (.h) Template", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md289", null ]
      ] ],
      [ "ZBUS Conventies", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md291", [
        [ "Channel Naming", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md292", null ],
        [ "Message Structs", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md293", null ],
        [ "Channel Declarations vs Definitions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md294", null ]
      ] ],
      [ "Module Initialisatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md296", [
        [ "SYS_INIT Gebruik", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md297", null ],
        [ "Kconfig Integratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md298", null ]
      ] ],
      [ "CMakeLists.txt voor Modules", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md300", [
        [ "Standaard Pattern (Altijd Compileren)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md301", null ],
        [ "Conditionele Compilatie Pattern", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md302", null ],
        [ "Multiple Source Files", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md303", null ],
        [ "Header Visibility", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md304", null ],
        [ "Integration in Parent CMakeLists", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md305", null ]
      ] ],
      [ "Module Checklist", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md307", [
        [ "Bestanden Structuur", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md308", null ],
        [ "Code Structuur", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md309", null ],
        [ "ZBUS Integratie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md310", null ],
        [ "Module Initialisatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md311", null ],
        [ "CMakeLists.txt", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md312", null ],
        [ "Kconfig", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md313", null ],
        [ "Task Watchdog (indien module eigen thread heeft)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md314", null ],
        [ "Testing", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md315", null ],
        [ "Documentatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md316", null ]
      ] ],
      [ "Referentie Modules", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2structure.html#autotoc_md318", null ]
    ] ],
    [ "Code Style - Formattering Regels", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html", [
      [ "Indentatie en Formattering", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md322", [
        [ "Spaties (GEEN Tabs)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md323", null ],
        [ "Lege Regels", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md324", null ],
        [ "Brace Style", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md325", null ],
        [ "Line Length", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md326", null ]
      ] ],
      [ "Naming Conventions", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md328", [
        [ "Functies", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md329", null ],
        [ "Variabelen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md330", null ],
        [ "Constanten en Defines", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md331", null ],
        [ "Macro's", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md332", null ],
        [ "Enums", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md333", null ],
        [ "Structs", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md334", null ],
        [ "Pointers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md335", null ]
      ] ],
      [ "Comments en Documentatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md337", [
        [ "Comment Style", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md338", null ],
        [ "Doxygen Documentatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md339", null ]
      ] ],
      [ "Variable Declarations", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md341", [
        [ "Initialization", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md342", null ],
        [ "Scope en Static", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md343", null ],
        [ "Arrays en Buffers", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md344", null ],
        [ "sizeof Operator", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md345", null ]
      ] ],
      [ "Magic Numbers en Constants", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md347", [
        [ "enum vs define", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md348", null ],
        [ "Gebruik Named Constants", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md349", null ],
        [ "Uitzonderingen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md350", null ]
      ] ],
      [ "NULL Checks en Validatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md352", [
        [ "Pointer Validatie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md353", null ],
        [ "Bool Checks", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md354", null ]
      ] ],
      [ "ARG_UNUSED Macro", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2style.html#autotoc_md356", null ]
    ] ],
    [ "Module Documentatie Richtlijnen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html", [
      [ "Bestandsnaam Conventie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md359", null ],
      [ "Documentatie Niveau", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md361", null ],
      [ "✅ Wat ER WEL in moet", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md363", [
        [ "1. Specificaties", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md364", null ],
        [ "2. Implementatie Design Rationale", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md365", null ],
        [ "3. Edge Cases", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md366", null ],
        [ "4. Argumentaties", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md367", null ],
        [ "5. Afwegingen (Trade-offs)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md368", null ],
        [ "6. Intended Behaviour", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md369", null ],
        [ "7. Timing Uitleg", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md370", null ],
        [ "8. Timing Diagrammen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md371", null ],
        [ "9. State Machine Transities", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md372", null ],
        [ "10. Afhankelijkheden van Andere Modules", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md373", null ],
        [ "11. ZBUS Kanalen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md374", null ]
      ] ],
      [ "❗ Wat ER NIET in moet", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md376", [
        [ "1. Code Implementatie Voorbeelden", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md377", null ],
        [ "2. Herhalingen van Blokken Code", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md378", null ],
        [ "3. Historische Referenties en Voor/Na Vergelijkingen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md379", null ]
      ] ],
      [ "4. Code Verificatie en Synchronisatie (KRITIEK! ⚠️)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md381", [
        [ "Principe: NOOIT iets verzinnen", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md382", null ],
        [ "Bij het schrijven of bewerken van documentatie:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md383", [
          [ "✅ VERPLICHTE STAPPEN:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md384", null ],
          [ "❗ VERBODEN:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md385", null ]
        ] ],
        [ "Voorbeelden van FOUTEN door niet te verifiëren:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md386", [
          [ "❗ FOUT (verzonnen content):", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md387", null ],
          [ "✅ CORRECT (geverifieerd):", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md388", null ]
        ] ],
        [ "Checklist voor elke documentatie wijziging:", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md389", null ],
        [ "Waarom is dit zo belangrijk?", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md390", null ]
      ] ],
      [ "Samenvatting", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md392", null ],
      [ "5. AI Agent Documentatie Verificatie Protocol", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md394", [
        [ "5.1 Waarom dit Protocol?", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md395", null ],
        [ "5.2 Fundamenteel Principe: Code-First Investigation", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md397", null ],
        [ "5.3 Systematische Verificatie Strategie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md399", [
          [ "Fase 1: Build Code Inventory (Objectieve Waarheid)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md400", null ],
          [ "Fase 2: Documentation Claims Extraction", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md402", null ],
          [ "Fase 3: Systematische Verificatie Per Claim Type", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md404", [
            [ "3.1 Architectuur Pattern Claims", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md405", null ],
            [ "3.2 Communication Pattern Claims", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md407", null ],
            [ "3.3 Configuration &amp; Constants Claims", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md409", null ],
            [ "3.4 Timing &amp; Behavior Claims", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md411", null ]
          ] ],
          [ "Fase 4: Documentatie Anti-Patterns (Red Flags)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md413", [
            [ "4.1 Taalgebruik Red Flags", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md414", null ],
            [ "4.2 Structurele Red Flags", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md415", null ],
            [ "4.3 Feature Consistency Red Flags", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md416", null ]
          ] ]
        ] ],
        [ "5.4 Verification Workflow (5 Fasen)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md418", null ],
        [ "5.5 Practical Tools &amp; Commands", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md420", [
          [ "Code Analysis Commands (Voorbeelden)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md421", null ],
          [ "Git History Commands (Context)", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md422", null ],
          [ "Verification Shortcuts", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md423", null ]
        ] ],
        [ "5.6 Checklist: Voor Documentatie Review Sessie", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md425", null ],
        [ "5.7 Key Insights &amp; Lessons Learned", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md427", null ],
        [ "5.8 Samenvatting Protocol", "md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md429", null ]
      ] ]
    ] ],
    [ "Doxygen Documentatie Guidelines", "doxygen_guidelines.html", [
      [ "📋 Filosofie", "doxygen_guidelines.html#autotoc_md431", null ],
      [ "📚 Documentatie Types", "doxygen_guidelines.html#autotoc_md433", null ],
      [ "🏗️ Project Layout", "doxygen_guidelines.html#autotoc_md435", null ],
      [ "⚙️ Doxyfile Configuratie", "doxygen_guidelines.html#autotoc_md437", null ],
      [ "🎨 Styling &amp; Branding", "doxygen_guidelines.html#autotoc_md439", [
        [ "Custom CSS (<span class=\"tt\">docs/doxygen-custom.css</span>)", "doxygen_guidelines.html#autotoc_md440", null ],
        [ "Header HTML (<span class=\"tt\">docs/header.html</span>)", "doxygen_guidelines.html#autotoc_md441", null ]
      ] ],
      [ "📝 Module Documentatie", "doxygen_guidelines.html#autotoc_md443", [
        [ "Structuur van <span class=\"tt\">&lt;module&gt;_doc.md</span>", "doxygen_guidelines.html#autotoc_md444", null ]
      ] ],
      [ "🔗 Cross-Referencing", "doxygen_guidelines.html#autotoc_md446", [
        [ "Module Groepen Definiëren", "doxygen_guidelines.html#autotoc_md447", null ]
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
"group__cloud.html#ga00573f79980182dd9b2ad1b0b13febdd",
"md__2home_2ruben_2Documents_2solarresult_2firmware_2fw-energy-core_2guidelines_2documentation.html#autotoc_md423",
"p__one_8c.html#a0e069e17511aca163f32accb3c5f625c",
"structobis__code__entry__t.html#a0d87bc1e845473fd361078856a72eba5"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';