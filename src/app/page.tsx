
// import Link from "next/link";
// import "./../css/content.css";
// import Contents from "./Contents";
// import { contents } from "@/data/contents.data";

// const getUpcoming = async () => {
//   return contents;
// };

// const getTrending = async () => {
//   return contents;
// };

// const getMostRated = async () => {
//   return contents;
// };

// export default async function Home() {
//   const upcoming = await getUpcoming();
//   const trending = await getTrending();
//   const mostRated = await getMostRated();

//   return (
//     <>
//       {/* upcoming */}
//       <div className="container">
//         <div className="d-flex justify-content-between content-heading">
//           <h1 id="content" className="content-title">
//             Upcoming
//           </h1>
//           <Link href="/pages/upcoming" className="content-btn">
//             See all
//           </Link>
//         </div>
//         <Contents contents={upcoming} />
//       </div>

//       {/* trending */}
//       <div className="container">
//         <div className="d-flex justify-content-between content-heading">
//           <h1 id="trending" className="content-title">
//             Trending
//           </h1>
//           <Link href="/pages/trending" className="content-btn">
//             See all
//           </Link>
//         </div>
//         <Contents contents={trending} />
//       </div>

//       {/* most-rated */}
//       <div className="container">
//         <div className="d-flex justify-content-between content-heading">
//           <h1 id="most-rated" className="content-title">
//             Most Rated
//           </h1>
//           <Link href="/pages/most-rated" className="content-btn">
//             See all
//           </Link>
//         </div>
//         <Contents contents={mostRated} />
//       </div>
//     </>
//   );
// }


import React from 'react';

const page = () => {
  return (
    <div>
      sup
    </div>
  );
};

export default page;