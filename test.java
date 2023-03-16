import java.util.Scanner;




public class test {



    public static void main(String[] args) {

        // Import Scanner

        Scanner input = new Scanner(System.in);



        // Initialize phoneFormatted StringBuilder





        // Initialize another, anotherAddress, and correct

        char another = 'Y', anotherAddress = 'Y', correct = 'N';



        // Initialize ownerAddrBk, addressee, street, cityStateZip, phone, work, and addressBook

        String ownerAddrBk = "", addressee = "", street = "", cityStateZip = "", phone = "", work = "", addressBook = "";



        // Declare and initialize family to "FMAILY"

        String family = String.format("%nFAMILY%n");



        // Declare and initialize friends to "FRIENDS"

        String friends = String.format("%nFRIENDS%n");



        // Declare and initialize Relationship and bookType

        int Relationship = 0, bookType = 0;



        //Prompts and prints program for Address Book follows:



        System.out.print("Begin entering addresses? 'Y' or 'N': ");

        another = input.nextLine().charAt(0);



        if (another != 'Y') {

            System.out.println("Exiting program.");

        } else {

            while (another == 'Y') {

                System.out.printf("%nAddress Book Type:" + "%n%n1. Personal" + "%n2. Business" +

                        "%n%nChoose from the above address book type: ");


                bookType = input.nextInt();

                switch (bookType) {

                    case 1:

                        System.out.printf("%nYou entered %d for %s. Is this correct? " +

                                "'Y' or 'N': ", bookType, "Personal");

                        input.nextLine();

                        correct = input.nextLine().charAt(0);


                        break;


                    case 2:

                        System.out.printf("%nYou entered %d for %s. Is this correct? " +

                                "'Y' or 'N': ", bookType, "Business");

                        input.nextLine();

                        correct = input.nextLine().charAt(0);


                        break;


                    default:

                        System.out.printf("%nYou entered %d which is the wrong address " +

                                "book type. Try again.", bookType);

                        correct = 'N';

                        break;


                }


                while (correct != 'Y') {

                    switch (bookType) {

                        case 1:

                            System.out.printf("%nYou entered %d for %s. Is this correct? " +

                                    "'Y' or 'N': ", bookType, "Personal");

                            input.nextLine();

                            correct = input.nextLine().charAt(0);

                            break;

                        case 2:

                            System.out.printf("%nYou entered %d for %s. Is this correct? " +

                                    "'Y' or 'N': ", bookType, "Business");

                            input.nextLine();

                            correct = input.nextLine().charAt(0);

                            break;


                        default:


                            break;

                    }

                    correct = input.nextLine().charAt(0);

                }


                addressBook = String.format("%n%n%S ADDRESS BOOK FOR ", bookType == 1 ?

                        "personal" : "business");

                do {

                    System.out.print("Enter your name: ");

                    ownerAddrBk = input.nextLine();

                    System.out.printf("You entered %s. Is this correct? 'Y' or 'N': ", ownerAddrBk);

                    correct = input.nextLine().charAt(0);

                } while (correct != 'Y');

                addressBook += String.format("%S%n", ownerAddrBk);


                do {

                    System.out.print("Enter the name of the addressee: ");

                    addressee = input.nextLine();

                    System.out.printf("You entered %s. Is this correct? 'Y' or 'N': ", addressee);

                    correct = input.nextLine().charAt(0);

                } while (correct != 'Y');


                do {

                    System.out.print("Enter the street of the addressee: ");

                    street = input.nextLine();

                    System.out.printf("You entered %s. Is this correct? 'Y' or 'N': ", street);

                    correct = input.nextLine().charAt(0);

                } while (correct != 'Y');


                do {

                    System.out.print("Enter the city, state and zip code for " + addressee +

                            " in the correct format: ");

                    cityStateZip = input.nextLine();

                    System.out.printf("You entered %s. Is this correct? 'Y' or 'N': ", cityStateZip);

                    correct = input.nextLine().charAt(0);


                } while (correct != 'Y');

                String phoneNumber;
                do {

                    System.out.printf("Enter the 10 digit phone number for " + addressee +

                            " without dashes or parentheses: ");

                    phone = input.nextLine();

                    phoneNumber = phone.substring(0, 3) + "-" + phone.substring(3, 6) + "-" + phone.substring(6);


                    System.out.println("Formatted phone number: " + phoneNumber);


                    System.out.printf("You entered %s. Is this correct? 'Y' or 'N': ", phoneNumber);

                    correct = input.nextLine().charAt(0);

                } while (correct != 'Y');


                do {

                    System.out.printf("%nRelationship of the addressee: " + "%n%n1. Family " + "%n%n2. Friend"

                            + "%n%n3. Work %n%n");

                    Relationship = input.nextInt();

                    input.nextLine();


                    switch (Relationship) {

                        case 1:

                            System.out.printf("%nYou entered %d for %s. Is this correct? 'Y' or 'N': ",

                                    Relationship, Relationship == 1 ? "Family" : "Friends");

                            correct = input.nextLine().charAt(0);

                            break;

                        case 2:

                            System.out.printf("%nYou entered %d for %s. Is this correct? 'Y' or 'N': ",

                                    Relationship, Relationship == 2 ? "Friends" : "Work");

                            correct = input.nextLine().charAt(0);

                            break;

                        case 3:

                            System.out.printf("%nYou entered %d for %s. Is this correct? 'Y' or 'N': ",

                                    Relationship, Relationship == 3 ? "Work" : "Friends");

                            correct = input.nextLine().charAt(0);

                            break;

                        default:

                            System.out.printf("%nYou entered %d which is the wrong address book type. "

                                    + "Try again. %n", Relationship);

                            correct = 'N';

                    }

                } while (correct != 'Y');


                String format = String.format("%nAddressee: %s" + "Street: %s" + "City, State, Zip: %s"

                        + "%n Phone: %s%n", addressee, street, cityStateZip, phoneNumber);
                switch (Relationship) {

                    case 1:

                        family += format;

                        break;


                    case 2:

                        friends += format;

                        break;


                    case 3:

                        work += format;

                        break;

                }

                System.out.printf("%n Do you want to enter another address? 'Y' or 'N'. ");

                anotherAddress = input.nextLine().charAt(0);


                while (anotherAddress == 'Y') ;

                {

                    switch (bookType) {

                        case 1:

                            System.out.printf("%s" + "%s" + "%s", addressBook, family, friends);

                            break;


                        case 2:

                            System.out.printf("%s" + "%s", addressBook, work);

                            break;

                    }

                }

                // Process address book entry

            }

            while (another == 'Y');

            {

                System.out.printf("%sDo you want to create address book? 'Y' or 'N'. ");

                another = input.nextLine().charAt(0);



            }
        }

    }

}