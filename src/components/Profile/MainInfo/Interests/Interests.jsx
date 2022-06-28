import React, {useEffect} from 'react'
import {Button, Card, Input, Space, Typography} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import {useState} from "react";


const Interests = (props) => {
	const [interests, setInterests] = useState(props.interests)
	const [isEdit, setIsEdit] = useState(false)

	useEffect(() => setInterests(props.interests), [props])

	const showInput = () => setIsEdit(true)
	const hideInput = () => setIsEdit(false)

	const addInterest = (interest) => {
		setInterests([...interests, interest])
	}

	const handleAddInterest = (interest) => {
		addInterest(interest)
		hideInput()
	}

	return (
		<Card title='Интересы'>
			<Space size='middle' wrap={true}>
				{interests.map((interest, index) => (
					<Typography.Text
						style={{wordBreak: 'break-word'}}
						key={index}
					>
						{interest}
					</Typography.Text>
				))}
				{isEdit
				? <Input size="small" onBlur={e => handleAddInterest(e.target.value)}/>
				: <Button size='small' icon={<PlusOutlined />} onClick={showInput}>Добавить</Button>
				}
			</Space>
		</Card>
	)
}

export default Interests