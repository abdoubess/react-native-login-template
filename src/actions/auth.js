import axios from "axios";
import { startLoading, stopLoading } from "./ui";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllCommandes } from "./commandes";

export function readToken() {
	return (dispatch, getState) => {
		dispatch(startLoading());
		return AsyncStorage.getItem("token")
			.then((token) => {
				dispatch(stopLoading());
				if (!token) return;
				dispatch({
					type: "AUTHENTICATE",
					payload: token,
				});
			})
			.catch((err) => console.log(err));
	};
}

export function login(credidentials) {
	return (dispatch, getState) => {
		dispatch(startLoading());
		return axios
			.post("http://192.168.1.11/api/table_membre", credidentials, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
			.then(({ data }) => {
				console.log();
				AsyncStorage.setItem("token", data.token)

					.then((hh) => {
						dispatch(stopLoading());
						dispatch({
							type: "LOGIN",
							payload: {
								userToken: data.token,
								email: data.result.email,
								nom: data.result.nom,
								prenom: data.result.prenom,
								
								isAuthenticated: true,
								role: data.result.role,
								_id: data.result._id,
							},
						});
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err.response);
				if (err.response.data.message == "user not found") {
					dispatch({
						type: "ADD_ERROR",
						payload: "Email ou mot de passe incorrect",
					});
				} else {
					dispatch({ type: "ADD_ERROR", payload: "une Erreur s'est produite" });
				}
				dispatch(stopLoading());
			});
	};
}