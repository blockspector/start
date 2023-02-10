pragma solidity ^0.8.0;

contract BlockspectorEqiToken {
    // Event to signal the transfer of tokens
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Mapping from addresses to token balances
    mapping(address => uint256) public balanceOf;

    // Total supply of tokens
    uint256 public totalSupply;

    // Function to transfer tokens from one address to another
    function transfer(address to, uint256 value) public {
        require(balanceOf[msg.sender] >= value, "Insufficient balance.");
        require(to != address(0), "Invalid address.");
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
    }

    // Function to check the balance of an address
    function checkBalance(address who) public view returns (uint256) {
        return balanceOf[who];
    }
}

