pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/StudentProxy.sol";
import "../contracts/Main.sol";

contract StudentProxyTest {

    Main main;
    StudentProxy sp;
    uint studentId = 1;
    uint universityId = 2;
    uint courseId = 3;
    uint grade = 10;

    function beforeAll() public{
        main = Main(DeployedAddresses.Main());
        sp = StudentProxy(main.studentStorage());
    }

    function testAddUniversity() public {
        string memory studentName = "Nacho Student";
        sp.addStudent(studentName,studentId);
        Assert.equal(sp.getStudentName(studentId),studentName, "Name does not match");
    }

    function testAddCourse() public {
        sp.addCourse(studentId, universityId, courseId);
        Assert.equal(sp.getCourses(studentId)[0], courseId, "Course does not match");
        Assert.equal(sp.getCourseUniversity(studentId, courseId), universityId, "University does not match");
    }

    function testEvaluateCourse() public{
        sp.evaluateCourse(studentId, courseId, grade);
        Assert.equal(sp.getCourseGrade(studentId, courseId), grade, "Grade does not match
    }


}
