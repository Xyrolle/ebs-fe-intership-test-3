import React, { useState } from 'react';

function Counter() {
	const [ count, updateCount ] = useState(0);

	return (
		<div>
			<h1>count is {count}</h1>
		</div>
	);
}

export default Counter;
