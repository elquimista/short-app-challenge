class ShortUrl < ApplicationRecord

  CHARACTERS = [*'0'..'9', *'a'..'z', *'A'..'Z'].freeze

  validate :validate_full_url

  def self.find_by_short_code(short_code)
    id = 0

    short_code.chars.each do |char|
      id *= CHARACTERS.size
      id += if ('0'..'9').include?(char)
        char.ord - '0'.ord
      elsif ('a'..'z').include?(char)
        char.ord - 'a'.ord + 10
      else
        char.ord - 'A'.ord + 36
      end
    end

    find_by(id: id)
  end

  def short_code
    id = self.id
    short_code = []
    loop do
      short_code << CHARACTERS[id % CHARACTERS.size]
      id /= CHARACTERS.size
      break unless id > 0
    end
    short_code.reverse.join('')
  end

  def update_title!
  end

  private

  def validate_full_url
  end

end