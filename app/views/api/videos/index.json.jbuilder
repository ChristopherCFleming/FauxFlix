@videos.each do |video|
    json.extract! :title, :description, :video
end
