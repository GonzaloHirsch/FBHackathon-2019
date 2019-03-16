pragma solidity ^0.5.0;

import "./StudentProxy.sol";
import "./StudentContract.sol";
import "./UniversityProxy.sol";
import "./UniversityContract.sol";

contract Main {

    StudentProxy public studentStorage;
    StudentContract public studentContract;
    UniversityProxy public universityStorage;
    UniversityContract public universityContract;

    address private owner;

    constructor() public {
        owner = msg.sender;
        studentContract = new StudentContract();
        studentStorage = StudentProxy(studentContract.studentStorage());
        universityStorage = new UniversityProxy();
        universityContract = new UniversityContract(universityStorage, studentContract);
    }

}
