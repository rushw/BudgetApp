''' Program make a calculator that takes a yearly salary and breaks it down in categories for budgeting '''
UsertotalExpenses = "y"
monthlySalary = 0
monthlyExpenses = 0               
while True:
   print("Select a goal.")
   print("1.Short term goals")
   print("2.Long term goals")
   print("3.Investments")
   print("4.Exit")
   choice = int(input("Enter your choice: "))
   while UsertotalExpenses == "y":
            monthlySalary = float( input("Enter Mouthly Salary: ") ) 
            if (choice>=1 and choice<=3):
                if choice == 1:
                    print("Monthly salary : ", monthlySalary )
                    res = monthlySalary * 0.5
                    print("Monthly expenses : ", res )
                    res = monthlySalary * 0.15
                    print("Monthly retirement : ", res )
                    res = monthlySalary * 0.05
                    print("Rainy day fund : ", res )
                    res = monthlySalary * 0.2
                    print("Short term goal : ", res )
                    res = monthlySalary * 0.1 
                    print("Play money : ", res )
                elif choice == 2:
                    print("Monthly salary : ", monthlySalary )
                    res = monthlySalary * 0.5
                    print("Monthly expenses : ", res )
                    res = monthlySalary * 0.15
                    print("Monthly retirement : ", res )
                    res = monthlySalary * 0.05
                    print("Rainy day fund : ", res )
                    res = monthlySalary * 0.15
                    print("Long term goal : ", res )
                    res = monthlySalary * 0.15
                    print("Play money : ", res )
                else:
                    print("Monthly salary : ", monthlySalary )
                    res = monthlySalary * 0.5
                    print("Monthly expenses : ", res )
                    res = monthlySalary * 0.1
                    print("Monthly retirement : ", res )
                    res = monthlySalary * 0.05
                    print("Rainy day fund : ", res )
                    res = monthlySalary * 0.2
                    print("Investment  : ", res )
                    res = monthlySalary * 0.15
                    print("Play money : ", res )
            elif choice == 4:
                break
            else:
                break


                    
            
                    

# 3. Budget App

# Write a program that asks a user to eneter the amount that he or she has
# budgeted. A loop should then prompt the user to enter each of
# his or her expenses and keep a running total. When the loop
# Finishes, the program should display the amount that the user has
# budgeted.

# Starting out with python. Third Edition. Shenniece Williams
    
          
