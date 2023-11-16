import photoTeslaModel3LR from '../assets/TeslaModel3_LR.png';
import photoVolvoX30 from '../assets/VOLVO_EX30.png';
import photoGolfGTI from '../assets/GOLF_2.0_245_GTI.jpg';
import photoToyotaCamryHybrid from '../assets/Camry-Hybrid-Ventura-Toyota.jpg';
import photoBMW118I from '../assets/BMW_118I_M.jpg';
import photoMercedeClassA from '../assets/Mercedes_A_CLASS_AMG_2.jpg';
import TeslaModelY from '../assets/TeslaModelY_LR.png';
import photoBMWi3 from '../assets/bmw-i3.png'

export const Cars = [{
    id:"0",
    brand:"Tesla",
    photo:photoTeslaModel3LR,
    model:"Model 3 Long Range",
    price:48600,
    motorInfo:{
        motor:{
            title:"Motor",
            description:"Electric"
        },
        gearBox:{
            title:"Gear Box",
            description:"1-Speed Auto"
        },
        traccion:{
            title:"Traccion",
            description:"AWD"
        },
        Range:{
            title:"Range",
            description:"629 km"
        },
        Consumption:{title:"Consumption",description:"14,6 kW/h"},
        CO2emissions:{title:"CO2emissions",description:"0 g/km"},
        aceleration:{title:"aceleration",description:"4,4s"},
        Power:{title:"Power",description:"366 kW"},
        TopSpeed:{title:"Top speed",description:"201 km/h"},
    },
    equipment:{
        InfotainmentSystem:{
            name:"Infotainment System",
            list:["Front Display 15,4","Rear Display 8''","Google Maps","Netflix, Disney Plus, ...","Spotify"]
        },
        SoundSystem:{
            name:"Sound System",
            list:["Premium Sound","17 speakers"]
        },
        DrivingSupportSystem:{
            name:"Driving support system",
            list:["Full Self-Driving"]
        },
        PassengerCompartment:{
            name:"Passenger compartment",
            list:["Heated and Ventilated seats","Wireless charging","5 usb-C (65W)"]
        },
    },
    dimensions:{
        MirrorsFolded:{title:"Width (Mirrors Folded)",description:"1933 mm"},
        ExtendedMirrors: {title:"Width (Extended Mirrors)",description:"2089 mm"},
        TotalLength:{title:"Total Length",description:"4720mm"},
        TotalHeight:{title:"Total Height",description:"1441mm"},
        GroundClearance:{title:"GroundClearance",description:"138mm"},
        Seats:{title:"Seats",description:"5 seats"},
        Load:{title:"Load",description:"682 liters"},
        Weight:{title:"Weight",description:"1838 kg"},
    },
    
    charging:{
        active:true,
        elements:{
            MaxChargingPower:{
                name:"Max Charging Power",
                data:"250kW"
            },
            ChargingSpeed:{
                name:"Charging Speed",
                data:"Up to 282 km in 15 minutes"
            },
            TypeOfPayment:{
                name:"Type Of Payment",
                data:"Pay as you use"
            },
        }

    },
    warranty:{
        VehicleBasics:{
            title:"Vehicle basics",
            description:"4 years or 80,000 km, whichever comes first",
        },
        BatteryAndDriveUnit:{
            title:"Battery and drive unit",
            description:"8 years or 192,000 km, whichever comes first",
        }
        

    }
},
{
    id:"1",
    photo:photoVolvoX30,
    brand:"Volvo",
    model:"EX30",
    price:37800,
    motorInfo:{
        motor:{
            title:"Motor",
            description:"Electric"
        },
        gearBox:{
            title:"Gear Box",
            description:"1-Speed Auto"
        },
        traccion:{
            title:"Traccion",
            description:"RWD"
        },
        Range:{
            title:"Range",
            description:"340 km"
        },
        Consumption:{title:"Consumption",description:"16,4 kW/h"},
        CO2emissions:{title:"CO2emissions",description:"0 g/km"},
        aceleration:{title:"aceleration",description:"5,6s"},
        Power:{title:"Power",description:"201 kW"},
        TopSpeed:{title:"Top speed",description:"180 km/h"},
    },
    equipment:{
        InfotainmentSystem:{
            name:"Infotainment System",
            list:["Front Display 14''","Google Maps","Spotify"]
        },
        SoundSystem:{
            name:"Sound System",
            list:["Premium Sound","10 JBL speakers"]
        },
        DrivingSupportSystem:{
            name:"Driving support system",
            list:["Parking ASSIST","360º camera","Pilot ASSIST","Adaptative cruise control"]
        },
        PassengerCompartment:{
            name:"Passenger compartment",
            list:["Heated seats","Wireless charging","4 usb-C"]
        },
    },
    dimensions:{
        MirrorsFolded:{title:"Width (Mirrors Folded)",description:"1933 mm"},
        ExtendedMirrors: {title:"Width (Extended Mirrors)",description:"2089 mm"},
        TotalLength:{title:"Total Length",description:"4220mm"},
        TotalHeight:{title:"Total Height",description:"1941mm"},
        GroundClearance:{title:"GroundClearance",description:"138mm"},
        Seats:{title:"Seats",description:"5 seats"},
        Load:{title:"Load",description:"318 liters"},
        Weight:{title:"Weight",description:"1830 kg"},
    },
    charging:{
        active:true,
        elements:{
            MaxChargingPower:{
                name:"Max Charging Power",
                data:"150kW"
            },
            ChargingSpeed:{
                name:"Charging Speed",
                data:"0 to 80% in 30 minutes"
            },
            TypeOfPayment:{
                name:"Type Of Payment",
                data:"Pay as you use"
            },
        }

    },
    warranty:{
        VehicleBasics:{
            title:"Vehicle basics",
            description:"4 years or 80,000 km, whichever comes first",
        },
        BatteryAndDriveUnit:{
            title:"Battery and drive unit",
            description:"8 years or 192,000 km, whichever comes first",
        }
        

    }
},
{
    id: "2",
    photo: photoGolfGTI,
    brand:"Volkswagen",
    model: "GOLF 2.0 245 GTI",
    price: 35000,
    motorInfo: {
        motor: {
            title: "Motor",
            description: "Gasoline"
        },
        gearBox: {
            title: "Gear Box",
            description: "6-Speed Manual"
        },
        traccion: {
            title: "Traccion",
            description: "FWD"
        },
        Range: {
            title: "Range",
            description: "769 km"
        },
        Consumption: { title: "Consumption", description: "10.5 L/100km" },
        CO2emissions: { title: "CO2emissions", description: "150 g/km" },
        aceleration: { title: "aceleration", description: "6.2s" },
        Power: { title: "Power", description: "245 kW" },
        TopSpeed: { title: "Top speed", description: "250 km/h" },
    },
    equipment: {
        InfotainmentSystem: {
            name: "Infotainment System",
            list: ["Touchscreen Display", "Apple CarPlay", "Android Auto", "Bluetooth"]
        },
        SoundSystem: {
            name: "Sound System",
            list: ["Premium Sound", "12 speakers"]
        },
        DrivingSupportSystem: {
            name: "Driving support system",
            list: ["Lane-Keeping Assist", "Adaptive Cruise Control", "Emergency Braking"]
        },
        PassengerCompartment: {
            name: "Passenger compartment",
            list: ["Heated seats", "Wireless charging", "USB ports"]
        },
    },
    dimensions: {
        MirrorsFolded: { title: "Width (Mirrors Folded)", description: "1759 mm" },
        ExtendedMirrors: { title: "Width (Extended Mirrors)", description: "2027 mm" },
        TotalLength: { title: "Total Length", description: "4268 mm" },
        TotalHeight: { title: "Total Height", description: "1436 mm" },
        GroundClearance: { title: "Ground Clearance", description: "140 mm" },
        Seats: { title: "Seats", description: "5 seats" },
        Load: { title: "Load", description: "380 liters" },
        Weight: { title: "Weight", description: "1400 kg" },
    },
    charging: {
        active: false, // Not applicable for gasoline cars
        elements: {}
    },
    warranty: {
        VehicleBasics: {
            title: "Vehicle basics",
            description: "3 years or 60,000 km, whichever comes first",
        },
        BatteryAndDriveUnit: {
            title: "Battery and drive unit",
            description: "Not Applicable",
        }
    }
},
{
    id: "3",
    photo: photoToyotaCamryHybrid,
    brand:"Toyota",
    model: "Camry Hybrid XLE",
    price: 38000,
    motorInfo: {
      motor: { title: "Motor", description: "Hybrid" },
      gearBox: { title: "Gear Box", description: "Continuously Variable Transmission (CVT)" },
      traccion: { title: "Traccion", description: "FWD" },
      Range: { title: "Range", description: "965 km" },
      Consumption: { title: "Consumption", description: "5.5 L/100km" },
      CO2emissions: { title: "CO2emissions", description: "100 g/km" },
      aceleration: { title: "aceleration", description: "7.8s" },
      Power: { title: "Power", description: "178 kW" },
      TopSpeed: { title: "Top speed", description: "125 mph" },
    },
    equipment: {
      InfotainmentSystem: {
        name: "Infotainment System",
        list: ["Touchscreen Display", "Apple CarPlay", "Android Auto", "Bluetooth"],
      },
      SoundSystem: { name: "Sound System", list: ["Premium Sound", "10 speakers"] },
      DrivingSupportSystem: {
        name: "Driving support system",
        list: ["Lane-Keeping Assist", "Adaptive Cruise Control", "Emergency Braking"],
      },
      PassengerCompartment: {
        name: "Passenger compartment",
        list: ["Heated seats", "Wireless charging", "USB ports"],
      },
    },
    dimensions: {
      MirrorsFolded: { title: "Width (Mirrors Folded)", description: "1839 mm" },
      ExtendedMirrors: { title: "Width (Extended Mirrors)", description: "2027 mm" },
      TotalLength: { title: "Total Length", description: "4905 mm" },
      TotalHeight: { title: "Total Height", description: "1445 mm" },
      GroundClearance: { title: "Ground Clearance", description: "150 mm" },
      Seats: { title: "Seats", description: "5 seats" },
      Load: { title: "Load", description: "450 liters" },
      Weight: { title: "Weight", description: "1600 kg" },
    },
    charging: { active: false, elements: {} },
    warranty: {
      VehicleBasics: { title: "Vehicle basics", description: "3 years or 60,000 km, whichever comes first" },
      BatteryAndDriveUnit: { title: "Battery and drive unit", description: "Not Applicable" },
    },
  },
  {
    id: "4",
    photo: photoBMW118I,
    brand:"BMW",
    model: "1 Series 118i M Sport",
    price: 38500,
    motorInfo: {
      motor: { title: "Motor", description: "Petrol" },
      gearBox: { title: "Gear Box", description: "8-Speed Automatic" },
      traccion: { title: "Traccion", description: "RWD" },
      Range: { title: "Range", description: "804 km" },
      Consumption: { title: "Consumption", description: "7.2 L/100km" },
      CO2emissions: { title: "CO2emissions", description: "120 g/km" },
      aceleration: { title: "aceleration", description: "6.5s" },
      Power: { title: "Power", description: "150 kW" },
      TopSpeed: { title: "Top speed", description: "140 mph" },
    },
    equipment: {
      InfotainmentSystem: {
        name: "Infotainment System",
        list: ["Touchscreen Display", "Apple CarPlay", "Android Auto", "Bluetooth"],
      },
      SoundSystem: { name: "Sound System", list: ["Harman Kardon", "12 speakers"] },
      DrivingSupportSystem: {
        name: "Driving support system",
        list: ["Lane-Departure Warning", "Forward Collision Warning", "Automatic Emergency Braking"],
      },
      PassengerCompartment: {
        name: "Passenger compartment",
        list: ["Heated seats", "Wireless charging", "USB ports"],
      },
    },
    dimensions: {
      MirrorsFolded: { title: "Width (Mirrors Folded)", description: "1774 mm" },
      ExtendedMirrors: { title: "Width (Extended Mirrors)", description: "2027 mm" },
      TotalLength: { title: "Total Length", description: "4319 mm" },
      TotalHeight: { title: "Total Height", description: "1420 mm" },
      GroundClearance: { title: "Ground Clearance", description: "130 mm" },
      Seats: { title: "Seats", description: "5 seats" },
      Load: { title: "Load", description: "380 liters" },
      Weight: { title: "Weight", description: "1450 kg" },
    },
    charging: { active: false, elements: {} },
    warranty: {
      VehicleBasics: { title: "Vehicle basics", description: "4 years or 80,000 km, whichever comes first" },
      BatteryAndDriveUnit: { title: "Battery and drive unit", description: "Not Applicable" },
    },
  },
  {
    id: "5",
    photo: photoMercedeClassA,
    brand:"Mercedes",
    model: "A-Class A250 AMG Line",
    price: 42000,
    motorInfo: {
      motor: { title: "Motor", description: "Petrol" },
      gearBox: { title: "Gear Box", description: "7-Speed Dual-Clutch Automatic" },
      traccion: { title: "Traccion", description: "AWD" },
      Range: { title: "Range", description: "724 km" },
      Consumption: { title: "Consumption", description: "6.8 L/100km" },
      CO2emissions: { title: "CO2emissions", description: "110 g/km" },
      aceleration: { title: "aceleration", description: "5.8s" },
      Power: { title: "Power", description: "200 kW" },
      TopSpeed: { title: "Top speed", description: "155 mph" },
    },
    equipment: {
      InfotainmentSystem: {
        name: "Infotainment System",
        list: ["MBUX Infotainment System", "Apple CarPlay", "Android Auto", "Bluetooth"],
      },
      SoundSystem: { name: "Sound System", list: ["Burmester Surround Sound", "13 speakers"] },
      DrivingSupportSystem: {
        name: "Driving support system",
        list: ["Active Lane-Keeping Assist", "Adaptive Cruise Control", "Traffic Sign Assist"],
      },
      PassengerCompartment: {
        name: "Passenger compartment",
        list: ["Heated front seats", "Wireless charging", "USB ports"],
      },
    },
    dimensions: {
      MirrorsFolded: { title: "Width (Mirrors Folded)", description: "1992 mm" },
      ExtendedMirrors: { title: "Width (Extended Mirrors)", description: "2027 mm" },
      TotalLength: { title: "Total Length", description: "4419 mm" },
      TotalHeight: { title: "Total Height", description: "1440 mm" },
      GroundClearance: { title: "Ground Clearance", description: "120 mm" },
      Seats: { title: "Seats", description: "5 seats" },
      Load: { title: "Load", description: "370 liters" },
      Weight: { title: "Weight", description: "1550 kg" },
    },
    charging: { active: false, elements: {} },
    warranty: {
      VehicleBasics: { title: "Vehicle basics", description: "3 years or 60,000 km, whichever comes first" },
      BatteryAndDriveUnit: { title: "Battery and drive unit", description: "Not Applicable" },
    },
  },
  {
    id:"6",
    brand:"Tesla",
    photo:TeslaModelY,
    model:"Model Y",
    price:45490,
    motorInfo:{
        motor:{
            title:"Motor",
            description:"Electric"
        },
        gearBox:{
            title:"Gear Box",
            description:"1-Speed Auto"
        },
        traccion:{
            title:"Traccion",
            description:"RWD"
        },
        Range:{
            title:"Range",
            description:"455 km"
        },
        Consumption:{title:"Consumption",description:"15,7 kW/h"},
        CO2emissions:{title:"CO2emissions",description:"0 g/km"},
        aceleration:{title:"aceleration",description:"6,9s"},
        Power:{title:"Power",description:"220 kW"},
        TopSpeed:{title:"Top speed",description:"217 km/h"},
    },
    equipment:{
        InfotainmentSystem:{
            name:"Infotainment System",
            list:["Front Display 15,4","Rear Display 8''","Google Maps","Netflix, Disney Plus, ...","Spotify"]
        },
        SoundSystem:{
            name:"Sound System",
            list:["Premium Sound","17 speakers"]
        },
        DrivingSupportSystem:{
            name:"Driving support system",
            list:["Full Self-Driving"]
        },
        PassengerCompartment:{
            name:"Passenger compartment",
            list:["Heated and Ventilated seats","Wireless charging","5 usb-C (65W)"]
        },
    },
    dimensions:{
        MirrorsFolded:{title:"Width (Mirrors Folded)",description:"2010 mm"},
        ExtendedMirrors: {title:"Width (Extended Mirrors)",description:"2130 mm"},
        TotalLength:{title:"Total Length",description:"4720mm"},
        TotalHeight:{title:"Total Height",description:"1441mm"},
        GroundClearance:{title:"GroundClearance",description:"138mm"},
        Seats:{title:"Seats",description:"5 seats"},
        Load:{title:"Load",description:"2158 liters"},
        Weight:{title:"Weight",description:"1909 kg"},
    },
    
    charging:{
        active:true,
        elements:{
            MaxChargingPower:{
                name:"Max Charging Power",
                data:"170kW"
            },
            ChargingSpeed:{
                name:"Charging Speed",
                data:"Up to 282 km in 15 minutes"
            },
            TypeOfPayment:{
                name:"Type Of Payment",
                data:"Pay as you use"
            },
        }

    },
    warranty:{
        VehicleBasics:{
            title:"Vehicle basics",
            description:"4 years or 80,000 km, whichever comes first",
        },
        BatteryAndDriveUnit:{
            title:"Battery and drive unit",
            description:"8 years or 192,000 km, whichever comes first",
        }
        

    }
},
{
    id:"7",
    brand:"Tesla",
    photo:TeslaModelY,
    model:"Model Y Longe Range",
    price:54490,
    motorInfo:{
        motor:{
            title:"Motor",
            description:"Electric"
        },
        gearBox:{
            title:"Gear Box",
            description:"1-Speed Auto"
        },
        traccion:{
            title:"Traccion",
            description:"AWD"
        },
        Range:{
            title:"Range",
            description:"533 km"
        },
        Consumption:{title:"Consumption",description:"16,9 kW/h"},
        CO2emissions:{title:"CO2emissions",description:"0 g/km"},
        aceleration:{title:"aceleration",description:"5,0s"},
        Power:{title:"Power",description:"378 kW"},
        TopSpeed:{title:"Top speed",description:"217 km/h"},
    },
    equipment:{
        InfotainmentSystem:{
            name:"Infotainment System",
            list:["Front Display 15,4","Rear Display 8''","Google Maps","Netflix, Disney Plus, ...","Spotify"]
        },
        SoundSystem:{
            name:"Sound System",
            list:["Premium Sound","17 speakers"]
        },
        DrivingSupportSystem:{
            name:"Driving support system",
            list:["Full Self-Driving"]
        },
        PassengerCompartment:{
            name:"Passenger compartment",
            list:["Heated and Ventilated seats","Wireless charging","5 usb-C (65W)"]
        },
    },
    dimensions:{
        MirrorsFolded:{title:"Width (Mirrors Folded)",description:"2010 mm"},
        ExtendedMirrors: {title:"Width (Extended Mirrors)",description:"2130 mm"},
        TotalLength:{title:"Total Length",description:"4720mm"},
        TotalHeight:{title:"Total Height",description:"1441mm"},
        GroundClearance:{title:"GroundClearance",description:"138mm"},
        Seats:{title:"Seats",description:"5 seats"},
        Load:{title:"Load",description:"2158 liters"},
        Weight:{title:"Weight",description:"2056 kg"},
    },
    
    charging:{
        active:true,
        elements:{
            MaxChargingPower:{
                name:"Max Charging Power",
                data:"250kW"
            },
            ChargingSpeed:{
                name:"Charging Speed",
                data:"Up to 282 km in 15 minutes"
            },
            TypeOfPayment:{
                name:"Type Of Payment",
                data:"Pay as you use"
            },
        }

    },
    warranty:{
        VehicleBasics:{
            title:"Vehicle basics",
            description:"4 years or 80,000 km, whichever comes first",
        },
        BatteryAndDriveUnit:{
            title:"Battery and drive unit",
            description:"8 years or 192,000 km, whichever comes first",
        }
        

    }
},
{
    id: "3",
    photo: photoBMWi3,
    brand: "BMW",
    model: "i3",
    price: 44900,
    motorInfo: {
        motor: {
            title: "Motor",
            description: "Electric"
        },
        gearBox: {
            title: "Gear Box",
            description: "Single-Speed Auto"
        },
        traccion: {
            title: "Traccion",
            description: "RWD"
        },
        Range: {
            title: "Range",
            description: "153 miles"
        },
        Consumption: { title: "Consumption", description: "18.8 kW/h" },
        CO2emissions: { title: "CO2emissions", description: "0 g/km" },
        aceleration: { title: "Acceleration", description: "7.2s" },
        Power: { title: "Power", description: "170 kW" },
        TopSpeed: { title: "Top speed", description: "93 mph" },
    },
    equipment: {
        InfotainmentSystem: {
            name: "Infotainment System",
            list: ["Navigation Professional", "Apple CarPlay", "Harman Kardon Sound System"]
        },
        SoundSystem: {
            name: "Sound System",
            list: ["Harman Kardon Premium Sound", "12 speakers"]
        },
        DrivingSupportSystem: {
            name: "Driving support system",
            list: ["Parking Assistant", "Lane Departure Warning", "Collision Warning"]
        },
        PassengerCompartment: {
            name: "Passenger compartment",
            list: ["Heated Seats", "Wireless Charging", "USB Ports"]
        },
    },
    dimensions: {
        MirrorsFolded: { title: "Width (Mirrors Folded)", description: "1775 mm" },
        ExtendedMirrors: { title: "Width (Extended Mirrors)", description: "2039 mm" },
        TotalLength: { title: "Total Length", description: "3999 mm" },
        TotalHeight: { title: "Total Height", description: "1578 mm" },
        GroundClearance: { title: "Ground Clearance", description: "140 mm" },
        Seats: { title: "Seats", description: "4 seats" },
        Load: { title: "Load", description: "260 liters" },
        Weight: { title: "Weight", description: "1315 kg" },
    },
    charging: {
        active: true,
        elements: {
            MaxChargingPower: {
                name: "Max Charging Power",
                data: "50 kW"
            },
            ChargingSpeed: {
                name: "Charging Speed",
                data: "0 to 80% in 45 minutes"
            },
            TypeOfPayment: {
                name: "Type Of Payment",
                data: "ChargePoint Network"
            },
        }
    },
    warranty: {
        VehicleBasics: {
            title: "Vehicle basics",
            description: "3 years or 36,000 miles, whichever comes first",
        },
        BatteryAndDriveUnit: {
            title: "Battery and drive unit",
            description: "8 years or 100,000 miles, whichever comes first",
        }
    }
}

]

