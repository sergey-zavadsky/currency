import axios from 'axios';

const requestData = {
	baseUrl: 'https://api.freecurrencyapi.com/v1/',
	apikey: 'PIrVbpKBipnWO6a8Ny8CBdSv9xkGlBlwPa8cRbCI',
};

// https://api.freecurrencyapi.com/v1/historical?apikey=PIrVbpKBipnWO6a8Ny8CBdSv9xkGlBlwPa8cRbCI&currencies=EUR%2CUSD%2CCAD&base_currency=PLN&date_from=2022-12-01T12%3A41%3A00.194Z&date_to=2022-12-23T12%3A41%3A00.195Z

export const getCurrency = async (params, endpoint) => {
	try {
		const data = await axios.get(requestData.baseUrl + endpoint, {
			headers: {
				apikey: `${requestData.apikey}`,
			},
			params: { currencies: `${params}` },
		});
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return error.message;
		} else {
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
};

export const getCurrencyHistorical = async (params, endpoint) => {
	try {
		const data = await axios.get(requestData.baseUrl + endpoint, {
			headers: {
				apikey: `${requestData.apikey}`,
			},
			params: {
				currencies: `${params}`,
				base_currency: 'PLN',
				date_from: '2022-12-01T12:41:00.194Z',
				date_to: '2022-12-23T12:41:00.195Z',
			},
		});
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return error.message;
		} else {
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
};
