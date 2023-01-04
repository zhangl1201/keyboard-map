import './Key.scss';

function Key(props) {
    return (
        <div className={['key-card', `key-size-${props.size + 4}`, `key-color-${props.hitCount}`].join(' ')}>
            <span>{props.label}</span>
            {/* <div>Key Hit: {props.hitCount}</div>
            <div>Key Expectation: {props.expectedCount}</div>
            <div>Key Size: {props.size}</div> */}
        </div>
    )
}

export default Key;