export default function Card(props) {
	return (
		<div className="card">
			<div className="program-title">
				<span>
					<i className={props.icon}></i>
				</span>
				<h3>{props.name}</h3>
			</div>
			<div className="program-text">
				<p>{props.description}</p>
			</div>
		</div>
	);
}
