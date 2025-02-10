# TS Brand Utils
This library contains utilities to create and manipulate branded types in Typescript. Branded types are types that are identical to another type, but are considered distinct by the Typescript compiler. This can be useful for creating types that are more specific than their base types, such as a `PositiveNumber` type that is a number, but only allows positive values.

## Types
The following types are available in the library:

### BrandTag<B extends unknown[]>
This type returns a record with a single key of type `__brand` and a value of type `B`. It represents a brand that can be used to differentiate between types.

Branded types are useful for making checks at runtime through assertion functions and recognizing these checks at compile time. For example:
```typescript
function isPositive(value: number): value is Branded<number, ["positive"]> {
    return value > 0;
}

function takesPositive(value: WithBrand<number, "positive">) {
    // Do something with the positive value
}

const value: number = 5;
if (isPositive(value)) {
    // Succeeds because value has been asserted to be positive
    takesPositive(value);
}

// Error: value may not be positive, as we cannot guarantee the assertion succeeded
takesPositive(value);
```

### Branded<T, B extends unknown[]>
This type returns a type that is the same as `T` except that it is branded with the type `B`.

### WithBrand<T, B>
Using the `Contains` type, this type returns `T` if it is branded with `B` and `never` otherwise.

### WithoutBrand<T extends BrandTag<unknown[]>>
This type returns the inner type without the brand applied to it.

## Functions
The following functions are available in the library:

### brand<B extends unknown[], T>
#### Description
Brands a type with a specific brand. At runtime, this does nothing, but it performs a type assertion at compile time.

#### Parameters
- `value` (`T`) - The value to brand.

#### Returns
`Branded<T, B>` - The value with the brand applied.

## Peer Dependencies
N/A

## Commands
The following commands exist in the project:

- `npm run uninstall` - Uninstalls all dependencies for the library
- `npm run reinstall` - Uninstalls and then Reinstalls all dependencies for the library
- `npm run example-uninstall` - Uninstalls all dependencies for the example app
- `npm run example-install` - Installs all dependencies for the example app
- `npm run example-reinstall` - Uninstalls and then Reinstalls all dependencies for the example app
- `npm run example-start` - Starts the example app after building the library
- `npm run build` - Builds the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump