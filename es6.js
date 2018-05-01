// {
//     var ssa = 11;
// }
// console.log(ssa);
//
// let [a,b,...c] = ['11','22','33','44','55','66'];
// console.log('c='+ c,'b='+ b,'a='+ a );
// console.log(c);//[ '33', '44', '55', '66' ]

// 在数组前面加上...运算符，表示强制解构。这个数组将变为零散量,。
//let arr2 = [1,3,4];
//console.log(...arr2);  // 1 3 4   等同  console.log(1,3,4)


// function fn1([a, b]) {
//     console.log(a + b);
// }
//
// fn1([3, 4]);
//let obj22 = {
//    a:11,
//    b:21,
//    c:52
//}
//let obj33 = {
//    ...obj22,
//    b:911
//}
//console.log(obj22);  //{ a: 11, b: 21, c: 52 }
//console.log(obj33);  //{ a: 11, b: 911, c: 52 }
// // 类似 apply
// function fn2(a, b) {
//     console.log(a + b);
// }
//
// fn2.apply(null, [3, 4]);
//

//强制解构还可以用于类数组对象，可以将类数组对象变为真的数组：
//const fun = function() {
//    console.log(arguments); //{ '0': 2, '1': 332, '2': 213, '3': 1235, '4': 92 }
//    //下面的语句是一个技巧，是最快的将类数组对象变为数组的方法
//    let arr = [...arguments];
//    console.log(arr);		//[ 1, 2, 3, 4, 5, 6, 7, 8 ]
//    console.log(Array.isArray(arr)); //true
//}
//fun(2,332,213,1235,92);

// // 计算所有参数的和
// function fn3(a, ...arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }
//
// fn3(1, 3, 5, 7);
//
// function fn4({shuxue, yuwen, yingyu}) {
//     console.log(shuxue + yuwen + yingyu);
// }
//
// let xiaoMing = {'name': 'xiaoMing', 'age': 12, 'shuxue': 30, 'yuwen': 50, 'yingyu': 80};
// fn4(xiaoMing);
//
// let obj = {"a": 12, "b": 63};
// let {a: n, b: m} = obj;
// console.log(n);
// console.log(m);


//let xiaoMing2 = {'name': 'xiaoMing', 'age': 12, 'shuxue': 30, 'yuwen': 50, 'yingyu': 80};
//let {shuxue} = xiaoMing2;
//console.log(shuxue);
//let {yuwen: yw} = xiaoMing2;
//console.log(yw);

// 对象的结构往往用在函数的形参列表中，调用函数的时候，传的对象（实参）就能够自动解构。
// function People({name,age,sex}) {
//    this.name = name;
//    this.age = age;
//    this.sex = sex;
//    this.ceshi = function ceshi() {
//        console.log('测试');
//    }
//}
//let xiaoMing = new People({'name':'小明','age':'16','sex':'男'});
//console.log(xiaoMing);
//
// 在数组前面加上...运算符，表示强制解构。这个数组将变为零散量。



//----------------字符串

//let str = '桂林山水还不错';
//console.log(str.includes('桂林'));   // true
//console.log(str.startsWith('桂林'));    // true
//console.log(str.endsWith('桂林'));   // false
//console.log(str.endsWith('错'));   // true
//
//let wjx = '★'.repeat(5);
//console.log(wjx);


// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全

//'x'.padStart(5, 'ab'); // 'ababx'
//'x'.padStart(4, 'ab'); // 'abax'
//
//'x'.padEnd(5, 'ab'); // 'xabab'
//'x'.padEnd(4, 'ab'); // 'xaba'
//
//let a = 10;
//let d = 1510;
//let b = '高兴';
//let c = '手机';
//let str3 = `好${b}啊，我买了一个${c},花了${d + a},好${b}啊`;
//console.log(str3);
//
//// language=HTML
//let imgUlr = 'logo.png';
//let title = '老狗图标';
//let template = `
//    <ul>
//        <li>
//            <a href="#">
//                <img src="${imgUlr}" alt="${title}">
//            </a>
//        </li>
//    </ul>`;
//console.log(template);




//___________ 数组___________

