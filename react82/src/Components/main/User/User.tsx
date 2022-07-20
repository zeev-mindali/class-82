import "./User.css";

function User(): JSX.Element {
    let userName="zeev";
    let userCity="Qiryat Yam";

    return (
        <div className="User Box">
			Hello {userName} from {userCity} age {2022-1974}
        </div>
    );
}

export default User;
