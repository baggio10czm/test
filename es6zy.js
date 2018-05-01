
let canting = {
    "name":"必胜客",
    "cai" : {
        "liangCai":[
            {
                "name":"拍黄瓜",
                "price":12,
            },
            {
                "name":"凉拌海带",
                "price":15,
            }
        ],
        "recai":[
            {
                "name":"宫保鸡丁",
                "price":25,
            },
            {
                "name":"辣子鸡",
                "price":35,
            },
            {
                "name":"糖醋排骨",
                "price":21,
            }
        ]
    }
}
// ① 宫保鸡丁 删除
let canting2 = {
    ...canting,
    "cai" : {
        ...canting.cai,
        "recai": canting.cai.recai.filter((item)=>{
            return item.name !== '宫保鸡丁';
        })
    }
};
console.log(canting2);
// ② 宫保鸡丁 售价改为 33
let canting3 = {
    ...canting,
    "cai" : {
        ...canting.cai,
        "recai": canting.cai.recai.map((item)=> {
            if(item.name === '宫保鸡丁'){
                return {
                    ...item,
                    price: 33
                }
            }else {
                return item;
            }
        })
    }
};
console.log(canting3);
// ③ 增加一个新菜 红烧茄子 19元
let canting4 = {
    ...canting,
    "cai" : {
        ...canting.cai,
        "recai":[
            {
                "name":"红烧茄子",
                "price": 19,
            },
            ...canting.cai.recai
        ]
    }
};
console.log(canting4);
// ④ 低于22的菜不卖了
let canting5 = {
    ...canting,
    "cai" : {
        "liangCai":[
            canting.cai.liangCai.filter((item)=>{
                return item.price > 22;
            })
        ],
        "recai":[
            canting.cai.recai.filter((item)=>{
                return item.price > 22;
            })
        ]
    }
};
console.log(canting5);