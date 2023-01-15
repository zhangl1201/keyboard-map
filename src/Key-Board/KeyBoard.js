import { useEffect, useState } from 'react';
import Key from '../Key/Key';
import './KeyBoard.scss'

function KeyBoard() {
    const line1 = [
        {label: 'tab', code: 'Tab', hitCount: 0, expectedCount: 3, size: 2},
        {label: 'q', code: 'KeyQ', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'w', code: 'KeyW', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'e', code: 'KeyE', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'r', code: 'KeyR', hitCount: 0, expectedCount: 3, size: 0},
        {label: 't', code: 'KeyT', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'y', code: 'KeyY', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'u', code: 'KeyU', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'i', code: 'KeyI', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'o', code: 'KeyO', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'p', code: 'KeyP', hitCount: 0, expectedCount: 3, size: 0},
        {label: '[', code: 'BracketLeft', hitCount: 0, expectedCount: 3, size: 0},
        {label: ']', code: 'BracketRight', hitCount: 0, expectedCount: 3, size: 0},
        {label: '\\', code: 'Backslash', hitCount: 0, expectedCount: 3, size: 2}
    ]

    const line2 = [
        {label: 'CapsLock', code: 'CapsLock', hitCount: 0, expectedCount: 3, size: 3},
        {label: 'a', code: 'KeyA', hitCount: 0, expectedCount: 3, size: 0},
        {label: 's', code: 'KeyS', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'd', code: 'KeyD', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'f', code: 'KeyF', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'g', code: 'KeyG', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'h', code: 'KeyH', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'j', code: 'KeyJ', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'k', code: 'KeyK', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'l', code: 'KeyL', hitCount: 0, expectedCount: 3, size: 0},
        {label: ';', code: 'Semicolon', hitCount: 0, expectedCount: 3, size: 0},
        {label: '\'', code: 'Quote', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'Enter', code: 'Enter', hitCount: 0, expectedCount: 3, size: 5},
    ]

    const line3 = [
        {label: 'Shift', code: 'ShiftLeft', hitCount: 0, expectedCount: 3, size: 5},
        {label: 'z', code: 'KeyZ', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'x', code: 'KeyX', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'c', code: 'KeyC', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'v', code: 'KeyV', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'b', code: 'KeyB', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'n', code: 'KeyN', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'm', code: 'KeyM', hitCount: 0, expectedCount: 3, size: 0},
        {label: ',', code: 'Comma', hitCount: 0, expectedCount: 3, size: 0},
        {label: '.', code: 'Period', hitCount: 0, expectedCount: 3, size: 0},
        {label: '/', code: 'Slash', hitCount: 0, expectedCount: 3, size: 0},
        {label: 'Shift', code: 'ShiftRight', hitCount: 0, expectedCount: 3, size: 8}
    ]
    const line4 = [
        {label: 'Ctrl', code: 'ControlLeft', hitCount: 0, expectedCount: 3, size: 2},
        {label: 'Win', code: 'MetaLeft', hitCount: 0, expectedCount: 3, size: 2},
        {label: 'Alt', code: 'AltLeft', hitCount: 0, expectedCount: 3, size: 2},
        {label: 'Space', code: 'Space', hitCount: 0, expectedCount: 3, size: 18},
        {label: 'Alt', code: 'AltRight', hitCount: 0, expectedCount: 3, size: 2},
        {label: 'fn', code: 'Space', hitCount: 0, expectedCount: 3, size: 2},
        {label: 'Menu', code: 'ContextMenu', hitCount: 0, expectedCount: 3, size: 2},
        {label: 'ctrl', code: 'ControlRight', hitCount: 0, expectedCount: 3, size: 2}
    ]
    const keyBoard = [
        line1,
        line2,
        line3,
        line4
    ]

    const nonPrintableKeys = [
        "ContextMenu",
        "Enter",
        "Space",
        "Tab",
        "Delete"
    ]

    const[keyboard, setKeyBoard] = useState(keyBoard);

    function handleKeyPress(event) {
        console.log(event.code);
        keyboard.forEach((line) => {
            line.forEach((key) => {
                if (key.code.toUpperCase() === event.code.toUpperCase() && key.hitCount === 0) {
                    key.hitCount++;
                }
            })
        })
        setKeyBoard(JSON.parse(JSON.stringify(keyboard)));
        event.preventDefault();
    }

    useEffect(() => {
        // window.addEventListener('keyup', handleKeyPress, true)
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            // window.removeEventListener('keyup', handleKeyPress, true)
            window.removeEventListener('keydown', handleKeyPress, true)
        }
    }, [])

    return (
        <div className="key-board">
            {keyboard.map((line) => 
                <div className='key-line'>{line.map((key) =><Key label={key.label} hitCount={key.hitCount} size={key.size}></Key>)}
                
                </div>
            )}
            
        </div>
    )
}

export default KeyBoard;