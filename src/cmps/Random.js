import React, { useState, useEffect } from 'react';
import Filter from "./Filter";
import Select from 'react-select';
import { chuckNorrisService } from '../services/chuckNorrisService'
import Fact from './Fact';
const Random = (props) => {
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


    const [categories, setCategories] = useState();
    const [category, setCategory] = useState(null);
    const [name, setName] = useState('');
    const [fact, setFact] = useState('');
    const [error, setError] = useState(null);



    useEffect(() => {
        async function getCategories() {
            try {
                setError('');
                const response = await chuckNorrisService.getCategories();
                const options = response.map(c => ({ value: c, label: c }));
                setCategories(options);
                console.log(options)
            }
            catch (err) {
                console.log(err);
                setError("Somthing went wrong with the API!")
            }

        }
        getCategories();
    }, []);

    const handleTxtChange = (event) => {
        setName(event.target.value);
    }
    const onChangeCategory = (category) => {
        setCategory(category);
    }

    const onSubmit = async () => {
        try {
            setError('');
            const response = await chuckNorrisService.getFact(name,category ? category.value : null);
            console.log(response);
            setFact(response);
        } catch (err) {
            console.log(err);
            setError("Somthing went wrong with the API!")

        }
    }
    return (
        <main className="flex column">
            <Filter>
                <div className="filter">
                    <label>Your name
                        <input type="text" value={name} onChange={handleTxtChange} placeholder="e.g. Chuck Norris"></input>
                    </label>
                    <label>Category
                        <Select value={category} onChange={onChangeCategory} placeholder="All Catagories" styles={customStyles} options={categories} />
                    </label>
                    <button className={name || category ? 'enabled' : ''} onClick={onSubmit}>GO!</button>
                </div>
            </Filter>
            {error && <p className="error">{error}</p>}
            {!error && fact && <Fact fact={fact} background='#fff'></Fact>}
        </main>

    )
}

export default Random
