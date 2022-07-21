
const getRecurringItems = (a) => {
    const itemsWithOccurence = {}

    for (let val of a) {
        if (itemsWithOccurence[val]) {
            itemsWithOccurence[val] = itemsWithOccurence[val] + 1
        } else {
            itemsWithOccurence[val] = 1;
        }
    }

    const itemsThatOccurMoreThanOnce = []

    for (let key in itemsWithOccurence) {
        if (itemsWithOccurence[key] > 1) {
            itemsThatOccurMoreThanOnce.push(key)
        }
    }

    return itemsThatOccurMoreThanOnce;
}

