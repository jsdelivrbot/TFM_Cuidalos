package login;

import java.util.Map;

import com.opensymphony.xwork2.ActionContext;

import bd.ConexionBD;

public class LoginAction {

	private String username;

	public String start() {

		System.out.println("username " + username);

		ConexionBD bd = new ConexionBD();

		bd.conectarBD();
		int id = bd.insertarUsuario(username);
		Map session = (Map) ActionContext.getContext().getSession();
		session.put("user", id);
		ActionContext.getContext().setSession(session);
		bd.cerrarBD();

		return "success";
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
