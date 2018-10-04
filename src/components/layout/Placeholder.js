import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';

const Placeholder = () => (
	<div className="row">
		<div className="col-md-6">
			<ContentLoader>
				<rect x="0" y="30.27" rx="0" ry="0" width="60" height="7" />
				<rect x="0" y="40" rx="0" ry="0" width="40" height="7" />
				<rect x="0" y="50" rx="0" ry="0" width="80" height="7" />
				<rect x="0" y="60" rx="0" ry="0" width="400" height="20" />
			</ContentLoader>
		</div>
		<div className="col-md-6">
			<ContentLoader>
				<rect x="0" y="30.27" rx="0" ry="0" width="60" height="7" />
				<rect x="0" y="40" rx="0" ry="0" width="40" height="7" />
				<rect x="0" y="50" rx="0" ry="0" width="80" height="7" />
				<rect x="0" y="60" rx="0" ry="0" width="400" height="20" />
			</ContentLoader>
		</div>
	</div>
);

export default Placeholder;
