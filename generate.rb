require 'set'
require 'json'

class Generator
  def initialize
    @nouns = File.readlines('nouns.txt')
    @er_words = File.readlines('er_words.txt')
    @result = Set.new
  end

  def generate
    File.readlines('c_words.txt').each do |word|
      word = word.strip
      if word.match?(/er/)
        generate_with_noun(word)
      else
        generate_with_er(word)
      end
    end

    result.to_a
  end

  private

  attr_accessor :nouns, :er_words, :result

  def generate_with_er(word)
    er_words.each do |er|
      result.add("#{word}#{er}".strip)
    end
  end

  def generate_with_noun(word)
    nouns.each do |noun|
      result.add("#{word}#{noun}".strip)
    end
  end
end

File.open('result.txt', 'w') { |fd| fd.write(JSON.generate(Generator.new.generate)) }
