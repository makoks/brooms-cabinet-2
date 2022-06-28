import React from 'react'
import {Badge, Col, Row, Typography} from "antd";


const Contact = ({title, value, color}) => {
	return (
		<Row wrap={false} justify='space-between'>
			<Col>
				<Badge color={color} text={`${title}: `} />
			</Col>
			<Col>
				<Typography.Text type="secondary">{value}</Typography.Text>
			</Col>
		</Row>
	)
}

export default Contact
