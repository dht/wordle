```
Write a program that accepts two “5 letters long” words and do the following:
Iterate over user input, and output a 5 letters word, using the following: "!" if the input letter is at the same spot as the letter in the secret word "?" if the input letter is present in the secret word but not in the right position "*" otherwise (wrong letter)
wordle("horse", "human")
!****
wordle("horse", "hotel")
!!*?*
wordle("horse", "house")
!!*!!
wordle("horse", "horse")
!!!!!

Now let’s add another complication - I want each letter in secret, to be “used” up to one time, i.e - not give “double hints”. We prioritize! over ?, otherwise - use the order in the “guess” word. That is:
wordle("drake", "awake")
**!!!
wordle("abbbb", "caaaa"
*?***
wordle("ababc", "babad")
????*

```
