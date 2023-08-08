
const ExtraBlogs = () => {
	const blogs = [ {
    id: '1',
    blogImage: 'https://i.ibb.co/CmG17Fk/karate-fighters-tatami-fighting-championship.jpg',
    bloggerImage: 'https://i.ibb.co/BG8XWM8/player-6.png',
    bloggerName: 'Luca Novak',
    blogTitle: 'Duel: The Art of One-on-One Combat',
    blogText: "In the shadowy realm of ninjutsu, the duel is an intricate dance where skill and strategy intertwine. Engage your opponent with calculated precision, anticipate their moves, and exploit their vulnerabilities. Remember, a duel is not just about physical prowess—it's a mental battlefield. Mastery of deception and timing grants the upper hand. Never underestimate the power of swift strikes and graceful evasion. In the duel, victory is not just about defeating an opponent, its about embracing the essence of a true ninja warrior."
  },
  {
    id: '2',
    bloggerImage: 'https://i.ibb.co/WV7g0Ry/player-5.png',
    blogImage: 'https://i.ibb.co/xYQRgfb/young-man-kickboxing-black-copyspace.jpg',
    bloggerName: 'Henrik Jansen',
    blogTitle: 'Personal Fitness: The Silent Strength Within',
    blogText: "Behind every covert operation, there lies a foundation of personal fitness. The ninja's body is a temple, built for agility, endurance, and stealth. Through rigorous training, adapt your physique to scale walls, cross treacherous terrains, and maintain silence in movement. A strong body is a vessel for even stronger spirit—a spirit that pushes limits, conquers weaknesses, and embodies the resilience of a true ninja. So, sculpt your body, fortify your mind, and let your personal fitness become the bedrock of your ninja journey."
  },
  {
    id: '3',
    bloggerImage: 'https://i.ibb.co/MSjn6zW/player-4.png',
    blogImage: 'https://i.ibb.co/xH82M0J/group-boys-girl-fighting-aikido-training-martial-arts-school-healthy-lifestyle-sports-concept.jpg',
    bloggerName:'Matteo Schmidt',
    blogTitle: 'Teamwork: Uniting Shadows as One',
    blogText: "While the lone warrior may possess might, it's in unity that true strength resides. In the realm of ninja training, teamwork intertwines individual skills into a symphony of stealth. Each ninja's role is vital, like pieces in a grand puzzle. Trust your comrades, synchronize actions, and share unspoken signals. By working together, you unravel the full potential of your group. Remember, a successful mission is not just about the individual's triumph; it's about the collective's triumph. Embrace the camaraderie, for a united team of shadows is an unstoppable force."
  }]
	return (
		<div className="mt-10">
			<h1 className="text-5xl">Read Our Instructor's Blogs (scroll to read)</h1>
			<div className="flex md:flex-row flex-col justify-between">
			{
			
				blogs.map(blog=>{
					return <div key={blog.id} className="border rounded p-2 mt-2">
						<img className="h-10 w-10" src={blog.bloggerImage} alt=""/>
						<div className="font-xl mt-2">{blog.bloggerName}</div>
						<div className="border border-white w-52 mb-2"></div>
						<img className="h-60 w-full mx-auto" src={blog.blogImage} alt=""/>
						<div className="font-semibold mt-2 mx-auto">{blog.blogTitle}</div>
						<div className="text-start mt-2 w-64 h-32 mx-auto overflow-hidden text-sm">
							<div className="overflow-y-scroll h-full">
								{blog.blogText}

							</div>

						</div>

					</div>
				})

			}
			</div>

		</div>
	);
};

export default ExtraBlogs;
