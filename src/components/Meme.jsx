import React, { useState } from "react";
import "./Meme.css";
import memeData from "../memeData";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "Top text",
        bottomText: "Bottom text",
        imageUrl: "",
    });
    const [allMemeImages, setAllMemeImages] = useState(memeData);

    function handleClick() {
        const memesArray = allMemeImages.data.memes;
        let randomNumber = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            imageUrl: url,
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    return (
        <div className="meme">
            <div className="form">
                <div className="form-input">
                    <input
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        className="top"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input
                        className="bottom"
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button
                    type="submit"
                    className="button-submit"
                    onClick={handleClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme-image-box">
                {meme.imageUrl && (
                    <div>
                        <img
                            className="meme-image"
                            src={meme.imageUrl}
                            alt="meme"
                        />
                        <h2 className="meme-text top">{meme.topText}</h2>
                        <h2 className="meme-text bottom">{meme.bottomText}</h2>
                    </div>
                )}
            </div>
        </div>
    );
}
