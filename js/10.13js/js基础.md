#JavaScript基础
###alert弹出框 
   阻塞式，从上到下执行

###__console控制台输出__
    console.log("你好"); //日志级别
    console.info("你好"); //信息级别
    console.warn("你好"); //警告级别
    console.error("你好"); //错误级别

###变量
   1.什么是变量？变化的量,在内存中临时存储
   2.定义一个变量 var ，并为它赋值 
      var a = 1;
//    alert(a);
    console.log("a=",a);
   3.变量的命名规范(我们把变量、函数、数组、对象的名称叫标识符)
      - 可以以字母、$、_开头，不能以数字开头
      - 不能使用*** (在c语言中*代表指针 中级 java c/c++ js c#高级语言)
      - 不能够使用+ -
      - 不能以js语言中的关键字(如var if else while for...)和保留字(NaN Infinity)作为变量名 
      - 变量名区分大小写
   4.var a;  //声明了一个变量
     a = 10; //给一个变量赋值 = (赋值运算符)
 
###注释 
    // 单行注释
    // 多行注释   

###JS基本数据类型
####数值Number
        var a = 1; var _$price = 12.5; //数值
        数值型有两个特殊值：
            NaN(Not a Number) 
            Infinity(无限、无尽)
####字符串String
         var str = "hello world"; //字符串 "" ''
#####数值和字符串的类型转换
     var a = 2;//数值
     var s = "1";//字符串
     console.log(a+s); //"2" +"1" = "21"
     console.log(s+a); //"1" + "2" = "12"
     console.log(a+Number(s)); //3 使用Number将s直接转成数值型

####布尔型Boolean
        var b = true; b = false; //布尔型
####对象 Object
        var person = { //由1个或多个键值对组成
            name:'lisi',
            age:20
        };
####未定义undefined
        var x; //定义了一个变量，但是没有赋值，没有初始化 undefined
        //访问对象中未定义的属性
        var car = {
            //  brand:'Benz',
            color:'白色'
        }
        console.log(car.brand);//undefined
####空值null
    表示对象为空
