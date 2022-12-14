import { useState } from 'react'
const Progress = ({done}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress w-full">
			<div className="progress-done" style={style}>
				{done.toFixed(1)}% 
			</div>
		</div>
	)
}
export default Progress;
