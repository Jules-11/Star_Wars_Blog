import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";


export const CardCharacter = (props) => {
  const { store, actions } = useContext(Context);

  const imgContainer = {
    width: "250px",
    height: "350px",
    overflow: "hidden",
    poistion: "relative",
  }
  

  const statusFav = store.favorites.find((data) => {
    return data.id === props.character.uid && data.type === "characters";
  })
 

  const favoriteHandler = () => {
      if(statusFav === undefined){
        actions.addToFavorite({name: props.character.name, id: props.character.uid, type: "characters"})
      } else{
        actions.removeFromFavorite({name: props.character.name, id: props.character.uid, type: "characters"})
      }
  }
  let heartFav = <i className="bi bi-heart"></i>;
  if(statusFav != undefined){
    heartFav =  <i className="bi bi-heart-fill"></i>
  }


	return (
		<div className="" style={{ margin:"10px" }}>
    <div style={imgContainer}>
  <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`} className="card-img-top" alt="..." />
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.character.name}</h5>
    <div className="" style={{display:"flex"}}>
    <a href={"/characters/" + props.character.uid} className="btn btn-outline-dark m-1">Learn more!</a>
    <button className="btn btn-outline-warning m-1" style={{boxShadow:"none"}} onClick={favoriteHandler}>{heartFav}</button>
    </div>
  </div>
</div>
		
	);

};


 