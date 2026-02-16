let totalSaved = 0;
const goal = 10000;

const depositInput = document.getElementById('deposit');
const addBtn = document.getElementById('addBtn');
const table = document.getElementById('savingsTable');
const progressBar = document.getElementById('progress');

addBtn.addEventListener('click', addDeposit);

function addDeposit() {
    const deposit = parseFloat(depositInput.value);
    if (isNaN(deposit) || deposit <= 0) {
        alert('Enter a valid deposit!');
        return;
    }

    totalSaved += deposit;
    const remaining = Math.max(goal - totalSaved, 0);

    const row = table.insertRow();
    row.classList.add('new-row');

    const dateCell = row.insertCell(0);
    const depositCell = row.insertCell(1);
    const totalCell = row.insertCell(2);
    const remainingCell = row.insertCell(3);

    dateCell.innerText = new Date().toLocaleDateString();
    depositCell.innerText = deposit.toFixed(2);
    totalCell.innerText = totalSaved.toFixed(2);
    remainingCell.innerText = remaining.toFixed(2);

    // Animate progress bar
    const percent = Math.min((totalSaved / goal) * 100, 100);
    progressBar.style.width = percent + '%';

    depositInput.value = '';
}