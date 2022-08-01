import "./Main.css";

function Main(): JSX.Element {
    const tasks = [
        {
            name: "clean the house",
            isDone: true,
            owner : "zeev",
        },
        {
            name: "take out garbage",
            isDone: false,
            owner : "zeev",
        },
        {
            name : "install lamps",
            isDone: false,
            owner : "zeev",
        },
        {
            name : "make fish for friday",
            isDone : false,
            owner: "zeev",
        },
        {
            name : "wash the house",
            isDone : true,
            owner : "Amital",
        },
        {
            name : "take care for the elevetors",
            isDone: true,
            owner : "Amital",
        }
    ]
    return (
        <div className="Main">
			<h1>Main</h1><hr/>
            <div id="kartzya">
                {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/U8qUDoBt_Dg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}
                {tasks.map(item=><div className="Box">{item.name}<br/>{item.isDone?"done":"וואי עלייך"}<br/>{item.owner}</div>)}
            </div>
            
        </div>
    );
}

export default Main;
