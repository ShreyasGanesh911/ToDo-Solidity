export const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			}
		],
		"name": "addTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "noNote",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "setTaskComplete",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTask",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isComplete",
						"type": "bool"
					}
				],
				"internalType": "struct ToDo.Task[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]