num=int(input("Enter decimal number: "))
binary=""

if num==0:
    binary="0"
else:
    while num>0:
        rem=num%2
        binary=str(rem)+binary
        num//=2

print("Binary =",binary)
