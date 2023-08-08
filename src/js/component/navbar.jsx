import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import startWarsImage from "../../img/Star_Wars_Logo_3.png";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const deleteItem = (id) => {

		actions.deleteFavorite(id);

	}
	return (
		<>
			<nav className="navbar  bg-black mb-3 d-flex justify-content-between" >
				<Link to="/" >
					<img src={startWarsImage} className="  ms-3 d-inline-block aling-text-top " alt="logo" />
				</Link>
				<div className="dropdown-center me-5">
					<a className="btn btn-light dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorities {store.todolist.length}
					</a>
					<ul className="dropdown-menu dropdown-menu-end " >
						{//mostramos los favoritos
							(store.todolist.length === 0) ? <li className="d-flex justify-content-center">(Empty)</li> :
								store.todolist.map((name, index) => {

									return (
										<li className="dropdown-item d-flex justify-content-between align-items-center gap-2">
											<p>{name}</p>
											<button className="btn btn-outline-danger " onClick={() => deleteItem(index)}>
												<i className="fas fa-trash-alt "></i>
											</button>
										</li>
									)
								})}
					</ul>
				</div>
			</nav >
		</>
	);
};
