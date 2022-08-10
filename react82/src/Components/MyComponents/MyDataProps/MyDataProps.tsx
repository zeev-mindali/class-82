import "./MyDataProps.css";
import noa from "../../../media/noa.jpg";
import userEvent from "@testing-library/user-event";

interface MyDataPropsProps {
	userName:string;
    userAge:number;
}

function MyDataProps(props: MyDataPropsProps): JSX.Element {
    return (
        <div className="MyDataProps Box">
			{props.userName}<br/>
            {props.userAge}<br/>
            <hr/>
            <img src={noa}/>
        </div>
    );
}

export default MyDataProps;
