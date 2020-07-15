// The challange instruction:

// Mark and Jhon are trying to compare their BMI ( body mass index),
// which is calculated using the formula :
// BMI = mass / height^2 = mass / (height * height).
// (mass in KG and height in meter)

// 1- store Mark's and Jhon's mass and height is variables.
// 2- calculate both their BMIs.
// 3- creat a boolean variable containing information about whether Mark has
// a higher BMI tha Jhon.
// 4- print a string to the console containing thw variable from Step3.
// (sometimes like "IS Mark's BMI higher than Jhon's? true").BMI

let jhonMAss, jhonHeight, MarkMass, MarkHeight;
jhonMAss = 80;
jhonHeight = 1.75;
MarkMass = 75;
MarkHeight = 1.70;

 let BMIJhon = jhonMAss / (jhonHeight * jhonHeight);
 let BMIMark = MarkMass / (MarkHeight * MarkHeight);

 console.log(BMIJhon);
 console.log(BMIMark);

 let BMIHigher = BMIMark > BMIJhon;
 console.log(BMIHigher);

 console.log("Is mark's BMI higher than Jhon's " + "" + BMIHigher);