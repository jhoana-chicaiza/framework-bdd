Feature: Logging in 

Scenario: Iniciar sesion en la pagina

Given Im on the right page
When I fill the form with my email: "agent@phptravels.com" and my password: "demoagent"
Then I should see the dashboard page 

@probando
Scenario Outline: Scenario Outline for login

Given Im on the right page
When I fill the form with my <Email> and my <Password> 
Then I should see the dashboard page 
Examples:
| Email                | Password |
| agent@phptravels.com | demoagent |
| agent@php.com | agent |
| agent@travels.com | sasas |
