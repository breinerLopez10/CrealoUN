import React from "react";
import { useDeviceDetect } from "../../hooks";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import desahogo_background from "../../assets/images/desahogo_background.jpg";
import "../../css/DesahogoScreen.css"
import FooterLogos from "../../components/FooterLogos";
import Colombia from "./Colombia";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "2rem",
  color: theme.palette.text.primary,
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
}));

const MapaScreen = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();

  const integrantes_2023_1 = [
    "Victoria Andrea Blanco Ramírez",
    "Julián Camilo Merchán Jiménez",
    "Carlos David Blanco Mangonez",
    "Danny Alejandro Pinto Correa",
    "Luis Daniel Sánchez Molina",
    "Carla Ordoñez Osorno",
    "Lousiana Rojas Babativa",
    "Luz Adriana Vera Villamizar",
    "María Fernanda Rivera Urrego",
    "Andrés Santiago Acevedo Mancera",
    "Diana Carolina Oliva Bonilla",
    "Luisa Giomar Tolosa Jaimes",
    "Andrea Caterine Rivera Rivera",
    "Javier Mateo Juyo Martín",
    "Josías Andrade Segura",
    "Evelyn Shirley Tucanés Córdoba",
    "Leydi Daniela González Prada",
    "Jhohan David Naranjo González",
    "Rafael David Leal Padilla",
    "Ana Karina Grimaldo Rojas",
    "Jorge Luis Rojas Cabrera",
    "Edwin Andrés Gamboa Peñaranda",
    "Oriany Meller Cabrales",
    "Andrés Felipe Vargas Jovel",
    "David Mauricio Guevara Romero",
    
  ];





  const integrantes_2023_2 = [
"Juan David Roa Ramírez",
"Andrés Santiago Acevedo Mancera",
"Duvan Stiven Izaquita Sepúlveda",
"María Fernanda Rivera Urrego",
"Anithza Alejandra Asís Manosalva",
"Jennifer Dayana Gelvez Galvis",
"Melissa Vallejo Carrillo",
"Ángela Gissell Garzón Marín",
"Luisa Giomar Tolosa Jaimes",
"Jorge Eduardo Rendón Álvarez",
"Andrés Felipe Vargas Jovel",
"Leydi Daniela González Prada",
"Juan David Ardila Díaz",
"Rosa Cecilia Santofimio Medina",
"Lousiana Rojas Babativa",
"Jhohan David Naranjo González",
"Diego Fernando Ramírez Mendivil",
"Wilmer Alejandro Cante Muñoz",
"Josías Andrade Segura",
"Kevin Ricardo Moreno Medalles",
"Sara Catalina Sánchez Suta",
"Oriana Melissa Cruz Cárdenas",
"Tatiana Alexandra Díaz Goyeneche",
"Juan David Graciano Velasco",
"Juan Esteban Vargas Góngora",
"Julián Calid Mindiola Marín",
"Ilhaine Katerinne Forero Alarcón",
"Juan Camilo Villa Rodríguez",
"Javier Mateo Juyo Martin",
"Juan Sebastián Pachón Garzón",
"Rafael David Leal Padilla",
"Danna Alexandra Franco Mosquera",
"Jesús David Causil Villadiego",
"Juan Ángel Duque Lara",
"Ikel Luis Álvarez Manjarrez",
  ]

  const integrantes_2023_3 = [
"Ana María Mavisoy González",
"Nicolás Gil Pachón",
"Edwin Andrés Gamboa Peñaranda",
"Andrea Catherine Rivera Rivera",
"Rocha Rodríguez Dahiana Vanessa",
"Jorge Iván Torres Ferrer",
"María Fernanda Cedeño Reyes",
"María de los Ángeles León Moreno",
"Ana Karina Grimaldo Rojas",
"Lictin Haydee Bernal Toledo",
"Carla Ordoñez Osorno",
"Juan David Martínez",
"Evelyn Shirley Tucanés Córdoba",
"Danny Alejandro Pinto Correa",


  ]










  const styleTypography = {
    margin: "2rem 0",
    fontWeight: "500",
  };

  return (
      <Container style={{ minHeight: "100vh", padding: "0"}}>
        <div style={{ 
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: `url('${desahogo_background}')`,
          
          }}></div>
        <Container style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem" }}>
          <Typography variant="h3" sx={{fontWeight: "600"}}>Deseos</Typography>
          <Container   style={{
              padding: "0",
              marginTop: "2rem",
            }}>
            <Typography variant="body" paragraph={true} >
              {`“Deseos frase o explicacion”`}
            </Typography>
            <Typography variant="body" paragraph={true}>
              {`Aquí deberia ir una explicacion de lo que son los deseos.”`}
            </Typography>
          </Container>
          <Container
            style={{
              padding: "2rem 0",
            }}
          >
            <Typography variant="h4" sx={{...styleTypography}}>
              Mapa
            </Typography>

            
            <Colombia />
          </Container>

        </Container>
        <Container
          className="credits-generic"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            width: "100%",
          }}
        >
          <Container
            style={{
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem 4rem",
              flexDirection: "column",
              color: "#A3C9D9",
            }}
          >
            <Typography variant="h4" sx={{...styleTypography, marginBottom: "0"}}>
              Participantes
            </Typography>
            <div className="creditos-screen" style={{ maxWidth: "1200px", textAlign: "left", marginLeft: "0", width: "100%",}}>
              <div className="description mt-3">
                <p style={{ fontSize: "1.2em"}}><span className="bold">CREA-LO</span> OTROS MUNDOS POSIBLES EN LA UNAL </p>
                <p>Laboratorios, talleres y experiencias para el activismo cultural universitario.</p>
                <p>2023</p>
              </div>

              <div className="grid-2 grid-end gap-2" style={{alignItems: "start"}}>
                <div>
                  <div className="parrafo bold">
                    <p>Universidad Nacional de Colombia</p>
                    <p>Vicerrectoría de Sede Bogotá</p>
                    <p>Dirección de Bienestar Universitario</p>
                    <p>División de Cultura</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Directora Bienestar Universitario </p>
                    <p className="bold">Sede Bogotá </p>
                    <p>Yuly Edith Sánchez</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Jefe División de Cultura</p>
                    <p>Nicolás Zorro</p>
                  </div>
                  <div className="parrafo bold">
                    <p>Proyecto “Crea-lo: otros mundos </p>
                    <p>posibles en la UNAL”</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Coordinación general</p>
                    <p>Daniela Ortiz López</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Acompañamiento sensible</p>
                    <p>Rafael Duarte Uriza
                      María Natscheilly Torres
                      Guadalupe Errázuriz
                      Santiago González Álvarez
                      </p>
                  </div>
                
                  <div className="parrafo">
                    <p className="bold">Estudiantes asistentes del proyecto 2023</p>
                    <p>Hollman Ortiz</p>
                    <p>Brian Gutiérrez</p>
                    <p>Fernanda Montañez</p>
                    <p>Edna Margarita Gómez</p>
                    <p>Ángela María López Gómez</p>

                  </div>
                  <div className="parrafo">
                    <p className="bold">Mediación pedagógica y cultural</p>
                    <p>Bibiana Carvajal Bernal</p>
                  
                  </div>

                  <div className="parrafo">
                    <p className="bold">Diseño y desarrollo web</p>
                    <p>Nelson Ivan Castellanos</p>
                    <p>Andrés Mauricio Avilán</p>

                  
                  </div>

                  
                </div>
                <div>
                  <div className="parrafo">
                    <p className="bold">Integrantes laboratorios 2023-1</p>
                    {
                      integrantes_2023_1.map((integrante, index) => (
                        <p key={index}>{integrante}</p>
                      ))
                    }
                  
                  </div>


                  <div className="parrafo">
                    <p className="bold">Integrantes laboratorios 2023-2</p>
                    {
                      integrantes_2023_2.map((integrante, index) => (
                        <p key={index}>{integrante}</p>
                      ))
                    }
                  
                  </div>
                 

                  <div className="parrafo">
                    <p className="bold">Integrantes laboratorios 2023-2 Caja de herramientas</p>
                    {
                      integrantes_2023_3.map((integrante, index) => (
                        <p key={index}>{integrante}</p>
                      ))
                    }
                  
                  </div>








                </div>
              </div>
            </div>
          </Container>
        </Container>
          <Container className="credits-generic" style={{
            padding: "2rem 4rem",
            color: "#A3C9D9",
            display: "flex",
            justifyContent: "center",
          }}>
            <div className="creditos-screen" style={{ maxWidth: "1200px", textAlign: "left", marginLeft: "0"}}>
              <div className="grid-2 gap-2">
                <div>
                  <div className="parrafo">
                    <p>Todos los contenidos de esta publicación fueron desarrollados en el marco del proyecto «Crea-lo: otros mundos posibles en la UN. Laboratorios, talleres y experiencias para el activismo cultural universitario» a través de talleres y laboratorios colaborativos y representan una voz común de los participantes.</p>
                  </div>
                </div>
                <div>
                  <div className="parrafo">
                    <p>Universidad Nacional de Colombia</p>
                    <p>DIVISIÓN DE CULTURA</p>
                    <p>Dirección de Bienestar Universitario</p>
                    <p>Sede Bogotá</p>
                  </div>
                  <div className="parrafo">
                    <p>Edificio 103 - Centro Polideportivo</p>
                    <p>Primer Piso</p>
                    <p>Ciudad Universitaria</p>
                    <p>Bogotá D.C., Colombia</p>
                  </div>
                  <div className="parrafo">
                    <p>Email: culturabien_bog@unal.edu.co</p>
                   
                    <p>Área Cultura Unal Bog</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <FooterLogos />
      </Container>
  );
};

export default MapaScreen;
