function cancellable(fn, arg, t):
    // Initialize the cancellation flag and timeout ID
    cancelled = false;
    timeoutId = null;

    // Define the cancellable function that cancels the delayed execution of fn
    function cancelFn():
        cancelled = true;
        clearTimeout(timeoutId);

    // Set a timeout to execute fn after t milliseconds
    timeoutId = setTimeout(function:
        if cancelled is false:
            // Execute the function with the provided argument
            result = fn(...args)
            log([{"time": t, "returned": result}])
    , t)

    return cancelFn;