import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Filter from "./Filter"
const Search = props => {
    const [keyWords, setKeyWords] = useState('');
    const { search } = useLocation();
    const query = React.useMemo(() => new URLSearchParams(search), [search]);

    useEffect(() => {
        console.log(query);
        setKeyWords(query.has('keywords') ? query.get('keywords') : '');
    }, [query])

    const handleTxtChange = (event) => {
        setKeyWords(event.target.value);
    }

    const queryParams = () => {
        if (keyWords) return `?keywords=${keyWords}`
        return '';
    }

    return (
        <Filter>
            <div className="filter">
                <label>Key word(s)
                    <input type="text" value={keyWords} onChange={handleTxtChange} className="key-words-lbl" placeholder="e.g. egg, break, Chuck Norris, dumb"></input>
                </label>
                <a className={keyWords ? 'enabled' : ''} href={queryParams()}>GO!</a>
            </div>
        </Filter>

    )
}

export default Search