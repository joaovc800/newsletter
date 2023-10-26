export function carouselVideos(data){
    
    var videos = ``
    data.forEach(json => {
        videos += `
            <div class="item">
                <div class="card border-1 shadow">
                    <div class="embed-responsive embed-responsive-4by3">
                        <iframe class="w-100 rounded"
                            src="${json.url}"
                            height="300"
                            title="YouTube video player" 
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe> 
                    </div>
                </div>
            </div>
        `
    });

    return videos
}