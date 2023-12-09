let counter = 0;

const getData = () =>{
    // calls an API and gets Data
    console.log('fetching data..', counter++)
}

const doSomeMagic = function(fn, delay) {
    let timer
    return function() {
        let context = this;
        args = arguments;
        clearTimeout(timer)
        timer =  setTimeout(() => {
            fn.apply(context)
        }, delay)
    }
}

const betterFunction = doSomeMagic(getData, 300)

// this will optimise the app performance, especially the search bar

/**
 * 
 *    This code in react
 *    ------------------
 * 
 *      import React, { useState, useEffect, useCallback } from 'react';

        const SearchComponent = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [counter, setCounter] = useState(0);

        const getData = useCallback(() => {
            // Simulating an API call, you can replace this with your actual API call
            console.log('Fetching data...', counter);
        }, [counter]);

        const doSomeMagic = useCallback(
            (fn, delay) => {
            let timer;
            return function () {
                let context = this;
                let args = arguments;
                clearTimeout(timer);
                timer = setTimeout(() => {
                fn.apply(context, args);
                }, delay);
            };
            },
            []
        );

        const betterFunction = doSomeMagic(getData, 300);

        useEffect(() => {
            // This effect will run whenever searchTerm changes after 300 milliseconds of inactivity
            const debouncedSearch = doSomeMagic(() => {
            setCounter((prevCounter) => prevCounter + 1);
            }, 300);

            debouncedSearch();

            return () => clearTimeout(debouncedSearch);
        }, [searchTerm, doSomeMagic]);

        const handleInputChange = (e) => {
            setSearchTerm(e.target.value);
        };

        return (
            <div>
            <input type="text" value={searchTerm} onChange={handleInputChange} />
            </div>
        );
        };

        export default SearchComponent;

 * 
 * 
 */