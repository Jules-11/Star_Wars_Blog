import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPlanet = (props) => {
  const { store, actions } = useContext(Context);

  const imgContainer = {
    width: "250px",
    height: "250px",
    overflow: "hidden",
    poistion: "relative",
  }
	
  const statusFav = store.favorites.find((data) => {
    return data.id === props.planet.uid && data.type === "planets";
  })
  
  const favoriteHandler = () => {
    if(statusFav === undefined){
      actions.addToFavorite({name: props.planet.name, id: props.planet.uid, type: "planets"})
    } else{
      actions.removeFromFavorite({name: props.planet.name, id: props.planet.uid, type: "planets"})
    }
}
let heartFav = <i className="bi bi-heart"></i>;
  if(statusFav != undefined){
    heartFav =  <i className="bi bi-heart-fill"></i>
  }

  let planetImg = `https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`;
  if (props.planet.uid === "1") {
   planetImg = `https://starwars-visualguide.com/assets/img/placeholder.jpg`
  }
  
  
  return (
		<div className="" style={{ margin:"10px" }}>
      <div style={imgContainer}>
  <img src={planetImg} className="card-img-top" alt="..." />
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.planet.name}</h5>
    <div className="" style={{display:"flex"}}>
    <a href={"/planets/" + props.planet.uid} className="btn btn-outline-dark m-1">Learn more!</a>
    <button className="btn btn-outline-warning m-1" style={{boxShadow:"none"}} onClick={favoriteHandler}>{heartFav}</button>
    </div>
  </div>
</div>
		
	);

};