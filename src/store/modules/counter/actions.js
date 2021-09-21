export default {
    increment(context) {
        setTimeout(function () {
            context.commit({ type: 'increment' })
        }, 2000)
    },
    increase(context, payLoad) {
        context.commit('increase', payLoad);
    },
}