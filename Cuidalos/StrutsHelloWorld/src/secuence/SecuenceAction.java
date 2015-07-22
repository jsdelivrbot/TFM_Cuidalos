package secuence;

import java.util.Map;

import com.opensymphony.xwork2.ActionContext;

import bd.ConexionBD;

public class SecuenceAction {
	private String username;
	private String password;
	private String tiempo;
	private String orden;
	private String error;

	public String guardar_heimlich() {

		Map session = (Map) ActionContext.getContext().getSession();
		int username = (Integer) session.get("user");

		ConexionBD bd = new ConexionBD();
		bd.conectarBD();
		bd.insertarPuntuacion(username, 1, 1, tiempo, error, orden);
		bd.cerrarBD();

		return "success";

	}

	public String guardar_caida() {

		Map session = (Map) ActionContext.getContext().getSession();
		int username = (Integer) session.get("user");

		ConexionBD bd = new ConexionBD();
		bd.conectarBD();
		bd.insertarPuntuacion(username, 2, 1, tiempo, error, orden);
		bd.cerrarBD();

		return "success";

	}

	public String guardar_herida() {

		Map session = (Map) ActionContext.getContext().getSession();
		int username = (Integer) session.get("user");

		ConexionBD bd = new ConexionBD();
		bd.conectarBD();
		bd.insertarPuntuacion(username, 3, 1, tiempo, error, orden);
		bd.cerrarBD();

		return "success";

	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTiempo() {
		return tiempo;
	}

	public void setTiempo(String tiempo) {
		this.tiempo = tiempo;
	}

	public String getOrden() {
		return orden;
	}

	public void setOrden(String orden) {
		this.orden = orden;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

}
