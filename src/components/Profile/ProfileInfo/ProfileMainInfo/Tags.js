import React from 'react'
import {Space, Tag} from "antd";


const Tags = ({tags}) => {
	return (
		<Space>
			{tags.map((tag, index) => (
				<Tag color="green" key={index}>{tag}</Tag>
			))}
		</Space>
	)
}

export default Tags