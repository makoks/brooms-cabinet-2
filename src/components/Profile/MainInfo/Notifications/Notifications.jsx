import React from 'react'
import {Avatar, Card, List} from "antd";
import TimeAgo from "javascript-time-ago";

const timeAgo = new TimeAgo("ru-RU");


const Notifications = ({notifications}) => {
	return (
		<Card title='Уведомления' bodyStyle={{padding: 0}}>
			<List
				size='large'
				dataSource={notifications}
				renderItem={(item) => (
					<List.Item key={item.id}>
						<List.Item.Meta
							avatar={<Avatar src={item.avatarUrl}/>}
							title={item.content}
							description={timeAgo.format(item.date)}
						/>
					</List.Item>
				)}
			/>
		</Card>
	)
}

export default Notifications