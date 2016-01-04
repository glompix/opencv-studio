import React from 'react'
import ImageSetThumbnail from '../controls/ImageSetThumbnail'
import sets from '../../stores/sets'

class ImageSetList extends React.Component {
  render() {
    return (
			<div className="container">
				<div class="row">
					<h1>Image Set List</h1>
				</div>
				{this.state.sets.map(set => <ImageSetThumbnail set={set} key={set.id} />)}
			</div>
		)
  }

	state = {
		sets: sets
	}
}

export default ImageSetList
