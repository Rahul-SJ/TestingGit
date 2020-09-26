function test(executionContext) {
   var formContext = executionContext.getFormContext();
   var cv = formContext.getAttribute("name").getValue();
   alert(cv);
 if (cv != null)
       {
       //var memName = cv[0].name;
       //alert(memName);
       //var memType = cv[0].entityType;
       //alert(memType);
       var viewId = "{00000000-0000-0000-0000-000100000001}"; // random Guid
       var entityName = "account";
       var viewDisplayName = "Custom Client Lookup View"; // guid
var fetchXml =  "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>"+
"  <entity name='account'>"+"    <attribute name='name' />"+"    <attribute name='primarycontactid' />"+"    <attribute name='telephone1' />"+
"    <attribute name='accountid' />"+"    <order attribute='name' descending='false' />"+
"    <filter type='and'>"+"      <condition attribute='name' operator='like' value='z%' />"+
"    </filter>"+"  </entity>"+"</fetch>"
alert(fetchXml);
var layoutXml = "<grid name='resultsets' " +
           "object='1' " +
           "jump='name' " +
           "select='1' " +
           "icon='1' " +
           "preview='1'>" +
           "<row name='result' " +
           "id='accountid'>" +
           "<cell name= 'name' " +
           "width='300' />" +
           "</row>" +
           "</grid>";
       alert(layoutXml);
formContext.getControl("new_testcustomview").addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, true);
	   }
}

"<div id='layoutXml' value='<grid name=&quot;resultset&quot; object=&quot;4230&quot; "+
"jump=&quot;name&quot; select=&quot;1&quot; icon=&quot;1&quot; preview=&quot;1&quot;"+
"><row name=&quot;result&quot; id=&quot;userqueryid&quot;><cell name=&quot;name&quot; "+
"width=&quot;300&quot; /><cell name=&quot;ownerid&quot; width=&quot;100&quot; "+
"/><cell name=&quot;modifiedon&quot; width=&quot;100&quot; /></row></grid>'></div>"
