import Image from "next/image";
import Head from 'next/head';
export default function Home() {
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>うんこちゃん</title>

      </Head>
      <main className="main-container gap-8 row-start-2 items-center sm:items-start">
        <h1>こんにちは！</h1>

        <Image
          className="takeru"
          src="/tkr.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <hr />
        <a href="./"><button>ホームに戻る</button></a>


      </main>

    </div>
  );
}
