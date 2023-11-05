const itemsPerPage = 3;
const items = 1
const totalPages = 10
let currentPage = 1;

function displayItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    for (let i = 0; i < items.length; i++) {
        if (i >= startIndex && i < endIndex) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}

function createPaginationButtons() {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';

    
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.className = 'prev';
    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            displayItems();
        }
    });
    pagination.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', function () {
            currentPage = i;
            displayItems();
        });
        pagination.appendChild(button);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.className = 'next';
    nextButton.addEventListener('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            displayItems();
        }
    });
    pagination.appendChild(nextButton);

    document.body.appendChild(pagination);
}

displayItems();

createPaginationButtons();
