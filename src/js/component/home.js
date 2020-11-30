import React, { useState } from "react";
import "../../styles/index.scss";

//create your first component
export function Home() {
	const [state, setState] = useState({
		red: "active",
		yellow: "noactive",
		green: "noactive" //pongo cualquier palabra que no esté definida para que no me pinte nada
	});
	const handelRed = () => {
		setState({ red: "active", yellow: "noactive", green: "noactive" });
	};
	const handelYellow = () => {
		setState({ red: "noactive", yellow: "active", green: "noactive" });
	};
	const handelGreen = () => {
		setState({ red: "noactive", yellow: "noactive", green: "active" });
	};
	return (
		<div>
			<div id="trafficTop" />
			<div id="container">
				<div className="red" id={state.red} onClick={handelRed} />
				<div
					className="yellow"
					id={state.yellow}
					onClick={handelYellow}
				/>
				<div className="green" id={state.green} onClick={handelGreen} />
			</div>
		</div>
	);
}
export default Home;
