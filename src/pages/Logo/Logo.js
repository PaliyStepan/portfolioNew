import "./Logo.scss"
import {useEffect} from "react";
import Snap from "snapjs"


const Logo = () => {

	useEffect(()=>{
		const snapper = new Snap({
			element: document.getElementById('Logo__svg')
		});
		
		console.log(Snap)
	},[]);



	return (
		<div className="Logo">
			<div className="Logo__svg" id="Logo__svg">

			</div>
		</div>
	)
};

export default Logo;
