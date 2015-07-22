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
     
     window.location = ("helpHeimlich.jsp");
          



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
     fontSize: 30,
     text: '',
     fill: 'white',
 });
 function writeMessage(message) {
     text.setText(message);
     text.align('center');
     messageLayer.draw();
 }
 
 writeMessage('Tienes que realizar tres tipos de secuencias: maniobra de Heimlich, cómo atender una caída y cómo curar una herida.');
 messageLayer.add(text);
 stage.add(messageLayer);
 
 
 var messageLayer2 = new Konva.Layer();
 
 var text2 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 180,
     fontFamily: 'Calibri',
     fontSize: 30,
     text: '',
     fill: 'white',
 });
 function writeMessage2(message2) {
     text2.setText(message2);
     text2.align('center');
     messageLayer2.draw();
 }
 
 writeMessage2('Aparecerán huecos en blanco, en los que tendrás que colocar las imágenes relacionadas con la acción en el orden correcto. Tienes que arrastrar cada imagen al hueco correcto. Una vez estén correctamente colocadas, no se podrán mover, además de que aparecerá un mensaje explicando la razón. Una vez que el ratón vuelva a estar sobre otra imagen, dicho mensaje desaparecerá.');
 messageLayer2.add(text2);
 stage.add(messageLayer2);
 
 var messageLayer3 = new Konva.Layer();
 
 var text3 = new Konva.Text({
 	width: 1064,
 	//x: 500,
 	y: 350,
     fontFamily: 'Calibri',
     fontSize: 30,
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
 	y: 420,
     fontFamily: 'Calibri',
     fontSize: 30,
     text: '',
     fill: 'white',
 });
 function writeMessage4(message4) {
     text4.setText(message4);
     text4.align('center');
     messageLayer4.draw();
 }
 
 writeMessage4('Antes de comenzar cada secuencia, tendrás información preliminar para poder hacer la secuencia. Cuando estés preparado, pulsa el botón para comenzar a jugar!');
 messageLayer4.add(text4);
 stage.add(messageLayer4);
 
 
 
 
 
 
 
 
 
 