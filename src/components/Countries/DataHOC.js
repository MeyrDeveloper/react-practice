import React, {Component} from 'react'

const DataComponent = (ComposedComponent, url) => (
    class DataComponent extends Component {
        state = {
            loading: false,
            loaded: false,
            data: []
        }

        render() {
            let {loading} = this.state
            return (
                <div>
                    {
                        (loading) ? <p>Loading data</p> :
                                    <ComposedComponent {...this.state} {...this.props} />
                    }
                </div>
            )
        }

        componentDidMount() {
            this.setState({
                loading: true
            })

            fetch(url)
                .then(res => res.json())
                .then(json => {
                    return json.map(item => item.name)})
                .then(countries => {
                    console.log(countries)
                    this.setState({
                    data: countries,
                    loading: false
                })})
        }
    }
)

export default DataComponent