const AddPerson = ({name, nameChangeHandler, number, numberchangeHandler, submitCallback}) => {
    return (
      <div>
        <h2>Add new person</h2>
        <form onSubmit={submitCallback}>
          <div>
            Name: 
            <input
              value={name}
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            Number: 
            <input
              value={number}
              onChange={numberchangeHandler}
            />
          </div>
          <div>
            <button type="submit">
                Add
            </button>
          </div>
        </form>
      </div>
    )
}

export default AddPerson