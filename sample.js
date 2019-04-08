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

      alert('Your registration detail: \n \n           Email: ' + email + ' \n \n           Username: ' + username + ' \n\n           Password: ' + password);
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
      username: '',
      password: ''
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
          'h1',
          null,
          'React Wizard Form '
        ),
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
      { htmlFor: 'email' },
      'Email address'
    ),
    React.createElement('input', {
      className: 'form-control',
      id: 'email',
      name: 'email',
      type: 'text',
      placeholder: 'Enter email',
      value: props.email,
      onChange: props.handleChange
    })
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return React.createElement(
    'div',
    { className: 'form-group' },
    React.createElement(
      'label',
      { htmlFor: 'username' },
      'Username'
    ),
    React.createElement('input', {
      className: 'form-control',
      id: 'username',
      name: 'username',
      type: 'text',
      placeholder: 'Enter username',
      value: props.username,
      onChange: props.handleChange
    })
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
        { htmlFor: 'password' },
        'Password'
      ),
      React.createElement('input', {
        className: 'form-control',
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder: 'Enter password',
        value: props.password,
        onChange: props.handleChange
      })
    ),
    React.createElement(
      'button',
      { className: 'btn btn-success btn-block' },
      'Sign up'
    )
  );
}

ReactDOM.render(React.createElement(MasterForm, null), document.getElementById('root'));