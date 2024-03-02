// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
error noNote(string message);
contract ToDo{
    struct Task{
        uint id;
        string title;
        bool isComplete;
    }
    mapping(address=>Task[]) private tasks;
    
    function addTask(string memory _title) external{
        tasks[msg.sender].push(Task(block.timestamp,_title,false));  
    }

    function getTask() external view returns (Task[] memory){
        return tasks[msg.sender];
    }

    function setTaskComplete(uint _id) external{
        uint i;
        bool found = false;
        for(i=0;i<tasks[msg.sender].length;i++){
            if(tasks[msg.sender][i].id == _id){
                tasks[msg.sender][i].isComplete = true;
                found = true;
            }   
        }
        if(!found)
        revert noNote("No note found");
    }
}