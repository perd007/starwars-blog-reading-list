import React, { useState, useContext, } from "react";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/cardPeople.jsx";
import { CardPlanet } from "../component/cardPlanet.jsx";
import { CardVehicle } from "../component/cardVehicles.jsx";
import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context);
	const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";
	const imgUrlPlanets = "https://starwars-visualguide.com/assets/img/planets/2.jpg";
	return (
		<>

			<div className="container  d-flex overflow-x-scroll gap-3 mb-5 mt-5 ancho">
				{store.people.map((character, index) => {
					//console.log("index Aqeui: " + index)
					return (
						<CardPeople id={index} name={character.properties.name} img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} hair={character.properties.hair_color} eye={character.properties.eye_color} gender={character.properties.gender} />
					);
				})}


			</div >

			<div className=" container  d-flex overflow-x-scroll gap-3 ancho">
				{store.planets.map((planet, index) => {
					{
						//console.log(planet.uid)
						if (planet.properties.name == "Tatooine") {
						} else {
							return (
								<CardPlanet id={index} name={planet.properties.name} img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} population={planet.properties.population} terrain={planet.properties.terrain} />
							);
						}
						{
						}//fin del if
					}
				})}


			</div >


			<div className="container   d-flex overflow-x-scroll gap-3 ancho">
				{store.vehicles.map((vehicle, index) => {
					{
						//console.log(vehicle.uid)
					}
					return (
						<CardVehicle id={index} name={vehicle.properties.name} img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} class={vehicle.properties.vehicle_class} model={vehicle.properties.model} />
					);
				})}


			</div >
		</>
	)
};
