
function run() {
    var index = Math.floor(Math.random() * 10);
    return getBull(index);
}

function getBull(index) {
    var stockImageArr = [
        "https://media.gettyimages.com/photos/bull-charging-across-sand-creating-dust-cloud-picture-id497335049?s=2048x2048",
        "https://media.gettyimages.com/photos/longhorn-steer-in-grassy-field-under-blue-sky-picture-id172184670?s=2048x2048",
        "https://media.gettyimages.com/photos/portrait-of-a-bull-at-a-rodeo-picture-id760155361?s=2048x2048",
        "https://media.gettyimages.com/photos/lonely-highland-cattle-on-a-country-road-picture-id598167450?s=2048x2048",
        "https://media.gettyimages.com/photos/bull-in-madrid-picture-id469329313?s=2048x2048",
        "https://media.gettyimages.com/photos/young-bull-in-las-ventas-madrid-picture-id133962253?s=2048x2048",
        "https://media.gettyimages.com/photos/statue-of-a-bull-picture-id73829983?s=2048x2048",
        "https://media.gettyimages.com/photos/bull-picture-id150019720?s=2048x2048",
        "https://media.gettyimages.com/photos/camargue-bulls-running-across-water-aigues-mortescamargue-gard-france-picture-id619138180?s=2048x2048",
        "https://media.gettyimages.com/photos/raging-bull-chasing-bull-rider-cowboy-in-rodeo-arena-picture-id846221432?s=2048x2048"
    ]

    return stockImageArr;
}
