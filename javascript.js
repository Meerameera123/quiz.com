function check()
{var c=0;
var Q1=document.QUIZ.Question1.value;
var Q2=document.QUIZ.Question2.value;
var Q3=document.QUIZ.Question3.value;
var Q4=document.QUIZ.Question4.value;
var Q5=document.QUIZ.Question5.value;
var Q6=document.QUIZ.Question6.value;
var Q7=document.QUIZ.Question7.value;
var Q8=document.QUIZ.Question8.value;
var Q9=document.QUIZ.Question9.value;
var Q10=document.QUIZ.Question10.value;
if(Q1=="Van Rossum")
{c++;}
if(Q2==".py")
{c++;}
if(Q3=="Structured query language")
{c++;}
if(Q4=="Hypertext markup language")
{c++;}
if(Q5=="Indentation")
{c++;}
if(Q6=="External")
{c++;}
if(Q7=="/**/")
{c++;}
if(Q8=="do-while")
{c++;}
if(Q9=="Tuples")
{c++;}
if(Q10=="PYTHON")
{c++;}
document.write("<h1>you scored "+c+" out of 10</h1>")
if(c<6)
{
document.write("Try to work hard");
}
else
{
document.write("Awesome. You are qualified for the next round");
}}























