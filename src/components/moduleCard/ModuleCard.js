import React from 'react';
import styles from './ModuleCard.module.css';
import { Link } from 'react-router-dom';

const ModuleCard = ({ title, number }) => {
	return (
		<div className={styles.moduleCard}>
			<div className={styles.content}>
				<h2>{number}</h2>
				<h3>{title}</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat dolores laborum harum
					recusandae consequuntur itaque quaerat illo rem necessitatibus unde vitae dolorem, nemo nihil fuga.
					Fugit corrupti assumenda consequuntur!
				</p>
				<Link to="/module">View API</Link>
			</div>
		</div>
	);
};

export default ModuleCard;
