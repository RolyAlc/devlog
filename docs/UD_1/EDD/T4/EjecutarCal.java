/*package com.roly.edd;

import java.util.InputMismatchException;
import java.util.Scanner;

public class EjecutarCal {
    static Scanner teclat = new Scanner(System.in);

    public static void main(String[] args) {
        try {
            System.out.println("Dime dos valores: ");
            int a = teclat.nextInt();
            int b = teclat.nextInt();
            teclat.nextLine();

            System.out.println("Dime un operador (+, -, *, /): ");
            char operador = teclat.nextLine().charAt(0);

            switch (operador) {
                case '+':
                    System.out.println("Suma: " + a + " + " + b + " = " + Calculadora.sumar(a, b));
                    break;
                case '-':
                    System.out.println("Resta: " + a + " - " + b + " = " + Calculadora.restar(a, b));
                    break;
                case '*':
                    System.out.println("Multiplicación: " + a + " * " + b + " = " + Calculadora.multiplicar(a, b));
                    break;
                case '/':
                    System.out.println("División: " + a + " / " + b + " = " + Calculadora.dividir(a, b));
                    break;
                default:
                    System.out.println("Operador no válido");
            }
        } catch (InputMismatchException e) {
            System.out.println("Error en la entrada de datos");
        } catch (ArithmeticException e) {
            System.out.println(e.getMessage());
        }
    }
}
*/