#include <stdio.h>

void swap(int *a, int *b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(int a[], int l, int r)
{
    int pivot = a[r], i = l - 1, j;
    for (j = l; j < r; j++)
    {
        if (a[j] < pivot)
        {
            i++;
            swap(&a[i], &a[j]);
        }
    }
    swap(&a[i + 1], &a[r]);
    return i + 1;
}

void quick(int a[], int l, int r)
{
    if (l < r)
    {
        int p = partition(a, l, r);
        quick(a, l, p - 1);
        quick(a, p + 1, r);
    }
}

int main()
{
    int a[20], n, i;

    scanf("%d", &n);
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);

    quick(a, 0, n - 1);

    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
}
