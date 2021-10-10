import React, {useState} from 'react';


export default function TextForm(props) {
    const handleOnChange=(event) => {
        setText(event.target.value);
    };
    const handleUpClick=() => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    };
    const handleLoClick=() => {
        let newText = text.toLowerCase();
        setText(newText);      
        props.showAlert('Converted to LowerCase', 'success');
    };
    const handleClearClick=() => {
        let newText = '';
        setText(newText);
        props.showAlert('Cleared the text', 'success');
    };
    const handleRepeat=() => {
        let newText = text.repeat(2);
        setText(newText);
        props.showAlert('Repeated the text', 'success');
    };
    const handleCopy=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied', 'success');
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert('Removed extra spaces', 'success');
    }

    const[text, setText] = useState('Enter text here');
    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRepeat}>Repeat The Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview it.'}</p>
        </div>
        </>
    );
};