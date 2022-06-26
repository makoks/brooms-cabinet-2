import React from 'react'
import {Col, Layout, Row} from "antd";
import ProjectsAndGroups from "./ProjectsAndGroups/ProjectsAndGroups";


const MainInfo = ({projectsAndGroups}) => {
	return (
		<Layout.Content style={{ margin: '27px 34px' }}>
			<Row gutter={[24, 24]}>
				<Col span={16}>
					<ProjectsAndGroups projectsAndGroups={projectsAndGroups}/>
				</Col>
			</Row>
		</Layout.Content>
	)
}

export default MainInfo