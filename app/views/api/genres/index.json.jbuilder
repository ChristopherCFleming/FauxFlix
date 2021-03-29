@genres.each do |genre|
    json.set! genre.id do
        json.partial! "genre", genre: genre
    end
end


