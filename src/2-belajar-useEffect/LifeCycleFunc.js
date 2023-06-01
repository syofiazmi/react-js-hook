import React, { useEffect, useState } from 'react'

function LifeCycleFunc() {
    const [name, setName] = useState('')
    const [isUpdate, setUpdate] = useState(false)

    // Component Did Mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((json) => {
                setName(json.name)
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                name: name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setUpdate(true)
            })
    }

    //Component Did Update
    useEffect(() => {
        if(isUpdate){
            alert('Nama Sukses di Update')
            setUpdate(false)
        }
    }, [isUpdate])

    useEffect(() => {
        return () => {
            console.log('Component di copot')
        }
    })

    return (
        <div>
            <p>Name : {name}</p>
            <hr />
            <p>Update Name :</p>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    type='text'
                    placeholder='Change Name'
                    name='name'
                    onChange={(event) =>
                        setName(event.target.value )}
                />
            </form>
            <button type='submit'>Submit</button>
        </div>
    )
}

export default LifeCycleFunc