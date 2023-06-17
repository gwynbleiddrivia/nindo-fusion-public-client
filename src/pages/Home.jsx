import PopularInstructors from './homePages/PopularInstructors'
import PopularClasses from './homePages/PopularClasses'
import { Slide } from "react-awesome-reveal";

const Home = () => {

	return (
		<div className="flex flex-col text-white">
				<div className="backdrop-blur w-full flex flex-col gap-2">
					<h1 className="text-7xl font-xl text-center">Welcome to Nindo Fusion Camp!</h1>
					<h1 className="text-3xl font-sm text-center" >Learn Martial Art this summer!!!</h1>
				</div>

				<div className="carousel w-full">
				  <div id="slide1" className="carousel-item relative w-full">
				    <img src="https://i.ibb.co/QFnpRZX/full-length-studio-shot-two-women-taekwondo-athletes-training-isolated-black-background.jpg" className="w-full" />
				    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				      <a href="#slide4" className="btn btn-circle">❮</a> 
				      <a href="#slide2" className="btn btn-circle">❯</a>
				    </div>
				  </div> 
				  <div id="slide2" className="carousel-item relative w-full">
				    <img src="https://i.ibb.co/Nrx21pC/close-up-female-karate-fighter.jpg" className="w-full" />
				    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				      <a href="#slide1" className="btn btn-circle">❮</a> 
				      <a href="#slide3" className="btn btn-circle">❯</a>
				    </div>
				  </div> 
				  <div id="slide3" className="carousel-item relative w-full">
				    <img src="https://i.ibb.co/ThXTM3C/two-judokas-fighters-fighting-men.jpg" className="w-full" />
				    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				      <a href="#slide2" className="btn btn-circle">❮</a> 
				      <a href="#slide4" className="btn btn-circle">❯</a>
				    </div>
				  </div> 
				  <div id="slide4" className="carousel-item relative w-full">
				    <img src="https://i.ibb.co/fNNTy7P/man-white-kimono-training-karate-1.jpg" className="w-full" />
				    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				      <a href="#slide3" className="btn btn-circle">❮</a> 
				      <a href="#slide1" className="btn btn-circle">❯</a>
				    </div>
				  </div>
				</div>









			<div className="divider"></div>
			<PopularClasses></PopularClasses>
			<div className="divider"></div>
			<PopularInstructors></PopularInstructors>

			<div className="divider"></div>
			<p className="text-5xl font-xl">Enjoy Our Awesome Camp Galore</p>
			<div className="flex flex-col mx-auto w-fit">

			<Slide cascade effect="bounce">
			<img className="w-1/3 h-1/3 mx-auto" src="https://i.ibb.co/QFnpRZX/full-length-studio-shot-two-women-taekwondo-athletes-training-isolated-black-background.jpg" alt=""/>
			</Slide>
			<Slide direction="right">
			<img className="w-1/3 h-1/3 mx-auto" src="https://i.ibb.co/Nrx21pC/close-up-female-karate-fighter.jpg" alt=""/>
			</Slide>
			<Slide>

			<img className="w-1/3 h-1/3 mx-auto" src="https://i.ibb.co/ThXTM3C/two-judokas-fighters-fighting-men.jpg" alt=""/>
			</Slide>
			<Slide direction="right">
			<img className="w-1/3 h-1/3 mx-auto" src="https://i.ibb.co/fNNTy7P/man-white-kimono-training-karate-1.jpg" alt=""/>

			</Slide>


			</div>
		
		</div>
	);
};

export default Home;
