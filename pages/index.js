import Head from 'next/head'

export default function Home() {
  const x = 1
  return (
    <div>
      <Head>
        <title>Welcome To First Next.JS</title>
      </Head>
        <h1>Welcome to <span className='title'>Next.Js</span></h1>
        <style jsx>
          {`
            .title{
              color: ${x>3 ? 'red' : 'blue'};
            }
          `} 
        </style>
    </div>
  )
}
