import React from 'react';
import Editor from './Editor';

const EditorLogic = ({ code, height }) => {
	return (
		<div>
			<Editor code={code} height={height} />
		</div>
	);
};

export default EditorLogic;
