import React from 'react'
import ImageSetThumbnail from '../controls/ImageSetThumbnail'

class ImageSetList extends React.Component {
	constructor() {
		super();
		this.state = {
			sets: [{
				id: 0,
				name: 'Cat Pictures',
				imageUrl: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xtp1/v/t1.0-9/1913680_10100733851283547_6364460686273920476_n.jpg?oh=3df5096221212d6e4369bb1f66dadae2&oe=574A23B2'
	  	}, {
				id: 1,
				name: 'Assorted Animal Negatives',
				imageUrl: 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xaf1/v/t1.0-9/12241234_10100733851313487_8150860530420819826_n.jpg?oh=5d09cbfd59bcc56f5251ab6a5de7678e&oe=5749A2D6'
			}]
		};
	}

  render() {
    return (
			<div className="container">
				<div class="row">
					<h1>Image Set List</h1>
				</div>
				<ImageSetThumbnail set={this.state.sets[0]} />
				{this.state.sets.map(set => <ImageSetThumbnail set={set} key={set.id} />)}
			</div>
		)
  }
}

export default ImageSetList
