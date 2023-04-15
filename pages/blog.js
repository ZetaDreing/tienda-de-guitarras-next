import Layout from "@/Components/layout"
import Post from "@/Components/post"
import styles from '../styles/grid.module.css'

function Blog({posts}) {
  return (
    <>
    <Layout
        title={'Blog'}
        description={'Blog sobre guitarras, GuitarLA, tienda de musica'}
    >
    <main className="contenedor">
      <h1 className="heading">Blog</h1>
      <div className={styles.grid}>
        {posts?.map(post=>(
          <Post
            key={post.id}
            post={post.attributes}
          />
        ) )}
      </div>
    </main>
    </Layout>
    </>

  )
}
 export async function getStaticProps(){
   const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
   const {data:posts} = await respuesta.json()
   return{
     props:{
       posts
     }
   }
 }
export default Blog