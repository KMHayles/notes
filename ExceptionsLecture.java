import java.util.Scanner;

public class ExceptionsLecture {

    public String mightBeAnInt = "42";

    public String notAnInt = "I am an Integer";

    public String testString = "This is a Test";

    public void askForAnInteger(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter number:");
        String userInput = scanner.nextLine();
        try {
            int userInputInteger = Integer.parseInt(userInput, 10, 15, 10);
            System.out.println("Your number is " + userInputInteger);

        } catch (NumberFormatException nfx){
            System.out.println("Uh oh, " + nfx.getMessage() + "there is no number!");
        }
    }
    //read ducking the exception//
}
