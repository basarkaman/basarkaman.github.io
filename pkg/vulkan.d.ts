/* tslint:disable */
/* eslint-disable */

export function run_web(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run_web: () => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2c77e7455f2f917d: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h7dd58c0aa5f000b4: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h1fd5fb7762c307d0: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h29abca3b1d4b598a: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h2e482980452e4fba: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h31c4069dda26d2f1: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hf10eaaffdb9dd080: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h4deedf9b2dc42283: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hab45a0d529ead3ce: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h1b3d8b327273314e: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hf768bea0a9378975: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h75d632c7d1759773: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h4da23e215db23bfe: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__hbcc8fb129495777b: (a: number, b: number) => number;
    readonly wasm_bindgen__convert__closures_____invoke__h427a5dbc5cf7ec32: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
