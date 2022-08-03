import MyTask from "../../MyComponents/MyTask/MyTask";
import "./Main.css";

function Main(): JSX.Element {
    const tasks = [
        {
            id: 1,
            name: "clean the house",
            isDone: true,
            owner : "zeev",
        },
        {
            id: 2,
            name: "take out garbage",
            isDone: false,
            owner : "zeev",
        },
        {
            id: 3,
            name : "install lamps",
            isDone: false,
            owner : "zeev",
        },
        {
            id: 4,
            name : "make fish for friday",
            isDone : false,
            owner: "zeev",
        },
        {
            id: 5,
            name : "wash the house",
            isDone : true,
            owner : "Amital",
        },
        {
            id: 6,
            name : "elevetors check",
            owner : "Amital",
        }
    ]

    //const doneTasks = tasks.filter(item=>item.isDone) // ... => spread operator
    //doneTasks[0].isDone = false;
    //tasks[0].isDone = true;

    /*  Please don't !!!!
        const doneTasks_oldStyle = [];
        const copyArray = tasks.map(item=>doneTasks_oldStyle.push(item));
    */
    return (
        <div className="Main">
			<h1>Main</h1><hr/>
            <div id="kartzya">
                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/U8qUDoBt_Dg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}
                {/*doneTasks.map(item=><div className="Box" key={item.id}>{item.name}<br/>{item.isDone?"done":"וואי עלייך"}<br/>{item.owner}</div>)*/}
                {tasks.map(item=><MyTask key={item.id} 
                taskName={item.name} taskOwner={item.owner} id={item.id} isDone={item.isDone}/>)}
            </div>
            
        </div>
    );
}

export default Main;
