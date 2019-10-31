
function run() {
    var index = Math.floor(Math.random() * 10);
    return getFerret(index);
}

function getFerret(index){
    var stockImageArr = [
        "https://media.gettyimages.com/photos/asian-smallclawed-otter-asian-smallclawed-otter-aonyx-cinerea-asian-picture-id157894857?s=2048x2048",
        "https://media.gettyimages.com/photos/otter-yamato-picture-id993289250?s=2048x2048",
        "https://media.gettyimages.com/photos/sea-otter-picture-id1169062365?s=2048x2048",
        "https://media.gettyimages.com/photos/sea-otter-floating-in-monterey-bay-picture-id663432538?s=2048x2048",
        "https://media.gettyimages.com/photos/closeup-portrait-of-otter-picture-id938903256?s=2048x2048",
        "https://media.gettyimages.com/photos/sea-otter-sleeping-closeup-picture-id937070246?s=2048x2048",
        "https://media.gettyimages.com/photos/neotropical-otter-eating-fish-picture-id520529530?s=2048x2048",
        "https://media.gettyimages.com/photos/closeup-of-an-otter-picture-id638283470?s=2048x2048",
        "https://media.gettyimages.com/photos/close-up-of-european-river-otter-leaving-water-of-stream-picture-id1141721725?s=2048x2048"
    ]
    return stockImageArr[index];
}