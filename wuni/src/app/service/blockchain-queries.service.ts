import { Injectable, Inject } from '@angular/core';


import Web3 from 'web3';
import { WEB3 } from '../app.module';


@Injectable({
  providedIn: 'root'
})
export class BlockchainQueriesService {

  constructor(@Inject(WEB3) private web3: Web3) {

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
    console.log(this.web3);
    console.log(this.web3.eth);
    const mainContract = new this.web3.eth.contract(abiMain, address)
 
    this.universityContract = new this.web3.eth.contract(abiUniContract, mainContract.univeristyContract);
    this.studentContract  = new this.web3.eth.contract(abiStdContract, mainContract.studentContract);
    // const universityStorage = new this.web3.eth.Contract(abiUniContract, mainContract.universityStorage());
    this.studentStorage = new this.web3.eth.contract(abiStdStorage, mainContract.studentStorage);
   }
   studentContract;
  studentStorage
    universityContract;
  //--------------------------------University contract functions------------------------------------------------

  public addUniversity1(_universityName, _universityID){
    //console.log(this.universityContract);
    this.universityContract.addUniversity(_universityName, _universityID);
}

  addCourse(_universityID, _courseName, _capacity, _teacher){
      this.universityContract.addCourse(_universityID, _courseName, _capacity, _teacher);
  }

   getCourseName(_universityID, _courseID){
      return this.universityContract.getCourseName(_universityID, _courseID);
  }

   addStudentToCourse(_universityID, _courseID, _studentID){
    this.universityContract.addStudentToCourse(_universityID, _courseID, _studentID);
  }

   markCourseEnd(_universityID, _courseID){
    this.universityContract.markCourseEnd(_universityID, _courseID);
  }

  //  evaluateCourse(_studentID, _courseID, _grade){
  //     universityContract.evaluateCourse(_studentID, _courseID, _grade);
  // }

   getStudentGrade(_studentID, _courseID){
      return this.universityContract.getStudentGrade(_studentID, _courseID);
  }

  //--------------------------------Student contract s------------------------------------------------

   evaluateCourse(_studentID, _courseID, _grade){
      this.studentContract.evaluateCourse(_studentID, _courseID, _grade);
  }

   getActiveCourses(_studentID){
      return this.studentContract.getActiveCourses(_studentID);
  }

   getNonActiveCourses(_studentID){
      return this.studentContract.getNonActiveCourses(_studentID);
  }

  //--------------------------------StudentProxy contract s------------------------------------------------

   addStudent(_name, _studentID){
      return this.studentStorage.addStudent(_name, _studentID);
  }

   getStudentName(_studentID){
      return this.studentStorage.getStudentName(_studentID);
  }

   addCourseToStudent(_studentID, _universityID, _courseID){
      this.studentStorage.addCourse(_studentID, _universityID, _courseID);
  }

   setCourseActive(_studentID, _courseID, _isActive){
      this.studentStorage.setCourseActive(_studentID, _courseID, _isActive);
  }

   setCourseGrade(_studentID, _courseID, _grade){
      this.studentStorage.setCourseGrade(_studentID, _courseID, _grade);
  }

   getCourses(_studentID){
      return this.studentStorage.getCourses(_studentID);
  }

   getCourseActive(_studentID, _courseID){
      return this.studentStorage.getCourseActive(_studentID, _courseID);
  }

   getCourseGrade(_studentID, _courseID){
      return this.studentStorage.getCourseGrade(_studentID, _courseID);
  }

   getCourseUniversity(_studentID, _courseID){
      return this.studentStorage.getCourseUniversity(_studentID, _courseID);
  }
}