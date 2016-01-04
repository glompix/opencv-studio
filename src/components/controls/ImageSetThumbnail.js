import React from 'react'

class ImageSetThumbnail extends React.Component {

	render() {
		var set = this.props.set;
		return (
			<div className="row" onClick={this.clickSetRow}>
				<div className="col-xs-3">
					<image src={set.imageUrl} alt={set.name} className="img-responsive" />
				</div>
					<div className="col-xs-9">
					<h3 className="no-margin">{set.name}</h3>
					<p>{set.name}</p>
				</div>
			</div>
		)
	}
	clickSetRow = () => {
		this.context.router.push(`/images/${this.props.set.id}`)
	}
	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}
}

export default ImageSetThumbnail
