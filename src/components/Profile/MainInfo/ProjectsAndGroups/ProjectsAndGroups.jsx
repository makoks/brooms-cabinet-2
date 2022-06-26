import React from 'react'
import {Card} from "antd";
import ProjectCard from "./ProjectCard";
import './style.css'


const ProjectsAndGroups = ({projectsAndGroups}) => {
	return (
		<Card
			title="Текущие проекты | рабочие группы"
			extra={<a href='/'>Все проекты</a>}
		>
			{projectsAndGroups.map((project, index) => (
				<Card.Grid
					key={index}
					style={{
						minHeight: 150,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
				}}
				>
					<ProjectCard {...project}/>
				</Card.Grid>
			))}
		</Card>
	)
}

export default ProjectsAndGroups