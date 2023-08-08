import React, { useState, useContext, } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardVehicle = (props) => {
    const { actions } = useContext(Context);

    const handleChange = () => {
        actions.getHandleChange(props.name);
    }
    return (
        <>

            <div className=" row m-3" key={props.id} >
                <div className="card col-12  bg-dark text-white"  >
                    <img src={props.img} className="img mt-2 rounded mx-auto d-block" />
                    <div className="card-body ">
                        <h5 className="card-title">{props.name}</h5>
                        <div className="card-text"> <b>Model: </b>{props.model}</div>
                        <div className="card-text">  <b>Vehicle_Class:</b> {props.class}</div>
                        <div className="d-flex justify-content-between ">
                            <Link to={`/vehicle/${props.id}`}>
                                <button href="#" className="btn btn-outline-primary mt-2 ">Learn More!</button>
                            </Link>
                            <button href="#" className="btn btn-outline-warning" onClick={handleChange}><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                </div >
            </div >

        </>
    );
};
