import React from 'react';
import styles from './ModulePage.module.css';
import Navbar from 'components/navbar/NavbarLogic';
import { Collapse, Divider, Tag, Input } from 'antd';
import Search from 'components/search/Search';
import Button from 'components/button/Button';
import Editor from 'components/editor/EditorLogic';

const ModulePage = ({ code, response }) => {
	const { Panel } = Collapse;
	const { TextArea } = Input;
	return (
		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2 d-none d-md-block">
						<div className={styles.sidebar}>
							<Search />
							<h3>Core Resources</h3>
							<Collapse defaultActiveKey={['1']} ghost className={styles.resources}>
								<Panel header="Quotations" key="1">
									get
								</Panel>
								<Panel header="Settlement" key="2">
									post
								</Panel>
								<Panel header="Claims" key="3">
									patch
								</Panel>
							</Collapse>
						</div>
					</div>

					<div className="col-md-6">
						<div className={styles.content}>
							<h2>
								<Tag color="green">POST</Tag>List Quotations
							</h2>
							<p>
								Lists all the quotations based on the authentication that was used to make the request
							</p>
							<br />
							<br />
							<h3>Parameters</h3>
							<Divider />

							<table className="table">
								<thead className="thead-dark">
									<tr>
										<th scope="col">Name</th>
										<th scope="col">Description</th>
										<th scope="col">Parameter Type</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">token</th>
										<td>Used for authentication Purpose</td>
										<td>String</td>
									</tr>

									<tr>
										<th scope="row">data</th>
										<td>Send an empty object</td>
										<td>Object</td>
									</tr>
								</tbody>
							</table>
							<br />
							<br />
							<h3>Response</h3>
							<Divider />
							<p>Returns an array</p>
							<br />
							<br />
							<h3>Make a request</h3>
							<TextArea rows={8} />
							<Button text="Make Request" />
						</div>
					</div>
					<div className="col-md-4">
						<div className={`container ${styles.editor}`}>
							<h3>Sample Request</h3>
							<Divider />
							<Editor code={code} height="200px" />
							<br />
							<br />
							<h3>Sample Response</h3>
							<Divider />
							<Editor code={response} height="350px" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModulePage;
