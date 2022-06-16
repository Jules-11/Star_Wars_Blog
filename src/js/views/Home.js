import React, { useContext } from "react";
import { CardCharacter } from "../component/CardCharacter";
import { CardPlanet } from "../component/CardPlanet";
import { CardVehicle } from "../component/CardVehicle";
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);

  const textColor = {
    color: "#b11226",
  };

  const scroll = {
    width: "100%",
    height: "fit-content",
    // flexWrap: "nowrap",
    overflowX: "scroll",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  };

  return (
    <div className="container mt-3 pb-5" style={{}}>
      <h1 style={textColor}>Characters</h1>
      <div className="scrollmenu" style={scroll}>
        {store.characters.map((character) => (
          <CardCharacter key={character.uid} character={character} />
        ))}
      </div>

      <h1 style={textColor}>Planets</h1>
      <div className="scrollmenu" style={scroll}>
        {store.planets.map((planet) => (
          <CardPlanet key={planet.uid} planet={planet} />
        ))}
      </div>

      <h1 style={textColor}>Vehicles</h1>
      <div className="scrollmenu" style={scroll}>
        {store.vehicles.map((vehicle) => (
          <CardVehicle key={vehicle.uid} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Home;

// overflowX: "auto", overflowY: "hidden", white-space: "nowrap"
// display:"flex", overflowX: "auto"
