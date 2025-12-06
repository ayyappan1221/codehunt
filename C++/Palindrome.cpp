#include <iostream>
using namespace std;

int main()
{
    int num, temp, rev = 0, digit;

    cout << "Enter number: ";
    cin >> num;

    temp = num;

    while (num > 0)
    {
        digit = num % 10;
        rev = rev * 10 + digit;
        num /= 10;
    }

    if (temp == rev)
        cout << "Palindrome";
    else
        cout << "Not Palindrome";

    return 0;
}
