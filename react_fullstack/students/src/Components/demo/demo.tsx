import axios from "axios";
import { useDeferredValue, useEffect, useState } from "react";
import "./demo.css";

interface Users{
    id?:number;
    name?:string;
    age?:number;
}

function Demo(): JSX.Element {
    const [students,setStudents] = useState<Users[]>([]);

    useEffect(()=>{
        axios.get<Users[]>("http://localhost:3000/users/list")
        .then(response => {
            console.log(response);
            setStudents(response.data)
        })
    },[])
    return (
        <div className="demo">
			{students.map(item=>
            <div className="Box">
                <h1>{item.id}</h1><hr/>
                {item.name}<br/>
                {item.age}
            </div>
            )}
        </div>
    );
}

export default Demo;
