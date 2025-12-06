#include <stdio.h>

int main() {
    int num, temp, rev=0, digit;
    
    printf("Enter number: ");
    scanf("%d",&num);

    temp=num;

    while(num>0){
        digit=num%10;
        rev=rev*10+digit;
        num/=10;
    }

    if(temp==rev)
        printf("Palindrome");
    else
        printf("Not Palindrome");

    return 0;
}
