export default class Actor {
    async attemptsTo(...tasks) {
        for (const task of tasks) {
            await task.perform()
        }
    }
}