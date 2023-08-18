function createNav() {
    document.writeln("<!--顶部导航栏-->");
    document.writeln("<ul class=\"nav-bar\">");
    document.writeln("            <li class=\"nav-btn\" style=\"background-image: url(images/icon.png);background-size: 50px 50px;width: 50px;\"></li>");
    document.writeln("            <li class=\"nav-btn\"><a href=\"index.html\" target=\"_blank\">主页</a></li>");
    document.writeln("            <li class=\"nav-btn\"><a href=\"pages.html\" target=\"_blank\">页面</a></li>");
    document.writeln("            <li class=\"nav-btn\"><a href=\"downloads.html\" target=\"_blank\">下载</a></li>");
    document.writeln("            <li class=\"nav-btn\"><a href=\"https://clear-sea.github.io/blogs/\" target=\"_blank\">博客</a></li>");
    document.writeln("            <li class=\"nav-btn\"><a href=\"about.html\" target=\"_blank\">关于</a></li>");
    document.writeln("            <li class=\"btn-dark\"><a href=\"javascript:changeToDark();\"></a></li>");
    document.writeln("            <li class=\"btn-light\"><a href=\"javascript:changeToLight();\"></a></li>");
    document.writeln("        </ul>");
    document.writeln("<!--设置填充部分，防止导航栏遮住内容-->");
    document.writeln("<div style=\'height: 70px;width:100%;\'></div>");
}

function createCopyrightBlock(){
    var date=new Date();
    year=date.getFullYear();
    syear=new String(year);
    document.writeln("<!--Copyright-->");
    document.writeln("<p class=\'copyright\'>Copyright © 2022-"+syear+"&nbsp<a href=\'index.html\' class=\"link\">清澈的海水Clear-Sea</a>&nbsp鲁ICP备 114514&nbsp|&nbsp<a href=\'about.html\' class=\"link\">关于</a></p>");
    document.writeln("</body>");
}

function importCSS(){
    document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/mainStyleDark.css\" id=\"mainDark\">");
    document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/mainStyleLight.css\" id=\"mainLight\" DISABLED>");
    document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/navStyleDark.css\" id=\"navDark\">");
    document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/navStyleLight.css\" id=\"navLight\" DISABLED>");
    document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/copyrightBlockStyle.css\">");
}