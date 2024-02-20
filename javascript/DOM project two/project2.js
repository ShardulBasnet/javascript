let form = document.querySelector('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 
            let height = parseInt(document.getElementById("height").value);
            let weight = parseInt(document.getElementById("weight").value);
            let result = document.querySelector("#results");
            let weightGuide = document.querySelector(".weightguide"); 

            if (height === "" || height < 0 || isNaN(height) || weight === "" || weight < 0 || isNaN(weight)) {
                result.innerHTML = "Invalid value";
                result.style.color = "red";
            } else {
                let bmi = weight / ((height / 100) ** 2);
                result.innerHTML = "BMI: " + bmi.toFixed(2);
                result.style.color = "black"; // Reset the color

                // Display weight guide based on BMI
                if (bmi < 18.6) {
                    weightGuide.innerHTML = "Underweight";
                } else if (bmi > 24.9) {
                    weightGuide.innerHTML = "Overweight";
                } else {
                    weightGuide.innerHTML = "Normal weight";
                }
            }
        });