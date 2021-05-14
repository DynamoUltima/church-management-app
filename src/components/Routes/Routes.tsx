import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import Dashboard from "../../pages/dashboard";
import EditMember from "../../pages/editMember";
import Members from "../../pages/members";

const routes = [
	{
		text: 'Dashboard',
		icon: <SubjectOutlined />,
		path: '/',
		component: Dashboard,
		name:'dashboard'
		
	},
	{
		text: 'Members',
		icon: <AddCircleOutlined />,
		path: '/members',
		component: Members,
		name:'member',
		routes: [
			{
				path: '/members/edit-member',
				component: EditMember,	
			},
			
		],
	},
];

export default routes;