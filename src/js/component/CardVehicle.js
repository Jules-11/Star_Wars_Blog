import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardVehicle = (props) => {
  const { store, actions } = useContext(Context);

  const imgContainer = {
    width: "250px",
    height: "200px",
    overflow: "hidden",
    poistion: "relative",
  }
  
  
  const statusFav = store.favorites.find((data) => {
    return data.id === props.vehicle.uid && data.type === "vehicles";
  })

  const favoriteHandler = () => {
    if(statusFav === undefined){
      actions.addToFavorite({name: props.vehicle.name, id: props.vehicle.uid, type: "vehicles"})
    } else{
      actions.removeFromFavorite({name: props.vehicle.name, id: props.vehicle.uid, type: "vehicles"})
    }
}

let heartFav = <i className="bi bi-heart"></i>;
  if(statusFav != undefined){
    heartFav =  <i className="bi bi-heart-fill"></i>
  }



	return (
		<div className="" style={{ margin:"10px" }}>
      <div style={imgContainer}>
  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicle.uid}.jpg`} className="card-img-top" alt="..."/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.vehicle.name}</h5>
    <div className="" style={{display:"flex"}}>
    <a href={"/vehicles/" + props.vehicle.uid} className="btn btn-outline-dark m-1">Learn more!</a>
    <button className="btn btn-outline-warning m-1" style={{boxShadow:"none"}} onClick={favoriteHandler}>{heartFav}</button> 
    </div>
  </div>
</div>
		
	);

};