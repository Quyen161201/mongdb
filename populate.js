const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testmongdb');
const Schema=mongoose.Schema
const acountSchema=new Schema({
    username:String,
    password:String,
    age:Number,
    salary:Number,
    course:{
        type:String,
        ref:'course'
    },
    the_ngan_hang:{
        type:String,
        ref:'cardmodel'
    },
    list_san_pham:{
        san_pham:{
            type:String,
            ref:'productmodel'
        }
    }

},{collection:'acount'})
const courseSchema=new Schema({
    name:String,
    teacher:{
        type:String,
        ref:'acount'
    },
    lesson:[],
    country:{}
},{collection:'course'})

const cardSchema=new Schema({
    seri:String,
    bank:String
    
},{collection:'card'})

const productSchema=new Schema({
    name:String,
    price:Number,
    categories:String
},{collection:'products'})
const acountmodel=mongoose.model('acount',acountSchema)
const coursemodel=mongoose.model('course',courseSchema)
const cardmodel=mongoose.model('cardmodel',cardSchema)
const productmodel=mongoose.model('productmodel',productSchema)

// acountmodel.find({

// }).populate('course')
// .populate({
//     path:'course',
//     populate:{
//        path:'teacher'
        
//     }
// })
// .populate('list_san_pham.san_pham')
// .then(data=>{console.log(data)})
// .catch(err=>{console.log(err)})



.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})