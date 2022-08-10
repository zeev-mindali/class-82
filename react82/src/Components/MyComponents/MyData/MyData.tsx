import { useEffect, useState } from "react";
import MyDataProps from "../MyDataProps/MyDataProps";
import "./MyData.css";

function MyData(): JSX.Element {
    const getLocalTime = ()=>{
        return new Date().toLocaleTimeString();
    }

    const students=[
        {id:1,name:"Zeev",age:48},
        {id:2,name:"Dudi",age:21},
        {id:3, name:"Haron",age:23},
        {id:4,name:"Lior", age:24},
        {id:5,name:"Elior",age:40},
        {id:6,name:"Eden", age:23},
        {id:7,name:"Kartzya",age:22},
    ]

    const [userTime,setUserTime] = useState(getLocalTime());
    //let userTime = "Nada";
    useEffect(()=>{
        setInterval(()=>{
            setUserTime(getLocalTime());
            //console.log(userTime);
        },1000);
    },[])
    

    return (
        <div className="MyData">
			<h1>Hello Class 82</h1><hr/>
            <br/>
            <h1>{userTime}</h1><br/>
            {students.map(item=><MyDataProps key={item.id} userName={item.name} userAge={item.age}/>)}

        </div>
    );
}

export default MyData;
