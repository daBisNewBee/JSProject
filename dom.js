function dom() {
    // ���� HTML Ԫ��
    // 1. ͨ�� id ���� HTML Ԫ��
    var x = document.getElementById("demo");
    document.write("x:"+x.innerText);

    var y = document.getElementById("myDiv");
    // 2. ͨ����ǩ������ HTML Ԫ�ء�
    // TODO:�޷���ȡdiv�飬��main.html�п���
    elems = y.getElementsByTagName("p");
    for (one in elems){
        document.write("<br>one:"+one.innerHTML);
    }

    // 3. ͨ�������ҵ� HTML Ԫ��

    // var x=document.getElementById("myDiv");
    // var y=x.getElementsByTagName("p");
    // document.write('id Ϊ "main" �� div �еĵ�һ���ı��ǣ�' + y[0].innerHTML);

}