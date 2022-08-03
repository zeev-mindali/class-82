import "./specials.css";

function Specials(): JSX.Element {
    const isWeeked = ()=>{
        const now = new Date();
        const dayOfWeek = now.getDay()+1; //1-sunday , 2-monday,,,,6-friday
        return dayOfWeek>=6;
    }

    return (
        <div className="specials Box">
			our Specials:
            {isWeeked()?<span>Pizza</span>:<span>Pasta</span>}
            <span>|</span>
            {isWeeked() && <span>Fish and Chips</span>}
        </div>
    );
}

export default Specials;
