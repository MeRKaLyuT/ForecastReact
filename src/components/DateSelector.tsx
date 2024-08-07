// DateSelector.js
import * as React from 'react';
import { useState, useEffect } from 'react';

const DateSelector = ({ onDateChange, onCheckboxChange, isFiveDaysForecast }) => {
	const [selectedDate, setSelectedDate] = useState('');

	const handleDateChange = (e) => {
		const date = e.target.value;
		setSelectedDate(date);
		onDateChange(date);
	};	

	const handleCheckboxChange = (e) => {
		onCheckboxChange(e);
	};

	useEffect(() => {
		if (!isFiveDaysForecast) {
			setSelectedDate('');
		};
	}, [isFiveDaysForecast]);

	return (
		<div>
			<label htmlFor="date">
				Выберите дату:
			</label>
			<input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
			<input type="checkbox" id="5days" checked={isFiveDaysForecast} onChange={handleCheckboxChange} />
			<span className='ps'>Прогноз на ближайшие пять дней</span>
		</div>
	);
};

export default DateSelector;
