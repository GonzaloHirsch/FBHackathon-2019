pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Main.sol";

contract MainTest {
  function testAddStudent() public {
    Main main = Main(DeployedAddresses.Main());
    string memory expected = "Nacho";

    Assert.equal(main.addStudent("Nacho"), expected, "Should return same string");
  }
}
