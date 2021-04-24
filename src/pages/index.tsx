// SPA
// SSR
// SSG

export default function Home(props) {
  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  )
}

// executa toda vez que a aplicação é aberta
// export async function getServerSideProps(context) {
//   console.log(context.req.headers.host);
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

export async function getStaticProps(context) {
  console.log(context.req);
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60,
  }
}