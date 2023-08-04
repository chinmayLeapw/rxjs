export interface ArgumentOutOfRangeError extends Error {
}
export interface ArgumentOutOfRangeErrorCtor {
    /**
     * @deprecated Internal implementation detail. Do not construct error instances.
     * Cannot be tagged as internal: https://github.com/ReactiveX/rxjs/issues/6269
     */
    new (): ArgumentOutOfRangeError;
}
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 */
export declare const ArgumentOutOfRangeError: ArgumentOutOfRangeErrorCtor;
//# sourceMappingURL=ArgumentOutOfRangeError.d.ts.map