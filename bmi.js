function bmi(weight, height) {
    let bmiText = ['Underweight', 'Normal', 'Overweight', 'Obese'];
    let bmi = weight / Math.pow(height, 2);

    if(bmi <= 18.5) {
        return bmiText[0];
    } else if(bmi <= 25) {
        return bmiText[1];
    } else if(bmi <= 30) {
        return bmiText[2];
    } else if(bmi > 30) {
        return bmiText[3];
    }


}

// console.log(Math.pow(3, 3))