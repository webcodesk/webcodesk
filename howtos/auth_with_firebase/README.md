## How to build Web app with Firebase application in Webcodesk

Assuming you already have Webcodesk installed on your local machine and went through the beginner tutorial.

In this lesson, we implement the authentication in Firebase utilizing Webcodesk features.

First, we should create a new JavaScript project in Webcodesk. Enter any preferred name of the new project in the dialog. 

Then go to the newly created directory and remove the entire `greeting` directory in `src/usr` directory - we do not need this anymore.

Our application will have three pages: `main`, `login`, and `sign_up`. Two pages we can access without authentication, and the `main` page we can access only with authentication.

### Step one: Pages layouts


Let's install the Material UI library as it's the best choice for rapid UI modeling. Run the command in the project's directory: `yarn add @material-ui/core @material-ui/icons`.

Also, we have to change `index.js` file like in the following code:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { App, initApp } from './app';
import './index.css';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
});

initApp();
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

The `main` page of our application is already here - take a look at the `Pages` section on the left panel in Webcodesk.

It is left to create another two pages. Click on the `plus` icon in the `Pages` section title and create `login` page. Then create one more page with the `sign_up` name.

These pages are empty so far. We have to create layouts for the pages to put components into them.

> Layouts in Webcodesk dramatically helps to make the components even more decoupled and reusable.

Create a new directory with `layouts` name in `src/usr` directory. 

Then create `SingleFormLayout` functional component in the newly-created directory:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = ({
  formAreaCell: {
    marginTop: '4em',
  },
  bottomAreaCell: {
    marginBottom: '4em'
  }
});


class SingleFormLayout extends React.Component {

  componentDidMount () {
    this.props.onComponentDidMount();
  }

  render() {
    const {classes, formArea, bottomArea} = this.props;
    return (
      <Grid container={true} direction="column" alignItems="center" spacing={16}>
        <Grid item={true} className={classes.formAreaCell}>
          {formArea}
        </Grid>
        <Grid item={true} className={classes.bottomAreaCell}>
          {bottomArea}
        </Grid>
      </Grid>
    );
  }
}

SingleFormLayout.propTypes = {
  onComponentDidMount: PropTypes.func,
  formArea: PropTypes.element,
  bottomArea: PropTypes.element,
};

SingleFormLayout.defaultProps = {
  onComponentDidMount: () => {},
  formArea: null,
  bottomArea: null,
};

export default withStyles(styles)(SingleFormLayout);
```

> The name of the component should be equal to the name of the file.

You should see the component in the `Components` list under `layouts` group on the left panel in Webcodesk. Expand the `layouts` group if you don't see the new component name.

<img src="./img/pic1.png?raw=true" />

Open `login` page by the double click. 

> If you don't see the dashed area on the page, reload it by clicking on the `Reload` icon on the top toolbar.

Drag and drop the `SingleFormLayout` component on the dashed `formArea` area in the page editor.

<img src="./img/pic2.png?raw=true" />

As you can see, the layout has two placeholders: `formArea` and `bottomArea`. These names  correspond to the properties names in the `SingleFormLayout.propTypes` section of the component:

```javascript
SingleFormLayout.propTypes = {
  onComponentDidMount: PropTypes.func,
  formArea: PropTypes.element,
  bottomArea: PropTypes.element,
};

SingleFormLayout.defaultProps = {
  onComponentDidMount: () => {},
  formArea: null,
  bottomArea: null,
};
```

Drag the `SingleFormLayout` on the `sign_up` page as well.


Now let's create a layout for the login form.

A login form in the application should have two fields: `email` and `password`.  The same fields are used for account creating, that's why we should reuse the same form in login and signup processes both.

Put the `LoginForm` file of our new form component into the new directory `src\usr\forms`:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = ({
  root: {
    width: '300px',
  },
});

class LoginForm extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    titles: PropTypes.object,
    error: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    isLoading: false,
    titles: {
      formTitle: 'Unknown Title',
      submitButtonTitle: 'Unknown Submit',
    },
    error: '',
    onSubmit: () => {},
  };

  constructor (props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleSubmit = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onSubmit({
      email: this.emailInput.current.value,
      password: this.passwordInput.current.value
    });
  };

  render () {
    const { classes, isLoading, titles, error} = this.props;
    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <Grid container={true} direction="column" spacing={16}>
          <Grid item={true}>
            <Typography align="center" variant="h6">{titles.formTitle}</Typography>
          </Grid>
          {error && !isLoading && (
            <Typography align="center" variant="subtitle2" color="error">{error}</Typography>
          )}
          {isLoading && (
            <Typography align="center" variant="subtitle2">Loading...</Typography>
          )}
          <Grid item={true}>
            <TextField
              inputRef={this.emailInput}
              variant="outlined"
              fullWidth={true}
              label="Email"
              type="text"
            />
          </Grid>
          <Grid item={true}>
            <TextField
              inputRef={this.passwordInput}
              variant="outlined"
              fullWidth={true}
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item={true} justify="center" container={true}>
            <Grid item={true}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                {titles.submitButtonTitle}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
```

