import { action, computed, observable } from 'mobx';

/**
 * This class provides all the basic properties and methods for all other classes derived from this class.
 */
export class BaseStore<T extends {}> {

    /**
     * Store state
     */
    @observable private _data: T;

    /**
     * Default values for data store of type <T>
     */
    private defaults: T;

    /**
     * Constructor for the `BaseStore` class. Accepts optional defaults.
     * @param defaults optional, provides defaults value for store data
     */
    constructor(defaults?: T) {
        this.defaults = this._data = defaults || {} as T;
    }

    /**
     * Store data wrapper
     * MobX runs in strict mode therefore this.data can only be mutated via @action functions
     */
    @computed get data() {
        return this._data;
    }

    /**
     * Assigns the provided value to this.data
     *
     * @param {T} data Data to set
     */
    @action public setData(data?: Partial<T>) {
        if (data) {
            this._data = this.mergeWithPreviousOrDefaults(data);
        }
    }

    /**
     * Provides a function to parse data (supposedly matching <T>) for it to be sanitized/validated:
     * - can return an object definitely matching <T> by merging with defaults (if any)
     * - defaults to transparent pass-through (should be extended to actually support a validation funcion)
     *
     * @param {any} data
     * @return {T}
     */
    private mergeWithPreviousOrDefaults(data: any): T {

        // merge with previous value, if any
        if (this.data && this.data !== this.defaults) {
            return {
                ...this.data as {},
                ...data
            } as T;
        }
        // merge with defaults, if any
        if (this.defaults !== {}) {
            return {
                ...this.defaults as {},
                ...data
            } as T;
        }
        // nothing to merge with: assign
        return data as T;
    }
}