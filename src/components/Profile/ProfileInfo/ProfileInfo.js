import React from 'react'
import ProfileMainInfo from "./ProfileMainInfo/ProfileMainInfo";
import Stats from "./Stats";


const ProfileInfo = ({avatar, name, tags}) => {
	return (
		<div style={{
			display: 'flex',
			alignItems: 'start',
			justifyContent: 'space-between'
		}}>
			<ProfileMainInfo avatar={avatar} name={name} tags={tags}/>
			<Stats
				coins={Math.round(Math.random() * 100)}
				carma={Math.round(Math.random() * 10)}
				tasks={Math.round(Math.random() * 100)}
			/>
		</div>
	)
}

export default ProfileInfo