import "./MyTask.css";

//which data the component is expecting
interface MyTaskProps {
	id?:number;
    taskName:string;
    taskOwner:string;
    isDone?:boolean; //? - optional 
}

function MyTask(props: MyTaskProps): JSX.Element {
    return (
        <div className="DanielBox MyTask">
			<h1>{props.taskName}</h1><hr/>
            {/*{props.taskName}<br/>*/}
            {props.taskOwner}<br/>
            {props.isDone ? "DONE" : "Waiting"}
        </div>
    );
}

export default MyTask;
