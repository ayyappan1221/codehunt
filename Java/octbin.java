import java.util.Scanner;

class OctalToBinary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            int oct = sc.nextInt();
            int dec = 0, p = 0;
            while (oct != 0) {
                int r = oct % 10;
                dec += r * Math.pow(8, p);
                p++;
                oct /= 10;
            }
            int bin = 0, place = 1;
            while (dec != 0) {
                int r = dec % 2;
                bin += r * place;
                place *= 10;
                dec /= 2;
            }
            System.out.println(bin);
        }
    }
}
