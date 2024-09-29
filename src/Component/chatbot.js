import React, { useState } from 'react';
import './assets/CSS/style.css';
import main from './seviceAI';

const AiComponent = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async(e) => {
       e.preventDefault();
       try{
        const text = await main(prompt);
        setResponse(text);
       } catch (error){
        console.log(error);
       }
    };

    return (
        <div className="background">
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <input type="text" className="question" value={prompt} onChange={(a) => setPrompt(a.target.value)} />
                    <button type='submit'>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </div>
            </form>

            <div className='resp'>
                <p>{response}</p>
            </div>
            
        </div>
    );
};

export default AiComponent;