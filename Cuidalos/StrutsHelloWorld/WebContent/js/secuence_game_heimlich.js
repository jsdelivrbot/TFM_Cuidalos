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
    function drawBackground(background, backImg, text) {
        var context = background.getContext();
        context.drawImage(backImg, 0, 0);
        context.setAttr('font', '20pt Calibri');
        context.setAttr('textAlign', 'center');
        context.setAttr('fillStyle', 'white');
        context.fillText(text, background.getStage().getWidth() / 2, 40);
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
        	width: 1064,
        	//x: 500,
        	y: 500,
            fontFamily: 'Calibri',
            fontSize: 40,
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
            sec1: {
                x: 10,
                y: 70
            },
            sec2: {
                x: 760,
                y: 70
            },
            sec3: {
                x: 510,
                y: 70
            },
            sec4: {
                x: 260,
                y: 70
            },
            sec5: {
                x: 135,
                y: 70
            },
            sec6: {
                x: 635,
                y: 70
            },
            sec7: {
                x: 385,
                y: 70
            }
            
            
        };

        var outlines = {
            sec1_white: {
                x: 200-80,
                y: 250-20
            },
            sec2_white: {
            	x: 450-80,
                y: 250-20
            },
            sec3_white: {
                x: 700-80,
                y: 250-20
            },
            sec4_white: {
            	x: 950-80,
                y: 250-20
            },
            sec5_white: {
            	x: 325-80,
                y: 500-130
            },
            sec6_white: {
                x: 575-80,
                y: 500-130
            },
            sec7_white: {
            	x: 825-80,
                y: 500-130
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
                        //document.forms[0].submit();
                        switch(privKey)
                        {
                        	case 'sec1':
                        		writeMessage('¡Correcto! Primero hay que comprobar que se ha quedado el trozo de comida o cuerpo extraño atascado.');
                        		break;
                        	case 'sec2':
                        		writeMessage('¡Correcto! Una vez comprobado, nos colocamos detrás de la víctima.');
                        		break;
                        	case 'sec3':
                        		writeMessage('¡Correcto! Colocamos nuestros brazos alrededor de la víctima, con un puño a la altura del abdomen.');
                        		break;
                        	case 'sec4':
                        		writeMessage('¡Correcto! Con la mano libre cogemos el puño, teniendo a la víctima abrazada.');
                        		break;
                        	case 'sec5':
                        		writeMessage('¡Correcto! Abrazamos fuertemente a la víctima, haciendo fuerza con las manos en el abdomen.');
                        		break;
                        	case 'sec6':
                        		writeMessage('¡Correcto! Después se vuelve a la posición inicial, volviendo a realizar el paso anterior las veces que sea necesario.');
                        		break;
                        	case 'sec7':
                        		writeMessage('¡Correcto! Cuando veamos que la víctima expulsa el trozo de comida o cuerpo extraño, calmamos a la víctima.');
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
                        	document.getElementById('guardar_heimlich_tiempo').value = ((end.getTime()-start.getTime())/1000);
                        	document.getElementById('guardar_heimlich_orden').value = orden;
                        	document.getElementById('guardar_heimlich_error').value = error;
                        	setTimeout(function(){ document.forms[0].submit(); }, 6000);
                        	//window.location = ("../html/score_secuence.html");
                        }

                        // disable drag and drop
                        setTimeout(function() {
                            picture.draggable(false);
                        }, 50);
                    }
                    else{
                    	for(var key2 in pictures) {

                            var outline2 = outlines[key2 + '_white'];

                            if(privKey != key2 && isNearOutline(picture, outline2)) {

                                error++;

                                writeMessage('¡Incorrecto!');

                                setTimeout(function(){writeMessage(' ')}, 2000);

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

        drawBackground(background, images.tap, '¡Pon las imágenes en el orden correcto!');
    }

    var sources = {
        tap: 'images/fondo_secuencias.png',
        sec1: 'images/secuencia_heimlich_1.png',
        sec1_glow: 'images/secuencia_heimlich_borde_1.png',
        sec1_white: 'images/panel_blanco_secuencia_1.png',
        sec2: 'images/secuencia_heimlich_2.png',
        sec2_glow: 'images/secuencia_heimlich_borde_2.png',
        sec2_white: 'images/panel_blanco_secuencia_2.png',
        sec3: 'images/secuencia_heimlich_3.png',
        sec3_glow: 'images/secuencia_heimlich_borde_3.png',
        sec3_white: 'images/panel_blanco_secuencia_3.png',
        sec4: 'images/secuencia_heimlich_4.png',
        sec4_glow: 'images/secuencia_heimlich_borde_4.png',
        sec4_white: 'images/panel_blanco_secuencia_4.png',
        sec5: 'images/secuencia_heimlich_5.png',
        sec5_glow: 'images/secuencia_heimlich_borde_5.png',
        sec5_white: 'images/panel_blanco_secuencia_5.png',
        sec6: 'images/secuencia_heimlich_6.png',
        sec6_glow: 'images/secuencia_heimlich_borde_6.png',
        sec6_white: 'images/panel_blanco_secuencia_6.png',
        sec7: 'images/secuencia_heimlich_7.png',
        sec7_glow: 'images/secuencia_heimlich_borde_7.png',
        sec7_white: 'images/panel_blanco_secuencia_7.png'
    };
    loadImages(sources, initStage);   
    
    
    function setDraggable(b) {
    	for(var shape2 in picturesShapes) {
    		if(picturesShapes[shape2].inRightPlace == false){
    			picturesShapes[shape2].draggable(b);
    		}
    		
    	}
    }