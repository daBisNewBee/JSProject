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

    return x;
}