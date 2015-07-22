-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.0.96-community-nt - MySQL Community Edition (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             9.2.0.4947
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura de base de datos para puzzle
CREATE DATABASE IF NOT EXISTS `puzzle` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `puzzle`;


-- Volcando estructura para tabla puzzle.cuestionario
DROP TABLE IF EXISTS `cuestionario`;
CREATE TABLE IF NOT EXISTS `cuestionario` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `id_usuario` int(10) unsigned default NULL,
  `respuestas` varchar(45) NOT NULL,
  `resp_correctas` varchar(45) NOT NULL,
  `resp_incorrectas` varchar(45) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla puzzle.cuestionario: ~24 rows (aproximadamente)
DELETE FROM `cuestionario`;
/*!40000 ALTER TABLE `cuestionario` DISABLE KEYS */;
INSERT INTO `cuestionario` (`id`, `id_usuario`, `respuestas`, `resp_correctas`, `resp_incorrectas`) VALUES
	(1, 62, 'a,a,a,a,a,c,a,b,b,b,b,b', '5', '8'),
	(2, 62, 'a,a,a,a,a,a,a,a,a,a,a,a', '0', '14'),
	(3, 62, 'a,a,a,a,a,a,a,a,a,a,a,a', '0', '14'),
	(4, 62, 'a,a,a,a,a,a,a,a,a,a,a,a', 'null', '14'),
	(5, 62, 'a,a,a,a,a,a,a,a,a,a,a,a', 'null', '14'),
	(6, 62, 'a,a,a,a,a,a,a,a,a,a,a,a', 'null', '14'),
	(7, 62, 'a,a,a,a,a,a,a,a,a,a,a,a', 'null', '14'),
	(8, 62, 'a,a,a,a,a,a,a,a,a,a,a,a', 'null', '14'),
	(9, 62, 'a,a,a,a,a,a,a,a,a,a,a,b', '1', 'null'),
	(10, 62, 'b,b,a,c,b,a,c,c,b,a,c,b', '12', 'null'),
	(11, 63, 'b,b,a,c,b,a,c,c,b,a,c,b', '13', 'null'),
	(12, 63, 'b,b,a,c,b,a,c,c,b,a,c,b', '12', 'null'),
	(13, 63, 'b,b,a,c,b,a,c,c,b,a,c,b', '12', 'null'),
	(14, 63, 'a,a,a,a,a,a,a,a,a,a,a,a', '3', 'null'),
	(15, 63, 'a,a,a,a,a,a,a,a,a,a,a,a', '3', '9'),
	(16, 63, 'b,b,a,c,b,a,c,c,b,a,c,b', '12', '0'),
	(17, 63, 'a,a,b,a,b,b,a,a,a,b,c,c', '4', '11'),
	(18, 64, 'a,a,a,a,a,a,a,a,a,a,a,a', '3', '9'),
	(19, 70, 'b,b,a,b,a,b,a,b,b,a,b,b', '6', '6'),
	(20, 73, 'b,b,a,b,b,b,c,a,a,a,c,b', '8', '4'),
	(21, 74, 'a,b,b,b,b,a,c,a,a,b,b,a', '4', '8'),
	(22, 75, 'b,b,c,b,b,a,c,a,b,a,c,a', '8', '4'),
	(23, 77, 'b,b,a,c,b,a,c,c,b,a,c,b', '12', '0'),
	(24, 77, 'b,b,a,c,b,a,c,c,b,a,c,b', '12', '0');
/*!40000 ALTER TABLE `cuestionario` ENABLE KEYS */;


-- Volcando estructura para tabla puzzle.juego
DROP TABLE IF EXISTS `juego`;
CREATE TABLE IF NOT EXISTS `juego` (
  `id` int(11) default NULL,
  `tipo` varchar(50) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla puzzle.juego: ~2 rows (aproximadamente)
DELETE FROM `juego`;
/*!40000 ALTER TABLE `juego` DISABLE KEYS */;
INSERT INTO `juego` (`id`, `tipo`) VALUES
	(1, 'Secuencia'),
	(2, 'Puzzle');
/*!40000 ALTER TABLE `juego` ENABLE KEYS */;


-- Volcando estructura para tabla puzzle.nivel
DROP TABLE IF EXISTS `nivel`;
CREATE TABLE IF NOT EXISTS `nivel` (
  `id` int(11) NOT NULL default '0',
  `id_juego` int(10) default NULL,
  `nivel` int(10) default NULL,
  PRIMARY KEY  (`id`),
  KEY `id_juego` (`id_juego`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla puzzle.nivel: ~4 rows (aproximadamente)
DELETE FROM `nivel`;
/*!40000 ALTER TABLE `nivel` DISABLE KEYS */;
INSERT INTO `nivel` (`id`, `id_juego`, `nivel`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(4, 2, 1);
/*!40000 ALTER TABLE `nivel` ENABLE KEYS */;


-- Volcando estructura para tabla puzzle.puntuacion
DROP TABLE IF EXISTS `puntuacion`;
CREATE TABLE IF NOT EXISTS `puntuacion` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `id_usuario` int(10) unsigned default NULL,
  `id_nivel` int(10) unsigned NOT NULL,
  `id_juego` int(10) unsigned NOT NULL,
  `error` varchar(45) NOT NULL,
  `tiempo` varchar(45) NOT NULL,
  `orden` varchar(45) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla puzzle.puntuacion: ~119 rows (aproximadamente)
DELETE FROM `puntuacion`;
/*!40000 ALTER TABLE `puntuacion` DISABLE KEYS */;
INSERT INTO `puntuacion` (`id`, `id_usuario`, `id_nivel`, `id_juego`, `error`, `tiempo`, `orden`) VALUES
	(5, 17, 1, 1, '2', '11.444', 'sec1,sec5,sec3,sec4,sec7,sec6,sec2'),
	(6, 17, 2, 2, '5', '16.475', 'sec6,sec5,sec4,sec3,sec2,sec1'),
	(7, 17, 3, 2, '6', '14.627', 'sec1,sec2,sec5,sec6,sec3,sec4'),
	(8, 17, 1, 2, '0', '10.105', 'sec1,sec4,sec3,sec2,sec7,sec5,sec6'),
	(9, 33, 1, 1, '1', '21.102', 'sec1,sec7,sec5,sec6,sec3,sec2,sec4'),
	(10, 34, 1, 1, '0', '13.655', 'sec1,sec2,sec3,sec4,sec5,sec6,sec7'),
	(11, 34, 1, 1, '0', '13.655', 'sec1,sec2,sec3,sec4,sec5,sec6,sec7'),
	(12, 35, 1, 1, '0', '39.182', 'sec1,sec5,sec3,sec4,sec7,sec2,sec6'),
	(13, 35, 1, 1, '0', '39.182', 'sec1,sec5,sec3,sec4,sec7,sec2,sec6'),
	(14, 35, 1, 1, '0', '39.182', 'sec1,sec5,sec3,sec4,sec7,sec2,sec6'),
	(15, 36, 1, 1, '1', '19.67', 'sec1,sec2,sec3,sec4,sec5,sec6,sec7'),
	(16, 36, 1, 2, '1', '74.876', 'sec1,sec4,sec7,sec5,sec2,sec6,sec3'),
	(17, 36, 1, 1, '0', '13.056', 'sec1,sec2,sec3,sec4,sec5,sec6,sec7'),
	(18, 37, 1, 1, '1', '12.145', 'sec1,sec2,sec4,sec3,sec5,sec6,sec7'),
	(19, 37, 2, 2, '0', '12.584', 'sec1,sec2,sec3,sec4,sec5,sec6'),
	(20, 37, 3, 2, '1', '13.833', 'sec6,sec1,sec2,sec3,sec5,sec4'),
	(21, 37, 1, 2, '2', '14.92', 'sec1,sec6,sec7,sec5,sec2,sec3,sec4'),
	(22, 38, 1, 2, '0', '11.308', 'sec1,sec7,sec4,sec6,sec3,sec5,sec2'),
	(23, 38, 1, 2, '0', '11.308', 'sec1,sec7,sec4,sec6,sec3,sec5,sec2'),
	(24, 39, 1, 2, '1', '20.187', 'sec7,sec1,sec6,sec4,sec5,sec3,sec2'),
	(25, 39, 1, 2, '1', '20.187', 'sec7,sec1,sec6,sec4,sec5,sec3,sec2'),
	(26, 39, 1, 2, '1', '20.187', 'sec7,sec1,sec6,sec4,sec5,sec3,sec2'),
	(27, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(28, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(29, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(30, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(31, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(32, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(33, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(34, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(35, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(36, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(37, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(38, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(39, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(40, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(41, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(42, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(43, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(44, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(45, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(46, 40, 1, 1, '0', '10.362', 'sec1,sec5,sec6,sec4,sec3,sec2,sec7'),
	(47, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(48, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(49, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(50, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(51, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(52, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(53, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(54, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(55, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(56, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(57, 41, 1, 1, '5', '17.988', 'sec1,sec7,sec2,sec4,sec5,sec6,sec3'),
	(58, 42, 1, 1, '3', '10.964', 'sec1,sec5,sec2,sec6,sec7,sec3,sec4'),
	(59, 43, 1, 1, '3', '12.868', 'sec1,sec5,sec4,sec6,sec3,sec2,sec7'),
	(60, 43, 2, 2, '5', '24.301', 'sec2,sec6,sec1,sec4,sec3,sec5'),
	(61, 43, 3, 2, '7', '13.63', 'sec6,sec1,sec4,sec3,sec2,sec5'),
	(62, 44, 1, 1, '0', '11.473', 'sec1,sec5,sec2,sec6,sec3,sec4,sec7'),
	(63, 44, 2, 2, '3', '14.728', 'sec6,sec2,sec5,sec1,sec3,sec4'),
	(64, 44, 3, 2, '1', '10.021', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(65, 45, 1, 1, '0', '10.149', 'sec1,sec2,sec6,sec5,sec4,sec3,sec7'),
	(66, 45, 2, 2, '2', '8.838', 'sec6,sec1,sec4,sec2,sec3,sec5'),
	(67, 45, 3, 2, '3', '8.659', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(68, 46, 1, 1, '0', '9.797', 'sec1,sec5,sec6,sec7,sec2,sec3,sec4'),
	(69, 46, 2, 1, '6', '11.965', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(70, 46, 3, 1, '9', '14.832', 'sec6,sec2,sec1,sec4,sec3,sec5'),
	(71, 46, 3, 1, '9', '14.832', 'sec6,sec2,sec1,sec4,sec3,sec5'),
	(72, 46, 3, 1, '9', '14.832', 'sec6,sec2,sec1,sec4,sec3,sec5'),
	(73, 46, 3, 1, '9', '14.832', 'sec6,sec2,sec1,sec4,sec3,sec5'),
	(74, 46, 3, 1, '9', '14.832', 'sec6,sec2,sec1,sec4,sec3,sec5'),
	(75, 46, 3, 1, '3', '15.043', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(76, 46, 3, 1, '3', '15.043', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(77, 47, 1, 1, '3', '10.59', 'sec1,sec2,sec5,sec6,sec4,sec3,sec7'),
	(78, 47, 2, 1, '0', '8.404', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(79, 47, 3, 1, '2', '10.356', 'sec6,sec2,sec4,sec1,sec3,sec5'),
	(80, 48, 1, 1, '3', '13.904', 'sec1,sec5,sec3,sec7,sec2,sec4,sec6'),
	(81, 48, 2, 1, '0', '7.357', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(82, 48, 3, 1, '0', '7.462', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(83, 49, 1, 1, '1', '12.778', 'sec1,sec5,sec4,sec3,sec7,sec2,sec6'),
	(84, 49, 2, 1, '0', '8.626', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(85, 49, 3, 1, '0', '10.108', 'sec2,sec5,sec3,sec1,sec4,sec6'),
	(86, 50, 1, 1, '1', '19.347', 'sec1,sec6,sec2,sec5,sec3,sec4,sec7'),
	(87, 50, 2, 1, '0', '8.45', 'sec6,sec2,sec5,sec3,sec1,sec4'),
	(88, 50, 3, 1, '0', '8.726', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(89, 50, 3, 1, '0', '8.726', 'sec6,sec2,sec5,sec3,sec4,sec1'),
	(90, 50, 1, 2, '2', '14.586', 'sec4,sec6,sec7,sec5,sec1,sec3,sec2'),
	(91, 50, 1, 2, '3', '20.981', 'sec1,sec6,sec7,sec5,sec4,sec2,sec3'),
	(92, 51, 1, 2, '3', '14.898', 'sec6,sec7,sec1,sec4,sec5,sec2,sec3'),
	(93, 52, 1, 2, '0', '13.287', 'sec6,sec1,sec7,sec5,sec4,sec2,sec3'),
	(94, 54, 1, 2, '4', '20.091', 'cama,butac,armar,comod,escrit,sill,mesi'),
	(95, 55, 2, 1, '7', '25.323', 'sec3,sec2,sec5,sec4,sec1,sec6'),
	(96, 55, 1, 1, '2', '49.287', 'sec7,sec1,sec6,sec3,sec4,sec2,sec5'),
	(97, 55, 2, 1, '3', '18.642', 'sec6,sec1,sec4,sec3,sec5,sec2'),
	(98, 56, 1, 1, '4', '38.489', 'sec5,sec1,sec4,sec3,sec7,sec6,sec2'),
	(99, 56, 2, 1, '19', '47.202', 'sec6,sec5,sec2,sec3,sec4,sec1'),
	(100, 56, 3, 1, '1', '23.922', 'sec6,sec5,sec2,sec1,sec3,sec4'),
	(101, 56, 1, 2, '0', '115.05', 'butac,armar,comod,escrit,mesi,sill,cama'),
	(102, 58, 1, 2, '0', '10.629', 'escrit,cama,comod,butac,armar,mesi,sill'),
	(103, 60, 1, 2, '0', '231.37', 'cama,armar,butac,escrit,comod,mesi,sill'),
	(104, 61, 1, 2, '2', '15.871', 'butac,armar,comod,escrit,cama,sill,mesi'),
	(105, 62, 1, 1, '0', '27.709', 'sec1,sec5,sec6,sec2,sec3,sec4,sec7'),
	(106, 62, 2, 1, '2', '45.381', 'sec6,sec2,sec1,sec4,sec5,sec3'),
	(107, 62, 3, 1, '0', '7.42', 'sec6,sec2,sec1,sec4,sec3,sec5'),
	(108, 62, 1, 2, '0', '14.226', 'butac,cama,armar,comod,escrit,mesi,sill'),
	(109, 63, 1, 2, '0', '11.603', 'cama,armar,butac,sill,mesi,escrit,comod'),
	(110, 64, 1, 2, '1', '13.927', 'butac,cama,escrit,armar,comod,mesi,sill'),
	(111, 65, 1, 2, '0', '29.667', 'armar,cama,butac,escrit,comod,mesi,sill'),
	(112, 65, 1, 2, '0', '29.216', 'cama,comod,butac,escrit,mesi,armar,sill'),
	(113, 65, 1, 2, '0', '21.813', 'cama,butac,escrit,mesi,armar,comod,sill'),
	(114, 68, 1, 1, '2', '192.276', 'sec1,sec5,sec7,sec4,sec3,sec6,sec2'),
	(115, 68, 1, 1, '0', '32.982', 'sec1,sec5,sec4,sec3,sec6,sec7,sec2'),
	(116, 69, 1, 1, '1', '19.409', 'sec1,sec5,sec4,sec3,sec6,sec7,sec2'),
	(117, 71, 1, 1, '3', '108.856', 'sec1,sec2,sec3,sec4,sec5,sec6,sec7'),
	(118, 73, 1, 2, '0', '50.306', 'cama,comod,butac,escrit,armar,mesi,sill'),
	(119, 74, 1, 1, '8', '99.867', 'sec7,sec1,sec2,sec3,sec4,sec5,sec6'),
	(120, 74, 1, 2, '0', '59.529', 'butac,cama,armar,mesi,escrit,sill,comod'),
	(121, 75, 1, 1, '1', '79.518', 'sec1,sec2,sec3,sec4,sec5,sec6,sec7'),
	(122, 75, 1, 2, '0', '58.83', 'cama,escrit,comod,butac,armar,mesi,sill'),
	(123, 76, 1, 1, '4', '108.889', 'sec1,sec2,sec3,sec4,sec5,sec6,sec7');
/*!40000 ALTER TABLE `puntuacion` ENABLE KEYS */;


-- Volcando estructura para tabla puzzle.usuario
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(32) unsigned NOT NULL auto_increment,
  `nombre` varchar(50) default NULL,
  `fecha` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla puzzle.usuario: ~48 rows (aproximadamente)
DELETE FROM `usuario`;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`id`, `nombre`, `fecha`) VALUES
	(17, 'Prueba', '2015-07-03 11:59:32'),
	(33, '', '2015-07-07 14:09:41'),
	(34, 'yoli', '2015-07-07 14:11:25'),
	(35, '', '2015-07-08 08:47:26'),
	(36, '', '2015-07-08 09:27:47'),
	(37, '', '2015-07-08 10:00:34'),
	(38, 'null', '2015-07-08 12:45:40'),
	(39, '', '2015-07-08 12:47:23'),
	(40, '', '2015-07-08 13:05:18'),
	(41, '', '2015-07-08 13:16:41'),
	(42, '', '2015-07-08 13:29:15'),
	(43, '', '2015-07-08 13:32:23'),
	(44, '', '2015-07-08 13:34:20'),
	(45, 'yoliiii', '2015-07-08 13:41:01'),
	(46, '', '2015-07-08 13:44:24'),
	(47, 'averrrrr', '2015-07-08 13:49:04'),
	(48, 'olaaaaaa', '2015-07-08 13:52:42'),
	(49, '', '2015-07-08 13:55:24'),
	(50, '', '2015-07-08 14:00:55'),
	(51, '', '2015-07-08 14:18:23'),
	(52, 'yoli', '2015-07-08 14:22:08'),
	(53, '', '2015-07-08 14:28:35'),
	(54, '', '2015-07-08 14:29:30'),
	(55, '', '2015-07-08 14:36:10'),
	(56, '', '2015-07-09 08:38:18'),
	(57, '', '2015-07-09 10:34:31'),
	(58, '', '2015-07-09 10:35:02'),
	(59, '', '2015-07-09 12:25:51'),
	(60, 'pruebadef', '2015-07-09 13:13:41'),
	(61, '', '2015-07-09 13:19:15'),
	(62, '', '2015-07-09 13:59:13'),
	(63, '', '2015-07-09 15:01:44'),
	(64, 'yoli', '2015-07-13 09:09:03'),
	(65, 'asdf', '2015-07-13 09:35:43'),
	(66, '', '2015-07-13 12:49:30'),
	(67, '', '2015-07-13 15:08:44'),
	(68, '', '2015-07-13 15:08:59'),
	(69, '', '2015-07-14 09:08:29'),
	(70, '', '2015-07-14 09:36:36'),
	(71, 'zelai', '2015-07-15 13:37:21'),
	(72, 'zelai', '2015-07-15 13:37:21'),
	(73, '', '2015-07-15 13:45:13'),
	(74, '', '2015-07-15 13:52:32'),
	(75, '', '2015-07-15 14:01:20'),
	(76, 'Alain', '2015-07-15 14:16:38'),
	(77, 'sdf', '2015-07-15 14:26:07'),
	(78, '', '2015-07-15 14:50:35'),
	(79, '', '2015-07-15 14:50:57');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
