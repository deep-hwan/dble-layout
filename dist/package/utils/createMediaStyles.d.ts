type MediaQueryStyles<T> = {
    [key: string]: T;
};
export declare function createMediaStyles<T>(_mq: MediaQueryStyles<T>, ExtendedStyles: (styles: T) => any): import("@emotion/react").SerializedStyles[];
export {};
