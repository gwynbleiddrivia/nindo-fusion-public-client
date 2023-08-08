
const ExtraDojo = () => {
  const dojos = [ {
    id: '1',
    dojoImage: "https://i.ibb.co/CtG0k4K/samuel-castro-cw-Scw-Jy5-HQE-unsplash.jpg",
    dojoTitle:'Dojo Duel: Test Your Might!',
    dojoText: "Eager for a clash? The dojo beckons. Engage in a friendly yet fierce duel, where skill and strategy reign supreme. Challenge a fellow warrior, showcase your training, and let the arena bear witness to your prowess. In victory or defeat, honor guides your path."
  },
  {
    id: '2',
    dojoImage: 'https://i.ibb.co/2jzcB8c/sam-moghadam-khamseh-HYDUXz-WSF5-I-unsplash.jpg',
    dojoTitle:'Challenge of Shadows: Stealth Showdown',
    dojoText: "Enter the hushed arena of the dojo for a challenge like no other. It's a stealth showdown—where silent movement and quick wit triumph. Choose an opponent, harness the art of invisibility, and outmaneuver them in the shadows. Step into the cloak of the unseen and emerge victorious."
  }]
	return (
		<div className="mt-10">
			<h1 className="text-5xl">Enter a Dojo and Gain Your Honor!</h1>
			<div className="flex md:flex-row flex-col justify-between">
			{
			
				dojos.map(dojo=>{
					return <div key={dojo.id} className="border rounded p-5 mt-2">
						<div className="text-2xl mt-2">{dojo.dojoTitle}</div>
						<img className="h-56 w-fit" src={dojo.dojoImage} alt=""/>
						<div className="text-start mt-2 w-64 mx-auto text-sm">{dojo.dojoText}</div>
						<input className="p-2 rounded m-2 w-full" type="text" placeholder="Enter your name"/><br/>
						<input type="text" className="p-2 m-2 w-full rounded" placeholder="Who do you want to challenge?"/><br/>
						<button className="btn-warning p-2 mt-2 rounded">Go to this Dojo!</button>

					</div>
				})

			}
			</div>

		</div>
	);
};

export default ExtraDojo;
