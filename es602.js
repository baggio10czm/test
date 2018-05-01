//--------  Array.prototype.includes 方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
let arr = ['三星', 'Google', '华为', '7'];
console.log(arr.includes('三星'));   // true
console.log(arr.includes('Google'));   // true
console.log(arr.includes('HTC'));    // false
console.log(arr.includes(7));     // false  严格比较  ===

//--------Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

// 下面是一个类似数组的对象，Array.from将它转为真正的数组。
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
console.log(arr1);
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2);


// ---------------------- 对象相关

//  省略 v 条件 k v 一致
let a = 1, b = 2, c = 3;
let obj = {
    a,
    b,
    c
};
console.log(obj); // { a: 1, b: 2, c: 3 }
let res = (function () {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    return sum;
})();
let he = {res};
console.log(he);  // { res: 5050 }

let obj2 = {
    a: 1777777,
    fu() {
        console.log(this.a);
    }
};
obj2.fu();


// Obj value Obj key
let obj33 = {
    "c": 11,
    "z": 18,
    "m": 77,
};
console.log(Object.keys(obj33));
console.log(Object.values(obj33));


// -----------Object.is()
// ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型
// 后者的NaN不等于自身，以及+0等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。
console.log(NaN === NaN); // false
console.log(+0 === -0);   // true
console.log(Object.is(NaN, NaN));  // true
console.log(Object.is(+0, -0));  // false

let arr11 = [1, 3, 4];
let arr22 = [1, 3, 4];
console.log(Object.is(arr11, arr22));  // false  因为他们在内存中的位置不一样


// -----------Object.assign()
let objA = {"a": 1, "b": 2, "c": 3};
let objB = {"b": 4, "c": 7, "d": 3};
let objC = {"c": 7, "d": 9, "e": 13};

Object.assign(objA, objB, objC);  // 后面的权重更高 之前相同的值会被覆盖
console.log(objA);    // 只会更改第一个对象


// --------------- 对象中的键加方括号  动态建
// 如果是女生，统计带娃时间
// 如果是男生，统计工作时间
let sex = '男', k = '';
if (sex === '男') {
    k = 'workTime';
}
let objS = {
    'name': '小米',
    'sex': '男',
    [k]: '120'
};
console.log(objS);


// -------------------- 类

class Peoplo {
    constructor(name, age, sex) {
        this.age = name;
        this.sex = name;
        this.name = name;
    }

    hiEe() {
        console.log('h1~~~');
    }

    goLieE() {
        console.log('goLi');
    }
}

let xiaoming = new Peoplo('小明', 12, '男');

console.log(xiaoming.name);

class Student extends Peoplo {
    constructor(name, age, sex, xuehao, banji) {
        super(name, age, sex);  //调用超类的构造器
        this.xuehao = xuehao;
        this.banji = banji;
    }
}

let xiaoHua = new Student('笑话', 12, '女', '11', 988);
xiaoHua.hiEe();
xiaoHua.goLieE();


//--------------------- promise对象

/*  ---- ES6 写法 ----
function Ajax(url,data) {
    return new Promise((resolve, reject) =>{
        $.get(url,data,(res)=>{
            if(res.code === 0){
                resolve(res);
            }else {
                reject(res.msg);
            }
        })
    })
}
Ajax('api/getData',data).then((data)=>{
    console.log(data);
    return Ajax('api/setData',data);
},(err)=>{
    console.log(err);
}).then((data)=>{
    console.log(data);
    return Ajax('api/upDate',data);
},(err)=>{
    console.log(err);

});
*/

//  ---- ES7 写法 ----
let fs = require("fs");

function duwenjian(url){
    return new Promise((resolve , reject) => {
        fs.readFile(url , (err , data) => {
            if(err){
                reject(err);
                return false;
            }
            resolve(data.toString());
        });
    });
}

//异步函数
async function main(){
    let data1 = await duwenjian("data1.json");
    console.log(data1);

    let data2 = await duwenjian("data2.json");
    console.log(data2);
}
main();



// -------------------------   fetch() -------------------


async function main() {
    let data1 = await fetch('data1.json').then(data=>data.json());
    let data2 = await fetch('data2.json').then(data=>data.json());
    console.log(data1);
    console.log(data2);
}
main();