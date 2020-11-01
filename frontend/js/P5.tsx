import * as React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
 
import {render} from 'react-dom'

interface ComponentProps {
    //Your component props
}
 
const P5: React.FC<ComponentProps> = (props: ComponentProps) => {

    const width = 500
    const height = 500

    const [x,setX] = React.useState(width/2)
    const [y,setY] = React.useState(height/2)

    React.useEffect(()=>{
        document.addEventListener("keydown",keyChange)

        return ()=>{
            document.removeEventListener("keydown",keyChange)
        }
    },[])

    const keyChange = (e)=>{
        e.preventDefault()

        switch (e.keyCode) {
            case 37:
                setX(x=>x-5)
                break;
            case 39:
                setX(x=>x+5)
                break;
            case 38:
                setY(y=>y-5)
                break;
            case 40:
                setY(y=>y+5)
                break;
        
            default:
                break;
        }
    }
 
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    };
 
    const draw = (p5: p5Types) => {
        p5.background("rgb(10%,25%,10%)");
        p5.ellipse(x, y, 70, 70);
    };
 
    return <>
        <h1>my P5 Canvas</h1>
            <Sketch setup={setup} draw={draw} />        
    </>;
};

render(<P5/>,document.getElementById("app"))
