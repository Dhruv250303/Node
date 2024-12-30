const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/testDatabase")
  .then(() => {
    console.log("Connection is Successful");
  })
  .catch((err) => console.error("Couldn't connect to mongodb", err));

//Schema

// const courseScheme = new mongoose.Schema({
//   name: String,
//   creator: String,
//   publishedDate: { type: Date, default: Date.now },
//   isPublished: Boolean,
//   rating: Number,
// });


const courseScheme = new mongoose.Schema({
  name: {type:String, required:true,minlength:5,maxlength:50},
  category:{
    type:String,
    required:true,
    enum:['DSA','Web','Data Science']
  },
  tags:{type:Array,validate:{
    validator:function (tags) {
        return tags.length > 1
    }
  }},
  creator: {type:String,required:true},
  publishedDate: { type: Date, default: Date.now },
  isPublished: {type:String,required:true},
  rating: {type:Number,required:function(){return this.isPublished}}
});

const Course = mongoose.model("Course", courseScheme);

// async function createCourse() {

//     const course = new Course({
//         name : 'Python',
//         creator : 'Mrinal',
//         isPublished : true,
//         rating: 4.6
//     })

//     const result = await course.save()
//     console.log(result);
// }
async function createCourse() {

    const course = new Course({
        name : 'Rubal',
        category:'DSA',
        tags:['Code'],
        creator:'Adam',
        rating:4.0,
        isPublished:true
    })

    try {
        
    const result = await course.save()
    console.log(result);
    // await course.validate()

    } catch (error) {
        // console.log(error.message);
        for (field in error.errors) {
         console.log(error.errors);
         
        }

    }
}

createCourse() //Creating 

// >>>Comparison Operators<<<
// eq(equal)
// gt(greater than)
// gte()
// lt
// lte

// i
//not in

// Logical Operator
// or
// and

async function getCourses() {
  // const courses = await Course.find({rating:{$gte:4}}).select({name:1,publishedDate:1})
  const courses = await Course.find({ rating: { $in: [3.5, 4.2, 4.6] } })
    .select({ name: 1, publishedDate: 1 })
    .or([{ creator: "Dhruv" }, { rating: 5 }]);
  console.log(courses);
}

// getCourses(); //reading

async function updateCourse(id) {
    let course = await Course.findById(id)


    if (!course)  return

    course.name = 'C++'
    course.creator = 'DASA'
    
    const updatedCourse = await course.save()
    console.log(updatedCourse);
    

}

// updateCourse('676fa381ba2672806e89e136') //Updating 


async function deleteCourse(id) {
    let course = await Course.findByIdAndDelete(id)
    console.log(course);
    
}

// deleteCourse('676fa381ba2672806e89e136')//Deleting

