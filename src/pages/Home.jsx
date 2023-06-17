import PopularInstructors from './homePages/PopularInstructors'
import PopularClasses from './homePages/PopularClasses'
import anime from 'animejs/lib/anime.es.js';

const Home = () => {
	return (
		<div className="flex flex-col">
			<div className="divider"></div>
			<PopularClasses></PopularClasses>
			<div className="divider"></div>
			<PopularInstructors></PopularInstructors>

		</div>
	);
};

export default Home;
