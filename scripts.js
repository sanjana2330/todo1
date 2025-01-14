document.addEventListener('DOMContentLoaded', function() {
    // Add new item
    document.getElementById('addBtn').addEventListener('click', function() {
        const inputValue = document.getElementById('myInput').value;
        if (inputValue === '') {
            alert("You must write something!");
            return;
        }
        addNewItem(inputValue);
        document.getElementById('myInput').value = ''; // Clear input field
    });

    // Function to add new item
    function addNewItem(value) {
        const li = document.createElement('li');
        li.textContent = value;

        // Create and append close button
        const span = document.createElement('span');
        span.textContent = '\u00D7'; // Unicode for multiplication sign (×)
        span.className = 'close';
        span.addEventListener('click', function() {
            li.style.display = 'none'; // Hide the list item
        });
        li.appendChild(span);

        // Toggle checked state on click
        li.addEventListener('click', function() {
            li.classList.toggle('checked');
        });

        document.getElementById('myUL').appendChild(li);
    }
});
