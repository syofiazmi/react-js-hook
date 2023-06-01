import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            isUpdate: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    name: json.name
                })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: this.state.name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    isUpdate: true
                })
            })
    }

    componentDidUpdate(){
        const { isUpdate } = this.state
        if(isUpdate){
            alert('Nama Sukses diupdate')
            this.setState({
                isUpdate: false
            })
        }
    }

    componentWillUnmount(){
        console.log('Component dicopot')
    }

    render() {
        return (
            <div>
                <p>Name : {this.state.name}</p>
                <hr />
                <p>Update Name :</p>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input
                        type='text'
                        placeholder='Change Name'
                        name='name'
                        onChange={(event) =>
                            this.setState({ name: event.target.value })}
                    />
                </form>
                <button type='submit'>Submit</button>
            </div>
        )
    }
}
