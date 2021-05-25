import React from 'react';
import './EnvCard.css';

const EnvCard = ({ image, title, url, content }) => {
	return (
		<div className="tiles">
			<div className="tile">
				<a href className="tile-link">
					<figure className="tile-image">
						<img src={image} alt="Dev" />
					</figure>
					<span className="title-wrap">
						<h4 className="title-sub">{title}</h4>
						<br />
						<h3 className="title-main">base url:{url}</h3>
					</span>
				</a>
				<div className="tile-body">{content}</div>
				<a href className="tile-link">
					Find out more
					<svg
						width="20px"
						height="20px"
						viewBox="0 0 28 28"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
					>
						<g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
							<circle id="Oval" stroke="#f2bd1d" strokeWidth="1.5" cx={14} cy={14} r={13} />
							<polyline
								id="Path"
								stroke="#f2bd1d"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								points="12 9 17 14 12 19"
							/>
						</g>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default EnvCard;
