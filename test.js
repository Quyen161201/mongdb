const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testmongdb')
const Schema=mongoose.Schema
const acountSchema=new Schema({
    username:String,
    password:String,
    age:Number,
    salary:Number,
    course:{type:String,
            ref:'course'
    },
    the_ngan_hang:{type:String},
    list_san_pham:{
        san_pham:{
            type:String,
            ref:'products'
        }
                   
    }

},{collection:'acount'})
const courseSchema=new Schema({
    name:String,
    teacher:{
        type:String,
        ref:'acount',
    },
    lesson:[],
    country:{}
},{collection:'course'})

const productSchema=new Schema({
    name:String,
    price:Number
},{collection:'products'})
const acountModel=mongoose.model('acount',acountSchema)
const coursemodel=mongoose.model('course',courseSchema);
const productmodel=mongoose.model('products',productSchema)

acountModel.find({
}).populate('course')
.populate({
    path:'course',
    populate:{path:'teacher'} 
})
.populate('list_san_pham.san_pham')
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})

