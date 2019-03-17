App = {
  web3Provider: null,
  contracts: {},

  //-----------------------------------------------------------------------------------------------------------------------
  init: async function() {

    return await App.initWeb3();
  },

  //-----------------------------------------------------------------------------------------------------------------------
  //Leave this like this, it's for the ethereum plugin on metamask anf other browsers
  initWeb3: async function() {
        // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },
  //-----------------------------------------------------------------------------------------------------------------------
  //HERE WE HAVE TO INITIATE THE CONTRACT
  initContract: function() {
      $.getJSON('Main.json', function(data) {
    // Get the necessary contract artifact file and instantiate it with truffle-contract
    var MainArtifact = data;
    App.contracts.Main = TruffleContract(MainArtifact);

    // Set the provider for our contract
    App.contracts.Main.setProvider(App.web3Provider);

    // Use our contract to retrieve and mark the adopted pets
    //return App.markAdopted();
  });

    return App.bindEvents();
  },
//-----------------------------------------------------------------------------------------------------------------------
  //HERE WE BIND ALL THE EVENTS
  bindEvents: function() {
    document.getElementById('btnCreateStudent').addEventListener("click", App.createStudent);
    document.getElementById('btnAddSubject').addEventListener("click", App.addCourse);
    document.getElementById('btnAddUniversity').addEventListener("click", App.addUniversity);
    document.getElementById('btnViewCourse').addEventListener("click", App.getCourse);
    //$(document).on('click', '.w3-button', App.createStudent);
  },
//-----------------------------------------------------------------------------------------------------------------------
  /*  HERE CREATE ALL THE FUNCTIONS TO BE USED  */
  //I left the example ones to have a reference
  createStudent: function(){
    var mainInstance;
    App.contracts.Main.deployed().then(function(instance){
      var studentStorage;
      mainInstance = instance;
      return mainInstance.studentStorage();
    }).then(function(studentStorageAddress){
      $.getJSON('StudentProxy.json', function(data) {
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        var StudentProxyArtifact = data;
        App.contracts.StudentProxy = TruffleContract(StudentProxyArtifact);

        // Set the provider for our contract
        App.contracts.StudentProxy.setProvider(App.web3Provider);

        App.contracts.StudentProxy.at(studentStorageAddress).then(function(instance){
          studentStorage = instance;
          return studentStorage;
        }).then(function(ss){
          return studentStorage.addStudent("Guido", 5);
        });
      });
    });
      return mainInstance;
    },

  addCourse: function(){
    var mainInstance;
    App.contracts.Main.deployed().then(function(instance){
      var subInstance;
      mainInstance = instance;
      return mainInstance.universityContract();
    }).then(function(address){
      $.getJSON('UniversityContract.json', function(data) {
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        var Artifact = data;
        App.contracts.UniversityContract = TruffleContract(Artifact);

        // Set the provider for our contract
        App.contracts.UniversityContract.setProvider(App.web3Provider);

        App.contracts.UniversityContract.at(address).then(function(instance){
          subInstance = instance;
          return subInstance;
        }).then(function(ss){
          return subInstance.addCourse(2, "NACHO COURSE", 10, "GERO");
        });
      });
    });
      return mainInstance;
  },

  getCourse: function(){
    var mainInstance;
    App.contracts.Main.deployed().then(function(instance){
      var subInstance;
      mainInstance = instance;
      return mainInstance.universityContract();
    }).then(function(address){
      $.getJSON('UniversityContract.json', function(data) {
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        var Artifact = data;
        App.contracts.UniversityContract = TruffleContract(Artifact);

        // Set the provider for our contract
        App.contracts.UniversityContract.setProvider(App.web3Provider);

        App.contracts.UniversityContract.at(address).then(function(instance){
          subInstance = instance;
          return subInstance;
        }).then(function(ss){
          return subInstance.getCourseName(2, 1);
        }).then(function(name){
          document.getElementById('lblTitle').innerHTML = name ;
          //console.log(name);
        });
      });
    });
      return mainInstance;
  },

  addUniversity: function(){
    var mainInstance;
    App.contracts.Main.deployed().then(function(instance){
      var subInstance;
      mainInstance = instance;
      return mainInstance.universityContract();
    }).then(function(address){
      $.getJSON('UniversityContract.json', function(data) {
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        var Artifact = data;
        App.contracts.UniversityContract = TruffleContract(Artifact);

        // Set the provider for our contract
        App.contracts.UniversityContract.setProvider(App.web3Provider);

        App.contracts.UniversityContract.at(address).then(function(instance){
          subInstance = instance;
          return subInstance;
        }).then(function(ss){
          return subInstance.addUniversity("GONZA UNIVERSITY", 2);
        });
      });
    });
      return mainInstance;
  }
  //-----------------------------------------------------------------------------------------------------------------------
};


$(function() {
  $(window).load(function() {
    App.init();
  });
});
