import axios from "axios";
// const searchImages=(term)=>{

// }
 export default axios.create({
	baseURL:"https://api.unsplash.com",
	headers:{
				Authorization: "Client-ID R1Fyvkxwe2rjOjCkrW0dN2jiOG93EvHj8EH6LrBuXTs"
			},

})