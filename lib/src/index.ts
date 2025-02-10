type Contains<L extends unknown[], T> =
    // Any number of other elements folowed by T
    L extends [...unknown[], T] ?
        true
    // T followed by any number of other elements
    : L extends [T, ...unknown[]] ?
        true
    // T is the only element
    : L extends [T] ?
        true
    // T is not in the list 
    : false
;

export declare const __brand: unique symbol;
export type BrandTag<B extends unknown[]> = { readonly [__brand]: B };
export type Branded<T, B extends unknown[]> = T & BrandTag<B>;
export type WithBrand<T, B> = 
    T extends BrandTag<unknown[]> ? (
        Contains<T[typeof __brand], B> extends true ? T : never
    ) : never
;
export type WithoutBrand<
    T extends BrandTag<unknown[]>
> = Omit<T, typeof __brand>;

export function brand<B extends unknown[], T>(value: T): Branded<T, B> {
    return value as Branded<T, B>;
}