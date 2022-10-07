(function(){
    window.isOldBrowser=function(){
        var nUA=navigator.userAgent;
        var oldBrowser="MSIE 7|MSIE 6".split("|");
        for(var i=0;i<oldBrowser.length;i++){
            if(nUA.indexOf(oldBrowser[i])!=-1){return true;}
        }
        if(document.compatMode!=="CSS1Compat"){return true;}
        return false;
    };
}());