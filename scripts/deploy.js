const { ethers } = require("hardhat")

const main = async()=>{
  console.log("hello world")
  const contract  = await ethers.getContractFactory('ToDo')
  const ToDo = await contract.deploy()
  console.log(await ToDo.getAddress())
 let add =  await ToDo.addTask("hello")
 
 let getTask = await ToDo.getTask()
  add =  await ToDo.addTask("hello22")
  getTask = await ToDo.getTask()
 console.log(getTask)
console.log("Removing a task******");
let removeTask = await ToDo.setTaskComplete(getTask[0].id)
await removeTask.wait(1)
getTask = await ToDo.getTask()
console.log(getTask)

}



main().then(()=>{
  process.exit(0)
}).catch((err)=>{
  console.log(err)
  process.exit(1)
})
