const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testmongdb');
const Schema = mongoose.Schema;
const account = new Schema({
    username: String,
    password: String,
    phone:String
},
{
    collection:'test1'
});
const Accountmodel = mongoose.model('test1', account);

// hàm find tìm kiếm toàn bộ dữ liệu trong db
// sẽ trả về mảng rỗng nếu dữ liệu lọc không khớp với db
// 
Accountmodel.find({
   
})
    .then(function (data) {
        console.log('data',data)
        
    })
    .catch(function (err) {
        console.log('loi',err)
    })

// Accountmodel.create({
//     username:'trang',
//     password:123123,
//     phone:9999
// })