const electricItems = [
    {
        type: "Laptop",
        categories: [
            {
                name: "Dell",
                models: [
                    { name: "XPS 13", year: 2021 },
                    { name: "Inspiron 15", year: 2022 }
                ]
            },
            {
                name: "Acer",
                models: [
                    { name: "Aspire 5", year: 2021 },
                    { name: "Predator Helios 300", year: 2022 }
                ]
            },
            {
                name: "Lenovo",
                models: [
                    { name: "ThinkPad X1", year: 2021 },
                    { name: "Legion 5", year: 2022 }
                ]
            }
        ]
    },
    {
        type: "AC",
        categories: [
            {
                name: "Panasonic",
                models: [
                    {
                        name: "Inverter AC",
                        subcategories: [
                            { name: "CS/CU-NU18WKYW", year: 2021 },
                            { name: "CS/CU-NU24VKYW", year: 2022 }
                        ]
                    }
                ]
            },
            {
                name: "Samsung",
                models: [
                    {
                        name: "Wind-Free AC",
                        subcategories: [
                            { name: "AR18TY5QAWK", year: 2021 },
                            { name: "AR24TY5QAWK", year: 2022 }
                        ]
                    }
                ]
            },
            {
                name: "Ditrin",
                models: [
                    {
                        name: "Split AC",
                        subcategories: [
                            { name: "DIT24X", year: 2021 },
                            { name: "DIT18X", year: 2022 }
                        ]
                    }
                ]
            }
        ]
    }
];
function createList(items, level = 0) {
    const container = document.createElement('div');
    if (level === 1) {
        const topLevelNamesContainer = document.createElement('div');
        const topLevelNames = items.map(item => 
            item.name).join(', ');
        console.log(topLevelNames);
        topLevelNamesContainer.textContent = topLevelNames;
        container.appendChild(topLevelNamesContainer);
        console.log(container.appendChild(topLevelNamesContainer));
    }

    const ul = document.createElement('ul');

    items.forEach(item => {
        const li = document.createElement('li');
        const itemName = document.createElement('span');
        itemName.textContent = item.type;
        li.appendChild(itemName);
               if (item.categories && level < 2) {
            const sublist = createList(item.categories, level + 1);
            li.appendChild(sublist);
            console.log(li.appendChild(sublist))
        } 
        else if (item.models && level < 2) {
            const modelsContainer = document.createElement('div');
            item.models.forEach(model => {
                const modelElement = document.createElement('div');
                modelElement.textContent = `${model.name}, ${model.year}`;
                modelsContainer.appendChild(modelElement);
            });
            li.appendChild(modelsContainer);
        }
        ul.appendChild(li);
    });
    container.appendChild(ul);
    return container;
}
document.body.appendChild(createList(electricItems));