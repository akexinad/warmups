# Simple Sums - Ruby
# Write a program that can calculate the sum of the first n elements of the following sequences:
#
# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
# For example:
#
# s1(4) = 0
# s2(4) = 10
# Can you guess what the sum would be if n is infinity?

# s1 = "1 + 2 + 3 + 4 + 5 + 6"
#
# s1 = s1.gsub(" ", "").split(//)
#
# s1.each do |s|
#   puts s1.index(s)
#   # s1_array = []
#   # x = s1[s + 1].to_s + s1[s + 2].to_s
#   # s1_array.push(x)
#   # puts s1_array
# end
#
#
#
# def s1(string)
#
# end


# //////////////////////// LINNA'S ANSWER ///////////////////////////

class SimpleSums

  def initialize num
    @num = num
  end

  def s1
    @num % 2
  end

  def s2
    # (@num * (@num + 1)) / 2
    (1..@num).sum
  end

end

sum = SimpleSums.new(4)

puts sum.s1
puts sum.s2
