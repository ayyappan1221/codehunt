import java.util.*;

public class Decimal_to_all {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter decimal number: ");
        int num = sc.nextInt();

        String binary = "";

        if (num == 0) {
            binary = "0";
        } else {
            while (num > 0) {
                int rem = num % 2;
                binary = rem + binary;
                num = num / 2;
            }
        }

        System.out.println("Binary = " + binary);
    }
}
