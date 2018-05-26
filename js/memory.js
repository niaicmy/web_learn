let box1 = "love";
alert("let box1 is :" + box1);

let box2 = box1;
alert("box2 is " + box2);
box2 = "you";

// 测试基本类型的相互引用是内存地址独立的
// 基本类型 String Number Boolean ...
alert("after box2 is :" + box2);
alert("after box1 is :" + box1);

///////////////////////////////////////

// let box3 = new Object();
let box3 = Object();
box3.name = "love";
alert(box3.name);

let box4 = box1;
box4.name = "you";

// box4 出现建议 Value assigned to primitive will be lost   赋值给基元的值将丢失

// 改变box4.name 使 box3.name 改变
// 说明 对象的互相引用是 共同的内存地址
alert(box3.name);
alert(box4.name);


///////////////////////////////////////////////////////////////

// 所以 基本类型 传递给函数是按值传递 但是对象是什么方式呢？
// 测试结果是 按引用传递  即 函数修改了传入的Object对象的值

// Object instantiation can be simplified   可以简化对象实例化
// Checks for improper usage of wrappers for JavaScript primitive types. Also, warning will be produced when property
// of primitive type is modified, as assigned value will be lost.
// 检查JavaScript原语类型的包装不正确使用。此外，当原始类型的属性被修改时，将产生警告，因为赋值将丢失。


// let obj = new Object();   // new 方法创建对象会出现一个建议 Object instantiation can be simplified

let obj = Object();
obj.name = "love";
alert("obj.name is : " + obj.name); // 打印是 love

function f(o) {
    o.name = "you";
    alert("o.name is : " + o.name);
}

f(obj);

alert("after obj.name is : " + obj.name);  // 打印 是 you