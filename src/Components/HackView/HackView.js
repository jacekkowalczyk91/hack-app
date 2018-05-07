import React from 'react'

class HackView extends React.Component {

    state = {
        data: {}
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty`)
            .then(response => response.json())
            .then(data => this.setState({data}))
    }

    render() {

        const {data} = this.state
        return(
            <div>
                {
                    data && data.map()
                }
            </div>
        )
    }
}

export default HackView