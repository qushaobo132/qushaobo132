#Bootstrap

##Bootstrap介绍
    2011年，Twitter公司，由两个工程师开发。稳定版本是Bootstrap3
    主要由两部分构成：css组件、js插件
    使用Bootstrap框架可以快速开发响应式页面，样式复用，效率高
    在页面引入bootstrap：
    <!--响应式，约束缩放-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <!-- 通知IE采用其支持的最新模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 引入bootstrap-->
    <link rel="stylesheet" href="css/bootstrap.min.css">

##CSS组件

###栅格系统
    栅格：一系列的行和列构成的布局，随着屏幕放大，最多展示12列
    container 容器

    两种布局：
        固定布局  container
        流式布局  container-fluid
    
    如何创建一行： row
    栅格参数：
        col-lg- : lg,large (屏幕>=1200px)
        col-md- : md,middle (992px - 1200px)
        col-sm- : sm,small (768px - 992px)
        col-xs- : (小于758px)
    案例：使用栅格系统设计一个响应式布局

###辅助类
    文本颜色 text-primary text-success text-warning text-danger text-muted
    背景颜色  bg-
    关闭按钮  <button class="close"><span>&times;</span></button>
    三角下拉图标 <span class="caret"></span>
    快速浮动  左浮动pull-left 右浮动pull-right 父元素清除浮动clearfix
    块级元素居中 center-block
    文字居中 text-center    
    自定义样式块级元素垂直居中: 
        postion:absolte; top:50%; left:50%;  transform:translate(-50%,-50%);
    显示、隐藏：visible-lg:只有是大屏幕的时候显示

###表格
    表格标签增加 table类 
    table-striped 斑马线(隔行换色) 
    table-hover鼠标悬停效果
    table-bordered 边框
    table-responsive 响应式
    active success warning danger info 表格tr颜色

###表单
    垂直样式表单(默认)：
        表单 role="form"
        表单分组:form-group
        表单项(text、textarea): form-control
        复选框 checkbox checkbox-inline
        单选框 radio radiobox-inline
        下拉列表 select 
    水平样式表单
       给form表单增加form-horizontal类
       label: col-lg-2 
       input: col-lg-10

###列表
    列表ul list-group 
    列表项li list-group-item 
    列表项样式 list-group-item-success/danger/primary/info/warning
    列表徽章 badge  
###按钮   
    btn success primary danger warning info
###字体图标
##JS插件部分
###下拉菜单
###按钮组
###输入框组