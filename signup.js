var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasterForm = function (_React$Component) {
  _inherits(MasterForm, _React$Component);

  function MasterForm(props) {
    _classCallCheck(this, MasterForm);

    var _this = _possibleConstructorReturn(this, (MasterForm.__proto__ || Object.getPrototypeOf(MasterForm)).call(this, props));

    _this.handleChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(_defineProperty({}, name, value));
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          username = _this$state.username,
          password = _this$state.password;

      alert('Your registration detail: \n \n           Email: ' + email + ' \n \n           zip: ' + zip + ' \n\n           frequency: ' + frequency + ' \n\n           yardsize: ' + yardsize + ' \n\n           service: ' + service);
    };

    _this._next = function () {
      var currentStep = _this.state.currentStep;
      currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      _this.setState({
        currentStep: currentStep
      });
    };

    _this._prev = function () {
      var currentStep = _this.state.currentStep;
      currentStep = currentStep <= 1 ? 1 : currentStep - 1;
      _this.setState({
        currentStep: currentStep
      });
    };

    _this.state = {
      currentStep: 1,
      email: '',
      zip: '',
      service: '',
      frequency: '',
      yardsize: ''
    };
    return _this;
  }

  _createClass(MasterForm, [{
    key: 'previousButton',


    /*
    * the functions for our button
    */
    value: function previousButton() {
      var currentStep = this.state.currentStep;
      if (currentStep !== 1) {
        return React.createElement(
          'button',
          {
            className: 'btn btn-secondary',
            type: 'button', onClick: this._prev },
          'Previous'
        );
      }
      return null;
    }
  }, {
    key: 'nextButton',
    value: function nextButton() {
      var currentStep = this.state.currentStep;
      if (currentStep < 3) {
        return React.createElement(
          'button',
          {
            className: 'btn btn-primary float-right',
            type: 'button', onClick: this._next },
          'Next'
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'p',
          null,
          'Step ',
          this.state.currentStep,
          ' '
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(Step1, {
            currentStep: this.state.currentStep,
            handleChange: this.handleChange,
            email: this.state.email
          }),
          React.createElement(Step2, {
            currentStep: this.state.currentStep,
            handleChange: this.handleChange,
            username: this.state.username
          }),
          React.createElement(Step3, {
            currentStep: this.state.currentStep,
            handleChange: this.handleChange,
            password: this.state.password
          }),
          this.previousButton(),
          this.nextButton()
        )
      );
    }
  }]);

  return MasterForm;
}(React.Component);

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return React.createElement(
    'div',
    { className: 'form-group' },
    React.createElement(
      'label',
      { htmlFor: 'zip' },
      'Zip Code'
    ),
    React.createElement('input', {
      className: 'form-control',
      id: 'zip',
      name: 'zip',
      type: 'text',
      placeholder: 'Enter Your Zip',
      value: props.zip,
      onChange: props.handleChange
    })
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'service' },
        'Service'
      ),
      React.createElement('input', { className: 'form-control', id: 'service', name: 'service', type: 'text', placeholder: 'Enter Service', value: props.service, onChange: props.handleChange })
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'yardsize' },
        'Yard Size'
      ),
      React.createElement('input', { className: 'form-control', id: 'yardsize', name: 'yardsize', type: 'text', placeholder: 'Enter yardsize', value: props.yardsize, onChange: props.handleChange })
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'frequency' },
        'Service Frequency'
      ),
      React.createElement('input', { className: 'form-control', id: 'frequency', name: 'frequency', type: 'text', placeholder: 'Enter frequency', value: props.frequency, onChange: props.handleChange })
    )
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'cc' },
        'Credit Card'
      ),
      React.createElement('input', { className: 'form-control', id: 'cc', name: 'cc', type: 'text', placeholder: 'Enter Credit Card Number', value: props.cc, onChange: props.handleChange })
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'expiry' },
        'Expiry'
      ),
      React.createElement('input', { className: 'form-control', id: 'expiry', name: 'expiry', type: 'text', placeholder: 'Enter expiry', value: props.yardsize, onChange: props.handleChange })
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'billingZip' },
        'Billign zip'
      ),
      React.createElement('input', { className: 'form-control', id: 'billingZip', name: 'billingZip', type: 'text', placeholder: 'Enter Blling Zip', value: props.billingZip, onChange: props.handleChange })
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement(
        'label',
        { htmlFor: 'email' },
        'Email'
      ),
      React.createElement('input', { className: 'form-control', id: 'email', name: 'email', type: 'text', placeholder: 'Email', value: props.email, onChange: props.handleChange })
    ),
    React.createElement(
      'button',
      { className: 'btn btn-success btn-block' },
      'Sign up'
    )
  );
}

ReactDOM.render(React.createElement(MasterForm, null), document.getElementById('root'));