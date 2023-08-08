import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

const ExtraReviews = () => {
  const reviews = [ {
    id: '1',
    reviewerImage: "https://i.ibb.co/FHfsKm7/player-1.png",
    reviewerTitle:'Ethan Davis',
    reviewText: "The instructors were great, helping me break out of my shell. Enjoyed the classes, especially the engaging challenges in the dojo. The blogs added depth. Challenging rivals was a highlight."
  },
  {
    id: '2',
    reviewerImage: 'https://i.ibb.co/LhKBMrR/player-2.png',
    reviewerTitle:'Oliver Wilson',
    reviewText: "Balanced learning environment with understanding instructors. Classes had a mix of solo and group activities. The dojo battles were exciting, and the blogs were informative. Loved the friendly challenges."
  },
  {
    id: '3',
    reviewerImage: 'https://i.ibb.co/6HHHf4f/player-3.png',
    reviewerTitle: 'Lucas Anderson',
    reviewText: "Lively instructors made learning fun. Classes had variety, offering both reflection and interaction. Dojo battles were thrilling, blogs were insightful. Challenging rivals brought us all together, fostering camaraderie."
  }]
	return (
		<div className="m-10">
			<h1 className="text-5xl">Notice Our Student's Reviews!</h1>
			<div className="flex md:flex-row flex-col justify-between">
			{
			
				reviews.map(review=>{
					return <div key={review.id} className="border rounded p-5 mt-2">
						<img className="h-10 w-10" src={review.reviewerImage} alt=""/>
						<div className="text-start mt-2 w-64 mx-auto text-sm">{review.reviewerTitle}</div>
						<FaQuoteLeft></FaQuoteLeft>
						<div className="text-start mt-2 w-64 mx-auto text-sm">{review.reviewText}</div>
						<FaQuoteRight></FaQuoteRight>  

					</div>
				})

			}
			</div>

		</div>
	);
};

export default ExtraReviews;
