// 工厂模式创建对象
// 创建的对象都是object
function Box(name1, age) {
    let box = Object();
    box.name = name1;
    box.age = age;
    // run 应该是每个对象共有的属性
    box.run = function () {
        alert("This is : " + this.name + "  " + this.age);
    };
    return box;
}

// 每次创建都是独立的对象 各自的内存空间不同 浪费共同的资源
box1 = Box("box1", 18);
box2 = Box("box2", 20);

// alert("box1 is " + box1.name + "   " + box1.age);
// box1.run();
//
// alert("box2 is " + box2.name + "   " + box2.age);
// box2.run();
//////////// 测试对象类型是什么
// alert("box1 is " + typeof box1);  // object
// alert("box2 is " + typeof box2);  // object

////////////////////////////////////////////////////////////
// 演变成共有的方法独立出来, 共有的属性设置成对象
function obj_run() {
    alert("this is " + this.name + "  " + this.age);
}

// 同样不能识别对象
function Box1(name1, age) {
    let obj = Object();
    obj.name = name1;
    obj.age = age;
    obj.run = obj_run;

    return obj;
}

box3 = Box1("box3", 11);
box4 = Box1("box4", 12);
// box3.run();
// box4.run();
// alert(box3.name === box4.name);
//
// alert(box3.run === box4.run);   //  地址 内容 都一致 所以是 true

////////////////////////////////////////////////////////////////
// 构造函数创建对象
// this 是默认的返回值 与工厂函数不一样的地方就是没有 new object 对象
// 使用的时候便要 new 了
// 同样是浪费了部分公用方法的内存 解决可以用上面的 全局的函数
function Box_cons(name1, age) {
    this.name = name1;
    this.age = age;
    this.run = function () {
        alert("this is " + this.name + "  " + this.age);
    };
}

box5 = new Box_cons("boe5", 13);
box6 = new Box_cons("box6", 14);