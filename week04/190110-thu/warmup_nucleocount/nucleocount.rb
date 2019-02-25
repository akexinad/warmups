# Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).
#
# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').
#
# Example:
#
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21

# def count_nucleotides dna
#   a_count = 0
#   c_count = 0
#   g_count = 0
#   t_count = 0
#
#   dna.upcase.each_char do |letter|
#     if dna.include?("A")
#       a_count += 1
#       puts "working"
#       puts a_count
#     else
#       not working
#     end
#   end
# end

# count_nucleotides("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")


# def count_nucleotides dna
#
#   nucleotides = ["A", "C", "G", "T"]
#
#   # nucleotides = {
#   #   "A" => 1,
#   #   "C" => 1,
#   #   "G" => 1,
#   #   "T" => 1,
#   # }
#
#   a_count = 0
#   c_count = 0
#   g_count = 0
#   t_count = 0
#
#
# end
#
# count_nucleotides("ACGT")
#


# dna_array = dna.upcase.chars
#
#
# a = dna_array.count("A").to_i
# a_count += a
# c = dna_array.count("C").to_i
# c_count += c
# g = dna_array.count("G").to_i
# g_count += g
# t = dna_array.count("T").to_i
# t_count += t


# dna.upcase.each_char do |letter|
#   nucleotides.each do |nucleotide|
#     puts key
#     puts value
#     if nucleotides[key] ==
#       a_count += 1
#       puts a_count
#     # elsif nucleotides[value]
#
#
#     end
#   end
# end


# //////////////////////////////// LINNA'S ANSWER ////////////////////////////////////

def count_nucleotides input
  bases = {
    "A" => 0,
    "C" => 0,
    "G" => 0,
    "T" => 0
  }

  dna = []

  input.upcase.each_char do |letter|

    is_nucleotides = false

    bases.each do |key, value|

      if letter == key
        bases[key] += 1
        is_nucleotides = true
      end # if

    end # bases

    if is_nucleotides == false
      dna.push "#{ letter } is not a nucleotide."
    end

  end # input

  bases.each do |key, value|
    dna.push "#{ key }: #{ value }"
  end

  puts bases
  puts dna

end

# count_nucleotides "AsssssssGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"


# ///////////////////// OR ////////////////////////

def count_nucleotides input
  bases = {
    "A" => 0,
    "C" => 0,
    "G" => 0,
    "T" => 0
  }

  dna = []


  input.upcase.each_char do |letter|
    if bases.key? letter
      bases[letter] += 1
    else
      dna.push "#{ letter } is not nucleotide."
  end # input

  bases.each do |key, value|
    dna.push "#{ key }: #{ value }"
  end

  # puts bases
  puts dna

end
