import { Component } from "react";
import "./MyTask.css";

interface MyTaskProps {
	
}

interface MyTaskState {
	
}

class MyTask extends Component<MyTaskProps, MyTaskState> {

    public constructor(props: MyTaskProps) {
        super(props);
        this.state = {
			
        };
    }

    public render(): JSX.Element {
        return (
            <div className="MyTask">
				
            </div>
        );
    }

    public componentDidMount(){

    }

    public componentDidUpdate(){
        
    }
}

export default MyTask;
