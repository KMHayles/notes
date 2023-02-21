public class Dish {
    private int Cost;  //double costInCents
    private String Name;
    private boolean Recommended;

    public void printSummary(){
        System.out.printf("%d %s %s %n", Cost, Name, Recommended);
    };

    public void changeDish(String Name) {
        if (Name.isEmpty()) {
            this.Name ="";
        } else {
            this.Name = Name;
        }
    }

    public void changeDish(int Cost) {
        this.Cost = Cost;
    }

    public void changeDish(boolean Recommended) {
        this.Recommended = Recommended;
        }

    }

//    public static void main(String[] args) {
//        Dish dish = new Dish();
//        dish.Cost = 1;
//        dish.Name = "Day in the Life";
//        dish.Recommended = true;
//
//        }

//    }

    /*OOP SHORT ASSIGNMENT #1 --

        Include an integer property called “costInCents”
        Include a string property called “nameOfDish”
        Include a boolean property called “wouldRecommend”
        Include a method called “printSummary” with a void return type
        this method will use a single printf method to print out the values of each of the instance properties in the following format:
        Cost: COST_IN_CENTS_HERE
        Name: NAME_OF_DISH_HERE
        Recommended: BOOLEAN_VALUE_OF_WOULD_RECOMMEND_HERE



        Create another class called DishTest
        Add a main method and inside the method...
        1) instantiate a Dish object and assign to a variable called dish1
        2) assign creative values for each of the properties
        3) test the printSummary() method by invoking it and checking if all instance values are correctly printed

     */

    /* SHORT ASSIGNMENT #2 --
        Create a class of static members (variables and methods) called DishTools
  - AVERAGE_COST_OF_DISH_IN_CENTS - an integer constant set to 1300
          - shoutDishName() - that takes in a Dish object and prints out the name in all caps
          - analyzeDishCost() - that takes in a Dish object and will print out either “More expensive than average” or “Less expensive than average”, depending on the value of the dish costInCents compared to AVERAGE_COST_OF_DISH_IN_CENTS
          - flipRecommendation() - that takes in a Dish object and reverses the wouldRecommend boolean value
          Try out the DishTools methods with Dish objects in the DishTest main method
          BONUS - add some static methods to the Dish class that compares two dishes in some way

     */
