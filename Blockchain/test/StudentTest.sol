pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/StudentProxy.sol";
import "../contracts/StudentContract.sol";
import "../contracts/Main.sol";

contract StudentTest {

    Main main;
    StudentProxy sp;
    StudentContract sc;
    uint studentId = 1;
    uint universityId = 2;
    uint courseId = 3;
    uint grade = 10;

    function beforeAll() public{
        main = Main(DeployedAddresses.Main());
        sc = StudentContract(main.studentContract());
        sp = StudentProxy(sc.studentStorage());
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

    function testCourseProperties() {

    }

    function testEvaluateCourse() public{
        sc.evaluateCourse(studentId, courseId, grade);
        Assert.equal(sp.getCourseGrade(studentId, courseId), grade, "Grade does not match");
        Assert.equal(sp.getCourseActive(studentId, courseId), false, "Course is active after evaluation");
    }


}
