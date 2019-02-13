## Webcodesk Beginner Tutorial

Welcome to Webcodesk!

This tutorial assumes that you already have some experience with React and know how to create web applications utilizing Create React App.

[Russian version of the tutorial](./BeginnerTutorial_RU.md)

### Introduction


First of all, let's understand why would you need Webcodesk.

Webcodesk was designed with the idea to help in creating big web applications using the React framework (yeah, they say it's not a framework...) and at the same time make this process maintainable without writing extra code manually.

In Webcodesk you can easily navigate, quickly change and experiment with data flows in the application. You will see the overall picture of how different pages, components, and logic interact in your application via diagrams.

Here is the list of what you can do in Webcodesk while developing a web app:
* Develop every React component in isolation. 
* Create application pages combining components in a visual editor. 
* Connect pages, components, and logic on the diagrams without writing any extra code for Redux containers, action creators, reducers, etc.  
* Debug internal data flow in the application directly on diagrams.
* And even provide the documentation for components and business logic functions.

Let's go through all the main features of Webcodesk in this tutorial. We are going to make a simple app.

### New project

First, we should create a new project. It is worthy to say that Webcodesk uses Create React App scripts to create the project.

We can create two types of projects:
* With JavaScript source code
* With TypeScript source code

Let’s create the project for JavaScript – click on the `New JavaScript Project` button.

<img src="./img/pic1.png?raw=true" />

You will see the form with two inputs. Type the project name in the first input, and select the directory where you want the project's source code will be in the second input field.

<img src="./img/pic2.png?raw=true" />

After clicking the `Create` button you will see a console output of the project's creating process. These lines fully correspond to the output you see when creating the project with Create React App.

When the process of copying and installing is over, the newly created project will open on the screen. 

<img src="./img/pic3.png?raw=true" />

Webcodesk starts Webpack Dev server right after the project is initialized. This is similar to what is happening when Create React App starts the server when you run the command `yarn start`.

Let’s make sure that the server is started successfully. Click the `Server Status` button and wait until the record about the server has started successfully appears.

> **Hint**: server starts by default with `3030` port. However, you can overwrite settings in the `Server Status` window. Here you can also restart the server if needed.

<img src="./img/pic4.png?raw=true" />

Close the `Server Status` window by clicking the `Close` button at the top.

There are a few React components that were created while the project was set up. It was done with intent to go through this tutorial without writing the code.

Now we will use those components in the simplest Single Page application.

### Main page

Firstly we need to create the main page of the application. There is already an empty page with the `main` name in the `Pages` section on the left panel.

> **Hint**: if you do not see such a name in the left panel, you should create a new page by clicking on the icon with the plus sign and then enter "main" as the page name.

Choosing the name, in this case, is important because Webcodesk recognizes the `main` page as the index or start page of the application.

<img src="./img/pic5.png?raw=true" />

Make a double click on the page name in the left panel. A new tab that corresponds to the newly created page will appear on the screen.  This is the workspace of the page editor.

> **Hint**: if you do not see the dashed area with "Drag and drop here" text inside the tab, then click on `Reload` icon at the top toolbar.

<img src="./img/pic6.png?raw=true" />

Now we can get down to the adding components in the page. Open `greeting` folder in the `Components` section on the left panel, and drag `FormContainer` name by mouse up to the `Drag and drop here` area, then release the mouse button when the cursor is there.

<img src="./img/pic7.png?raw=true" />

Drag and drop `Form` and `TitlePanel` components on the `form` and `title` areas accordingly.

<img src="./img/pic8.png?raw=true" />

When all the components are installed, click the `Save` button at the top toolbar. All the changes will be saved now and Webpack can compile the page with new components instances. Then you can take a look at how the page works in the browser.

Click on the `Live Preview` button at the top of the left panel to see the page in alive. The new `Live Preview` tab with the `main` page will open.

<img src="./img/pic9.png?raw=true" />

### The first diagram

You already have seen there is no activity on the page when you click on the `Click` button. Let's bring life to the application by adding a data flow diagram where we can draw how components may interact.

Use a pre-created diagram with `start` name in the `Flows` section on the left panel. Just double click on the `start` item.

> **Hint**: if you do not find the `start` diagram, you should create it by clicking on an icon with `plus` sign in the `Flows` section title.

Now you will see the new tab where the new `start` diagram is pictured.

<img src="./img/pic10.png?raw=true" />

As you can see, there is a grey rectangle with the `Application` title on the diagram. This is the first element of the diagram that plays a role of the entry point in a data flow described by this concrete diagram.

`Application` element has the only one `onApplicationStart` event that triggered when the application loaded in the browser.

Now we are going to make a welcome greeting to appear when the user entered the start page.

Expand the `greeting` folder in the `Functions` section on the left panel. And then expand the `api` group with the available functions inside.

> **Hint**: these functions were generated during the project's creating process. They contain a simple logic we need for this tutorial.

Find the `initialTitle` name in the functions list under the `api` group and drag it to the dashed area next to the `Application` element.

<img src="./img/pic11.png?raw=true" />

Webcodesk compiler immediately indicates that there is an error on the diagram showing a red label at the top right corner of the element.

> **Hint**: you can see the error description by clicking on the error label.

The compiler warns us about element not connected with other elements on the diagram. And it seems that this element will not participate in the data flow.

<img src="./img/pic12.png?raw=true" />

We have to connect elements to remove the error. Move the mouse over the output point of the `onApplicationStart` event and then draw (press the button and move mouse) a line to the `callFunction` input point of the function element.

> **Hint**: you can zoom in and zoom out the diagram view on the screen by mouse scrolling.

> **Hint**: you can move the diagram by mouse - press the button elsewhere on the diagram and move the cursor holding the mouse button.

<img src="./img/pic13.png?raw=true" />

Thus we invoke the `initialTitle` function right after the application starts.

As you can see in the diagram, the `initialTitle` function has the `title` event. We don't know now about logic inside the function, but we can read about this in the function description.

Double click on the function name in the list on the left panel. And you will see a new tab with descriptions of all functions in the `api` group.

<img src="./img/pic14.png?raw=true" />

But we have to pass in data from the `title` event to some component. The best choice is a `TitlePanel` component which we dropped on the `main` page before. 

Of course, we don't need the abstract React component, but a real instance of the component on the page. 

Expand the `main` page group on the left panel. Then find the instance with name `titlePanel` inside the page's group. Drop it on the diagram right on the dashed rectangle connected with the `initialTitle` function.

> **Hint**: you can change the instance name in the page editor - select the component and click `Rename` button on the toolbar. The instance acts as a separate component with own state and actions.

Then connect the `title` output point of the `initialTitle` element with the `title` input point of the `titlePanel` element as it is shown on the picture below.

<img src="./img/pic15.png?raw=true" />

If you open the `Live Preview` tab again, you will see that the title, above the input field, has the welcome greeting text.

<img src="./img/pic16.png?raw=true" />

It means that when the application starts the `title` property of the `titlePanel` instance received a value from the `title` event of the `initialTitle` function. Exactly that logic we draw that on the diagram.

### The second diagram

Let's add some interactivity to our application.

Create a new diagram with the `show_greeting` name. We are going to describe the case when the user input text is processed by another function and the title panel displays the result.

> **Hint**: try to create diagrams the same way you are writing use cases. Even though you have to implement almost equal data flows with slightly different scenarios, and with the same elements, Webcodesk reconciles all flows in one big flow where equal parts are merged. Many separate flows that describe different use cases give you the ability to easily modify different parts of overall application logic.

Find the `form` instance component in the `main` page and drag it into the empty rectangle that is under the `Application` element. Now we set the entry point of the diagram as the `form` instance.

<img src="./img/pic17.png?raw=true" />

Connect the elements on the diagram one by one as it is shown in the picture below.

<img src="./img/pic18.png?raw=true" />

Open `Live Preview` and type some name into the input field, then click on the `Click` button. You will see that the form changes the title.

Finally, it seems that we built the simplest app with a form on the main page, where the user can input name and the application will greet him.

<img src="./img/pic19.png?raw=true" />

### Routing

Our application has the only one page at this moment. Let's add another page to understand how we can implement the navigation between pages.

But before please note, you can give any name to the page, but there are two special names: `main` and `noMatch`.

`main` page, as you already know, considered as the home or the index page of the application.

If you add `noMatch` page to the application, then the user will be redirected to this page in case he enters the wrong route address. Otherwise, the user will be redirected to the `main` page if he enters the wrong route.

Create the `noMatch` page to see how it works. Then drag and drop the `NoMatchTitlePanel` component on the page.

> **Hint**: you can use the `Structure` button in the page editor's toolbar to review the page structure. Try to drag & drop components there too - this is quite handy for placing a hidden component on the page.

<img src="./img/pic20.png?raw=true" />

And now we should create a new diagram. We are going to describe what should happen when the user is forwarded on the `noMatch` page and he wants to go to another page by click on the `Back Home` button.

Create a new diagram with the `back_home` name. Change the `Application` element to the `noMatchTitlePanel` instance on the `noMatch` page (drag and drop the item into the rectangle under the `Application` element). 

And now drag and drop the `main` page item to the empty rectangle connected with the `noMathcTitlePanel` element.

In the result, you should have the diagram as it is shown in the picture below.

<img src="./img/pic21.png?raw=true" />

Go to the `Live Preview` tab, then click on the `Pages` button on the top toolbar. You will see all the pages in the app you have created.

Find the address input field on the toolbar and type some wrong address there (except "/main"). You will be redirected to the `noMatch` page immediately. Then click on the `Back Home` button to go back to the main page.

<img src="./img/pic22.png?raw=true" />

Also, try the application in the external browser - click on the `Open in the browser` icon in the `Live Preview` toolbar.

<img src="./img/pic23.png?raw=true" />

### Source code

Once you are sure that the application is working, it is time to review the source code of the components and functions.

Find the application's source code in the directory you specified at the beginning of the tutorial.

When you open the directory, you will see the file structure equal to the structure created by Create React App.

```
public/
src/
package.json
...
```

But when you open the `src` directory, you will see the structure that fits Webcodesk project requirements.

```
app/
etc/
usr/
index.css
index.js
serviceWorker.js
```

Where:
* `app` - a service directory, Webcodesk generates here the application files: index files, config files for React App Framework, router files, etc.
* `etc` - a service directory, Webcodesk keeps pages and diagrams files in this directory
* `usr` - a directory, where the source code of the components and functions are

The content of the `app` directory is not interesting for us. It is generated by Webcodesk according to the config files in the `etc` directory.

The `etc` directory contains source files for pages and flows. All that we have done in this tutorial is here now. That's why it is strongly recommended to include this directory into the control version system.

And finally, all the source code created by the developers is in the `usr` directory.

### The FormContainer component (layout)

As far as we started the tutorial from placing the `FormContainer` component onto the page, let's review the source code of this component.

Open `src/usr/greeting/FormContainer.js` file in the preferred code editor.

```javascript

import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from "./Commons";

const rootStyle = {
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  overflow: 'auto',
};

const cellStyle = {
  padding: '5px 0'
};

/*
  Component holds a single form and a title
 */
const FormContainer = ({form, title}) => {
    return (
      <div style={rootStyle}>
        <div style={cellStyle}>
          {title}
        </div>
        <div style={cellStyle}>
          {form}
        </div>
      </div>
    );
};

FormContainer.propTypes = {
  // form element position
  form: PropTypes.element,
  // title element position
  title: PropTypes.element,
};

FormContainer.defaultProps = {
  form: <Placeholder name="form" />,
  title: <Placeholder name="title" />,
};

export default FormContainer;

```

As you can see, the `FormContainer` component is the functional component with the name equals to the source code file name, and there is a default export in the file.

This is the first rule of the component declaration. Declare the component that way if you want to include this component into the list of available components on the left panel.

It is quite interesting, why this component has the placeholders for other components in the page editor.

The reason for this is that the `form` and `title` properties declared as the `PropTypes.element` properties.

```javascript
FormContainer.propTypes = {
  // form element position
  form: PropTypes.element,
  // title element position
  title: PropTypes.element,
};
```

Webcodesk recognizes the `PropTypes.element` property type as the instruction to show the placeholder for this property on the page editor before you put some component there.

That is the easy way you can create any layouts on the page.

<img src="./img/pic24.png?raw=true" />

### The TitlePanel component

The next we will review the code of the `TitlePanel` component in the `src/usr/greeting/TitlePanel.js` file.

```javascript
import React from 'react';
import PropTypes from 'prop-types';
/*
  Panel with title
 */
class TitlePanel extends React.Component {
  static propTypes = {
    // simple title text
    title: PropTypes.string,
  };

  render () {
    const { title } = this.props;
    return (
      <h1 style={{ textAlign: 'center' }}>
        {title || 'Empty Title'}
      </h1>
    );
  }
}

export default TitlePanel;
```

The second valid component declaration for Webcodesk is the class component declaration. It should be a class inherited from the `React.Component` with the name equal to the file name, and with the default export declaration in the file.

You can see that there is also the declaration of the property in the class. The type of the `title` property is `PropTypes.string` which indicates that this component will have the input point in the element on the diagram.

### The Form component

As we saw previously, the instance of the form component has an output point in own element on the diagram. That is possible only when you add the property with `PropType.func` type to your component.

Open the `src/usr/greeting/Form.js` file and take a look at the `onClick` property.

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const rootStyle = {
  width: '150px',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const inputStyle = {
  padding: '5px',
  borderRadius: '4px',
  border: '1px solid #cccccc',
};

const buttonStyle = {
  padding: '5px',
  borderRadius: '4px',
};

/*
  Input form for the user name
 */
class Form extends React.Component {
  static propTypes = {
    // send the entered name
    onClick: PropTypes.func,
  };
  
  static defaultProps = {
    onClick: () => {
      // is not set
    },
  };

  handleClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onClick(this.inputElement.value);
  };

  render () {
    return (
      <form onSubmit={this.handleClick}>
        <div style={rootStyle}>
          <div style={{ margin: '1em 0 1em 0' }}>
            <input
              ref={me => this.inputElement = me}
              type="text"
              placeholder="Enter your name"
              style={inputStyle}
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={this.handleClick}
              style={buttonStyle}
            >
              Click
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
```

Also, you can see that the `onClick` function invoked with the input text value as the argument.

> **Hint**: you can send data in the flow only as the first argument of an event holder function. That's why if you need to pass more values, you should try to encapsulate them into the object: `this.props.onClick({data1, data2});`

### Components summary

There are two ways to declare components in the code by which Webcodesk will recognize them as the React components and will include them into the available components list.

* A functional component with the name equal to the file name, and with the default export in the file (thus, one file - one component)
* A class declaration with the name equal to the file name, and with the default export (one file - one component)

Add properties with `PropTypes.element` type to the component declaration if you want to combine components in the page editor.

Declare "output" properties (events) with `PropTypes.func` type.

Finally, add properties with any other types to make a component with inputs on the diagram.

### Functions

It's time to see what the functions are. Open the `src/usr/greeting/api.js` file in the code editor.

```javascript
/*
 Produce the initial title value

 No parameters.

 Dispatching:

 * **title** - an initial title text

 */
export const initialTitle = () => (dispatch) => {
  dispatch('title', 'Welcome! What is your name?');
};

/*
 Provide a greeting to the user

 Parameters:
 * **who** - value is used in the `greeting` string

 Dispatching:
 * **greeting** - greeting text with `who` input argument
 */
export const greetings = (who) => (dispatch) => {
  dispatch('greeting', who ? `Hello, ${who} !!!` : 'Hello, Noname !!!');
};
```

It is enough to declare the exported arrow function with curring in any source file you want, and Webcodesk recognizes the function which can be used in the diagram. Take a look at the example code above.

The first function in the chain may have a parameter or be without any parameter at all. As you remember, you can pass only one argument between outgoing method and input property or function's input.

The second function in the chain always has to have a `dispatch` parameter.  This is a callback function which you can place anywhere in the body. The callback passes the data of the second argument to the connected input described in the diagram.

The `dispatch` callback should have two arguments. The first argument is a name - the label of the output point that will be displayed on the element in the diagram. The second is the data you want to pass.

<img src="./img/pic25.png?raw=true" />

Here on the picture, you see that the `greetings` function receives the output data from the `form` instance by the `onClick` event. Then the `dispatch`  callback with the `greeting` name is invoked with output to the `title` property of the `titlePanel` instance.

> **Hint**: the data is transferred using Redux. So, the component property will receive the data only if the reference was changed: `dispatch('someEvent', {...oldData});`

### Forward with parameters

The second argument of the `dispatch` callback can be omitted if you want to invoke the next element input without any data. 

Like a forward to some page without any parameters passed in the request.

However, if you want to pass data to the component instance on some page through the parameters in the address string (HTTP request with parameters), you need to connect the output from some element with data to the `forward` input in page element, and then connect the `queryParams`  output in page to the instance's input property.

> **Hint**: the string will be transferred as the dynamic parameter in the address: `/page/:parameter`.

> **Hint**: the object will be transferred as the query string: `/page?field1=value&field2=value`

### Developing new components

From now you are ready to add your own components and functions to the project and then draw data flow diagrams in Webcodesk.

As you already understood, you don't have to do any extra work to make Webcodesk to recognize them as applications particles. Write the code in your favorite IDE or code editor - Webcodesk automatically parses the source code files and searches for the correct declarations to add them into the workspace.

There is the quite handy feature in Webcodesk - a developing React component in isolation, just like in React Storybook.

This feature allows you to develop a component and see how it works without placing the component onto the page. 

Double click on the components name in the `Components` section on the left panel and you will see the new tab with the component's name - this is a component view.

<img src="./img/pic26.png?raw=true" />


There are two inner tabs in the component view. The `About` tab contains a description of the component and its declared properties. This description is gathered by Webcodesk from comments in the source code.

> Hint: you can use the Markdown syntax in the comments to components and functions to make them nice for reading. Take a look at the generated files as examples.

When you open the component view, you see the component with default properties.

But if you need to see how component acts with different settings in properties, you can add the file with custom render functions for the component.

These stories will appear in the `Stories` tab of the component view. Open the `Form` component view, and then open the `Stories` tab to see how the stories work.

<img src="./img/pic27.png?raw=true" />

Create a new file in the same directory where the component's source file is, and give the name equal to the component's name plus add `.stories.js` extension. Add default export of the array with story objects. 

Story object should have two fields: `story` - a story description, and the `renderStrory` - arrow function for the component rendering.

Use the `src/usr/greeting/Form.stories.js` file as an example for writing your stories.

```javascript
import React from 'react';
import Form from './Form';

export default [
  {
    story: 'With alert assigned to the on click event',
    renderStory: () => {

      const handleClick = (name) => {
        alert(`You typed name: ${name}`);
      };

      return <Form onClick={handleClick} />
    },
  }
]
```

### Debugging the data flow

One of the great features in Webcodesk is the ability to record and then review the data transferred through the application particles (components, functions, and pages).

This is extremely useful for the debugging of the application logic.

Open the `Live Preview` tab, go to the main page, find and click the `Record` button on the top toolbar. The button will change the label to `Stop` - this means the session recording started.

<img src="./img/pic28.png?raw=true" />

Type some value into the input field on the `main` page and click the `Click` button.

Then you should stop the recording by clicking on the `Stop` button. You will see the consolidated data flow diagram of the entire application.

<img src="./img/pic29.png?raw=true" />

This diagram shows all elements of the application and how they are connected. 

The dashed elements do not participate in the recorded session. The colored elements were receiving and transferring data during the session.

<img src="./img/pic30.png?raw=true" />

You can review what data was in the particular node of the diagram at a certain time. Click on the element or the connection point on the diagram to see the log records which belong to this node.

### React App Framework

Webcodesk is utilizing a React App Framework library to make possible the connections between components, functions, and pages without the code generating.

The React App Framework is designed directly for Webcodesk. It is the Open Source library and uses Redux, Reselect, React Router libs inside. 

You can review the code of the framework on GitHub here: [https://github.com/webcodesk/react-app-framework](https://github.com/webcodesk/react-app-framework).

Webcodesk installs the framework as an npm-module in the application. When the applications start, the framework reads files in the `src/app` directory to create sequences of Redux actions and reducers. Then it creates routes for React Router 4 for the page forwarding.

Despite that fact that the framework works just like a code written by the developer for Redux, it does not allow to use modern approaches as the lazy loading and code splitting.

As far as Webcodesk uses the React App Framework, and has more than 60 flows inside, you undoubtedly can use the framework in your application in production.

However, if you want to have the optimized source code with lazy loading and code splitting, Webcodesk can generate the application source code without using the framework routines.

Webcodesk will generate all needed Redux actions, selectors, routes, etc. and will prepare pages' code for lazy loading and code splitting.

Now we will try to export the optimized code into another directory. Create an empty directory somewhere on the disk. Open the `Live Preview` tab and click on the `Export` button on the top toolbar. Then select the directory you created in the dialog.

<img src="./img/pic31.png?raw=true" />


Submit the dialog. You should see the message that the code was exported successfully. Open the directory with exported code.

You may notice there is no `src/etc` directory inside. Also, the `app` directory contains a code generated with Redux store, actions, reducers, and pages instead of the React App Framework files.

Run `yarn install && yarn build` command to get a production-ready distribute of your application.

If you make any changes in the project in Webcodesk after the exporting, you always can run the export process to the same export directory again. And you don't have to reinstall all npm modules after the export unless you don't add new dependencies in the project.

### Proxying the requests

The Create React App documentation says that you can add a proxy for the requesting to the server API by adding a single line into the `package.json` file.

But, due to that Webcodesk embeds additional routes (only during the development phase), it is recommended to install the `http-proxy-middleware` module and set up the proxy with a prefix.

Follow the instructions from [Configuring the Proxy Manually](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually) chapter:

* Run `yarn add http-proxy-middleware`
* Create `setupProxy.js` in the `src` directory
* Add settings for your proxy path:

```javascript
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:5000/' }));
};
```

### Troubleshooting

#### Empty page

You may see the empty page after you create a page for the first time. Just click on the `Reload` icon on the top toolbar of the page editor

#### Webpack Dev Server error

If you see the `ENOENT` error in the `Server Status` log, please check if NodeJS binaries are available in the `PATH` variable in your environment.

