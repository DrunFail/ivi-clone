import { HasTypeArguments } from "typescript";

export function throttle(func: () => void, ms: number) {
    let isThrottled = false;
    let savedArgs:IArguments;
    let savedThis: any;

    function wrapper() {
        if (isThrottled) {
            // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
