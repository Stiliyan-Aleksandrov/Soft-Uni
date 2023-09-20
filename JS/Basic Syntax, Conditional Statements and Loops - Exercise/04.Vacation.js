function vacation(people, type, day) {
    let singularPrice = 0;

    if (day == 'Friday') {
        if (type == 'Students') {
            singularPrice += 8.45;
        } else if (type == 'Business') {
            singularPrice += 10.90;
        } else if (type == 'Regular') {
            singularPrice += 15.00;
        }
    } else if (day == 'Saturday') {
        if (type == 'Students') {
            singularPrice += 9.80;
        } else if (type == 'Business') {
            singularPrice += 15.60;
        } else if (type == 'Regular') {
            singularPrice += 20.00;
        }
    } else if (day == 'Sunday') {
        if (type == 'Students') {
            singularPrice += 10.46;
        } else if (type == 'Business') {
            singularPrice += 16.00;
        } else if (type == 'Regular') {
            singularPrice += 22.50;
        }
    }

    let totalPrice = singularPrice * people;

    if (type === 'Students' && people >= 30) {
        totalPrice *= 0.85;
    } else if (type === 'Business' && people >= 100) {
        totalPrice -= 10 * singularPrice;
    } else if (type === 'Regular' && people >= 10 && people <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday")