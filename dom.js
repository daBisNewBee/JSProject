function dom() {
    // 查找 HTML 元素
    // 1. 通过 id 查找 HTML 元素
    var x = document.getElementById("demo");
    document.write("x:"+x.innerText);

    var y = document.getElementById("myDiv");
    // 2. 通过标签名查找 HTML 元素。
    // TODO:无法获取div块，在main.html中可以
    elems = y.getElementsByTagName("p");
    for(i = 0; i< elems.length; i++){
        document.write("<br>one:"+elems[i].innerHTML);
    }

    // 3. 通过类名找到 HTML 元素

    // var x=document.getElementById("myDiv");
    // var y=x.getElementsByTagName("p");
    // document.write('id 为 "main" 的 div 中的第一段文本是：' + y[0].innerHTML);

}
