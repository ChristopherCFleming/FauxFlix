@videos.each do |video|
    json.set! video.id do
        json.partial! 'api/videos/video', video: video, full_details: false
    end
end