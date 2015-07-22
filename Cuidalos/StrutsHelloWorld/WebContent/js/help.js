var width = 1064;
 var height = 600;
 
 
 var stage = new Konva.Stage({
     container: 'container',
     width: width,
     height: height
   });
 
 
 var layer = new Konva.Layer();
 stage.add(layer);

 
 
 
 var buttonBackImg = new Konva.Image({
	 image: imageObj1,
	 x: stage.getWidth() / 40,
     y: stage.getHeight() / 1.2,
     width: 519-420,
     height: 501-420,
     opacity: 0.8,
     draggable: false
 });
 

 
 layer.add(buttonBackImg);
 
 
 
 
 
 var imageObj1 = new Image();
 imageObj1.onload = function() {
	 buttonBackImg.image(imageObj1); 
     layer.draw();
 };
 imageObj1.src = 'images/back.png';
 imageObj1.id = 'back';
 

 
 
 buttonBackImg.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1);
     shape.scaleY(1);
     layer.draw();
   });
 
 
 buttonBackImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
     
     window.location = ("index.jsp");
          



   });
 

 
 
 buttonBackImg.on('mouseover', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.opacity(2);
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
 });
 buttonBackImg.on('mouseout', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'default';
     shape.opacity(0.8);
     shape.scaleX(1);
     shape.scaleY(1);
     layer.draw();
 });
 
 var background = new Konva.Layer();
 
 function drawBackground(backgroun, text) {
     var context = background.getContext();
     context.setAttr('font', '50pt Calibri');
     context.setAttr('textAlign', 'center');
     context.setAttr('fillStyle', 'white');
     context.fillText(text, background.getStage().getWidth() / 2, 70);
 }
 stage.add(background);
 
 drawBackground(background, '¿Cómo jugar?');
 
 
 var messageLayer = new Konva.Layer();
 
 var text = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 100,
     fontFamily: 'Calibri',
     fontSize: 35,
     text: '',
     fill: 'white',
 });
 function writeMessage(message) {
     text.setText(message);
     text.align('center');
     messageLayer.draw();
 }
 
 writeMessage('Para poder comenzar a jugar en la pantalla de inicio deberás introducir tu nombre de usuario y dar al botón "play".');
 messageLayer.add(text);
 stage.add(messageLayer);
 
 
 var messageLayer2 = new Konva.Layer();
 
 var text2 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 180,
     fontFamily: 'Calibri',
     fontSize: 35,
     text: '',
     fill: 'white',
 });
 function writeMessage2(message2) {
     text2.setText(message2);
     text2.align('center');
     messageLayer2.draw();
 }
 
 writeMessage2('Podrás seleccionar dos juegos:  el primero tendrás que ordenar correctamente unas secuencias sobre acciones cotidianas, y el segundo tendrás que ordenar los muebles de un dormitorio, para después responder a unas preguntas sobre los muebles.');
 messageLayer2.add(text2);
 stage.add(messageLayer2);
 
 var messageLayer3 = new Konva.Layer();
 
 var text3 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 330,
     fontFamily: 'Calibri',
     fontSize: 35,
     text: '',
     fill: 'white',
 });
 function writeMessage3(message3) {
     text3.setText(message3);
     text3.align('center');
     messageLayer3.draw();
 }
 
 writeMessage3('Antes de comenzar cada juego tendrás nuevas instrucciones específicas. Ahora vuelve a la pantalla inicial, introduce tu nombre de usuario y... BUENA SUERTE!');
 messageLayer3.add(text3);
 stage.add(messageLayer3);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 