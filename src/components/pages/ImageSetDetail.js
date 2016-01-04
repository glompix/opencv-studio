import React from 'react'
import sets from '../../stores/sets'

class ImageSetDetail extends React.Component {
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h2>{this.state.name}</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<h3>Images</h3>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		var oneSet = sets.filter(s => s.id === this.params.id)
		if (oneSet.length > 0)
		{
			var set = oneSet[0];
			this.state.name = set.name;
			console.log('SET', set)
		}
	}

	state = {
		name: 'test'
	}
}

export default ImageSetDetail;
