#!/usr/bin/env python
import sys, json, requests


class Budget(object):
    def __init__(self, monthlySalary, monthlyExpenses, monthlyRetirement, monthlyInvestment, playMoney, rainyDay):
        self.monthlySalary = monthlySalary
        self.monthlyExpenses = monthlyExpenses
        self.monthlyRetirement = monthlyRetirement
        self.rainyDay = rainyDay
        self.monthlyInvestment = monthlyInvestment
        self.playMoney = playMoney

def calculate(yearlySalary, monthlyExpenses_percent, monthlyRetirement_percent, monthlyInvestment_percent, playMoney_percent, rainyDay_percent):
    monthly_salary = int(yearlySalary) / 12
    monthly_Expenses = monthly_salary * monthlyExpenses_percent
    monthly_Retirement = monthly_salary * monthlyRetirement_percent
    monthly_Investment = monthly_salary * monthlyInvestment_percent
    play_Money = monthly_salary * playMoney_percent
    rainy_Day = monthly_salary * rainyDay_percent
    budget = Budget('{0:.2f}'.format(monthly_salary), '{0:.2f}'.format(monthly_Expenses), '{0:.2f}'.format(monthly_Retirement), '{0:.2f}'.format(monthly_Investment), '{0:.2f}'.format(play_Money), '{0:.2f}'.format(rainy_Day))
    return budget

if __name__ == '__main__':
    yearlySalary = sys.argv[1]
    option = sys.argv[2] 

    if option == 'stg':
        budget = calculate(yearlySalary, 0.5, 0.15, 0.05, 0.1, 0.2)
    elif option == 'ltg':
        budget = calculate(yearlySalary, 0.5, 0.15, 0.05, 0.15, 0.15)
    elif option == 'i':
        budget = calculate(yearlySalary, 0.5, 0.1, 0.05, 0.2, 0.15)
    else:
        print "Option does not exist"
    budget_json = json.dumps({'monthlySalary': budget.monthlySalary, 'monthlyExpenses': budget.monthlyExpenses,
                              'monthlyRetirement': budget.monthlyRetirement,
                              'monthlyInvestment': budget.monthlyInvestment, 'playMoney': budget.playMoney,
                              'rainyDay': budget.rainyDay})
    print(budget_json)
    sys.stdout.flush()

