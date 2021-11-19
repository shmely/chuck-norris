import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Filter from "./Filter"
import Select from 'react-select'
const Random = (props) => {
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];
    const [name, setName] = useState('');
    const { search } = useLocation();
    const query = React.useMemo(() => new URLSearchParams(search), [search]);

    useEffect(() => {        
        console.log(query);
        setName(query.has('name') ? query.get('name') : '');
        setCategory(query.has('category') ? options.find(c => c.value === query.get('category')) : '')
    }, [query])


    const [category, setCategory] = useState();

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#9e9e9e',
            minHeight: '40px',
            height: '40px',
            width: '215px',
            marginLeft: '12px',
            marginRight: '97px',
            boxShadow: state.isFocused ? null : null,

        }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: '40px',
            padding: '0 6px',



        }),
        menu: (provided, state) => ({
            ...provided,
            width: '215px',
            marginLeft: '12px',


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

    const handleTxtChange = (event) => {
        setName(event.target.value);
    }
    const onChangeCategory = (category) => {
        setCategory(category);
    }
    const queryParams = () => {
        const start = '?';
        let catParam = '';
        let namePrm = ''
        if (name) {
            namePrm = `name=${name}`;
        }
        if (category) {
            if (name) catParam = `&category=${category.value}`; else {
                catParam = `category=${category.value}`;
            }
        }
        return start + namePrm + catParam;
    }


    return (
        <Filter>
            <div className="filter">
                <label>Your name
                    <input type="text" value={name} onChange={handleTxtChange} placeholder="e.g. Chuck Norris"></input>
                </label>
                <label>Category
                    <Select value={category} onChange={onChangeCategory} placeholder="All Catagories" styles={customStyles} options={options} />
                </label>
                <a className={name || category ? 'enabled' : ''} href={queryParams()}>GO!</a>
            </div>
        </Filter>

    )
}

export default Random
