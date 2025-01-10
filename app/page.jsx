import Image from "next/image";
import Head from 'next/head';
export default function Home() {
  return (

    <div className="">

      <main className="main-container">


        <h1>今日(2025年1月10日)から"</h1>
        <div className="flex">

          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1>"はじめるよ</h1>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/msSc7Mv0QHY?si=6CcX-REFltdOeBiR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <a href="./hoge"><button>たける</button></a>
      </main >

    </div >
  );
}
