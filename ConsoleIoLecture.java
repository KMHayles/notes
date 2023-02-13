import java.util.Scanner;

//public class ConsoleIoLecture {
//
//    public static void main(String[] args) {

        // ================================== print() and println()

        // this:
//            System.out.println("here");
//            System.out.println("there");

        // is equivalent to this:
//            System.out.print("here\n");
//            System.out.print("there\n");

        // without the newline characters, print outputs this:
//            System.out.print("here");
//            System.out.print("there");

        // to concatenate, just like JS:
//            System.out.println("Hello" + " " + "World");


        // ================================== printf() / .format()

        // Print a formatted string using the following... printf(formatString, data)

        // same output as print():
//            System.out.printf("Hello");
//            System.out.printf("World!");

        // creating a string variable:
//            String bigBall = "World";
//            System.out.printf("Hello %s %s", "Titan", "Folks");
//            System.out.printf("Hello %S", bigBall); // all caps

        // multiple variables:
//            int three = 3;
//            String typeOfPetGroup = "cats";
//            System.out.printf("I have %d %s.", three, typeOfPetGroup);

        // currency:
//            int currencyPennies = 1000;
//            System.out.printf("I'll sell you swamp land for $%.2f an acre!", currencyPennies / 100.00);

        // String myName = String.format("%s %s", "Justin", "Reich");
//            System.out.println(myName);

        // ================================== IMPORTS

//        Scanner sc = new Scanner(System.in);
//
//        System.out.println("enter something you like");
//
//        String input = sc.nextLine();
//
//        System.out.println("You've entered " + input);

        // ================================== USER INPUT

//         Scanner sc = new Scanner(System.in);
//         System.out.println("Enter your first name!");
//         String firstName =  scanner.next();
//         System.out.println("Enter your last name!");
//         String lastName =  scanner.next();
////         System.out.println("Your name is: " + firstName + " " + lastName);
//         System.out.printf("Your name is: %s %s", firstName, lastName);

        // .next() captures each input separated by a string:
//
//            System.out.println(firstName);
//            System.out.println(lastName);
//            System.out.println(what);

//         .nextInt() captures the first valid int value:
//            System.out.print("Please enter your age: ");
//            int age = sc.nextInt();
//            System.out.println(age);

        // .nextLine():
//            System.out.print("Favorite quote: ");
//            String quote = sc.nextLine();
//            System.out.println(quote);

        // Quirk of using next() then nextLine()...
        // https://stackoverflow.com/questions/13102045/scanner-is-skipping-nextline-after-using-next-or-nextfoo
        // https://coderanch.com/wiki/676482/Scanner-nextLine-gotcha
//            Scanner sc = new Scanner(System.in);
//            System.out.print("Please enter your favorite number: ");
//            int num = sc.nextInt();
//            System.out.println(num);
//            sc.nextLine(); // needed to clear new line character from scanner
//            System.out.print("Please enter your favorite words: ");
//            String words = sc.nextLine();
//            System.out.println(words);
//    }
//
//}


import java.util.Scanner;

//public class ConsoleIoLecture {
//
//    public static void main(String[] args) {
        // ==================== Slide 3

        // no >== ,or <==, or === because only value comparisons are available
        // truthy and falsy values don't exist in Java

        // int x = 2;
        // int y = 3;
        // if (x != y) {
        //     System.out.println("x is less than y");
        // }


        // ==================== Slide 5

        // && will only check second value if first is true
        // & will check both
        // this can be used to check what would otherwise result in a syntax error
        // same comparison process for || and |

        // x will only increment in second condition if first condition is true using &&
        //        int x = 2;
        //        int y = 3;
        //
        //        if (true || ++x == y) {
        //            System.out.println("Equal");
        //        } else {
        //            System.out.println("Not equal");
        //        }
        //        System.out.println(x);


        // ==================== Slide 7

        // DO NOT COMPARE STRINGS WITH == !!!!

        // System.out.println("hello" == "world");

        // Scanner sc = new Scanner(System.in);
        // String cat1 = sc.nextLine();
        // String cat2 = "cat";
        // System.out.println(cat1);
        // System.out.println(cat2);
        // System.out.println(cat1.equalsIgnoreCase(cat2));

        // do use equals(),

//    boolean stringValuesAreEqual = "Test".equals("Tes");
//    System.out.printf("The result is: %b", stringValuesAreEqual);


        // or use equalsIgnoreCase()

//String hello = "hello";
//System.out.println(hello.equalsIgnoreCase("HeLlO"));

        // does not equal

// String tech = "tech";
// System.out.println(!tech.equalsIgnoreCase("tool"));


        // ==================== Slides 8 - 16

        // basically the same as JS :)


//            String caseSwitch = "Fred";
//            switch (caseSwitch) {
//                case "bob":
//                    System.out.println("Case 1");
//                    break;
//                case "fred":
//                    System.out.println("Case 2");
//                    break;
//                default :
//                    System.out.println("Default case");
//                    break;
//            }


//    }
//
//}

public class ConsoleIoLecture {
    // TODO: create a method, sayName, that can take in a single name String input or two name String inputs and will return a greeting message to the user by either their first or first and last name.
    public static String sayName(String name){
        return "hi " + name ;
    }

    public static String sayName(String first, String last){
        return "hi " + first + last;
    }


    public static void main(String[] args) {

        System.out.println(sayName("Kenneth"));
        System.out.println(sayName("Kenneth ", "Hayles"));


// TODO: overload the math exercises from the curriculum exercise to work with both integers and doubles

//public static int add(int num1, int num2) {
//        return num1 + num2;
//        }

    }

}













