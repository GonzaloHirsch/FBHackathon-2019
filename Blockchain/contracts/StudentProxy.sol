pragma solidity ^0.5.0;

contract StudentProxy{

    struct Course {
        uint universityId;
        uint courseId;
        uint grade;
    }

    struct Student {
        uint id;
        string name;
        //Course[] coursesActive;
        //Course[] coursesPast;
    }

    mapping (uint => Student) students;
    uint public studentCount = 0;

    constructor() public {
    }

    function addStudent(string memory _name, uint _id) public {
        require(students[_id].id == 0);
        students[_id].name = _name;
        students[_id].id = _id;
        studentCount++;
    }

    function getName(uint student) public view returns (string memory) {
        return students[student].name;
    }

}
