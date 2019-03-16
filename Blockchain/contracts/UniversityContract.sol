pragma solidity ^0.5.0;

import "./UniversityProxy.sol";
import "./StudentProxy.sol";
import "./Main.sol";

contract UniversityContract {

  UniversityProxy public universityStorage;
  StudentProxy public studentStorage;

  constructor(UniversityProxy us, StudentProxy st) public {
    universityStorage = us;
    studentStorage = st;
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
      return universityStorage.addStudentToCourse(_universityID, _courseID, _studentID);
  }

  function markCourseEnd(uint _universityID, uint _courseID) public returns (bool){
      return universityStorage.markCourseEnd(_universityID, _courseID);
  }

  function evaluateCourse(uint _studentID, uint _courseID, uint _grade) public {
      return studentStorage.evaluateCourse(_courseID, _studentID, _grade);
  }

  function getStudentGrade(uint _studentID, uint _courseID) public view returns(uint){
      return studentStorage.getCourseGrade(_studentID, _courseID);
  }
}
