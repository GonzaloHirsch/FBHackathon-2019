pragma solidity ^0.5.0;

import "./StudentProxy.sol";
import "./UniversityProxy.sol";
import "./UniversityContract.sol";

contract Main {

    StudentProxy public studentStorage;
    UniversityProxy public universityStorage;
    UniversityContract public universityContract;

    address private owner;

    constructor() public {
        owner = msg.sender;
        studentStorage = new StudentProxy();
        universityStorage = new UniversityProxy();
        universityContract = new UniversityContract(universityStorage, studentStorage);
    }

    function addUniversity(string memory _name, uint _id) public returns(bool){
        require(owner == msg.sender);
        return universityStorage.addUniversity(_name, _id);
    }

}
