package puzzle;

import java.util.Map;

import bd.ConexionBD;

import com.opensymphony.xwork2.ActionContext;


public class QuestionAction {
	private String username;
	private String password;
	private String respuestas;
	private String resp_correctas;
	private String resp_incorrectas;
	
	public String guardar_respuestas() {

		System.out.println("PASA " + respuestas + " " + resp_correctas + "  " + resp_incorrectas);

		Map session = (Map) ActionContext.getContext().getSession();
		int username = (Integer) session.get("user");

		ConexionBD bd = new ConexionBD();
		bd.conectarBD();
		bd.insertarRespuestas(username, respuestas, resp_correctas, resp_incorrectas);
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

	public String getRespuestas() {
		return respuestas;
	}

	public void setRespuestas(String respuestas) {
		this.respuestas = respuestas;
	}

	public String getResp_correctas() {
		return resp_correctas;
	}

	public void setResp_correctas(String resp_correctas) {
		this.resp_correctas = resp_correctas;
	}

	public String getResp_incorrectas() {
		return resp_incorrectas;
	}

	public void setResp_incorrectas(String resp_incorrectas) {
		this.resp_incorrectas = resp_incorrectas;
	}
}
