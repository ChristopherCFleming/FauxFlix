arr = [];

@lists.each do |list|
    arr.push(list.video_id);
end

json.video_ids arr