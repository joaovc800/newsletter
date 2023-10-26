export async function carouselVideos(data){
    
    var videos = ``
    data.forEach(json => {
        videos += `
            <div class="item">
                <iframe class="w-100 rounded"
                    src="${json.url}"
                    height="300"
                    title="YouTube video player" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                >
                </iframe> 
            </div>
        `
    });

    return videos
}

export async function Highlights(data){
    
    var highlights = ``
    data.forEach(json => {
        highlights += `
            <div class="card shadow">
                <div class="card-horizontal">
                    <div class="card-body">
                        <iframe class="rounded"
                            src="${json.url}"
                            height="180"
                            width="300"
                            title="YouTube video player" 
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        >
                        </iframe> 
                        <h4 class="card-title">${json.title}</h4>
                        <p class="card-text">${json.describe}</p>
                        <p class="text-end fw-bold"><a href="#" class="card-link text-end">Read More →</a></p>
                    </div>
                </div>
            </div>
        `
    });

    return highlights
}