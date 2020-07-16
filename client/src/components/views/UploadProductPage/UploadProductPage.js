import React, { useState } from 'react';
import FileUpload from '../../Utils/FileUpload';
import { Typography, Button, Form, message, Input, Icon } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

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
				<Title level={2}>Upload Shop Product</Title>
			</div>

			<FileUpload />
			<Form onSubmit>
				{/* Drop Zone */}

				<br />
				<br />
				<label>Title</label>
				<Input onChange={onTitleChange} value={TitleValue}></Input>
				<br />
				<br />
				<label>Description</label>
				<TextArea
					onChange={onDescriptionChange}
					value={DescriptionValue}></TextArea>
				<br />
				<br />
				<label>Price(Le.)</label>
				<Input
					onChange={onPriceChange}
					value={PriceValue}
					type='number'></Input>
				<br />
				<br />
				<select>
					<option key value></option>
				</select>
				<br />
				<br />
				<button>Submit</button>
			</Form>
		</div>
	);
}

export default UploadProductPage;
