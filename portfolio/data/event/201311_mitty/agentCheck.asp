<%
agentN=request.querystring("agent")
if InStr(Request.ServerVariables("HTTP_HOST"),".1111.com.tw")>0 then
	Response.Cookies("agent").Domain = ".1111.com.tw"	'設定為網域cookie
end if
if len(agentN)>0 then
	if left(lcase(agentN),10)<>"13sp_mitty" and left(Ucase(agentN),4)<>"OUT_" then 
		response.cookies("agent")="13sp_mitty"	
		agentN="13sp_mitty"
	else	
		response.cookies("agent")=agentN
	end if		
else
	agentN=request.cookies("agent")
	if left(lcase(agentN),11)<>"13sp_mitty" and left(Ucase(agentN),4)<>"OUT_" then 
		response.cookies("agent")="13sp_mitty"
		agentN="13sp_mitty"
	end if	
end if

%>