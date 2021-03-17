arr = [];

@mylists.each do |mylist|
    arr.push(mylist.video_id);
end

json.video_ids arr