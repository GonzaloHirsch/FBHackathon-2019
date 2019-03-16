pragma solidity ^0.5.0;

import "./StudentProxy.sol";

contract StudentContract {


    StudentProxy studentStorage;

    constructor() public {
        studentStorage = new StudentProxy();
    }

    function evaluateCourse(uint _student, uint _course, uint _grade) public {
        require(studentStorage.getCourseActive(_student, _course) == true);
        studentStorage.setCourseActive(_student, _course, false);
        studentStorage.setCourseGrade(_student, _course, _grade);
    }

    function getStorage() public returns(address){
        return studentStorage;
    }
}
