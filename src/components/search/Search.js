import React from 'react';
import styles from './Search.module.css';

const Search = () => {
	return (
		<div>
			<div className={`input-group input-group-sm ${styles.searchWrapper}`}>
				<input
					type="text"
					className={`form-control ${styles.search}`}
					placeholder="Search anything"
					aria-label="search"
				/>
			</div>
		</div>
	);
};

export default Search;
