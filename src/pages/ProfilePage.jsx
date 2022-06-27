import React from 'react';
import {Layout, Skeleton} from "antd";
import {ContentHeader} from "../components";
import ProfileInfo from "../components/Profile/ProfileInfo/ProfileInfo";
import {useEffect, useState} from "react";
import {API} from "../API";
import MainInfo from "../components/Profile/MainInfo/MainInfo";
import Loader from "../components/common/Loader";
import TimeAgo from "javascript-time-ago";
import ru from "javascript-time-ago/locale/ru";

TimeAgo.addDefaultLocale(ru);
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
				<Skeleton avatar active paragraph={{rows: 1}} loading={loading}>
					<ProfileInfo avatar={profile?.avatarUrl} name={profile?.name} tags={tags}/>
				</Skeleton>
			</ContentHeader>
			{loading
				? <Loader/>
				: <MainInfo
					projectsAndGroups={profile.projectsAndGroups}
					contacts={profile.contacts}
					notifications={profile.notifications}
				/>
			}
		</Layout>
	)
};
