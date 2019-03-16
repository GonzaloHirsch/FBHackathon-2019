pragma solidity ^0.5.0;

contract StudentProxy {

    struct Course {
        uint universityId;
        uint courseId;
        uint grade;
        bool isActive;
    }

    struct Student {
        uint id;
        string name;
        uint[] coursesId;
        mapping (uint => Course) courses;
    }

    mapping (uint => Student) students;
    uint public studentCount = 0;

    constructor() public {
    }

    function addStudent(string memory _name, uint _id) public {
        require(students[_id].id == 0);
        students[_id].name = _name;
        students[_id].id = _id;
        studentCount++;
    }

    function getStudentName(uint _student) public view returns (string memory) {
        return students[_student].name;
    }

    function addCourse(uint _student, uint _university, uint _course) public {
        students[_student].coursesId.push(_course);
        students[_student].courses[_course] = Course(_university, _course, 0, true);
    }

    function setCourseActive(uint _student, uint _course, bool _isActive) public {
        require(students[_student].courses[_course].courseId == _course);
        students[_student].courses[_course].isActive = _isActive;
    }

    function setCourseGrade(uint _student, uint _course, uint _grade) public{
        require(students[_student].courses[_course].courseId == _course);
        students[_student].courses[_course].grade = _grade;
    }

    function getCourses(uint _student) public view returns (uint[] memory) {
        require(students[_student].id == _student);
        return students[_student].coursesId;
    }

    function getCourseActive(uint _student, uint _course) public view returns (bool) {
        require(students[_student].courses[_course].courseId == _course);
        return students[_student].courses[_course].isActive;
    }
    function getCourseGrade(uint _student, uint _course) public view returns (uint) {
        require(students[_student].courses[_course].courseId == _course);
        return students[_student].courses[_course].grade;
    }

    function getCourseUniversity(uint _student, uint _course) public view returns (uint) {
        require(students[_student].courses[_course].courseId == _course);
        return students[_student].courses[_course].universityId;
    }



}
