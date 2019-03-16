pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Main.sol";
import "../contracts/UniversityProxy.sol";
import "../contracts/UniversityContract.sol";

contract UniversityContractTest {

    function testAddCourse() public {
      Main main = Main(DeployedAddresses.Main());
      UniversityContract uc = UniversityContract(main.universityContract());
      StudentProxy sp = StudentProxy(main.studentStorage());
      string memory name = "TEST";
      uint id = 1;

      string memory studentName = "STUDENT";
      uint idStudent = 1;

      string memory courseName = "SUBJECT";
      uint idSubject = 1;
      uint capacity = 5;
      string memory teacher = "TEACHER";
      /* string memory teacherName = "TEACHER";
      teachers.push(teacherName); */
      uc.addUniversity(name, id);
      uc.addCourse(id, courseName, capacity, teacher);
      sp.addStudent(studentName, idStudent);
      //Assert.equal(uc.getLength(id, idSubject), 0, "Bla");
      uc.addStudentToCourse(id, idSubject, idStudent);
      uc.evaluateCourse(idStudent, idSubject, 10);
      Assert.equal(uc.getStudentGrade(idStudent, idSubject), 10, "Does not match");
    }
}
