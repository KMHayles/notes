public class ExceptionsTest {
    public static void main(String[] args) {

    String Str = new String("I love Java");
    int length = Str.length();
        System.out.println(Str.length());
        System.out.print("The extracted substring is : ");
        System.out.println(Str.substring(10));

        try {
            ExceptionsLecture es = new ExceptionsLecture();
//          String testString = "This is a test String";
            System.out.println(es.testString.length());
            String newSubString = es.testString.substring(8);

        } catch (IndexOutOfBoundsException iobx){
            System.out.println("this is out of bounds");
//            iobx.printStackTrace();
        } finally { //Can use "finally" as a log to put info on
            System.out.println("Thank you for using this code");
        }

        ExceptionsLecture es = new ExceptionsLecture();
        es.askForAnInteger();
    }
}


//Mini-exercise: Investigate the substring method for String objects in the Java API. Find out what kind of exception it throws. Create a test class with a main method. Set up a try-catch block that defines a string and finds its length. Once you have the length of your string, modify your program so it creates a substring from your original string, but give it an index that doesn't exist so you get the error message.