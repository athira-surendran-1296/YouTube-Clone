import React, { useEffect, useState } from 'react'
import { getSearchAPI, SEARCH_ICON, SEARCH_SUGGESTION_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { cacheSearch } from '../utils/store/slice/searchSlice';
import { closeSideNav } from '../utils/store/slice/appConfigSlice';
import { setSearchResult } from '../utils/store/slice/searchResultSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const cashedSearchSuggestions = useSelector(store => store.search);

  const getSearchSuggResult = async () => {
    if (cashedSearchSuggestions[searchText]) {
      setSearchSuggestions(cashedSearchSuggestions[searchText]);
      return;
    }
    // console.log('api called', searchText)
    const data = await fetch(SEARCH_SUGGESTION_API+searchText);
    const jsonData = await data.json();
    setSearchSuggestions(jsonData?.[1]);

    dispatch(cacheSearch(
      {
        [searchText]: jsonData?.[1]
      }
    ));
  }

  const getSearchedVideosResults = async () => {
    // console.log('search clicked', searchText);

    const data = await fetch(getSearchAPI(searchText));
    const jsonData = await data.json();

    dispatch(setSearchResult({ searchText: searchText, searchResult: jsonData}));
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  }

  const handleSuggClick = (suggestion) => {
    // console.log('suggestion',suggestion)
    setSearchText(suggestion);
    getSearchedVideosResults();
  }

  useEffect(() => {
    // Debouncing
    const timer = setTimeout(() => {
      if (searchText) {
        getSearchSuggResult();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex'>
        <input className='border flex-1 border-gray-400  rounded-l-full p-1 px-2 md:px-3'
               onFocus={() => {setShowSearchResults(true); dispatch(closeSideNav())}} 
               onBlur={() => { 
                  setTimeout(() => {
                    setShowSearchResults(false);
                  }, 300); 
                  dispatch(closeSideNav())
                }
               } 
               value={searchText} 
               onChange={handleSearch}/>
        <button className='border border-gray-400 border-l-0 px-2 md:px-4 rounded-r-full bg-gray-100'
                onClick={getSearchedVideosResults}>
            <img className='w-4 md:w-7' src={SEARCH_ICON} />
        </button>
      </div>
      {showSearchResults && !!searchSuggestions.length && 
        <div className='absolute top-10 m-5 mt-0 bg-white border border-gray-400 rounded-b-lg md:w-[39rem]'>
          <ul className='pb-2'>
            {searchSuggestions.map((suggestion, index) => 
              <li key={suggestion+index} 
                  className='px-2 pb-3 hover:bg-slate-100 cursor-pointer'>
                    <div onClick={() => handleSuggClick(suggestion)}>{suggestion}</div>
              </li>)
            }
          </ul>
        </div>}
    </div>
  )
}

export default Search;