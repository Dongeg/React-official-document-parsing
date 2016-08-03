var HelloWorld=React.createClass({
	getInitialState:function(){
		return{
			value:'',
		}
	},
	handleChange:function(event){
        this.setState({value:event.target.value});
	},
	render:function(){
		return(
			<div>
			<form>
				<input type="text" onChange={this.handleChange} />
			</form>
			<p>{this.state.value}</p>
			</div>
			)
	},
})
ReactDOM.render(<HelloWorld></HelloWorld>,document.body);