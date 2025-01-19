  import { Helmet } from 'react-helmet-async';

  const Preview = () => {
      const titulo = "Invitacion a fiesta de Francesca";
      const descripcion = "¡No te pierdas la fiesta de 15 años de Francesca! ¡Será un evento inolvidable!";
      // const imagen = "https://tusitio.com/imagen-fiesta.jpg";
      const url = "https://quince-francesca.vercel.app/";
    
      return (
        <>
          <Helmet>
            <title>{titulo}</title>
    
            {/* Open Graph */}
            <meta property="og:title" content={titulo} />
            <meta property="og:description" content={descripcion} />
            {/* <meta property="og:image" content={imagen} /> */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
    
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={titulo} />
            <meta name="twitter:description" content={descripcion} />
            <meta name="twitter:image" content={imagen} />
            <meta name="twitter:url" content={url} />
          </Helmet>
    
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
          <img src={imagen} alt="Fiesta de 15 Francesca" />
        </>
      );
    };
    
  export default Preview