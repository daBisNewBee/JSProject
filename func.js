function RegExpFunc() {
    var patt1 = new RegExp("e");
    document.write("<br>e�Ƿ����:" + patt1.test("The best things in life are free"))
    document.write("<br>�ҵ��Ľ��:" + patt1.exec("The best things in life are free"))
    var patt2 = new RegExp("x");
    document.write("<br>a�Ƿ����:" + patt2.test("The best things in life are free"))

    // �������� RegExp ������ӵڶ������������趨������
    // ���磬�����Ҫ�ҵ�����ĳ���ַ������д��ڣ������ʹ�� "g" ���� ("global")��
    var patt3 = new RegExp("e","g")
    do {
        /*
        * ��ʹ�� "g" ����ʱ��exec() �Ĺ���ԭ�����£�
          �ҵ���һ�� "e"�����洢��λ��
          ����ٴ����� exec()����Ӵ洢��λ�ÿ�ʼ���������ҵ���һ�� "e"�����洢��λ��
        * */
        result = patt3.exec("The best things in life are free")
        document.write("<br>" + result)
    }while (result != null)

    // TODO: û��compile()������compile() �������ڸı� RegExp��
}


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
    // JavaScript �е��������ֶ��洢Ϊ��Ϊ 10 �� 64 λ��8 ���أ�����������
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

    // ��Щ������ֵ����false
    var myBoolean=new Boolean();
    var myBoolean=new Boolean(0);
    var myBoolean=new Boolean(null);
    var myBoolean=new Boolean("");
    var myBoolean=new Boolean(false);
    var myBoolean=new Boolean(NaN);

    // ��Щ������ֵ����true
    var myBoolean=new Boolean(1);
    var myBoolean=new Boolean(true);
    var myBoolean=new Boolean("true");
    var myBoolean=new Boolean("false");// ע�⣬�״�
    var myBoolean=new Boolean("Bill Gates");

    var x;
    document.write("<p>ֻ�� 17 λ: ")
    x = 12345678901234567890
    document.write(x + "</p>")

    document.write("<p>0.2 + 0.1 = ");
    x=0.2+0.1;
    document.write(x + "</p>");

    // ǰ׺Ϊ 0���˽���
    var y = 0111;
    // ǰ׺Ϊ 0x��ʮ������
    var z = 0xFF;
    document.write("<br>" + y) // 73
    document.write("<br>" + z) // 255
    var myDate = new Date();

    // �Ƚ�����
    myDate.setFullYear(2008,8,9)
    var today = new Date();
    document.write("<br>" + today)
    if (myDate > today){
        document.write("<br>Today is before 9th August 2008")
    }else {
        document.write("<br>Today is after 9th August 2008")
    }

    return x;
}