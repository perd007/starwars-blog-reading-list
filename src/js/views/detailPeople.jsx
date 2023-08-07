import React, { useState, useContext, } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";


export const People = () => {

    const { store } = useContext(Context);
    const params = useParams();
    const indexId = parseInt(params.id);
    const people = store.people.filter((element, index) => indexId === index)
    //console.log("people: " + indexId);


    return (
        <>
            {people.map((item, idex) => {
                return (
                    <div className="container card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4 mt-2">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="rounded mx-auto d-block img" alt="..." />
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
                            <div className="col-2 fw_bold">Birth Year</div>
                            <div className="col-2 fw_bold">Gender</div>
                            <div className="col-2 fw_bold">Height</div>
                            <div className="col-2 fw_bold">Skin Color</div>
                            <div className="col-2 fw_bold">Eye color</div>

                            <div className="col-2">{item.properties.name}</div>
                            <div className="col-2">{item.properties.birth_year}</div>
                            <div className="col-2">{item.properties.gender}</div>
                            <div className="col-2">{item.properties.height}</div>
                            <div className="col-2">{item.properties.skin_color}</div>
                            <div className="col-2">E{item.properties.eye_color}</div>
                        </div>
                    </div>

                )
            })}
        </>
    )
};
