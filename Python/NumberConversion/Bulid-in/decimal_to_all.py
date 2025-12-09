# decimal_conversion_builtin.py

num=int(input("Enter a decimal number: "))

binary=bin(num)[2:]
octal=oct(num)[2:]
hexadecimal=hex(num)[2:].upper()

print("\n--- Conversion Result ---")
print("Binary      =",binary)
print("Octal       =",octal)
print("Hexadecimal =",hexadecimal)
