
//var width = window.innerWidth;
 //var height = window.innerHeight;
var width = 1064;
 var height = 600;
 
 var resp_correctas = 0;
 var resp_incorrectas = 0;
 var respuestas = ["z","z","z","z","z","z","z","z","z","z","z","z"];

 
 
 var shapesCorrect = new Konva.Layer();
 var shapesIncorrect = new Konva.Layer();
 
 var shapeCama;
 var shapeMesita;
 var shapeInterruptor;
 var shapeRadiador;
 var shapeButaca;
 var shapeComoda;
 var shapeLamparaTecho;
 var shapeArmario;
 var shapeSilla;
 var shapeEscritorio;
 var shapeLamparaPared;
 var shapePuerta;
 
 
 var start;
 var end;
 function startTime() {
 	start = new Date();
 	//document.getElementById("start").innerHTML = start;
 }
 
 function endTime() {
 	end = new Date();
 	//document.getElementById("end").innerHTML = end;
 }
 
 startTime();
 
 var blob;
 
 function ocultarDiv(id){
	 var resultado;
	 var busca=document.getElementsByName("respu"+id);
	 /*
	  * Array
	  * 1 --> Cama --> b
	  * 2 --> Mesita --> b
	  * 3 --> Interruptor --> a
	  * 4 --> Radiador --> c
	  * 5 --> Butaca --> b
	  * 6 --> Comoda --> a
	  * 7 --> Lampara Techo --> c
	  * 8 --> Armario --> c
	  * 9 --> Silla --> b
	  * 10 --> Escritorio --> a
	  * 11 --> Lampara Pared --> c
	  * 12 --> Puerta --> b
	  */
	 var correct = ["b", "b", "a", "c", "b", "a", "c", "c", "b", "a", "c", "b"];
	 var objetos = ["Cama", "Mesita", "Interruptor", "Radiador", "Butaca", "Comoda", "LamparaTecho", "Armario", "Silla", "Escritorio", "LamparaPared", "Puerta"]
	 for (var s=0;s<objetos.length;s++)
	{
		 if(objetos[s]==id)
			 numIndice = s;
	}
     
	 for(var i=0;i<busca.length;i++)
     {
         if(busca[i].checked)
        {
             resultado=busca[i].value;
             if(respuestas[numIndice]=='z')
         	{
            	 respuestas[numIndice] = resultado;


            		 	
            		 	
            		 	switch(id)
                        {
                        	case 'Cama':
                        		if(resultado == correct[numIndice])
                                {
                        			shapeCama.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! La cama en esta posición sólo hay un sitio por el que se podría caer la persona, en el cual se puede poner una barrera para evitar las caídas.');
                                }else {
                                	writeMessage('¡Incorrecto!');
                                	resp_incorrectas = resp_incorrectas+1;
                                	shapeCama.attrs.fill = 'red';
                                }
                        		
                        		shapeCama.setOpacity(0.5);
                        		shapeCama.attrs.name = "";
                        		break;
                        	case 'Mesita':
                        		if(resultado == correct[numIndice])
                                {
                        			shapeMesita.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Es importante que no se pueda caer el cajón para evitar accidentes, y también el que no tengan que realizar fuerza para poder acceder al interior del cajón.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeMesita.attrs.fill = 'red';
		                        }
                        		shapeMesita.setOpacity(0.5);
                        		shapeMesita.attrs.name = "";

                        		break;
                        	case 'Interruptor':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeInterruptor.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Tiene que ser lo más vistoso posible y accesible para que la persona pueda encender y apagar la luz.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeInterruptor.attrs.fill = 'red';
		                        }
                        		shapeInterruptor.setOpacity(0.5);
                        		shapeInterruptor.attrs.name = "";

                        		break;
                        	case 'Radiador':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeRadiador.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! La temperatura aconsejable se encuentra entre los 24ºC y 26ºC, siendo importante evitar las corrientes de aire que pueden provocar resfriados.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeRadiador.attrs.fill = 'red';
		                        }
                        		shapeRadiador.setOpacity(0.5);
                        		shapeRadiador.attrs.name = "";

                        		break;
                        	case 'Butaca':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeButaca.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Aunque lo normal sea no mover la butaca una vez bien colocada, siempre tiene que existir la posibilidad de moverla por si surge algún cambio en el dormitorio.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeButaca.attrs.fill = 'red';
		                        }
                        		shapeButaca.setOpacity(0.5);
                        		shapeButaca.attrs.name = "";

                        		break;
                        	case 'Comoda':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeComoda.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Correcto, no sólo hay que tener en cuenta el peso del mueble y la posibilidad de que se abran los cajones que estén separados de la estructura, sino hay que pensar también en el apoyo de una persona encima.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeComoda.attrs.fill = 'red';
		                        }
                        		shapeComoda.setOpacity(0.5);
                        		shapeComoda.attrs.name = "";

                        		break;
                        	case 'LamparaTecho':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeLamparaTecho.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Por eso una de las opciones será colocar un interruptor de graduación para ajustar el nivel de luz a cada necesidad.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeLamparaTecho.attrs.fill = 'red';
		                        }
                        		shapeLamparaTecho.setOpacity(0.5);
                        		shapeLamparaTecho.attrs.name = "";

                        		break;
                        	case 'Armario':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeArmario.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Las puertas adecuadas son las batientes, aunque ocupen más espacio se evita el riesgo de golpes o que se puedan pillar la mano. Se tiene que separar la parte de colgar la ropa con la parte de estantes y cajones, facilitando el acceso a la barra que puede estar a una altura media.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeArmario.attrs.fill = 'red';
		                        }
                        		shapeArmario.setOpacity(0.5);
                        		shapeArmario.attrs.name = "";

                        		break;
                        	case 'Silla':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeSilla.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! De esta manera se evita el que se mueva la silla al sentarse, pero para arrastrarla no se requiere esfuerzo.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeSilla.attrs.fill = 'red';
		                        }
                        		shapeSilla.setOpacity(0.5);
                        		shapeSilla.attrs.name = "";

                        		break;
                        	case 'Escritorio':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeEscritorio.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Además también hay que tener encuenta el que no existan cajones en medio que impidan el acceso de una posible silla de ruedas.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeEscritorio.attrs.fill = 'red';
		                        }
                        		shapeEscritorio.setOpacity(0.5);
                        		shapeEscritorio.attrs.name = "";

                        		break;
                        	case 'LamparaPared':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapeLamparaPared.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Se llama luz de día siendo la más natural. La amarilla cansa la vista y los tubos fluorescentes parpadean y pueden causar cansancio en la vista.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapeLamparaPared.attrs.fill = 'red';
		                        }
                        		shapeLamparaPared.setOpacity(0.5);
                        		shapeLamparaPared.attrs.name = "";

                        		break;
                        	case 'Puerta':
                        		
                        		if(resultado == correct[numIndice])
                                {
                        			shapePuerta.attrs.fill = 'green';
                        			resp_correctas = resp_correctas+1; 
                        			writeMessage('¡Correcto! Estas son las dimensiones mínimas que se exigen para garantizar la accesibilidad al dormitorio.');
		                        }else {
		                        	writeMessage('¡Incorrecto!');
		                        	resp_incorrectas = resp_incorrectas+1;
		                        	shapePuerta.attrs.fill = 'red';
		                        }
                        		shapePuerta.setOpacity(0.5);
                        		shapePuerta.attrs.name = "";

                          		
                        		break;
                        }
            		 	shapesLayer.draw();
            		 		
         	}
         	
        }
         
         
     }
	 var numZ = 0;
	 for (var r=0;r<respuestas.length;r++)
		{
		 
			 if(respuestas[r]!='z')
			{
				 numZ++;
			}
			 if(numZ==12)
			{
				 
				 document.getElementById('guardar_respuestas_respuestas').value = respuestas;
				 document.getElementById('guardar_respuestas_resp_correctas').value = resp_correctas;
				 document.getElementById('guardar_respuestas_resp_incorrectas').value = resp_incorrectas;
				 document.forms[0].submit();
			}
		}
	 
 	document.getElementById('question'+id).style.display='none';

 }

