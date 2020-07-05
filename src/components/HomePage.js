import _ from 'lodash';
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import { initiateGetJobs } from "../actions/jobs";
import { resetErrors } from "../actions/errors";
import { connect } from "react-redux";

const HomePage = (props) => {

	const [results, setResults] = useState([]);
	const [errors, setErrors] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => { setResults(props.jobs) }, [props.jobs]);
	useEffect(() => { setErrors(props.errors) }, [props.errors]);

	const loadJobs = (selection) => {
		const { dispatch } = props;
		const { description, fullTime, location, page = 1 } = selection;
		dispatch(resetErrors());
		setIsLoading(true);
		dispatch(initiateGetJobs({ description, location, fullTime, page })).then(() => {
			setIsLoading(false);

		}).catch(false);
	};

	const handleSearch = (selection) => {
		loadJobs(selection);
	}

	return (<div className='container'>
		<Header />
		<Search onSearch={handleSearch} />
		{!_.isEmpty(errors) && (
			<div className="errorMsg"><p>{errors.error}</p></div>
		)}
		<Results results={results} />
		{isLoading && <p className="loading">Loading...</p>}
	</div>);
};

const mapStateToProps = (state) => ({
	jobs: state.jobs,
	errors: state.errors
});

export default connect(mapStateToProps)(HomePage);
