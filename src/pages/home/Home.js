import React from 'react';
import Navbar from 'components/navbar/NavbarLogic';
import styles from './Home.module.css';
import ModuleCard from 'components/moduleCard/ModuleCard';
import EnvCard from 'components/envCard/EnvCard';
import Uat from 'assets/images/uat.jpg';
import dev from 'assets/images/dev.jpg';
import prod from 'assets/images/prod.jpg';

const Home = () => {
	const environments = [
		{
			image: dev,
			title: 'Development',
			url: 'https://dev.nexus.ke',
			content:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus labore eveniet suscipit itaque quasi officiis reiciendis recusandae quae adipisci vero perspiciatis animi ipsam ',
		},
		{
			image: Uat,
			title: 'User Acceptance Testing',
			url: 'https://uat.nexus.ke',
			content:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus labore eveniet suscipit itaque quasi officiis reiciendis recusandae quae adipisci vero perspiciatis animi ipsam ',
		},
		{
			image: prod,
			title: 'Production',
			url: 'https://nexus.ke',
			content:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus labore eveniet suscipit itaque quasi officiis reiciendis recusandae quae adipisci vero perspiciatis animi ipsam ',
		},
	];
	return (
		<div>
			<Navbar />
			<div className={styles.hero}>
				<div className="">
					<h1>
						Welcome to the <br />
						Nexus development portal
					</h1>
					<button class={styles.heroButton}>Learn More</button>
				</div>
			</div>
			<div className="container">
				<section>
					<div class={styles.sectionHeading}>
						<h2>Environments</h2>
					</div>
					<div className="row">
						{environments.map((card) => (
							<div className="col-md-4" key={card.title}>
								<EnvCard image={card.image} title={card.title} content={card.content} url={card.url} />
							</div>
						))}
					</div>
				</section>
				<section className={styles.module}>
					<div class={styles.sectionHeading}>
						<h2>Available Modules</h2>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat
					</p>
					<div className="row">
						<div className="col-md-3 offset-md-1">
							<ModuleCard title="Client" number="01" />
						</div>
						<div className="col-md-3">
							<ModuleCard title="Underwriter" number="02" />
						</div>
						<div className="col-md-3">
							<ModuleCard title="Bank" number="03" />
						</div>
						<div className="col-md-3 offset-md-1">
							<ModuleCard title="Intermediary" number="04" />
						</div>
						<div className="col-md-3">
							<ModuleCard title="Service Provider" number="05" />
						</div>
						<div className="col-md-3">
							<ModuleCard title="Admin Portal" number="06" />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
