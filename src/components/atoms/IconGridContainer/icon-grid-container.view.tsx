import { useState } from "react";
import useDebounce from "../../../hooks/debounce";
import { IconGridContainer, IconLabel } from "./icon-grid-container.styles";
import { Icon } from "../Icon/icon.view.web";
import { Modal } from "../modal";


const iconDescriptions: Record<string, { title: string, description: string }> = {
    react: {
        title: "React",
        description: "React es una biblioteca de TypeScript la cual tengo experiencia de 1 año en su uso, utilizando los diferentes iconos, estados, y distintos recursos que proporciona esta biblioteca"
    },
    java: {
        title: "Java",
        description: "Java es un lenguaje de programación orientado a objetos, donde yo empecé a programar. En esta haciamos usos de objetos, uso de props, etc. Al fin y al cabo, si sabes un lenguaje de programación, sabes todos"
    },
    html: {
        title: "HTML",
        description: "HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web, donde apareció mi pasión por el desarrollo web. Al fin y al cabo, Typescript es un HTML avanzado"
    },
    css: {
        title: "CSS",
        description: "CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo utilizado para describir la presentación de un documento escrito en HTML o XML. Para ajustar los componentes, hay que hacer uso de este CSS, donde yo en mis diferentes apartados personalizo a mi elección"
    },
    laptopCode: {
        title: "Typescript",
        description: "Como implemento el uso de la biblioteca React, es gracias a Typescript. Desarrollado por Microsoft, tiene un sistema de identificación de errores que facilita mucho la programación. Llevo un año usándolo, y esta página web, está usando dicha tecnología"
    },
    github: {
        title: "GitHub",
        description: "GitHub es una plataforma de desarrollo colaborativo, la cual hace uso mi empresa actual, por lo que tuve que aprender a manejar distintas ramas y versiones, como subirlo a un repositorio, crear ramas, etc."
    }
};

export const IconGridComponent = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const debouncedActiveModal = useDebounce(activeModal, 300);

    const handleIconHover = (iconName: string) => () => {
        setActiveModal(iconName);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    return (
        <>
            <IconGridContainer>
                {Object.entries(iconDescriptions).map(([iconName, { title }]) => (
                    <div key={iconName} onMouseEnter={handleIconHover(iconName)} onMouseLeave={handleCloseModal}>
                        <Icon name={iconName as any} />
                        <IconLabel>{title}</IconLabel>
                    </div>
                ))}
            </IconGridContainer>

            {debouncedActiveModal && (
                <Modal
                    isVisible={!!debouncedActiveModal}
                    title={iconDescriptions[debouncedActiveModal].title}
                    iconName={debouncedActiveModal as any}
                    description={iconDescriptions[debouncedActiveModal].description}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};