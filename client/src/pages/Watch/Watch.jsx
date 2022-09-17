import './watch.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
	const location = useLocation();
	const { movie } = location.state;
	return (
		<div className="watch">
			<Link to="/">
				<div className="back">
					<KeyboardBackspaceIcon />
					Home
				</div>
			</Link>
			<video
				className='video'
				autoPlay progress="true"
				controls
				src={movie.video} />
		</div>
	)
}

export default Watch