var red = document.getElementById("red");
var orange = document.getElementById("orange");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");
var menu = document.getElementById("menu-wrap");
var layout = document.getElementById("layout-famoussite");

//获得cookie
var layout_color = get_cookie("layoutColor_cookie");
var menu_color = get_cookie("menuColor_cookie");

//点击色块发生的事件
red.onclick = function () {
    menu.className = "menu-wrap-red";
    layout.className = "layout-famoussite-red";
    set_color("menu-wrap-red", "layout-famoussite-red");
};
orange.onclick = function () {
    menu.className = "menu-wrap-orange";
    layout.className = "layout-famoussite-orange";
    set_color("menu-wrap-orange", "layout-famoussite-orange");

};
blue.onclick = function () {
    menu.className = "menu-wrap-blue";
    layout.className = "layout-famoussite-blue";
    set_color("menu-wrap-blue", "layout-famoussite-blue");

};
green.onclick = function () {
    menu.className = "menu-wrap";
    layout.className = "layout-famoussite";
    set_color("menu-wrap", "layout-famoussite");

};
yellow.onclick = function () {
    menu.className = "menu-wrap-yellow";
    layout.className = "layout-famoussite-yellow";
    set_color("menu-wrap-yellow", "layout-famoussite-yellow");
};


//得到cookie
function get_cookie(name_to_get) {

    var cookie_pair
    var cookie_name
    var cookie_value
    var cookie_array = document.cookie.split("; ")
    for (counter = 0; counter < cookie_array.length; counter++) {
        cookie_pair = cookie_array[counter].split("=")
        cookie_name = cookie_pair[0]
        cookie_value = cookie_pair[1]
        if (cookie_name == name_to_get) {
            return unescape(cookie_value)
        }
    }
    return null
}

//设置cookie
function set_cookie(cookie_name, cookie_value, cookie_expire, cookie_path, cookie_domain, cookie_secure) {
    var cookie_string = cookie_name + "=" + cookie_value;
    if (cookie_expire) {
        var expire_date = new Date();
        var ms_from_now = cookie_expire * 24 * 60 * 60 * 1000;
        expire_date.setTime(expire_date.getTime() + ms_from_now);
        var expire_string = expire_date.toGMTString();
        cookie_string += "; expires=" + expire_string;
    }
    if (cookie_path) {
        cookie_string += "; path=" + cookie_path;
    }
    if (cookie_domain) {
        cookie_string += "; domain=" + cookie_domain;
    }
    if (cookie_secure) {
        cookie_string += "; true";
    }
    document.cookie = cookie_string;
}


//设置两个cookie
function set_color(color_val, color_val2) {
    set_cookie("menuColor_cookie", color_val, 365, "/");
    set_cookie("layoutColor_cookie", color_val2, 365, "/");
}

if (menu_color && layout_color) {
    menu.className = menu_color;
    layout.className = layout_color;
}
