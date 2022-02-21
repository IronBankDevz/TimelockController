// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleERC20 is ERC20("Simple ERC20 Token", "SET") {
    constructor() {
		_mint(msg.sender, 1_000_000_000 ether);
	}
}
