const cancellable = function (fn, args, t) {
  let cancelled = false;
  let timeoutId = null;

  function cancelFn() {
    cancelled = true;
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    if (!cancelled) {
      const result = fn(...args);
      console.log([{ time: t, returned: result }]);
    }
  }, t);
};

const cancelTimeMs = 50;
const cancelFn1 = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn1, cancelTimeMs);
