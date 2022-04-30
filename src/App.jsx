import React from 'react';
import {
	getDate,
	getDay,
	getMonth,
	getWeekDay,
	getYear,
} from 'bangla-calendar';
import HijrahDate from 'hijrah-date';

function App() {
	let today = new Date();
	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	let todaysDateEN = today.toLocaleDateString('en-US', options)
	let todaysDateBN = today.toLocaleDateString('bn-BD', options)
	let todaysDateBD = getDate(today)
	let todaysDateHJEN = new HijrahDate(today).format('fullDate', ['en'])
	let todaysDateHJAR = new HijrahDate(today).format('fullDate', ['ar'])

	return (
		<div className="flex flex-col justify-center items-center w-screen h-screen bg-white">
			<h1 className="text-center text-4xl py-3">Today's Date</h1>
			<div className="min-h-max md:w-1/2 w-11/12 flex flex-col justify-center items-center px-5 py-3 my-2 rounded-xl bg-blue-500 shadow-2xl shadow-blue-500">
				<h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-gray-100 md:pb-2 py-2">{todaysDateEN}</h1>
				<h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-gray-100 md:pb-2 py-2">{todaysDateBN}</h1>
			</div>
			<div className="min-h-max md:w-1/2 w-11/12 flex flex-col justify-center items-center px-5 py-3 my-2 rounded-xl bg-green-500 shadow-2xl shadow-green-500">
				<h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-gray-100 md:pb-2 py-2">{todaysDateBD}</h1>
			</div>
			<div className="min-h-max md:w-1/2 w-11/12 flex flex-col justify-center items-center px-5 py-3 my-2 rounded-xl bg-red-500 shadow-2xl shadow-red-500">
				<h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-gray-100 md:pb-2 py-2">{todaysDateHJEN}</h1>
				<h1 className="text-center lg:text-4xl md:text-3xl text-2xl text-gray-100 md:pb-2 py-2">{todaysDateHJAR}</h1>
			</div>
		</div>
	);
}

export default App;
