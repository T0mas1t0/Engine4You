import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CarSpecsTabs from '../../components/CarSpecsTabs';
import carPhoto from '../../assets/TeslaModel3_LR.png';
import { Carpenter } from "@mui/icons-material";

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Car = {
    photo:"TeslaModel3_LR.png",
    model:"Tesla Model 3 LR",
    price:"48.600",
    motorInfo:{
        motor:{
            title:"Motor",
            description:"Eletric"
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
        OverallWidth:{
            MirrorsFolded:"1933 mm",
            ExtendedMirrors: "2089 mm",
        },
        TotalLength:"4720mm",
        TotalHeight:"1441mm",
        GroundClearance:"138mm",
        Seats:"5 seats",
        Load:"682 liters",
        Weight:"1828 kg",
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
}

function CarPage() {

    return (
        <>

        <div>
            <center>
                <h1>{Car.model} ({Car.price})</h1>
            </center>

            <Box sx={{ flexGrow: 1, marginTop: 10 }}>
                <Grid container spacing={2}>
                <Grid xs={10} md={6}>
                    <center>
                        <img src={carPhoto} width={"80%"}/>
                    </center>
        
                </Grid>
                <Grid xs={10} md={5}>
                    <CarSpecsTabs info={Car}/>
                </Grid>
                </Grid>
            </Box>
        </div>

        </>
  );
}

export default CarPage;