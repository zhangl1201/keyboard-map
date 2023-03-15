import { useEffect, useState, createRef } from 'react';
import './PaintBoard.scss'

function PaintWidthPanel(props) {
    return (
        <div className='width-panel'>
            Stroke:
            {
                props.widths.map((element, index) => 
                    <span key={`width-${index}`} className='width-span'
                        onClick={() => {
                            props.onWidthSpanClick(index);
                        } }>{element}</span>
                )
            }
        </div>
    )
}

function PaintColorPanel(props) {
    return (
        <div className='color-panel'>
            Color:
            {
                props.colors.map((element, index) =>
                    <div key={`color-${index}`} className='color-span' style={{ backgroundColor: element }}
                        onClick={() => {
                            props.onColorSpanClick(index);
                        }} />
                )
            }
        </div>
    )
}

function PaintBoard() {
    const [canvasRef] = useState(createRef());
    const [paintColors] = useState(['#000000', '#999999', '#CC66FF', '#FF0000', '#FF9900', '#FFFF00']);
    const [paintWidths] = useState([1, 2, 3, 4, 5, 6, 8, 10, 14, 18, 22, 30, 40, 50]);  
    const [hidePanel, setHidePanel] = useState(false);
    const [color, setColor] = useState('#000000');

    useEffect(() => {
        function initPainter(){
            const canvas = canvasRef.current;
            const canvasContext = canvas.getContext('2d');
            let x = 0;
            let y = 0;
            canvasContext.lineWidth = 100;
            canvasContext.strokeStyle = color;
        
            //鼠标按下事件
            canvas.addEventListener('mousedown', (e) => {
                e.preventDefault();
                setHidePanel(true)
                x = e.offsetX;
                y = e.offsetY;
                console.log(`x: ${x}, y: ${y}`)
                canvasContext.beginPath();
                canvasContext.moveTo(x, y);
                //鼠标移动事件
                let onMouseMoveEvent = (e) => {
                    let newX = e.offsetX;
                    let newY = e.offsetY;
                    canvasContext.lineTo(newX, newY);
                    canvasContext.stroke();
                    x = newX;
                    y = newY;
                    console.log(`x: ${x}, y: ${y}`)
                }
            
                canvas.addEventListener('mousemove', onMouseMoveEvent);
                canvas.addEventListener('mouseup', () => {
                    setHidePanel(false)
                    canvas.removeEventListener('mousemove', onMouseMoveEvent);
                })
            })
        }
        initPainter();
    }, [])

    useEffect(() => {
        function resizeCanvas() {
            canvasRef.current.width=window.innerWidth;
            canvasRef.current.height=window.innerHeight;
        };
        resizeCanvas();
        const resizeListener = () => {
            resizeCanvas()
        };
        window.addEventListener('resize', resizeListener);

        return () => {
        window.removeEventListener('resize', resizeListener);
        }
    }, [])

    function onColorClick(index) {
        setColor(paintColors[index])
        canvasRef.current.getContext('2d').strokeStyle = paintColors[index]
    }

    function onWidthClick(index) {
        canvasRef.current.getContext('2d').lineWidth = paintWidths[index]
    }

    return (
        <div className='canvas-container'>
            <canvas id="myCanvas" ref={canvasRef} className="my-canvas" width="800" height="600">
                您的浏览器不支持canvas
            </canvas>
            <div className='panel-container' hidden={hidePanel}>
                <PaintWidthPanel widths={paintWidths} onWidthSpanClick={onWidthClick}></PaintWidthPanel>
                <br />
                <PaintColorPanel colors={paintColors} onColorSpanClick={onColorClick}></PaintColorPanel>
            </div>
            
        </div>
    )
}

export default PaintBoard;