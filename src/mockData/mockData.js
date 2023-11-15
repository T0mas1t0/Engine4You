import photoTeslaModel3LR from '../assets/TeslaModel3_LR.png';
import photoVolvoX30 from '../assets/VOLVO_EX30.png';
import photoGolfGTI from '../assets/GOLF_2.0_245_GTI.jpg';

export const Cars = [{
    id:"0",
    photo:photoTeslaModel3LR,
    model:"Tesla Model 3 LR",
    price:"48.600",
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
    model:"VOLVO EX30",
    price:"37.800",
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
    model: "GOLF 2.0 245 GTI",
    price: "35,000",
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
            description: "Not Applicable"
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
}

]

