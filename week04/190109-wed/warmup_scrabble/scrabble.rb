# Scrabble Score

# Write a program that, given a word, computes the scrabble score for that word.

# scrabble("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.

# Letter Values

# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10

# Extensions
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.

$one = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]
$two = ["D", "G"]
$three = ["B", "C", "M", "P"]
$four = ["F", "H", "V", "W", "Y"]
$five = ["K"]
$eight = ["J", "X"]
$ten = ["Q", "Z"]
$points = 0

# puts 20 + 16 + 5 + 20 + 12 + 4 + 10
# 87 points in total


# def scrabble(word)
#   # puts word
#   split_word = word.upcase.scan /\w/
#   # print split_word
#   one = $one & split_word
#   # print one_point.length
#   one_pt = one.length
#   $points += one.length
#   # puts "Is it 10? #{ $points }."
#
#   two = $two & split_word
#   two_pts = two.length * 2
#   $points += two_pts
#   # puts "Is it 14? #{ $points }."
#
#   three = $three & split_word
#   three_pts = three.length * 3
#   $points += three_pts
#   # puts "Is it 26? #{ $points }."
#
#   four = $four & split_word
#   four_pts = four.length * 4
#   $points += four_pts
#   # puts "Is it 46? #{ $points }."
#
#   five = $five & split_word
#   five_pts = five.length * 5
#   $points += five_pts
#   # puts "Is it 51? #{ $points }."
#
#   eight = $eight & split_word
#   eight_pts = eight.length * 8
#   $points += eight_pts
#   # puts "Is it 67? #{ $points }."
#
#   ten = $ten & split_word
#   ten_pts = ten.length * 10
#   $points += ten_pts
#   # puts "Is it 87? #{ $points }."
#
#   puts "#{ $points } points"
# end

# scrabble("")



# LINNA'S ANSWER

def calc_score word
  scrabble_letters = {
    1 => %w{A E I O U L N R S T},
    2 => %w{D G},
    3 => %w{B C M P},
    4 => %w{F H V W Y},
    5 => %w{K},
    8 => %w{J X},
    10 => %w{Q Z}
  }

  score = 0

  word.upcase.each_char do |letter|
    scrabble_letters.each do |key, value|
      if scrabble_letters[key].include? letter
        score += key
      end
    end
  end
  score
end

#
# def calc_score word
#   scrabble_letters = {
#     "A"=>1, "E"=>1, "I"=>1, "O"=>1, "U"=>1, "L"=>1, "N"=>1, "R"=>1, "S"=>1, "T"=>1,
#     "D"=>2, "G"=>2,
#     "B"=>3, "C"=>3, "M"=>3, "P"=>3,
#     "F"=>4, "H"=>4, "V"=>4, "W"=>4, "Y"=>4,
#     "K"=>5,
#     "J"=>8, "X"=>8,
#     "Q"=>10, "Z"=>10
#   }
#
#   score = 0
#
#   word.upcase.each_char do |letter|
#     score += scrabble_letters[letter]
#   end
#
#   score
#
# end

puts "Enter a word"
input = gets.chomp
output = calc_score input
puts "The word is #{ input } and the score is #{ output }."
