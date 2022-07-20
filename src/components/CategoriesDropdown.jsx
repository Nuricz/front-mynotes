import React from "react";
import { Form } from "react-bootstrap";

const CategoriesDropdown = ({ 
	categories,
	handleChangeCategory
}) => {

	return (
		<Form.Select onChange={handleChangeCategory}>
			<option value={0}>All</option>
			{categories.map((category) => (
      <option value={category.id}>{category.name}</option>
			))}
    </Form.Select>
	);
};

export default CategoriesDropdown;