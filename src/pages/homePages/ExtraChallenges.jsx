
const ExtraChallenges = () => {
  const challenges = [ {
    id: '1',
    challengeImage: "https://i.ibb.co/4WvSmpM/chase-kinney-FMQBLyh-D2-HU-unsplash.jpg",
    challengeTitle:'Agility Obstacle Challenge!',
    challengeText: "Get ready to leap, dash, and conquer! Our Agility Obstacle Course is a high-energy adventure that will have you feeling like a ninja in no time. Navigate through challenges that test your speed and finesse. Unleash your inner ninja and conquer each obstacle with style and earn rewaed!"
  },
  {
    id: '2',
    challengeImage: 'https://i.ibb.co/tppJKF7/daniel-lincoln-xm49-F658-Ry-M-unsplash.jpg',
    challengeTitle:'Stealth and Invisibility Challenge!',
    challengeText: "Become the master of shadows in our Stealth and Invisibility Challenge. Slip through the darkness like a true ninja, evading detection and surprising your foes. Sharpen your senses, perfect your movements, and embrace the art of remaining unseen. It's time to vanish into the night! Earn reward by winning!"
  },
  {
    id: '3',
    challengeImage: 'https://i.ibb.co/68tWQp2/foxunno-R99yn-Ks-M6-OA-unsplash.jpg',
    challengeTitle: 'Creative Ninja Showcase!',
    challengeText: "Dive into a world of imagination with our Creative Ninja Showcase. Explore articles, reviews, and tales of legendary ninjas from books, stories, and mangas. Join fellow enthusiasts in celebrating the heart-pounding journey of ninja training through the captivating lens of literature. Let your creativity shine! Earn reward by standing out!"
  }]
	return (
		<div className="mt-10">
			<h1 className="text-5xl">Win Challenges and Earn Rewards!</h1>
			<div className="flex md:flex-row flex-col justify-between">
			{
			
				challenges.map(challenge=>{
					return <div key={challenge.id} className="border rounded p-5 mt-2">
						<div className="text-2xl mt-2">{challenge.challengeTitle}</div>
						<img className="h-56 w-full" src={challenge.challengeImage} alt=""/>
						<div className="text-start mt-2 w-64 mx-auto text-sm">{challenge.challengeText}</div>
						<button className="btn-warning p-2 mt-2 rounded">Register to Accept!</button>

					</div>
				})

			}
			</div>

		</div>
	);
};

export default ExtraChallenges;
