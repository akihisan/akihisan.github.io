import { useState } from "react";

function Project({title, media, children}){
    //saves index for each diashow
    const diashowStates = new WeakMap();

    //changes index of one diashow, direction: -1(left) or 1(right)
    function changeIndex(button, direction) {
        const diashow = button.closest(".diashow");
        let index = diashowStates.get(diashow) || 0;
        const images = diashow.querySelectorAll(".screenshot");

        index += direction;

        //wraps around
        if (index >= images.length) {
            index = 0;
        }
        if (index < 0) {
            index = images.length - 1;
        }

        //show images of current index
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });

        diashowStates.set(diashow, index);
    }

    //show first image of each diashow when first loading the page
    document.querySelectorAll(".diashow").forEach((diashow) => {
        diashowStates.set(diashow, 0);
        const images = diashow.querySelectorAll(".screenshot");
        images.forEach((img, i) => {
            img.style.display = i === 0 ? "block" : "none";
        });
    });

    const [index, setIndex] = useState(0);
    const [item, setItem] = useState(media[0]);

    function changeMedia(newIndex){
        setIndex(newIndex);
        setItem(media[newIndex]);
    }

    return(
        <div className="project">
            <h2>{title}</h2>
            <div className="diashow">
                <button
                    className="arrow-button"
                    onClick={() => changeMedia(index - 1)}
                >
                    <img src={`${process.env.PUBLIC_URL}/images/arrowLeft.svg`} />
                </button>

                {item.type == "img" ? 
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
                    <img src={`${process.env.PUBLIC_URL}/images/arrowRight.svg`} />
                </button>
            </div>
            <p>
                {children}
            </p>
        </div>
    );
}

export default Project;