// ȫ�� JavaScript ����, ��include��html�ļ�Ҳ�ܵ���
var globalVar = "this is global var.";

function personCons(firName, lastName, age, eyecolor) {
    this.firName = firName;
    this.lastName = lastName;
    this.age = age;
    this.eyecolor = eyecolor;
    this.changeName = changeName;
    function changeName(name) {
        this.lastName = name
    }
}

function funcObject() {
    // ���� JavaScript ��������ַ���
    objectPer = new Object();
    objectPer.firName = "liu";
    objectPer.lastName = "wenbin";
    objectPer.age = 56;
    objectPer.eyecolor = "blue";
    document.write(objectPer.firName + " " + objectPer.lastName + " is " + objectPer.age + " " + objectPer.eyecolor)

    // ����ֱ�ӵ�ʵ��
    person = {firName:"Bill", lastName:"gates", age:56, eyecolor:"red"};
    document.write("<br>" + person.firName + " " + person.lastName + " is " + person.age + " " + person.eyecolor)

    // for...in ���ѭ���������������
    var txt = "";
    for(x in person){
        txt += person[x];
    }
    document.write("<br>��������person�����ԣ�" + txt);

    // ʹ�ö�������
    var mother = new personCons("Steve","Jobs", 48, "green");
    document.write("<br>" + mother.firName + " " + mother.lastName + " is " + mother.age + " " + mother.eyecolor)

    // ���ö��󷽷�
    mother.changeName("newLastName")
    document.write("<br>���ö��󷽷�changeName��" + mother.firName + " " + mother.lastName + " is " + mother.age + " " + mother.eyecolor)

    // ���ʶ��������
    var message = "hello dashuaige.";
    var len = message.length;
    document.write("<br>" + len)
    // ���ʶ���ķ���
    document.write("<br>" + message.toUpperCase())
    myFunction("param1", "param2");
}

// ���������¼������Ļ��ߵ���������ʱִ�еĿ��ظ�ʹ�õĴ���顣
function myFunction(name, job) {
    document.write("<br>name:" + name + " job:" + job)
    var local = globalVar;
    document.write("<br>" + varGlobalAuto)

    // ���ַ��������ֽ��мӷ�����:������������ַ�����ӣ��������Ϊ�ַ�����
    x = 5 + 5;
    document.write(x);

    x = "5" + "5";
    document.write(x);

    x = 5 + "5";
    document.write(x); // 55

    x = "5" + 5;
    document.write(x); // 55

    /*
    * �����ڡ�����ȫ�ȡ�������
    * ���ڣ�==���������ֻҪֵ��ͬ�ͷ���True��
    * ��ȫ�ȣ�===����ʱ����Ҫֵ�����Ͷ�Ҫƥ����ܷ���True.
    * */
    var y = 5;
    var res = (y == 5);
    document.write("<br>y == 5:" + res); // true
    res = (y == "5")
    document.write("<br>y == '5':" + res); // true�� ע�⣺ֵ��ͬ�����Ͳ�ͬ����ȻΪtrue��
    // ȫ�ȣ�ֵ�����ͣ�
    res = (y === "5");
    document.write("<br>y === '5'" + res); // false ע�⣺ֵ��ͬ�����Ͳ�ͬ������false
    res = (y === 5);
    document.write("<br>y === 5" + res); // true

    // ѭ��
    var arrays = new Array(1,2,3,4,5,6);
    for (var i = 0, len = arrays.length; i < len; i++){
        document.write("<br>" + arrays[i])
    }

    for(x in arrays){
        document.write("<br>" + x)
    }

    // ��ǩ
    list:
    {
        document.write("<br>1111")
        document.write("<br>2222")
        break list;
        document.write("<br>���ﲻӦ�ñ���ӡ")
    }

    // �쳣
    try {
        adddlert("���Ǹ�ƭ�֣�û���������");
        document.write("<br>���ﲻӦ�ñ���ӡ")
    }catch(err) {
        document.write("<br>into catch err: "+err)
        // throw err;
        alert(err)
    }

    return local;
}