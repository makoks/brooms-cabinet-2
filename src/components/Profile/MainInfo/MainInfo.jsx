import React from 'react'
import {Col, Layout, Row} from "antd";
import ProjectsAndGroups from "./ProjectsAndGroups/ProjectsAndGroups";
import Contacts from "./Contacts/Contacts";
import Notifications from "./Notifications/Notifications";


const MainInfo = ({projectsAndGroups, contacts, notifications}) => {
	return (
		<Layout.Content style={{ margin: '27px 34px' }}>
			<Row gutter={[24, 24]}>
				<Col span={16}>
					<ProjectsAndGroups projectsAndGroups={projectsAndGroups}/>
				</Col>
				<Col span={8}>
					<Contacts {...contacts}/>
				</Col>
				<Col span={16}>
					<Notifications notifications={notifications} />
				</Col>
			</Row>
		</Layout.Content>
	)
}

export default MainInfo