import Axios from 'axios';

const KEY='AIzaSyDggec4l6sxaOCZf4OmY3e4by47Xz4LcYU';

export default Axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3',
	params : {
		part : 'snippet',
		maxResults : 25,
		key : KEY
	}
});