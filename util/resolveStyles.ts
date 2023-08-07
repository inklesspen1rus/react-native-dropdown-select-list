import { GenericResolver } from "..";

export function resolveStyles<T extends unknown[], R, Resolver extends GenericResolver<T, R>>(resolver: Resolver, ...args: T): R {
    if (typeof resolver == 'function') {
        return resolver(...args);
    }
    return resolver as R;
}