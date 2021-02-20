import React from 'react';

// dataSource can be passed as a prop
const withData = (WrappedComponent, dataSource) => {
  class WithData extends React.Component {
    constructor (props) {
      super(props);

      this.state = {
        data: [],
      }
    }

    componentDidMount () {
      fetch(`https://jsonplaceholder.typicode.com/${dataSource}`)
        .then(res => res.json())
        .then(data => { this.setState({ data }) });
    }

    render () {
      return (
        <WrappedComponent
          data={ this.state.data }
          { ...this.props }
        />
      );;
    }
  }

  return WithData;
}

export default withData;
