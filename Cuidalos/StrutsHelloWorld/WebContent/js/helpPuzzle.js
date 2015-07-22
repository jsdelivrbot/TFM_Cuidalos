var width = 1064;
 var height = 600;
 
 
 var stage = new Konva.Stage({
     container: 'container',
     width: width,
     height: height
   });
 
 
 var layer = new Konva.Layer();
 stage.add(layer);

 
 
 
 var buttonNextImg = new Konva.Image({
	 image: imageObj1,
	 x: stage.getWidth() / 2.1,
     y: stage.getHeight() / 1.18,
     width: 75,
     height: 75,
     opacity: 0.5,
     draggable: false
 });
 

 
 layer.add(buttonNextImg);
 
 
 
 
 
 var imageObj1 = new Image();
 imageObj1.onload = function() {
	 buttonNextImg.image(imageObj1); 
     layer.draw();
 };
 imageObj1.src = 'images/boton_next.png';
 imageObj1.id = 'next';
 

 
 
 buttonNextImg.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1);
     shape.scaleY(1);
     layer.draw();
   });
 
 
 buttonNextImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
     
     window.location = ("puzzle_huecos.jsp");
          



   });
 

 
 
 buttonNextImg.on('mouseover', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.opacity(2);
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
 });
 buttonNextImg.on('mouseout', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'default';
     shape.opacity(0.5);
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
 
 drawBackground(background, 'Instrucciones');
 
 
 var messageLayer = new Konva.Layer();
 
 var text = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 100,
     fontFamily: 'Calibri',
     fontSize: 27,
     text: '',
     fill: 'white',
 });
 function writeMessage(message) {
     text.setText(message);
     text.align('center');
     messageLayer.draw();
 }
 
 writeMessage('Tienes que completar el puzzle, en el cual aparecerá un dormitorio sin ningún mueble, teniendo que ponerlos en la posición correcta para que la habitación esté preparada para una persona con dificultades.');
 messageLayer.add(text);
 stage.add(messageLayer);
 
 
 var messageLayer2 = new Konva.Layer();
 
 var text2 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 190,
     fontFamily: 'Calibri',
     fontSize: 27,
     text: '',
     fill: 'white',
 });
 function writeMessage2(message2) {
     text2.setText(message2);
     text2.align('center');
     messageLayer2.draw();
 }
 
 writeMessage2('Aparecerán huecos en negro vacíos. Alrededor del dormitorio se encuentran los muebles de dicho dormitorio. Tienes que arrastar cada uno de ellos para colocarlo en la posición correcta de la habitación. Una vez el objeto esté correctamente colocado, aparecerá un mensaje explicativo con la razón. Durante este mensaje no podrás seguir jugando para poder atender a la explicación. Después de 6 segundos, dicho mensaje desaparecerá.');
 messageLayer2.add(text2);
 stage.add(messageLayer2);
 
 var messageLayer3 = new Konva.Layer();
 
 var text3 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 330,
     fontFamily: 'Calibri',
     fontSize: 27,
     text: '',
     fill: 'white',
 });
 function writeMessage3(message3) {
     text3.setText(message3);
     text3.align('center');
     messageLayer3.draw();
 }
 
 writeMessage3('Se controlará el tiempo que has utilizado, el orden en el que has colocado las imágenes y los fallos cometidos.');
 messageLayer3.add(text3);
 stage.add(messageLayer3);
 
 
 
 
 
var messageLayer4 = new Konva.Layer();
 
 var text4 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 390,
     fontFamily: 'Calibri',
     fontSize: 27,
     text: '',
     fill: 'white',
 });
 function writeMessage4(message4) {
     text4.setText(message4);
     text4.align('center');
     messageLayer4.draw();
 }
 
 writeMessage4('Si quieres saber más, pulsa en el link que aparece debajo de estas líneas. Cuando estés preparado, pulsa el botón para comenzar a jugar!');
 messageLayer4.add(text4);
 stage.add(messageLayer4);
 

 var buttonLinkImg = new Konva.Image({
	 image: imageObj2,
	 x: stage.getWidth() / 2.635,
     y: stage.getHeight() / 1.335,
     width: 257,
     height: 30,
     draggable: false
 });
 

 

 
 layer.add(buttonLinkImg);
 
 
 
 
 
 var imageObj2 = new Image();
 imageObj2.onload = function() {
	 buttonLinkImg.image(imageObj2); 
     layer.draw();
 };
 imageObj2.src = 'images/link_hab.png';

 
 
 
 buttonLinkImg.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     layer.draw();
   });
 
 
 buttonLinkImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     layer.draw();
     
     window.open("http://bit.ly/1fmMH9l");
          
   });
 

 buttonLinkImg.on('mouseover', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'pointer';
     layer.draw();
 });
 buttonLinkImg.on('mouseout', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'default';
     layer.draw();
 });
 
 
 /*
 var messageLayer5 = new Konva.Layer();
  
  var text5 = new Konva.Text({
  	width: 1064,
  	//x: 500,
  	y: 450,
      fontFamily: 'Calibri',
      fontSize: 27,
      text: '',
      fill: 'white',
  });
  function writeMessage5(message5) {
      text5.setText(message5);
      text5.align('center');
      messageLayer5.draw();
  }
  

  writeMessage5("http://bit.ly/1fmMH9l");

  messageLayer5.add(text5);
  stage.add(messageLayer5);
  
  
 
*/
 
 
 
 
 