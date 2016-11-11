#JavaScript标准库
##数值

##字符串
###" "和' '等价
###字符串长度 str.length 
###索引对应的字符 charAt()
    charAt() 索引位从0开始,最后一位是长度-1,不存在的索引不返回值
###字符对应的索引 indexOf()
    indexOf() 返回字符的索引，不存在返回-1
###字符串搜索 search()
    var str = "hello2016";
    var index = str.search(/[0-9]/); //search返回匹配字符的索引位 /[0-9]/正则表达式，代表数字
    index = str.search(/[a-zA-Z]/); ///[a-zA-Z]/代表字母
    index = str.search(/[A-Z]/);  //不存在的匹配字符 返回-1
    console.log(index);
###字符串匹配 match()
    var str = "hello2016";
    var c = str.match(/[0-9]/); //match返回匹配的字符
    c = str.match(/[0-9]/g); //g全局匹配
    console.log(c);
###字符串替换 replace()
    var str = "hello2016";
    str = str.replace("2016","world");
    console.log(str);

    var str1 = "w1r3f4g5as23"; //把字符串中所有数字都替换成$
    str1 = str1.replace(/[0-9]/g,"$");
    console.log(str1);
###字符串截取 substring slice substr
- substring() 子串截取
    var str = "hello world";
    str = str.substring(2);
    str = str.substring(0,7);  //包含头，不包含尾 hello w
    console.log(str);
- slice()
    var str1 = "Forrest Gump";
    str1 = str1.slice(2);
    console.log(str1);
    str1 = str1.slice(0,7);  //包含头，不包含尾
    console.log(str1);
    str1 = str1.slice(0,-1); //slice方法可以使用负数，表示倒数第几个
    console.log(str1);
- substr()
    var str2 = "Matrix Revolution";
    str2 = str2.substr(3);
    console.log(str2);
    str2 = str2.substr(1,8);  //第一参数是索引值，第二参数是长度
    console.log(str2);
   // str2 = str2.substr(1,-1);  //不支持负数参数
    console.log(str2);

###字符串分割 split()
    var str = "lisi wangwu zhangsan";
    var str_arr = str.split(" ");  //split分割字符串，返回一个字符串数组
    console.log(str_arr.toString());
    var str_c = str.split(" ",2);  //第二参数决定分割后字符串的个数
    console.log(str_c);
###字符串大小写转换 toUpperCase toLowerCase
    var str = "hello world";
    str = str.toUpperCase(); //转成大写
    console.log(str);
    str = str.toLowerCase(); //转成xiaoxie
    console.log(str);
###字符串转换
     //转成字符串
    var a = String(200) //"200"
    console.log(typeof a);
    a = String(null);  //"null"
    console.log(typeof a);
    a = String(true);  //"true"
    console.log(typeof a);
###转义字符
    var str = "hello\nworld"; //\n 换行
    console.log(str);
    str = "他是一个\"大傻子\""; //使用\转义"
    console.log(str);
    str = "他是一个\t好人";  // \t制表符
    console.log(str);var str = "hello\nworld"; //\n 换行
    console.log(str);
    str = "他是一个\"大傻子\""; //使用\转义"
    console.log(str);
    str = "他是一个\t好人";  // \t制表符
    console.log(str);
###字符串其他方法 trim() localCompare() lastIndexOf() concat() charCodeAt()
     var str = " hello world ";
    console.log(str);
    console.log(str.trim());  //去掉两端空格

    var s1 = "abc";
    var s2 = "def";
    console.log(s1.concat(s2)); //concat连接两个字符串，等价于 +

    var str1 = "hello";
    console.log(str1.indexOf("l"));  //第一次出现的索引位
    console.log(str1.lastIndexOf("l")); //lastIndexOf最后一次出现的索引位

    var str2 = "abc";
    console.log(str2.charCodeAt(2)); //99

    var str3 = "def"
    console.log(str3.localeCompare(str2)); //localeCompare大于返回1 小于返回-1 相等返回0





