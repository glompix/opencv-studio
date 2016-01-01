import React from 'react'

export default React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      // user: findUserById(this.props.params.userId)
			user: { name: 'glompix', id: 0 }
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})
