import React, { useState } from 'react';

function UploadProductPage() {
	const [TitleValue, setTitleValue] = useState('');
	const [DescriptionValue, setDescriptionValue] = useState('');
	const [PriceValue, setPriceValue] = useState(0);

	const onTitleChange = (e) => {
		setTitleValue(e.currentTarget.value);
	};
	const onDescriptionChange = (e) => {
		setDescriptionValue(e.currentTarget.value);
	};

	const onPriceChange = (e) => {
		setPriceValue(e.currentTarget.value);
	};
	return (
		<div style={{ maxWidth: '700px', margin: '2rem auto' }}>
			<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
				<h2>Upload Shop Product</h2>
			</div>

			<form onSubmit>
				{/* Drop Zone */}

				<br />
				<br />
				<label>Title</label>
				<input onChange={onTitleChange} value={TitleValue}></input>
				<br />
				<br />
				<label>Description</label>
				<textarea
					onChange={onDescriptionChange}
					value={DescriptionValue}></textarea>
				<br />
				<br />
				<label>Price(Le.)</label>
				<input
					onChange={onPriceChange}
					value={PriceValue}
					type='number'></input>
				<br />
				<br />
				<select>
					<option key value></option>
				</select>
				<br />
				<br />
				<button onClick>Submit</button>
			</form>
		</div>
	);
}

export default UploadProductPage;
