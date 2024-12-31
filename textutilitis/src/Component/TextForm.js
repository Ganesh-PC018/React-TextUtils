import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(prop){
    const [text,setText] = useState('Enter text Here');
    // setText("Ganesh Mane");//--> Value of text is Changed to this.
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        // setText("You Have Clicked on HandleUpClick");
        setText(text.toUpperCase());
        prop.showAlert("Data converted to UpperCase","success");
    }

    const handleOnChange = (event) =>{
        // console.log("Handle On Changed");
        setText(event.target.value);
        //Writable File
    }
    const handlelowerClick = () =>{
        // console.log("LowerCase clicked");
        setText(text.toLowerCase());
        prop.showAlert("Data converted to LowerCase","success");
    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        prop.showAlert("Data has been Cleared","danger");
    }

    let myStyle = {
        color : 'black', 
        fontWeight : 'bold',
        fontFamily : 'times new roman',
        fontSize   : '20px'
    }
    return (
    <div className={`bg-${prop.mode}`}>
    <div className="container">
    <h2 className='my-3' style={{ color: prop.mode === 'light' ? 'black' : 'white'}}>{prop.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" value={text}  style={{
                        backgroundColor: prop.mode === 'light' ? 'white' : 'black', // Set background based on mode
                        color: prop.mode == 'light' ? 'black' : 'white', // Make the text inside the textarea white
                        borderColor: prop.mode === 'light' ? 'black' : 'white' // Optional: Set border color for dark mode
                    }}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-warning mx-2" onClick={handlelowerClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Data</button>
    </div>
    <div className="container" style={{color: prop.mode === 'light' ? 'black' : 'white'}}>
        <h2 className="my-3" ><strong>Your Text Summery</strong></h2>
        <p>{text.split(/\s+/).length} words and {text.length} Characters</p>
        <p>{0.008*text.split(/\s+/).filter(Boolean).length} Minutes required to read.</p>
        <h2 className="my-3"><strong>Preview</strong></h2>
        <p>{text.length > 0 ? text : "Enter Text in Textarea to preview it."}</p>
    </div>
    </div>
    )
}

TextForm.propTypes = {title : PropTypes.string};
TextForm.defaultProps ={
        title : "Text Analyzer"
}