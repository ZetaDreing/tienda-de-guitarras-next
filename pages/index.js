import Layout from "@/Components/layout"
import Guitarra from "@/Components/guitarra"
import Post from "@/Components/post"
import Curso from "@/Components/curso"
import styles from '../styles/grid.module.css'
export default function Home({ guitarras, posts,curso }) {

  return (
    <>
      <Layout
        title={'Inicio'}
        description={'blog de musica, venta de guitarras y mas'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <div className={styles.grid}>
            {guitarras.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />
            ))}
          </div>

        </main>
              <Curso
                curso={curso.attributes}
              />

        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
        {posts?.map(post=>(
          <Post
            key={post.id}
            post={post.attributes}
          />
        ) )}
      </div>
        </section>
      </Layout>

    </>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarra, resPosts,resCurso] = await Promise.all(
    [fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)]
  )
  const [{ data: guitarras }, { data: posts }, {data:curso}] = await Promise.all([
    resGuitarra.json(),
    resPosts.json(),
    resCurso.json()
  ])
  console.log(curso)
  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}
