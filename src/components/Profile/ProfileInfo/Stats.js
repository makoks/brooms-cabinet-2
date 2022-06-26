import React from 'react'
import {Divider, Space, Statistic} from "antd";


const Stats = ({coins, carma, tasks}) => {
	return (
		<Space>
			<Statistic title='Merch - coins' value={coins}/>
			<Divider type='vertical'/>
			<Statistic title='Карма' value={carma} suffix="/ 100" />
			<Divider type='vertical'/>
			<Statistic title='Выполнено в Jira' value={tasks}/>
		</Space>
	)
}

export default Stats