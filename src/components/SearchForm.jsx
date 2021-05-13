import { SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';

const SearchForm = () => {
	const dispatch = useDispatch();
	const searchTerm = useSelector((state) => state.searchTerm);
	const inputRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm === inputRef.current.value) {
				return (
					searchTerm.length > 0 && dispatch(actions.searchSongs(searchTerm))
				);
			}
		}, 800);

		return () => {
			clearTimeout(timer);
		};
	}, [dispatch, searchTerm]);

	const handleChange = (e) => {
		return dispatch(actions.setSearchTerm(e.target.value));
	};

	return (
		<div id="search-form" className="search-form row">
		
			  <span className="search-icon">
			  <SearchOutlined />
			  </span>
	
			<input
				ref={inputRef}
				id="search-input"
				type="text"
				className="search-input searchbar"
				placeholder='Search...'
				onChange={handleChange}
				value={searchTerm}
			/>
			
		</div>
	);
};

export default SearchForm;