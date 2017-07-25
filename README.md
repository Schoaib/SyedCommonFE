This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Folder Structure

```
SyedCommonFE/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.png
  src/
    App/
      images/
      styles.css
      App.js
      App.test.js
    Components/
      Catalog/
        styles.css
        index.js
      CatalogFilter/
        styles.css
        index.js
      CatalogProducts/
        styles.css
        index.js
      CatalogProdcut/
        styles.css
        index.js
      API/
        index.js
    styles.css
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Catalog Component

The project creates a react based catalog component to render the products catalog.

In the project directory, you can run:

### `npm run prepublish`

This step will create a lib folder with all the required files, than can be used as local npm or can published on npm.


Required props for catalog componets are :<br>
Path to the backend APi ==> backendApi: PropTypes.string.isRequired<br>
Path to the product images ==> productImagePath: PropTypes.string.isRequired

These files needed to be added in your index.html to support google fonts and Font Awesome <br>
```javascript
 <link href="https://fonts.googleapis.com/css?family=Ropa+Sans" rel="stylesheet"><br>
 <script src="https://use.fontawesome.com/e842c6d029.js"></script>
 ```
