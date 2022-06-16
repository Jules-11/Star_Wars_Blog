import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { CharacterDetails } from "../component/CharacterDetails";

const Characters = () => {
  const { store, actions } = useContext(Context);
  // const [info, setInfo] = useState({}); // overriding a state for character information
  const params = useParams();

  useEffect(() => {
    console.log("USEEFFECT DONE")
    console.log({ characterInfo: store.characterInfo});
    if (store.characterInfo.length == 0 || store.characterInfo.length == undefined) {
      actions.getCharacterInfo(params.id);
    }
    console.log("Hello World", store.characterInfo.properties);
    // setInfo(store.characterInfo.properties)
  },[params?.id]); // mount of the component + on params id change

  return (
    <div>
      <CharacterDetails {...store?.characterInfo?.properties} id={params.id} />
    </div>
  );
};

export default Characters;
