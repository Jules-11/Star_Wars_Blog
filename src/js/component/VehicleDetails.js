import React, { useState, useEffect, useContext } from "react";


export const VehicleDetails = (props) => {
   

  const textColor = {
    color: "#b11226",
  };
  return (
    <div className="container mt-5 mb-5 pb-5">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 col-xl-4">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`} className="w-100" />
        </div>
        <div className="col-12 col-md-7 col-lg-8 col-md-8">
          <h1>{props.name}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            delectus explicabo voluptatibus corporis distinctio ipsam iusto
            consequatur ipsa adipisci illum? Amet, officia sunt voluptates ullam
            recusandae unde blanditiis culpa debitis. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas ad delectus autem fuga eaque,
            distinctio veritatis dolor aperiam sit iure quos consequuntur ut
            quis aliquid vitae vero? Enim, labore maiores! Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
        <div className="container">
          <hr className="border-3 border-bottom border-danger" />
        </div>
        <div className="container">
          <div className="row">
          <div className="col-2" style={textColor}>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">{props.name}</p>
              </div>
            </div>
            </div>
            <div className="col-2" style={textColor}>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Model</h5>
                <p className="card-text">{props.model}</p>
              </div>
            </div>
            </div>
            <div className="col-2" style={textColor}>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Cargo Capacity</h5>
                <p className="card-text">{props.cargo_capacity}</p>
              </div>
            </div>
            </div>
            <div className="col-2" style={textColor}>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Consumables</h5>
                <p className="card-text">{props.consumables}</p>
              </div>
            </div>
            </div>
            <div className="col-2" style={textColor}>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Crew</h5>
                <p className="card-text">{props.crew}</p>
              </div>
            </div>
            </div>
            <div className="col-2" style={textColor}>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="card-title">Passengers</h5>
                <p className="card-text">{props.passengers}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};