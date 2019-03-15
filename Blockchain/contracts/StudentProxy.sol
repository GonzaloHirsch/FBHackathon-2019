pragma solidity ^0.5.0;


contract StudentProxy{

    struct Course {
        uint universityId;
        uint courseId;
        uint grade;
    }

    struct Student {
        string name;
        uint id;
        //Course[] coursesActive;
        //Course[] coursesPast;
    }

    Student[] students;
    uint studentCount = 0;

    constructor() public {
        //students = new Student[](7);
    }

    function addStudent(string memory _name, uint _id) public{
        students.push(Student(_name, _id));
        studentCount++;
    }
    function getName(uint student) public view returns (string memory) {
        return students[student].name;
    }
    /*
    function getId(address student) {

    }*/

}
