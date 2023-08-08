import React, { useState, useContext, } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";


export const Vehicle = () => {

    const { store } = useContext(Context);
    const params = useParams();
    const indexId = parseInt(params.id);
    const vehicle = store.vehicles.filter((element, index) => indexId === index)



    return (
        <>
            {vehicle.map((item, idex) => {
                return (
                    <div className="container card mb-3 bg-dark text-white" >
                        <div className="row g-0">
                            <div className="col-md-4 mt-2">
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="rounded mx-auto d-block img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title fw_bold">{item.properties.name}</h1>
                                    <p className="card-text">{item.description}</p>

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row   mt-2 mb-5">
                            <div className="col-2 fw_bold">Name</div>
                            <div className="col-2 fw_bold">Model</div>
                            <div className="col-2 fw_bold">Class</div>
                            <div className="col-2 fw_bold">Manufacturer</div>
                            <div className="col-2 fw_bold">Cost in credits</div>
                            <div className="col-2 fw_bold">Length</div>

                            <div className="col-2">{item.properties.name}</div>
                            <div className="col-2">{item.properties.model}</div>
                            <div className="col-2">{item.properties.vehicle_class}</div>
                            <div className="col-2">{item.properties.manufacturer}</div>
                            <div className="col-2">{item.properties.cost_in_credits}</div>
                            <div className="col-2">E{item.properties.length}</div>
                        </div>
                    </div>

                )
            })}
        </>
    )
};
