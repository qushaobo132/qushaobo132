#JavaScript正则表达式 
##什么是正则表达式
    描述字符串规则的表达式.
##常用方法
######测试正则表达式与指定字符串是否匹配：RegExpObj.test(str) 
    var boo = /13588888888/.test('13588888888'); //true
        boo = /13588888888/.test('1358888888');  //false
        boo = /13588888888/.test('a13588888888b'); //true
######*test只要包含符合规则的字符串即为true

##锚点:匹配一个位置
- ^ 起始位置 ^http :以http开头
- $ 结束位置 .jpg$ :以.jpg结尾
- \b 单词边界 

##字符类:匹配一类字符中的一个
    [abc] a或b或c
    [0-9] 一个数字 
    [^0-9] 非数字
    [a-z] 一个字母
    .  任意字符(换行除外)
##元字符:具有特殊意义的字符
- ^开始 $结束 \b单词边界
- \d [0-9]数字 \D:[^\d]非数字
- \s:空白符   \S:[^\s]f非空白符
- \w:[A-Za-z0-9] 单词字符   \W:[^\w] 非单词字符

##量词符:出现的次数
{m,n} m到n次

##转义符 \
    var boo = /\./.test('abc@qqcom'); //false \ 代表转义符
##多选分支
    var boo = /thi(c|n)k/.test('thiak');
    boo = /thi[cn]k/.test('think');
    boo = /\.(png|jpg|gif|jpeg)$/.test('.gifs');
##使用正则表达式捕获、匹配、替换、切割
#####跟字符串相关的方法:
     search() match() replace() spit() 

