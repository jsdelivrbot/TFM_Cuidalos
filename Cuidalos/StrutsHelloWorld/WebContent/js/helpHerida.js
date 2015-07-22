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
     
     window.location = ("secuence_herida.jsp");
          



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
 
 drawBackground(background, 'Cómo curar una herida');
 
 
 var messageLayer = new Konva.Layer();
 
 var text = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 100,
     fontFamily: 'Calibri',
     fontSize: 22,
     text: '',
     fill: 'white',
 });
 function writeMessage(message) {
     text.setText(message);
     text.align('center');
     messageLayer.draw();
 }
 
 writeMessage('Una herida es una lesión en la cual se interfiere la integridad de los tejidos blandos de la piel por ejemplo. Se producen a causa del contacto de agentes externos como pueden ser cuchillos o vidrios. En esta ocasión nos centraremos en las heridas externas, aprender a curarlas para no necesitar ir a un centro médico. Aunque si la herida fuese excesivamente sangrante o interfiriera en tejidos subcutáneos, tendones o nervios, lo mejor es recibir atención de especialistas.');
 messageLayer.add(text);
 stage.add(messageLayer);
 
 
 var messageLayer2 = new Konva.Layer();
 
 var text2 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 220,
     fontFamily: 'Calibri',
     fontSize: 22,
     text: '',
     fill: 'white',
 });
 function writeMessage2(message2) {
     text2.setText(message2);
     text2.align('center');
     messageLayer2.draw();
 }
 
 writeMessage2('Para poder curar una herida superficial hay que tener en cuenta los siguientes consejos. Hay que lavarse bien las manos con agua y jabón para poder tocar la herida, además de tener que utilizar guantes de látex antes de proceder a la cura. Es importante observar la herida, si está sucia, cuánto sangra, etc. También, antes de empezar con la cura, es aconsejable tener todos los utensilios del botiquín preparados para poder estar centrados curando la herida. Para curar la herida, es aconsejable realizar la limpieza desde el centro de la herida hacia el exterior, sin olvidarse de limpiar los bordes. También tendremos que retirar, si los hay, restos de suciedad con cuidado pero con precisión. En el caso de que exista hemorragia aplicar sobre la herida una gasa limpia y ejercer presión hasta que se corte. A la hora de secar la herida, hacerlo con palmaditas, sin frotar. Por último, si en el ambiente no existe riesgo de infección y la herida no es profunda, es conveniente dejarla al aire libre, para favorecer la cicatrización.');
 messageLayer2.add(text2);
 stage.add(messageLayer2);
 
 var messageLayer3 = new Konva.Layer();
 
 var text3 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 430,
     fontFamily: 'Calibri',
     fontSize: 23,
     text: '',
     fill: 'white',
 });
 function writeMessage3(message3) {
     text3.setText(message3);
     text3.align('center');
     messageLayer3.draw();
 }
 
 writeMessage3('En el siguiente link podrás ver los errores más frecuentes al curar una herida.');
 messageLayer3.add(text3);
 stage.add(messageLayer3);
 
 
 
 
 var buttonLinkImg = new Konva.Image({
	 image: imageObj2,
	 x: stage.getWidth() / 3.875,
     y: stage.getHeight() / 1.304,
     width: 518,
     height: 28,
     draggable: false
 });
 

 
 layer.add(buttonLinkImg);
 
 
 
 
 
 var imageObj2 = new Image();
 imageObj2.onload = function() {
	 buttonLinkImg.image(imageObj2); 
     layer.draw();
 };
 imageObj2.src = 'images/link_herida.png';

 
 
 
 buttonLinkImg.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     layer.draw();
   });
 
 
 buttonLinkImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     layer.draw();
     
     window.open("https://www.youtube.com/watch?v=_ctKn-ZvVx8");
          
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
var messageLayer4 = new Konva.Layer();
 
 var text4 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 460,
     fontFamily: 'Calibri',
     fontSize: 25,
     text: '',
     fill: 'white',
 });
 function writeMessage4(message4) {
     text4.setText(message4);
     text4.align('center');
     messageLayer4.draw();
 }
 

 writeMessage4("https://www.youtube.com/watch?v=_ctKn-ZvVx8");

 messageLayer4.add(text4);
 stage.add(messageLayer4);
 
 */
 
 
 
 
 
 
 
 