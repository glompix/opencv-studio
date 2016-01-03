import React from 'react'
import { Link } from 'react-router'

const Menu = () => (
	<nav className="navbar navbar-inverse navbar-fixed-top">
		<div className="container-fluid">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand" href="#"><i className="fa fa-eye"></i> OpenCV Studio</a>
			</div>
			<div id="navbar" className="navbar-collapse collapse">
				<ul className="nav navbar-nav navbar-right">
					<li><Link to={`/images`}>Images</Link></li>
					<li><Link to={`/classifiers`}>Classifiers</Link></li>
					<li><a href="/help">Help</a></li>
					<li><a href="/logout">Logout</a></li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Menu
