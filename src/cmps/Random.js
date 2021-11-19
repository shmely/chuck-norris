import Filter from "./Filter"
import Select from 'react-select'
const Random = props => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          background: '#fff',
          borderColor: '#9e9e9e',
          minHeight: '40px',
          height: '40px',
          width: '215px',
          margin: '0 0 0 12px',
          boxShadow: state.isFocused ? null : null,

        }),
    
        valueContainer: (provided, state) => ({
          ...provided,
          height: '40px',
          padding: '0 6px'
        }),
    
        input: (provided, state) => ({
          ...provided,
          margin: '0px',
        }),
        indicatorSeparator: state => ({
          display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          height: '40px',
        }),
      };


    return (
        <Filter>
            <div className="filter">
                <label>Your name
                    <input placeholder="e.g. Chuck Norris"></input>
                </label>
                <label>Category
                    <Select styles={customStyles} options={options} />
                </label>
            </div>
        </Filter>

    )
}

export default Random
