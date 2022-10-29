
# The Den Project

The den project was crafted for YRDO's YR504 web-app to display toast notification like Instagram. It was introduced to Heartbeat within weeks of successful development. Because it is based web-applications it may not work exactly like the Instagram's toast but inspired and similar to it. Enjoy using it in your project.


## Authors

- [@rickydonald](https://www.github.com/rickydonald)


## Installation

* Note that this module only works with JQuery.

* Start by cloning the repository to your project and link the following CSS and JS files.

Link the JS script in the bottom of the body tag.
```
<script src="/dist/file/den.min.js"></script>
```
Link the CSS file in head tag.
```
<link rel="stylesheet" href="/dist/file/den.min.css">
```
## Usage

Now call the function "den", it supports two parameters. One the text itself and second is how much time does it have to stay on the screen. The parameter is set default to 3000ms (3s) and its optional. You can set your own time.
```javascript
// Passed with default time
den('Text goes here')

// Passed with own time
den('Text goes here', 3000)
```


## Feedback

If you have any feedback, please reach out to us at mail@rickydonald.com
 or ping me on Twitter @rickydonald28