import React, { useState } from "react";

import { Form, Button, Row, Col, FormCheck } from "react-bootstrap";

const Search = (props) => {

	const [searchState, setSearch] = useState({
		description: '',
		location: '',
		fullTime: false
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === 'fullTime') {
			setSearch((prevState) => ({ ...searchState, [name]: !prevState.fullTime }));
		} else {
			setSearch({ ...searchState, [name]: value })
		}
	}

	const handleSearch = (event) => {
		event.preventDefault();
		console.log(searchState);
		props.onSearch(searchState);
	}

	return (
		<div className="search-section">
			<Form className="search-form" onSubmit={handleSearch}>
				<Row className="search-row">
					<Col className="search-column">
						<Form.Group controlId="description">
							<Form.Control
								type='text'
								name='description'
								value={searchState.description || ''}
								placeholder='Enter text search'
								onChange={handleInputChange}>

							</Form.Control>
						</Form.Group>
					</Col>
					<Col className="search-column">
						<Form.Group controlId="location">
							<Form.Control
								type='text'
								name='location'
								value={searchState.location || ''}
								placeholder='Enter location search'
								onChange={handleInputChange}>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col className="search-column">
						<Button variant='primary' type='submit' className='btn-search'>Search</Button>
					</Col>
				</Row>
				<div className="filters">
					<Form.Group controlId="fullTime">
						<FormCheck
							type='checkbox'
							name='fullTime'
							className='fullTime-checkbox'
							label='Full Time only'
							checked={searchState.fullTime}
							onChange={handleInputChange}
						/>
					</Form.Group>
				</div>
			</Form>
		</div>
	)

};

export default Search;
