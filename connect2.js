const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testmongdb');
const Schema=mongoose.Schema
const CourseSchema=new Schema({
    name: String,
    teacher: { type: String,
    ref:'acount'},
    lesson: [],
    country:{}

},{collection:'course'}

)
const AcountSchema=new Schema({
    username:String,
    password:String,
    age:Number,
    salary:Number,
    course: {type: String,
             ref:'course'
    },
    the_ngan_hang: {
        type:String,
        ref:'card'
    },
    san_pham:{type:String,
              ref:'product'
    }

}, {collection:'acount'})

const CardSchema= new Schema({
    seri:String,
    bank: String
},{collection:'card'})

const productSchema=new Schema({
    name:String,
    price:Number,
    
},{collection:'products'})

const Accountmodel=mongoose.model('acount',AcountSchema);
const Coursemodel=mongoose.model('course',CourseSchema)
const Cardmodel=mongoose.model('card',CardSchema);
const productmodel=mongoose.model('product',productSchema)


Accountmodel.find({}).populate('course')
                     .populate({
                       path: 'course',
                       populate:{path:'teacher'} 
                     })
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})

