pragma solidity ^0.5.0;

// TODO: Change visibility of functions.
// i.e: addUniversity should only be called from the contract owner


contract UniversityProxy {

  uint public totalCourseCount = 0;

    struct Course {
        string name;
        uint id;
        uint capacity;
        string teacher;
        bool active;
        uint[] students;
    }

    struct University {
        string name;
        uint id;
        uint numberOfCourses;
        mapping (uint => Course) courses;
    }

    mapping (uint => University) universities;

    constructor() public {

    }

    function addUniversity(string memory _name, uint _id) public returns(bool){
      //Verify "master admin" is adding a university
        universities[_id].name  = _name;
        universities[_id].numberOfCourses = 0;
        universities[_id].id = _id;
        return true;
    }

    function getUniversityName(uint _id) public view returns (string memory){
        return universities[_id].name;
    }

    function addCourse(uint _universityID, string memory _courseName, uint _capacity, string memory _teacher) public returns(bool){
        require(universities[_universityID].id == _universityID);   //Verify if the university exists
        Course memory newCourse = Course({id:totalCourseCount + 1 , name:_courseName, capacity:_capacity, teacher:_teacher, students: new uint[](_capacity), active: true});
        universities[_universityID].courses[newCourse.id] = newCourse;
        return true;
    }

    function getCourseName(uint _universityID, uint _courseID) public view returns(string memory){
        return universities[_universityID].courses[_courseID].name;
    }

    function addStudentToCourse(uint _universityID, uint _courseID, uint _studentID) public returns (bool) {
        require(universities[_universityID].id == _universityID && universities[_universityID].courses[_courseID].id == _courseID && universities[_universityID].courses[_courseID].students[_studentID] != _studentID && universities[_universityID].courses[_courseID].capacity > niversities[_universityID].courses[_courseID].students.length);
        universities[_universityID].courses[_courseID].students.push(_studentID);
        return true;
    }

    function markCourseEnd(uint _universityID, uint _courseID) public returns (bool){
        require(universities[_universityID].id == _universityID && universities[_universityID].courses[_courseID].id == _courseID);
        universities[_universityID].courses[_courseId].active = false;
        return true;
    }
}
