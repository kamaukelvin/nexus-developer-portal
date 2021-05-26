import React from 'react';
import styles from './Editor.module.css';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const Editor = ({ code, height }) => {
	function onChange(newValue) {
		console.log('change', newValue);
	}
	return (
		<div>
			<AceEditor
				readOnly={true}
				mode="javascript"
				theme="monokai"
				height={height}
				onChange={onChange}
				name="editor"
				fontSize={14}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				value={JSON.stringify(code, null, '\t')}
				editorProps={{ $blockScrolling: true }}
			/>
		</div>
	);
};

export default Editor;
