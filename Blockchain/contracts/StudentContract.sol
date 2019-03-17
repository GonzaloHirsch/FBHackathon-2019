pragma solidity ^0.5.0;

import "./StudentProxy.sol";

contract StudentContract {


    StudentProxy public studentStorage;

    constructor() public {
        studentStorage = new StudentProxy();
    }

    function evaluateCourse(uint _student, uint _course, uint _grade) public {
        require(studentStorage.getCourseActive(_student, _course) == true);
        studentStorage.setCourseActive(_student, _course, false);
        studentStorage.setCourseGrade(_student, _course, _grade);
    }

    function getActiveCourses(uint _student) view public returns(uint[] memory){
        uint[] memory courses = studentStorage.getCourses(_student);
        uint j = 0;
        uint length = courses.length;
        uint[] memory activeCourses = new uint[](length);
        for(uint i = 0; i < length; i++){
            if(studentStorage.getCourseActive(_student, courses[i])){
                activeCourses[j] = (courses[i]);
                j++;
            }
        }
        courses = new uint[](j);
        for(uint i = 0; i < j; i++)
            courses[i] = activeCourses[i];
        return courses;
    }

    function getNonActiveCourses(uint _student) view public returns(uint[] memory){
        uint[] memory courses = studentStorage.getCourses(_student);
        uint j = 0;
        uint length = courses.length;
        uint[] memory nonActiveCourses = new uint[](length);
        for(uint i = 0; i < length; i++){
            if(!studentStorage.getCourseActive(_student, courses[i])){
                nonActiveCourses[j] = (courses[i]);
                j++;
            }
        }
        courses = new uint[](j);
        for(uint i = 0; i < j; i++)
            courses[i] = nonActiveCourses[i];
        return courses;
    }
}
