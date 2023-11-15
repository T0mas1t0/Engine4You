export const Cars = [{
    id:"0",
    photo:"TeslaModel3_LR.png",
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
    photo:"VOLVO_EX30.png",
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
}
]

