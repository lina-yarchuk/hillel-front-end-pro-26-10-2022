import "./InputField.css";

const InputField = ({text, handleInput, handleKeyDown, handleSubmit}) => {
	return (
		<div className="input-area">
			<input className='new-todo'
				placeholder="What needs to be done?"
				value={text}
				onChange={e => handleInput(e.target.value)}
				onKeyDown={e => handleKeyDown(e)}
			/>
			<button className='button' onClick={handleSubmit}>AddTodo</button>
		</div>
	);
}

export default InputField;
