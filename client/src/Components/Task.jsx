import React, { useEffect, useState } from 'react'
import { checkMetaMask, connectWallet, contractInfo } from '../hooks/checkMeta'

export default function Task() {
    const[check,setCheck] = useState(false)
    const [account,setAccount] = useState("")
    const [task,setTask] = useState([])
    const [taskString,setTaskString] = useState("")
    const [contract,setContrcat] = useState(null)
    const [provider,setProvider] = useState(null)
    const [signer,setSigner] = useState(null)
    const connectWalletClick = async(e)=>{
      e.preventDefault()
      const responce = await connectWallet()
      console.log(responce)
      if(responce.success){
        setAccount(responce.account[0])
        const resp = await contractInfo()
        if(resp.success){
          console.log(resp.contract)
          setContrcat(resp.contract)
          setProvider(resp.Provider)
          setSigner(resp.signer)
        }
        else
          return setAccount("Failed to get account 22")
      }
        
      else
        setAccount("Failed to get account number")
    }
      const getTaskClick = async()=>{
        const data = await contract.getTask()
        if(data.length !==0){
          console.log(data[0])
          setTask(data)
        }
        else
        console.log("Looks like your tasks are empty")
     
      }
    // const handleClick = async(e)=>{
    //     e.preventDefault()
    //     const res = await checkMetaMask()
    //     console.log(res)
    //     if(res)
    //         console.log("Hey meta mask user")
    //     else
    //         console.log('Oops need to install meta mask')
    // }
    const addTaskClick = async()=>{
      setTaskString("")
      const transaction  = await contract.addTask(taskString)
      transaction.wait()
      const data = await contract.getTask()
      console.log(data)
      
    }
    const getTaskId = async(e)=>{
      const data = JSON.parse(e.currentTarget.value)
      console.log(data)
    }
    useEffect(()=>{
        if(checkMetaMask()){
          setCheck(true)
        }
          
    },[])
 
  return (
    <>
     <div className='page bg-slate-900'>
       <h1 className='text-white'>{account}</h1>
        {
           check?
            <>
                <div className='text-white displayFlex flex-col h-auto'>
                    <h1 className='text-4xl my-5'>Task</h1>
                    <div className='w-1/2 h-auto border text-center displayFlex '>
                        <button className='ring-white border border-white p-4' onClick={connectWalletClick}> Connect Wallet</button>
                    </div>
                </div>
                {contract!==null?<div>
                  <button className='ring-white border border-white p-4 text-white' onClick={getTaskClick} >getTask</button>
                  <br />
                  <input type="text" placeholder='Enter a task' value={taskString} onChange={(e)=>setTaskString(e.target.value)}/>
                  <button className='ring-white border border-white p-4 text-white' onClick={addTaskClick}>add task</button>
                  {task.map((e)=>{
                    return(<div className='text-white' key={e[0]} onClick={getTaskId}>{e}</div>)
                  })}
                </div>:<></>}
            </>:
            <>
                  <div className='text-white displayFlex h-96'>
                    <div className='w-1/2 h-1/2 border text-center displayFlex '>Looks Like you need to install meta Mask</div>
                  </div>
            </>
        }    
    </div> 
    </>
  )
}
