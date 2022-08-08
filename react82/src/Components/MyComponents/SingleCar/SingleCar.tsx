import "./SingleCar.css";

interface SingleCarProps {
	tozeret_nm:string;
    kinuy_mishari:string;
    mispar_rechev:string;
    tokef_dt:string;
}

function SingleCar(props: SingleCarProps): JSX.Element {
    return (
        <div className="SingleCar Box">
			{props.mispar_rechev}<hr/>
            {props.tozeret_nm}<br/>
            {props.kinuy_mishari}<br/>

            
        </div>
    );
}

export default SingleCar;
