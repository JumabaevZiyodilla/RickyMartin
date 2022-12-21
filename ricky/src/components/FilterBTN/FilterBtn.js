const FilterBtn = ({ text, index, name, setStatus }) => {
  return (
    <div>
      <input
        onClick={() => setStatus(text)}
        type="radio"
        className="btn-check"
        id={`${name}-${index}`}
        autoComplete="off"
        name={name}
      />
      <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
        {text}
      </label>
    </div>
  )
}

export default FilterBtn
