function RegExpFunc() {
    var patt1 = new RegExp("e");
    document.write("<br>e是否存在:" + patt1.test("The best things in life are free"))
    document.write("<br>找到的结果:" + patt1.exec("The best things in life are free"))
    var patt2 = new RegExp("x");
    document.write("<br>a是否存在:" + patt2.test("The best things in life are free"))

    // 您可以向 RegExp 对象添加第二个参数，以设定检索。
    // 例如，如果需要找到所有某个字符的所有存在，则可以使用 "g" 参数 ("global")。
    var patt3 = new RegExp("e","g")
    do {
        /*
        * 在使用 "g" 参数时，exec() 的工作原理如下：
          找到第一个 "e"，并存储其位置
          如果再次运行 exec()，则从存储的位置开始检索，并找到下一个 "e"，并存储其位置
        * */
        result = patt3.exec("The best things in life are free")
        document.write("<br>" + result)
    }while (result != null)

    // TODO: 没有compile()方法。compile() 方法用于改变 RegExp。
}


function funcOuter() {
    /*
    * 警告
        请使用 document.write() 仅仅向文档输出写内容。
        如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖：
    * */
    document.write("我是宇宙无敌")
    document.write("aaaaa")
    document.write("bbbbbbbbb"+"<br>") // 这里换行了
    document.write("cccccccccc" +"<br>")
    document.write(variable() + "<br>");
    document.write(dataType())
    console.log("this is log.....");console.log("因为前面加了分号，这里可以继续写")
    console.warn("this is warn log...")
    console.error("this is error log...")
    // alert("这个警告来源于外部的js")
}

function variable() {
    var pi = 3.14
    // 字符串可以是引号中的任意文本。您可以使用单引号或双引号：
    var name = "bill gates"
    var answer = 'yes I am'
    var names = "gates", age = 56, job = "CEO";
    return pi + " " + name + " "+answer + names + age + job
}

function dataType() {
    // 变量拥有动态类型
    var x ;
    var x = 6;
    var x = "bill";
    console.log(x);

    // 字符串
    var carname="Bill Gates";
    var carname='Bill Gates';

    var answer="Nice to meet you!";
    var answer="He is called 'Bill'";
    var answer='He is called "Bill"';

    // 数字
    // JavaScript 中的所有数字都存储为根为 10 的 64 位（8 比特），浮点数。
    var y = 123e5;
    var z = 123e-5;
    console.log("y:"+y) // 12300000
    console.log("z:"+z) // 0.00123

    // 布尔
    var boolX = true
    var boolY = false

    // 数组
    var cars = new Array();
    cars[0] = "Audi";
    cars[1] = "BMW";
    cars[2] = "Volvo";

    var girls = new Array("Tylor","Jolin","Sara");
    var girls = ["Tylor","Jolin","Sara"];

    // 对象
    var person = {
        firstname:"Bill",
        lastname:"Gates",
        id:5566};

    console.log(person.firstname)
    console.log(person.id)
    console.log(person["lastname"])

    // 清空变量
    cars = null;
    person = null;

    // 声明变量类型
    var carname = new String;
    var h1 = new Number;
    var h2 = new Boolean;
    var h3 = new Array;
    var h4 = new Object;

    // 这些产生的值都是false
    var myBoolean=new Boolean();
    var myBoolean=new Boolean(0);
    var myBoolean=new Boolean(null);
    var myBoolean=new Boolean("");
    var myBoolean=new Boolean(false);
    var myBoolean=new Boolean(NaN);

    // 这些产生的值都是true
    var myBoolean=new Boolean(1);
    var myBoolean=new Boolean(true);
    var myBoolean=new Boolean("true");
    var myBoolean=new Boolean("false");// 注意，易错！
    var myBoolean=new Boolean("Bill Gates");

    var x;
    document.write("<p>只有 17 位: ")
    x = 12345678901234567890
    document.write(x + "</p>")

    document.write("<p>0.2 + 0.1 = ");
    x=0.2+0.1;
    document.write(x + "</p>");

    // 前缀为 0：八进制
    var y = 0111;
    // 前缀为 0x：十六进制
    var z = 0xFF;
    document.write("<br>" + y) // 73
    document.write("<br>" + z) // 255
    var myDate = new Date();

    // 比较日期
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