import {useDecorators} from "@tsed/core";
import {Allow} from "./allow";
import {Optional} from "./optional";

export interface ErrorChainedMethods<T> {
  <T>(target: Object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<T>): any;

  Error(msg: string): this;
}

export type ErrorChainedDecorator<Decorator extends (...args: any[]) => any> = (
  ...args: Parameters<Decorator>
) => ErrorChainedMethods<Decorator>;

function withErrorMessage<Decorator extends (...args: any[]) => any>(
  errorKey: string,
  originalDecorator: Decorator
): ErrorChainedDecorator<Decorator> {
  const schema: any = {};

  return ((...decoratorOptions: any[]) => {
    const decorator = useDecorators(originalDecorator(...decoratorOptions), () => {
      ///
    });

    (decorator as any).Error = (message: string) => {
      schema.message = message;
      return decorator;
    };

    return decorator;
  }) as any;
}

/**
 * Add required annotation on Property or Parameter.
 *
 * The @@Required@@ decorator can be used on two cases.
 *
 * To decorate a parameters:
 *
 * ```typescript
 * @Post("/")
 * async method(@Required() @BodyParams("field") field: string) {}
 * ```
 *
 * To decorate a model:
 *
 * ```typescript
 * class Model {
 *   @Required()
 *   field: string;
 * }
 * ```
 *
 * ::: tip
 * Required will throw a BadRequest when the given value is `null`, an empty string or `undefined`.
 * :::
 *
 * ### Allow values
 *
 * In some case, you didn't want trigger a BadRequest when the value is an empty string for example.
 * The decorator `@Allow()`, allow you to configure a value list for which there will be no exception.
 *
 * ```typescript
 * class Model {
 *   @Allow("") // add automatically required flag
 *   field: string;
 * }
 * ```
 *
 * @decorator
 * @validation
 * @swagger
 * @schema
 * @input
 */
export const Required = withErrorMessage("required", (required: boolean = true, ...allowedRequiredValues: any[]) => {
  return required ? Allow(...allowedRequiredValues) : Optional();
});
