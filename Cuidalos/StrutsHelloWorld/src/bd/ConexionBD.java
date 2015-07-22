package bd;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ConexionBD {

	private String servidor = new String("localhost");
	private String baseDatos = new String("puzzle");
	private String userBD = new String("root");
	private String passBD = new String("");

	public static Connection conexion;

	public boolean conectarBD() {

		try {
			Class.forName("com.mysql.jdbc.Driver");

			conexion = DriverManager.getConnection("jdbc:mysql://" + servidor + "/" + baseDatos, userBD, passBD);

			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return false;

	}

	public boolean cerrarBD() {
		try {
			conexion.close();
		} catch (SQLException e) {

			e.printStackTrace();
		}
		return false;

	}

	public int insertarUsuario(String username) {

		int key = 0;
		try {
			PreparedStatement pstmt = conexion.prepareStatement(
					"INSERT INTO usuario (nombre)" + "VALUES ('" + username + "')", Statement.RETURN_GENERATED_KEYS);
			pstmt.executeUpdate();
			ResultSet keys = pstmt.getGeneratedKeys();
			keys.next();
			key = keys.getInt(1);
			keys.close();
			pstmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return key;
	}

	public boolean insertarPuntuacion(int idUsuario, int nivel, int juego, String tiempo, String error, String orden) {

		try {
			PreparedStatement pstmt;
			pstmt = conexion.prepareStatement(
					"INSERT INTO puntuacion (id_usuario, id_nivel, id_juego, error, tiempo, orden) VALUES (" + idUsuario
							+ ", " + nivel + ", " + juego + ", '" + error + "', '" + tiempo + "', '" + orden + "')",
					Statement.RETURN_GENERATED_KEYS);

			pstmt.executeUpdate();
			pstmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return false;
	}
	
	public boolean insertarRespuestas(int idUsuario, String respuestas, String resp_correctas, String resp_incorrectas) {

		try {
			PreparedStatement pstmt;
			pstmt = conexion.prepareStatement(
					"INSERT INTO cuestionario (id_usuario, respuestas, resp_correctas, resp_incorrectas) VALUES (" + idUsuario
							+ ", '" + respuestas + "', '" + resp_correctas + "', '" + resp_incorrectas + "')",
					Statement.RETURN_GENERATED_KEYS);

			pstmt.executeUpdate();
			pstmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return false;
	}

}
