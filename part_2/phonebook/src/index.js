import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react'

const Title = () => {
  return (
    <h1>Puhelinluettelo</h1>
  );
}

const People = (props) => {
  const personList = props.persons.map((person) =>
    <li key={person.name}>
      {person.name} {person.number}
    </li>
  );
  return (
    <div>
      <h2>Numerot</h2>
      <ul>{personList}</ul>
    </div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '050-1234567' },
    { name: 'Arto Wikla', number: '050-1234568' },
    { name: 'Matti Hellas', number: '050-1234569' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setNewSearch ] = useState('')
  
  const handleSearch = (event) => {   
    setNewSearch(event.target.value)
  }

  const handleNewName = (event) => {   
    setNewName(event.target.value)  
  }

  const handleNewNumber = (event) => {   
    setNewNumber(event.target.value)  
  }

  const addNew = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      alert('${newName} on jo luettelossa')
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
    }
    setNewName('')
  }

  return (
    <div>
      <Title />
        Etsi:
        <input 
            value={search}
            onChange={handleSearch}
        />
      <h2>Lisää uusi</h2>
      <form onSubmit={addNew}>
        <div>
          nimi: 
          <input 
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          puhelinnumero:
        <input 
            value={newNumber}
            onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type='submit'>lisää</button>
        </div>
      </form>
      <People persons={persons}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
