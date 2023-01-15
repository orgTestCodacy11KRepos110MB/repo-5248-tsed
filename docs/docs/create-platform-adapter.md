# Introduction

Platform API create a routing abstraction. That means, all metadata data collected by
Ts.ED decorators will be stored somewhere and can be consumed to map the information
to the server framework of your choice.

Ts.ED provide use two packages to collect/consume metadata:

- `@tsed/schema` that you know well, because you use it to declare models
- `@tsed/platform-router` is used by the `@tsed/common` package and the platforms (express/koa) to consume the famous routing model abstraction.

For example, the following controller will create a @@PlatformLayer@@ with all required data to create a real router:

```ts
import {Controller} from "@tsed/common";

@Controller("/controller")
class MyController {
  @Get("/")
  get() {}
}
```

To get the layer we can do that:

```ts
import {Controller, InjectorService} from "@tsed/di";
import {PlatformHandlerType, PlatformHandlerMetadata, PlatformRouter, PlatformLayer} from "@tsed/platform-router";

const injector = new InjectorService();

injector.addProvider(MyController);
injector.addProvider(NestedController);

const appRouter = new PlatformRouter(injector);

// return the layer that decribe the controller and his handlers
appRouter.getLayers(); // [PlatformLayer]
```

Here we just described how we can the layers, but we need to example how we can consume and map the data to a real router.
We'll do that step-by-step by implementing the Express.js platform as example.
