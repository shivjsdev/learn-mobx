/**
 * Main Store Object
 * - This is passed as a reference for a single ton object
 * - We can use this object to refer app's state
 */
export { default as store } from "./store";

/**
 * StoreContext
 * - Uses React's Context API
 * - Provide easy access to store to all components
 */
export { default as StoreContext } from "./utils/store-context";

/** Hook
 * - Uses React's Hook API
 * - Provide access to store via hooks
 * - Best for functional consumer components
 */
export { default as useStore } from "./utils/use-store";

/** Higher Order Component
 * - Uses HOC
 * - Provide access to store via HOC
 * - Best for class consumer components
 */
export { default as withStore } from "./utils/with-store";
