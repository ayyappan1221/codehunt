num=int(input("Enter number:"))
temp=num
rev=0

while num>0:
    digit=num%10
    rev=rev*10+digit
    num//=10

if temp==rev:
    print("Palindrome")
else:
    print("Not Palindrome")
