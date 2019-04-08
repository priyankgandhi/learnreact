var React = require('react')

var AddressFields = React.createClass({
  render: function() {
    return ( 
      <div id="signup_flow">
          <form class="form-inline">
              <div class="mx-auto">
                <input class="form-control mr-sm-2" type="text" placeholder="Enter Zip" aria-label="Search" ref="zip" defaultValue={ this.props.fieldValues.zip }/>
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={ this.saveAndContinue }>Submit</button>
              </div>
            </form>
        <div>
    )},

  saveAndContinue: function(e) {
    e.preventDefault()
    // Get values via this.refs
    var data = { 
      zip : this.refs.zip.getDOMNode().value
    }
    this.props.saveValues(data)
    this.props.nextStep()
  }
})

var ServiceFields = React.createClass({
  render: function() {
    return (       
      <label>Service</label> 
      <input type="text"
             ref="product"
             defaultValue={ this.props.fieldValues.product } />

      <label>Password</label>
      <input type="text"
             ref="time"
             defaultValue={ this.props.fieldValues.time } />

      <label>Email</label>
      <input type="text"
             ref="yardsize"
             defaultValue={ this.props.fieldValues.yardsize } />

      <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      product     : this.refs.product.getDOMNode().value,
      time : this.refs.time.getDOMNode().value,
      yardsize    : this.refs.yardsize.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})


var PurchaseFields = React.createClass({
  render: function() {
    return ( 
      <label>Service</label> 
      <input type="text"
             ref="cc"
             defaultValue={ this.props.fieldValues.cc } />
             <label>Service</label> 
      <input type="text"
             ref="expiry"
             defaultValue={ this.props.fieldValues.expiry } />
             <label>Service</label> 
      <input type="text"
             ref="zip"
             defaultValue={ this.props.fieldValues.zip } />

      <button onClick={ this.saveAndContinue }>Submit</button></div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      cc : this.refs.cc.getDOMNode().value,
      expiry : this.refs.expiry.getDOMNode().value,
      zip : this.refs.zip.getDOMNode().value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})


var Success = React.createClass({

})


var Signup = React.createClass({
  getInitialState: function() {
    return {
      step: 1
    }
  },

  saveValues: function(fields) {
    return function() {
      // Remember, `fieldValues` is set at the top of this file, we are simply appending
      // to and overriding keys in `fieldValues` with the `fields` with Object.assign
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      fieldValues = Object.assign({}, fieldValues, fields)
    }()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },

  // Same as nextStep, but decrementing
  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },

  submitRegistration: function() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance
    this.nextStep()
  },

  render: function() {
    switch (this.state.step) {
      case 1:
      return <AddressFields fieldValues={fieldValues}
                            nextStep={this.nextStep}
                            saveValues={this.saveValues} />
      case 2:
      return <ServiceFields fieldValues={fieldValues}
                           nextStep={this.nextStep}
                           previousStep={this.previousStep}
                           saveValues={this.saveValues} />
      case 3:
      return <PurchaseFields fieldValues={fieldValues}
                           previousStep={this.previousStep}
                           submitRegistration={this.submitRegistration} />
      case 4:
      return <Success fieldValues={fieldValues} />
    }
  },
  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <progress className="progress" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }
})

React.render(
    <Signup />,
    document.getElementById('registration-form')
  )


module.exports = Registration
