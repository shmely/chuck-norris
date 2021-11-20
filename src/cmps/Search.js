import React, { useState, useEffect } from 'react';
import { chuckNorrisService } from '../services/chuckNorrisService'
import FactRow from './FactRow';
import Filter from "./Filter"
const Search = props => {
    const [keyWords, setKeyWords] = useState('');
    const [error, setError] = useState(null);
    const [facts, setFacts] = useState([]);
    const [sortDesc, setSort] = useState(false);
    const sort = 

    useEffect(() => {
        const sorted = facts.sort((a, b) => {
            if (a.created_at < b.created_at) {
                return sortDesc ? 1 : -1;
            } else if (a.created_at > b.created_at) {
                return sortDesc ? -1 : 1;
            } else return 0;
        });
        setFacts(sorted);
    }, [sortDesc])

    const handleTxtChange = (event) => {
        setKeyWords(event.target.value);
    }

    const onSubmit = async () => {
        try {
            setError('');            
            const response = await chuckNorrisService.getFacts(keyWords);
            const sortedAsc = response.sort(sort);
            console.log(sortedAsc);
            setFacts(sortedAsc);
        } catch (err) {
            console.log(err);
            setError("Somthing went wrong with the API!")

        }
    }
    

    const toggleSort = () => {
        setSort(!sortDesc);
    }



    return (
        <main className="flex column">
            <Filter>
                <div className="filter">
                    <label>Key word(s)
                        <input type="text" value={keyWords} onChange={handleTxtChange} className="key-words-lbl" placeholder="e.g. egg, break, Chuck Norris, dumb"></input>
                    </label>
                    <button className={keyWords ? 'enabled' : ''} onClick={onSubmit}>GO!</button>
                </div>
            </Filter>
            {error && <p className="error">{error}</p>}
            {facts.length>0 &&
                <main className="facts-cont">
                    <header>
                        <div className="h-id">ID<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                        </svg></div>
                        <div className="h-cat">Category<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                        </svg></div>
                        <div onClick={toggleSort} className="h-date">Date Created
                            {!sortDesc &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" />
                                    <path d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z" />
                                    <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                                </svg>
                            }
                            {sortDesc &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z" />
                                    <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
                                </svg>
                            }
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                            </svg></div>
                    </header>
                    {facts.map((f) => {
                        return <FactRow key={f.id} fact={f}></FactRow>
                    })}
                </main>
            }
        </main>

    )
}

export default Search