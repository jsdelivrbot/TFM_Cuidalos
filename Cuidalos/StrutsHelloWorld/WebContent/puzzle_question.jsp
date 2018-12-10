<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/gh/konvajs/konva@0.9.5/konva.min.js"></script>
  <meta charset="utf-8">
  <title>Puzzle Preguntas</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-image: url("images/fondo_secuencias.png");
      background-repeat: no-repeat;
    }
  </style>
</head>
<body onload="javascript:resizeTo(1064,600)">
  <div id="container"></div>
  
  
<div id="questionCama" style="display:none;">

    <fieldset>
        <legend>¿Para personas con movilidad reducida qué es necesario que tenga la cama?</legend>
        <label>
            <input type="radio" name="respuCama" value="a"  > Un piecero.
        </label><br>
        <label>
            <input type="radio" name="respuCama" value="b"  > Un cabecero y un piecero.
        </label><br>
        <label>
            <input type="radio" name="respuCama" value="c"  > Un cabecero.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Cama')"/>
   
 </div>
 
 <div id="questionMesita" style="display:none;">

    <fieldset>
        <legend>Los cajones de la mesita, aparte de tener el asa de borde redondeado, ¿qué otras características deben tener?</legend>
        <label>
            <input type="radio" name="respuMesita" value="a"> Cajones grandes para que se puedan meter muchos objetos.
        </label><br>
        <label>
            <input type="radio" name="respuMesita" value="b"> Topes para que no se puedan caer y rodamientos para que se tenga que hacer la mínima fuerza posible.
        </label><br>
        <label>
            <input type="radio" name="respuMesita" value="c"> Topes para que no se puedan caer y rodamientos para que se tenga que hacer fuerza al abrir el cajón.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Mesita')"/>
   
 </div>
 
  <div id="questionInterruptor" style="display:none;">

    <fieldset>
        <legend>¿Cómo tienen que ser un interruptor?</legend>
        <label>
            <input type="radio" name="respuInterruptor" value="a"> Estar al alcance, tener colores contrastados y un piloto luminoso.
        </label><br>
        <label>
            <input type="radio" name="respuInterruptor" value="b"> Estar al alcance.
        </label><br>
        <label>
            <input type="radio" name="respuInterruptor" value="c"> Estar al alcance y tener un piloto luminoso.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Interruptor')"/>
   
 </div>
 
   <div id="questionRadiador" style="display:none;">

    <fieldset>
        <legend>La temperatura ambiental ideal es...</legend>
        <label>
            <input type="radio" name="respuRadiador" value="a"> 18ºC.
        </label><br>
        <label>
            <input type="radio" name="respuRadiador" value="b"> 20ºC y sin corrientes de aire.
        </label><br>
        <label>
            <input type="radio" name="respuRadiador" value="c"> 24ºC y sin corrientes de aire.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Radiador')"/>
   
 </div>
 
  <div id="questionButaca" style="display:none;">

    <fieldset>
        <legend>Marca la opción falsa sobre las exigencias que debe reunir una butaca.</legend>
        <label>
            <input type="radio" name="respuButaca" value="a"> Ofrecer un apoyo estable y una distribución de las presiones óptimas.
        </label><br>
        <label>
            <input type="radio" name="respuButaca" value="b"> No tener facilidad para moverla de sitio.
        </label><br>
        <label>
            <input type="radio" name="respuButaca" value="c"> Tamaño adecuado al usuario.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Butaca')"/>
   
 </div>
 
 <div id="questionComoda" style="display:none;">

    <fieldset>
        <legend>¿Cómo debe ser la base de apoyo de una cómoda?</legend>
        <label>
            <input type="radio" name="respuComoda" value="a"> Suficientemente ancha para asegurar su estabilidad, incluso contando con el peso de una persona apoyada.
        </label><br>
        <label>
            <input type="radio" name="respuComoda" value="b"> Lo más pequeña posible para que no ocupe más espacio de la cuenta y se pueda acceder cómodamente a los demás muebles.
        </label><br>
        <label>
            <input type="radio" name="respuComoda" value="c"> No importa el tamaño de la base.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Comoda')"/>
   
 </div>
 
 <div id="questionLamparaTecho" style="display:none;">

    <fieldset>
        <legend>¿Cómo tiene que ser la iluminación?</legend>
        <label>
            <input type="radio" name="respuLamparaTecho" value="a"> Según las necesidades del usuario.
        </label><br>
        <label>
            <input type="radio" name="respuLamparaTecho" value="b"> Luz suficiente para permitir una lectura cómoda.
        </label><br>
        <label>
            <input type="radio" name="respuLamparaTecho" value="c"> Las opciones anteriores son correctas.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('LamparaTecho')"/>
   
 </div>
 
 <div id="questionArmario" style="display:none;">

    <fieldset>
        <legend>¿Cuáles son las características que un armario debe tener para que sea accesible?</legend>
        <label>
            <input type="radio" name="respuArmario" value="a"> Puertas correderas.
        </label><br>
        <label>
            <input type="radio" name="respuArmario" value="b"> Cajones o estantes debajo de la ropa colgada.
        </label><br>
        <label>
            <input type="radio" name="respuArmario" value="c"> Ninguna de las opciones anteriores son correctas.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Armario')"/>
   
 </div>
 
 <div id="questionSilla" style="display:none;">

    <fieldset>
        <legend>¿Cuál es una buena idea para poder arrastrar una silla sin problemas?</legend>
        <label>
            <input type="radio" name="respuSilla" value="a"> Colocar ruedas.
        </label><br>
        <label>
            <input type="radio" name="respuSilla" value="b"> Colocar discos deslizantes de fieltro o teflón en la base de las patas.
        </label><br>
        <label>
            <input type="radio" name="respuSilla" value="c"> La silla no se tiene por qué arrastrar.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Silla')"/>
   
 </div>
 
 <div id="questionEscritorio" style="display:none;">

    <fieldset>
        <legend>Un escritorio debe...</legend>
        <label>
            <input type="radio" name="respuEscritorio" value="a"> Tener altura suficiente y espacio para que una persona con silla de ruedas pueda estar sobre el escritorio.
        </label><br>
        <label>
            <input type="radio" name="respuEscritorio" value="b"> Cajones flotantes en el medio del escritorio.
        </label><br>
        <label>
            <input type="radio" name="respuEscritorio" value="c"> La altura de la mesa da igual, lo que importa es la anchura.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Escritorio')"/>
   
 </div>
 
