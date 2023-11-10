import React from "react";
import SimpleSearch from "../components/SimpleSearch";
import CarrousselSearch from "../components/CarrousselSearch";
import GenericList from "../components/GenericList";

function Home() {
    return (
    <>
        <div className="welcome">
            <SimpleSearch />
            {/*<CarrousselSearch />
        <GenericList />*/}
        </div>
    </>
    );
}

export default Home;