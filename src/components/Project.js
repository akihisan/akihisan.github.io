import { useState } from "react";

function Project({title, media, children}){

    const [index, setIndex] = useState(0);
    const [item, setItem] = useState(media?.[0]);

    function changeMedia(newIndex){
        if(newIndex >= media.length){
            newIndex = 0;
        }
        if(newIndex < 0){
            newIndex = media.length - 1;
        }
        setIndex(newIndex);
        setItem(media[newIndex]);
    }

    return(
        <div className="project">
            <h2>{title}</h2>
            <div className="diashow">
                

                {item && <>
                    <button
                        className="arrow-button" onClick={() => changeMedia(index - 1)}>
                        <img src={`${process.env.PUBLIC_URL}/images/arrowLeft.svg`} alt="Pfeil nach links"/>
                    </button>

                    {item.type === "img" ? 
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${item.src}`}
                            alt="Projekt-Screenshot"
                            className="screenshot"
                        />
                    :
                        <video className="screenshot" controls>
                            <source src={`${process.env.PUBLIC_URL}/videos/${item.src}`} type="video/mp4"/>
                        </video>
                    }

                    <button className="arrow-button" onClick={() => changeMedia(index + 1)}>
                        <img src={`${process.env.PUBLIC_URL}/images/arrowRight.svg`} alt="Pfeil nach Rechts"/>
                    </button>
                </>}
                
            </div>
            <p>
                {children}
            </p>
        </div>
    );
}

export default Project;