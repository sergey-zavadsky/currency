import React, { useEffect, useState } from 'react';
import { getCurrency } from '../../api/currency/currency';

const endpoint = 'latest';
const params = 'USD,PLN,RUB';

const Currency = () => {
	const [isRadioButton, setIsRadio] = useState(false);
	let button = { on: 'ON', off: 'OFF' };
	useEffect(() => {
		getCurrency(params, endpoint).then((response) =>
			setCurrency(response?.data?.data),
		);
		let interval;

		if (isRadioButton === true) {
			interval = setInterval(() => {
				getCurrency(params).then((response) =>
					setCurrency(response?.data?.data),
				);
			}, 20000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isRadioButton]);

	const [currency, setCurrency] = useState([]);

	return (
		<div>
			<button
				onClick={() => {
					!isRadioButton ? setIsRadio(true) : setIsRadio(false);
				}}
			>
				Updates: {isRadioButton ? button.on : button.off}
			</button>
			{Object.entries(currency).map((value, index, array) => {
				return <div key={index}>{value.toString().replace(/,/g, ':')}</div>;
			})}
		</div>
	);
};

export default Currency;
