window.showInformationOverlay=function(htmlContent,overlayWidth,zIndexVal){
    var maskid="infoMaskOverlay";
    var bodyid="infoBodyOverlay";
    var maskElement=document.getElementById(maskid);
    var overlayBodyElement=document.getElementById(bodyid);
    if(!document.getElementById(maskid)){
        maskElement=document.createElement("div");
        maskElement.id=maskid;
        maskElement.style.position="fixed";
        maskElement.style.top=maskElement.style.bottom=maskElement.style.left=maskElement.style.right="0px";
        maskElement.style.backgroundColor="#000";
        maskElement.style.opacity=0.75;
        maskElement.style.filter="alpha(opacity=75)";
        maskElement.style.visibility="visible";
        maskElement.style.display="none";
        document.getElementsByTagName("body")[0].appendChild(maskElement);
    }
    maskElement.style.zIndex=zIndexVal||9999;
    maskElement.style.display="block";
    if(!document.getElementById(bodyid)){
        overlayBodyElement=document.createElement("div");
        overlayBodyElement.id=bodyid;
        overlayBodyElement.style.position="fixed";
        overlayBodyElement.style.top="50%";
        overlayBodyElement.style.left="50%";
        overlayBodyElement.style.right=overlayBodyElement.style.bottom="auto";
        overlayBodyElement.style.backgroundColor="#fff";
        overlayBodyElement.style.visibility="visible";
        overlayBodyElement.style.display="none";
        overlayBodyElement.style.padding="0px";
        overlayBodyElement.style.borderRadius="10px";
        document.getElementsByTagName("body")[0].appendChild(overlayBodyElement);
        
        var wrapperDiv=document.createElement("div");
        wrapperDiv.id="infoWrapperDiv";
        wrapperDiv.style.margin="0px";
        wrapperDiv.style.padding="20px";
        document.getElementById(bodyid).appendChild(wrapperDiv);
    }
    overlayBodyElement.style.width=overlayWidth||"550px";
    overlayBodyElement.style.zIndex=zIndexVal?(zIndexVal+99):10011;
    if(!htmlContent){htmlContent="";}
    document.getElementById("infoWrapperDiv").innerHTML=htmlContent;
    overlayBodyElement.style.display="block";
    overlayBodyElement.style.marginTop=(-1*(document.getElementById(bodyid).offsetHeight/2))+"px";
    overlayBodyElement.style.marginLeft=(-1*(document.getElementById(bodyid).offsetWidth/2))+"px";
};
window.closeInformationOverlay=function(){
    var maskidelem=document.getElementById("infoMaskOverlay");
    var bodyidelem=document.getElementById("infoBodyOverlay");
    if(maskidelem){maskidelem.style.display="none";}
    if(bodyidelem){bodyidelem.style.display="none";}
};