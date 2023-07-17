import { Link } from "react-router-dom";

export default function Nav (props){
    return(
        <div className="nav">
            <Link to = "/">
                <div>Crypto Prices</div>
            </Link>
            <Link to ="/currencies">
                <div>Currencies</div>
            </Link>
        </div>
    )
}