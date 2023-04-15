import Layout from "@/Components/layout"
import Guitarra from "@/Components/guitarra"
import styles from '../styles/grid.module.css'
export function Tienda({ guitarras }) {
  console.log(guitarras)
  return (
    <>
      <Layout
        title={'Tienda'}
        description={'Tienda de guitarras, GuitarLA, tienda de musica'}
      >
        <main className="contenedor">
          <h1 className="heading">
            Nuestra colección
          </h1>
          <div className={styles.grid}>
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
          </div>

        </main>
      </Layout>
    </>

  )
}
export default Tienda

// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data:guitarras} = await respuesta.json()
//   return{
//     props:{
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
}