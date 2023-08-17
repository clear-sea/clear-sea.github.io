function showBlog(title,creationTime,releaseTime,auther,htmlFilePath){
    document.writeln("<div class=\"panel\">");
    document.writeln("    <a href=\""+htmlFilePath+"\" target=\"_blank\"><strong>"+title+"</strong></a>");
    document.writeln("    <p>作于: "+creationTime+"&nbsp&nbsp发布于: "+releaseTime+"&nbsp&nbsp作者："+auther+"</p>");
    document.writeln("</div>");
}