import React, { useState } from 'react';
import ModulePage from './ModulePage';
import sampleResponse from './data.json';

const ModuleLogic = () => {
	const [code] = useState({
		resource: 'quotations',
		action: 'list',
		data: {},
	});

	return (
		<div>
			<ModulePage code={code} response={sampleResponse} />
		</div>
	);
};

export default ModuleLogic;
