const getItems = () => {

    const itemSTR = localStorage.getItem("readList");

    if(itemSTR){
        const storeBooks = JSON.parse(itemSTR);
        return storeBooks;
    }else{
        return [];
    }
}

const addItemsToLS = (id) => {

    const alreadyExistBooks = getItems();

    if(alreadyExistBooks.includes(id)){
        alert('list was already Marked for reading');
        return;
    }else{
        alreadyExistBooks.push(id);
        const data = JSON.stringify(alreadyExistBooks);
        localStorage.setItem('readList', data);
    }
}

export {addItemsToLS, getItems};