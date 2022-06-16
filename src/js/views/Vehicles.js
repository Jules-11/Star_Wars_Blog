import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { VehicleDetails } from "../component/VehicleDetails";

const Vehicles = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(() => {
		console.log(store.vehicleInfo.length);
		if (store.vehicleInfo.length == 0) {
		  actions.getVehicleInfo(params.id);
		}
		console.log("Hello World", store.vehicleInfo.properties);
		// setInfo(store.characterInfo.properties)
	  }, [params?.id]); // mount of the component only
	
	  return (
		<div>
		  <VehicleDetails {...store?.vehicleInfo?.properties} id={params.id}/>
		</div>
	  );
	};
	
	export default Vehicles;