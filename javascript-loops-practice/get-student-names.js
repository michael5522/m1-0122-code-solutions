/* exported getStudentNames */
function getStudentNames(students) {
  var studentArray = [];
  for (var i = 0; i < students.length; i++) {
    studentArray.push(students[i].name);
  }
  return studentArray;
}
