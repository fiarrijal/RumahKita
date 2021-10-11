import React, { useState } from "react";
import { menuList } from "../data";

function Navbar() {
	const [isCollapse, setIsCollapse] = useState(true);

	const handleCollapse = isCollapse ? `menu` : `menu responsive`;
	return (
		<nav id="#beranda">
			<div className="container">
				<div className="nav-wrap">
					<div className="logo">
						<h1>RumahKita</h1>
					</div>
					<span id="hamburger" onClick={() => setIsCollapse(!isCollapse)}>
						<i className="fas fa-bars"></i>
					</span>
					<div className={handleCollapse}>
						<ul className="menu-list">
							{menuList.map((item) => {
								return (
									<li key={item.id}>
										<a href={item.href}>{item.name}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
