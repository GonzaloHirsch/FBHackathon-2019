pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/StudentProxy.sol";
import "../contracts/Main.sol";

contract StudentProxyTest {

    Main main;
    StudentProxy sp;

    function beforeAll() public{
        main = Main(DeployedAddresses.Main());
        sp = StudentProxy(main.studentStorage());
    }

    function testAddUniversity() public {
        string memory name = "Nacho Test";
        uint id = 1;
        sp.addStudent(name,id);
        Assert.equal(sp.getStudentName(id),name, "Name does not match");
    }

    function testAddCourse() {
        //Empty
    }


}
