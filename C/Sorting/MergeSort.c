#include <stdio.h>

void merge(int a[], int l, int m, int r)
{
    int i = l, j = m + 1, k = 0, temp[50];

    while (i <= m && j <= r)
    {
        if (a[i] < a[j])
            temp[k++] = a[i++];
        else
            temp[k++] = a[j++];
    }
    while (i <= m)
        temp[k++] = a[i++];
    while (j <= r)
        temp[k++] = a[j++];

    for (i = l, k = 0; i <= r; i++, k++)
        a[i] = temp[k];
}

void sort(int a[], int l, int r)
{
    if (l < r)
    {
        int m = (l + r) / 2;
        sort(a, l, m);
        sort(a, m + 1, r);
        merge(a, l, m, r);
    }
}

int main()
{
    int a[20], n, i;

    printf("Enter n: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);

    sort(a, 0, n - 1);

    printf("Sorted: ");
    for (i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}