Drag `LoginForm` component on `formArea` placeholder in the `login` page. Open the `sign_up` form and put the `LoginForm` component into this page too on the same placeholder.

<img src="./img/pic3.png?raw=true" />

You might already notice, that there is the `titles` property in the `LoginForm` component and this property initialized by some strings.

As far as we reuse the same form in two different pages, we will initialize this property of each form's instance in different data flows a bit later.

Before that, we should add one more component - a single button form which we are going to use for page forwarding.

Create the `SingleButtonForm` component file in the `src/usr/forms` directory:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SingleButtonForm = ({buttonLabel, onClick}) => (
  <Button fullWidth={true} onClick={e => onClick()}>{buttonLabel}</Button>
);

SingleButtonForm.propTypes = {
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func,
};

SingleButtonForm.defaultProps = {
  buttonLabel: 'Unknown Label',
  onClick: () => {},
};

export default SingleButtonForm;
```

Drag `SingleButtonForm` to the `bottomArea` placeholder on both `login` and `sign_up` pages.

<img src="./img/pic4.png?raw=true" />

Finally, create a `main` page layout component in `src/usr/layouts/MainPageLayout.js` file:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

class MainPageLayout extends React.Component {
  static propTypes = {
    onComponentDidMount: PropTypes.func,
  };

  static defaultProps = {
    onComponentDidMount: () => {},
  };

  componentDidMount () {
    this.props.onComponentDidMount();
  }

  render () {
    return (
      <Grid container={true} justify="center" alignContent="center">
        <Grid>
          <h1>Hello, this is a main page!</h1>
        </Grid>
      </Grid>
    );
  }
}

export default MainPageLayout;
```

Open the `main` page and drop the `MainPageLayout` component there.

<img src="./img/pic5.png?raw=true" />

### Step two: Rename component instances

First of all, we need to give names to the instances on the pages.

Open `login` page and select `SingleFormLayout` component on the page. 

> You can use `Structure` button to see the page structure and find components on the page.

Click the `Rename` button on the top toolbar and rename the component's instance with the `loginFormLayout` name.

Then using the same way give `loginForm` name to the `LoginForm` component and `goToCreateAccount` name to the `SingleButtonForm` component.

Click on the `Save` button.

<img src="./img/pic6.png?raw=true" />

Open `sign_up` page and rename `SingleFormLayout`, `LoginForm`, and `SingleButtonForm` as `signUpFormLayout`, `signUpForm`, and `goToLoginButton` accordingly.

<img src="./img/pic7.png?raw=true" />

### Step three: Initialize component instances

It's time to create data flow diagrams in our application.

However, before that, we should implement some logic for the initialization of the components.

Create the `api` folder in the `src/usr` directory. Then create the `initializationFunctions.js` file in this folder with the following code:

```javascript
export const initSignUpForm = () => dispatch => {
  dispatch('titles', {formTitle: 'Create New Account', submitButtonTitle: 'Create'});
  dispatch('goToLabel', 'Back To Login');
};

export const initLoginForm = () => dispatch => {
  dispatch('titles', {formTitle: 'Login', submitButtonTitle: 'Submit'});
  dispatch('goToLabel', 'Create new account');
};
```

Adding this file will cause Webcodesk to add `api` folder with `initializationFunctions` group to the `Functions`  section on the left panel.

Now create a diagram for the `login` page. Click on the `plus` icon in the `Flows` section on the left panel in Webcodesk and name it as `on_login_page_mounted`.

In the diagram editor, substitute the `Application` element with `loginFormLayout` instance from the `login` page.

Then drag and drop the `initLoginForm` function (find it in the `initializationGroup` on the left) next to the `lofingFormLayout` and connect `onComponentDidMount` output with `callFunction` input.

Drag `loginForm` and `goToCreateAccountButton` instances, and `sign_up` page on the diagram and connect them as shown in the picture below.

<img src="./img/pic8.png?raw=true" />

