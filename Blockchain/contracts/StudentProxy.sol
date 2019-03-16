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

    function evaluateCourse(uint _student, uint _courseId, uint _grade) public{
        require(students[_student].courses[_courseId].courseId == _courseId);
        require(students[_student].courses[_courseId].isActive == true);
        Course storage course = students[_student].courses[_courseId];
        course.isActive = false;
        course.grade = _grade;
    }

    function getCourses(uint _student) public view returns (uint[] memory) {
        return students[_student].coursesId;
    }

    function getCourseGrade(uint _student, uint _course) public returns (uint) {
        require(students[_student].courses[_course].courseId == _course);
        return students[_student].courses[_course].grade;
    }



}
