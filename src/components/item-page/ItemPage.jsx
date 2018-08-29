import React from 'react';

const ItemPage = ({match}) => (
	<div>Item Page # {match.params.id}</div>
)

export default ItemPage;