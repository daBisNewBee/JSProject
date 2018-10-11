// 全局 JavaScript 变量, 被include的html文件也能调用
var globalVar = "this is global var.";

function funcObject() {
    // 创建 JavaScript 对象
    objectPer = new Object();
    objectPer.firName = "liu";
    objectPer.lastName = "wenbin";
    objectPer.age = 56;
    objectPer.eyecolor = "blue";
    document.write(objectPer.firName + " " + objectPer.lastName + " is " + objectPer.age + " " + objectPer.eyecolor)

    // 访问对象的属性
    var message = "hello dashuaige.";
    var len = message.length;
    document.write("<br>" + len)
    // 访问对象的方法
    document.write("<br>" + message.toUpperCase())
    myFunction("param1", "param2");
}

// 函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
function myFunction(name, job) {
    document.write("<br>name:" + name + " job:" + job)
    var local = globalVar;
    document.write("<br>" + varGlobalAuto)

    // 对字符串和数字进行加法运算:如果把数字与字符串相加，结果将成为字符串。
    x = 5 + 5;
    document.write(x);

    x = "5" + "5";
    document.write(x);

    x = 5 + "5";
    document.write(x); // 55

    x = "5" + 5;
    document.write(x); // 55

    /*
    * “等于”、“全等”的区别：
    * 等于（==）的情况下只要值相同就返回True。
    * 而全等（===）的时候需要值和类型都要匹配才能返回True.
    * */
    var y = 5;
    var res = (y == 5);
    document.write("<br>y == 5:" + res); // true
    res = (y == "5")
    document.write("<br>y == '5':" + res); // true， 注意：值相同，类型不同，仍然为true！
    // 全等（值和类型）
    res = (y === "5");
    document.write("<br>y === '5'" + res); // false 注意：值相同，类型不同，就是false
    res = (y === 5);
    document.write("<br>y === 5" + res); // true

    // 循环
    var arrays = new Array(1,2,3,4,5,6);
    for (var i = 0, len = arrays.length; i < len; i++){
        document.write("<br>" + arrays[i])
    }

    for(x in arrays){
        document.write("<br>" + x)
    }

    // 标签
    list:
    {
        document.write("<br>1111")
        document.write("<br>2222")
        break list;
        document.write("<br>这里不应该被打印")
    }

    // 异常
    try {
        adddlert("这是个骗局，没有这个方法");
        document.write("<br>这里不应该被打印")
    }catch(err) {
        document.write("<br>into catch err: "+err)
        // throw err;
        alert(err)
    }

    return local;
}