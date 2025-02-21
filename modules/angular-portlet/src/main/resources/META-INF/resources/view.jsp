<!-- <%@ include file="/init.jsp" %>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<div id="angular-root"></div>
<script src="${themeDisplay.getCDNBaseURL()}/o/angular-portlet/main.js"></script> -->

<%@ include file="/init.jsp" %>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<div id="angular-root"></div>

<script>
  fetch('${themeDisplay.getCDNBaseURL()}/o/angular-portlet/browser/assets/manifest.json')
    .then(response => response.json())
    .then(data => {
      const script = document.createElement('script');
      script.src = '${themeDisplay.getCDNBaseURL()}/o/angular-portlet/browser/' + data.main;
      document.body.appendChild(script);
    })
    .catch(error => console.error('Error loading manifest:', error));
</script>
