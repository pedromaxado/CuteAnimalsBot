
function run() {
    var index = Math.floor(Math.random() * 10);
    return getFerret(index);
}

function getFerret(index){
    var stockImageArr = [
        "https://media.gettyimages.com/photos/studio-shot-of-ferret-picture-idsb10069080f-001?s=2048x2048",
        "https://media.gettyimages.com/photos/tame-ferret-picture-id157431696?s=2048x2048",
        "https://media.gettyimages.com/photos/ferret-picture-id120103754?s=2048x2048",
        "https://media.gettyimages.com/photos/five-ferrets-picture-id170615533?s=2048x2048",
        "https://media.gettyimages.com/photos/closeup-of-ferret-picture-id740622559?s=2048x2048",
        "https://media.gettyimages.com/photos/ferret-resting-on-hardwood-floor-picture-id653029143?s=2048x2048",
        "https://media.gettyimages.com/photos/closeup-of-ferret-with-ball-picture-id760314823?s=2048x2048",
        "https://media.gettyimages.com/photos/ferret-licking-his-nose-picture-id120701987?s=2048x2048",
        "https://media.gettyimages.com/photos/woman-holding-yawning-ferret-picture-id139491961?s=2048x2048",
        "https://media.gettyimages.com/photos/this-picture-taken-on-december-17-2016-shows-katrina-smith-holding-picture-id630320438?s=2048x2048"
    ]
    return stockImageArr[index];
}