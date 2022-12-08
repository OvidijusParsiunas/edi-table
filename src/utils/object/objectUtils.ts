import {LITElementTypeConverters} from '../LITElementTypeConverters';
import {GenericObject} from '../../types/genericObject';

export class ObjectUtils {
  public static createTwoWayObject(object: GenericObject): GenericObject {
    Object.keys(object).forEach((key) => {
      object[object[key]] = key;
    });
    return object;
  }

  public static convertStringToFunction<T, K extends keyof T, R extends T[K]>(object: T, objectKey: K) {
    if (typeof object[objectKey] === 'string') {
      object[objectKey] = LITElementTypeConverters.convertToFunction(object[objectKey] as string) as R;
    }
  }
}
