import React, {useState, useEffect, useContext} from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const SearchBar = (props) => {
  const { store, actions } = useContext(Context);
  let history = useHistory()

  const itemsCharacter = store.characters.map((element)=> {
    element.type = "characters"
    return element;
  })
  console.log("Hello World", itemsCharacter)

  const itemsPlanet = store.planets.map((element)=> {
    element.type = "planets"
    return element;
  })
  console.log("Hello World", itemsPlanet)

  const itemsVehicle = store.vehicles.map((element)=> {
    element.type = "vehicles"
    return element;
  })
  console.log("Hello World", itemsVehicle)


  const items = [...itemsCharacter, ...itemsPlanet, ...itemsVehicle]

  items.map((item, i) => {
    item.id = i;
    return item
  })

  console.log("SearchBar", items)

  

      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        history.push(`/${item.type}/${item.uid}`)
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <div>
            <span style={{ display: 'block', textAlign: 'left'}}><a style={{textDecoration: "underline", cursor:"pointer"}}>{item.name} - {item.type.toUpperCase()}</a></span>
      
          </div>
        )
      }
	return (
        
		
		<div style={{ width: 400, margin:"0 auto", marginTop: "100px" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={{boxShadow: "none", iconColor: "black"}}
          />
        </div>
		
		
	);

};

