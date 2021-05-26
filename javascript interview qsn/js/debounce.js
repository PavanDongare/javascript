// single source

const debounce = (fn, time) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        fn();
    }, time);
}
