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
        mapping (uint => Course) course;
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
        students[_student].course[_course] = Course(_university, _course, 0, true);
    }

    function evalutateCourse(uint _student, uint _courseId, uint _grade) public{
        require(students[_student].course[_courseId].courseId != 0);
        require(students[_student].course[_courseId].isActive == true);
        Course storage course = students[_student].course[_courseId];
        course.isActive = false;
        course.grade = _grade;
    }

    function getCourses(uint _student) public returns (uint[] memory) {
        return students[_student].coursesId;
    }



}
