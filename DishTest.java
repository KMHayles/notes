import java.util.concurrent.CompletionStage;

public class DishTest {


    public static void main(String[] args) {

        Dish dish1 = new Dish();
        dish1.changeDish(5);
        dish1.changeDish("steak");
        dish1.changeDish(true);

//        Dish dish2 = new Dish();
//        dish2.Cost = 12;
//        dish2.Name = "steak and potatoes";
//        dish2.Recommended = false;

        dish1.printSummary();
//        dish2.printSummary();

        DishTools tools = new DishTools();

        System.out.println();


    }




}
