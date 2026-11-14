const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

// const hideBlocks = () => {
//   tabBlocks.forEach((item) => {
//     item.classList.remove('active');
//   });
//   tabs.forEach((item) => {
//     item.classList.remove('active')
//   })
// }

// const showBlock = (index = 0) => {
//   tabBlocks[index].classList.add('active');
//   tabs[index].classList.add('active');
// }


// tabsParent.onclick = (event) => {
//   if(event.target.tagName.toLowerCase() == 'button'){
//     const index = [...tabs].indexOf(event.target);
//     hideBlocks();
//     showBlock(index);
//   }
// }

// const array = ['yellow', 'red', 'violet'];

let currentIndex = 0

const showBlock = (index = 0) => {
    currentIndex = index;

    tabBlocks.forEach((block, i) => 
        block.classList.toggle('active', i === index)
    );
    tabs.forEach((tab, i) => 
        tab.classList.toggle('active', i == index)
    );
}

tabsParent.onclick = (event) => {
    const selectedElement = event.target.closest('.tab_content_item');
    if(!selectedElement) return;

    const index = [...tabs].indexOf(selectedElement);
    showBlock(index);
}

setInterval(() => {
    currentIndex++;

    if (currentIndex >= tabs.length) {
        currentIndex = 0;
    }

    showBlock(currentIndex);
}, 3000);