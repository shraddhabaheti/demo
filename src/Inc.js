import { useEffect, useState } from "react";

export const Inc=()=>{
    const [incement,setIncrement]=useState(0);
    const [inc,setInc]=useState(0);
  
    const oninc=()=>{
        setInc(inc+1);
    }
    const onind=()=>{
      if(inc>0){
        setInc(inc-1);
      }
   }
    const inceClick=()=>{
        setIncrement(incement+1);
    }
    const [data,setData]=useState({
        fname:'',
        email:''
    })
    const currentDate=new Date().toLocaleTimeString()
    const currentDat=new Date().toLocaleTimeString()
    const [ctime,setCtime]=useState(currentDate);
    // const [ctimed,setCTimed]=useState(currentDat)
     
    // setInterval(() => {
    //     let currentDat=new Date().toLocaleTimeString();
    //     setCTimed(currentDat)
    // }, 1000);
    const getTime=()=>{
         let currentDate=new Date().toLocaleTimeString();
       setCtime(currentDate)
    }
    setInterval(getTime ,1000)
    let green="#006400"
    const [bg,setBg]=useState(green)
    const bgChange=()=>{
       let red="#FF0000"
      setBg(red)
    }
    const handleChange=(e)=>{
        let {name,value}=e.target
        setData({
            ...data,
             [name]:value,
           })
    }
   console.log(data,"dsd")
   const submit=(e)=>{
       e.preventDefault()
       setData(data)

   }
    return (
        <>
        <h1>Increment the value</h1>
        <p>{incement}</p>
        <button onClick={inceClick}>Click</button>
        <p>{currentDate}</p>
        <button onClick={getTime}>getTime</button>
        {/* <h1>{ctimed}</h1> */}
        <button style={{backgroundColor:bg}} onClick={bgChange}>BgColor</button>
        <form onSubmit={submit}>
            <input type ="text" name="fname" value={data?.fname} onChange={handleChange}/>
            <input type ="text" name="email" value={data?.email} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        <h1>{inc}</h1>
        <button onClick={oninc}>Inc</button>
        <button onClick={onind}>dec</button>
        </>
    )
}
export default Inc;