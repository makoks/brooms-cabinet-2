import React from 'react'
import {Col, Layout, Row} from "antd";
import ProjectsAndGroups from "./ProjectsAndGroups/ProjectsAndGroups";
import Contacts from "./Contacts/Contacts";
import Notifications from "./Notifications/Notifications";
import Interests from "./Interests/Interests";
import Team from "./Team/Team";


const MainInfo = ({projectsAndGroups, contacts, notifications, interests, team}) => {
	return (
		<Layout.Content style={{ margin: '27px 34px' }}>
			<Row gutter={[24, 24]}>
				<Col span={16}>
					<Row gutter={[24, 24]}>
						<Col span={24}>
							<ProjectsAndGroups projectsAndGroups={projectsAndGroups}/>
						</Col>
						<Col span={24}>
							<Notifications notifications={notifications} />
						</Col>
					</Row>
				</Col>
				<Col span={8}>
					<Row gutter={[24, 24]}>
						<Col span={24}>
							<Contacts {...contacts}/>
						</Col>
						<Col span={24}>
							<Interests interests={interests}/>
						</Col>
						<Col span={24}>
							<Team team={team}/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Layout.Content>
	)
}

export default MainInfo