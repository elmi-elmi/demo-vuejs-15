export default {
    finalCounter(state) {
        return state.counter;
    },
    normalizedCounter(_, getters) {
        const finalValue = getters.finalCounter;
        if (finalValue < 0) {
            return 0;
        } else if (finalValue > 100) {
            return 100;
        } else {
            return finalValue
        }
    }
}