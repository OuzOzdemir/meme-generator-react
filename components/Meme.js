import React from "react"

export default function Meme() {
    return (
        <div className="meme--container">
            <form className="form--container">
                <div className="inputs">        
                    <label>
                        <input type="text" name="input1" />
                    </label>
                    <label>
                        <input type="text" name="input2" />
                    </label>
                </div>
                            
                <input 
                className="submit" 
                type="submit" 
                value="Get a new meme image 🖼" />
            </form>
            <img 
                src="./images/memeimg.png" 
                className="meme--image" 
            />
        </div>
    )
}