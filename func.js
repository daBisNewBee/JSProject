function funcOuter() {
    /*
    * ����
        ��ʹ�� document.write() �������ĵ����д���ݡ�
        ������ĵ�����ɼ��غ�ִ�� document.write������ HTML ҳ�潫�����ǣ�
    * */
    document.write("���������޵�")
    document.write("aaaaa")
    document.write("bbbbbbbbb"+"<br>") // ���ﻻ����
    document.write("cccccccccc" +"<br>")
    document.write(variable() + "<br>");
    document.write(dataType())
    console.log("this is log.....");console.log("��Ϊǰ����˷ֺţ�������Լ���д")
    console.warn("this is warn log...")
    console.error("this is error log...")
    // alert("���������Դ���ⲿ��js")
}

function variable() {
    var pi = 3.14
    // �ַ��������������е������ı���������ʹ�õ����Ż�˫���ţ�
    var name = "bill gates"
    var answer = 'yes I am'
    var names = "gates", age = 56, job = "CEO";
    return pi + " " + name + " "+answer + names + age + job
}

function dataType() {
    // ����ӵ�ж�̬����
    var x ;
    var x = 6;
    var x = "bill";
    console.log(x);

    // �ַ���
    var carname="Bill Gates";
    var carname='Bill Gates';

    var answer="Nice to meet you!";
    var answer="He is called 'Bill'";
    var answer='He is called "Bill"';

    // ����
    var y = 123e5;
    var z = 123e-5;
    console.log("y:"+y) // 12300000
    console.log("z:"+z) // 0.00123

    // ����
    var boolX = true
    var boolY = false

    // ����
    var cars = new Array();
    cars[0] = "Audi";
    cars[1] = "BMW";
    cars[2] = "Volvo";

    var girls = new Array("Tylor","Jolin","Sara");
    var girls = ["Tylor","Jolin","Sara"];

    // ����
    var person = {
        firstname:"Bill",
        lastname:"Gates",
        id:5566};

    console.log(person.firstname)
    console.log(person.id)
    console.log(person["lastname"])

    // ��ձ���
    cars = null;
    person = null;

    // ������������
    var carname = new String;
    var h1 = new Number;
    var h2 = new Boolean;
    var h3 = new Array;
    var h4 = new Object;

    return x;
}