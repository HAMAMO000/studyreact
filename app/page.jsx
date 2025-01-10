import Image from "next/image";
import Head from 'next/head';
export default function Home() {
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>うんこちゃん</title>

      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex">
          <h1>今日(2025年1月10日)から"</h1>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1>"やるお！？</h1>
        </div>
        <a href="./hoge"><h1>hoge</h1></a>


      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>ここフッター</p>
      </footer>
    </div>
  );
}
