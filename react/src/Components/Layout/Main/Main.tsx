import "./Main.css";

function Main(): JSX.Element {
    const old_student = [
        {
            name : "zeev mindali",
            age: 48,
            city: "qiryat yam",
            job: "Lecturer",
        },
        {
            name: "amital mindali",
            age: 46,
            city: "qiryat yam",
            job: "Doctor",
        },
        {
            name: "Avi Mendel",
            age: 32,
            city: "Kishinev (moldova)",
            job: "Pilot",
        }
    ]
    old_student[0].age = 28;

   
    const students = old_student.filter(item=>item.name.includes("mindali"));
    students[0].age = 128;

    const myDate = new Date();
    return (
        <div className="Main">
            {
                students.map(item=>
                    <div className="Box" key={item.age}>
                      {item.name}<br/>
                      {item.age}<br/>
                      {item.city}<br/>  
                      {/*item.name.includes("Avi")?"Tomorrow Land":item.job*/}
                      {/* short circuit */}
                      {!item.name.includes("Avi") && item.job} 
                       {/*item.name.includes("Avi")?"":item.job */}
                    </div>
                    )
            }
            <br/>
          {myDate.toLocaleTimeString()}
        </div>
    );
}

export default Main;

/*
    {students.map(item =>
                <div className="Box">{item.name}<br/>{item.age}<br/>{item.city}<br/></div>
     )}

       <div className="Box">
                {students[0].name}<br/>
                {students[0].age}<br/>
                {students[0].city}<br/>
            </div>
            <div className="Box">
                {students[1].name}<br/>
                {students[1].age}<br/>
                {students[1].city}<br/>
            </div>
*/