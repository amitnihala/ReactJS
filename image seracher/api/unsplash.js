import Axios from 'axios';

/*onSearchSubmit (term) {
		Axios.get('https://api.unsplash.com/search/photos',{
			params: { query : term },
			headers : {
				Authorization : 'Client-ID 24a2e39f31a4899b8713efdfdc89af563114151e39d0c1bc61e2ff5ff6269c0e'
			}
		}).then((response)=>{console.log(response.data.results)});
	}*/
	
export default Axios.create({
	baseURL : 'https://api.unsplash.com',
	headers : {
				Authorization : 'Client-ID 24a2e39f31a4899b8713efdfdc89af563114151e39d0c1bc61e2ff5ff6269c0e'
			}
});