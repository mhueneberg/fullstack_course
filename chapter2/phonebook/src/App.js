import { useState } from 'react'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567',
      id: 0 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    setPersons(persons.concat({
      name: newName,
      number: newNumber,
      id: persons.length
    }))
    setNewNumber('')
    setNewName('')
  }

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} changeHandler={handleInputChange(setFilter)} />
      <AddPerson  name={newName} nameChangeHandler={handleInputChange(setNewName)}
                  number={newNumber} numberchangeHandler={handleInputChange(setNewNumber)}
                  submitCallback={addName} />
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App