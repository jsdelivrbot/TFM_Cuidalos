/**
 * 
 */
//var width = window.innerWidth;
 //var height = window.innerHeight;
var width = 1064;
 var height = 600;
 
 
 var stage = new Konva.Stage({
     container: 'container',
     width: width,
     height: height
   });
 
 
 var layer = new Konva.Layer();
 stage.add(layer);
 
 var messageLayer = new Konva.Layer();
 stage.add(messageLayer);
 
 var handsLayer = new Konva.Layer();
 stage.add(handsLayer);

 var handsImg = new Konva.Image({
	 image: imageHands,
	 x: stage.getWidth() / 2.7,
     y: stage.getHeight() / 3.2,
     width: 343-70,
     height: 274-70,
     draggable: false
 });
 
 var imageHands = new Image();
 imageHands.onload = function() {
	 handsImg.image(imageHands); 
     handsLayer.draw();
 };
 imageHands.src = 'images/hands.png';
 
 
 handsLayer.add(handsImg);
 stage.add(handsLayer);
 
 
 
 
 
 var simpleText = new Konva.Text({
     x: stage.getWidth() / 2,
     y: 100,
     text: '¡Cuídalos!',
     fontSize: 80,
     fontFamily: 'Calibri',
     fill: 'black'
   });
 
 simpleText.setOffset({
     x: simpleText.getWidth() / 2
   });
 messageLayer.add(simpleText);
 
 stage.add(messageLayer);
 
 var buttonPlayImg = new Konva.Image({
	 image: imageObj1,
	 x: stage.getWidth() / 2.2,
     y: stage.getHeight() / 1.5,
     width: 640-550,
     height: 637-550,
     opacity: 0.5,
     draggable: false,
     id: 'play'
 });

 
 layer.add(buttonPlayImg);
 
 var buttonHelpImg = new Konva.Image({
	 image: imageObj2,
	 x: stage.getWidth() / 1.1,
     y: stage.getHeight() / 1.15,
     width: 640-580,
     height: 640-580,
     opacity: 0.5,
     draggable: false,
     id: 'help'
 });
 
 

 layer.add(buttonHelpImg);
 
 /*
 var buttonSalirImg = new Konva.Image({
	 image: imageObj3,
	 x: stage.getWidth() / 2*0.5,
     y: stage.getHeight() / 1.8,
     width: 180-65,
     height: 137-50,
     offset : {
         x : 100,
         y : 68
     },
     opacity: 0.5,
     draggable: false,
     id: 'quit'
 });
 
 

 layer.add(buttonSalirImg);
 
 
 */
 
 var imageObj1 = new Image();
 imageObj1.onload = function() {
	 buttonPlayImg.image(imageObj1); 
     layer.draw();
 };
 imageObj1.src = 'images/boton_play.png';
 imageObj1.id = 'play';
 
 var imageObj2 = new Image();
 imageObj2.onload = function() {
	 buttonHelpImg.image(imageObj2); 
     layer.draw();
 };
 
 imageObj2.src = 'images/boton_ayuda.png';
 
 /*
 var imageObj3 = new Image();
 imageObj3.onload = function() {
	 buttonSalirImg.image(imageObj3); 
     layer.draw();
 };
 
 imageObj3.src = 'images/boton_salir.png';
 */

 
 /**
  * 

 layer.on('mouseout', function() {
     this.opacity(1);
     layer.draw();
 });
 layer.on('mouseover', function() {
     this.opacity(2);
     layer.draw();
 });

  */
 
 layer.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1);
     shape.scaleY(1);
     layer.draw();
   });
 
 
 buttonPlayImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
     
     document.forms[0].submit();


   });
 
 buttonHelpImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
     
    	window.location = ("help.jsp");
          



   });
 /*
 buttonSalirImg.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
     
    	window.close();
          



   });
 
*/
 
 layer.on('mouseover', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.opacity(2);
     shape.scaleX(1.2);
     shape.scaleY(1.2);
     layer.draw();
 });
 layer.on('mouseout', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'default';
     shape.opacity(0.5);
     shape.scaleX(1);
     shape.scaleY(1);
     layer.draw();
 });
 
 
 