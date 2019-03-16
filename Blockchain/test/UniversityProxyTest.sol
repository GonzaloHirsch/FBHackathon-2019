pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/UniversityProxy.sol";
import "../contracts/Main.sol";

contract UniversityProxyTest {

    function testAddUniversity() public {
        Main main = Main(DeployedAddresses.Main());
        UniversityProxy up = UniversityProxy(main.universityStorage());
        string memory name = "TEST";
        uint id = 1;
        up.addUniversity(name, id);
        Assert.equal(up.getUniversityName(id),name, "Name does not match");
    }
}
