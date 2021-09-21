export default {
    increment(state) {
        state.counter = state.counter + 1
    },
    increase(state, payLoad) {
        state.counter = state.counter + payLoad.value;
    },

}