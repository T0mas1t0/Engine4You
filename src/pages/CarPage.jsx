
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CarSpecsTabs from '../components/CarPage/CarSpecsTabs';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Cars } from '../mockData/mockData';
import List_OtherCars from '../components/List_OtherCars';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useParams } from 'react-router-dom';
import SimpleSnackbar from "../components/SimpleSnackbar";
import WebgiViewer from "../components/Car3D/WebgiViewer";

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
};


function CarPage() {

    const { id } = useParams();
    const [car, setCar] = useState(Cars[id]);

    const [img2d, setImg2d] = useState(true);

    const [open, setOpen] = useState(false);
    const [txt, setText] = useState("");
    const [severityType, setSeverityType] = useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    function get3D() {
        setImg2d(false);
    }

    function get2D() {
        setImg2d(true);
    }

    // State para armazenar os carros sugeridos
    const [suggestedCars, setSuggestedCars] = useState([]);

    // Função para filtrar os carros sugeridos com base no carro selecionado
    function filterSuggestedCars() {

        const filteredCars = Cars.filter((otherCar) => otherCar.brand !== car.brand);

        // Seleciona aleatoriamente 5 carros da lista filtrada
        const randomCars = filteredCars
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);

        setSuggestedCars(randomCars);
    }

    useEffect(() => {
        setImg2d(true);
        console.log("ID: " + id);
        setCar(Cars[id]);
        console.log(car);
        // Rolando para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // opcional: animação suave de rolagem
        });
        filterSuggestedCars();

    }, [car, id]);


    function addToCompare(carToAdd) {
        console.log("addToCompare");
        console.log(carToAdd);
        var list = localStorage.getItem("compareList");
        if (list == null) {
            console.log(carToAdd);
            localStorage.setItem("compareList", JSON.stringify([carToAdd]));
        }
        else {
            var oldlist = JSON.parse(localStorage.getItem("compareList"));

            if (oldlist.length >= 4) {
                setText("A lista encontra-se cheia! (max.: 4 carros) ");
                setOpen(true);
                setSeverityType("error");
            }
            else {
                if (verifyList(oldlist, carToAdd.id)) {
                    setText("Adicionado à Lista de comparação com Sucesso!");
                    setOpen(true);
                    setSeverityType("success");
                    oldlist.push(carToAdd);
                    localStorage.setItem("compareList", JSON.stringify(oldlist));
                }
                else {
                    setText("Carro já se encontra na lista!");
                    setOpen(true);
                    setSeverityType("error");
                }
            }

        }

    }

    function verifyList(oldlist, id) {
        for (var i = 0; i < oldlist.length; i++) {
            if (oldlist[i].id == id) {
                return false;
            }
        }

        return true;
    }


    return (
        <>

            <div>
                <center>
                    <h1>{car.brand} {car.model} ({car.price} €)</h1>
                </center>
                <ButtonGroup id="buttonGroup" variant="outlined" aria-label="outlined button group">
                    <Button onClick={get2D} variant={img2d == true ? "contained" : "outlined"}>2D</Button>
                    <Button onClick={get3D} variant={img2d == false ? "contained" : "outlined"}>3D</Button>
                </ButtonGroup>

                <Box sx={{ flexGrow: 1, marginTop: 10 }}>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={6} lg={6}>
                            {
                                img2d == true ?
                                    <center>
                                        <img id="carPhoto" src={car.photo} />
                                    </center>
                                    :
                                    <div style={{ marginLeft: '5vh', alignItems: 'center' }}>
                                        3D under construction...
                                        {/*<WebgiViewer />*/}

                                    </div>

                            }

                        </Grid>
                        <Grid xs={12} md={6} lg={6}>
                            <CarSpecsTabs car={car} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center" sx={{ marginTop: "15vh" }}>
                        <Grid xs={12} align="center">
                            <KeyboardDoubleArrowDownIcon />
                            <h5>Other Cars</h5>
                        </Grid>
                        <Grid xs={12} align="center">
                            <List_OtherCars data={suggestedCars} title="Similar Cars" addToCompare={addToCompare} />
                        </Grid>

                    </Grid>
                </Box>
            </div>

            <Fab sx={fabStyle} variant="extended" onClick={() => addToCompare(car)}>
                <AddIcon sx={{ mr: 1 }} />
                Add to compare
            </Fab>
            <SimpleSnackbar text={txt} handleClose={handleClose} open={open} severityType={severityType} />
        </>
    );
}

export default CarPage;
