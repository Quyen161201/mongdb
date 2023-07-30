const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testmongdb');
const Schema=mongoose.Schema
const test1=new Schema({
    username:String,
    password:String
},{collection:'test1'},{versionKey: false})
const Test1model=mongoose.model('test1',test1)
// tim kiem db find
Test1model.find({
    username:'khaquyen'
})
// create tao document moi
Test1model.create({
    username:'Quyen2',
    password:'123123',
})

// updateone va updatemany

// Test1model.updateMany({
//     username:'Quyen2',
// },{password:'121'})
// .then(data=>{console.log('data',data)})
// .catch(err=>{console.log('err',err)})

// delect one va delete many

// Test1model.deleteMany({username:'Quyen2'})
// .then(data=>{console.log('data',data)})
// .catch(err=>{console.log('err',err)})