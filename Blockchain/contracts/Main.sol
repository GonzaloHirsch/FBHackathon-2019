pragma solidity ^0.5.0;

import "./StudentProxy.sol";

contract Main {

    StudentProxy public studentStorage;

    constructor() payable public {
        studentStorage = new StudentProxy();
    }

    function addStudent(string memory _name, uint _id) public{
        studentStorage.addStudent(_name, _id);
    }

    function getStudentName(uint _id) public view returns(string memory){
        return studentStorage.getName(_id);
    }

}
