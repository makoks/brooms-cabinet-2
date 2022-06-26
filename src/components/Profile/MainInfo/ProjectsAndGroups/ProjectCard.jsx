import React from 'react'
import {Avatar, Card, Col, Row} from "antd";
import './style.css'
import TimeAgo from "javascript-time-ago";
import ru from "javascript-time-ago/locale/ru";

const {Meta} = Card
TimeAgo.addDefaultLocale(ru);
const timeAgo = new TimeAgo("ru-RU");


const ProjectCard = ({image, title, roles, type, date}) => {
	return (
		<>
			<Meta
				avatar={<Avatar src={image} />}
				title={title}
				description={`Роли: ${roles.join(', ')}`}
			/>
			<Row wrap={false} justify='space-between'>
				<Col style={{color: '#8c8c8c'}}>{type}</Col>
				<Col style={{color: '#bfbfbf'}}>{timeAgo.format(date)}</Col>
			</Row>
		</>
	)
}

export default ProjectCard