# Point Mutations
# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.
#
# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.
#
# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
#
# This is called the 'Hamming distance'
#
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^

# The Hamming distance between these two DNA strands is 7.
#
# Write a program that can calculate the Hamming difference between two DNA strands.

# def mutation_calculator
#
#   hamming_distance = 0
#
#   original_dna = %w[G A G C C T A C T A A C G G G A T]
#   mutated_dna = %w[C A T C G T A A T G A C G G C C T]
#
#   original_dna.each do |original_nucleotide|
#     mutated_dna.each do |mutated_nucleotide|
#       if original_nucleotide != mutated_nucleotide
#         hamming_distance += 1
#       end # if
#     end # mutated_dna loop
#   end # original_dna loop
#
#   puts "Hamming distance is #{ hamming_distance }"
# end

# mutation_calc

# ///////////////////////////// LINNA'S ANSWER //////////////////////////////////

def point_mutations(string1, string2)
  difference = 0

  string1.chars.each_with_index do |letter, index|
    if letter != string2[index]
      diference += 1
    end # if statement
  end # string1

  puts "The hamming distance between #{ string1 } and #{ string2 } is #{ difference }."

end

# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT

point_mutations("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT")
