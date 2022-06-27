import React from 'react'
import {Card, Space} from "antd";
import Contact from "./Contact";


const Contacts = ({email, phone, cabinet}) => {
	return (
		<Card title='Контактная информация'>
			<Space direction='vertical' size='middle' style={{width: '70%'}}>
				<Contact title='Почта' value={email} color='blue'/>
				<Contact title='Телефон' value={phone} color='cyan'/>
				<Contact title='Кабинет' value={cabinet} color='lime'/>
			</Space>
		</Card>
	)
}

export default Contacts