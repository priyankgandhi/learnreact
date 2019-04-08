class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email:  '',
      zip: '',
      service: '', 
      frequency: '',
      yardsize: ''
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           zip: ${zip} \n
           frequency: ${frequency} \n
           yardsize: ${yardsize} \n
           service: ${service}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
  
  render() {    
    return (
      <React.Fragment>
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="zip">Zip Code</label>
      <input
        className="form-control"
        id="zip"
        name="zip"
        type="text"
        placeholder="Enter Your Zip"
        value={props.zip}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(<React.Fragment>
    <div className="form-group">
      <label htmlFor="service">Service</label>
      <input className="form-control" id="service" name="service" type="text" placeholder="Enter Service" value={props.service} onChange={props.handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="yardsize">Yard Size</label>
      <input className="form-control" id="yardsize" name="yardsize" type="text" placeholder="Enter yardsize" value={props.yardsize} onChange={props.handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="frequency">Service Frequency</label>
      <input className="form-control" id="frequency" name="frequency" type="text" placeholder="Enter frequency" value={props.frequency} onChange={props.handleChange} />
    </div>
    </React.Fragment>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="cc">Credit Card</label>
      <input className="form-control" id="cc" name="cc" type="text" placeholder="Enter Credit Card Number" value={props.cc} onChange={props.handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="expiry">Expiry</label>
      <input className="form-control" id="expiry" name="expiry" type="text" placeholder="Enter expiry" value={props.yardsize} onChange={props.handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="billingZip">Billign zip</label>
      <input className="form-control" id="billingZip" name="billingZip" type="text" placeholder="Enter Blling Zip" value={props.billingZip} onChange={props.handleChange} />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input className="form-control" id="email" name="email" type="text" placeholder="Email" value={props.email} onChange={props.handleChange} />
    </div>
    <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}

ReactDOM.render(<MasterForm />, document.getElementById('root'))