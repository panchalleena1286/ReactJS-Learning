import React from 'react'
import Person from './Person'


function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Leena',
            age: 23,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Rachu',
            age: 24,
            skill: 'Javascript'
        },
        {
            id: 3,
            name: 'Jk',
            age: 25,
            skill: 'Java'
        }
    ]
    const personList =  persons.map(person => <Person person={person}/>)
        return (
            <div>
                {
                   personList
                }
            </div>
        )
    
}

export default NameList