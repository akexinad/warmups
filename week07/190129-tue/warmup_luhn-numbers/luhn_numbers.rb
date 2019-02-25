# Luhn Formula
# Write a program that can take a number and determine whether or not it is valid per the Luhn formula.
#
# The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.
#
# This number must pass the following test:
#
# Counting from rightmost digit (which is the check digit) and moving left, double the value of every second digit. For any digits that thus become 10 or more, subtract 9 from the result.
#
# E.g., 1111 becomes 2121, while 8763 becomes 7733 (from 2×6=12 → 12-9=3 and 2×8=16 → 16-9=7).
#
# Add all these digits together. For example, if 1111 becomes 2121, then 2+1+2+1 is 6; and 8763 becomes 7733, so 7+7+3+3 is 20.
#
# If the total ends in 0 (put another way, if the total modulus 10 is 0), then the number is valid according to the Luhn formula; otherwise it is not valid. So, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).
#
# Write a program that, given a number, can check if it is valid per the Luhn formula.
#
# BONUS:
#
# For an invalid number, add a check digit to make the number valid.
#
# l = Luhn.new(3554)
# l.valid?
# # => false
#
# l = Luhn.new(8763)
# l.valid?
# # => true
# Do this in Ruby.


######################################################################################################
######################################################################################################
######################################################################################################


# class Luhn
#   def initialize num
#     @num = num.to_s.split(//)
#   end
#
#   def check
#     @num.reverse.each_with_index do |val, index|
#       if index % 2 != 0
#         new_val = val * 2
#       end
#
#
#   end
#
# end


# def check_digit number
#   number = number.to_s.split(//)
#   number.reverse.each_with_index do |val, index|
#     @array = []
#     if index % 2 != 0
#       val = val.to_i * 2
#       @array.push val
#     else
#       val = val.to_i
#       @array.push val
#     end
#   puts @array
#   puts "Array sum is #{@array.inject(0, :+)}"
#   end
# end
#
# check_digit 1111


######################################### YANNI'S ANSWER ###################################################
######################################### YANNI'S ANSWER ###################################################
######################################### YANNI'S ANSWER ###################################################

class Luhn
  def initialize number
    @number = number
  end

  def luhnify
    numbers = []
    # @number.digits.chars.each_with_index do |digit, index|
    # OR YOU CAN:
    @number.digits.each_with_index do |digit, index|
      if index.odd?
        digit *= 2
      end

      # OR digit *= 2 if index.odd?

      puts "Digit: #{digit}. Index: #{index}"

      if digit > 9
        digit -= 9
      end

      puts "digit: #{digit}. index: #{index}"
      numbers << digit
    end #loop

    numbers.reverse
  end #def

  def valid?
    num = luhnify

    total = 0
    num.each do |n|
      total += n
    end

    # you can also use num.reduce to get the array's total

    if total % 10 == 0
      puts "#{@number} is a valid luhn number"
    else
      puts "#{@number} is not a valid luhn number"

      puts @number = @number + (10 - (total % 10))

      puts "#{@number} would be a valid luhn number"
    end

  end #def

end #class

l1 = Luhn.new(3558)
p l1.luhnify
p l1.valid?
