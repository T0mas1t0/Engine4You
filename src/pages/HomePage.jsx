import React from "react";
import Nav from "../components/Nav";
import SimpleSearch from "../components/SimpleSearch";
import CarrousselSearch from "../components/CarrousselSearch";
import GenericList from "../components/GenericList";

function Home() {
    return (<>
        <Nav />
        <div className="welcome">

            <SimpleSearch />
            {/*<CarrousselSearch />
        <GenericList />*/}
        </div>
    </>
    );
}

export default Home;