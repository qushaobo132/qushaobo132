#JavaScript基础
##alert弹出框 
   阻塞式，从上到下执行

##console控制台输出
    console.log("你好"); //日志级别
    console.info("你好"); //信息级别
    console.warn("你好"); //警告级别
    console.error("你好"); //错误级别

##变量
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
 
##注释 
    // 单行注释
    /**/  多行注释   

##JS基本数据类型
####数值Number
        var a = 1; var _$price = 12.5; //数值
        数值型有两个特殊值：
            NaN(Not a Number)      console.log(Number("a")); //NaN
            Infinity(无限、无尽)   console.log(1/0); //Infinity
####字符串String
         var str = "hello world"; //字符串 "" ''
######数值和字符串的类型转换
     var a = 2;//数值
     var s = "1";//字符串
     console.log(a+s); //"2" +"1" = "21"
     console.log(s+a); //"1" + "2" = "12"
     console.log(a+Number(s)); //3 使用Number将s直接转成数值型

####布尔型Boolean
        var b = true; b = false; //布尔型
####对象 Object
        var person = { //对象是一组无序的键值对的集合
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

####typedof数据类型判断
    typedof a  

####原始数据类型和引用数据类型
    number string boolean 原始数据类型
    object 引用数据类型

     //原始数据类型
    var a = 5;
    var b = a;
    b = 10;
    console.log(a); //5
    console.log(b); //10

    //引用数据类型
    var  obj1= {    //在堆内存中开辟一块空间，创建对象，在栈内存中创建指向对象的引用obj1
        a:1
    }
    var obj2 = obj1;   //将obj1引用的对象，也指向obj2
    obj2.a = 3;   //obj2对属性a进行赋值
    console.log(obj1.a); // 3
    console.log(obj2.a); // 3

##运算符
####一元运算符  
    ++ --  需要一个操作数，前后有区别**
####算术运算符 
    + - * / %(模/求余) 需要两个操作数 
####运算符的优先级
    运算符优先级 没有括号的话，按照四则运算的顺序，先算乘除，后算加减
    括号可以提升运算符的优先级
####关系操作符 
    > < >= <=  需要两个操作数，结果是布尔值
####相等运算符 
    == != === !==  需要两个操作数，结果是布尔值 === 全等
####逻辑运算符
    !(非，取反)  &&(且) ||(或)
    && 如果左边的值为true，则返回右边的值,如果左边的值为false，则返回左边的值
    || 如果左边的值为true，则返回左边的值,如果左边的值为false，则返回右边的值
####赋值运算符 
    = += -= *= /= %=
####条件运算符(三元运算符)
      (条件)?值1 : 值2;
####逗号操作符 ,
    var a=1,b=2;
####对象操作符
    new delete instanceof .
#### 位操作符
    ~(按位取反) &(与运算符)  |(或运算符) ^(异或)  <<(左移位) >>(右移位)









