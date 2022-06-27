import React from 'react'
import {Badge, Col, Row, Typography} from "antd";


const Contact = ({title, value, color}) => {
	return (
		<Row wrap={false} justify='space-between'>
			<Col>
				<Badge color={color} text={`${title}: `} />
			</Col>
			<Col>
				<Typography.Text style={{color: 'rgba(0, 0, 0, 0.45)'}}>{value}</Typography.Text>
			</Col>
		</Row>
	)
}

export default Contact