<div id="questionLamparaPared" style="display:none;">

    <fieldset>
        <legend>¿Cuál es el tipo de luz correcta para que no se canse la vista?</legend>
        <label>
            <input type="radio" name="respuLamparaPared" value="a"> Luz fluorescente.
        </label><br>
        <label>
            <input type="radio" name="respuLamparaPared" value="b"> Luz amarilla.
        </label><br>
        <label>
            <input type="radio" name="respuLamparaPared" value="c"> Luz blanca o azulada.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('LamparaPared')"/>
   
 </div>
 
 <div id="questionPuerta" style="display:none;">

    <fieldset>
        <legend>Las características de la puerta correctas son:</legend>
        <label>
            <input type="radio" name="respuPuerta" value="a"> Anchura mínima 90 cm, altura mínimna 1,80 cm, ángulo de apertura 120º, altura de pomos 45-65 cm.
        </label><br>
        <label>
            <input type="radio" name="respuPuerta" value="b"> Anchura mínima 90 cm, altura mínimna 2,20 cm, ángulo de apertura 90º, altura de pomos 85-110 cm.
        </label><br>
        <label>
            <input type="radio" name="respuPuerta" value="c"> Anchura mínima 60 cm, altura mínimna 2,20 cm, ángulo de apertura 85º, altura de pomos 85-110 cm.
        </label>
    </fieldset>
    <input type="button" value="Enviar respuesta" onclick="ocultarDiv('Puerta')"/>
   
 </div>
   
 <s:form action="guardar_respuestas.action" method="post" >
	    <s:hidden name="respuestas" />
	    <s:hidden name="resp_correctas" />
	    <s:hidden name="resp_incorrectas" />
	</s:form>
 
 

 
    
  <script src="js/puzzle_game_question.js">  </script>
  
  

</body>
</html>