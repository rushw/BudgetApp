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


if __name__ == '__main__':
    budget = Budget(400, 600, 300, 500, 100, 900)
    budget_json = json.dumps({'monthlySalary': budget.monthlySalary, 'monthlyExpenses': budget.monthlyExpenses,
                              'monthlyRetirement': budget.monthlyRetirement,
                              'monthlyInvestment': budget.monthlyInvestment, 'playMoney': budget.playMoney,
                              'rainyDay': budget.rainyDay})
    print(budget_json)
    sys.stdout.flush()
#    url = 'http://localhost:3000/python/info'
#    headers = {"Accept": "application/json"}
#    response = requests.get(url, data=budget_json)
