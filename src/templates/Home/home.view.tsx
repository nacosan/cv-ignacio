

import React from 'react';
import { HomeContainer, Category, TextSection, Layout, IconGrid, TextContainer } from './home.styles';
import { FullWidthYellowBar } from '../../components/atoms/FullWithBar';
import { foto2, fotoCV } from './assets';
import { IconGridComponent } from '../../components/atoms/IconGridContainer';
import Image from 'next/image';
import { Spacer } from '../../components/atoms/Spacer';

export const HomeTemplate = () => {
   

    return (
        <HomeContainer>
            <Spacer size='L'/>
            <Layout>
            <Category>
                    <Image src={fotoCV} alt="Foto de CV" width={500} height={600}  />
                    <TextSection>
                        <h2>¿Quién soy?</h2>
                        <Spacer size='L'/>
                        <p>Me llamo Ignacio Corrales Sánchez, un apasionado desarrollador de software especializado en Typescript y React. A mis 26 años, he tenido la fortuna de formarme en Desarrollo de Aplicaciones de forma dual, lo que me permitió sumergirme en el mundo profesional durante 9 intensos meses de prácticas.</p>
                        <p>Durante este periodo, no solo afiancé mis habilidades en programación, sino que también aprendí a navegar por las complejidades del desarrollo de software en un entorno real, trabajando mano a mano con profesionales experimentados. Esta experiencia me ha equipado con un sólido entendimiento del desarrollo frontend y una capacidad robusta para construir y escalar aplicaciones interactivas y orientadas al usuario.</p>
                        <p>Actualmente, resido en Madrid y estoy disponible para trabajar en cualquier lugar, ya sea de manera remota o presencial, buscando siempre aportar valor y crecimiento a los proyectos que me involucro.</p>
                    </TextSection>
                </Category>
                
                <FullWidthYellowBar />
                <Spacer size='XL'/>
                <Category>
                <Image src={foto2} alt="Foto de CV" width={500} height={600}  />
                    <TextSection>
                        <h2>Formación y Experiencia Laboral</h2>
                        <Spacer size='L'/>
                        <p>Además de mi formación en desarrollo de aplicaciones, completé un Grado Superior en Desarrollo de Entornos Interactivos y Juegos 3D, culminando con un máster intensivo de un año y prácticas de 3 meses en el sector. Esta experiencia me permitió profundizar en técnicas avanzadas de programación y diseño 3D, ampliando significativamente mi rango de habilidades técnicas.</p>
                        <p>En el ámbito laboral, he tenido la oportunidad de trabajar en posiciones diversas que van desde roles en Correos y Telégrafos y Amazon, hasta experiencias como socorrista y en la tienda de videojuegos Game. Cada una de estas posiciones ha reforzado mi capacidad de adaptación, gestión del tiempo y habilidades interpersonales, preparándome para enfrentar y superar nuevos retos en el entorno profesional.</p>
                    </TextSection>
                    
                </Category>

                <FullWidthYellowBar />
                <Spacer size='XL'/>
                <TextContainer>
                <h2>Programas que manejo</h2>
                </TextContainer>
                <IconGridComponent/>
            </Layout>
        </HomeContainer>
    );
};

export default HomeTemplate;
