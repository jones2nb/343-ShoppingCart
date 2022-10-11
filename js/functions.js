/* define your functions here */

function calculateTotal(q, p) {
    return q * p;
}

function outputCartRow(item, total) {
    const {
        product: { title, filename, price },
        quantity
    } = item

    const row = ` <tr>
                <td><img src="images/${filename}"></td>
                <td>${title}</td>
                <td>${quantity}</td>
                <td>${price}</td>
                <td>${total}</td>
                </tr>
                <tr class="totals">
                <td colspan="4">Subtotal</td>
                <td>$550.00</td>
                </tr>`;
    document.write(row);
}

function outputTableBody() {
    let subTotal = 0;
    for (let item of cart) {
        let total = calculateTotal(item.quantity, item.product.price);
        outputCartRow(item, total);
        subTotal += total;
    }

}



