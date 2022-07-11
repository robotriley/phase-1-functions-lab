let hq = 42
const distanceFromHqInBlocks = (pickupLocation) => {
    if (pickupLocation >= hq) {
        return (pickupLocation - hq)
    } else {
        return (hq - pickupLocation)
    }
}
const distanceFromHqInFeet = (pickupLocation) => {
    return (distanceFromHqInBlocks(pickupLocation) * 264)
}

const distanceTravelledInFeet = (start, destination) => {
    if (destination >= start) {
    return ((destination - start) * 264)
} else {
        return ((start - destination) * 264)
}}

const calculatesFarePrice = (start, destination) => {
    let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0
    } else if (feet <= 2000) {
    return ((feet - 400) * .02)
    } else if (feet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}