import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { PlanetDetails } from "../component/PlanetDetails";

const Planets = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(() => {
		console.log(store.planetInfo.length);
		if (store.planetInfo.length == 0) {
		  actions.getPlanetInfo(params.id);
		}
		console.log("Hello World", store.characterInfo.properties);
		// setInfo(store.characterInfo.properties)
	  }, [params?.id]); // mount of the component only
	
	  return (
		<div>
		  <PlanetDetails {...store?.planetInfo?.properties} id={params.id} />
		</div>
	  );
	};
	
	export default Planets;