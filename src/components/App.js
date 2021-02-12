import React from "react";
import unsplash from "../api/unsplash.js"
import Imagelist from "./imageList";

import SearchBar from "./SearchBar.js"
class App extends React.Component{
	state={images:[] };
	 onSearchSubmit=async (term )=>{
		const response=await unsplash.get("/search/photos",{
			params:{
				query:term
			}

		});


		this.setState({images:response.data.results})
	console.log(response)
	}
	


	render(){
	return(
		<div className="ui container" style = {{marginTop:'20px'}}>
	
		<SearchBar onSubmit={this.onSearchSubmit}/>
		
		<Imagelist images={this.state.images}/>
		</div>
		)
	}
}
export default App; 