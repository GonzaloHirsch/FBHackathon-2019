pragma solidity ^0.5.0;

// TODO: Change visibility of functions.
// i.e: addUniversity should only be called from the contract owner


contract UniversityProxy {

    struct Course {
        string name;
        uint id;
        string[] teachers;
        uint[] students;
    }

    struct University {
        string name;
        uint id;
        mapping (uint => Course) courses;
    }

    mapping (uint => University) universities;

    constructor() public {

    }

    function addUniversity(string memory _name, uint _id) public returns(bool){
        universities[_id].name  = _name;
        universities[_id].id = _id;
        return true;
    }

    function getUniversityName(uint _id) public view returns (string memory){
        return universities[_id].name;
    }

}
