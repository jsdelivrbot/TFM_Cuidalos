<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.rawgit.com/konvajs/konva/0.9.5/konva.min.js"></script>
  <meta charset="utf-8">
  <title>Secuencia Herida</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  </style>
</head>
<body onload="javascript:resizeTo(1064,600)">
  <div id="container"></div>
  <script src="js/secuence_game_herida.js">  </script>
  
  <s:form action="guardar_herida.action" method="post">
	    <s:hidden name="tiempo" />
	    <s:hidden name="orden" />
	    <s:hidden name="error" />
	</s:form>

</body>
</html>