import React, { Component,Fragment } from 'react'

class App extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            })
    }

    render() {
        const { data } = this.state;
        const result = data.map((entry,index) => {
            return <li key={index}>{entry}</li>
        })

        return(
            <Fragment>
                <ul>{result}</ul>
            </Fragment>
        )
    }
}

export default App;