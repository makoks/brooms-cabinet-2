import React from 'react'
import {Avatar, Card, Space, Typography} from "antd";


const Team = ({team}) => {
	return (
		<Card title='Команда'>
			<Space size='middle' wrap={true}>
				{team.map((person, index) => (
					<Space size='small' key={index}>
						<Avatar size="small" src={person.avatarUrl}/>
						<Typography.Text>{person.name}</Typography.Text>
					</Space>
				))}
			</Space>
		</Card>
	)
}

export default Team