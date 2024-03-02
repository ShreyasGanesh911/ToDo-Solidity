import {ethers,Contract} from "ethers"
import { abi } from "../ABI/contractABI"

// This function checks if the person has meta mask in his browser or not
export const checkMetaMask = ()=>{
    if(typeof window.ethereum !== 'undefined')
        return true
    else 
        return false
}

export const connectWallet = async()=>{
    try{
        const account = await window.ethereum.request({method: "eth_requestAccounts"})
        console.log(account)
        return ({success:true,account})
    }catch(err){
        console.log(err)
        return({success:false})
    }
}
const address = '0xFe5C5a23Aad27d3b808896746Cc6b474B924ad9E'
export const  contractInfo = async()=>{
try{
    const Provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await Provider.getSigner()
    //console.log("signer here",signer)
    // console.log(await Provider.getBalance())
    // address abi and signer
    //const contract = new ethers.Contract(address,abi,signer)
    const contract = new Contract(address,abi,signer)
    const data = await contract.getTask()
    return {success:true,contract,signer,Provider}
}catch(err){
    console.log(err)
    return {success:false}
}
    
}