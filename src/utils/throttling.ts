
export function throttle(func: () => void, ms: number) {
    let isThrottled = false;
    let savedArgs:IArguments;
    let savedThis: any;

    function wrapper() {
        if (isThrottled) {
            // (2)
            savedArgs = arguments;
            /* eslint-disable */
            //@ts-ignore
            savedThis = this;
            return;
        }
        /* eslint-disable */
        //@ts-ignore
        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                /* eslint-disable */
                //@ts-ignore
                wrapper.apply(savedThis, savedArgs);
                /* eslint-disable */
                //@ts-ignore
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
