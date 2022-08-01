import "./MyTask.css";

interface MyTaskProps {
	id:number;
    taskName:string;
    taskOwner:string;
    isDone?:boolean;
}

function MyTask(props: MyTaskProps): JSX.Element {
    return (
        <div className="Box MyTask">
			<h1>{props.id}</h1><hr/>
            {props.taskName}<br/>
            {props.taskOwner}<br/>
            {props.isDone ? "DONE" : "Waiting"}
        </div>
    );
}

export default MyTask;
