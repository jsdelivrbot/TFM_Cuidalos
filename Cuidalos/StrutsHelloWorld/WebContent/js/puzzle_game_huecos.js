//var width = window.innerWidth;
 //var height = window.innerHeight;
var width = 1064;
 var height = 600;
 
 var leyendo = false;
 var picturesShapes = [];
    
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
    
    
    

   function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for(var src in sources) {
            numImages++;
        }
        for(var src in sources) {
            images[src] = new Image();
            images[src].onload = function() {
                if(++loadedImages >= numImages) {
                    callback(images);
                }
            };
            //images[src].src = assetDir + sources[src];
            images[src].src = sources[src];
        }
    }
    
    function isNearOutline(picture, outline) {
        var a = picture;
        var o = outline;
        var ax = a.getX();
        var ay = a.getY();

        if(ax > o.x - 20 && ax < o.x + 20 && ay > o.y - 20 && ay < o.y + 20) {
            return true;
        }
        else {
            return false;
        }
    }
    function drawBackground(background, backImg, habImg) {
        var context = background.getContext();
        context.drawImage(backImg, 0, 0);
        context.drawImage(habImg, 450, 40);
        //context.setAttr('font', '20pt Calibri');
        //context.setAttr('textAlign', 'center');
        //context.setAttr('fillStyle', 'white');
        context.fillText("", background.getStage().getWidth() / 2, 40);
    }
      
    
    
        
    function initStage(images) {
        var stage = new Konva.Stage({
            container: 'container',
            width: 1064,
            height: 600
        });
        var background = new Konva.Layer();
        var pictureLayer = new Konva.Layer();
        var messageLayer = new Konva.Layer();
        var score = 0;
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
        
        
        
        // image positions
        var pictures = {
        		
       		
            cama: {
                x: 900,
                y: 350
            },
            mesi: {
                x: 900,
                y: 250
            },
            sill: {
                x: 930,
                y: 160
            },
            escrit: {
                x: 310,
                y: 100
            },
            comod: {
                x: 350,
                y: 250
            },
            butac: {
                x: 300,
                y: 400
            },
            armar: {
                x: 890,
                y: 10
            }
            
            
        };
        

        var outlines = {
            cama_white: {
                x: 460,
                y: 52
            },
            mesi_white: {
            	x: 600,
                y: 52
            },
            sill_white: {
                x: 568,
                y: 423
            },
            escrit_white: {
            	x: 541,
                y: 476
            },
            comod_white: {
            	x: 462,
                y: 249
            },
            butac_white: {
                x: 688,
                y: 79
            },
            armar_white: {
            	x: 461,
                y: 350
            }
            
            
        };

        // create draggable pictures
        var cont = 0;
        var orden = [];
        var error = 0;
        for(var key in pictures) {
            // anonymous function to induce scope
            (function() {
                var privKey = key;
                var pict = pictures[key];

                var picture = new Konva.Image({
                    image: images[key],
                    x: pict.x,
                    y: pict.y,
                    draggable: true
                });
                
                picture.inRightPlace = false;
                
                picture.on('dragstart', function() {
                    this.moveToTop();
                    pictureLayer.draw();
                });
                /*
                       * check if picture is in the right spot and
                       * snap into place if it is
                       */
                picture.on('dragend', function() {
                    var outline = outlines[privKey + '_white'];
                    if(!picture.inRightPlace && isNearOutline(picture, outline)) {
                        picture.position({
                            x : outline.x,
                            y : outline.y
                        });
                        //alert(privKey);
                        switch(privKey)
                        {
                        	case 'cama':
                        		writeMessage('¡Correcto! La cama en esta posición sólo hay un sitio por el que se podría caer la persona, en el cual se puede poner una barrera para evitar las caídas.');
                        		break;
                        	case 'mesi':
                        		writeMessage('¡Correcto! La mesita tiene que estar cerca de la cama para que la persona pueda acceder a ella fácilmente. Los bordes tienen que ser redondeados al igual que los pomos de los cajones para que no se pueda hacer una herida por el roce.');
                        		break;
                        	case 'sill':
                        		writeMessage('¡Correcto! Una silla cómoda pero que le haga estar en la posición correcta. Evitar sillas con ruedas, ya que pueden provocar caídas a la hora de sentarse.');
                        		break;
                        	case 'escrit':
                        		writeMessage('¡Correcto! El escritorio tiene que encontrarse bien iluminado, además de tener espacio suficiente para poder tener las piernas debajo del escritorio sin incomodidades. Los bordes también es recomendable tenerlos redondeados.');
                        		break;
                        	case 'comod':
                        		writeMessage('¡Correcto! La cómoda tiene que estar en un sitio accesible, con todos los cajones a una altura a la que la persona pueda acceder, o por lo menos que los objetos que vaya a utilizar se encuentren en los cajones que pueda acceder. Los pomos tienen que ser redondeados para no sufrir heridas.');
                        		break;
                        	case 'butac':
                        		writeMessage('¡Correcto! La butaca tiene que tener ciertas características para que la persona se pueda sentar y levantar sin ningún problema. Recomendable ponerlo en un sitio con luminosidad para que pueda ser un sitio de lectura, por ejemplo.');
                        		break;
                        	case 'armar':
                        		writeMessage('¡Correcto! El armario tiene que tener puertas fáciles de abrir, evitando llaves que cierren las puertas. Por dentro la barra de perchas a una altura a la que pueda acceder la persona, al igual que los cajones, ya que todos los que contengan objetos que diariamente utiliza la persona tienen que estar a una altura adecuada. Los pomos tienen que ser redondeados para evitar heridas.');
                        		break;
                        }
                        
                        
                        leyendo = true;
                        setDraggable(false);
                        setTimeout(function(){writeMessage(' '); leyendo = false; setDraggable(true);}, 6000);
                        
                        
                        
                        orden[cont] = privKey;
                        cont++;
                        picture.inRightPlace = true;
                        if(++score >= 7) {
                            //var text = 'You win!';
                            //drawBackground(background, images.tap, text);
                        	endTime();
                        	//alert((end.getTime()-start.getTime())/1000);
                        	//alert(orden);
                        	//alert(error);
                        	document.getElementById('guardar_huecos_tiempo').value = ((end.getTime()-start.getTime())/1000);
                        	document.getElementById('guardar_huecos_orden').value = orden;
                        	document.getElementById('guardar_huecos_error').value = error;
                        	setTimeout(function(){ document.forms[0].submit(); }, 6000);
                        	
                            //window.location = ("../html/score_puzzle.html");
                        }

                        // disable drag and drop
                        setTimeout(function() {
                            picture.draggable(false);
                        }, 50);
                    }
                    else{
                    	for(var key2 in pictures){
                    		var outline2 = outlines[key2 + '_white'];
                    		if(privKey != key2 && isNearOutline(picture, outline2)) {
                    			error++;
                    			writeMessage('¡Incorrecto!');
                    			setTimeout(function() {writeMessage("")},2000);
                    		}
                    	}
                    	
                    }
                });
                // make picture glow on mouseover
                picture.on('mouseover', function() {
                    picture.image(images[privKey + '_glow']);
                    pictureLayer.draw();
                    document.body.style.cursor = 'pointer';

                    //writeMessage(' ');
                });
                // return picture on mouseout
                picture.on('mouseout', function() {
                    picture.image(images[privKey]);
                    pictureLayer.draw();
                    document.body.style.cursor = 'default';
                });

                picture.on('dragmove', function() {
                    document.body.style.cursor = 'pointer';
                });

                pictureLayer.add(picture);
                picturesShapes.push(picture);
                messageLayer.add(text);
            })();
        }

        // create picture outlines
        for(var key in outlines) {
            // anonymous function to induce scope
            (function() {
                var imageObj = images[key];
                var out = outlines[key];

                var outline = new Konva.Image({
                    image: imageObj,
                    x: out.x,
                    y: out.y
                });

                pictureLayer.add(outline);
            })();
        }
        
        stage.add(background);
        stage.add(pictureLayer);
        stage.add(messageLayer);

        drawBackground(background, images.tap, images.hab);
    }

    var sources = {
        tap: 'images/fondo_secuencias.png',
        hab: 'images/habitacion_amueblada.png',
        cama: 'images/cama.png',
        cama_glow: 'images/cama_borde.png',
        cama_white: 'images/cama_black.png',
        mesi: 'images/mesita.png',
        mesi_glow: 'images/mesita_borde.png',
        mesi_white: 'images/mesita_black.png',
        sill: 'images/silla.png',
        sill_glow: 'images/silla_borde.png',
        sill_white: 'images/silla_black.png',
        escrit: 'images/escritorio.png',
        escrit_glow: 'images/escritorio_borde.png',
        escrit_white: 'images/escritorio_black.png',
        comod: 'images/comoda.png',
        comod_glow: 'images/comoda_borde.png',
        comod_white: 'images/comoda_black.png',
        butac: 'images/butaca.png',
        butac_glow: 'images/butaca_borde.png',
        butac_white: 'images/butaca_black.png',
        armar: 'images/armario.png',
        armar_glow: 'images/armario_borde.png',
        armar_white: 'images/armario_black.png'
    };
    loadImages(sources, initStage);   
    
    
    function setDraggable(b) {
    	for(var shape2 in picturesShapes) {
    		if(picturesShapes[shape2].inRightPlace == false){
    			picturesShapes[shape2].draggable(b);
    		}
    		
    	}
    }