The same way as we've created this diagram, create the `on_sign_up_page_mounted` diagram as shown in the picture below.

<img src="./img/pic9.png?raw=true" />

If you open the `Live Preview` tab and try to switch between pages, you will see that `login` and `sign_up` pages have different form titles each.

<img src="./img/pic10.png?raw=true" />

Now we should implement a flow for authentication validation when the user tries to open `main` page of the application.

Create the `src/usr/api/authenticationFunctions.js` file with `checkUser` function:

```javascript
let userProfile = null;

export const checkUser = () => dispatch => {
  if (!userProfile) {
    dispatch('notAuthenticated');
  }
};
```

Then create the `on_main_page_mounted` flow in Webcodesk and "draw" the following diagram using new `checkUser` function:

<img src="./img/pic11.png?raw=true" />

If you try to open the `main` page in the `Live Preview` now, you will be forwarded to the `login` page.

Let's create two mockup functions for user authentication and creating before we integrate the application with Firebase.

Add the following code with two new functions into the `src/usr/api/authenticationFunctions.js` file.

```javascript
let userProfile = null;

export const checkUser = () => dispatch => {
  if (!userProfile) {
    dispatch('notAuthenticated');
  }
};

export const authUser = ({email, password}) => async dispatch => {
  if (!email || email.length === 0 || !password || password.length === 0) {
    dispatch('error', 'Email or password is empty');
  } else {
    userProfile = {email};
    dispatch('success');
  }
};

export const createUser = ({email, password}) => async dispatch => {
  if (!email || email.length === 0 || !password || password.length === 0) {
    dispatch('error', 'Email or password is empty');
  } else {
    userProfile = {email};
    dispatch('success');
  }
};
```

Then open the `on_login_page_mounted` diagram and add a branch from the `loginForm.onSubmit` output as shown on the picture:

<img src="./img/pic12.png?raw=true" />

Also, add a new branch in the `on_sign_up_page_mounted` diagram:

<img src="./img/pic13.png?raw=true" />

Once flows are compiled, you can log in and create the user, and see the `main` page because the fake authentication is working now.

### Step four: Integration with Firebase

Log in into the Firebase and create a new project there. 

Enter the newly created project and switch to the `Authentication` settings on the left panel. Then click to the `Web setup` button and copy the initial configuration of your project.

<img src="./img/pic14.png?raw=true" />

Go to the directory of our project and run the command: `yarn add firebase`.

Now we have to initialize the firebase library in our application when it is started in the browser.

Add a new function to the `src/usr/api/initializationFunctions.js` file:

```javascript
import firebase from 'firebase';

export const initSignUpForm = () => dispatch => {
  dispatch('titles', {formTitle: 'Create New Account', submitButtonTitle: 'Create'});
  dispatch('goToLabel', 'Back To Login');
};

export const initLoginForm = () => dispatch => {
  dispatch('titles', {formTitle: 'Login', submitButtonTitle: 'Submit'});
  dispatch('goToLabel', 'Create new account');
};

export const initApplication = () => dispatch => {
  // Initialize Firebase
  let config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SEND_ID"
  };
  firebase.initializeApp(config);
};
```

Open `start` flow diagram and make the flow as shown on the picture:

<img src="./img/pic15.png?raw=true" />

The only thing is left to add Firebase functions instead of our fake functions.

Modify the source code in the `src/usr/api/authenticationFunctions.js` file:

```javascript
import firebase from 'firebase';

let userProfile = null;

export const checkUser = () => dispatch => {
  if (!userProfile) {
    dispatch('notAuthenticated');
  }
};

export const authUser = ({email, password}) => async dispatch => {
  if (!email || email.length === 0 || !password || password.length === 0) {
    dispatch('error', 'Email or password is empty');
  } else {
    try {
      userProfile = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch('success');
    } catch (error) {
      dispatch('error', error.message);
    }
  }
};

export const createUser = ({email, password}) => async dispatch => {
  if (!email || email.length === 0 || !password || password.length === 0) {
    dispatch('error', 'Email or password is empty');
  } else {
    try {
      userProfile = await firebase.auth().createUserWithEmailAndPassword(email, password);
      dispatch('success');
    } catch (error) {
      dispatch('error', error.message);
    }
  }
};
```

When you try to log in on the `Live Preview`, you will see the error on the page:

<img src="./img/pic16.png?raw=true" />

It means that we have to set up the correct authentication provider in the Firebase project.

Go to the projects dashboard and change the authentication as follows:

<img src="./img/pic17.png?raw=true" />

Now try to create the user account and then log in after the reloading page.

