function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurant = '';
      let avgSalary = 0;
      let bestSalary = 0;
      let currAvgSalary = 0;
      let output = {};

      for (const line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workers = restaurantInfo[0].split(', ');

         for (const worker of workers) {
            let [name, salary] = worker.split(' ');
            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            } 
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }
         }
      }
      let entries = Object.entries(output);

      for (const entry of entries) {
         let key = entry[0];
         let values = Object.values(entry[1]);

         for (const [name, salary] of values) {
            bestSalary += salary;
         }
         avgSalary = bestSalary / values.length;

         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestRestaurant = key;
            bestSalary = 0;
         }
      }
      let result = Object.entries(output[bestRestaurant]).sort((a, b) => b[1] - a[1]);
      let print = '';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]}`);
      document.querySelector('bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${currAvgSalary.toFixed(2)} BestSalary: ${result[0][1].toFixed(2)}`;

   }
}

// ["PizzaHut - Peter
// 500, George 300, Mark
// 800",
// "TheLake - Bob 1300,
// Joe 780, Jane 660"]