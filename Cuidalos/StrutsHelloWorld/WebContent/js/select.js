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

 
 
 
 var buttonSequence = new Konva.Image({
	 image: imageObj1,
	 x: stage.getWidth() / 4.5,
     y: stage.getHeight() / 2.7,
     width: 256-80,
     height: 197-80,
     opacity: 0.5,
     draggable: false,
     id: 'sequence'
 });

 
 layer.add(buttonSequence);
 
 var buttonPuzzle = new Konva.Image({
	 image: imageObj2,
	 x: stage.getWidth() / 1.6,
     y: stage.getHeight() / 2.7,
     width: 256-80,
     height: 197-80,
     opacity: 0.5,
     draggable: false,
     id: 'puzzle'
 });
 
 layer.add(buttonPuzzle);
 
 var imageObj1 = new Image();
 imageObj1.onload = function() {
	 buttonSequence.image(imageObj1); 
     layer.draw();
 };
 imageObj1.src = 'images/secuencia_logo.png';

 
 var imageObj2 = new Image();
 imageObj2.onload = function() {
	 buttonPuzzle.image(imageObj2); 
     layer.draw();
 };
 
 imageObj2.src = 'images/puzzle_logo.png';
 
 
 
 buttonSequence.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     //shape.scaleX(1);
     //shape.scaleY(1);
     layer.draw();
   });
 
 buttonPuzzle.on('mousedown', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     //shape.scaleX(1);
     //shape.scaleY(1);
     layer.draw();
   });
 
 
 buttonSequence.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     //shape.scaleX(1.2);
     //shape.scaleY(1.2);
     layer.draw();
     
     //window.open('http://www.elcorreo.com');
     window.location = ("helpSec.jsp");   



   });
 
 buttonPuzzle.on('mouseup', function(evt) {
	 var shape = evt.target;
     document.body.style.cursor = 'pointer';
     //shape.scaleX(1.2);
     //shape.scaleY(1.2);
     layer.draw();
     
    	
     window.location = ("helpPuzzle.jsp");
          



   });
 
 
 
 
 buttonPuzzle.on('mouseover', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.opacity(2);
     //shape.scaleX(1.2);
     //shape.scaleY(1.2);
     layer.draw();
 });
 buttonPuzzle.on('mouseout', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'default';
     shape.opacity(0.5);
     //shape.scaleX(1);
     //shape.scaleY(1);
     layer.draw();
 });
 
 
 buttonSequence.on('mouseover', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'pointer';
     shape.opacity(2);
     //shape.scaleX(1.2);
     //shape.scaleY(1.2);
     layer.draw();
 });
 buttonSequence.on('mouseout', function(evt) {
     var shape = evt.target;
     document.body.style.cursor = 'default';
     shape.opacity(0.5);
     //shape.scaleX(1);
     //shape.scaleY(1);
     layer.draw();
 });
 
 
 
 var sequenceText = new Konva.Text({
	 x: stage.getWidth() / 4.2,
     y: stage.getHeight() / 1.73,
     text: 'Secuencias',
     fontSize: 30,
     fontFamily: 'Calibri',
     fill: 'black'
   });
 
 
 var puzzleText = new Konva.Text({
     x: stage.getWidth() / 1.5,
     y: stage.getHeight() / 1.73,
     text: 'Puzzle',
     fontSize: 30,
     fontFamily: 'Calibri',
     fill: 'black'
   });
 
 layer.add(sequenceText);
 layer.add(puzzleText);
 
 
 
 
 