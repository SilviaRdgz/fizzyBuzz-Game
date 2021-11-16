# Fizzybuzz - PXL.Widgets Assignment

The goal is to create a simple Angular application to play the game 'FizzyBuzz'. FizzyBuzz is based off of the classic interview problem, FizzBuzz. The basic idea is you have a counter that increments and displays a number. If the number is divisible by 3 you say Fizz, if the number is divisible by 5 you say Buzz, if the number is divisible by 3 and 5 you say FizzBuzz. Otherwise you just say the number.

For the assignment you should create an application with a counter and some buttons, the counter should be the counter for FizzBuzz and the buttons should represent the possible answers. If the user clicks the correct button (Fizz, Buzz, FizzBuzz or the number) they get a point. You should use as much RxJS as possible to represent these streams of data.

## The approach  I used:
- Only one stream, an interval turned into an observable.
- 3 services.
- UI inspired by 80's arcade games.
- Sound on click events and window onload.
- Hover effects.
- Self built background animations.
- Mobile and desktop view.

## How it looks like:

https://user-images.githubusercontent.com/81960826/142037350-34157083-cd65-4a29-8a11-0e3224548aa3.mp4