//let arr = ["白板","足球","巴乔"];
//arr.forEach(function (item,index) {   //遍历代替 for
//    console.log(item + " 下标为："+index);
//});
//
//// Map()返回一个新数组，新数组每一项都是原数组的映射  map() 出的新数组 长度一定相同 不够就以 undefined 代替——————————
//let arr22 = [42,3,42,55,1];
//let arr33 = arr22.map(function (item) {
//    return item * 2;
//});
//console.log(arr33);  // [ 84, 6, 84, 110, 2 ]
//
//// filter 条件过滤并返回新数组
//let arrf1 = [42,32,92,55,1,3,8];
//let arrf2 = arrf1.filter((item)=>{
//    return item % 2 === 0;
//});
//console.log(arrf2);
//
//// reduce() 迭代遍历，每一项的遍历都可以使用遍历的上一项的结果 ————————————————
//
//let arrR = ["白板","足球","巴乔","程忠明"];
//// a参数：遍历前一项的时候return的值   b参数：表示这一项的值
//// 系统会自动从下标为1 开始遍历， a开始为第0项
//arrR.reduce((a,b)=>{
//    console.log("a:"+a);
//    console.log("b:"+b);
//    return a + b
//});
//let arrRN = [22,33,21,12,77,6,7];
//let res = arrRN.reduce((a,b)=>{
//   return a + b
//);
//onsole.log(res);
// ---------------------------------- 求数组中最大的值
//let max = arrRN.reduce((a,b)=>{
//     return a - b > 0 ? a : b;
//});
//console.log("数组最大的是："+max);

//综合练习
let xiaoming = {
    "name" : "小明",
    "age" : "12",
    "sex" : "男",
    "friends" :[
        {
            "id":1,
            "name":"小红",
            "age":13
        },
        {
            "id":2,
            "name":"小绿",
            "age":15
        },
        {
            "id":3,
            "name":"小蓝",
            "age":11
        },
    ]
};

// 不能更改xiaoWang对象返回一个新对象 ，只让年龄变为25岁
console.log("题目1 ------------------");
 let xiaoming2 = {
     ...xiaoming ,
     "age":25
 };
 console.log(xiaoming2);
// 题目2：不能更改xiaoming对象返回一个新对象 ，只让小绿年龄变为22岁
console.log("题目2 ------------------");
let xiaolv2 = {
    ...xiaoming ,
    "friends" :xiaoming.friends.map(function (item) {
        if(item.name === '小绿'){
            return {
                ...item,
                age: 22
            }
        }else {
            return item;
        }
    })
};
console.log(xiaolv2);

// 题目3：不能更改xiaoming对象返回一个新对象 ，只让小明只能有15以下的朋友
console.log("题目3 ------------------");
let xiaoming3 = {
    ...xiaoming ,
    "friends" :xiaoming.friends.filter((item)=> {
        return item.age < 15;
    })
};
console.log(xiaoming3);


// 题目4：不能更改xiaoming ,小明增加一个88岁的朋友 老王 并放最前面
console.log("题目4 ------------------");
let xiaoming4 = {
    ...xiaoming ,
    "friends" :[{
        "name":"老王",
        "age":88
    },...xiaoming.friends]
};
console.log(xiaoming4);

// 题目5：不能更改xiaoming ,小明增加一个88岁的朋友 老王 id自增加
console.log("题目5 ------------------");
let xiaoming5 = {
    ...xiaoming ,
    "friends" :[
        ...xiaoming.friends,
        {
            'id':xiaoming.friends.reduce((a,b)=>{
                return a.id > b.id ? a.id : b.id;
            }) + 1,
            "name":"老王",
            "age":88
        }]
};
console.log(xiaoming5);


// 题目6：不能更改xiaoming ,小明增加多个朋友 id自增加
console.log("题目6 ------------------");
let friends = [
    {
        "name":"老李",
        "age":28
    },
    {
        "name":"老张",
        "age":17
    },
];
let friendsArr = friends.map((item,index)=>{
    return {
        'id':xiaoming.friends.reduce((a,b)=>{
        return a.id > b.id ? a.id : b.id;
    }) + index + 1,
        "name":item.name,
        "age":item.age
    }
    });
let xiaoming6 = {
    ...xiaoming ,
    "friends" :[
        ...xiaoming.friends,
        ...friendsArr
    ]
};
console.log(xiaoming6);