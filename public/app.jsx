var GreeterMessage=React.createClass({
	render : function(){
		
		return(<div>
				<h1>Hello {this.props.name}!</h1>
				<p>{this.props.message}!!</p>
			  </div>
		);
	}
});

var GreeterForm=React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();
		var name=this.refs.name.value;
		
		if(name.length>0){
			this.refs.name.value='';
			this.props.onNewName(name);
		}
	},
	render: function(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name"/>
				<button>Set name</button>
			</form>
		);
	}
});

var Greeter=React.createClass({
	getDefaultProps: function(){
		return{
			name:"React",
			message:"This is the default message I will render"
		}	
	},
	getInitialState: function(){
		return{
			name:this.props.name,
			message: this.props.message
		};
	},
	handleNewName: function(name){
		
			console.log('Transferring data to parent component.');
			this.setState({
				name:name
			});
	},
	render: function(){
		var name=this.state.name;
		var message=this.props.message;
		
		return(
			<div>
				<GreeterMessage name={name} message={message}></GreeterMessage>
				<GreeterForm onNewName={this.handleNewName}></GreeterForm>
			</div>
		);
	}
});

var firstName='Arun';
var message="This is a different message now";

ReactDOM.render(
        <Greeter name={firstName}></Greeter>,
        document.getElementById('example')
      );