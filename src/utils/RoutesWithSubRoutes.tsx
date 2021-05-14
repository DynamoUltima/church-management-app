
// import { Route } from 'react-router-dom';


import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route:any) => {
	console.log(route,"RWS") 
	return (
		<Route
			path={route.path}
			render={function(props)  {
				// console.log(props,'render in RWS')
				// console.log(route.routes,"route routes")
				
				return(
				<route.component {...props} routes={route.routes} />
			)}}
		/>
	);
};

export default RouteWithSubRoutes;

// export interface RouteWithSubRoutesProps {
// 	route: any
// }

// const RouteWithSubRoutes = (props: { route: any; }) => {
// 	// console.log(route.path,'Routes With sub routes')

// 	console.log(props, "props")
// 	const { route } = props
// 	console.log(route, "RWS")

// 	return (
// 		<Route
// 			path={route.path}
// 			render={function (props) {
// 				// console.log(props,'render in RWS')
// 				// console.log(route.path,"route routes")
// 				return (
// 					<route.component {...props} routes={route.routes} />
// 				)
// 			}}
// 		/> 
// 	);
// };

// export default RouteWithSubRoutes;




// const RouteWithSubRoutes = (route: { path: any; component: JSX.IntrinsicAttributes; routes: any; }) => {

// 	console.log(route.path,'Routes With sub routes')
// 	return (
// 		<Route
// 			path={route.path}
// 			render={(props) => (
// 				<route.component {...props} routes={route.routes} />
// 			)}
// 		/>
// 	);
// };


