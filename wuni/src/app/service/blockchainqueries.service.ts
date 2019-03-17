import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockchainqueriesService {

  constructor() {
    const Web3 = require('web3');
    const address = "0xD6fbB9Ee231478D1D014CcCB15177BA6600296a5";
    const abiMain = [
      {
        "constant": true,
        "inputs": [],
        "name": "studentContract",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "studentStorage",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "universityContract",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "universityStorage",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ];
    const abiUniContract = [
      {
        "constant": true,
        "inputs": [],
        "name": "studentContract",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "studentStorage",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "universityStorage",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "us",
            "type": "address"
          },
          {
            "name": "sc",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "addUniversity",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_universityID",
            "type": "uint256"
          },
          {
            "name": "_courseName",
            "type": "string"
          },
          {
            "name": "_capacity",
            "type": "uint256"
          },
          {
            "name": "_teacher",
            "type": "string"
          }
        ],
        "name": "addCourse",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_universityID",
            "type": "uint256"
          },
          {
            "name": "_courseID",
            "type": "uint256"
          }
        ],
        "name": "getCourseName",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_universityID",
            "type": "uint256"
          },
          {
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "name": "_studentID",
            "type": "uint256"
          }
        ],
        "name": "addStudentToCourse",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_universityID",
            "type": "uint256"
          },
          {
            "name": "_courseID",
            "type": "uint256"
          }
        ],
        "name": "markCourseEnd",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_universityID",
            "type": "uint256"
          },
          {
            "name": "_courseID",
            "type": "uint256"
          }
        ],
        "name": "getLength",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "name": "_courseID",
            "type": "uint256"
          },
          {
            "name": "_grade",
            "type": "uint256"
          }
        ],
        "name": "evaluateCourse",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_studentID",
            "type": "uint256"
          },
          {
            "name": "_courseID",
            "type": "uint256"
          }
        ],
        "name": "getStudentGrade",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ];
    const abiStdContract = [
      {
        "constant": true,
        "inputs": [],
        "name": "studentStorage",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          },
          {
            "name": "_course",
            "type": "uint256"
          },
          {
            "name": "_grade",
            "type": "uint256"
          }
        ],
        "name": "evaluateCourse",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          }
        ],
        "name": "getActiveCourses",
        "outputs": [
          {
            "name": "",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          }
        ],
        "name": "getNonActiveCourses",
        "outputs": [
          {
            "name": "",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ];
    const abiStdStorage = [
      {
        "constant": true,
        "inputs": [],
        "name": "studentCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "addStudent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          }
        ],
        "name": "getStudentName",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          },
          {
            "name": "_university",
            "type": "uint256"
          },
          {
            "name": "_course",
            "type": "uint256"
          }
        ],
        "name": "addCourse",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          },
          {
            "name": "_course",
            "type": "uint256"
          },
          {
            "name": "_isActive",
            "type": "bool"
          }
        ],
        "name": "setCourseActive",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          },
          {
            "name": "_course",
            "type": "uint256"
          },
          {
            "name": "_grade",
            "type": "uint256"
          }
        ],
        "name": "setCourseGrade",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          }
        ],
        "name": "getCourses",
        "outputs": [
          {
            "name": "",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          },
          {
            "name": "_course",
            "type": "uint256"
          }
        ],
        "name": "getCourseActive",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          },
          {
            "name": "_course",
            "type": "uint256"
          }
        ],
        "name": "getCourseGrade",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_student",
            "type": "uint256"
          },
          {
            "name": "_course",
            "type": "uint256"
          }
        ],
        "name": "getCourseUniversity",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ];

    const mainContract = new web3.eth.Contract(abiMain, address)
    const univeristyContract = new web3.eth.Contract(abiUniContract, mainContract.univeristyContract());
    const studentContract = new web3.eth.Contract(abiStdContract, mainContract.studentContract());
    // const universityStorage = new web3.eth.Contract(abiUniContract, mainContract.universityStorage());
    const studentStorage = new web3.eth.Contract(abiStdStorage, mainContract.studentStorage());
   }

  //--------------------------------University contract functions------------------------------------------------

  function addCourse(_universityID, _courseName, _capacity, _teacher){
      universityContract.addCourse(_universityID, _courseName, _capacity, _teacher);
  }

  function getCourseName(_universityID, _courseID){
      return universityContract.getCourseName(_universityID, _courseID);
  }

  function addStudentToCourse(_universityID, _courseID, _studentID){
      universityContract.addStudentToCourse(_universityID, _courseID, _studentID);
  }

  function markCourseEnd(_universityID, _courseID){
      universityContract.markCourseEnd(_universityID, _courseID);
  }

  // function evaluateCourse(_studentID, _courseID, _grade){
  //     universityContract.evaluateCourse(_studentID, _courseID, _grade);
  // }

  function getStudentGrade(_studentID, _courseID){
      return universityContract.getStudentGrade(_studentID, _courseID);
  }

  //--------------------------------Student contract functions------------------------------------------------

  function evaluateCourse(_studentID, _courseID, _grade){
      studentContract.evaluateCourse(_studentID, _courseID, _grade);
  }

  function getActiveCourses(_studentID){
      return studentContract.getActiveCourses(_studentID);
  }

  function getNonActiveCourses(_studentID){
      return studentContract.getNonActiveCourses(_studentID);
  }

  //--------------------------------StudentProxy contract functions------------------------------------------------

  function addStudent(_name, _studentID){
      return studentStorage.addStudent(_name, _studentID);
  }

  function getStudentName(_studentID){
      return studentStorage.getStudentName(_studentID);
  }

  function addCourse(_studentID, _universityID, _courseID){
      studentStorage.addCourse(_studentID, _universityID, _courseID);
  }

  function setCourseActive(_studentID, _courseID, _isActive){
      studentStorage.setCourseActive(_studentID, _courseID, _isActive);
  }

  function setCourseGrade(_studentID, _courseID, _grade){
      studentStorage.setCourseGrade(_studentID, _courseID, _grade);
  }

  function getCourses(_studentID){
      return studentStorage.getCourses(_studentID);
  }

  function getCourseActive(_studentID, _courseID){
      return studentStorage.getCourseActive(_studentID, _courseID);
  }

  function getCourseGrade(_studentID, _courseID){
      return studentStorage.getCourseGrade(_studentID, _courseID);
  }

  function getCourseUniversity(_studentID, _courseID){
      return studentStorage.getCourseUniversity(_studentID, _courseID);
  }
}