function getData() {
        return {
            'Cama': {
                color: 'blue',
                points: [560, 54, 697, 54, 697, 245, 560, 245, 560, 54]
            },
            
            'Mesita': {
        		color: 'green',
        		points: [700, 53, 743, 53, 743, 95, 700, 95, 700, 53]
        	},

            'Interruptor': {
        		color: 'white',
        		points: [700, 53, 720, 53, 720, 63, 700, 63, 700, 53]
        	},
        	
        	'Radiador': {
        		color: 'red',
        		points: [771, 55, 880, 55, 880, 70, 771, 70, 771, 55]
        	},
        	
        	'Butaca': {
        		color: 'brown',
        		points: [788, 160, 827, 78, 900, 114, 865, 195, 788, 160]
        	},
        	
        	'Comoda': {
        		color: 'purple',
        		points: [560, 250, 610, 250, 610, 345, 560, 345, 560, 250]
        	},
        	
        	'Armario': {
        		color: 'yellow',
        		points: [560, 353, 615, 353, 615, 477, 560, 477, 560, 353]
        	},
        	
        	'Silla': {
        		color: 'pink',
        		points: [670, 425, 715, 425, 715, 470, 670, 470, 670, 425]
        	},
        	
        	'Escritorio': {
        		color: 'black',
        		points: [640, 478, 745, 478, 745, 532, 640, 532, 640, 478]
        	},
        	
        	'LamparaPared': {
        		color: 'orange',
        		points: [680, 508, 695, 508, 695, 532, 680, 532, 680, 508]
        	},
        	
        	'Puerta': {
        		color: 'violet',
        		points: [785, 480, 900, 480, 900, 540, 785, 540, 785, 480]
        	},
        	
        	'LamparaTecho': {
        		color: 'grey',
        		points: [705, 260, 780, 260, 780, 340, 705, 340, 705, 260]
        	}
        	


        };
    }
    function updateTooltip(tooltip, x, y, text) {
        tooltip.getText().setText(text);
        tooltip.setPosition({
            x : x,
            y : y
        });
        tooltip.show();
    }
    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });
    
    

    
    var layer = new Konva.Layer();
    var shapesLayer = new Konva.Layer();
    var tooltipLayer = new Konva.Layer();
    var messageLayer = new Konva.Layer();
    


    
    
    var text = new Konva.Text({
    	width: 440,
    	//x: 500,
    	y: 120,
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
    
    
    messageLayer.add(text);
    
    

    var tooltip = new Konva.Label({
        opacity: 0.75,
        visible: false,
        listening: false
    });

    tooltip.add(new Konva.Tag({
        fill: 'black',
        pointerDirection: 'down',
        pointerWidth: 10,
        pointerHeight: 10,
        lineJoin: 'round',
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: 10,
        shadowOpacity: 0.5
    }));

    tooltip.add(new Konva.Text({
        text: '',
        fontFamily: 'Calibri',
        fontSize: 18,
        padding: 5,
        fill: 'white'
    }));

    tooltipLayer.add(tooltip);

    // get areas data
    var areas = getData();

    // draw areas
    for(var key in areas) {

        var area = areas[key];
        var points = area.points;
        if(key == "Cama"){
        	shapeCama = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeCama);
        } else if(key == "Mesita"){
        	shapeMesita = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeMesita);
        } else if(key == "Interruptor"){
        	shapeInterruptor = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeInterruptor);
        } else if(key == "Radiador"){
        	shapeRadiador = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeRadiador);
        } else if(key == "Butaca"){
        	shapeButaca = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeButaca);
        } else if(key == "Comoda"){
        	shapeComoda = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeComoda);
        } else if(key == "LamparaTecho"){
        	shapeLamparaTecho = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeLamparaTecho);
        } else if(key == "Armario"){
        	shapeArmario = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeArmario);
        } else if(key == "Silla"){
        	shapeSilla = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeSilla);
        } else if(key == "Escritorio"){
        	shapeEscritorio = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeEscritorio);
        } else if(key == "LamparaPared"){
        	shapeLamparaPared = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapeLamparaPared);
        } else if(key == "Puerta"){
        	shapePuerta = new Konva.Line({
	            points: points,
	            fill: area.color,
	            opacity: 0,
	            closed : true,
	            name: "tooltip",
	            // custom attr
	            key: key
	        });
        	shapesLayer.add(shapePuerta);
        }
        

        	
        		
		        

    }
    
    
    
    
    
    stage.add(layer);
    stage.add(shapesLayer);
    stage.add(tooltipLayer);
    stage.add(messageLayer);



    
    var habitacion = new Konva.Image({
    	image: imageObj1, 
    	x: 550,
           y: 40,
           draggable: false,

       });
    var imageObj1 = new Image();
    imageObj1.onload = function() {
   	 habitacion.image(imageObj1); 
        layer.draw();
    };
    imageObj1.src = 'images/habitacion_completa.png';
       
       layer.add(habitacion);

    stage.on('mouseover', function(evt) {
        var shape = evt.target;
        if (shape) {
	        if (shape.attrs.name == "tooltip") {
	    	    shape.setOpacity(0.5);
	            shapesLayer.draw();
	        }
        }
    });
    stage.on('mouseout', function(evt) {
        var shape = evt.target;
        if (shape) {
        	if (shape.attrs.name == "tooltip") {
	            shape.setOpacity(0);
	            shapesLayer.draw();
	            tooltip.hide();
	            tooltipLayer.draw();
        	}
        }
    });
    
    stage.on('mouseup', function(evt) {
   	 var shape = evt.target;
   	if (shape) {
   		if(shape.attrs.name == "tooltip") {
   			document.getElementById('question'+evt.target.attrs.key).style.display='block';
   		}
    }
             



      });
    
    
    stage.on('mousemove', function(evt) {
        var shape = evt.target;
        if (shape) {
        	if (shape.attrs.name == "tooltip") {
	            var mousePos = stage.getPointerPosition();
	            var x = mousePos.x;
	            var y = mousePos.y - 5;
	            updateTooltip(tooltip, x, y, shape.attrs.key);
	            tooltipLayer.batchDraw();
        	}
        }
    });
    
    
    
    
