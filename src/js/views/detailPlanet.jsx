import React, { useState, useContext, } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";


export const Planet = () => {

    const { store } = useContext(Context);
    const params = useParams();
    const indexId = parseInt(params.id);
    const planet = store.planets.filter((element, index) => indexId === index)



    return (
        <>
            {planet.map((item, idex) => {
                return (
                    <div className="container card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4 mt-2">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="rounded mx-auto d-block img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title fw_bold">{item.properties.name}</h1>
                                    <p className="card-text">{item.description}</p>

                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row bg-light text-danger mt-2 mb-2">
                            <div className="col-2 fw_bold">Name</div>
                            <div className="col-2 fw_bold">Diameter</div>
                            <div className="col-2 fw_bold">Population</div>
                            <div className="col-2 fw_bold">Climate</div>
                            <div className="col-2 fw_bold">Terrain</div>
                            <div className="col-2 fw_bold">Orbital Period</div>

                            <div className="col-2">{item.properties.name}</div>
                            <div className="col-2">{item.properties.diameter}</div>
                            <div className="col-2">{item.properties.population}</div>
                            <div className="col-2">{item.properties.climate}</div>
                            <div className="col-2">{item.properties.terrain}</div>
                            <div className="col-2">E{item.properties.orbital_period}</div>
                        </div>
                    </div>

                )
            })}
        </>
    )
};
