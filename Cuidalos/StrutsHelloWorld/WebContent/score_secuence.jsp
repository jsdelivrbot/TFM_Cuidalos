<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/gh/konvajs/konva@0.9.5/konva.min.js"></script>
  <meta charset="utf-8">
  <title>Score</title>
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
  <script type="text/javascript">
var error = <s:property value="error"/>;
var tiempo = <s:property value="tiempo"/>;
var orden = <s:property value="orden"/>;
</script>
  <script src="js/score_secuence.js">  </script>

	<s:hidden value="error"/>
	<s:hidden value="tiempo"/>
	<s:hidden value="orden"/>

</body>
</html>