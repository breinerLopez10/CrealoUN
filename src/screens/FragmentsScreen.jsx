import React, { useMemo } from 'react';
import '../css/FragmentsScreen.css';
import Tree from '../components/Tree';
import { styled } from '@mui/system';
import { Globals } from "@react-spring/shared";
import { useQuery } from '@apollo/client';
import { GET_CONCEPTS } from '../graphql/queries/concept';
import { useStaticFetch } from '../hooks/useStaticFetch';

// Necesario para react-spring y react-three-drei
Globals.assign({
    frameLoop: "always",
});

const Container = styled('div')(() => ({
    width: "100vw",
    height: "100vh",
    padding: "clamp(20px, 10vw, 175px)",
    paddingTop: "clamp(80px, 10vw, 175px)",
    lineHeight: "25px",
    userSelect: "none",
    overflowX: "scroll",
}));

const FragmentsScreen = () => {
    // const STATIC = import.meta.env.VITE_STATIC;
    const STATIC = "1";

    // Obtener datos de la fuente apropiada
    const { loading, error, data } = STATIC === "1" 
        ? useStaticFetch("/fragments/concepts.json") 
        : useQuery(GET_CONCEPTS, { pollInterval: 500 });

    // Crear un mapa de conceptos
    const conceptMap = useMemo(() => {
        const map = {};
        const concepts = data?.concepts?.data || [];
        concepts.forEach(concept => {
            map[concept.id] = concept;
        });
        return map;
    }, [data]);

    // Manejo de errores
    if (error) {
        return <p>Error al cargar los conceptos: {error.message}</p>;
    }

    // Renderizar mientras se cargan datos
    if (loading) {
        return <p>Cargando conceptos...</p>;
    }

    return (
        <>
            <div id="fragments-background" />
            <Container style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h1 style={{ fontWeight: "800", fontSize: "2.2rem", lineHeight: "46px" }}>
                    Glosario Crealo
                </h1>
                {STATIC !== "1" && (
                    <p className='parrafo' style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                        Aquí puedes añadir algún concepto o definición que quieras, sólo haz clic en el lápiz y allí podrás editar.
                    </p>
                )}
                {!loading && (
                    <Tree 
                        treeData={conceptMap} 
                        defaultOpen={true} 
                        currentNode={data.concepts.data.find(concept => concept.attributes.name === 'Fragmentos')} 
                    />
                )}
            </Container>
        </>
    );
};

export default FragmentsScreen;
