declare function yn (value: string | number | boolean, options?: yn.Options): boolean | null;

declare namespace yn {
  export interface Options {
    /**
     * Lenient mode will use a key distance-based score
     * to leniently accept typos of "yes" and "no".
     */
    lenient?: boolean;
  }
}

export = yn;
