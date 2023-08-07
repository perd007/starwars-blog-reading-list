import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import startWarsImage from "../../img/Star-Wars-Logo-2.png";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const deleteItem = (id) => {

		actions.deleteFavorite(id);

	}
	return (
		<>
			<nav className="navbar bg-transparent  mb-3  d-flex justify-content-between">
				<Link to="/" >
					<img src={startWarsImage} className=" ms-3 d-inline-block aling-text-top " alt="logo" />
				</Link>
				<div className="dropdown me-5">
					<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorities {store.todolist.length}
					</a>
					<ul className="dropdown-menu " width="300px">
						{//mostramos los favoritos
							(store.todolist.length === 0) ? <li className="d-flex justify-content-center">(Empty)</li> :
								store.todolist.map((name, index) => {

									return (
										<li>
											<p className="dropdown-item d-flex justify-content-between " >{name}
												<button className="btn btn-outline-danger " onClick={() => deleteItem(index)}>
													<i className="fas fa-trash-alt "></i>
												</button>
											</p>
										</li>
									)
								})}
					</ul>
				</div>
			</nav >
		</>
	);
};
