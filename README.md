# logging-colorify package

How to use:-

You can install this package via npm or yarn.
```sh
npm install logging-colorify
# or
yarn add logging-colorify
```
# Creating custom Logging options
```javascript
import {LogOptions} from "logging-colorify";

const customTimeOptions: LogOptions = {
    logPrefix: 'date-03to07', //as per the use
    logExtension: 'log',
    logGrouping: 'custom', 
};

// Use the customTimeOptions in logging function like;

logError("Error message",customTimeOptions);

```

# Getting Started
Import the logging functions into your code and start adding colorful logs to your applications.

```javascript
import { logError, logInfo, logWarn, dailyError, dailyInfo, dailyWarn} from "logging-colorify"

 //-Now, you can use the logging functions in your code-

logError('This is an error message.',dailyError);

logInfo('This is an info message.',dailyInfo);

logWarn('This is a warning message.',dailyWarn);
```

# API Logging
You can also use the createApiLogger function to log API details in various Node.js frameworks. Here's how to use it in different frameworks:


1. IN Express.js
```javascript
import {createApiLogger, dailyApiDetail} from "logging-colorify"

app.get('/your-route', (req, res) => {
  const startTime = performance.now();
  // Call createApiLogger with the Express request object
  createApiLogger(req, startTime,dailyApiDetail);
  // Other Express.js-specific code here
});

-- startTime is optional if you want to get the time diiference between API call and function call. 
```
2. IN Koa.js
```javascript
import {createApiLogger, dailyApiDetail} from "logging-colorify"

app.use(async (ctx) => {
    const startTime = performance.now();
    // Call createApiLogger with Koa.js ctx object
    await createApiLogger(ctx.request, startTime,dailyApiDetail);
    // Other Koa.js-specific code here
});
```

3. IN Hapi.js
```javascript
import {createApiLogger, dailyApiDetail} from "logging-colorify"

server.route({
    method: 'GET',
    path: '/your-route',
    handler: (request, h) => {
      // Call createApiLogger with the Hapi.js request object
      createApiLogger(request,dailyApiDetail);
      // Other Hapi.js-specific code here
      return 'Hello, World!';
    },
  });
```
4. IN Nest.js
```javascript
import {createApiLogger, dailyApiDetail} from "logging-colorify"

@Post('your-route')
async yourControllerMethod(@Req() request: Request) {
    // call createApiLogger with Nest.js request object
    await createApiLogger(request,dailyApiDetail);
    // other Nest.js-specific code here
}
```

# Customization
You can customize the log messages and colors by modifying the underlying functions in the logging-colorify package.

# License
This package is open-source and available under the ISC License.

# Run Test
All of the logging-colorify tests are written with mocha. They can be run with npm
```sh
npm test

```

# Issues and Contributions
If you encounter any issues or would like to contribute to this package, please visit the GitHub repository. We welcome your feedback and contributions!

# Credits
This package is maintained by Hritik Chauhan.

Thank you for using the Logging-Colorify package! We hope it brings a touch of color and simplicity to your Node.js applications. If you have any questions or feedback, please don't hesitate to reach out. Happy logging!
