import Image from "next/image"
import Layout from "@/Components/layout"
import styles from '../styles/nosotros.module.css'
function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, GuitarLA, tienda de musica'}
      >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div className={styles.contenido}>
            <Image src='/img/nosotros.jpg' width={1000} height={800} alt="imagen sobre nosotros"/>
            <div>
              <p>Fusce vestibulum lobortis aliquet. Aliquam pretium mattis massa, vitae tincidunt justo varius a. Vestibulum quis tellus a turpis luctus efficitur et id neque. Cras dapibus rutrum risus, in tempus risus ornare sagittis. Aliquam fermentum sodales leo, ac scelerisque nulla elementum vel. Fusce iaculis mattis malesuada. Etiam venenatis tortor est, nec sollicitudin orci hendrerit vel.</p>
              <p>Praesent in cursus arcu, nec tristique metus. Phasellus tincidunt consequat tellus, sed commodo sapien scelerisque a. Maecenas faucibus condimentum ante at convallis. Cras sollicitudin velit fermentum nisi dapibus ultrices. Quisque mattis velit orci. Sed rutrum dictum laoreet. Quisque justo nulla, sodales vel eleifend tincidunt, tempus ut quam. Quisque vitae ipsum lorem. </p>
            </div>
          </div>

        </main>
      </Layout>
    </>

  )
}

export default Nosotros