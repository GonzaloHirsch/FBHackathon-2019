pragma solidity ^0.5.0;

import "./StudentContract.sol";
import "./UniversityProxy.sol";
import "./Main.sol";

contract UniversityContract {

  UniversityProxy public universityStorage;
  StudentProxy public studentStorage;
  StudentContract public studentContract;

  constructor(UniversityProxy us, StudentContract sc) public {
    universityStorage = us;
    studentContract = sc;
    studentStorage = StudentProxy(studentContract.studentStorage());
  }
  function addUniversity(string memory _name, uint _id) public returns(bool){
      return universityStorage.addUniversity(_name, _id);
  }

  function addCourse(uint _universityID, string memory _courseName, uint _capacity, string memory _teacher) public returns(bool){
      return universityStorage.addCourse(_universityID, _courseName, _capacity, _teacher);
  }

  function getCourseName(uint _universityID, uint _courseID) public view returns(string memory){
      return universityStorage.getCourseName(_universityID, _courseID);
  }

  function addStudentToCourse(uint _universityID, uint _courseID, uint _studentID) public returns (bool) {
      universityStorage.addStudentToCourse(_universityID, _courseID, _studentID);
      studentStorage.addCourse(_studentID, _universityID, _courseID);
      return true;
  }

  function markCourseEnd(uint _universityID, uint _courseID) public returns (bool){
      return universityStorage.markCourseEnd(_universityID, _courseID);
  }

  function getLength(uint _universityID, uint _courseID) public view returns (uint){
    return universityStorage.getLength(_universityID, _courseID);
  }

  function evaluateCourse(uint _studentID, uint _courseID, uint _grade) public {
      return studentContract.evaluateCourse(_studentID, _courseID, _grade);
  }

  function getStudentGrade(uint _studentID, uint _courseID) public view returns(uint){
      return studentStorage.getCourseGrade(_courseID, _studentID);
  }
}
