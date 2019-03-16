pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Main.sol";
import "../contracts/UniversityProxy.sol";
import "../contracts/UniversityContract.sol";

contract UniversityContractTest {

    function testAddCourse() public {
      Main main = Main(DeployedAddresses.Main());
      UniversityProxy up = UniversityProxy(main.universityStorage());
      string memory name = "TEST";
      uint id = 1;
      up.addUniversity(name, id);

      UniversityContract uc = UniversityContract(main.universityContract());
      string memory courseName = "SUBJECT";
      uint idSubject = 1;
      uint capacity = 5;
      string memory teacher = "TEACHER";
      /* string memory teacherName = "TEACHER";
      teachers.push(teacherName); */
      Assert.equal(uc.addCourse(id, courseName, capacity, teacher), true, "Error while adding course");
      Assert.equal(uc.getCourseName(id, idSubject),courseName, "Name does not match");
    }
}
