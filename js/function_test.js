// let cop = "wind_pp";
<<<<<<<
HEAD;
var cop = "wind_pp";   // 与上一句的作用域不同
======
=;
var cop = "wind_pp";   //与上一句的作用域不同
>>>>>>>
origin / master;


let pp = {
    cop: "red",
};

function f4() {
<<<<<<<
    HEAD;
    alert(this.cop);   // this 都是指window object
======
    =
        alert(this.cop);
>>>>>>>
    origin / master
}

f4();

/////////////////////////////////////////
<<<<<<<
HEAD;
f4.apply(pp, []);  // 实际是切换作用域
f4.call(pp,);     // 这两句只是参数的类型不同
======
=
    f4.apply(pp, []);  //实际是切换作用域
f4.call(pp,);     //这两句只是参数的类型不同
>>>>>>>
origin / master;
/////////////////////////////////////////