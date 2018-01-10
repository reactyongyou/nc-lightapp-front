import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import { IcApply } from 'containers';
export default (
	<Router history={hashHistory}>
		<Route path="/" component={IcApply} />
	</Router>
);
