# Wordy Calculator
#
# Write Ruby code that takes word problems in the following formats:
#
#     What is 5 plus 13?
#
#     What is 7 minus 5?
#
#     What is -6 multiplied by 4?
#
#     What is 25 divided by -5?
#
# and returns the answer as an integer.
#
# You should define a Calculator class which uses the constructor function (initialize) to set the question, and an answer method to return the answer.
#
# Use a regular expression to parse the question.
#
# HINT: You will probably want to use Ruby's match method, and in particular a capture group which uses parentheses in the regex, and returns a MatchData array.

class Calculator

  def initialize question
    @question = question
  end

  def matches
    @matches = @question.match(/(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/)
    @matches
  end

  def first_number
    @matches[1].to_i
  end

  def second_number
    @matches[3].to_i
  end

  def operation
    case @matches[2]
    when "plus" then :+
    when "minus" then :-
    when "multiplied by" then :*
    when "divided by" then :/
    end
  end

  def answer
    @answer = first_number.send(operation, second_number)
  end
end

c = Calculator.new("What is 10 divided by 2?")

p c.matches
puts c.first_number
puts c.operation
puts c.second_number
puts c.answer
