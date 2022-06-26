import React from 'react';
import {Layout, Skeleton} from "antd";
import {ContentHeader} from "../components";
import ProfileInfo from "../components/Profile/ProfileInfo/ProfileInfo";
import {useEffect, useState} from "react";
import {API} from "../API";

const tags = ['Отдел аналитики', 'Системный аналитик', 'Ведущий эксперт', 'ДСУД ПоИ']

export const ProfilePage = () => {
	const [loading, setLoading] = useState(true)
	const [profile, setProfile] = useState(undefined);

	useEffect(() => {
		const getProfile = async () => {
			setProfile(await API.user());
			setLoading(false)
		};

		getProfile();
	}, []);
	return (
		<Layout>
			<ContentHeader title='Профиль' paddingBottom={true}>
				{loading
				? <Skeleton avatar active paragraph={{ rows: 1 }} />
				: <ProfileInfo avatar={profile.avatarUrl} name={profile.name} tags={tags}/>
				}
			</ContentHeader>
		</Layout>
	)
};
