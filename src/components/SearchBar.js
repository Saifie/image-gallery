import React from "react";

class SearchBar extends React.Component{
	state={term:""}
	onFormSubmit=(e)=>{
		e.preventDefault();
		this.props.onSubmit(this.state.term)
		

	}

	render(){
		return(

			<div className="ui segment">
			<form action="" onSubmit={this.onFormSubmit} className="ui form">
			<div className="field">
			<label htmlFor="">Image Search</label>

					<input type="text"
					 name="" id="" 
					 value={this.state.term} 
					 onChange={(e)=>{this.setState({term:e.target.value})}}/>

			</div>
			<button className="button">search</button>
			

			</form>


			</div>
		)

	}
}


export default SearchBar;