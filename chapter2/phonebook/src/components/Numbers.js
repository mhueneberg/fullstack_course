const Number = ({person}) => {
    return (
        <li>{person.name} - {person.number}</li>
    )
}

const Numbers = ({persons, filter}) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {Array.prototype.filter.call(
          persons, person => person.name.toLowerCase()
            .includes(filter.toLowerCase())
          ).map(
            person =>
              <Number key={person.id} person={person} />
          )}
      </ul>
    </div>
  )
}

export default Numbers