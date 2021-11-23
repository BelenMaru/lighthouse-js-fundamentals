// jshint esversion:6

// Create a single object to organize
// Function will receive an array of instructor objects, and will return a new object 

const organizeInstructors = function(instructors) {
  let courseInstructor = {};

  for (const instructor of instructors) {
    const name = [];
    if (Object.keys(courseInstructor).toString() === instructor.course) {
      courseInstructor[instructor.course] = name.push(instructor.name);
    } else {
      courseInstructor[instructor.course] = instructor.name;
    }

  }
  return courseInstructor;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

