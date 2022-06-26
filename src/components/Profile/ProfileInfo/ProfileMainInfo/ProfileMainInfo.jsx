import React from 'react'
import {Avatar, Space, Typography} from "antd";
import Tags from "./Tags";


const ProfileMainInfo = ({avatar, name, tags}) => {
	return (
		<Space>
			<Avatar src={avatar} size={72} />
			<Space direction='vertical'>
				<Typography.Title level={4}>{name}</Typography.Title>
				<Tags tags={tags} />
			</Space>
		</Space>
	)
}

export default ProfileMainInfo