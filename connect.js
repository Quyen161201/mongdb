const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testmongdb');
const Schema=mongoose.Schema
const test1=new Schema({
    username:String,
    password:String,
    age:Number,
    salary:Number,

},{collection:'test1'})

const Test1model=mongoose.model('test1',test1)
// {

//     Test1model.create({
//         username: 'studen1',
//         password: '123',
//         age:20,
//         salary:1000
//     },
//     {
//         username: 'studen2',
//         password: '123456',
//         age:21,
//         salary:500  
//     },
//     {
//         username: 'studen3',
//         password: '12345678',
//         age:18,
//         salary:1000
//     },
//     {
//         username: 'studen4',
//         password: '1235678',
//         age:30,
//         salary:2000
//     },
//     {
//         username: 'studen5',
//         password: '1234',
//         age:30,
//         salary:800
//     })
//     .then(data=>{console.log('data',data)})
//     .catch(err=>{console.log('err',err)});
// }

// operator $lt: nho hon, $lte:nho hon bang
// operator $gt:lon hon, $gte: lon hon bang
// regex: giong nhu like trong sql tim kiem 1 patten hay 1 ky tu bat ky trog 1 chuoi. cu phap $regex hoac /../
// sort: sap xep: 1 la tang dan, -1 giam dan
// limit: lay ra bao nhieu ban ghi theo y minh. cu phap: .limit(numberlimits)
// skip: bo qua 1 hoac nhieu ban ghi theo y minh. cu phap: .skip(numberlimits)
// toan tu $in dung trong dieu kien hoac trong cung 1 key

// lay ra hoc sinh co tuoi lon 20 hoac luong lon hon 1000
Test1model.find({
   salary: {$in:[500,1000]}
})
.then(data=>{console.log('data',data)})
.catch(err=>{console.log('err',err)});