document.addEventListener('DOMContentLoaded', function () {
    // Sample menu data
    

    const menuSection = document.getElementById('menu-section');

    // Function to create menu items
    function createMenuItem(category, item) {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menu-item';

        const itemName = document.createElement('span');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = `$${item.price.toFixed(2)}`;

        menuItemDiv.appendChild(itemName);
        menuItemDiv.appendChild(itemPrice);

        return menuItemDiv;
    }

    // Function to create category section
    function createCategorySection(category) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;

        categoryDiv.appendChild(categoryTitle);

        category.items.forEach(item => {
            const menuItem = createMenuItem(category, item);
            categoryDiv.appendChild(menuItem);
        });

        return categoryDiv;
    }

    // Populate menu section with data
    menuData.forEach(category => {
        const categorySection = createCategorySection(category);
        menuSection.appendChild(categorySection);
    });

    // Book a Table button click event
    const bookTableBtn = document.getElementById('book-table-btn');
    bookTableBtn.addEventListener('click', function () {
        alert('Booking a table feature is not implemented in this example.');
        // Implement booking functionality as needed
    });
});
