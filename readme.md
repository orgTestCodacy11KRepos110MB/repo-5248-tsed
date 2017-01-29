# TsExpressDecorators

[![Build Status](https://travis-ci.org/Romakita/ts-express-decorators.svg?branch=master)](https://travis-ci.org/Romakita/ts-express-decorators)
[![Coverage Status](https://coveralls.io/repos/github/Romakita/ts-express-decorators/badge.svg?branch=master)](https://coveralls.io/github/Romakita/ts-express-decorators?branch=master)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=100)](https://github.com/ellerbrock/typescript-badges/) 
[![Package Quality](http://npm.packagequality.com/shield/ts-express-decorators.png)](http://packagequality.com/#?package=ts-express-decorators)
[![npm version](https://badge.fury.io/js/ts-express-decorators.svg)](https://badge.fury.io/js/ts-express-decorators)
[![Dependencies](https://david-dm.org/romakita/ts-express-decorators.svg)](https://david-dm.org/romakita/ts-express-decorators#info=dependencies)
[![img](https://david-dm.org/romakita/ts-express-decorators/dev-status.svg)](https://david-dm.org/romakita/ts-express-decorators/#info=devDependencies)
[![img](https://david-dm.org/romakita/ts-express-decorators/peer-status.svg)](https://david-dm.org/romakita/ts-express-decorators/#info=peerDependenciess)
[![Known Vulnerabilities](https://snyk.io/test/github/romakita/ts-express-decorators/badge.svg)](https://snyk.io/test/github/romakita/ts-express-decorators)

> Build your TypeScript v2 application with Express decorators ! Support ES5 and ES6.

[![NPM](https://nodei.co/npm/ts-express-decorators.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ts-express-decorators/)
[![NPM](https://nodei.co/npm-dl/ts-express-decorators.png?months=6&height=3)](https://nodei.co/npm/ts-express-decorators/)

## Features

* Define class as Controller,
* Define class as Service (IoC),
* Define class as Middleware and MiddlewareError,
* Define class as Converter (POJ to Model and Model to POJ),
* Define root path for an entire controller and versioning your Rest API,
* Define as sub-route path for a method,
* Define routes on GET, POST, PUT, DELETE and HEAD verbs,
* Define middlewares on routes,
* Define required parameters,
* Inject data from query string, path parameters, entire body, cookies, session or header,
* Inject Request, Response, Next object from Express request,
* Templating (View),
* Testing (alpha).

## Installation

You can get the latest release using npm:

```batch
$ npm install --save ts-express-decorators express@4 @types/express
```

> **Important!** TsExpressDecorators requires Node >= 4, Express >= 4, TypeScript >= 2.0 and 
the `experimentalDecorators`, `emitDecoratorMetadata`, `types` and `lib` compilation 
options in your `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es6", "dom"],
    "types": ["reflect-metadata"],
    "module": "commonjs",
    "moduleResolution": "node",
    "experimentalDecorators":true,
    "emitDecoratorMetadata": true,
    "sourceMap": true,
    "declaration": false
  },
  "exclude": [
    "node_modules"
  ]
}
```

## Migrate from 1.3 or under to 1.4

The `@types/express` modules dependency has move to devDependencies. So we can have a compilation error with TypeScript.
To resolve it, just run `npm install --save @types/express`.

If we used the InjectorService. Make you sure we have this in your code:

* `InjectorService.invoke(target)` has changed to `InjectorService.invoke<T>(target): T`.
* `InjectorService.get(target)` has changed to `InjectorService.get<T>(target): T`.

## Quick start
#### Create your express server

TsExpressDecorators provide a [`ServerLoader`](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader) class to configure your 
express quickly. Just create a `server.ts` in your root project, declare 
a new `Server` class that extends [`ServerLoader`](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader).

```typescript
import * as Express from "express";
import {ServerLoader, IServerLifecycle} from "ts-express-decorators";
import Path = require("path");

export class Server extends ServerLoader implements IServerLifecycle {
    /**
     * In your constructor set the global endpoint and configure the folder to scan the controllers.
     * You can start the http and https server.
     */
    constructor() {
        super();

        const appPath: string = Path.resolve(__dirname);
        
        this.mount("/rest", appPath + "/controllers/**/**.js")                       // Declare your endpoint
            .createHttpServer(8000)  // You can add your interface too:  .createHttpServer('127.0.0.1:8000')
            .createHttpsServer({
                port: 8080
            });

    }

    /**
     * This method let you configure the middleware required by your application to works.
     * @returns {Server}
     */
    $onMountingMiddlewares(): void|Promise<any> {
    
        const morgan = require('morgan'),
            cookieParser = require('cookie-parser'),
            bodyParser = require('body-parser'),
            compress = require('compression'),
            methodOverride = require('method-override');


        this
            .use(morgan('dev'))
            .use(ServerLoader.AcceptMime("application/json"))

            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));

        return null;
    }

    public $onReady(){
        console.log('Server started...');
    }
   
    public $onServerInitError(err){
        console.error(err);
    }

    static Initialize = (): Promise<any> => new Server().start();
    
}

Server.Initialize();
```

#### Create your first controller

Create a new `calendarCtrl.ts` in your controllers directory configured 
previously with `ServerLoader.mount()`. All controllers declared with `@Controller` 
decorators is considered as an Express router. An Express router require a path 
(here, the path is `/calendars`) to expose an url on your server. 
More precisely, it is a part of path, and entire exposed url depend on 
the Server configuration (see `ServerLoader.setEndpoint()`) and the controllers 
dependencies. In this case, we haven't a dependencies and the root endpoint is set to `/rest`. 
So the controller's url will be `http://host/rest/calendars`.

```typescript
import {Controller, Get} from "ts-express-decorators";
import * as Express from "express";

interface ICalendar{
    id: string;
    name: string;
}

@Controller("/calendars")
export class CalendarCtrl {

    /**
     * Example of classic call. Use `@Get` for routing a request to your method.
     * In this case, this route "/calendars/:id" are mounted on the "rest/" path.
     *
     * By default, the response is sent with status 200 and is serialized in JSON.
     *
     * @param request
     * @param response
     * @returns {{id: any, name: string}}
     */
    @Get("/:id")
    public get(request: Express.Request, response: Express.Response): ICalendar {

        return <ICalendar> {id: request.params.id, name: "test"};
    }

    @Get("")
    @ResponseView("calendars/index") // Render "calendars/index" file using Express.Response.render internal
    public get(request: Express.Request, response: Express.Response): Array<ICalendar> {

        return [<ICalendar> {id: '1', name: "test"}];
    }
    
    @Authenticated()
    @BodyParamsRequired("calendar.name")  // Throw Bad Request (400) if the request.body.calendar.name isn't provided 
    @Post("/")
    public post(
        @BodyParams("calendar") calendar: ICalendar
    ): Promise<ICalendar> {
    
        return new Promise((resolve: Function, reject: Function) => {
        
            calendar.id = 1;
            
            resolve(calendar);
            
        });
    }
    
    @Authenticated()
    @Delete("/")
    public post(
        @BodyParams("calendar.id") @Required() id: string 
    ): Promise<ICalendar> {
    
        return new Promise((resolve: Function, reject: Function) => {
        
            calendar.id = id;
            
            resolve(calendar);
            
        });
    }
}
```

To test your method, just run your `server.ts` and send a http request on `/rest/calendars/1`.

> **Note** : Decorators `@Get` support dynamic pathParams (see `/:id`) and `RegExp` like Express API. 

## [Wiki](https://github.com/Romakita/ts-express-decorators/wiki/home)

* [Installation](https://github.com/Romakita/ts-express-decorators/wiki/Installation)
* [Quick start](https://github.com/Romakita/ts-express-decorators/wiki/Quick-start)
* [Examples](https://github.com/Romakita/ts-express-decorators/wiki/Examples)
* [Controllers](https://github.com/Romakita/ts-express-decorators/wiki/Controllers)
* [Services](https://github.com/Romakita/ts-express-decorators/wiki/Services)
* [Converters](https://github.com/Romakita/ts-express-decorators/wiki/Converters)
* [ServerLoader](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader)
  * [API](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader----API)
  * [Versioning Rest API](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader-Versioning-Rest-API)
  * [Lifecycle hooks](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader---Lifecycle-Hooks)
  * [Middlewares settings](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader---Lifecycle-Hooks#serverloaderonmountingmiddlewares-void--promise)
  * [Serve static](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader---Lifecycle-Hooks#serverloaderafterroutesinit-void--promise)
  * [Authentification](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader---Lifecycle-Hooks#serverloaderonauthrequest-response-next-void)
  * [Global errors handlers](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader---Lifecycle-Hooks#serverloaderonerrorerror-request-response-next-void)
* [Templating](https://github.com/Romakita/ts-express-decorators/wiki/Templating)
* [Throw HTTP exceptions](https://github.com/Romakita/ts-express-decorators/wiki/Throw-HTTP-Exceptions)
* [Testing](https://github.com/Romakita/ts-express-decorators/wiki/Testing)
* [API references](https://github.com/Romakita/ts-express-decorators/wiki/API-references)

## Contributors

* [Romain Lenzotti](https://github.com/romakita)
* [AlexProca](https://github.com/alexproca)
* [Vincent178](https://github.com/vincent178)

## CHANGELOG

### v1.4.0-x (beta)

* Add `@Inject()` decorator [#42](https://github.com/Romakita/ts-express-decorators/issues/#42),
* Add `@Middleware()` decorator [#40](https://github.com/Romakita/ts-express-decorators/issues/#40),
* Add `@ContentType()` decorator [#34](https://github.com/Romakita/ts-express-decorators/issues/#34),
* Add `@Redirect()` decorator [#33](https://github.com/Romakita/ts-express-decorators/issues/#33),
* Add `@Location()` decorator [#32](https://github.com/Romakita/ts-express-decorators/issues/#32),
* Add `@UseBefore()` decorator [#19](https://github.com/Romakita/ts-express-decorators/issues/#19),
* Add `@UseAfter()` decorator [#19](https://github.com/Romakita/ts-express-decorators/issues/#19),
* Add  alias `@HeaderParams()` decorator [#30](https://github.com/Romakita/ts-express-decorators/issues/#30),
* Extends `@Header()` decorator. Now @Header can be used on method [#30](https://github.com/Romakita/ts-express-decorators/issues/#30),
* Refactoring InjectorService. You can add a no class based service (factory)  [#36](https://github.com/Romakita/ts-express-decorators/issues/#36),
* InjectorService can be use in `ServerLoader.$onMountingMiddleware()` [#39](https://github.com/Romakita/ts-express-decorators/issues/#39).

#### Breaking Change 

We can encounter typescript compilation issues:

* `InjectorService.invoke(target)` has changed to `InjectorService.invoke<T>(target): T`.
* `InjectorService.get(target)` has changed to `InjectorService.get<T>(target): T`.
* `@types/express` isn't installed as dependencies now. Just make `npm install --save @types/express`.


### v1.3.0

* Add `@Session()` decorator [#11](https://github.com/Romakita/ts-express-decorators/issues/#11),
* Add `@ResponseView()` decorator [#9](https://github.com/Romakita/ts-express-decorators/issues/#9), [#16](https://github.com/Romakita/ts-express-decorators/issues/#16), [#22](https://github.com/Romakita/ts-express-decorators/issues/#22), 
* Add model deserialization and add decorator `@JsonProperty` [#3](https://github.com/Romakita/ts-express-decorators/issues/#3),
* Add two proxy methods : `ServerLoader.set()` and `ServerLoader.engine()` [#18](https://github.com/Romakita/ts-express-decorators/issues/#18),
* Add `yarn` support [#21](https://github.com/Romakita/ts-express-decorators/issues/#21),
* Pass bind interface to http server [#27](https://github.com/Romakita/ts-express-decorators/issues/#27),
* Prevent sending data if header is already sent [#28](https://github.com/Romakita/ts-express-decorators/issues/#28),
* Add ServerLoader.mount(). This method can mount controller to one or more endpoints [#13](https://github.com/Romakita/ts-express-decorators/issues/#13).

### v1.2.0

* Remove Bluebird and use native Promise. Breaking change are possible if you use v1.1.0 of ts-express-decorators. Just, replace Bluebird reference in your `Server.ts` or install Bluebird and @types/bluebird depedencies.
* Improve `package.json` configuration. Now, IDE like webstorm can auto discovered the exposed decorators.
* Implement [Lifecycle hooks](https://github.com/Romakita/ts-express-decorators/wiki/Class:-ServerLoader#lifecycle-hooks).
* Change testing module. See documentation (https://github.com/Romakita/ts-express-decorators/wiki/Testing).

## License

The MIT License (MIT)

Copyright (c) 2016 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis]: https://travis-ci.org/

