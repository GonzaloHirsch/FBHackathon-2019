pragma solidity ^0.5.0;

import "./StudentProxy.sol";
import "./UniversityProxy.sol";
import "./UniversityContract.sol";

contract Main {

    StudentProxy public studentStorage;
    UniversityProxy public universityStorage;
    UniversityContract public universityContract;

    constructor() public {
        studentStorage = new StudentProxy();
        universityStorage = new UniversityProxy();
        universityContract = new UniversityContract(universityStorage);
    }

    function addStudent(string memory _name, uint _id) public{
        studentStorage.addStudent(_name, _id);
    }

    function getStudentName(uint _id) public view returns(string memory){
        return studentStorage.getName(_id);
    }

}
