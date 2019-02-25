# Atbash Cipher
# The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
#
# An Atbash cipher for the Latin alphabet would be as follows:
#
# Plain:  abcdefghijklmnopqrstuvwxyz
# Cipher: zyxwvutsrqponmlkjihgfedcba
# It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
#
# In Ruby, write a program which seeks a user's input, and encodes/decodes the input.
#
# Examples
# Encoding "test" gives "gvhg"
# Decoding "gvhg" gives "test"

# PSEUDO CODE =====================================================
# You input the original text
# We need to take out the index positions of the text letters relative to the alphabet
# Then we use those indexes to give us the values in the reverse alphabet.
# Push those values into a new array.
# Join.


# if the value of index i in text === value of index i in letters, then push into empty array
#
# I need the individual letter of string, and the index of that letter in the letters array.
# =====================================================================

#
# class Cipher
#
#   def initialize
#     @string = encode
#   end
#
#   def encode
#     matches_array = []
#     cipher_array = []
#     letters = ("A".."Z").to_a
#     letters_rev = ("A".."Z").to_a.reverse
#     string.chars.each do |letter|
#       l = letter.upcase
#       i = letters.index(l)
#       matches_array.push(i)
#     end
#     matches_array.each do |value|
#       c = letters_rev[value]
#       cipher_array.push(c)
#       cipher = cipher_array.join.downcase
#       puts "#{ string } is now coded as #{ cipher }"
#     end
#   end
#
#   def decode
#     matches_array = []
#   end
# end
#
#
#
#
#
# def cipher_maker string
#   matches_array = []
#   cipher_array = []
#   letters = ("A".."Z").to_a
#   letters_rev = ("A".."Z").to_a.reverse
#
#   string.chars.each do |letter|
#     l = letter.upcase
#     # puts letters.index(l)
#     i = letters.index(l)
#     matches_array.push(i)
#     # puts "The matches: #{ matches_array }"
#   end
#
#   # puts "The matches AGAIN: #{ matches_array }"
#
#   matches_array.each do |value|
#     # puts value
#     # puts letters_rev[value]
#     c = letters_rev[value]
#     cipher_array.push(c)
#     # puts cipher_array.join.downcase
#     @cipher = cipher_array.join.downcase
#   end
#
#   puts "#{ string } is now coded as #{ @cipher }"
#
# end
#
# cipher_maker "danny"


# //////////////////////// LINNA'S ANSWER ///////////////////////////////////

class Atbash

  def initialize(input)
    @word = input.downcase
    @alphabet = ('a'..'z').to_a
    @reverse = @alphabet.reverse
  end

  def encode
    message = ''

    @word.each_char do |letter|
      index = @alphabet.index(letter)
      puts index
      cipher_character = @reverse[index]
      message << cipher_character
    end #loop

    message

  end

end

puts "What's your secret word?"
word = gets.chomp

cipher = Atbash.new(word)
puts cipher.encode
